// Japanese Audio Player with Embedded Data URIs & Fallbacks
// Immune to ngrok warning intercepts, mobile network blocks, and browser autoplay quirks!
import { AUDIO_BASE64 } from "@/data/audio-base64";

let currentAudio: HTMLAudioElement | null = null;
let currentSource: AudioBufferSourceNode | null = null;
let audioContext: AudioContext | null = null;
let playCounter = 0;
const audioBufferCache: Map<number, AudioBuffer> = new Map();

// Helper to initialize/resume AudioContext
function getAudioContext(): AudioContext | null {
  if (typeof window === "undefined") return null;
  try {
    if (!audioContext) {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        audioContext = new AudioCtx();
      }
    }
    if (audioContext && audioContext.state === "suspended") {
      audioContext.resume().catch(() => {});
    }
    return audioContext;
  } catch {
    return null;
  }
}

function base64ToArrayBuffer(base64Uri: string): ArrayBuffer {
  const base64 = base64Uri.replace(/^data:audio\/\w+;base64,/, "");
  const binaryString = window.atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes.buffer;
}

export async function playVocabAudio(
  vocabId: number,
  kana: string,
  rate: number = 0.9
): Promise<boolean> {
  if (typeof window === "undefined") return false;

  // Stop any active sound immediately
  stopJapaneseAudio();
  const thisPlayId = ++playCounter;

  const base64Data = AUDIO_BASE64[vocabId];

  // 1. Primary: Embedded Base64 MP3
  if (base64Data) {
    try {
      const audio = new Audio(base64Data);
      currentAudio = audio;
      audio.playbackRate = rate;

      const playPromise = audio.play();
      if (playPromise !== undefined) {
        await playPromise;
        // If another audio was triggered while starting, stop this one
        if (thisPlayId !== playCounter) {
          audio.pause();
          return false;
        }
        return true;
      }
    } catch (err: unknown) {
      // If playback was cancelled because a new sound started or user stopped it, do NOT fallback
      if (err instanceof DOMException && err.name === "AbortError") {
        return false;
      }
      if (thisPlayId !== playCounter) return false;
    }

    // 2. Web Audio API decoding (only if HTML5 Audio was blocked by policy)
    try {
      const ctx = getAudioContext();
      if (ctx && thisPlayId === playCounter) {
        let buffer = audioBufferCache.get(vocabId);
        if (!buffer) {
          const arrayBuffer = base64ToArrayBuffer(base64Data);
          buffer = await ctx.decodeAudioData(arrayBuffer);
          audioBufferCache.set(vocabId, buffer);
        }

        if (thisPlayId !== playCounter) return false;

        const source = ctx.createBufferSource();
        currentSource = source;
        source.buffer = buffer;
        source.playbackRate.value = rate;
        source.connect(ctx.destination);
        source.start(0);
        return true;
      }
    } catch (webAudioErr) {
      console.warn("Web Audio API decode fallback failed:", webAudioErr);
    }
  }

  // 3. Fallback: Browser Web Speech API
  if ("speechSynthesis" in window && thisPlayId === playCounter) {
    try {
      window.speechSynthesis.cancel();
      if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
      }

      const utterance = new SpeechSynthesisUtterance(kana);
      utterance.lang = "ja-JP";
      utterance.rate = rate;
      window.speechSynthesis.speak(utterance);
      return true;
    } catch {
      return false;
    }
  }

  return false;
}

// Alias export for backward compatibility
export async function speakJapanese(text: string, rate: number = 0.9): Promise<boolean> {
  if (typeof window !== "undefined" && "speechSynthesis" in window) {
    try {
      window.speechSynthesis.cancel();
      if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
      }
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "ja-JP";
      utterance.rate = rate;
      window.speechSynthesis.speak(utterance);
      return true;
    } catch {
      return false;
    }
  }
  return false;
}

export function stopJapaneseAudio() {
  playCounter++;
  if (currentAudio) {
    try {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    } catch {}
    currentAudio = null;
  }
  if (currentSource) {
    try {
      currentSource.stop(0);
      currentSource.disconnect();
    } catch {}
    currentSource = null;
  }
  if (typeof window !== "undefined" && "speechSynthesis" in window) {
    try {
      window.speechSynthesis.cancel();
    } catch {}
  }
}

import fs from "fs";
import path from "path";
import https from "https";

const NEW_VOCAB = [
  { id: 42, kana: "わかる", sentenceKana: "にほんご が すこし わかります。" },
  { id: 43, kana: "かく", sentenceKana: "ここ に なまえ を かいて ください。" },
  { id: 44, kana: "よむ", sentenceKana: "まいばん ほん を よみます。" },
  { id: 45, kana: "やすむ", sentenceKana: "すこし やすみましょう。" },
  { id: 46, kana: "のる", sentenceKana: "でんしゃ に のって かいしゃ へ いきます。" },
];

const TOTAL_COUNT = 46;
const audioDir = path.resolve("public", "audio");
if (!fs.existsSync(audioDir)) {
  fs.mkdirSync(audioDir, { recursive: true });
}

function downloadTts(text, targetPath) {
  return new Promise((resolve, reject) => {
    const url = `https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=ja&q=${encodeURIComponent(
      text
    )}`;

    const options = {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        Referer: "https://translate.google.com/",
      },
    };

    https
      .get(url, options, (res) => {
        if (res.statusCode !== 200) {
          reject(new Error(`Failed to download: HTTP ${res.statusCode} for ${text}`));
          return;
        }

        const fileStream = fs.createWriteStream(targetPath);
        res.pipe(fileStream);

        fileStream.on("finish", () => {
          fileStream.close();
          console.log(`Saved ${targetPath} (${text})`);
          resolve();
        });
      })
      .on("error", (err) => {
        reject(err);
      });
  });
}

async function run() {
  console.log(`Downloading audio for new vocabularies (42-${TOTAL_COUNT})...`);
  for (const item of NEW_VOCAB) {
    const vocabFile = path.join(audioDir, `vocab-${item.id}.mp3`);
    const sentenceFile = path.join(audioDir, `sentence-${item.id}.mp3`);

    try {
      await downloadTts(item.kana, vocabFile);
      await new Promise((r) => setTimeout(r, 100));
      await downloadTts(item.sentenceKana, sentenceFile);
      await new Promise((r) => setTimeout(r, 100));
    } catch (e) {
      console.error(`Error downloading for ID ${item.id}:`, e);
    }
  }

  console.log(`Generating audio-base64.ts for ${TOTAL_COUNT} vocabularies...`);
  const vocabB64 = {};
  for (let i = 1; i <= TOTAL_COUNT; i++) {
    const file = path.join(audioDir, `vocab-${i}.mp3`);
    if (fs.existsSync(file)) {
      const b64 = fs.readFileSync(file).toString("base64");
      vocabB64[i] = "data:audio/mp3;base64," + b64;
    } else {
      console.warn(`Missing ${file}!`);
    }
  }
  const vocabContent =
    `// Auto-generated Base64 audio map for ${TOTAL_COUNT} vocabularies\n` +
    "// Completely eliminates network issues, ngrok warning blocks, and mobile CORS restrictions!\n" +
    "export const AUDIO_BASE64: Record<number, string> = " +
    JSON.stringify(vocabB64, null, 2) +
    ";\n";
  fs.writeFileSync(path.resolve("src", "data", "audio-base64.ts"), vocabContent, "utf8");
  console.log("Done generating audio-base64.ts!");

  console.log(`Generating sentence-audio-base64.ts for ${TOTAL_COUNT} example sentences...`);
  const sentenceB64 = {};
  for (let i = 1; i <= TOTAL_COUNT; i++) {
    const file = path.join(audioDir, `sentence-${i}.mp3`);
    if (fs.existsSync(file)) {
      const b64 = fs.readFileSync(file).toString("base64");
      sentenceB64[i] = "data:audio/mp3;base64," + b64;
    } else {
      console.warn(`Missing ${file}!`);
    }
  }
  const sentenceContent =
    `// Auto-generated Base64 audio map for ${TOTAL_COUNT} example sentences\n` +
    "export const SENTENCE_AUDIO_BASE64: Record<number, string> = " +
    JSON.stringify(sentenceB64, null, 2) +
    ";\n";
  fs.writeFileSync(path.resolve("src", "data", "sentence-audio-base64.ts"), sentenceContent, "utf8");
  console.log("Done generating sentence-audio-base64.ts!");
}

run();

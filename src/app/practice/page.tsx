"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import Link from "next/link";
import { VOCABULARY_LIST, Vocabulary } from "@/data/vocabularies";
import { playVocabAudio } from "@/utils/audio";

interface QuizOption {
  text: string;
  isCorrect: boolean;
}

export default function PracticePage() {
  // Test queue and state
  const [queue, setQueue] = useState<Vocabulary[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Scoring & tracking
  const [isRetestMode, setIsRetestMode] = useState(false);
  const [initialRunTotal, setInitialRunTotal] = useState(36);
  const [firstAttemptCorrect, setFirstAttemptCorrect] = useState(0);
  const [wrongVocabs, setWrongVocabs] = useState<Vocabulary[]>([]);
  const [retestWrongVocabs, setRetestWrongVocabs] = useState<Vocabulary[]>([]);

  // Current question interaction
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [options, setOptions] = useState<QuizOption[]>([]);

  // Audio settings
  const [autoPlay, setAutoPlay] = useState(true);
  const [audioSpeed, setAudioSpeed] = useState<number>(0.9);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  // Completion state
  const [isFinished, setIsFinished] = useState(false);

  // Shuffle helper
  const shuffleArray = <T,>(array: T[]): T[] => {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  // Initialize Quiz
  const startQuiz = useCallback((items?: Vocabulary[], retest: boolean = false) => {
    const listToUse = items && items.length > 0 ? items : VOCABULARY_LIST;
    const shuffled = shuffleArray(listToUse);

    setQueue(shuffled);
    setCurrentIndex(0);
    setIsRetestMode(retest);
    setIsFinished(false);
    setSelectedOptionIndex(null);
    setIsAnswered(false);

    if (!retest) {
      setInitialRunTotal(shuffled.length);
      setFirstAttemptCorrect(0);
      setWrongVocabs([]);
      setRetestWrongVocabs([]);
    } else {
      setRetestWrongVocabs([]);
    }
  }, []);

  useEffect(() => {
    startQuiz();
  }, [startQuiz]);

  const currentVocab: Vocabulary | undefined = queue[currentIndex];

  // Generate 5 options whenever currentVocab changes
  useEffect(() => {
    if (!currentVocab) return;

    // Pick 4 wrong options from VOCABULARY_LIST
    const otherVocabs = VOCABULARY_LIST.filter((v) => v.id !== currentVocab.id);
    const shuffledOthers = shuffleArray(otherVocabs);
    const chosenDistractors = shuffledOthers.slice(0, 4);

    const allOptions: QuizOption[] = [
      { text: currentVocab.meaning, isCorrect: true },
      ...chosenDistractors.map((d) => ({ text: d.meaning, isCorrect: false })),
    ];

    setOptions(shuffleArray(allOptions));
    setSelectedOptionIndex(null);
    setIsAnswered(false);

    // Auto-play audio if enabled
    if (autoPlay) {
      playAudio(currentVocab);
    }
  }, [currentIndex, currentVocab, autoPlay]);

  const playAudio = (vocab?: Vocabulary) => {
    const target = vocab || currentVocab;
    if (!target) return;
    setIsPlayingAudio(true);
    playVocabAudio(target.id, target.kana, audioSpeed);
    setTimeout(() => {
      setIsPlayingAudio(false);
    }, 1200);
  };

  const handleSelectOption = (index: number) => {
    if (isAnswered || !currentVocab) return;

    setSelectedOptionIndex(index);
    setIsAnswered(true);

    const isCorrect = options[index].isCorrect;

    if (!isRetestMode) {
      if (isCorrect) {
        setFirstAttemptCorrect((prev) => prev + 1);
      } else {
        setWrongVocabs((prev) => [...prev, currentVocab]);
      }
    } else {
      // In Retest Mode
      if (!isCorrect) {
        setRetestWrongVocabs((prev) => [...prev, currentVocab]);
      }
    }
  };

  const handleNextQuestion = () => {
    if (currentIndex + 1 < queue.length) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setIsFinished(true);
    }
  };

  // Win Rate calculation based on first attempt
  const winRate = useMemo(() => {
    if (initialRunTotal === 0) return 0;
    return Math.round((firstAttemptCorrect / initialRunTotal) * 100);
  }, [firstAttemptCorrect, initialRunTotal]);

  // Start Retest for incorrect words
  const handleStartRetest = () => {
    const listToReview = isRetestMode ? retestWrongVocabs : wrongVocabs;
    if (listToReview.length === 0) return;
    startQuiz(listToReview, true);
  };

  return (
    <div className="py-4 sm:py-8 px-3.5 sm:px-6 max-w-2xl mx-auto space-y-4 sm:space-y-6">
      {/* Top Header / Mode Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-3.5 sm:p-4 rounded-2xl border border-[#e8dfcf] shadow-sm">
        <div className="flex items-center gap-2.5 min-w-0">
          <Link
            href="/"
            className="w-8 h-8 rounded-lg bg-[#f4ede2] text-[#6b5f54] flex items-center justify-center hover:bg-[#e8ded0] active:scale-95 transition-all flex-shrink-0"
            title="Kembali ke Beranda"
          >
            ←
          </Link>
          <div className="min-w-0">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="font-bold text-[#2b2520] text-xs sm:text-base truncate">
                {isRetestMode ? "Sesi Ulang (Remedial)" : "Tes Kosakata"}
              </span>
              {isRetestMode && (
                <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-[#faeae8] text-[#c53d34] font-semibold border border-[#eed0ce]">
                  Fokus Salah
                </span>
              )}
            </div>
            <p className="text-[11px] text-[#7e7166] truncate">
              {isRetestMode
                ? `${queue.length} kata yang perlu diulang`
                : `Total ${initialRunTotal} kosakata`}
            </p>
          </div>
        </div>

        {/* Audio Controls */}
        <div className="flex items-center gap-2 justify-end pt-1 sm:pt-0 border-t sm:border-t-0 border-[#f0e8dc]">
          <button
            type="button"
            onClick={() => setAutoPlay(!autoPlay)}
            className={`px-2.5 py-1.5 rounded-lg text-[11px] sm:text-xs font-medium border transition-colors flex items-center gap-1 active:scale-95 ${
              autoPlay
                ? "bg-[#f4ede2] border-[#dfd2be] text-[#6b5f54]"
                : "bg-white border-[#e0d6c4] text-[#a09488]"
            }`}
          >
            <span>Auto Audio:</span>
            <span className={autoPlay ? "text-[#c53d34] font-bold" : ""}>
              {autoPlay ? "ON" : "OFF"}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setAudioSpeed(audioSpeed === 0.9 ? 0.75 : 0.9)}
            className="px-2.5 py-1.5 rounded-lg text-[11px] sm:text-xs font-medium border border-[#dfd2be] bg-[#f4ede2] text-[#6b5f54] hover:bg-[#ede3d4] active:scale-95 transition-colors"
          >
            Speed: {audioSpeed === 0.9 ? "1.0x" : "0.75x"}
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      {!isFinished && currentVocab ? (
        <div className="space-y-4 sm:space-y-6">
          {/* Progress Bar & Indicators */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-[11px] sm:text-xs text-[#75685d] font-medium px-1">
              <span>
                Soal <strong className="text-[#2b2520]">{currentIndex + 1}</strong> / {queue.length}
              </span>
              {!isRetestMode && (
                <span>
                  Benar: <strong className="text-[#3b7e4f]">{firstAttemptCorrect}</strong> (WR {winRate}%)
                </span>
              )}
            </div>
            <div className="h-2 w-full bg-[#ece5d8] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#c53d34] transition-all duration-300 rounded-full"
                style={{
                  width: `${((currentIndex + 1) / queue.length) * 100}%`,
                }}
              ></div>
            </div>
          </div>

          {/* Question Card */}
          <div className="p-5 sm:p-8 rounded-3xl bg-white border border-[#e8dfcf] shadow-sm text-center space-y-4 sm:space-y-6 relative overflow-hidden">
            {/* Number badge */}
            <div className="absolute top-3 right-3 text-[10px] sm:text-xs px-2 py-0.5 rounded-full bg-[#fbf9f5] border border-[#e8ded0] text-[#8f8175] font-mono">
              #{currentVocab.id}
            </div>

            {/* Kanji & Kana */}
            <div className="space-y-1 sm:space-y-2 pt-1">
              <div className="text-3xl sm:text-5xl font-extrabold text-[#2b2520] font-japanese tracking-wide break-words">
                {currentVocab.kanji}
              </div>
              <div className="text-sm sm:text-lg text-[#7a6d61] font-medium">
                {currentVocab.kana}
              </div>
              <div className="text-xs sm:text-sm font-mono text-[#c53d34] font-semibold">
                {currentVocab.romaji}
              </div>
            </div>

            {/* Audio Button */}
            <div className="flex justify-center">
              <button
                type="button"
                onClick={() => playAudio(currentVocab)}
                aria-label={`Dengarkan pengucapan ${currentVocab.romaji}`}
                className={`px-5 py-2.5 sm:py-2.5 sm:px-6 rounded-full text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-sm transition-all active:scale-95 ${
                  isPlayingAudio
                    ? "bg-[#c53d34] text-white scale-105"
                    : "bg-[#f4ebd9] text-[#784637] hover:bg-[#c53d34] hover:text-white"
                }`}
              >
                <span className="text-base sm:text-lg">🔊</span>
                <span>{isPlayingAudio ? "Memutar Suara..." : "Dengarkan Pengucapan"}</span>
              </button>
            </div>

            <p className="text-[11px] sm:text-xs text-[#8c7e73] italic">
              Pilih arti yang tepat dalam bahasa Indonesia di bawah:
            </p>
          </div>

          {/* 5 Multiple Choice Options (Touch-Friendly) */}
          <div className="space-y-2 sm:space-y-2.5">
            {options.map((opt, idx) => {
              const isSelected = selectedOptionIndex === idx;

              let btnStyle = "bg-white border-[#e0d6c4] text-[#332b25] hover:border-[#c53d34]/60 hover:bg-[#fcfbf8] active:bg-[#f8f5ee]";

              if (isAnswered) {
                if (opt.isCorrect) {
                  // Correct answer is always green
                  btnStyle = "bg-[#e8f5e9] border-[#66bb6a] text-[#1b5e20] font-bold shadow-sm";
                } else if (isSelected && !opt.isCorrect) {
                  // Chosen wrong answer is red
                  btnStyle = "bg-[#ffebee] border-[#ef5350] text-[#c62828] font-bold";
                } else {
                  // Other unselected options dimmed
                  btnStyle = "bg-[#faf8f4] border-[#e8ded0] text-[#9c8e82] opacity-50";
                }
              }

              return (
                <button
                  key={idx}
                  type="button"
                  disabled={isAnswered}
                  onClick={() => handleSelectOption(idx)}
                  className={`w-full min-h-[50px] p-3.5 sm:p-4 rounded-2xl border text-left font-medium text-xs sm:text-sm flex items-center justify-between gap-3 transition-all active:scale-[0.99] ${btnStyle}`}
                >
                  <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                    <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#f4ece0] text-[#6b5e53] text-[11px] sm:text-xs font-bold flex items-center justify-center border border-[#e0d6c4] flex-shrink-0">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="leading-snug break-words">{opt.text}</span>
                  </div>

                  {isAnswered && (
                    <span className="text-xs sm:text-sm flex-shrink-0 font-semibold">
                      {opt.isCorrect ? "✓ Benar" : isSelected ? "✗ Salah" : ""}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Post-Answer Feedback & Next Button */}
          {isAnswered && (
            <div className="p-3.5 sm:p-5 rounded-2xl bg-white border border-[#e2d8c7] shadow-sm space-y-3 sm:space-y-4">
              {currentVocab.exampleSentence && (
                <div className="text-xs bg-[#faf6ee] p-3 sm:p-3.5 rounded-xl border border-[#ebdcc9] space-y-1">
                  <span className="font-semibold text-[#7d4838]">Contoh Kalimat:</span>
                  <p className="font-japanese text-[#2b2520] text-xs sm:text-sm">
                    {currentVocab.exampleSentence.japanese}
                  </p>
                  <p className="text-[#695d52] text-[11px] sm:text-xs">
                    {currentVocab.exampleSentence.indonesian}
                  </p>
                </div>
              )}

              <button
                type="button"
                onClick={handleNextQuestion}
                className="w-full py-3.5 rounded-xl bg-[#c53d34] text-white font-semibold text-sm sm:text-base shadow hover:bg-[#b0342b] active:scale-98 transition-all flex items-center justify-center gap-2"
              >
                <span>
                  {currentIndex + 1 < queue.length ? "Lanjut ke Soal Berikutnya" : "Lihat Hasil Akhir"}
                </span>
                <span>→</span>
              </button>
            </div>
          )}
        </div>
      ) : isFinished ? (
        /* Completion / Results Screen */
        <div className="p-5 sm:p-8 rounded-3xl bg-white border border-[#e8dfcf] shadow-sm text-center space-y-6">
          <div className="space-y-2">
            <div className="text-4xl sm:text-5xl">🎌</div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#2b2520]">
              {isRetestMode
                ? retestWrongVocabs.length === 0
                  ? "Selamat! Remedial Tuntas Sempurna!"
                  : "Sesi Remedial Selesai!"
                : "Tes Kosakata Selesai!"}
            </h2>
            <p className="text-xs sm:text-sm text-[#73665c] max-w-sm mx-auto leading-relaxed">
              {isRetestMode && retestWrongVocabs.length === 0
                ? "Semua kosakata yang sebelumnya salah sekarang sudah berhasil kamu jawab dengan benar!"
                : "Berikut adalah rekap skor akurasi (Win Rate) dan hasil belajarmu."}
            </p>
          </div>

          {/* Win Rate Cards (Responsive 3 Columns) */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 max-w-lg mx-auto">
            <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-[#faf6ee] border border-[#ebdcc9]">
              <span className="text-[10px] sm:text-xs text-[#7d6f63] font-medium block">Win Rate</span>
              <div className="text-xl sm:text-3xl font-extrabold text-[#c53d34] mt-1">
                {winRate}%
              </div>
            </div>

            <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-[#eef7f0] border border-[#d2edd6]">
              <span className="text-[10px] sm:text-xs text-[#3b7e4f] font-medium block">Benar Putaran 1</span>
              <div className="text-xl sm:text-3xl font-extrabold text-[#2e7d32] mt-1">
                {firstAttemptCorrect}
                <span className="text-xs font-normal text-[#608764]">/{initialRunTotal}</span>
              </div>
            </div>

            <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-[#faeae8] border border-[#f5cfca]">
              <span className="text-[10px] sm:text-xs text-[#b83b32] font-medium block">Perlu Diulang</span>
              <div className="text-xl sm:text-3xl font-extrabold text-[#c53d34] mt-1">
                {isRetestMode ? retestWrongVocabs.length : wrongVocabs.length}
              </div>
            </div>
          </div>

          {/* Incorrect Words Review (if any) */}
          {(isRetestMode ? retestWrongVocabs : wrongVocabs).length > 0 && (
            <div className="text-left space-y-2.5 pt-3 border-t border-[#ede4d5]">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-[#2b2520] text-xs sm:text-sm">
                  Kata yang Perlu Dipelajari (
                  {(isRetestMode ? retestWrongVocabs : wrongVocabs).length})
                </h3>
                <span className="text-[10px] text-[#9c8e82]">
                  Dengarkan & pelajari
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-56 overflow-y-auto pr-1">
                {(isRetestMode ? retestWrongVocabs : wrongVocabs).map((item) => (
                  <div
                    key={item.id}
                    className="p-2.5 sm:p-3 rounded-xl bg-[#fdfaf5] border border-[#e8dfcf] flex items-center justify-between gap-2"
                  >
                    <div className="min-w-0">
                      <div className="font-bold text-xs sm:text-sm text-[#2b2520] font-japanese truncate">
                        {item.kanji}{" "}
                        <span className="text-[10px] font-normal text-[#8a7a6e]">
                          ({item.kana})
                        </span>
                      </div>
                      <div className="text-[10px] font-mono text-[#c53d34] truncate">
                        {item.romaji}
                      </div>
                      <div className="text-[11px] font-semibold text-[#5a4f45] truncate">
                        {item.meaning}
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => playAudio(item)}
                      className="w-8 h-8 rounded-full bg-[#f4ebd9] text-[#784637] hover:bg-[#c53d34] hover:text-white active:scale-90 transition-all flex items-center justify-center flex-shrink-0"
                      title="Dengarkan Suara"
                      aria-label={`Dengarkan pengucapan ${item.romaji}`}
                    >
                      🔊
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons (Stacked on Mobile) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 pt-2">
            {(isRetestMode ? retestWrongVocabs : wrongVocabs).length > 0 ? (
              <button
                type="button"
                onClick={handleStartRetest}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#c53d34] text-white font-semibold text-sm sm:text-base shadow hover:bg-[#b0342b] active:scale-98 transition-all"
              >
                Uji Ulang Soal yang Salah (
                {(isRetestMode ? retestWrongVocabs : wrongVocabs).length} Kata)
              </button>
            ) : null}

            <button
              type="button"
              onClick={() => startQuiz()}
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-white border border-[#d8cdb9] text-[#554b42] font-semibold text-xs sm:text-sm hover:bg-[#f5ede0] active:scale-98 transition-colors"
            >
              Ulangi Semua (36 Kata)
            </button>

            <Link
              href="/"
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[#f4ede2] text-[#6b5f54] font-semibold text-xs sm:text-sm hover:bg-[#eae0d2] active:scale-98 transition-colors"
            >
              Kembali ke Beranda
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
}

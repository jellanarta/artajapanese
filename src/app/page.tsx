"use client";

import { useState } from "react";
import Link from "next/link";
import { VOCABULARY_LIST, Vocabulary } from "@/data/vocabularies";
import { playVocabAudio, playSentenceAudio } from "@/utils/audio";

export default function HomePage() {
  const [search, setSearch] = useState("");
  const [activeAudioId, setActiveAudioId] = useState<number | null>(null);
  const [activeSentenceAudioId, setActiveSentenceAudioId] = useState<number | null>(null);
  const [expandedVocabId, setExpandedVocabId] = useState<number | null>(null);

  const filteredVocab = VOCABULARY_LIST.filter(
    (item) =>
      item.romaji.toLowerCase().includes(search.toLowerCase()) ||
      item.meaning.toLowerCase().includes(search.toLowerCase()) ||
      item.kana.includes(search) ||
      item.kanji.includes(search)
  );

  const handlePlayAudio = (vocab: Vocabulary, e?: React.MouseEvent) => {
    e?.stopPropagation();
    setActiveAudioId(vocab.id);
    playVocabAudio(vocab.id, vocab.kana);
    setTimeout(() => {
      setActiveAudioId(null);
    }, 1200);
  };

  const handlePlaySentenceAudio = (vocab: Vocabulary, e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!vocab.exampleSentence) return;
    setActiveSentenceAudioId(vocab.id);
    playSentenceAudio(vocab.id, vocab.exampleSentence.kana);
    setTimeout(() => {
      setActiveSentenceAudioId(null);
    }, 3000);
  };

  const toggleExpand = (id: number) => {
    setExpandedVocabId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="py-6 sm:py-12 px-3.5 sm:px-6 max-w-5xl mx-auto space-y-8 sm:space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-4 sm:space-y-6 pt-2 sm:pt-4">
        {/* Japanese Stamp / Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#f4ebd9] border border-[#dfd4be] text-[#7d4838] text-[11px] sm:text-xs font-semibold tracking-wide">
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#c53d34] animate-pulse"></span>
          <span>JLPT N5 / Basic Vocabulary • 基礎単語</span>
        </div>

        {/* Main Heading */}
        <div className="space-y-2 sm:space-y-3 px-2">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#2b2520] leading-tight">
            Kuasai Kosakata <br className="hidden sm:inline" />
            <span className="text-[#c53d34]">Bahasa Jepang</span>
          </h1>
          <p className="text-xs sm:text-base text-[#665a50] max-w-xl mx-auto leading-relaxed">
            Latihan 36 kosakata esensial dengan audio pengucapan asli, 5 pilihan ganda, kalkulasi Win Rate, dan evaluasi otomatis soal salah.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3 pt-2 max-w-md sm:max-w-none mx-auto w-full">
          <Link
            href="/practice"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#c53d34] text-white font-semibold text-sm sm:text-base shadow-md hover:bg-[#b0342b] active:scale-98 transition-all flex items-center justify-center gap-2 group"
          >
            <span>Mulai Tes Kosakata</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
          <a
            href="#vocab-list"
            className="w-full sm:w-auto px-5 py-3 sm:py-3.5 rounded-xl bg-[#ffffff] border border-[#e2d8c7] text-[#554b42] font-semibold text-sm sm:text-base hover:bg-[#f5ede0] active:scale-98 transition-colors text-center"
          >
            Lihat 36 Kosakata
          </a>
        </div>
      </section>

      {/* Feature Cards: 2 cols on mobile, 4 on desktop */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
        <div className="p-3.5 sm:p-5 rounded-2xl bg-white border border-[#e8dfcf] shadow-sm space-y-1 sm:space-y-2">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#faeae8] text-[#c53d34] flex items-center justify-center text-base sm:text-xl font-bold">
            🔊
          </div>
          <h3 className="font-bold text-xs sm:text-base text-[#2b2520] leading-snug">
            Audio Asli
          </h3>
          <p className="text-[11px] sm:text-xs text-[#70645a] leading-relaxed line-clamp-3 sm:line-clamp-none">
            Didukung Web Speech API bersuara Jepang natural langsung di browser.
          </p>
        </div>

        <div className="p-3.5 sm:p-5 rounded-2xl bg-white border border-[#e8dfcf] shadow-sm space-y-1 sm:space-y-2">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#faeae8] text-[#c53d34] flex items-center justify-center text-base sm:text-xl font-bold">
            🎯
          </div>
          <h3 className="font-bold text-xs sm:text-base text-[#2b2520] leading-snug">
            5 Pilihan Ganda
          </h3>
          <p className="text-[11px] sm:text-xs text-[#70645a] leading-relaxed line-clamp-3 sm:line-clamp-none">
            Tebak arti bahasa Indonesia dari 5 opsi acak untuk melatih ingatan.
          </p>
        </div>

        <div className="p-3.5 sm:p-5 rounded-2xl bg-white border border-[#e8dfcf] shadow-sm space-y-1 sm:space-y-2">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#faeae8] text-[#c53d34] flex items-center justify-center text-base sm:text-xl font-bold">
            📊
          </div>
          <h3 className="font-bold text-xs sm:text-base text-[#2b2520] leading-snug">
            Skor Win Rate
          </h3>
          <p className="text-[11px] sm:text-xs text-[#70645a] leading-relaxed line-clamp-3 sm:line-clamp-none">
            Akurasi WR % putaran awal untuk mengevaluasi pemahaman kata.
          </p>
        </div>

        <div className="p-3.5 sm:p-5 rounded-2xl bg-white border border-[#e8dfcf] shadow-sm space-y-1 sm:space-y-2">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#faeae8] text-[#c53d34] flex items-center justify-center text-base sm:text-xl font-bold">
            🔁
          </div>
          <h3 className="font-bold text-xs sm:text-base text-[#2b2520] leading-snug">
            Ulang Soal Salah
          </h3>
          <p className="text-[11px] sm:text-xs text-[#70645a] leading-relaxed line-clamp-3 sm:line-clamp-none">
            Kata yang salah otomatis diuji ulang hingga kamu kuasai 100%.
          </p>
        </div>
      </section>

      {/* Vocabulary List Section */}
      <section id="vocab-list" className="space-y-4 sm:space-y-6 pt-2">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 border-b border-[#e2d8c7] pb-4">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg sm:text-2xl font-bold text-[#2b2520]">
                Daftar 36 Kosakata
              </h2>
              <span className="text-[11px] sm:text-xs font-semibold px-2 py-0.5 rounded-full bg-[#f0e6d2] text-[#6d5b4d]">
                {filteredVocab.length} Kata
              </span>
            </div>
            <p className="text-[11px] sm:text-sm text-[#75685d] mt-0.5">
              Klik ikon speaker untuk mendengarkan pengucapan kata.
            </p>
          </div>

          {/* Search Bar */}
          <div className="w-full sm:w-64">
            <input
              type="text"
              placeholder="Cari kanji, romaji, arti..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#d8cdb9] text-xs sm:text-sm text-[#2b2520] placeholder-[#9c8f82] focus:outline-none focus:ring-2 focus:ring-[#c53d34] focus:border-transparent transition-all shadow-sm"
            />
          </div>
        </div>

        {/* Grid of Vocabulary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 sm:gap-3.5">
          {filteredVocab.map((item) => {
            const isExpanded = expandedVocabId === item.id;
            return (
              <div
                key={item.id}
                className={`p-3.5 sm:p-4 rounded-xl bg-white border shadow-sm transition-all group ${
                  isExpanded
                    ? "border-[#c53d34] ring-1 ring-[#c53d34]/20 shadow-md"
                    : "border-[#e8ded0] hover:border-[#c53d34]/40 hover:shadow-md"
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <div
                    className="space-y-0.5 sm:space-y-1 min-w-0 cursor-pointer flex-1"
                    onClick={() => toggleExpand(item.id)}
                  >
                    <div className="flex items-baseline gap-1.5 flex-wrap">
                      <span className="text-base sm:text-lg font-bold text-[#2b2520] font-japanese">
                        {item.kanji}
                      </span>
                      <span className="text-[11px] sm:text-xs text-[#8c7b6e]">
                        ({item.kana})
                      </span>
                    </div>
                    <div className="text-[11px] sm:text-xs font-mono font-medium text-[#c53d34] truncate">
                      {item.romaji}
                    </div>
                    <div className="text-xs font-semibold text-[#554b42] truncate">
                      {item.meaning}
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 flex-shrink-0">
                    {/* Play Word Audio Button */}
                    <button
                      type="button"
                      onClick={(e) => handlePlayAudio(item, e)}
                      title="Dengarkan Pengucapan Kata"
                      aria-label={`Dengarkan pengucapan kata ${item.romaji}`}
                      className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all active:scale-90 ${
                        activeAudioId === item.id
                          ? "bg-[#c53d34] text-white scale-105"
                          : "bg-[#f5ede0] text-[#70645a] hover:bg-[#c53d34] hover:text-white"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.536 8.464a5 5 0 010 7.072M18.364 5.636a9 9 0 010 12.728M11 5L6 9H2v6h4l5 4V5z"
                        />
                      </svg>
                    </button>

                    {/* Toggle Example Sentence Button */}
                    <button
                      type="button"
                      onClick={() => toggleExpand(item.id)}
                      title={isExpanded ? "Tutup Contoh Kalimat" : "Buka Contoh Kalimat & Audio"}
                      aria-label={isExpanded ? "Tutup Contoh Kalimat" : "Buka Contoh Kalimat & Audio"}
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs transition-all ${
                        isExpanded
                          ? "bg-[#faeae8] text-[#c53d34] rotate-180"
                          : "bg-[#faf6ee] text-[#8c7e73] hover:bg-[#ede4d5]"
                      }`}
                    >
                      ▼
                    </button>
                  </div>
                </div>

                {/* Expandable Example Sentence Section */}
                {isExpanded && item.exampleSentence && (
                  <div className="mt-3 pt-2.5 border-t border-[#ebdcc9] space-y-2 text-xs">
                    <div className="flex items-center justify-between gap-1.5">
                      <span className="text-[11px] font-bold text-[#7d4838] flex items-center gap-1">
                        <span>📝</span>
                        <span>Contoh Kalimat:</span>
                      </span>

                      {/* Play Sentence Audio Button */}
                      <button
                        type="button"
                        onClick={(e) => handlePlaySentenceAudio(item, e)}
                        className={`px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-semibold flex items-center gap-1 transition-all active:scale-95 ${
                          activeSentenceAudioId === item.id
                            ? "bg-[#c53d34] text-white scale-105"
                            : "bg-[#f5ede0] text-[#784637] hover:bg-[#c53d34] hover:text-white"
                        }`}
                      >
                        <span>🔊</span>
                        <span>
                          {activeSentenceAudioId === item.id ? "Memutar..." : "Putar Kalimat"}
                        </span>
                      </button>
                    </div>

                    <div className="bg-[#faf6ee] p-2.5 rounded-lg border border-[#ebdcc9] space-y-1">
                      {/* Japanese sentence */}
                      <p className="font-japanese text-xs sm:text-sm font-bold text-[#2b2520]">
                        {item.exampleSentence.japanese}
                      </p>
                      {/* Kana reading */}
                      <p className="text-[10px] sm:text-[11px] text-[#736557]">
                        <span className="text-[#948171]">Cara baca: </span>
                        {item.exampleSentence.kana}
                      </p>
                      {/* Romaji */}
                      <p className="text-[10px] sm:text-[11px] font-mono font-medium text-[#c53d34]">
                        {item.exampleSentence.romaji}
                      </p>
                      {/* Indonesian translation */}
                      <p className="text-[11px] text-[#3d332a] pt-1 border-t border-[#ebdcc9]/50 font-medium">
                        &ldquo;{item.exampleSentence.indonesian}&rdquo;
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-[#e7e1d5] bg-[#f7f3ea] text-[#6b6057] text-[11px] sm:text-xs py-6 sm:py-8 px-4">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-4 text-center sm:text-left">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#c53d34]"></span>
          <span>KotobaMaster (言葉マスター) — Japanese Vocabulary Trainer</span>
        </div>
        <p className="text-[#8e8176]">
          Setiap langkah kecil adalah kemajuan • 一歩一歩前へ
        </p>
      </div>
    </footer>
  );
}

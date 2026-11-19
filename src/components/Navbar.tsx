import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[#fbf9f5]/95 backdrop-blur-md border-b border-[#e7e1d5] text-[#2c2420]">
      <div className="max-w-5xl mx-auto px-3.5 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group min-w-0">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#c53d34] text-white flex-shrink-0 flex items-center justify-center font-bold text-sm sm:text-lg shadow-sm group-hover:scale-105 transition-transform">
            日
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="font-bold text-base sm:text-lg tracking-wide text-[#2c2420] truncate">
                KotobaMaster
              </span>
              <span className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.2 sm:py-0.5 rounded-full bg-[#f2ebd9] text-[#7d4838] font-medium border border-[#dfd4be] flex-shrink-0">
                日本語
              </span>
            </div>
            <p className="hidden sm:block text-[11px] text-[#7a6e65] truncate">
              Belajar Kosakata Jepang Interaktif
            </p>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="flex items-center gap-1.5 sm:gap-3 text-xs sm:text-sm font-medium flex-shrink-0">
          <Link
            href="/"
            className="px-2.5 sm:px-3 py-1.5 rounded-lg text-[#5f544d] hover:text-[#2c2420] hover:bg-[#ede5d6]/60 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/practice"
            className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-[#c53d34] text-white font-medium hover:bg-[#b0342b] shadow-sm hover:shadow transition-all flex items-center gap-1 active:scale-95"
          >
            <span>Practice</span>
            <span className="text-[10px] sm:text-xs opacity-85">練習</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}

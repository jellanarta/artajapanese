import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#fbf9f4",
};

export const metadata: Metadata = {
  title: "KotobaMaster (言葉マスター) - Belajar Kosakata Bahasa Jepang",
  description: "Website latihan dan tes 46 kosakata bahasa Jepang interaktif dengan audio pengucapan asli, terjemahan Indonesia & Inggris, dan evaluasi win rate.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-japanese-pattern text-[#2b2520]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

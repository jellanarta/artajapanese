# KotobaMaster (言葉マスター) - Japanese Vocabulary Trainer

Aplikasi web interaktif untuk belajar dan menguji 36 kosakata esensial bahasa Jepang dengan audio pengucapan asli, sistem 5 pilihan ganda, perhitungan Win Rate (WR), dan loop otomatis untuk mengulang soal yang salah.

Dibangun dengan **Next.js (App Router)** dan **Tailwind CSS**, siap langsung di-deploy ke **Vercel**.

---

## ✨ Fitur Utama

1. **Tema Tradisional Jepang (Washi & Torii Aesthetic)**
   - Desain bernuansa kertas *washi*, aksen merah *torii*, dan tipografi kanji yang elegan.
2. **Audio Pengucapan Asli (Natural Speech)**
   - Menggunakan **Web Speech API (`ja-JP`)** bawaan browser.
   - 100% gratis, tanpa API key, tanpa butuh unduhan file MP3 eksternal.
   - Dilengkapi fitur *Auto-play* dan pengaturan kecepatan (0.75x / 1.0x).
3. **Kuis 5 Pilihan Ganda Interaktif**
   - Tiap soal menampilkan tulisan Kanji, Furigana (Kana), dan Romaji.
   - 1 jawaban benar + 4 distraktor acak dari daftar kosakata lainnya.
4. **Kalkulasi Akurasi (Win Rate / WR %)**
   - Menghitung persentase kebenaran pada putaran pertama secara akurat.
5. **Loop Pengulangan Soal Salah (Remedial Loop)**
   - Jika ada kata yang dijawab salah, sistem otomatis mengumpulkan kata-kata tersebut.
   - Pengguna dapat langsung melakukan ujian ulang khusus kata yang salah hingga semuanya tuntas 100%.

---

## 📚 Daftar 36 Kosakata (Revisi Tulisan & Arti)

| No | Romaji | Kanji / Kana | Arti Baku Bahasa Indonesia |
|---|---|---|---|
| 1 | shimeru | 閉める (しめる) | Menutup |
| 2 | akeru | 開ける (あける) | Membuka |
| 3 | toru | 取る (とる) | Mengambil |
| 4 | ageru | あげる | Memberi (ke orang lain) |
| 5 | kureru | くれる | Memberi (ke saya) / Diberi |
| 6 | kau | 買う (かう) | Membeli |
| 7 | uru | 売る (うる) | Menjual |
| 8 | wasureru | 忘れる (わすれる) | Lupa |
| 9 | miru | 見る (みる) | Melihat |
| 10 | kiku | 聞く (きく) | Mendengar / Bertanya |
| 11 | asobu | 遊ぶ (あそぶ) | Bermain |
| 12 | aruku | 歩く (あるく) | Berjalan |
| 13 | nemui | 眠い (ねむい) | Mengantuk |
| 14 | me ga sameru | 目が覚める (めがさめる) | Terbangun / Terjaga |
| 15 | tatsu | 立つ (たつ) | Berdiri |
| 16 | suwaru | 座る (すわる) | Duduk |
| 17 | kaeru | 帰る (かえる) | Pulang |
| 18 | iku | 行く (いく) | Pergi |
| 19 | kuru | 来る (くる) | Datang |
| 20 | taberu | 食べる (たべる) | Makan |
| 21 | nomu | 飲む (のむ) | Minum |
| 22 | neru | 寝る (ねる) | Tidur |
| 23 | denwa suru | 電話する (でんわする) | Menelepon |
| 24 | ie | 家 (いえ) | Rumah |
| 25 | gakkou | 学校 (がっこう) | Sekolah |
| 26 | doko e | どこへ | Ke mana |
| 27 | motte iku | 持って行く (もっていく) | Membawa |
| 28 | tsukau | 使う (つかう) | Menggunakan / Memakai |
| 29 | basho | 場所 (ばしょ) | Tempat |
| 30 | koko e | ここへ | Ke sini |
| 31 | kotaeru | 答える (こたえる) | Menjawab |
| 32 | kariru | 借りる (かりる) | Meminjam |
| 33 | shiranai | 知らない (しらない) | Tidak tahu |
| 34 | matsu | 待つ (まつ) | Menunggu |
| 35 | ichido mo nai | 一度もない (いちどもない) | Tidak pernah |
| 36 | mou | もう | Sudah |

---

## 🚀 Cara Menjalankan Lokal & Ngrok

### 1. Jalankan Next.js Server
```bash
npm run dev
```
Buka browser di [http://localhost:3000](http://localhost:3000).

### 2. Membagikan Link via Ngrok (Tunneling)
Buka terminal baru di folder proyek ini, lalu jalankan:
```bash
npm run tunnel
```
*(atau langsung ketik `ngrok http 3000`)*

Ngrok akan menghasilkan tautan publik HTTPS, contoh:
```text
Forwarding    https://xxxx-xx-xx.ngrok-free.app -> http://localhost:3000
```
Kamu tinggal salin link `https://....ngrok-free.app` tersebut dan bagikan ke teman atau buka lewat browser HP! Audio bahasa Jepang akan tetap berfungsi normal karena ngrok otomatis menggunakan protokol aman HTTPS.

---

## 🌐 Cara Deploy ke Vercel

1. Push repository ini ke GitHub / GitLab.
2. Masuk ke [vercel.com](https://vercel.com) dan klik **Add New Project**.
3. Import repository `bahasa-jepang`.
4. Vercel akan otomatis mendeteksi framework **Next.js**. Klik **Deploy**.

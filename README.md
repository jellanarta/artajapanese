# KotobaMaster (言葉マスター) - Japanese Vocabulary Trainer

Aplikasi web interaktif untuk belajar dan menguji 41 kosakata esensial bahasa Jepang dengan audio pengucapan asli, sistem 5 pilihan ganda, arti bahasa Indonesia & bahasa Inggris, perhitungan Win Rate (WR), dan loop otomatis untuk mengulang soal yang salah.

Dibangun dengan **Next.js (App Router)** dan **Tailwind CSS**, siap langsung di-deploy ke **Vercel**.

---

## ✨ Fitur Utama

1. **Tema Tradisional Jepang (Washi & Torii Aesthetic)**
   - Desain bernuansa kertas *washi*, aksen merah *torii*, dan tipografi kanji yang elegan.
2. **Audio Pengucapan Asli (Natural Speech)**
   - Menggunakan audio tertanam (Base64) & Web Speech API fallback, kebal terhadap pemblokiran jaringan maupun ngrok.
   - Dilengkapi fitur *Auto-play* dan pengaturan kecepatan (0.75x / 1.0x).
3. **Kuis 5 Pilihan Ganda Interaktif**
   - Tiap soal menampilkan tulisan Kanji, Furigana (Kana), dan Romaji.
   - 1 jawaban benar + 4 distraktor acak dari daftar kosakata lainnya.
4. **Terjemahan Ganda (Bahasa Indonesia & Bahasa Inggris)**
   - Setiap kata dan contoh kalimat dilengkapi dengan arti bahasa Indonesia dan bahasa Inggris.
5. **Kalkulasi Akurasi (Win Rate / WR %)**
   - Menghitung persentase kebenaran pada putaran pertama secara akurat.
6. **Loop Pengulangan Soal Salah (Remedial Loop)**
   - Jika ada kata yang dijawab salah, sistem otomatis mengumpulkan kata-kata tersebut.
   - Pengguna dapat langsung melakukan ujian ulang khusus kata yang salah hingga semuanya tuntas 100%.

---

## 📚 Daftar 41 Kosakata (Revisi Tulisan, Arti ID & EN)

| No | Romaji | Kanji / Kana | Arti Bahasa Indonesia | English Meaning |
|---|---|---|---|---|
| 1 | shimeru | 閉める (しめる) | Menutup | To close / To shut |
| 2 | akeru | 開ける (あける) | Membuka | To open |
| 3 | toru | 取る (とる) | Mengambil | To take / To pass |
| 4 | ageru | あげる | Memberi (ke orang lain) | To give (to someone else) |
| 5 | kureru | くれる | Memberi (ke saya) / Diberi | To give (to me) |
| 6 | kau | 買う (かう) | Membeli | To buy |
| 7 | uru | 売る (うる) | Menjual | To sell |
| 8 | wasureru | 忘れる (わすれる) | Lupa | To forget |
| 9 | miru | 見る (みる) | Melihat | To see / To watch |
| 10 | kiku | 聞く (きく) | Mendengar / Bertanya | To listen / To hear / To ask |
| 11 | asobu | 遊ぶ (あそぶ) | Bermain | To play / To hang out |
| 12 | aruku | 歩く (あるく) | Berjalan | To walk |
| 13 | nemui | 眠い (ねむい) | Mengantuk | Sleepy |
| 14 | me ga sameru | 目が覚める (めがさめる) | Terbangun / Terjaga | To wake up / To open one's eyes |
| 15 | tatsu | 立つ (たつ) | Berdiri | To stand |
| 16 | suwaru | 座る (すわる) | Duduk | To sit |
| 17 | kaeru | 帰る (かえる) | Pulang | To return home / To go back |
| 18 | iku | 行く (いく) | Pergi | To go |
| 19 | kuru | 来る (くる) | Datang | To come |
| 20 | taberu | 食べる (たべる) | Makan | To eat |
| 21 | nomu | 飲む (のむ) | Minum | To drink |
| 22 | neru | 寝る (ねる) | Tidur | To sleep / To go to bed |
| 23 | denwa suru | 電話する (でんわする) | Menelepon | To make a phone call |
| 24 | ie | 家 (いえ) | Rumah | House / Home |
| 25 | gakkou | 学校 (がっこう) | Sekolah | School |
| 26 | doko e | どこへ | Ke mana | Where to |
| 27 | motte iku | 持って行く (もっていく) | Membawa | To take along / To carry |
| 28 | tsukau | 使う (つかう) | Menggunakan / Memakai | To use |
| 29 | basho | 場所 (ばしょ) | Tempat | Place / Location |
| 30 | koko e | ここへ | Ke sini | To here / Over here |
| 31 | kotaeru | 答える (こたえる) | Menjawab | To answer / To reply |
| 32 | kariru | 借りる (かりる) | Meminjam | To borrow / To rent |
| 33 | shiranai | 知らない (しらない) | Tidak tahu | Do not know |
| 34 | matsu | 待つ (まつ) | Menunggu | To wait |
| 35 | ichido mo nai | 一度もない (いちどもない) | Tidak pernah | Never / Not even once |
| 36 | mou | もう | Sudah | Already / Yet |
| 37 | mada | まだ | Belum | Not yet / Still |
| 38 | kasu | 貸す (かす) | Meminjamkan | To lend |
| 39 | hanasu | 話す (はなす) | Berbicara | To speak / To talk |
| 40 | au | 会う (あう) | Bertemu | To meet |
| 41 | oshieru | 教える (おしえる) | Mengajar / Memberitahu | To teach / To tell |

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

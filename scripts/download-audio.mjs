import fs from "fs";
import path from "path";
import https from "https";

const VOCABULARY_LIST = [
  { id: 1, kana: "しめる" },
  { id: 2, kana: "あける" },
  { id: 3, kana: "とる" },
  { id: 4, kana: "あげる" },
  { id: 5, kana: "くれる" },
  { id: 6, kana: "かう" },
  { id: 7, kana: "うる" },
  { id: 8, kana: "わすれる" },
  { id: 9, kana: "みる" },
  { id: 10, kana: "きく" },
  { id: 11, kana: "あそぶ" },
  { id: 12, kana: "あるく" },
  { id: 13, kana: "ねむい" },
  { id: 14, kana: "めがさめる" },
  { id: 15, kana: "たつ" },
  { id: 16, kana: "すわる" },
  { id: 17, kana: "かえる" },
  { id: 18, kana: "いく" },
  { id: 19, kana: "くる" },
  { id: 20, kana: "たべる" },
  { id: 21, kana: "のむ" },
  { id: 22, kana: "ねる" },
  { id: 23, kana: "でんわする" },
  { id: 24, kana: "いえ" },
  { id: 25, kana: "がっこう" },
  { id: 26, kana: "どこへ" },
  { id: 27, kana: "もっていく" },
  { id: 28, kana: "つかう" },
  { id: 29, kana: "ばしょ" },
  { id: 30, kana: "ここへ" },
  { id: 31, kana: "こたえる" },
  { id: 32, kana: "かりる" },
  { id: 33, kana: "しらない" },
  { id: 34, kana: "まつ" },
  { id: 35, kana: "いちどもない" },
  { id: 36, kana: "もう" },
];

const audioDir = path.resolve("public", "audio");
if (!fs.existsSync(audioDir)) {
  fs.mkdirSync(audioDir, { recursive: true });
}

function downloadAudio(id, kana) {
  return new Promise((resolve, reject) => {
    const url = `https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=ja&q=${encodeURIComponent(
      kana
    )}`;
    const filePath = path.join(audioDir, `vocab-${id}.mp3`);

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
          reject(new Error(`Failed to download vocab-${id}: HTTP ${res.statusCode}`));
          return;
        }

        const fileStream = fs.createWriteStream(filePath);
        res.pipe(fileStream);

        fileStream.on("finish", () => {
          fileStream.close();
          console.log(`Saved vocab-${id}.mp3 (${kana})`);
          resolve();
        });
      })
      .on("error", (err) => {
        reject(err);
      });
  });
}

async function run() {
  console.log("Downloading audio files for 36 vocabularies...");
  for (const item of VOCABULARY_LIST) {
    try {
      await downloadAudio(item.id, item.kana);
      // Small pause to be gentle
      await new Promise((r) => setTimeout(r, 100));
    } catch (e) {
      console.error(e);
    }
  }
  console.log("All audio files downloaded successfully!");
}

run();


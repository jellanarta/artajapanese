import fs from "fs";
import path from "path";
import https from "https";

const VOCABULARY_LIST = [
  { id: 1, kana: "どあ を しめて ください。" },
  { id: 2, kana: "まど を あけます。" },
  { id: 3, kana: "しお を とって ください。" },
  { id: 4, kana: "ともだち に ぷれぜんと を あげました。" },
  { id: 5, kana: "せんせい が ほん を くれました。" },
  { id: 6, kana: "あたらしい くつ を かいました。" },
  { id: 7, kana: "ふるい ばいく を うります。" },
  { id: 8, kana: "しゅくだい を わすれました。" },
  { id: 9, kana: "えいが を みます。" },
  { id: 10, kana: "おんがく を ききます。" },
  { id: 11, kana: "こうえん で あそびます。" },
  { id: 12, kana: "えき まで あるきます。" },
  { id: 13, kana: "きょう は とても ねむい です。" },
  { id: 14, kana: "あさ ろくじ に め が さめました。" },
  { id: 15, kana: "なまえ を よばれて たちました。" },
  { id: 16, kana: "いす に すわって ください。" },
  { id: 17, kana: "はやく いえ に かえりたい です。" },
  { id: 18, kana: "にほん へ いきます。" },
  { id: 19, kana: "あした ともだち が きます。" },
  { id: 20, kana: "らーめん を たべます。" },
  { id: 21, kana: "おちゃ を のみます。" },
  { id: 22, kana: "よる じゅういちじ に ねます。" },
  { id: 23, kana: "はは に でんわ します。" },
  { id: 24, kana: "わたし の いえ は あそこ です。" },
  { id: 25, kana: "がっこう は たのしい です。" },
  { id: 26, kana: "いま から どこ へ いきます か？" },
  { id: 27, kana: "かさ を もって いきます。" },
  { id: 28, kana: "ぱそこん を つかいます。" },
  { id: 29, kana: "しずかな ばしょ が すき です。" },
  { id: 30, kana: "ここ へ すわって ください。" },
  { id: 31, kana: "しつもん に こたえて ください。" },
  { id: 32, kana: "としょかん で ほん を かります。" },
  { id: 33, kana: "その ひと の なまえ を しらない。" },
  { id: 34, kana: "ここ で すこし まって ください。" },
  { id: 35, kana: "にほん へ いった こと が いちども ない。" },
  { id: 36, kana: "もう ごはん を たべました か？" },
];

const audioDir = path.resolve("public", "audio");
if (!fs.existsSync(audioDir)) {
  fs.mkdirSync(audioDir, { recursive: true });
}

function downloadSentenceAudio(id, kana) {
  return new Promise((resolve, reject) => {
    const url = `https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=ja&q=${encodeURIComponent(
      kana
    )}`;
    const filePath = path.join(audioDir, `sentence-${id}.mp3`);

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
          reject(new Error(`Failed to download sentence-${id}: HTTP ${res.statusCode}`));
          return;
        }

        const fileStream = fs.createWriteStream(filePath);
        res.pipe(fileStream);

        fileStream.on("finish", () => {
          fileStream.close();
          console.log(`Saved sentence-${id}.mp3`);
          resolve();
        });
      })
      .on("error", (err) => {
        reject(err);
      });
  });
}

async function run() {
  console.log("Downloading audio for 36 example sentences...");
  for (const item of VOCABULARY_LIST) {
    try {
      await downloadSentenceAudio(item.id, item.kana);
      await new Promise((r) => setTimeout(r, 80));
    } catch (e) {
      console.error(e);
    }
  }
  console.log("All sentence audio files downloaded successfully!");

  // Generate Base64
  console.log("Generating sentence-audio-base64.ts...");
  const out = {};
  for (let i = 1; i <= 36; i++) {
    const file = path.join(audioDir, `sentence-${i}.mp3`);
    if (fs.existsSync(file)) {
      const b64 = fs.readFileSync(file).toString("base64");
      out[i] = "data:audio/mp3;base64," + b64;
    }
  }
  const content =
    "// Auto-generated Base64 audio map for 36 example sentences\n" +
    "export const SENTENCE_AUDIO_BASE64: Record<number, string> = " +
    JSON.stringify(out, null, 2) +
    ";\n";

  fs.writeFileSync(path.resolve("src", "data", "sentence-audio-base64.ts"), content, "utf8");
  console.log("Done generating sentence-audio-base64.ts!");
}

run();


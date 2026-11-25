export interface ExampleSentence {
  japanese: string;
  kana: string;
  romaji: string;
  indonesian: string;
  english: string;
}

export interface Vocabulary {
  id: number;
  kanji: string;
  kana: string;
  romaji: string;
  meaning: string;
  englishMeaning: string;
  exampleSentence?: ExampleSentence;
}

export const VOCABULARY_LIST: Vocabulary[] = [
  {
    id: 1,
    kanji: "閉める",
    kana: "しめる",
    romaji: "shimeru",
    meaning: "Menutup",
    englishMeaning: "To close / To shut",
    exampleSentence: {
      japanese: "ドアを閉めてください。",
      kana: "どあ を しめて ください。",
      romaji: "Doa o shimete kudasai.",
      indonesian: "Tolong tutup pintunya.",
      english: "Please close the door."
    }
  },
  {
    id: 2,
    kanji: "開ける",
    kana: "あける",
    romaji: "akeru",
    meaning: "Membuka",
    englishMeaning: "To open",
    exampleSentence: {
      japanese: "窓を開けます。",
      kana: "まど を あけます。",
      romaji: "Mado o akemasu.",
      indonesian: "Saya membuka jendela.",
      english: "I open the window."
    }
  },
  {
    id: 3,
    kanji: "取る",
    kana: "とる",
    romaji: "toru",
    meaning: "Mengambil",
    englishMeaning: "To take / To pass",
    exampleSentence: {
      japanese: "塩を取ってください。",
      kana: "しお を とって ください。",
      romaji: "Shio o totte kudasai.",
      indonesian: "Tolong ambilkan garam.",
      english: "Please pass the salt."
    }
  },
  {
    id: 4,
    kanji: "あげる",
    kana: "あげる",
    romaji: "ageru",
    meaning: "Memberi (ke orang lain)",
    englishMeaning: "To give (to someone else)",
    exampleSentence: {
      japanese: "友達にプレゼントをあげました。",
      kana: "ともだち に ぷれぜんと を あげました。",
      romaji: "Tomodachi ni purezento o agemashita.",
      indonesian: "Saya memberi hadiah ke teman.",
      english: "I gave a present to a friend."
    }
  },
  {
    id: 5,
    kanji: "くれる",
    kana: "くれる",
    romaji: "kureru",
    meaning: "Memberi (ke saya / Diberi)",
    englishMeaning: "To give (to me)",
    exampleSentence: {
      japanese: "先生が本をくれました。",
      kana: "せんせい が ほん を くれました。",
      romaji: "Sensei ga hon o kuremashita.",
      indonesian: "Guru memberi saya buku.",
      english: "The teacher gave me a book."
    }
  },
  {
    id: 6,
    kanji: "買う",
    kana: "かう",
    romaji: "kau",
    meaning: "Membeli",
    englishMeaning: "To buy",
    exampleSentence: {
      japanese: "新しい靴を買いました。",
      kana: "あたらしい くつ を かいました。",
      romaji: "Atarashii kutsu o kaimashita.",
      indonesian: "Saya membeli sepatu baru.",
      english: "I bought new shoes."
    }
  },
  {
    id: 7,
    kanji: "売る",
    kana: "うる",
    romaji: "uru",
    meaning: "Menjual",
    englishMeaning: "To sell",
    exampleSentence: {
      japanese: "古いバイクを売ります。",
      kana: "ふるい ばいく を うります。",
      romaji: "Furui baiku o urimasu.",
      indonesian: "Saya menjual motor lama.",
      english: "I sell my old motorcycle."
    }
  },
  {
    id: 8,
    kanji: "忘れる",
    kana: "わすれる",
    romaji: "wasureru",
    meaning: "Lupa",
    englishMeaning: "To forget",
    exampleSentence: {
      japanese: "宿題を忘れました。",
      kana: "しゅくだい を わすれました。",
      romaji: "Shukudai o wasuremashita.",
      indonesian: "Saya lupa PR.",
      english: "I forgot my homework."
    }
  },
  {
    id: 9,
    kanji: "見る",
    kana: "みる",
    romaji: "miru",
    meaning: "Melihat",
    englishMeaning: "To see / To watch",
    exampleSentence: {
      japanese: "映画を見ます。",
      kana: "えいが を みます。",
      romaji: "Eiga o mimasu.",
      indonesian: "Saya melihat / menonton film.",
      english: "I watch a movie."
    }
  },
  {
    id: 10,
    kanji: "聞く",
    kana: "きく",
    romaji: "kiku",
    meaning: "Mendengar atau Bertanya",
    englishMeaning: "To listen / To hear / To ask",
    exampleSentence: {
      japanese: "音楽を聞きます。",
      kana: "おんがく を ききます。",
      romaji: "Ongaku o kikimasu.",
      indonesian: "Saya mendengarkan musik.",
      english: "I listen to music."
    }
  },
  {
    id: 11,
    kanji: "遊ぶ",
    kana: "あそぶ",
    romaji: "asobu",
    meaning: "Bermain",
    englishMeaning: "To play / To hang out",
    exampleSentence: {
      japanese: "公園で遊びます。",
      kana: "こうえん で あそびます。",
      romaji: "Kouen de asobimasu.",
      indonesian: "Bermain di taman.",
      english: "Play in the park."
    }
  },
  {
    id: 12,
    kanji: "歩く",
    kana: "あるく",
    romaji: "aruku",
    meaning: "Berjalan",
    englishMeaning: "To walk",
    exampleSentence: {
      japanese: "駅まで歩きます。",
      kana: "えき まで あるきます。",
      romaji: "Eki made arukimasu.",
      indonesian: "Berjalan kaki sampai stasiun.",
      english: "Walk to the station."
    }
  },
  {
    id: 13,
    kanji: "眠い",
    kana: "ねむい",
    romaji: "nemui",
    meaning: "Mengantuk",
    englishMeaning: "Sleepy",
    exampleSentence: {
      japanese: "今日はとても眠いです。",
      kana: "きょう は とても ねむい です。",
      romaji: "Kyou wa totemo nemui desu.",
      indonesian: "Hari ini sangat mengantuk.",
      english: "I am very sleepy today."
    }
  },
  {
    id: 14,
    kanji: "目が覚める",
    kana: "めがさめる",
    romaji: "me ga sameru",
    meaning: "Terbangun / Terjaga",
    englishMeaning: "To wake up / To open one's eyes",
    exampleSentence: {
      japanese: "朝6時に目が覚めました。",
      kana: "あさ ろくじ に め が さめました。",
      romaji: "Asa rokuji ni me ga samemashita.",
      indonesian: "Saya terbangun jam 6 pagi.",
      english: "I woke up at 6 in the morning."
    }
  },
  {
    id: 15,
    kanji: "立つ",
    kana: "たつ",
    romaji: "tatsu",
    meaning: "Berdiri",
    englishMeaning: "To stand",
    exampleSentence: {
      japanese: "名前を呼ばれて立ちました。",
      kana: "なまえ を よばれて たちました。",
      romaji: "Namae o yobarete tachimashita.",
      indonesian: "Dipanggil namanya lalu berdiri.",
      english: "My name was called and I stood up."
    }
  },
  {
    id: 16,
    kanji: "座る",
    kana: "すわる",
    romaji: "suwaru",
    meaning: "Duduk",
    englishMeaning: "To sit",
    exampleSentence: {
      japanese: "椅子に座ってください。",
      kana: "いす に すわって ください。",
      romaji: "Isu ni suwatte kudasai.",
      indonesian: "Silakan duduk di kursi.",
      english: "Please sit on the chair."
    }
  },
  {
    id: 17,
    kanji: "帰る",
    kana: "かえる",
    romaji: "kaeru",
    meaning: "Pulang",
    englishMeaning: "To return home / To go back",
    exampleSentence: {
      japanese: "早く家に帰りたいです。",
      kana: "はやく いえ に かえりたい です。",
      romaji: "Hayaku ie ni kaeritai desu.",
      indonesian: "Saya ingin cepat pulang ke rumah.",
      english: "I want to go home quickly."
    }
  },
  {
    id: 18,
    kanji: "行く",
    kana: "いく",
    romaji: "iku",
    meaning: "Pergi",
    englishMeaning: "To go",
    exampleSentence: {
      japanese: "日本へ行きます。",
      kana: "にほん へ いきます。",
      romaji: "Nihon e ikimasu.",
      indonesian: "Pergi ke Jepang.",
      english: "Go to Japan."
    }
  },
  {
    id: 19,
    kanji: "来る",
    kana: "くる",
    romaji: "kuru",
    meaning: "Datang",
    englishMeaning: "To come",
    exampleSentence: {
      japanese: "明日友達が来ます。",
      kana: "あした ともだち が きます。",
      romaji: "Ashita tomodachi ga kimasu.",
      indonesian: "Besok teman datang.",
      english: "A friend is coming tomorrow."
    }
  },
  {
    id: 20,
    kanji: "食べる",
    kana: "たべる",
    romaji: "taberu",
    meaning: "Makan",
    englishMeaning: "To eat",
    exampleSentence: {
      japanese: "ラーメンを食べます。",
      kana: "らーめん を たべます。",
      romaji: "Raamen o tabemasu.",
      indonesian: "Makan ramen.",
      english: "Eat ramen."
    }
  },
  {
    id: 21,
    kanji: "飲む",
    kana: "のむ",
    romaji: "nomu",
    meaning: "Minum",
    englishMeaning: "To drink",
    exampleSentence: {
      japanese: "お茶を飲みます。",
      kana: "おちゃ を のみます。",
      romaji: "Ocha o nomimasu.",
      indonesian: "Minum teh hijau.",
      english: "Drink green tea."
    }
  },
  {
    id: 22,
    kanji: "寝る",
    kana: "ねる",
    romaji: "neru",
    meaning: "Tidur",
    englishMeaning: "To sleep / To go to bed",
    exampleSentence: {
      japanese: "夜11時に寝ます。",
      kana: "よる じゅういちじ に ねます。",
      romaji: "Yoru juuichiji ni nemasu.",
      indonesian: "Tidur jam 11 malam.",
      english: "Go to sleep at 11 PM."
    }
  },
  {
    id: 23,
    kanji: "電話する",
    kana: "でんわする",
    romaji: "denwa suru",
    meaning: "Menelepon",
    englishMeaning: "To make a phone call",
    exampleSentence: {
      japanese: "母に電話します。",
      kana: "はは に でんわ します。",
      romaji: "Haha ni denwa shimasu.",
      indonesian: "Menelepon ibu.",
      english: "Call my mother."
    }
  },
  {
    id: 24,
    kanji: "家",
    kana: "いえ",
    romaji: "ie",
    meaning: "Rumah",
    englishMeaning: "House / Home",
    exampleSentence: {
      japanese: "私の家はあそこです。",
      kana: "わたし の いえ は あそこ です。",
      romaji: "Watashi no ie wa asoko desu.",
      indonesian: "Rumah saya ada di sana.",
      english: "My house is over there."
    }
  },
  {
    id: 25,
    kanji: "学校",
    kana: "がっこう",
    romaji: "gakkou",
    meaning: "Sekolah",
    englishMeaning: "School",
    exampleSentence: {
      japanese: "学校は楽しいです。",
      kana: "がっこう は たのしい です。",
      romaji: "Gakkou wa tanoshii desu.",
      indonesian: "Sekolah itu menyenangkan.",
      english: "School is fun."
    }
  },
  {
    id: 26,
    kanji: "どこへ",
    kana: "どこへ",
    romaji: "doko e",
    meaning: "Ke mana",
    englishMeaning: "Where to",
    exampleSentence: {
      japanese: "今からどこへ行きますか？",
      kana: "いま から どこ へ いきます か？",
      romaji: "Ima kara doko e ikimasu ka?",
      indonesian: "Mau pergi ke mana sekarang?",
      english: "Where are you going now?"
    }
  },
  {
    id: 27,
    kanji: "持って行く",
    kana: "もっていく",
    romaji: "motte iku",
    meaning: "Membawa",
    englishMeaning: "To take (something) along",
    exampleSentence: {
      japanese: "傘を持って行きます。",
      kana: "かさ を もって いきます。",
      romaji: "Kasa o motte ikimasu.",
      indonesian: "Membawa payung.",
      english: "Take an umbrella."
    }
  },
  {
    id: 28,
    kanji: "使う",
    kana: "つかう",
    romaji: "tsukau",
    meaning: "Menggunakan / Memakai",
    englishMeaning: "To use",
    exampleSentence: {
      japanese: "パソコンを使います。",
      kana: "ぱそこん を つかいます。",
      romaji: "Pasokon o tsukaimasu.",
      indonesian: "Menggunakan laptop/komputer.",
      english: "Use a computer."
    }
  },
  {
    id: 29,
    kanji: "場所",
    kana: "ばしょ",
    romaji: "basho",
    meaning: "Tempat",
    englishMeaning: "Place / Location",
    exampleSentence: {
      japanese: "静かな場所が好きです。",
      kana: "しずかな ばしょ が すき です。",
      romaji: "Shizukana basho ga suki desu.",
      indonesian: "Saya suka tempat yang tenang.",
      english: "I like quiet places."
    }
  },
  {
    id: 30,
    kanji: "ここへ",
    kana: "ここへ",
    romaji: "koko e",
    meaning: "Ke sini",
    englishMeaning: "To here / Over here",
    exampleSentence: {
      japanese: "ここへ座ってください。",
      kana: "ここ へ すわって ください。",
      romaji: "Koko e suwatte kudasai.",
      indonesian: "Silakan duduk ke sini.",
      english: "Please sit over here."
    }
  },
  {
    id: 31,
    kanji: "答える",
    kana: "こたえる",
    romaji: "kotaeru",
    meaning: "Menjawab",
    englishMeaning: "To answer / To reply",
    exampleSentence: {
      japanese: "質問に答えてください。",
      kana: "しつもん に こたえて ください。",
      romaji: "Shitsumon ni kotaete kudasai.",
      indonesian: "Tolong jawab pertanyaannya.",
      english: "Please answer the question."
    }
  },
  {
    id: 32,
    kanji: "借りる",
    kana: "かりる",
    romaji: "kariru",
    meaning: "Meminjam",
    englishMeaning: "To borrow / To rent",
    exampleSentence: {
      japanese: "図書館で本を借ります。",
      kana: "としょかん で ほん を かります。",
      romaji: "Toshokan de hon o karimasu.",
      indonesian: "Meminjam buku di perpustakaan.",
      english: "Borrow a book from the library."
    }
  },
  {
    id: 33,
    kanji: "知らない",
    kana: "しらない",
    romaji: "shiranai",
    meaning: "Tidak tahu",
    englishMeaning: "Do not know",
    exampleSentence: {
      japanese: "その人の名前を知らない。",
      kana: "その ひと の なまえ を しらない。",
      romaji: "Sono hito no namae o shiranai.",
      indonesian: "Saya tidak tahu nama orang itu.",
      english: "I don't know that person's name."
    }
  },
  {
    id: 34,
    kanji: "待つ",
    kana: "まつ",
    romaji: "matsu",
    meaning: "Menunggu",
    englishMeaning: "To wait",
    exampleSentence: {
      japanese: "ここで少し待ってください。",
      kana: "ここ で すこし まって ください。",
      romaji: "Koko de sukoshi matte kudasai.",
      indonesian: "Tolong tunggu sebentar di sini.",
      english: "Please wait here for a moment."
    }
  },
  {
    id: 35,
    kanji: "一度もない",
    kana: "いちどもない",
    romaji: "ichido mo nai",
    meaning: "Tidak pernah",
    englishMeaning: "Never / Not even once",
    exampleSentence: {
      japanese: "日本へ行ったことが一度もない。",
      kana: "にほん へ いった こと が いちども ない。",
      romaji: "Nihon e itta koto ga ichido mo nai.",
      indonesian: "Sama sekali tidak pernah pergi ke Jepang.",
      english: "I have never been to Japan even once."
    }
  },
  {
    id: 36,
    kanji: "もう",
    kana: "もう",
    romaji: "mou",
    meaning: "Sudah",
    englishMeaning: "Already / Yet",
    exampleSentence: {
      japanese: "もうご飯を食べましたか？",
      kana: "もう ごはん を たべました か？",
      romaji: "Mou gohan o tabemashita ka?",
      indonesian: "Apakah kamu sudah makan?",
      english: "Have you eaten already?"
    }
  },
  {
    id: 37,
    kanji: "まだ",
    kana: "まだ",
    romaji: "mada",
    meaning: "Belum",
    englishMeaning: "Not yet / Still",
    exampleSentence: {
      japanese: "まだお昼ご飯を食べていません。",
      kana: "まだ おひるごはん を たべて いません。",
      romaji: "Mada ohirugohan o tabete imasen.",
      indonesian: "Saya belum makan siang.",
      english: "I haven't eaten lunch yet."
    }
  },
  {
    id: 38,
    kanji: "貸す",
    kana: "かす",
    romaji: "kasu",
    meaning: "Meminjamkan",
    englishMeaning: "To lend",
    exampleSentence: {
      japanese: "友達に傘を貸しました。",
      kana: "ともだち に かさ を かしました。",
      romaji: "Tomodachi ni kasa o kashimashita.",
      indonesian: "Saya meminjamkan payung ke teman.",
      english: "I lent an umbrella to my friend."
    }
  },
  {
    id: 39,
    kanji: "話す",
    kana: "はなす",
    romaji: "hanasu",
    meaning: "Berbicara",
    englishMeaning: "To speak / To talk",
    exampleSentence: {
      japanese: "日本語でゆっくり話してください。",
      kana: "にほんご で ゆっくり はなして ください。",
      romaji: "Nihongo de yukkuri hanashite kudasai.",
      indonesian: "Tolong berbicara perlahan dalam bahasa Jepang.",
      english: "Please speak slowly in Japanese."
    }
  },
  {
    id: 40,
    kanji: "会う",
    kana: "あう",
    romaji: "au",
    meaning: "Bertemu",
    englishMeaning: "To meet",
    exampleSentence: {
      japanese: "明日駅の前で友達と会います。",
      kana: "あした えき の まえ で ともだち と あいます。",
      romaji: "Ashita eki no mae de tomodachi to aimasu.",
      indonesian: "Besok bertemu teman di depan stasiun.",
      english: "I will meet a friend in front of the station tomorrow."
    }
  },
  {
    id: 41,
    kanji: "教える",
    kana: "おしえる",
    romaji: "oshieru",
    meaning: "Mengajar / Memberitahu",
    englishMeaning: "To teach / To tell",
    exampleSentence: {
      japanese: "駅への行き方を教えてください。",
      kana: "えき への いきかた を おしえて ください。",
      romaji: "Eki e no ikikata o oshiete kudasai.",
      indonesian: "Tolong beritahu saya cara pergi ke stasiun.",
      english: "Please tell me how to get to the station."
    }
  }
];

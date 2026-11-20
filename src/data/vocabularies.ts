export interface ExampleSentence {
  japanese: string;
  kana: string;
  romaji: string;
  indonesian: string;
}

export interface Vocabulary {
  id: number;
  kanji: string;
  kana: string;
  romaji: string;
  meaning: string;
  exampleSentence?: ExampleSentence;
}

export const VOCABULARY_LIST: Vocabulary[] = [
  {
    id: 1,
    kanji: "閉める",
    kana: "しめる",
    romaji: "shimeru",
    meaning: "Menutup",
    exampleSentence: {
      japanese: "ドアを閉めてください。",
      kana: "どあ を しめて ください。",
      romaji: "Doa o shimete kudasai.",
      indonesian: "Tolong tutup pintunya."
    }
  },
  {
    id: 2,
    kanji: "開ける",
    kana: "あける",
    romaji: "akeru",
    meaning: "Membuka",
    exampleSentence: {
      japanese: "窓を開けます。",
      kana: "まど を あけます。",
      romaji: "Mado o akemasu.",
      indonesian: "Saya membuka jendela."
    }
  },
  {
    id: 3,
    kanji: "取る",
    kana: "とる",
    romaji: "toru",
    meaning: "Mengambil",
    exampleSentence: {
      japanese: "塩を取ってください。",
      kana: "しお を とって ください。",
      romaji: "Shio o totte kudasai.",
      indonesian: "Tolong ambilkan garam."
    }
  },
  {
    id: 4,
    kanji: "あげる",
    kana: "あげる",
    romaji: "ageru",
    meaning: "Memberi (ke orang lain)",
    exampleSentence: {
      japanese: "友達にプレゼントをあげました。",
      kana: "ともだち に ぷれぜんと を あげました。",
      romaji: "Tomodachi ni purezento o agemashita.",
      indonesian: "Saya memberi hadiah ke teman."
    }
  },
  {
    id: 5,
    kanji: "くれる",
    kana: "くれる",
    romaji: "kureru",
    meaning: "Memberi (ke saya / Diberi)",
    exampleSentence: {
      japanese: "先生が本をくれました。",
      kana: "せんせい が ほん を くれました。",
      romaji: "Sensei ga hon o kuremashita.",
      indonesian: "Guru memberi saya buku."
    }
  },
  {
    id: 6,
    kanji: "買う",
    kana: "かう",
    romaji: "kau",
    meaning: "Membeli",
    exampleSentence: {
      japanese: "新しい靴を買いました。",
      kana: "あたらしい くつ を かいました。",
      romaji: "Atarashii kutsu o kaimashita.",
      indonesian: "Saya membeli sepatu baru."
    }
  },
  {
    id: 7,
    kanji: "売る",
    kana: "うる",
    romaji: "uru",
    meaning: "Menjual",
    exampleSentence: {
      japanese: "古いバイクを売ります。",
      kana: "ふるい ばいく を うります。",
      romaji: "Furui baiku o urimasu.",
      indonesian: "Saya menjual motor lama."
    }
  },
  {
    id: 8,
    kanji: "忘れる",
    kana: "わすれる",
    romaji: "wasureru",
    meaning: "Lupa",
    exampleSentence: {
      japanese: "宿題を忘れました。",
      kana: "しゅくだい を わすれました。",
      romaji: "Shukudai o wasuremashita.",
      indonesian: "Saya lupa PR."
    }
  },
  {
    id: 9,
    kanji: "見る",
    kana: "みる",
    romaji: "miru",
    meaning: "Melihat",
    exampleSentence: {
      japanese: "映画を見ます。",
      kana: "えいが を みます。",
      romaji: "Eiga o mimasu.",
      indonesian: "Saya melihat / menonton film."
    }
  },
  {
    id: 10,
    kanji: "聞く",
    kana: "きく",
    romaji: "kiku",
    meaning: "Mendengar atau Bertanya",
    exampleSentence: {
      japanese: "音楽を聞きます。",
      kana: "おんがく を ききます。",
      romaji: "Ongaku o kikimasu.",
      indonesian: "Saya mendengarkan musik."
    }
  },
  {
    id: 11,
    kanji: "遊ぶ",
    kana: "あそぶ",
    romaji: "asobu",
    meaning: "Bermain",
    exampleSentence: {
      japanese: "公園で遊びます。",
      kana: "こうえん で あそびます。",
      romaji: "Kouen de asobimasu.",
      indonesian: "Bermain di taman."
    }
  },
  {
    id: 12,
    kanji: "歩く",
    kana: "あるく",
    romaji: "aruku",
    meaning: "Berjalan",
    exampleSentence: {
      japanese: "駅まで歩きます。",
      kana: "えき まで あるきます。",
      romaji: "Eki made arukimasu.",
      indonesian: "Berjalan kaki sampai stasiun."
    }
  },
  {
    id: 13,
    kanji: "眠い",
    kana: "ねむい",
    romaji: "nemui",
    meaning: "Mengantuk",
    exampleSentence: {
      japanese: "今日はとても眠いです。",
      kana: "きょう は とても ねむい です。",
      romaji: "Kyou wa totemo nemui desu.",
      indonesian: "Hari ini sangat mengantuk."
    }
  },
  {
    id: 14,
    kanji: "目が覚める",
    kana: "めがさめる",
    romaji: "me ga sameru",
    meaning: "Terbangun / Terjaga",
    exampleSentence: {
      japanese: "朝6時に目が覚めました。",
      kana: "あさ ろくじ に め が さめました。",
      romaji: "Asa rokuji ni me ga samemashita.",
      indonesian: "Saya terbangun jam 6 pagi."
    }
  },
  {
    id: 15,
    kanji: "立つ",
    kana: "たつ",
    romaji: "tatsu",
    meaning: "Berdiri",
    exampleSentence: {
      japanese: "名前を呼ばれて立ちました。",
      kana: "なまえ を よばれて たちました。",
      romaji: "Namae o yobarete tachimashita.",
      indonesian: "Dipanggil namanya lalu berdiri."
    }
  },
  {
    id: 16,
    kanji: "座る",
    kana: "すわる",
    romaji: "suwaru",
    meaning: "Duduk",
    exampleSentence: {
      japanese: "椅子に座ってください。",
      kana: "いす に すわって ください。",
      romaji: "Isu ni suwatte kudasai.",
      indonesian: "Silakan duduk di kursi."
    }
  },
  {
    id: 17,
    kanji: "帰る",
    kana: "かえる",
    romaji: "kaeru",
    meaning: "Pulang",
    exampleSentence: {
      japanese: "早く家に帰りたいです。",
      kana: "はやく いえ に かえりたい です。",
      romaji: "Hayaku ie ni kaeritai desu.",
      indonesian: "Saya ingin cepat pulang ke rumah."
    }
  },
  {
    id: 18,
    kanji: "行く",
    kana: "いく",
    romaji: "iku",
    meaning: "Pergi",
    exampleSentence: {
      japanese: "日本へ行きます。",
      kana: "にほん へ いきます。",
      romaji: "Nihon e ikimasu.",
      indonesian: "Pergi ke Jepang."
    }
  },
  {
    id: 19,
    kanji: "来る",
    kana: "くる",
    romaji: "kuru",
    meaning: "Datang",
    exampleSentence: {
      japanese: "明日友達が来ます。",
      kana: "あした ともだち が きます。",
      romaji: "Ashita tomodachi ga kimasu.",
      indonesian: "Besok teman datang."
    }
  },
  {
    id: 20,
    kanji: "食べる",
    kana: "たべる",
    romaji: "taberu",
    meaning: "Makan",
    exampleSentence: {
      japanese: "ラーメンを食べます。",
      kana: "らーめん を たべます。",
      romaji: "Raamen o tabemasu.",
      indonesian: "Makan ramen."
    }
  },
  {
    id: 21,
    kanji: "飲む",
    kana: "のむ",
    romaji: "nomu",
    meaning: "Minum",
    exampleSentence: {
      japanese: "お茶を飲みます。",
      kana: "おちゃ を のみます。",
      romaji: "Ocha o nomimasu.",
      indonesian: "Minum teh hijau."
    }
  },
  {
    id: 22,
    kanji: "寝る",
    kana: "ねる",
    romaji: "neru",
    meaning: "Tidur",
    exampleSentence: {
      japanese: "夜11時に寝ます。",
      kana: "よる じゅういちじ に ねます。",
      romaji: "Yoru juuichiji ni nemasu.",
      indonesian: "Tidur jam 11 malam."
    }
  },
  {
    id: 23,
    kanji: "電話する",
    kana: "でんわする",
    romaji: "denwa suru",
    meaning: "Menelepon",
    exampleSentence: {
      japanese: "母に電話します。",
      kana: "はは に でんわ します。",
      romaji: "Haha ni denwa shimasu.",
      indonesian: "Menelepon ibu."
    }
  },
  {
    id: 24,
    kanji: "家",
    kana: "いえ",
    romaji: "ie",
    meaning: "Rumah",
    exampleSentence: {
      japanese: "私の家はあそこです。",
      kana: "わたし の いえ は あそこ です。",
      romaji: "Watashi no ie wa asoko desu.",
      indonesian: "Rumah saya ada di sana."
    }
  },
  {
    id: 25,
    kanji: "学校",
    kana: "がっこう",
    romaji: "gakkou",
    meaning: "Sekolah",
    exampleSentence: {
      japanese: "学校は楽しいです。",
      kana: "がっこう は たのしい です。",
      romaji: "Gakkou wa tanoshii desu.",
      indonesian: "Sekolah itu menyenangkan."
    }
  },
  {
    id: 26,
    kanji: "どこへ",
    kana: "どこへ",
    romaji: "doko e",
    meaning: "Ke mana",
    exampleSentence: {
      japanese: "今からどこへ行きますか？",
      kana: "いま から どこ へ いきます か？",
      romaji: "Ima kara doko e ikimasu ka?",
      indonesian: "Mau pergi ke mana sekarang?"
    }
  },
  {
    id: 27,
    kanji: "持って行く",
    kana: "もっていく",
    romaji: "motte iku",
    meaning: "Membawa",
    exampleSentence: {
      japanese: "傘を持って行きます。",
      kana: "かさ を もって いきます。",
      romaji: "Kasa o motte ikimasu.",
      indonesian: "Membawa payung."
    }
  },
  {
    id: 28,
    kanji: "使う",
    kana: "つかう",
    romaji: "tsukau",
    meaning: "Menggunakan / Memakai",
    exampleSentence: {
      japanese: "パソコンを使います。",
      kana: "ぱそこん を つかいます。",
      romaji: "Pasokon o tsukaimasu.",
      indonesian: "Menggunakan laptop/komputer."
    }
  },
  {
    id: 29,
    kanji: "場所",
    kana: "ばしょ",
    romaji: "basho",
    meaning: "Tempat",
    exampleSentence: {
      japanese: "静かな場所が好きです。",
      kana: "しずかな ばしょ が すき です。",
      romaji: "Shizukana basho ga suki desu.",
      indonesian: "Saya suka tempat yang tenang."
    }
  },
  {
    id: 30,
    kanji: "ここへ",
    kana: "ここへ",
    romaji: "koko e",
    meaning: "Ke sini",
    exampleSentence: {
      japanese: "ここへ座ってください。",
      kana: "ここ へ すわって ください。",
      romaji: "Koko e suwatte kudasai.",
      indonesian: "Silakan duduk ke sini."
    }
  },
  {
    id: 31,
    kanji: "答える",
    kana: "こたえる",
    romaji: "kotaeru",
    meaning: "Menjawab",
    exampleSentence: {
      japanese: "質問に答えてください。",
      kana: "しつもん に こたえて ください。",
      romaji: "Shitsumon ni kotaete kudasai.",
      indonesian: "Tolong jawab pertanyaannya."
    }
  },
  {
    id: 32,
    kanji: "借りる",
    kana: "かりる",
    romaji: "kariru",
    meaning: "Meminjam",
    exampleSentence: {
      japanese: "図書館で本を借ります。",
      kana: "としょかん で ほん を かります。",
      romaji: "Toshokan de hon o karimasu.",
      indonesian: "Meminjam buku di perpustakaan."
    }
  },
  {
    id: 33,
    kanji: "知らない",
    kana: "しらない",
    romaji: "shiranai",
    meaning: "Tidak tahu",
    exampleSentence: {
      japanese: "その人の名前を知らない。",
      kana: "その ひと の なまえ を しらない。",
      romaji: "Sono hito no namae o shiranai.",
      indonesian: "Saya tidak tahu nama orang itu."
    }
  },
  {
    id: 34,
    kanji: "待つ",
    kana: "まつ",
    romaji: "matsu",
    meaning: "Menunggu",
    exampleSentence: {
      japanese: "ここで少し待ってください。",
      kana: "ここ で すこし まって ください。",
      romaji: "Koko de sukoshi matte kudasai.",
      indonesian: "Tolong tunggu sebentar di sini."
    }
  },
  {
    id: 35,
    kanji: "一度もない",
    kana: "いちどもない",
    romaji: "ichido mo nai",
    meaning: "Tidak pernah",
    exampleSentence: {
      japanese: "日本へ行ったことが一度もない。",
      kana: "にほん へ いった こと が いちども ない。",
      romaji: "Nihon e itta koto ga ichido mo nai.",
      indonesian: "Sama sekali tidak pernah pergi ke Jepang."
    }
  },
  {
    id: 36,
    kanji: "もう",
    kana: "もう",
    romaji: "mou",
    meaning: "Sudah",
    exampleSentence: {
      japanese: "もうご飯を食べましたか？",
      kana: "もう ごはん を たべました か？",
      romaji: "Mou gohan o tabemashita ka?",
      indonesian: "Apakah kamu sudah makan?"
    }
  }
];

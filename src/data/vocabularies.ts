export interface Vocabulary {
  id: number;
  kanji: string;
  kana: string;
  romaji: string;
  meaning: string;
  exampleSentence?: {
    japanese: string;
    indonesian: string;
  };
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
      japanese: "音楽を聞きます / 先生に聞きます。",
      indonesian: "Mendengarkan musik / Bertanya ke guru."
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
      indonesian: "Apakah kamu sudah makan?"
    }
  }
];


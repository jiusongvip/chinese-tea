export interface TastingTerm {
  term: string;
  zh: string;
  pinyin: string;
  definition: string;
}

export interface TastingTermCategory {
  name: string;
  blurb: string;
  terms: TastingTerm[];
}

export const tastingTermCategories: TastingTermCategory[] = [
  {
    name: "Classification",
    blurb: "The six-color names Chinese tea drinkers use to group teas — and the terms behind the confusion in translation.",
    terms: [
      {
        term: "Qing cha",
        zh: "青茶",
        pinyin: "qīng chá",
        definition: "'Blue-green tea' — the formal color-category name for oolong. In the six-color classification, oolong is the 'blue' in the lineup (qing literally means blue-green), which is why older English sources sometimes call oolong 'blue tea'.",
      },
      {
        term: "Hong cha",
        zh: "红茶",
        pinyin: "hóng chá",
        definition: "'Red tea' — the Chinese name for what the West calls black tea, taken from the reddish-amber liquor. The same leaves, two names, endless confusion.",
      },
      {
        term: "Hei cha",
        zh: "黑茶",
        pinyin: "hēi chá",
        definition: "'Dark tea' — the fermented category, distinct from red tea. Pu-erh is its most famous member. The two names (hei vs hong) are why 'black tea' is ambiguous in translation.",
      },
    ],
  },
  {
    name: "Aftertaste & Energy",
    blurb: "The terms Chinese tea drinkers use for what lingers after you swallow.",
    terms: [
      {
        term: "Hui gan",
        zh: "回甘",
        pinyin: "huí gān",
        definition: "'Returning sweetness' — the sweet, cooling aftertaste that emerges in your throat after the initial flavor fades. The most prized quality in Chinese tea. A tea with good hui gan starts slightly bitter or astringent, then transforms into a lingering sweetness that can last for minutes.",
      },
      {
        term: "Yan yun",
        zh: "岩韵",
        pinyin: "yán yùn",
        definition: "'Rock rhyme' — the mineral, rocky character of Wuyi Mountain rock oolongs, impossible to replicate off the mountain. A combination of stone-like minerality and a deep, lingering finish that defines teas like Da Hong Pao.",
      },
      {
        term: "Shan yun",
        zh: "山韵",
        pinyin: "shān yùn",
        definition: "'Mountain charm' — the depth and clarity high-altitude tea acquires from cool, misty growing conditions. Drinker's shorthand for the 'mountain character' that premium high-mountain teas carry.",
      },
      {
        term: "Cha qi",
        zh: "茶气",
        pinyin: "chá qì",
        definition: "'Tea energy' — the subtle, subjective bodily sensation some drinkers feel from very old, very high-quality teas (warmth, calm focus, a buzz without caffeine jitters). Not a measurable compound; a connoisseur concept.",
      },
      {
        term: "Yun",
        zh: "韵",
        pinyin: "yùn",
        definition: "'Rhyme' — the quality of a finish that lingers and evolves after swallowing. A tea 'has yun' when its aftertaste keeps unfolding. The highest compliment in Chinese tea vocabulary.",
      },
    ],
  },
  {
    name: "Mouthfeel & Taste",
    blurb: "How the tea feels and tastes in the mouth.",
    terms: [
      {
        term: "Se",
        zh: "涩",
        pinyin: "sè",
        definition: "'Astringent' — the drying, puckering sensation caused by tannins. A little se is expected in good young teas and fades into sweetness; too much signals poor leaf or over-steeping.",
      },
      {
        term: "Ku",
        zh: "苦",
        pinyin: "kǔ",
        definition: "'Bitter' — a taste, distinct from astringency. Good bitterness is clean, brief, and resolves into hui gan; bad bitterness lingers and coats the mouth.",
      },
      {
        term: "Gan",
        zh: "甘",
        pinyin: "gān",
        definition: "'Sweetness' — the naturally sweet character of good leaf, often appearing as an aftertaste rather than upfront. Not added sugar; the tea's own amino acids and sugars.",
      },
      {
        term: "Xian",
        zh: "鲜",
        pinyin: "xiān",
        definition: "'Umami' — a savory, brothy richness. Highest in shade-grown and albino teas like Anji Bai Cha, whose high theanine creates a distinctive mouth-watering sweetness.",
      },
      {
        term: "Kou gan",
        zh: "口感",
        pinyin: "kǒu gǎn",
        definition: "'Mouthfeel' — the overall tactile character of the tea: creamy, coating, silky, or watery. The quality of mouthfeel is a strong indicator of leaf grade.",
      },
    ],
  },
  {
    name: "Aroma Notes",
    blurb: "The fragrance vocabulary for describing what you smell in the leaves and the cup.",
    terms: [
      {
        term: "Xiang",
        zh: "香",
        pinyin: "xiāng",
        definition: "'Fragrance' — the general term for aroma. A tea's xiang is evaluated dry (in the leaf), wet (after rinse), and in the empty cup (gong xiang bei, the aroma cup).",
      },
      {
        term: "Hua xiang",
        zh: "花香",
        pinyin: "huā xiāng",
        definition: "'Floral fragrance' — orchid, lilac, gardenia, jasmine. The signature of Tie Guan Yin and many high-mountain oolongs.",
      },
      {
        term: "Mi xiang",
        zh: "蜜香",
        pinyin: "mì xiāng",
        definition: "'Honey fragrance' — a natural sweet, honeyed note, prominent in Dan Cong cultivars like Mi Lan Xiang (Honey Orchid) and in aged white teas.",
      },
      {
        term: "Zhang xiang",
        zh: "樟香",
        pinyin: "zhāng xiāng",
        definition: "'Camphor fragrance' — a cool, medicinal camphor note that aged sheng pu-erh develops over decades of storage. One of the most prized aromas in aged tea.",
      },
    ],
  },
  {
    name: "Processing & Storage",
    blurb: "Tasting terms that point back to how the tea was made or kept.",
    terms: [
      {
        term: "Wo dui wei",
        zh: "渥堆味",
        pinyin: "wò duī wèi",
        definition: "'Wet-pile flavor' — the earthy, slightly funky note of newly finished ripe pu-erh. It should fade within months of airing; a strong, fishy version signals poor fermentation.",
      },
      {
        term: "Cang wei",
        zh: "仓味",
        pinyin: "cāng wèi",
        definition: "'Storage mustiness' — a damp, cellar-like note from humid storage. Slight amounts can add depth to aged tea; strong mustiness signals bad storage conditions.",
      },
      {
        term: "Yan huo",
        zh: "烟火",
        pinyin: "yān huǒ",
        definition: "'Smoke' — the campfire character of pine-smoked Lapsang Souchong or the char of a heavy roast. Genuine smoke should be balanced, never acrid or chemical.",
      },
      {
        term: "Huo yun",
        zh: "火韵",
        pinyin: "huǒ yùn",
        definition: "'Roast finish' — the warm, toasty quality a charcoal roast leaves on an oolong. A good huo yun integrates with the tea rather than sitting on top of it.",
      },
    ],
  },
];

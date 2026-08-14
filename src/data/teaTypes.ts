import type { TeaTypeSlug } from "./teas";

export interface TeaTypeAccent {
  badge: string;
  chip: string;
  text: string;
  bg: string;
  border: string;
  dot: string;
}

export interface TeaTypeProcess {
  term: string;
  zh: string;
  literal: string;
  body: string;
}

export interface TeaType {
  slug: TeaTypeSlug;
  name: string;
  nameShort: string;
  nameZh: string;
  namePinyin: string;
  oxidation: string;
  caffeine: string;
  brewTemp: string;
  brewTime: string;
  beginner: number; // 1-5
  priceRange: string;
  description: string;
  process: TeaTypeProcess;
  misconceptions: string[];
  oneLiner: string;
  relatedNote?: { title: string; body: string };
  exampleNames: string[];
  image: string;
  accent: TeaTypeAccent;
}

export const teaTypes: TeaType[] = [
  {
    slug: "green",
    name: "Green Tea",
    nameShort: "Green",
    nameZh: "绿茶",
    namePinyin: "lǜ chá",
    oxidation: "0% (unoxidized)",
    caffeine: "Medium",
    brewTemp: "160-175°F",
    brewTime: "2-3 min",
    beginner: 5,
    priceRange: "$5-40 / 100g",
    description: "Leaves are pan-fired or oven-dried immediately after picking to halt oxidation, preserving their green color and fresh character. The most ancient tea processing method, dating back over 1,500 years. Best consumed within 6-12 months of harvest for peak freshness.",
    process: {
      term: "Fixing",
      zh: "杀青",
      literal: "shā qīng — 'kill-green'",
      body: "Green tea is defined by one step: fixing — applying heat to the freshly picked leaf within hours of harvest to deactivate the enzymes that drive oxidation. Do it early enough and the leaf stays green, the fresh character is preserved, and you get what most people picture when they think of Chinese tea. How the leaf is fixed matters enormously: Chinese greens are pan-fired — tumbled in a hot wok or drum — which produces a toasted, nutty character, while Japanese greens are steamed, preserving more vegetal, grassy notes. Same plant, same step, different method, completely different cup. Dragon Well is the classic pan-fired Chinese green: flat leaves, chestnut sweetness, a little roast.",
    },
    misconceptions: [
      "Green tea isn't green by accident — it is deliberately killed-green within hours of picking. Skip the fix and the same leaf keeps oxidizing into black tea.",
      "Boiling water destroys green tea. The delicate leaves want 160-175°F, not 212°F — a kettle that holds temperature matters more than the leaf grade for the first few brews.",
      "Green tea is the most time-sensitive type in the whole category — it's fresh produce, not a pantry staple. Drink within 6-12 months of harvest.",
    ],
    oneLiner: "Fixed early; pan-fired Chinese styles are toasted and nutty, steamed Japanese styles are vegetal.",
    exampleNames: ["Longjing", "Biluochun", "Maofeng"],
    image: "/images/green-tea.webp",
    accent: {
      badge: "bg-emerald-100 text-emerald-800",
      chip: "bg-emerald-50 text-emerald-700",
      text: "text-emerald-700",
      bg: "bg-emerald-50",
      border: "border-emerald-200",
      dot: "bg-emerald-500",
    },
  },
  {
    slug: "white",
    name: "White Tea",
    nameShort: "White",
    nameZh: "白茶",
    namePinyin: "bái chá",
    oxidation: "0% (unoxidized)",
    caffeine: "Low",
    brewTemp: "175-185°F",
    brewTime: "3-5 min",
    beginner: 5,
    priceRange: "$10-60 / 100g",
    description: "The least processed of all teas — simply withered and dried, with no rolling, pan-firing, or oxidation. This minimal intervention preserves the leaf's natural sweetness and delicate character. Made from young buds and leaves covered in fine silvery down, which gives the tea its name. The most forgiving to brew and the gentlest on the palate — the ideal starting point for any tea journey.",
    process: {
      term: "Withering",
      zh: "萎凋",
      literal: "wěi diāo — 'to wither'",
      body: "White tea production involves withering — laying freshly picked leaves out to rest for one to several days — then drying. No fixing, no rolling, no deliberate oxidation step. But during the long wither, a small amount of natural oxidation occurs as cell walls relax. It's minimal but real, and it produces the honey and hay notes that characterize the category. White tea isn't truly unoxidized; it's just unintentionally, gently oxidized. And because the oxidative enzymes were never deactivated, slow transformation continues for years — honey deepens, fresh hay becomes dried fruit. Aged white tea is a distinct and serious subgenre.",
    },
    misconceptions: [
      "White tea isn't truly unoxidized — gentle, unintentional oxidation during the long wither is exactly what creates its honey and hay notes.",
      "White tea isn't always buds only. Silver Needle is — one unopened bud per pick — but White Peony uses one bud with one or two young leaves, which gives it more substance and makes it a better everyday tea.",
      "White tea ages, which almost no other delicate tea does — because the enzymes were never killed, the leaf keeps slowly transforming for years.",
    ],
    oneLiner: "Withered and dried; minimal natural oxidation produces honey, hay, and subtle fruit.",
    exampleNames: ["Silver Needle", "White Peony", "Shou Mei"],
    image: "/images/white-tea.webp",
    accent: {
      badge: "bg-stone-200 text-stone-800",
      chip: "bg-amber-50 text-amber-700",
      text: "text-amber-700",
      bg: "bg-amber-50",
      border: "border-amber-200",
      dot: "bg-amber-400",
    },
  },
  {
    slug: "yellow",
    name: "Yellow Tea",
    nameShort: "Yellow",
    nameZh: "黄茶",
    namePinyin: "huáng chá",
    oxidation: "5-10% (lightly oxidized)",
    caffeine: "Low",
    brewTemp: "175-185°F",
    brewTime: "2-3 min",
    beginner: 4,
    priceRange: "$15-80 / 100g",
    description: "The rarest category — only a handful of producers still make it. After pan-firing like green tea, leaves undergo men huan (sealing yellow): a gentle, multi-hour sweat that removes grassy notes and creates a uniquely mellow, almost buttery character. A true connoisseur's find.",
    process: {
      term: "Sealing the yellow",
      zh: "焖黄",
      literal: "mèn huáng — 'to seal/stew the yellow'",
      body: "Yellow tea begins exactly like green tea — fixed with heat — then takes one extra step that defines the category: men huang ('sealing the yellow'). The warm, just-fixed leaves are wrapped in cloth or paper and left in small bundles. Residual heat and moisture slowly break down chlorophylls, mellow the vegetal edge, and allow minimal oxidation to develop. The result is the freshness of green tea with a softer, rounder character — less grassy, more honeyed. The category nearly vanished in the 20th century: the step is labor-intensive, the knowledge was disrupted, and many producers found it easier to sell the leaves as green tea without the extra work. This still happens — some 'yellow' teas on the market skipped the defining step entirely.",
    },
    misconceptions: [
      "Most 'yellow tea' sold today skipped the men huang step and is really green tea in disguise — genuine yellow tea is genuinely rare.",
      "Yellow tea isn't a green tea variety — the extra wrapping-and-stewing step is a real, separate category with its own softer, honeyed character.",
      "A 'yellow tea' that tastes identical to a green tea probably never underwent the defining step — the telltale sign is the mellow, almost buttery roundness.",
    ],
    oneLiner: "Green processing plus men huang wrapping; mellower and rounder than green, rarely made correctly anymore.",
    exampleNames: ["Junshan Yinzhen", "Mengding Huangya"],
    image: "/images/yellow-tea.webp",
    accent: {
      badge: "bg-yellow-100 text-yellow-800",
      chip: "bg-yellow-50 text-yellow-700",
      text: "text-yellow-700",
      bg: "bg-yellow-50",
      border: "border-yellow-200",
      dot: "bg-yellow-500",
    },
  },
  {
    slug: "oolong",
    name: "Oolong Tea",
    nameShort: "Oolong",
    nameZh: "乌龙茶",
    namePinyin: "wūlóng chá",
    oxidation: "10-70% (partially oxidized)",
    caffeine: "Low-Medium",
    brewTemp: "185-205°F",
    brewTime: "30-60s",
    beginner: 4,
    priceRange: "$8-200+ / 100g",
    description: "The most diverse category — oxidation ranges from 10% (floral Tie Guan Yin) to 70% (roasted Da Hong Pao). Leaves are bruised, rolled, and sometimes roasted. Many oolongs are tightly rolled into balls that unfurl across 5-8+ infusions, each steep revealing new layers.",
    process: {
      term: "Rocking the green",
      zh: "摇青",
      literal: "yáo qīng — 'to rock/shake the green'",
      body: "The defining production step in traditional oolong is yao qing ('rocking the green') — shaking or tumbling the leaves to bruise just the edges. Oxidation begins at the leaf margins while the center stays green. The producer watches, then fixes the leaves with heat to stop oxidation at the desired point. A lightly oxidized oolong leaf shows this clearly: brown edges around a still-green center. Because the range runs from roughly 10% to 85% oxidized, 'oolong' spans from pale, floral jade oolong to dark-mahogany Da Hong Pao — one category, radically different drinks. Rock oolongs push oxidation much further, then add charcoal roasting, a step that builds depth no amount of oxidation alone can produce.",
    },
    misconceptions: [
      "Oolong isn't one flavor — it spans roughly 10-85% oxidation, from floral, nearly-green jade oolong to deeply roasted Da Hong Pao.",
      "The charcoal roast of Wuyi rock teas is a step beyond oxidation — it's what creates yan yun (岩韵, 'rock rhyme'), the mineral depth of the mountain.",
      "Oolong's official color-category name is qing cha (青茶, 'blue-green tea') — in the six-color classification it's the 'blue' in the lineup, which is why some older translations call oolong 'blue tea'.",
      "Ball-rolled oolongs aren't broken or poor quality — the tight pellets are how the tea is shaped, and they unfurl dramatically across 5-8+ infusions.",
    ],
    oneLiner: "Semi-oxidized via edge-bruising; the widest category, from nearly green to nearly black.",
    relatedNote: {
      title: "The Taiwan Connection",
      body: "No tour of oolongs is complete without Taiwan. The island's high-mountain (gaoshan) oolongs — from Alishan, Lishan, and Dayuling — grow above 1,000m in cool mist and are famous for a creamy, milky body and gentle floral character. Dong Ding Oolong (frozen summit) is the classic roasted style, Wenshan Baozhong the lightest, barely-oxidized oolong, and Oriental Beauty (Dongfang Meiren) an insect-bitten tea with honey and muscat notes. Taiwan's teas share the same Camellia sinensis plant and the same qing cha (blue-green) classification as mainland oolongs — which is why they show up in every 'Chinese oolong' conversation. This guide keeps its focus on the mainland's famous teas; to see how the four oolong families (Anxi, Wuyi, Dan Cong, Taiwan) differ, read the four families of oolong guide.",
    },
    exampleNames: ["Tie Guan Yin", "Da Hong Pao", "Dan Cong"],
    image: "/images/oolong-tea.webp",
    accent: {
      badge: "bg-orange-100 text-orange-800",
      chip: "bg-orange-50 text-orange-700",
      text: "text-orange-700",
      bg: "bg-orange-50",
      border: "border-orange-200",
      dot: "bg-orange-500",
    },
  },
  {
    slug: "black",
    name: "Black Tea",
    nameShort: "Black",
    nameZh: "红茶",
    namePinyin: "hóng chá",
    oxidation: "100% (fully oxidized)",
    caffeine: "Medium",
    brewTemp: "195-212°F",
    brewTime: "3-5 min",
    beginner: 5,
    priceRange: "$8-50 / 100g",
    description: "Called hong cha (red tea) in Chinese — named for the reddish liquor, not the leaf. The leaves are fully oxidized before drying, creating deep, malty flavors. Chinese black teas are generally smoother and less astringent than Indian varieties and are excellent without milk.",
    process: {
      term: "Full oxidation",
      zh: "全发酵",
      literal: "quán fājiào — 'full oxidation'",
      body: "Black tea is fully oxidized. After picking and withering, the leaves are rolled to break down cell walls and release the enzymes that drive oxidation. The leaves are then left to oxidize as completely as possible before drying. Catechins convert to theaflavins and thearubigins — the compounds that produce the amber-red liquor and brisk character. The result is the most stable type in the collection: already heavily oxidized, it stores well and doesn't deteriorate quickly. Chinese black teas are almost always congou-style — whole-leaf, carefully processed, with distinct regional characters: Keemun from Anhui, Dian Hong from Yunnan — same method, different cultivars, different terroir, different cups.",
    },
    misconceptions: [
      "Chinese 'black tea' is hong cha (红茶, 'red tea') — named for the red liquor, not the leaf. The Chinese 'dark tea' category (hei cha) is the fermented one, which is where Pu'er belongs.",
      "Black tea and red tea are the same tea — the confusion is purely a translation artifact of naming the category after the liquor color.",
      "Chinese black teas aren't the aggressive, tannic brews you may know from bags — whole-leaf congou styles are smooth and need no milk.",
    ],
    oneLiner: "Fully oxidized; brisk and stable, with distinct regional character in whole-leaf Chinese versions.",
    exampleNames: ["Keemun", "Dian Hong", "Lapsang"],
    image: "/images/black-tea.webp",
    accent: {
      badge: "bg-red-100 text-red-800",
      chip: "bg-red-50 text-red-700",
      text: "text-red-700",
      bg: "bg-red-50",
      border: "border-red-200",
      dot: "bg-red-500",
    },
  },
  {
    slug: "dark",
    name: "Dark Tea",
    nameShort: "Dark",
    nameZh: "黑茶",
    namePinyin: "hēi chá",
    oxidation: "Post-fermented",
    caffeine: "Medium-High",
    brewTemp: "200-212°F",
    brewTime: "30-60s",
    beginner: 4,
    priceRange: "$10-500+ / 357g",
    description: "Unlike other teas, dark tea undergoes microbial fermentation after initial processing — similar to composting or aging cheese. Pu-erh is the most famous, but the category also includes Liu Bao and Fu Zhuan. Many dark teas improve with age like fine wine, developing complex earthy, woody, and medicinal notes over decades.",
    process: {
      term: "Microbial fermentation",
      zh: "微生物发酵",
      literal: "wēishēngwù fājiào — 'microbial fermentation'",
      body: "Pu'er is the outlier. Every other tea type is defined by enzymatic oxidation — the browning reaction driven by enzymes within the leaf, the same process that turns a cut apple brown. Pu'er is defined by microbial fermentation: bacteria, fungi, and other microorganisms acting on the leaf over time. It's a fundamentally different chemical process, which is why Pu'er sits in its own category — hei cha (dark tea). Raw Pu'er (sheng, 生) starts as a compressed cake and transforms slowly over years through natural microbial activity; it can age for decades and is traded with vintage values. Ripe Pu'er (shou, 熟), developed in the 1970s, uses a controlled wet-piling fermentation that achieves in months what aging achieves over years.",
    },
    misconceptions: [
      "Pu'er is fermented, not oxidized — the difference is microbial activity versus leaf enzymes. It's a fundamentally different chemistry, not just 'really oxidized tea'.",
      "Sheng and shou pu'er taste nothing alike. Shou is the approachable, earthy, smooth entry point; young sheng is bright, astringent, and bitter-sweet.",
      "Aging pu'er requires breathable storage, not an airtight jar — seal it in plastic and it stops aging (and risks molding instead).",
    ],
    oneLiner: "Microbially fermented rather than oxidized; earthy and smooth, ages like wine.",
    exampleNames: ["Pu-erh", "Liu Bao", "Tian Jian"],
    image: "/images/dark-tea.webp",
    accent: {
      badge: "bg-stone-200 text-stone-800",
      chip: "bg-stone-100 text-stone-700",
      text: "text-stone-700",
      bg: "bg-stone-100",
      border: "border-stone-200",
      dot: "bg-stone-600",
    },
  },
];

const typeBySlug = new Map<string, TeaType>(teaTypes.map((t) => [t.slug, t]));

export function getTeaType(slug: string): TeaType | undefined {
  return typeBySlug.get(slug);
}

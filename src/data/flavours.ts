export interface FlavourBucket {
  slug: string;
  name: string;
  blurb: string;
  accent: string;
  teas: string[];
}

export const flavourBuckets: FlavourBucket[] = [
  {
    slug: "floral",
    name: "Floral",
    blurb: "Orchid, lilac, and gardenia notes — the fragrance-forward teas that bloom in the cup.",
    accent: "bg-pink-50 text-pink-700 border-pink-200",
    teas: ["tie-guan-yin", "huangshan-maofeng", "white-peony", "biluochun", "phoenix-dan-cong", "anji-bai-cha", "taiping-houkui", "xinyang-maojian", "junshan-yinzhen"],
  },
  {
    slug: "fresh-grassy",
    name: "Fresh & Grassy",
    blurb: "Crisp, vegetal, and clean — the signature character of China's finest green teas.",
    accent: "bg-emerald-50 text-emerald-700 border-emerald-200",
    teas: ["longjing", "biluochun", "gunpowder-green", "huangshan-maofeng", "pu-erh-sheng", "taiping-houkui", "liuan-guapian", "xinyang-maojian"],
  },
  {
    slug: "fruity",
    name: "Fruity",
    blurb: "Apricot, peach, and melon — natural fruit notes that need no flavoring.",
    accent: "bg-rose-50 text-rose-700 border-rose-200",
    teas: ["biluochun", "silver-needle", "phoenix-dan-cong", "white-peony", "shoumei"],
  },
  {
    slug: "nutty",
    name: "Nutty",
    blurb: "Toasted chestnut and roast grains — the warm, savory side of green tea.",
    accent: "bg-amber-50 text-amber-700 border-amber-200",
    teas: ["longjing", "huangshan-maofeng", "anji-bai-cha", "taiping-houkui", "liuan-guapian"],
  },
  {
    slug: "honey-sweet",
    name: "Honey & Sweet",
    blurb: "Naturally sweet cups with honey, sweet potato, and lingering sweetness.",
    accent: "bg-yellow-50 text-yellow-700 border-yellow-200",
    teas: ["silver-needle", "white-peony", "dian-hong", "phoenix-dan-cong", "anji-bai-cha", "shoumei", "junshan-yinzhen", "jin-jun-mei"],
  },
  {
    slug: "malty-cocoa",
    name: "Malty & Cocoa",
    blurb: "Rich, full-bodied black teas with malt, cocoa, and a hint of smoke.",
    accent: "bg-red-50 text-red-700 border-red-200",
    teas: ["keemun", "dian-hong", "pu-erh-shou", "jin-jun-mei"],
  },
  {
    slug: "smoky-roasted",
    name: "Smoky & Roasted",
    blurb: "Campfire smoke, charcoal roast, and pine — bold and warming.",
    accent: "bg-stone-200 text-stone-800 border-stone-300",
    teas: ["lapsang-souchong", "da-hong-pao", "gunpowder-green", "pu-erh-sheng", "liuan-guapian"],
  },
  {
    slug: "earthy-woody",
    name: "Earthy & Woody",
    blurb: "Damp earth, aged wood, and dark chocolate — the fermented, aged character of dark tea.",
    accent: "bg-stone-100 text-stone-700 border-stone-200",
    teas: ["pu-erh-shou", "pu-erh-sheng", "shoumei"],
  },
];

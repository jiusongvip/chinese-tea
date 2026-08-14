import type { TeaTypeSlug } from "./teas";

export interface BrewingGuide {
  slug: TeaTypeSlug;
  name: string;
  title: string;
  temp: string;
  time: string;
  vessel: string;
  ratio: string;
  tips: string;
}

export const brewingGuides: BrewingGuide[] = [
  {
    slug: "green",
    name: "Green Tea",
    title: "Brewing Green Tea",
    temp: "160-175°F (70-80°C)",
    time: "2-3 minutes",
    vessel: "Glass teapot or gaiwan",
    ratio: "2g per 200ml",
    tips: "Never use boiling water; it burns the leaves and creates bitterness. Watch the leaves dance in a glass vessel.",
  },
  {
    slug: "oolong",
    name: "Oolong Tea",
    title: "Brewing Oolong Tea",
    temp: "185-205°F (85-95°C)",
    time: "30-60 seconds (gongfu)",
    vessel: "Yixing clay pot or gaiwan",
    ratio: "5g per 100ml",
    tips: "Use gongfu style for best results. Oolongs shine across 5-8 infusions, with flavor evolving each round.",
  },
  {
    slug: "black",
    name: "Black Tea",
    title: "Brewing Black Tea",
    temp: "195-212°F (90-100°C)",
    time: "3-5 minutes",
    vessel: "Porcelain teapot",
    ratio: "2.5g per 200ml",
    tips: "Chinese black teas (hong cha) are smoother than Indian and do not need milk.",
  },
  {
    slug: "white",
    name: "White Tea",
    title: "Brewing White Tea",
    temp: "175-185°F (80-85°C)",
    time: "3-5 minutes",
    vessel: "Glass or porcelain",
    ratio: "2g per 200ml",
    tips: "White tea is the most forgiving; hard to over-brew. Aged white teas can handle hotter water.",
  },
  {
    slug: "dark",
    name: "Pu-erh & Dark Tea",
    title: "Brewing Pu-erh & Dark Tea",
    temp: "200-212°F (95-100°C)",
    time: "20-40 seconds (gongfu)",
    vessel: "Yixing clay pot or gaiwan",
    ratio: "5g per 100ml",
    tips: "Always rinse pu-erh twice before drinking — quick rinses wake up the leaves. Dark teas like Liu Bao and Fu Zhuan can steep 8-15+ times and develop deeper character with each infusion.",
  },
  {
    slug: "yellow",
    name: "Yellow Tea",
    title: "Brewing Yellow Tea",
    temp: "170-180°F (75-82°C)",
    time: "2-3 minutes",
    vessel: "Glass or porcelain gaiwan",
    ratio: "2g per 200ml",
    tips: "Yellow tea is rare and delicate — treat it gently. The 'men huang' (yellowing) step gives it a uniquely mellow, sweet character distinct from green tea.",
  },
];

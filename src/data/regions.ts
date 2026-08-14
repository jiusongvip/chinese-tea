export interface Region {
  slug: string;
  name: string;
  nameZh: string;
  tagline: string;
  terroir: string;
  tradition: string;
  teas: { name: string; nameZh: string }[];
  accent: string;
  image: string;
}

export const regions: Region[] = [
  {
    slug: "zhejiang",
    name: "Zhejiang",
    nameZh: "浙江",
    tagline: "Home of China's most famous green tea, blessed with misty mountains and mild climate.",
    terroir: "West Lake's misty hills and mineral-rich springs give Longjing its signature chestnut aroma.",
    tradition: "Zhejiang greens are pan-fired (not steamed) for a toasty warmth — 18 imperial Longjing bushes still produce today.",
    teas: [
      { name: "Longjing", nameZh: "龙井" },
      { name: "Anji Bai Cha", nameZh: "安吉白茶" },
      { name: "Gunpowder", nameZh: "珠茶" },
    ],
    accent: "emerald",
    image: "/images/teas/longjing.webp",
  },
  {
    slug: "fujian",
    name: "Fujian",
    nameZh: "福建",
    tagline: "China's tea capital — produces more tea varieties than any other province.",
    terroir: "Wuyi's volcanic soil creates the 'rock rhythm' (岩韵) of Da Hong Pao; Fuding's coastal mist grows Silver Needle.",
    tradition: "Birthplace of gongfu cha and the oolong category — the widest flavor spectrum in tea.",
    teas: [
      { name: "Tie Guan Yin", nameZh: "铁观音" },
      { name: "Da Hong Pao", nameZh: "大红袍" },
      { name: "Silver Needle", nameZh: "白毫银针" },
      { name: "Lapsang", nameZh: "正山小种" },
    ],
    accent: "orange",
    image: "/images/teas/da-hong-pao.webp",
  },
  {
    slug: "yunnan",
    name: "Yunnan",
    nameZh: "云南",
    tagline: "Birthplace of tea itself — ancient tea forests and the home of Pu-erh.",
    terroir: "Ancient forests at 1,200-2,000m hold 500-1,000-year-old wild trees with unmatched depth.",
    tradition: "The Tea Horse Road carried pressed pu-erh cakes to Tibet for over a thousand years.",
    teas: [
      { name: "Pu-erh", nameZh: "普洱茶" },
      { name: "Dian Hong", nameZh: "滇红" },
      { name: "Yunnan Green", nameZh: "云南绿茶" },
    ],
    accent: "stone",
    image: "/images/teas/pu-erh-sheng.jpg",
  },
  {
    slug: "anhui",
    name: "Anhui",
    nameZh: "安徽",
    tagline: "Known for its iconic Yellow Mountain teas and the world-famous Keemun black tea.",
    terroir: "Cloud-shrouded gardens above 800m on Huangshan grow slow, flavor-dense leaves.",
    tradition: "Home to three of China's Top Ten Teas, celebrated in centuries of tea poetry.",
    teas: [
      { name: "Huangshan Maofeng", nameZh: "黄山毛峰" },
      { name: "Keemun", nameZh: "祁门红茶" },
      { name: "Huoshan Huangya", nameZh: "霍山黄芽" },
    ],
    accent: "yellow",
    image: "/images/teas/huangshan-maofeng.webp",
  },
  {
    slug: "jiangsu",
    name: "Jiangsu",
    nameZh: "江苏",
    tagline: "Produces Biluochun, one of China's top ten teas, known for delicate fruity notes.",
    terroir: "Dongting Mountain's fruit orchards perfume the leaves with Biluochun's signature fruity bouquet.",
    tradition: "Suzhou's classical gardens and literati turned tea appreciation into an art form.",
    teas: [
      { name: "Biluochun", nameZh: "碧螺春" },
      { name: "Rain Flower", nameZh: "雨花茶" },
    ],
    accent: "sky",
    image: "/images/teas/biluochun.jpg",
  },
  {
    slug: "guangdong",
    name: "Guangdong",
    nameZh: "广东",
    tagline: "Famous for Phoenix Dancong oolongs with natural fruit and floral aromas.",
    terroir: "Phoenix Mountain's volcanic soil lets Dan Cong naturally mimic fruit and flower fragrances.",
    tradition: "Chaozhou's gongfu ceremony uses tiny pots and flash infusions — tea is a way of life.",
    teas: [
      { name: "Phoenix Dan Cong", nameZh: "凤凰单丛" },
      { name: "Mi Lan Xiang", nameZh: "蜜兰香" },
    ],
    accent: "rose",
    image: "/images/teas/phoenix-dan-cong.jpg",
  },
];

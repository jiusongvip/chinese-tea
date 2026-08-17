import { teas } from "./teas";
import { teaTypes } from "./teaTypes";

export const SITE = {
  name: "Chinese Tea Guide",
  url: "https://chin-tea.com",
  description:
    "A practical guide to Chinese tea — the six major types, 21 famous teas with brewing and buying guides, brewing methods, tea regions, culture, and how to choose the right tea for your taste.",
  author: "Chinese Tea Guide",
  email: "hello@chin-tea.com",
  defaultOg: "/images/chinese-tea-og.webp",
  ogWidth: 1200,
  ogHeight: 630,
} as const;

export interface PageMeta {
  label: string;
  lastmod: string;
  og?: string;
}

const LASTMOD = "2026-08-12";

export const pageMeta: Record<string, PageMeta> = {
  "/": { label: "Home", lastmod: LASTMOD },

  "/teas": { label: "Famous Teas", lastmod: LASTMOD },
  "/best-teas": { label: "Best Chinese Teas", lastmod: LASTMOD },
  "/types": { label: "The Six Types", lastmod: LASTMOD },
  "/flavours": { label: "Flavour Guide", lastmod: LASTMOD },
  "/tasting-terms": { label: "Tasting Terms", lastmod: LASTMOD },
  "/regions": { label: "Tea by Region", lastmod: LASTMOD },
  "/culture": { label: "Tea Culture", lastmod: LASTMOD },
  "/health": { label: "Health Benefits", lastmod: LASTMOD },
  "/pairing": { label: "Tea & Food Pairing", lastmod: LASTMOD },
  "/teaware": { label: "Teaware Essentials", lastmod: LASTMOD },

  "/guides/brewing": { label: "Brewing Guide", lastmod: LASTMOD },
  "/guides/buying": { label: "Buying Guide", lastmod: LASTMOD },
  "/guides/storage": { label: "Storage Guide", lastmod: LASTMOD },
  "/guides/water": { label: "Water Guide", lastmod: LASTMOD },
  "/guides/cold-brew": { label: "Cold Brew Guide", lastmod: LASTMOD },
  "/guides/production": { label: "How Tea Is Made", lastmod: LASTMOD },
  "/guides/beginners": { label: "Tea for Beginners", lastmod: LASTMOD },
  "/guides/oolong-styles": { label: "The Four Families of Oolong", lastmod: LASTMOD },
  "/guides": { label: "All Guides", lastmod: LASTMOD },

  "/about": { label: "About & Contact", lastmod: LASTMOD },
  "/faq": { label: "FAQ", lastmod: LASTMOD },
  "/privacy": { label: "Privacy Policy", lastmod: LASTMOD },

  "/blog": { label: "Blog", lastmod: LASTMOD },
  "/blog/history-of-chinese-tea": { label: "The History of Chinese Tea", lastmod: LASTMOD },
  "/blog/gongfu-brewing-at-home": { label: "Gongfu Brewing at Home", lastmod: LASTMOD },
  "/blog/green-vs-white-tea": { label: "Green vs White Tea", lastmod: LASTMOD },

  ...Object.fromEntries(
    teaTypes.map((t) => [`/types/${t.slug}`, { label: t.name, lastmod: LASTMOD }])
  ),
  ...Object.fromEntries(
    teas.map((t) => [`/teas/${t.slug}`, { label: t.name, lastmod: LASTMOD }])
  ),
};

const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

export function humanDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  return `${monthNames[m - 1]} ${d}, ${y}`;
}

export function lastUpdatedFor(pathname: string): string {
  const path = pathname.replace(/\/$/, "");
  const meta = pageMeta[path] ?? pageMeta[pathname] ?? pageMeta["/"];
  return humanDate(meta.lastmod);
}

export function ogFor(pathname: string): string {
  const path = pathname.replace(/\/$/, "");
  const meta = pageMeta[path] ?? pageMeta[pathname];
  return meta?.og ?? SITE.defaultOg;
}

import { SITE } from "./siteMeta";
import type { Tea } from "./teas";
import type { Faq } from "./faq";

function absolute(path: string): string {
  return new URL(path, SITE.url).href;
}

const CONTEXT = "https://schema.org";

export function organizationSchema() {
  return {
    "@context": CONTEXT,
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    email: SITE.email,
    logo: absolute("/favicon.svg"),
    sameAs: ["https://github.com/jiusongvip/chinese-tea"],
  };
}

export function websiteSchema() {
  return {
    "@context": CONTEXT,
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    inLanguage: "en",
    description: SITE.description,
    publisher: { "@type": "Organization", name: SITE.name, url: SITE.url },
  };
}

export interface Crumb {
  name: string;
  item: string;
}

export function breadcrumbSchema(items: Crumb[]) {
  return {
    "@context": CONTEXT,
    "@type": "BreadcrumbList",
    itemListElement: items.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absolute(c.item),
    })),
  };
}

export function articleSchema(opts: {
  title: string;
  description: string;
  canonicalURL: string;
  author?: string;
  datePublished?: string;
  dateModified?: string;
  image: string;
  type?: "Article" | "BlogPosting";
}) {
  return {
    "@context": CONTEXT,
    "@type": opts.type ?? "Article",
    headline: opts.title,
    description: opts.description,
    mainEntityOfPage: { "@type": "WebPage", "@id": opts.canonicalURL },
    author: { "@type": "Organization", name: SITE.name, url: absolute("/about/") },
    publisher: { "@type": "Organization", name: SITE.name, url: SITE.url, logo: { "@type": "ImageObject", url: absolute("/favicon.svg") } },
    datePublished: opts.datePublished ?? "2026-08-01",
    dateModified: opts.dateModified ?? opts.datePublished ?? "2026-08-12",
    image: absolute(opts.image),
  };
}

export function faqSchema(questions: Faq[]) {
  return {
    "@context": CONTEXT,
    "@type": "FAQPage",
    mainEntity: questions.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

// QAPage is the recommended markup for genuine Q&A pages
// (FAQPage rich results retired May 7, 2026 — FAQPage is kept only to aid AI entity resolution)
export function qaSchema(questions: Faq[]) {
  return questions.map((f) => ({
    "@context": CONTEXT,
    "@type": "QAPage",
    mainEntity: {
      "@type": "Question",
      name: f.q,
      text: f.q,
      answerCount: 1,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    },
  }));
}

function parsePriceRange(s: string): [number, number] {
  const m = s.match(/\$(\d+)(?:\s*-\s*(\d+)\+?)?/);
  if (!m) return [0, 0];
  const lo = parseInt(m[1], 10);
  const hi = m[2] ? parseInt(m[2], 10) : lo;
  return [lo, hi];
}

export function teaItemSchema(tea: Tea) {
  const canonical = absolute(`/teas/${tea.slug}/`);
  return {
    "@context": CONTEXT,
    "@type": "Article",
    headline: tea.name,
    alternateName: tea.nameChinese,
    description: `${tea.flavorShort}. ${tea.origin}. ${tea.flavor.taste}`,
    image: absolute(tea.image),
    url: canonical,
    mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
    author: { "@type": "Organization", name: SITE.name, url: absolute("/about/") },
    publisher: { "@type": "Organization", name: SITE.name, url: SITE.url, logo: { "@type": "ImageObject", url: absolute("/favicon.svg") } },
    datePublished: "2026-08-01",
    dateModified: "2026-08-12",
    articleSection: `${tea.type.charAt(0).toUpperCase() + tea.type.slice(1)} tea`,
  };
}

export function teaTypeSchema(opts: { name: string; description: string; url: string }) {
  return {
    "@context": CONTEXT,
    "@type": "Article",
    headline: `${opts.name}: A Complete Guide`,
    description: opts.description,
    mainEntityOfPage: { "@type": "WebPage", "@id": opts.url },
    author: { "@type": "Organization", name: SITE.name },
    publisher: { "@type": "Organization", name: SITE.name, url: SITE.url },
    image: absolute("/images/chinese-tea-og.webp"),
    datePublished: "2026-08-01",
    dateModified: "2026-08-12",
  };
}

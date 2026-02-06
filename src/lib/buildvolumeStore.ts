export type StoreProductSitemapEntry = {
  slug: string;
  loc: string;
  lastmod?: string;
  images: string[];
};

export type ProductJsonLd = {
  name?: string;
  description?: string;
  image?: string | string[];
  offers?:
    | {
        price?: string | number;
        priceCurrency?: string;
        availability?: string;
        url?: string;
      }
    | Array<{
        price?: string | number;
        priceCurrency?: string;
        availability?: string;
        url?: string;
      }>;
};

const STORE_SITEMAP_URL = "https://www.buildvolume.co.za/store-products-sitemap.xml";

function parseSitemapXml(xml: string): StoreProductSitemapEntry[] {
  const entries: StoreProductSitemapEntry[] = [];

  const urlBlocks = xml.match(/<url>[\s\S]*?<\/url>/g) ?? [];
  for (const block of urlBlocks) {
    const loc = block.match(/<loc>([^<]+)<\/loc>/)?.[1]?.trim();
    if (!loc) continue;

    const slug = loc.split("/product-page/")[1];
    if (!slug) continue;

    const lastmod = block.match(/<lastmod>([^<]+)<\/lastmod>/)?.[1]?.trim();
    const images = Array.from(block.matchAll(/<image:loc>([^<]+)<\/image:loc>/g)).map((m) =>
      m[1].trim()
    );

    entries.push({
      slug,
      loc,
      lastmod,
      images,
    });
  }

  return entries;
}

export async function getStoreProductsSitemap(): Promise<StoreProductSitemapEntry[]> {
  const res = await fetch(STORE_SITEMAP_URL, {
    next: { revalidate: 60 * 60 },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch store sitemap: ${res.status}`);
  }

  const xml = await res.text();
  return parseSitemapXml(xml);
}

function extractJsonLdScripts(html: string): unknown[] {
  const scripts: unknown[] = [];
  const matches = html.matchAll(
    /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi
  );

  for (const m of matches) {
    const raw = m[1]?.trim();
    if (!raw) continue;

    try {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        scripts.push(...parsed);
      } else {
        scripts.push(parsed);
      }
    } catch {
      continue;
    }
  }

  return scripts;
}

export async function getProductJsonLdBySlug(slug: string): Promise<ProductJsonLd | null> {
  const url = `https://www.buildvolume.co.za/product-page/${slug}`;
  const res = await fetch(url, { next: { revalidate: 60 * 30 } });
  if (!res.ok) return null;

  const html = await res.text();
  const scripts = extractJsonLdScripts(html);

  for (const s of scripts) {
    if (!s || typeof s !== "object") continue;

    const anyObj = s as Record<string, unknown>;
    const type = anyObj["@type"];

    if (type === "Product") {
      return anyObj as ProductJsonLd;
    }

    if (type === "WebPage" && anyObj.mainEntity && typeof anyObj.mainEntity === "object") {
      const me = anyObj.mainEntity as Record<string, unknown>;
      if (me["@type"] === "Product") return me as ProductJsonLd;
    }
  }

  return null;
}

export async function getPrinterProductSlugs(): Promise<Set<string>> {
  const res = await fetch("https://www.buildvolume.co.za/3d-printers", {
    next: { revalidate: 60 * 30 },
  });

  if (!res.ok) return new Set();

  const html = await res.text();

  const matches = Array.from(html.matchAll(/href=["']\/product-page\/([^"'#?]+)["']/gi));
  return new Set(matches.map((m) => m[1]));
}

export function formatSlugTitle(slug: string): string {
  const base = slug.replace(/[-_]+/g, " ").trim();
  return base
    .split(" ")
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

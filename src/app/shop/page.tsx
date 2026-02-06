import Image from "next/image";
import Link from "next/link";
import { getStoreProductsSitemap, formatSlugTitle } from "@/lib/buildvolumeStore";
import PriceRangeSlider from "@/components/PriceRangeSlider";

function toOne(sp: Record<string, string | string[] | undefined>, key: string): string | undefined {
  const v = sp[key];
  return Array.isArray(v) ? v[0] : v;
}

const BRAND_KEYS = [
  "bambu",
  "ultimaker",
  "makerbot",
  "formlabs",
  "creality",
  "desktop-metal",
  "intamsys",
  "bigrep",
  "elegoo",
  "shining",
  "einscan",
] as const;

type BrandFilter = (typeof BRAND_KEYS)[number];

function inferBrandKey(slug: string): BrandFilter | "other" {
  const s = slug.toLowerCase();
  for (const k of BRAND_KEYS) {
    if (s.includes(k)) return k;
  }
  return "other";
}

function titleFromBrandKey(k: string): string {
  return k
    .replace(/[-_]+/g, " ")
    .split(" ")
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

type ShopPageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

export default async function ShopPage({ searchParams }: ShopPageProps) {
  const sp = (await searchParams) ?? {};
  const pageParam = toOne(sp, "page");
  const q = (toOne(sp, "q") ?? "").trim();
  const sort = (toOne(sp, "sort") ?? "relevance").toString();
  const brand = (toOne(sp, "brand") ?? "").toString();
  const minPriceParam = toOne(sp, "minPrice");
  const maxPriceParam = toOne(sp, "maxPrice");
  const minPrice = minPriceParam ? Number(minPriceParam) : undefined;
  const maxPrice = maxPriceParam ? Number(maxPriceParam) : undefined;

  const page = Math.max(1, Number(pageParam ?? 1) || 1);
  const pageSize = 48;

  const all = await getStoreProductsSitemap();
  const filtered = all
    .map((p) => ({
      ...p,
      _title: formatSlugTitle(p.slug),
      _brand: inferBrandKey(p.slug),
    }))
    .filter((p) => {
      if (q) {
        const hay = `${p.slug} ${p._title}`.toLowerCase();
        if (!hay.includes(q.toLowerCase())) return false;
      }
      if (brand) {
        if (brand === "other") return p._brand === "other";
        if (p._brand !== brand) return false;
      }
      return true;
    })
    .sort((a, b) => {
      if (sort === "title-asc") return a._title.localeCompare(b._title);
      if (sort === "title-desc") return b._title.localeCompare(a._title);
      if (sort === "updated") return String(b.lastmod ?? "").localeCompare(String(a.lastmod ?? ""));
      if (q) {
        const aq = a._title.toLowerCase().includes(q.toLowerCase()) ? 0 : 1;
        const bq = b._title.toLowerCase().includes(q.toLowerCase()) ? 0 : 1;
        return aq - bq;
      }
      return 0;
    });

  const total = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const safePage = Math.min(page, totalPages);

  const start = (safePage - 1) * pageSize;
  const items = filtered.slice(start, start + pageSize);

  const brandCounts = filtered.reduce<Record<string, number>>((acc, p) => {
    acc[p._brand] = (acc[p._brand] ?? 0) + 1;
    return acc;
  }, {});

  const makeHref = (next: Record<string, string | undefined>) => {
    const params = new URLSearchParams();
    const base = {
      q: q || undefined,
      sort: sort || undefined,
      brand: brand || undefined,
      minPrice: minPrice !== undefined ? String(minPrice) : undefined,
      maxPrice: maxPrice !== undefined ? String(maxPrice) : undefined,
      page: undefined,
      ...next,
    } as Record<string, string | undefined>;
    for (const [k, v] of Object.entries(base)) {
      if (v) params.set(k, v);
    }
    const qs = params.toString();
    return qs ? `/shop?${qs}` : "/shop";
  };

  return (
    <div className="min-h-screen bg-[#0c0c0c] pt-20">
      <section className="py-10 border-b border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <span className="text-[#666] text-xs tracking-widest uppercase">Catalog</span>
          <div className="flex items-end justify-between gap-6 mt-4">
            <h1 className="text-4xl md:text-5xl font-light text-white">SHOP</h1>
            <div className="text-[#666] text-xs tracking-widest uppercase">
              {total.toLocaleString()} Products
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8">
          <div>
            <form method="GET" className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between mb-6">
              <input type="hidden" name="brand" value={brand} />
              <div className="flex-1">
                <input
                  name="q"
                  defaultValue={q}
                  placeholder="Search products..."
                  className="w-full px-4 py-3 bg-[#111] border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-white/30"
                />
              </div>
              <div className="flex items-center gap-3">
                <select
                  name="sort"
                  defaultValue={sort}
                  className="px-4 py-3 bg-[#111] border border-white/10 text-white focus:outline-none focus:border-white/30 text-sm"
                >
                  <option value="relevance">Sort: Relevance</option>
                  <option value="updated">Sort: Recently Updated</option>
                  <option value="title-asc">Sort: Title (A-Z)</option>
                  <option value="title-desc">Sort: Title (Z-A)</option>
                </select>
                <button
                  type="submit"
                  className="px-6 py-3 bg-white text-black text-sm tracking-widest uppercase hover:bg-white/90 transition-colors"
                >
                  Search
                </button>
              </div>
            </form>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {items.map((p) => (
                <Link
                  key={p.slug}
                  href={`/shop/${p.slug}`}
                  className="block group"
                >
                  <div className="bg-gradient-to-b from-[#15647c]/30 via-[#1a1a1a] to-[#0c0c0c] hover:from-[#15647c]/40 transition-all duration-300 border border-[#15647c]/20 hover:border-[#15647c]/40">
                    <div className="aspect-square relative overflow-hidden bg-white">
                      {p.images[0] ? (
                        <Image
                          src={p.images[0]}
                          alt={p._title}
                          fill
                          className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                          quality={100}
                          unoptimized
                        />
                      ) : (
                        <div className="absolute inset-0 bg-[#1a1a1a]" />
                      )}
                    </div>
                    <div className="p-4 md:p-5">
                      <h3 className="text-white text-sm md:text-base font-medium group-hover:text-[#ffffff] transition-colors line-clamp-2">
                        {p._title}
                      </h3>
                      {p.lastmod && (
                        <p className="text-[#666] text-xs mt-2">Updated: {p.lastmod}</p>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-10 flex items-center justify-between">
              <div className="text-[#666] text-sm">
                Page <span className="text-white">{safePage}</span> of {totalPages}
              </div>
              <div className="flex items-center gap-3">
                <Link
                  href={makeHref({ page: String(Math.max(1, safePage - 1)) })}
                  aria-disabled={safePage === 1}
                  className={`px-5 py-2 border text-xs tracking-widest uppercase transition-colors ${
                    safePage === 1
                      ? "border-white/5 text-[#444] pointer-events-none"
                      : "border-white/20 text-white hover:border-white/40"
                  }`}
                >
                  Prev
                </Link>
                <Link
                  href={makeHref({ page: String(Math.min(totalPages, safePage + 1)) })}
                  aria-disabled={safePage === totalPages}
                  className={`px-5 py-2 border text-xs tracking-widest uppercase transition-colors ${
                    safePage === totalPages
                      ? "border-white/5 text-[#444] pointer-events-none"
                      : "border-white/20 text-white hover:border-white/40"
                  }`}
                >
                  Next
                </Link>
              </div>
            </div>
          </div>

          <aside className="lg:sticky lg:top-24 h-fit border border-white/5 bg-[#111]">
            <div className="p-6 border-b border-white/5">
              <h2 className="text-white text-sm tracking-widest uppercase">Filter By</h2>
            </div>
            <div className="p-6">
              <div className="space-y-3">
                <div className="text-white/60 text-xs tracking-widest uppercase">Brand</div>

                <Link
                  href={makeHref({ brand: undefined })}
                  className={`block text-sm transition-colors ${
                    !brand ? "text-white" : "text-white/60 hover:text-white"
                  }`}
                >
                  All ({total.toLocaleString()})
                </Link>

                {([...BRAND_KEYS, "other"] as const).map((k) => (
                  <Link
                    key={k}
                    href={makeHref({ brand: k })}
                    className={`flex items-center justify-between text-sm transition-colors ${
                      brand === k ? "text-white" : "text-white/60 hover:text-white"
                    }`}
                  >
                    <span>{k === "other" ? "Other" : titleFromBrandKey(k)}</span>
                    <span className="text-white/30">{(brandCounts[k] ?? 0).toLocaleString()}</span>
                  </Link>
                ))}
              </div>

              {/* Price Range Filter */}
              <div className="mt-6 pt-6 border-t border-white/5">
                <PriceRangeSlider
                  minDefault={minPrice ?? 0}
                  maxDefault={maxPrice ?? 100000}
                  absoluteMin={0}
                  absoluteMax={100000}
                />
              </div>

              {(q || brand || minPrice !== undefined || maxPrice !== undefined) && (
                <div className="mt-6">
                  <Link
                    href="/shop"
                    className="text-xs tracking-widest uppercase text-white/60 hover:text-white transition-colors"
                  >
                    Clear All Filters
                  </Link>
                </div>
              )}
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}

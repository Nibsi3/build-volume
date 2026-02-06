import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { printers, getPrintersByBrand, type Printer } from "@/lib/printerData";

 export const dynamic = "force-dynamic";

const brands: { name: Printer["brand"]; href: string }[] = [
  { name: "Ultimaker", href: "/ultimaker-landing-page" },
  { name: "Formlabs", href: "/formlabs-landing-page" },
  { name: "Bambu Lab", href: "/bambu-lab-landing-page" },
  { name: "Creality", href: "/creality-landing-page" },
  { name: "Desktop Metal", href: "/shop?brand=desktop-metal" },
  { name: "Intamsys", href: "/shop?brand=intamsys" },
  { name: "BigRep", href: "/shop?brand=bigrep" },
  { name: "Elegoo", href: "/shop?brand=elegoo" },
];

 const IMAGE_VERSION = "2026-02-05";

 function withCacheBuster(src: string): string {
   const v = process.env.NODE_ENV === "development" ? String(Date.now()) : IMAGE_VERSION;
   return src.includes("?") ? `${src}&v=${v}` : `${src}?v=${v}`;
 }

export default function ThreeDPrintersPage() {
  // Group printers by brand using local data
  const printersByBrand = brands.map((brand) => ({
    ...brand,
    printers: getPrintersByBrand(brand.name),
  }));

  return (
    <div className="min-h-screen bg-[#0c0c0c] pt-24">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] to-[#0c0c0c]" />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <span className="text-[#666] text-xs tracking-widest uppercase">Professional & Desktop</span>
          <h1 className="text-5xl md:text-6xl font-light text-white mt-4 mb-6">3D PRINTERS</h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            South Africa&apos;s official supplier of premium 3D printers. From desktop to industrial, find the perfect machine for your needs.
          </p>
        </div>
      </section>

      {/* Brands */}
      <section className="py-12 border-y border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap items-center justify-center gap-8">
            {brands.map((brand) => (
              <Link
                key={brand.name}
                href={brand.href}
                className="text-white/40 hover:text-white text-sm tracking-widest uppercase transition-colors"
              >
                {brand.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Printers by Brand */}
      {printersByBrand.map((brandGroup) => (
        <section key={brandGroup.name} className="py-12 border-b border-white/5">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-light text-white">{brandGroup.name}</h2>
              <Link
                href={brandGroup.href}
                className="text-white/40 hover:text-white text-xs tracking-widest uppercase transition-colors flex items-center gap-2"
              >
                View All <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
            {brandGroup.printers.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
                {brandGroup.printers.map((printer) => (
                  <Link
                    key={printer.slug}
                    href={`/printers/${printer.slug}`}
                    className="block group"
                  >
                    <div className="bg-gradient-to-b from-[#15647c]/30 via-[#1a1a1a] to-[#0c0c0c] hover:from-[#15647c]/40 transition-all duration-300 border border-[#15647c]/20 hover:border-[#15647c]/40">
                      <div className="aspect-square relative overflow-hidden bg-white">
                        {printer.images[0] ? (
                          <Image
                            src={withCacheBuster(printer.images[0])}
                            alt={printer.name}
                            fill
                            className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                            sizes="(max-width: 768px) 50vw, 20vw"
                            quality={100}
                            unoptimized
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center text-[#1a1a1a]/20 text-3xl font-light">
                            {brandGroup.name.substring(0, 2).toUpperCase()}
                          </div>
                        )}
                      </div>
                      <div className="p-4">
                        <h3 className="text-white text-sm font-medium group-hover:text-white transition-colors line-clamp-2">
                          {printer.name}
                        </h3>
                        <p className="text-white/60 text-sm mt-1">{printer.price}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <p className="text-white/40 text-sm">No printers found for this brand.</p>
            )}
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl font-light text-white mb-4">View All Products</h2>
          <p className="text-white/60 mb-8 max-w-xl mx-auto">
            Browse our complete catalog of 3D printers, consumables, and accessories.
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black text-sm tracking-widest uppercase hover:bg-white/90 transition-colors"
          >
            Visit Shop <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

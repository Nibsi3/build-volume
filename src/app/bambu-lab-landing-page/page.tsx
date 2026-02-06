import Image from "next/image";
import Link from "next/link";
import { getPrintersByBrand } from "@/lib/printerData";
import { ArrowRight } from "lucide-react";

 export const dynamic = "force-dynamic";

 const IMAGE_VERSION = "2026-02-05";

 function withCacheBuster(src: string): string {
   const v = process.env.NODE_ENV === "development" ? String(Date.now()) : IMAGE_VERSION;
   return src.includes("?") ? `${src}&v=${v}` : `${src}?v=${v}`;
 }

export default function BambuLabPage() {
  const bambuPrinters = getPrintersByBrand("Bambu Lab");

  return (
    <div className="min-h-screen bg-[#0c0c0c] pt-24">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] to-[#0c0c0c]" />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <span className="text-[#666] text-xs tracking-widest uppercase">Official Partner</span>
          <h1 className="text-5xl md:text-6xl font-light text-white mt-4 mb-6">BAMBU LAB</h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            High-speed, high-quality 3D printers with advanced features. BuildVolume is South Africa&apos;s official Bambu Lab partner.
          </p>
        </div>
      </section>

      {/* Printers Grid */}
      <section className="py-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="text-2xl font-light text-white mb-8">Bambu Lab 3D Printers</h2>
          {bambuPrinters.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {bambuPrinters.map((p) => (
                <Link key={p.slug} href={`/printers/${p.slug}`} className="block group">
                  <div className="bg-[#1a1a1a] hover:bg-[#2a2a2a] transition-all duration-300 border border-white/5 hover:border-white/10">
                    <div className="aspect-square relative overflow-hidden bg-white">
                      {p.images[0] ? (
                        <Image
                          src={withCacheBuster(p.images[0])}
                          alt={p.name}
                          fill
                          className="object-contain p-4 group-hover:scale-105 transition-transform duration-500 mix-blend-darken"
                          sizes="(max-width: 768px) 50vw, 25vw"
                          unoptimized
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center bg-[#1a1a1a] text-white/20 text-2xl">BL</div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="text-white text-sm font-medium line-clamp-2">{p.name}</h3>
                      <p className="text-white/60 text-sm mt-1">{p.price}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-white/40">No printers found.</p>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl font-light text-white mb-4">View All Bambu Lab Products</h2>
          <Link
            href="/shop?brand=bambu"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black text-sm tracking-widest uppercase hover:bg-white/90 transition-colors"
          >
            Browse Shop <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

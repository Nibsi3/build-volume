import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { scanners, getScannersByBrand, type Scanner } from "@/lib/scannerData";

export const dynamic = "force-dynamic";

const brands: { name: Scanner["brand"]; href: string }[] = [
  { name: "Shining 3D", href: "/shining-3d" },
  { name: "Creality", href: "/creality-scanners" },
];

export default function ScannersPage() {
  const scannersByBrand = brands.map((brand) => ({
    ...brand,
    scanners: getScannersByBrand(brand.name),
  }));

  return (
    <div className="min-h-screen bg-[#0c0c0c] pt-24">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] to-[#0c0c0c]" />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center">
            <span className="text-[#666] text-xs tracking-widest uppercase">Precision Scanning</span>
            <h1 className="text-5xl md:text-6xl font-light text-white mt-4 mb-6">3D SCANNERS</h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Capture reality with precision. Our range of 3D scanners delivers accurate digital models for reverse engineering, quality control, and creative applications.
            </p>
          </div>
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

      {/* Scanners by Brand */}
      {scannersByBrand.map((brandGroup) => (
        <section key={brandGroup.name} className="py-16">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-light text-white">{brandGroup.name}</h2>
              <Link
                href={brandGroup.href}
                className="text-white/60 hover:text-white text-xs tracking-widest uppercase flex items-center gap-2 transition-colors"
              >
                View All <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {brandGroup.scanners.map((scanner) => (
                <Link
                  key={scanner.id}
                  href={`/scanners/${scanner.slug}`}
                  className="block group"
                >
                  <div className="bg-gradient-to-b from-[#15647c]/30 via-[#1a1a1a] to-[#0c0c0c] hover:from-[#15647c]/40 transition-all duration-300 border border-[#15647c]/20 hover:border-[#15647c]/40">
                    <div className="aspect-square relative overflow-hidden bg-white">
                      <Image
                        src={scanner.images[0]}
                        alt={scanner.name}
                        fill
                        className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 50vw, 20vw"
                        quality={100}
                        unoptimized
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-white text-sm font-medium group-hover:text-white transition-colors line-clamp-2">
                        {scanner.name}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl font-light text-white mb-4">Need Help Choosing?</h2>
          <p className="text-white/60 mb-8 max-w-xl mx-auto">
            Our experts can help you find the perfect 3D scanner for your application.
          </p>
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black text-sm tracking-widest uppercase hover:bg-white/90 transition-colors"
          >
            Contact Us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { scanners, getScannersByBrand } from "@/lib/scannerData";

export const dynamic = "force-dynamic";

export default function Shining3DPage() {
  const shining3DScanners = getScannersByBrand("Shining 3D");

  return (
    <div className="min-h-screen bg-[#0c0c0c] pt-24">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] to-[#0c0c0c]" />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <span className="text-[#666] text-xs tracking-widest uppercase">Official Partner</span>
          <h1 className="text-5xl md:text-6xl font-light text-white mt-4 mb-6">SHINING 3D</h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Professional 3D scanning solutions for reverse engineering, quality control, and digital archiving. BuildVolume is South Africa&apos;s official Shining 3D partner.
          </p>
        </div>
      </section>

      {/* Scanners Grid */}
      <section className="py-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="text-2xl font-light text-white mb-8">Shining 3D Scanners</h2>
          {shining3DScanners.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {shining3DScanners.map((scanner) => (
                <Link key={scanner.slug} href={`/scanners/${scanner.slug}`} className="block group">
                  <div className="bg-[#1a1a1a] hover:bg-[#2a2a2a] transition-all duration-300 border border-white/5 hover:border-white/10">
                    <div className="aspect-square relative overflow-hidden bg-white">
                      <Image
                        src={scanner.images[0]}
                        alt={scanner.name}
                        fill
                        className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 50vw, 25vw"
                        unoptimized
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-white text-sm font-medium line-clamp-2">{scanner.name}</h3>
                      <p className="text-white/50 text-xs mt-1 line-clamp-2">{scanner.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-white/40">No scanners found.</p>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl font-light text-white mb-4">Need Help Choosing a Scanner?</h2>
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

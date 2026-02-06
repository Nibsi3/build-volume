import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const dynamic = "force-dynamic";

const categories = [
  {
    name: "Ultimaker Spares",
    description: "Official replacement parts for Ultimaker 3D printers.",
    href: "/shop?category=spares&brand=ultimaker",
    image: "/products/spares/spare-1.jpg",
  },
  {
    name: "Formlabs Spares",
    description: "Genuine parts and accessories for Formlabs printers.",
    href: "/shop?category=spares&brand=formlabs",
    image: "/products/spares/spare-2.jpg",
  },
  {
    name: "Bambu Lab Spares",
    description: "Replacement components for Bambu Lab printers.",
    href: "/shop?category=spares&brand=bambu-lab",
    image: "/products/spares/spare-1.jpg",
  },
  {
    name: "Creality Spares",
    description: "Parts and upgrades for Creality 3D printers.",
    href: "/shop?category=spares&brand=creality",
    image: "/products/spares/spare-2.jpg",
  },
  {
    name: "Zortrax Spares",
    description: "Official spare parts for Zortrax machines.",
    href: "/shop?category=spares&brand=zortrax",
    image: "/products/spares/spare-1.jpg",
  },
  {
    name: "E3D Spares",
    description: "Hotends, nozzles, and components from E3D.",
    href: "/shop?category=spares&brand=e3d",
    image: "/products/spares/spare-2.jpg",
  },
];

export default function SparesPage() {
  return (
    <div className="min-h-screen bg-[#0c0c0c] pt-24">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] to-[#0c0c0c]" />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center">
            <span className="text-[#666] text-xs tracking-widest uppercase">Replacement Parts</span>
            <h1 className="text-5xl md:text-6xl font-light text-white mt-4 mb-6">SPARES</h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Keep your 3D printers running with genuine replacement parts and accessories from all major brands.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Link key={category.name} href={category.href} className="block group">
                <div className="bg-[#1a1a1a] hover:bg-[#222] transition-all duration-300 border border-white/5 hover:border-white/10 h-full">
                  <div className="aspect-video relative bg-white overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-contain p-4"
                      unoptimized
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-white text-xl font-light mb-3">{category.name}</h3>
                    <p className="text-white/50 text-sm mb-4">{category.description}</p>
                    <div className="flex items-center gap-2 text-white/60 group-hover:text-white text-xs tracking-widest uppercase transition-colors">
                      Browse Parts <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Support CTA */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl font-light text-white mb-4">Need Technical Support?</h2>
          <p className="text-white/60 mb-8 max-w-xl mx-auto">
            Our technicians can help diagnose issues and recommend the right parts for your printer.
          </p>
          <Link
            href="/support"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black text-sm tracking-widest uppercase hover:bg-white/90 transition-colors"
          >
            Get Support <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

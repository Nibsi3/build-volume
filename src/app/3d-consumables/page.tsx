import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const dynamic = "force-dynamic";

const categories = [
  {
    name: "FDM Filaments",
    description: "PLA, ABS, PETG, Nylon, TPU, and specialty filaments from top brands.",
    href: "/shop?category=filaments",
    count: "200+ Products",
    image: "/products/consumables/filament-1.jpg",
  },
  {
    name: "Resins",
    description: "Standard, engineering, and specialty resins for SLA/DLP printers.",
    href: "/shop?category=resins",
    count: "80+ Products",
    image: "/products/consumables/filament-2.jpg",
  },
  {
    name: "SLS Powders",
    description: "Nylon and specialty powders for selective laser sintering.",
    href: "/shop?category=powders",
    count: "20+ Products",
    image: "/products/consumables/filament-1.jpg",
  },
  {
    name: "Adhesives & Accessories",
    description: "Build plate adhesives, cleaning supplies, and finishing tools.",
    href: "/shop?category=accessories",
    count: "50+ Products",
    image: "/products/consumables/filament-2.jpg",
  },
];

const brands = [
  { name: "Ultimaker", href: "/shop?brand=ultimaker" },
  { name: "Bambu Lab", href: "/shop?brand=bambu-lab" },
  { name: "Polymaker", href: "/shop?brand=polymaker" },
  { name: "Formlabs", href: "/shop?brand=formlabs" },
  { name: "Creality", href: "/shop?brand=creality" },
  { name: "FormFutura", href: "/shop?brand=formfutura" },
];

export default function ConsumablesPage() {
  return (
    <div className="min-h-screen bg-[#0c0c0c] pt-24">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] to-[#0c0c0c]" />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center">
            <span className="text-[#666] text-xs tracking-widest uppercase">Materials</span>
            <h1 className="text-5xl md:text-6xl font-light text-white mt-4 mb-6">3D CONSUMABLES</h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Premium filaments, resins, and powders from the world&apos;s leading manufacturers. Quality materials for professional results.
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

      {/* Categories Grid */}
      <section className="py-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories.map((category) => (
              <Link key={category.name} href={category.href} className="block group">
                <div className="bg-[#1a1a1a] hover:bg-[#222] transition-all duration-300 border border-white/5 hover:border-white/10 overflow-hidden">
                  <div className="flex">
                    <div className="w-1/3 aspect-square relative bg-white">
                      <Image
                        src={category.image}
                        alt={category.name}
                        fill
                        className="object-contain p-4"
                        unoptimized
                      />
                    </div>
                    <div className="flex-1 p-6">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-white text-xl font-light">{category.name}</h3>
                        <span className="text-[#666] text-xs tracking-widest uppercase">{category.count}</span>
                      </div>
                      <p className="text-white/50 text-sm mb-4">{category.description}</p>
                      <div className="flex items-center gap-2 text-white/60 group-hover:text-white text-xs tracking-widest uppercase transition-colors">
                        Browse Category <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Browse All */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl font-light text-white mb-4">Browse All Consumables</h2>
          <p className="text-white/60 mb-8 max-w-xl mx-auto">
            Explore our complete range of 3D printing materials in the shop.
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black text-sm tracking-widest uppercase hover:bg-white/90 transition-colors"
          >
            View Shop <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

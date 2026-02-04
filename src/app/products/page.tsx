"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { products, Product } from "@/data/products";

type FilterType = "all" | "cast-iron" | "steel" | "6-10kw" | "10+kw";

const filters: { id: FilterType; label: string }[] = [
  { id: "all", label: "All" },
  { id: "cast-iron", label: "Cast Iron" },
  { id: "steel", label: "Steel" },
  { id: "6-10kw", label: "6-10 kW" },
  { id: "10+kw", label: "10+ kW" },
];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.05
    }
  }
};

// Helper to parse power value
const parsePower = (power: string): number => {
  const match = power.match(/[\d.]+/);
  return match ? parseFloat(match[0]) : 0;
};

export default function ProductsPage() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  const filteredProducts = useMemo(() => {
    return products.filter((product: Product) => {
      const power = parsePower(product.power);
      
      switch (activeFilter) {
        case "cast-iron":
          return product.material === "Cast Iron";
        case "steel":
          return product.material === "Steel";
        case "6-10kw":
          return power >= 6 && power <= 10;
        case "10+kw":
          return power > 10;
        default:
          return true;
      }
    });
  }, [activeFilter]);

  return (
    <div className="min-h-screen bg-[#0c0c0c] pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-[#666] text-xs tracking-[0.2em] uppercase">
                  17 Models Available
                </span>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mt-4">
                  PRODUCTS
                </h1>
              </div>
              <a
                href="https://nordflam.eu/"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center gap-2 text-[#888] text-sm hover:text-white transition-colors"
              >
                View full range on nordflam.eu
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
            <p className="text-[#666] text-lg max-w-2xl">
              Explore NORDflam SA&apos;s premium cast iron fireplaces. High-quality, 
              efficient heating solutions designed for durability and style.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="border-y border-white/5 sticky top-20 z-30 bg-[#0c0c0c]/95 backdrop-blur-sm">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-6 py-4 overflow-x-auto">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`text-xs tracking-widest uppercase whitespace-nowrap transition-colors relative ${
                  activeFilter === filter.id 
                    ? "text-white" 
                    : "text-[#666] hover:text-white"
                }`}
              >
                {filter.label}
                {activeFilter === filter.id && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute -bottom-4 left-0 right-0 h-0.5 bg-[#ffffff]"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </button>
            ))}
            <span className="ml-auto text-[#666] text-xs">
              {filteredProducts.length} {filteredProducts.length === 1 ? "product" : "products"}
            </span>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
          >
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                layout
              >
                <Link href={`/products/${product.id}`} className="block group">
                  <div className="bg-[#1a1a1a] hover:bg-[#2a2a2a] transition-all duration-300 relative card-noise">
                    {/* Sale Badge */}
                    {product.originalPrice && (
                      <div className="absolute top-3 left-3 z-10">
                        <span className="bg-white text-black text-[10px] font-medium px-2 py-1 uppercase tracking-wider">
                          Sale
                        </span>
                      </div>
                    )}
                    
                    {/* Product Image */}
                    <div className="aspect-square relative overflow-hidden bg-gradient-to-b from-[#1a1a1a] via-[#151515] to-[#0c0c0c]">
                      {/* Subtle radial glow */}
                      <div className="absolute inset-0 bg-radial-gradient opacity-30" style={{ background: 'radial-gradient(circle at center, rgba(255,255,255,0.03) 0%, transparent 70%)' }} />
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                        quality={90}
                      />
                    </div>
                    
                    {/* Product Info */}
                    <div className="p-4 md:p-5">
                      <h3 className="text-white text-sm md:text-base font-medium group-hover:text-[#ffffff] transition-colors mb-1">
                        {product.name}
                      </h3>
                      <p className="text-[#666] text-xs mb-3">
                        {product.power} • Wood
                      </p>
                      <div className="flex items-center gap-2">
                        {product.originalPrice && (
                          <span className="text-[#666] line-through text-xs">
                            R{product.originalPrice.toLocaleString()}
                          </span>
                        )}
                        <span className="text-white text-sm font-medium">
                          R{product.price.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Banner */}
      <section className="py-16 bg-[#1a1a1a] border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Warranty", value: "2 Years" },
              { label: "Fuel Type", value: "Wood" },
              { label: "Certification", value: "ECODESIGN 2022" },
              { label: "Material", value: "Cast Iron & Steel" },
            ].map((item, index) => (
              <div key={index} className="text-center md:text-left">
                <div className="text-[#666] text-xs tracking-[0.2em] uppercase mb-2">
                  {item.label}
                </div>
                <div className="text-white text-lg md:text-xl font-light">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0c0c0c] border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
            NEED HELP CHOOSING?
          </h2>
          <p className="text-[#666] text-lg mb-8 max-w-xl mx-auto">
            Contact an authorized retailer for expert advice on selecting the 
            perfect fireplace for your home.
          </p>
          <Link
            href="/retailers"
            className="inline-flex items-center gap-3 text-white text-sm tracking-[0.1em] uppercase hover:text-[#ffffff] transition-colors group"
          >
            Find a Dealer
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}

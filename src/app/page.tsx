"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown, Flame, Shield } from "lucide-react";
import { products } from "@/data/products";

const faqs = [
  { 
    question: "What fuel types do NORDflam fireplaces use?",
    answer: "All NORDflam fireplaces are designed for wood burning, using natural seasoned wood logs. Our efficient combustion systems ensure maximum heat output with minimal emissions."
  },
  { 
    question: "Are your products ECODESIGN 2022 certified?",
    answer: "Yes, all NORDflam fireplaces meet the strict ECODESIGN 2022 European standards for energy efficiency and emissions, ensuring environmentally responsible heating."
  },
  { 
    question: "How do I find an authorized retailer?",
    answer: "Visit our Retailers page to find authorized NORDflam dealers in your area. Our network of certified installers ensures professional installation and after-sales support."
  },
  { 
    question: "What warranty do you offer?",
    answer: "We offer a comprehensive 2-year warranty on all NORDflam fireplaces, covering manufacturing defects and ensuring peace of mind with your purchase."
  },
];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const categories = [
  { name: "CAST IRON", count: "12 Products", href: "/products" },
  { name: "STEEL", count: "5 Products", href: "/products" },
  { name: "WOOD BURNING", count: "17 Products", href: "/products" },
  { name: "RECUPERATION", count: "6 Products", href: "/products" },
];

export default function Home() {
  const featuredProducts = products.slice(0, 6);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1728649072511-bd946044a63b?q=80&w=1920&auto=format&fit=crop"
            alt="Luxury fireplace living room"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/90 to-[#0a0a0a]/50" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/40 via-transparent to-[#0a0a0a]" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#ff6b35]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#ff6b35]/20 to-transparent" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 pt-36 pb-24 min-h-screen flex flex-col justify-center">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            {/* Left - Typography */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              {/* Premium Badge */}
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-8">
                <div className="w-2 h-2 rounded-full bg-[#ff6b35] animate-pulse" />
                <span className="text-[#999] text-xs tracking-widest uppercase">Premium European Craftsmanship</span>
              </div>

              {/* Brand Name - Large Display */}
              <h1 className="text-[15vw] md:text-[120px] lg:text-[140px] font-extralight text-white leading-[0.85] mb-8 tracking-tight">
                NORD<span className="text-[#ff6b35]">FLAM</span>
              </h1>
              
              {/* Tagline */}
              <p className="text-[#666] text-sm tracking-widest uppercase mb-6">
                The Art of Warmth — Since 1998
              </p>

              {/* Description */}
              <p className="text-[#888] text-lg leading-relaxed max-w-md mb-10">
                Exceptional fireplaces crafted with precision engineering and timeless design. 
                Experience the perfect harmony of form and function.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-[#ff6b35] text-white text-sm tracking-widest uppercase hover:bg-[#ff8c5a] transition-all group"
                >
                  Explore Products
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/retailers"
                  className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 text-white text-sm tracking-widest uppercase hover:bg-white/5 transition-all"
                >
                  Find a Dealer
                </Link>
              </div>
            </motion.div>

            {/* Right - Premium Product Card */}
            <div className="hidden lg:block">
              <Link href="/products/arica" className="block group">
                <div className="relative max-w-[320px] ml-auto">
                  {/* Featured Label at Top Right */}
                  <div className="absolute -top-2 -right-2 z-20 px-3 py-1 bg-[#ff6b35] text-white text-[10px] tracking-widest uppercase">
                    Featured
                  </div>
                  
                  {/* Main Card */}
                  <div className="relative aspect-3/4 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] rounded-lg overflow-hidden border border-white/10 shadow-2xl group-hover:border-[#ff6b35]/30 transition-all duration-300">
                    {/* Featured Product Image - Rotated */}
                    <Image
                      src="/images/products/arica.webp"
                      alt="NORDflam Arica Premium Fireplace"
                      fill
                      className="object-contain p-6 scale-x-[-1] group-hover:scale-x-[-1.05] group-hover:scale-y-105 transition-transform duration-300"
                      priority
                      loading="eager"
                      quality={90}
                    />
                    
                    {/* Product Info Bar */}
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/80 to-transparent pt-12 pb-4 px-4">
                      <div className="text-white text-lg font-light tracking-wider">ARICA</div>
                      <div className="text-[#666] text-xs mt-1">13 kW • Cast Iron</div>
                      <div className="flex items-center gap-2 mt-3 text-[#ff6b35] text-xs group-hover:gap-3 transition-all">
                        <span>View Product</span>
                        <ArrowRight className="w-3 h-3" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Perfectly Integrated Section */}
      <section className="py-24 bg-[#0c0c0c]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Image */}
            <div className="aspect-[4/3] bg-[#1a1a1a] rounded-sm overflow-hidden relative">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
                alt="Modern luxury interior with fireplace"
                fill
                className="object-cover"
              />
            </div>

            {/* Right - Content */}
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-6">
                PERFECTLY INTEGRATED<br />
                <span className="text-[#666]">INTO YOUR HOME</span>
              </h2>
              <p className="text-[#666] text-lg leading-relaxed mb-8 max-w-lg">
                NORDflam fireplaces are designed to seamlessly blend with modern interiors. 
                Our products combine cutting-edge technology with timeless aesthetics.
              </p>
              <Link
                href="/technology"
                className="inline-flex items-center gap-3 text-white text-sm tracking-widest uppercase hover:text-[#ff6b35] transition-colors group"
              >
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-24 bg-[#0c0c0c] border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <span className="text-[#666] text-xs tracking-widest uppercase">
              17 Models Available — Made in Europe
            </span>
            <h2 className="text-3xl md:text-4xl font-light text-white mt-4">
              PRODUCT CATEGORIES
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category, index) => (
              <div key={index}>
                <Link
                  href={category.href}
                  className="block p-6 bg-[#1a1a1a] hover:bg-[#2a2a2a] transition-colors group"
                >
                  <div className="text-white text-sm font-medium mb-2 group-hover:text-[#ff6b35] transition-colors">
                    {category.name}
                  </div>
                  <div className="text-[#666] text-xs">
                    {category.count}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Products Grid */}
      <section className="py-24 bg-[#0c0c0c]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-[#666] text-xs tracking-widest uppercase">
                Premium Collection
              </span>
              <h2 className="text-3xl md:text-4xl font-light text-white mt-4">
                OUR PRODUCTS
              </h2>
            </div>
            <Link
              href="/products"
              className="hidden md:inline-flex items-center gap-2 text-[#888] text-sm hover:text-white transition-colors"
            >
              View All
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
              >
                <Link href={`/products/${product.id}`} className="block group">
                  <div className="bg-[#1a1a1a] hover:bg-[#2a2a2a] transition-all duration-300">
                    {/* Product Image */}
                    <div className="aspect-square relative overflow-hidden bg-gradient-to-b from-[#1a1a1a] to-[#0c0c0c]">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 50vw, 33vw"
                      />
                    </div>
                    {/* Product Info */}
                    <div className="p-4 md:p-6">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-white text-sm md:text-base font-medium group-hover:text-[#ff6b35] transition-colors">
                            {product.name}
                          </h3>
                          <p className="text-[#666] text-xs mt-1">
                            {product.power} • Wood
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="text-white text-sm md:text-base">
                            R{product.price.toLocaleString()}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-8 md:hidden text-center">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-[#888] text-sm hover:text-white transition-colors"
            >
              View All Products
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-24 bg-[#1a1a1a]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-light text-white leading-tight mb-6">
                FREQUENTLY<br />
                <span className="text-[#666]">ASKED QUESTIONS</span>
              </h2>
              <p className="text-[#666] text-lg leading-relaxed mb-8 max-w-lg">
                Have questions about our fireplaces? Find answers to common questions 
                about installation, maintenance, and product specifications.
              </p>
              <Link
                href="/technology"
                className="inline-flex items-center gap-3 text-white text-sm tracking-widest uppercase hover:text-[#ff6b35] transition-colors group"
              >
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-[#0c0c0c] border border-white/5 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full p-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                  >
                    <span className={`text-sm ${openFaq === index ? 'text-[#ff6b35]' : 'text-white'}`}>
                      {faq.question}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-[#666] transition-transform duration-300 ${openFaq === index ? 'rotate-180 text-[#ff6b35]' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {openFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-5 pb-5 text-[#888] text-sm leading-relaxed border-t border-white/5 pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="py-24 bg-[#0c0c0c] border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-light text-white leading-tight mb-6">
                STAY WARM WITH<br />
                <span className="text-[#ff6b35]">NORDFLAM</span>
              </h2>
              <p className="text-[#666] text-lg leading-relaxed max-w-lg">
                Find an authorized retailer near you and experience the warmth 
                and elegance of our premium fireplaces.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/retailers"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black text-sm font-medium tracking-widest uppercase hover:bg-[#ff6b35] hover:text-white transition-all"
              >
                Find a Dealer
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white text-sm font-medium tracking-widest uppercase hover:border-white/40 transition-all"
              >
                View Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

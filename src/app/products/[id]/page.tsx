"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, Flame, Shield, Zap, Wind, Thermometer, Download, Ruler, Maximize2 } from "lucide-react";
import { products, getProductById } from "@/data/products";

const featureDescriptions: Record<string, { icon: typeof Flame; description: string }> = {
  "Afterburning": { icon: Zap, description: "Secondary combustion system that reduces hazardous gases emission into the environment for cleaner, more efficient burning." },
  "Airwash System": { icon: Wind, description: "Innovative air circulation keeps the inside glass clean by limiting soot buildup, ensuring a clear view of the flames." },
  "External Air Supply": { icon: Wind, description: "Using external air supply system (CDP) enables the insert to operate independently from indoor air, ideal for airtight homes." },
  "Heat-Resistant Glass": { icon: Thermometer, description: "Premium ceramic glass withstands temperatures up to 700°C while maintaining clarity and structural integrity." },
  "Recuperation System": { icon: Zap, description: "Specially designed for modern homes with mechanical ventilation and heat recovery systems." },
  "Grill": { icon: Flame, description: "Durable cast iron grill design that retains high temperatures for efficient and consistent heating performance." },
  "Fully Sealed Chamber": { icon: Shield, description: "Completely sealed combustion chamber optimized for homes with recuperation systems, ensuring no air leakage." },
  "Full Cast Iron Construction": { icon: Shield, description: "Premium cast iron construction provides exceptional durability, superior heat retention, and long-lasting performance." },
  "Vermiculite Liners": { icon: Thermometer, description: "High-quality vermiculite liners provide enhanced insulation and optimal heat distribution throughout the firebox." },
};

export default function ProductDetailPage() {
  const params = useParams();
  const product = getProductById(params.id as string);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#0c0c0c] pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-light text-white mb-4">
            Product Not Found
          </h1>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-[#888] hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div className="min-h-screen bg-[#0c0c0c]">
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[70vh] flex items-end">
        {/* Background Hero Image */}
        <div className="absolute inset-0">
          {product.heroImage ? (
            <Image
              src={product.heroImage}
              alt={`${product.name} lifestyle`}
              fill
              className="object-cover grayscale"
              priority
              quality={90}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-b from-[#1a1a1a] to-[#0c0c0c]" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-[#0c0c0c]/70 to-[#0c0c0c]/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c0c0c]/80 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 py-16 w-full">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm mb-8">
            <Link href="/" className="text-[#888] hover:text-white transition-colors">Home</Link>
            <span className="text-[#444]">/</span>
            <Link href="/products" className="text-[#888] hover:text-white transition-colors">Products</Link>
            <span className="text-[#444]">/</span>
            <span className="text-white">{product.name}</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#ffffff] text-xs tracking-widest uppercase mb-4 block">
              NORDflam Premium Fireplace
            </span>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-light text-white mb-4 drop-shadow-2xl">
              {product.name.toUpperCase()}
            </h1>
            <p className="text-[#888] text-lg max-w-xl">
              {product.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Detail */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="aspect-square bg-gradient-to-b from-[#1a1a1a] via-[#151515] to-[#0c0c0c] overflow-hidden rounded-xl border border-white/5 sticky top-8 card-noise">
                {/* Premium radial glow */}
                <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at center, rgba(255,255,255,0.04) 0%, transparent 60%)' }} />
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-8"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                  quality={90}
                />
                {product.originalPrice && (
                  <div className="absolute top-6 left-6 z-10">
                    <span className="bg-white text-black text-xs font-medium px-3 py-1.5 uppercase tracking-wider">
                      Sale
                    </span>
                  </div>
                )}
                {/* ECODESIGN Badge */}
                <div className="absolute bottom-6 right-6 z-10">
                  <div className="bg-white/10 backdrop-blur-sm px-3 py-2 text-center rounded">
                    <div className="text-[#ffffff] text-[10px] font-bold tracking-wider">ECODESIGN</div>
                    <div className="text-white text-xs font-light">2022</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[#ffffff] text-xs tracking-[0.2em] uppercase mb-4 block">
                NORDflam Premium Fireplace
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-4">
                {product.name.toUpperCase()}
              </h1>
              
              <p className="text-[#666] text-sm mb-6">
                Cast Iron Wood-Burning Fireplace Insert
              </p>

              <div className="flex items-baseline gap-4 mb-8 pb-8 border-b border-white/10">
                {product.originalPrice && (
                  <span className="text-[#666] line-through text-xl">
                    R{product.originalPrice.toLocaleString()}
                  </span>
                )}
                <span className="text-white text-4xl font-light">
                  R{product.price.toLocaleString()}
                </span>
                <span className="text-[#666] text-sm">incl. VAT</span>
              </div>

              <p className="text-[#888] text-lg leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Key Specs - Horizontal */}
              <div className="grid grid-cols-4 gap-4 mb-8 pb-8 border-b border-white/10">
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-[#1a1a1a] flex items-center justify-center">
                    <Flame className="w-5 h-5 text-[#ffffff]" />
                  </div>
                  <div className="text-white text-sm font-medium">
                    {product.powerMax ? `${product.power}-${product.powerMax}` : product.power}
                  </div>
                  <div className="text-[#666] text-[10px] uppercase tracking-wider">Power</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-[#1a1a1a] flex items-center justify-center">
                    <Shield className="w-5 h-5 text-[#ffffff]" />
                  </div>
                  <div className="text-white text-sm font-medium">{product.warranty}</div>
                  <div className="text-[#666] text-[10px] uppercase tracking-wider">Warranty</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-[#1a1a1a] flex items-center justify-center">
                    <Thermometer className="w-5 h-5 text-[#ffffff]" />
                  </div>
                  <div className="text-white text-sm font-medium">{product.fuelType}</div>
                  <div className="text-[#666] text-[10px] uppercase tracking-wider">Fuel</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-[#1a1a1a] flex items-center justify-center">
                    <Zap className="w-5 h-5 text-[#ffffff]" />
                  </div>
                  <div className="text-white text-sm font-medium">A+</div>
                  <div className="text-[#666] text-[10px] uppercase tracking-wider">Energy</div>
                </div>
              </div>

              {/* Features List */}
              <div className="mb-8">
                <h3 className="text-white text-sm font-medium mb-4 uppercase tracking-wider">Included Features</h3>
                <div className="flex flex-wrap gap-2">
                  {product.features.map((feature, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#1a1a1a] text-[#888] text-xs"
                    >
                      <Check className="w-3 h-3 text-[#ffffff]" />
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/retailers"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black text-sm font-medium tracking-wider uppercase hover:bg-[#cccccc] transition-all"
                >
                  Find a Dealer
                </Link>
                <button
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white text-sm font-medium tracking-wider uppercase hover:border-white/40 transition-all"
                >
                  <Download className="w-4 h-4" />
                  Download Specs
                </button>
              </div>

              {/* Trust Badges */}
              <div className="flex items-center gap-6 pt-6 border-t border-white/10">
                <div className="flex items-center gap-2 text-[#666] text-xs">
                  <Shield className="w-4 h-4" />
                  <span>2 Year Warranty</span>
                </div>
                <div className="flex items-center gap-2 text-[#666] text-xs">
                  <Check className="w-4 h-4" />
                  <span>ECODESIGN 2022</span>
                </div>
                <div className="flex items-center gap-2 text-[#666] text-xs">
                  <Flame className="w-4 h-4" />
                  <span>Premium Quality</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dimensions Section */}
      {product.dimensions && (
        <section className="py-16 bg-[#0c0c0c] border-t border-white/5">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Dimensions Visual */}
              <div className="relative">
                <div className="aspect-video bg-[#1a1a1a] rounded-lg border border-white/5 overflow-hidden relative card-noise">
                  {product.dimensionsImage ? (
                    <Image
                      src={product.dimensionsImage}
                      alt={`${product.name} dimensions`}
                      fill
                      className="object-contain p-4 bg-white"
                      quality={90}
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <Ruler className="w-16 h-16 text-[#333]" />
                    </div>
                  )}
                </div>
              </div>

              {/* Dimensions Data */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-[#ffffff]/10 flex items-center justify-center">
                    <Maximize2 className="w-5 h-5 text-[#ffffff]" />
                  </div>
                  <h2 className="text-2xl font-light text-white">DIMENSIONS</h2>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-[#1a1a1a] p-6 rounded-lg border border-white/5 text-center card-noise">
                    <div className="text-[#666] text-xs uppercase tracking-wider mb-2">Width</div>
                    <div className="text-white text-3xl font-light">{product.dimensions.width}</div>
                    <div className="text-[#ffffff] text-sm">mm</div>
                  </div>
                  <div className="bg-[#1a1a1a] p-6 rounded-lg border border-white/5 text-center card-noise">
                    <div className="text-[#666] text-xs uppercase tracking-wider mb-2">Height</div>
                    <div className="text-white text-3xl font-light">{product.dimensions.height}</div>
                    <div className="text-[#ffffff] text-sm">mm</div>
                  </div>
                  <div className="bg-[#1a1a1a] p-6 rounded-lg border border-white/5 text-center card-noise">
                    <div className="text-[#666] text-xs uppercase tracking-wider mb-2">Depth</div>
                    <div className="text-white text-3xl font-light">{product.dimensions.depth}</div>
                    <div className="text-[#ffffff] text-sm">mm</div>
                  </div>
                </div>
                <p className="text-[#666] text-sm mt-4">
                  All dimensions are in millimeters. Please verify measurements before installation.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Energy Rating Section */}
      {product.energyRatingImage && (
        <section className="py-16 bg-[#1a1a1a] border-t border-white/5">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Energy Rating Info */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-[#ffffff]/10 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-[#ffffff]" />
                  </div>
                  <h2 className="text-2xl font-light text-white">ENERGY EFFICIENCY</h2>
                </div>
                <p className="text-[#888] text-lg leading-relaxed mb-6">
                  This fireplace is rated <span className="text-[#ffffff] font-medium">A+</span> for energy efficiency,
                  meeting the highest European standards for sustainable heating.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#0c0c0c] p-5 rounded-lg border border-white/5 card-noise">
                    <div className="text-[#666] text-xs uppercase tracking-wider mb-2">Energy Class</div>
                    <div className="text-[#ffffff] text-4xl font-light">A+</div>
                  </div>
                  <div className="bg-[#0c0c0c] p-5 rounded-lg border border-white/5 card-noise">
                    <div className="text-[#666] text-xs uppercase tracking-wider mb-2">Certification</div>
                    <div className="text-white text-lg font-light">ECODESIGN 2022</div>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-6 text-[#666] text-sm">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#ffffff]" />
                    <span>Low emissions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#ffffff]" />
                    <span>High efficiency</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#ffffff]" />
                    <span>Eco-friendly</span>
                  </div>
                </div>
              </div>

              {/* Energy Rating Image */}
              <div className="relative">
                <div className="aspect-square max-w-[300px] mx-auto bg-white rounded-lg border border-white/10 overflow-hidden relative shadow-xl">
                  <Image
                    src={product.energyRatingImage}
                    alt={`${product.name} energy rating`}
                    fill
                    className="object-contain p-4"
                    quality={90}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Detailed Specifications */}
      <section className="py-16 bg-[#0c0c0c] border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Technical Specs */}
            <div>
              <h2 className="text-2xl font-light text-white mb-8">
                TECHNICAL SPECIFICATIONS
              </h2>
              <div className="space-y-0">
                {[
                  { label: "Nominal Power Output", value: product.power },
                  ...(product.powerMax ? [{ label: "Maximum Power Output", value: product.powerMax }] : []),
                  { label: "Fuel Type", value: product.fuelType },
                  { label: "Energy Efficiency Class", value: "A+" },
                  { label: "Warranty Period", value: product.warranty },
                  { label: "Certification", value: "ECODESIGN 2022" },
                  { label: "Material", value: product.material },
                  { label: "Glass Type", value: "Ceramic Heat-Resistant" },
                  { label: "Flue Outlet", value: "Top / Rear" },
                  { label: "External Air Connection", value: "Yes" },
                  ...(product.dimensions ? [
                    { label: "Width", value: `${product.dimensions.width} mm` },
                    { label: "Height", value: `${product.dimensions.height} mm` },
                    { label: "Depth", value: `${product.dimensions.depth} mm` },
                  ] : []),
                ].map((spec, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between py-4 border-b border-white/5"
                  >
                    <span className="text-[#888] text-sm">{spec.label}</span>
                    <span className="text-white text-sm font-medium">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Features Detail */}
            <div>
              <h2 className="text-2xl font-light text-white mb-8">
                FEATURES & TECHNOLOGY
              </h2>
              <div className="space-y-4">
                {product.features.map((feature, index) => {
                  const featureInfo = featureDescriptions[feature];
                  const IconComponent = featureInfo?.icon || Check;
                  return (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-5 bg-[#0c0c0c] border border-white/5 card-noise"
                    >
                      <div className="w-10 h-10 rounded-full bg-[#ffffff]/10 flex items-center justify-center shrink-0">
                        <IconComponent className="w-5 h-5 text-[#ffffff]" />
                      </div>
                      <div>
                        <h3 className="text-white text-sm font-medium mb-1">{feature}</h3>
                        <p className="text-[#666] text-xs leading-relaxed">
                          {featureInfo?.description || "Premium feature for enhanced performance."}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 bg-[#0c0c0c] border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex items-end justify-between mb-10">
            <h2 className="text-3xl font-light text-white">
              RELATED PRODUCTS
            </h2>
            <Link
              href="/products"
              className="hidden md:inline-flex items-center gap-2 text-[#888] text-sm hover:text-white transition-colors"
            >
              View All
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((relProduct) => (
              <Link key={relProduct.id} href={`/products/${relProduct.id}`} className="block group">
                <div className="bg-[#1a1a1a] hover:bg-[#2a2a2a] transition-all duration-300 card-noise">
                  <div className="aspect-square relative overflow-hidden bg-gradient-to-b from-[#1a1a1a] to-[#0c0c0c]">
                    <Image
                      src={relProduct.image}
                      alt={relProduct.name}
                      fill
                      className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 50vw, 25vw"
                      quality={90}
                    />
                  </div>
                  <div className="p-4 md:p-5">
                    <h3 className="text-white text-sm font-medium group-hover:text-[#ffffff] transition-colors">
                      {relProduct.name}
                    </h3>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-white text-sm">
                        R{relProduct.price.toLocaleString()}
                      </span>
                      <span className="text-[#666] text-xs">{relProduct.power}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

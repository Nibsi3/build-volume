"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/3d-printer-illuminated-futuristic-scene.jpg"
            alt="BuildVolume"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/70 via-[#0a0a0a]/45 to-[#0a0a0a]/20" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/25 via-transparent to-[#0a0a0a]/85" />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#ffffff]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#ffffff]/20 to-transparent" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 pt-36 pb-24 min-h-screen flex flex-col justify-center">
          <div className="grid lg:grid-cols-1 items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="max-w-3xl text-left relative"
            >
              <div
                className="absolute inset-y-[-24px] left-[-24px] -right-56 bg-black/70 backdrop-blur-md border border-white/10 rounded-lg"
                style={{
                  WebkitMaskImage:
                    "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 55%, rgba(0,0,0,0.55) 72%, rgba(0,0,0,0.15) 86%, rgba(0,0,0,0) 100%)",
                  maskImage:
                    "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 55%, rgba(0,0,0,0.55) 72%, rgba(0,0,0,0.15) 86%, rgba(0,0,0,0) 100%)",
                }}
              />
              <div className="relative">
              {/* Premium Badge */}
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-8">
                <div className="w-2 h-2 rounded-full bg-[#ffffff] animate-pulse" />
                <span className="text-[#999] text-xs tracking-widest uppercase">South Africa&apos;s Official Supplier</span>
              </div>

              {/* Brand Name - Large Display */}
              <div className="mb-8 drop-shadow-[0_2px_24px_rgba(0,0,0,0.65)]">
                <Image
                  src="/logo.png"
                  alt="BuildVolume"
                  width={900}
                  height={300}
                  priority
                  className="w-[80vw] max-w-[520px] h-auto opacity-95"
                />
              </div>
              
              {/* Tagline */}
              <p className="text-white/70 text-sm tracking-widest uppercase mb-6 drop-shadow-[0_2px_18px_rgba(0,0,0,0.6)]">
                3D Printing • Scanning • Software • Support
              </p>

              {/* Description */}
              <p className="text-white/75 text-lg leading-relaxed max-w-2xl mb-10 drop-shadow-[0_2px_18px_rgba(0,0,0,0.55)]">
                Discover 3D printing in South Africa with BuildVolume. Explore innovative solutions
                for personal and industrial 3D applications.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 justify-start">
                <Link
                  href="/shop"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black text-sm tracking-widest uppercase hover:bg-[#cccccc] transition-all group"
                >
                  Shop Now
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 text-white text-sm tracking-widest uppercase hover:bg-white/5 transition-all"
                >
                  Contact Us
                </Link>
              </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-24 bg-[#0c0c0c]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Image */}
            <div className="aspect-[4/3] bg-[#1a1a1a] rounded-sm overflow-hidden relative">
              <Image
                src="/pexels-papaz-30620861.png"
                alt="BuildVolume"
                fill
                className="object-cover"
                quality={90}
              />
            </div>

            {/* Right - Content */}
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-6">
                ABOUT<br />
                <span className="text-[#666]">BUILDVOLUME</span>
              </h2>
              <p className="text-[#666] text-lg leading-relaxed mb-8 max-w-lg">
                BuildVolume is all about bringing 3D printing into the lives of regular people.
                Due to the fast development of 3D printers, 3D scanners and 3D modelling software,
                3D printing is becoming more and more interesting and affordable for personal users.
              </p>
              <Link
                href="/about-us"
                className="inline-flex items-center gap-3 text-white text-sm tracking-widest uppercase hover:text-[#ffffff] transition-colors group"
              >
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-24 bg-[#0c0c0c] border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <span className="text-[#666] text-xs tracking-widest uppercase">Explore</span>
            <h2 className="text-3xl md:text-4xl font-light text-white mt-4">QUICK LINKS</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a
              href="https://www.buildvolume.co.za/3d-printers"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 bg-[#1a1a1a] hover:bg-[#2a2a2a] transition-colors group"
            >
              <div className="text-white text-sm font-medium mb-2 group-hover:text-[#ffffff] transition-colors">
                3D Printers
              </div>
              <div className="text-[#666] text-xs">Browse the complete 3D printer range</div>
            </a>

            <a
              href="https://www.buildvolume.co.za/3d-scanners"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 bg-[#1a1a1a] hover:bg-[#2a2a2a] transition-colors group"
            >
              <div className="text-white text-sm font-medium mb-2 group-hover:text-[#ffffff] transition-colors">
                3D Scanners
              </div>
              <div className="text-[#666] text-xs">Explore scanning solutions</div>
            </a>

            <a
              href="https://www.buildvolume.co.za/support"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 bg-[#1a1a1a] hover:bg-[#2a2a2a] transition-colors group"
            >
              <div className="text-white text-sm font-medium mb-2 group-hover:text-[#ffffff] transition-colors">
                Support
              </div>
              <div className="text-[#666] text-xs">Get help, book-in support, and resources</div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

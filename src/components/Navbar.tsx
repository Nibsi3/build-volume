"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const shopDropdownItems = [
  { href: "/shop", label: "All Products" },
  { href: "/3d-printers", label: "3D Printers" },
  { href: "/3d-scanners", label: "3D Scanners" },
  { href: "/3d-consumables", label: "Consumables" },
  { href: "/spares", label: "Spares" },
];

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/support", label: "Support" },
  { href: "/contact-us", label: "Contact Us" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      {/* Top accent line */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-[#ffffff] to-transparent opacity-60" />
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="relative group">
            <Image
              src="/logo.png"
              alt="BuildVolume"
              width={180}
              height={48}
              className="h-8 w-auto group-hover:opacity-80 transition-opacity"
              priority
            />
          </Link>

          {/* Center Nav Links */}
          <div className="hidden lg:flex items-center gap-10">
            {/* Home Link */}
            <Link
              href="/"
              className="relative text-[11px] font-medium text-white/70 hover:text-white transition-all duration-300 tracking-[0.2em] uppercase group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300" />
            </Link>

            {/* About */}
            <Link
              href="/about-us"
              className="relative text-[11px] font-medium text-white/70 hover:text-white transition-all duration-300 tracking-[0.2em] uppercase group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300" />
            </Link>

            {/* Shop Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setShopOpen(true)}
              onMouseLeave={() => setShopOpen(false)}
            >
              <button
                className="relative text-[11px] font-medium text-white/70 hover:text-white transition-all duration-300 tracking-[0.2em] uppercase group flex items-center gap-1.5"
              >
                Shop
                <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${shopOpen ? "rotate-180" : ""}`} />
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300" />
              </button>

              <AnimatePresence>
                {shopOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 12, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 12, scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 380, damping: 28 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-4"
                  >
                    <div className="bg-black/80 backdrop-blur-xl border border-white/10 px-2 py-2 rounded-full">
                      <div className="flex items-center gap-2 px-1">
                        {shopDropdownItems.map((item, index) => (
                          <motion.div
                            key={item.href}
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.22, delay: index * 0.035, ease: "easeOut" }}
                          >
                            <Link
                              href={item.href}
                              className="block px-4 py-2 text-[10px] font-medium text-white/70 hover:text-white bg-white/5 hover:bg-white/10 transition-all tracking-[0.12em] uppercase whitespace-nowrap rounded-full"
                            >
                              {item.label}
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Other Nav Links */}
            <Link
              href="/support"
              className="relative text-[11px] font-medium text-white/70 hover:text-white transition-all duration-300 tracking-[0.2em] uppercase group"
            >
              Support
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300" />
            </Link>

            <Link
              href="/contact-us"
              className="relative text-[11px] font-medium text-white/70 hover:text-white transition-all duration-300 tracking-[0.2em] uppercase group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300" />
            </Link>
          </div>

          {/* Right side - CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <Link
              href="/order-form"
              className="px-6 py-2.5 border border-white/20 text-[11px] font-medium text-white tracking-[0.15em] uppercase hover:bg-white hover:text-black transition-all duration-300"
            >
              Order Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white hover:text-[#ffffff] transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-white/5"
          >
            <div className="px-6 py-8 space-y-1">
              {/* Home */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0 }}
              >
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className="block py-3 text-lg font-light text-white/70 hover:text-white hover:pl-4 transition-all border-b border-white/5"
                >
                  Home
                </Link>
              </motion.div>

              {/* Shop Section */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <div className="py-3 text-lg font-light text-white border-b border-white/5">
                  Shop
                </div>
                <div className="pl-4 border-b border-white/5">
                  {shopDropdownItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block py-2.5 text-base font-light text-white/50 hover:text-white hover:pl-2 transition-all"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </motion.div>

              {/* Support */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Link
                  href="/support"
                  onClick={() => setIsOpen(false)}
                  className="block py-3 text-lg font-light text-white/70 hover:text-white hover:pl-4 transition-all border-b border-white/5"
                >
                  Support
                </Link>
              </motion.div>

              {/* About */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Link
                  href="/about-us"
                  onClick={() => setIsOpen(false)}
                  className="block py-3 text-lg font-light text-white/70 hover:text-white hover:pl-4 transition-all border-b border-white/5"
                >
                  About Us
                </Link>
              </motion.div>

              {/* Contact */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Link
                  href="/contact-us"
                  onClick={() => setIsOpen(false)}
                  className="block py-3 text-lg font-light text-white/70 hover:text-white hover:pl-4 transition-all border-b border-white/5"
                >
                  Contact
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="pt-4"
              >
                <Link
                  href="/order-form"
                  onClick={() => setIsOpen(false)}
                  className="inline-block px-6 py-3 bg-white text-black text-sm font-medium tracking-wider uppercase"
                >
                  Order Now
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

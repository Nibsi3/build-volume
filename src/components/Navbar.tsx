"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/products", label: "Products" },
  { href: "/technology", label: "Technology" },
  { href: "/sustainability", label: "Sustainability" },
  { href: "/retailers", label: "Retailers" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      {/* Top accent line */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-[#ffffff] to-transparent opacity-60" />
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="relative group">
            <Image
              src="/images/logo/nordflam-logo.png"
              alt="NORDflam"
              width={160}
              height={40}
              className="h-8 w-auto brightness-0 invert group-hover:opacity-80 transition-opacity"
              priority
            />
          </Link>

          {/* Center Nav Links */}
          <div className="hidden lg:flex items-center gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-[11px] font-medium text-white/70 hover:text-white transition-all duration-300 tracking-[0.2em] uppercase group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#ffffff] group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* Right side - CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <Link
              href="/retailers"
              className="px-6 py-2.5 border border-white/20 text-[11px] font-medium text-white tracking-[0.15em] uppercase hover:bg-white hover:text-black transition-all duration-300"
            >
              Find a Dealer
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
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-3 text-lg font-light text-white/70 hover:text-white hover:pl-4 transition-all border-b border-white/5"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="pt-4"
              >
                <Link
                  href="/retailers"
                  onClick={() => setIsOpen(false)}
                  className="inline-block px-6 py-3 bg-white text-black text-sm font-medium tracking-wider uppercase"
                >
                  Find a Dealer
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

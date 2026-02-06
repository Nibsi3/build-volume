"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail, MessageCircle, Wrench, BookOpen, Video } from "lucide-react";

const supportOptions = [
  {
    icon: Wrench,
    title: "Product Book-in Support",
    description: "Book your printer in for repair or maintenance at one of our service centers.",
    href: "/product-book-in-support",
    cta: "Book Service",
  },
  {
    icon: MessageCircle,
    title: "Online Support",
    description: "Get remote assistance from our technical team via chat or video call.",
    href: "/online-support",
    cta: "Start Chat",
  },
  {
    icon: BookOpen,
    title: "Training Facility",
    description: "Learn to get the most out of your 3D printer with hands-on training.",
    href: "/training-facility",
    cta: "View Courses",
  },
  {
    icon: Video,
    title: "Quick Start Videos",
    description: "Watch tutorials to get started with your new 3D printer.",
    href: "/quick-start-video",
    cta: "Watch Now",
  },
];

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    value: "+27(0)67 309 1772",
    href: "tel:+27673091772",
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@buildvolume.co.za",
    href: "mailto:info@buildvolume.co.za",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "Chat with us",
    href: "https://wa.me/27673091772",
  },
];

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-[#0c0c0c] pt-24">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] to-[#0c0c0c]" />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="text-[#666] text-xs tracking-widest uppercase">We&apos;re Here to Help</span>
            <h1 className="text-5xl md:text-6xl font-light text-white mt-4 mb-6">SUPPORT</h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Get expert assistance for your 3D printing needs. From technical support to training, we&apos;ve got you covered.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 border-y border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactMethods.map((method) => (
              <a
                key={method.title}
                href={method.href}
                className="flex items-center gap-4 p-6 bg-[#1a1a1a] border border-white/5 hover:border-white/10 transition-colors"
              >
                <method.icon className="w-6 h-6 text-white/60" />
                <div>
                  <div className="text-white/40 text-xs tracking-widest uppercase">{method.title}</div>
                  <div className="text-white">{method.value}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {supportOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={option.href} className="block group">
                  <div className="bg-[#1a1a1a] hover:bg-[#222] transition-all duration-300 border border-white/5 hover:border-white/10 p-8 h-full">
                    <option.icon className="w-10 h-10 text-white/40 mb-6" />
                    <h3 className="text-white text-2xl font-light mb-3">{option.title}</h3>
                    <p className="text-white/50 text-sm mb-6">{option.description}</p>
                    <div className="flex items-center gap-2 text-white/60 group-hover:text-white text-xs tracking-widest uppercase transition-colors">
                      {option.cta} <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Link */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl font-light text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-white/60 mb-8 max-w-xl mx-auto">
            Find answers to common questions about our products and services.
          </p>
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 px-8 py-3 border border-white/20 text-white text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-colors"
          >
            View FAQ <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

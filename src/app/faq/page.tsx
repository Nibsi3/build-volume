"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What payment methods do you accept?",
    answer: "We accept EFT, credit cards, and offer financing options for qualifying purchases. Contact us for more details on payment plans.",
  },
  {
    question: "Do you offer delivery nationwide?",
    answer: "Yes, we deliver to all major cities in South Africa. Delivery times and costs vary by location. See our Delivery Charges page for details.",
  },
  {
    question: "What warranty do your products come with?",
    answer: "All products come with manufacturer warranty. Warranty periods vary by product and brand. Contact us for specific warranty information.",
  },
  {
    question: "Do you provide training with purchases?",
    answer: "Yes, we offer training for all major 3D printer brands. Training can be included with your purchase or booked separately.",
  },
  {
    question: "Can I get a demo before purchasing?",
    answer: "Absolutely! Visit one of our showrooms in Pretoria, Sandton, or Century City to see our printers in action.",
  },
  {
    question: "Do you offer support after purchase?",
    answer: "Yes, we provide comprehensive after-sales support including technical assistance, repairs, and spare parts.",
  },
];

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border-b border-white/5"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left"
      >
        <span className="text-white text-lg font-light pr-8">{faq.question}</span>
        <ChevronDown className={`w-5 h-5 text-white/40 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen && (
        <div className="pb-6">
          <p className="text-white/60 text-sm leading-relaxed">{faq.answer}</p>
        </div>
      )}
    </motion.div>
  );
}

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-[#0c0c0c] pt-24">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] to-[#0c0c0c]" />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <span className="text-[#666] text-xs tracking-widest uppercase">Help Center</span>
          <h1 className="text-5xl md:text-6xl font-light text-white mt-4 mb-6">FAQ</h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Find answers to commonly asked questions about our products and services.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          {faqs.map((faq, index) => (
            <FAQItem key={faq.question} faq={faq} index={index} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl font-light text-white mb-4">Still Have Questions?</h2>
          <p className="text-white/60 mb-8 max-w-xl mx-auto">
            Our team is here to help. Get in touch with us for personalized assistance.
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

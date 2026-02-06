"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    title: "Getting Started with 3D Printing",
    excerpt: "A beginner's guide to choosing your first 3D printer and making your first print.",
    date: "2024-01-15",
    category: "Guides",
  },
  {
    title: "Ultimaker S7: What's New",
    excerpt: "Exploring the latest features and improvements in the Ultimaker S7 series.",
    date: "2024-01-10",
    category: "Product News",
  },
  {
    title: "Best Practices for PLA Printing",
    excerpt: "Tips and tricks for achieving perfect PLA prints every time.",
    date: "2024-01-05",
    category: "Tips",
  },
  {
    title: "Industrial 3D Printing Applications",
    excerpt: "How businesses are using 3D printing to transform their manufacturing processes.",
    date: "2023-12-20",
    category: "Industry",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#0c0c0c] pt-24">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] to-[#0c0c0c]" />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <span className="text-[#666] text-xs tracking-widest uppercase">News & Insights</span>
          <h1 className="text-5xl md:text-6xl font-light text-white mt-4 mb-6">BLOG</h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Stay up to date with the latest 3D printing news, tips, and product announcements.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="py-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href="/blog" className="block group">
                  <div className="bg-[#1a1a1a] hover:bg-[#222] transition-all duration-300 border border-white/5 hover:border-white/10 p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-[#666] text-xs tracking-widest uppercase">{post.category}</span>
                      <span className="text-[#444] text-xs">{post.date}</span>
                    </div>
                    <h2 className="text-white text-xl font-light mb-3 group-hover:text-white/80 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-white/50 text-sm mb-6">{post.excerpt}</p>
                    <div className="flex items-center gap-2 text-white/60 group-hover:text-white text-xs tracking-widest uppercase transition-colors">
                      Read More <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl font-light text-white mb-4">Stay Updated</h2>
          <p className="text-white/60 mb-8 max-w-xl mx-auto">
            Follow us on social media for the latest updates and announcements.
          </p>
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 px-8 py-3 border border-white/20 text-white text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-colors"
          >
            Contact Us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

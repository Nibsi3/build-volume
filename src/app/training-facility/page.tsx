"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Users, Award, Clock } from "lucide-react";

const courses = [
  {
    title: "Ultimaker Training",
    description: "Learn to operate and maintain Ultimaker 3D printers effectively.",
    duration: "1 Day",
    href: "/contact-us",
  },
  {
    title: "Formlabs Training",
    description: "Master SLA printing with Formlabs Form series printers.",
    duration: "1 Day",
    href: "/contact-us",
  },
  {
    title: "Creality Training",
    description: "Get started with Creality printers and optimize your prints.",
    duration: "Half Day",
    href: "/contact-us",
  },
  {
    title: "3D Design Basics",
    description: "Introduction to 3D modeling for 3D printing applications.",
    duration: "2 Days",
    href: "/contact-us",
  },
];

const features = [
  { icon: Users, title: "Expert Instructors", description: "Learn from certified professionals" },
  { icon: Award, title: "Certification", description: "Receive official training certificates" },
  { icon: Clock, title: "Flexible Schedule", description: "Training times to suit your needs" },
  { icon: Calendar, title: "Book Online", description: "Easy online booking system" },
];

export default function TrainingPage() {
  return (
    <div className="min-h-screen bg-[#0c0c0c] pt-24">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] to-[#0c0c0c]" />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <span className="text-[#666] text-xs tracking-widest uppercase">Learn & Grow</span>
          <h1 className="text-5xl md:text-6xl font-light text-white mt-4 mb-6">TRAINING FACILITY</h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Get the most out of your 3D printing investment with professional training from BuildVolume&apos;s certified instructors.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 border-y border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="text-center">
                <feature.icon className="w-8 h-8 text-white/40 mx-auto mb-3" />
                <h3 className="text-white text-sm font-medium">{feature.title}</h3>
                <p className="text-white/40 text-xs mt-1">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="py-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="text-2xl font-light text-white mb-8">Available Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {courses.map((course, index) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={course.href} className="block group">
                  <div className="bg-[#1a1a1a] hover:bg-[#222] transition-all duration-300 border border-white/5 hover:border-white/10 p-8">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-white text-xl font-light">{course.title}</h3>
                      <span className="text-[#666] text-xs tracking-widest uppercase">{course.duration}</span>
                    </div>
                    <p className="text-white/50 text-sm mb-6">{course.description}</p>
                    <div className="flex items-center gap-2 text-white/60 group-hover:text-white text-xs tracking-widest uppercase transition-colors">
                      Enquire Now <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl font-light text-white mb-4">Book Your Training</h2>
          <p className="text-white/60 mb-8 max-w-xl mx-auto">
            Contact us to schedule training at one of our facilities or on-site at your location.
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

"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

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

const features = [
  {
    title: "State-of-the-Art Manufacturing",
    description: "Precision engineering with laser cutting and CNC bending ensures consistency and quality in every product."
  },
  {
    title: "Enhanced Durability",
    description: "Our materials meet EN-GJL-200 standards, guaranteeing long-term reliability and performance."
  },
  {
    title: "Eco-Friendly Systems",
    description: "Compliant with the EU Ecodesign 2022 Directive for lower emissions and sustainability."
  },
  {
    title: "Premium Materials",
    description: "Crafted using high-grade cast iron and precision-engineered steel, built to last for generations."
  }
];

const processes = [
  {
    step: "01",
    title: "Material Selection",
    description: "We use only certified EN-GJL-200 cast iron and hot rolled pickled steel with 3-4mm thickness."
  },
  {
    step: "02",
    title: "Precision Cutting",
    description: "Laser cutting machines ensure precise, clean cuts for perfect component fitting."
  },
  {
    step: "03",
    title: "CNC Bending",
    description: "Computer-controlled bend presses guarantee consistent angles and high-quality aesthetics."
  }
];

export default function TechnologyPage() {
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
            <span className="text-[#666] text-xs tracking-[0.2em] uppercase">
              Advanced Engineering
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mt-4 mb-8">
              TECHNOLOGY
            </h1>
            <p className="text-[#888] text-lg max-w-2xl leading-relaxed">
              NORDflam&apos;s fireplaces are the result of cutting-edge technology and decades 
              of experience in metallurgy. Every product is meticulously crafted for optimal 
              performance, durability, and eco-friendliness.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Technology Overview */}
      <section className="py-16 md:py-24 bg-[#1a1a1a] border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-light text-white mb-6 leading-tight">
                DRIVING INNOVATION<br />
                <span className="text-[#666]">IN HEATING TECHNOLOGY</span>
              </h2>
              <p className="text-[#888] text-lg leading-relaxed mb-6">
                We owe the success of NORDflam brand to the qualified employees and specialists 
                in designing that constantly work behind the scenes to improve our products, 
                to the modern equipment and machinery used in the production process and to 
                our extensive experience in steel and cast-iron works.
              </p>
              <p className="text-[#666] text-base leading-relaxed">
                The cast-iron used in our production conforms to the EN-GJL-200 standard 
                requirements that ensure problem-free use of our products for years to come.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="aspect-square bg-[#0c0c0c] relative overflow-hidden">
                <Image
                  src="/5.png"
                  alt="Manufacturing precision"
                  fill
                  className="object-cover"
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 md:py-24 bg-[#0c0c0c] border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="text-[#666] text-xs tracking-[0.2em] uppercase">
              Our Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-light text-white mt-4">
              TECHNOLOGICAL EXCELLENCE
            </h2>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="p-6 bg-[#1a1a1a] border border-white/5 hover:border-white/10 transition-colors card-noise"
              >
                <Check className="w-6 h-6 text-[#ffffff] mb-4" />
                <h3 className="text-white text-sm font-medium mb-2">
                  {feature.title}
                </h3>
                <p className="text-[#666] text-xs leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quality Control */}
      <section className="py-16 md:py-24 bg-[#1a1a1a] border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <div className="aspect-square bg-[#0c0c0c] relative overflow-hidden card-noise">
                <Image
                  src="/technology%20picture%201.png"
                  alt="Quality testing laboratory"
                  fill
                  className="object-cover"
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] to-transparent" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <span className="text-[#666] text-xs tracking-[0.2em] uppercase">
                Quality Assurance
              </span>
              <h2 className="text-4xl md:text-5xl font-light text-white mt-4 mb-6 leading-tight">
                LABORATORY TESTING<br />
                <span className="text-[#666]">& CERTIFICATION</span>
              </h2>
              <p className="text-[#888] text-lg leading-relaxed mb-6">
                Our laboratory allows us for meticulous control over the emission of fumes 
                and oxidise for the current as well as new products.
              </p>
              <p className="text-[#666] text-base leading-relaxed mb-8">
                All our products comply with the EU Directive 2015/1185, also known as 
                ECODESIGN 2022, ensuring they meet the highest environmental standards.
              </p>
              <div className="flex items-center gap-4">
                <div className="bg-white text-black px-5 py-2.5 text-sm font-medium">
                  ECODESIGN 2022
                </div>
                <div className="border border-white/20 text-white px-5 py-2.5 text-sm font-medium">
                  EN-GJL-200
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Manufacturing Process */}
      <section className="py-16 md:py-24 bg-[#0c0c0c] border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="text-[#666] text-xs tracking-[0.2em] uppercase">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-light text-white mt-4">
              PRECISION MANUFACTURING
            </h2>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-6"
          >
            {processes.map((process, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="relative p-8 bg-[#1a1a1a] border border-white/5"
              >
                <span className="text-white/5 text-8xl font-light absolute top-4 right-6">
                  {process.step}
                </span>
                <h3 className="text-white text-lg font-medium mb-3 relative z-10">
                  {process.title}
                </h3>
                <p className="text-[#666] text-sm leading-relaxed relative z-10">
                  {process.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-[#1a1a1a] border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
              EXPERIENCE THE DIFFERENCE
            </h2>
            <p className="text-[#666] text-lg mb-10 max-w-xl mx-auto">
              Discover how our advanced technology translates into superior heating 
              performance for your home.
            </p>
            <Link
              href="/products"
              className="inline-flex items-center gap-3 text-white text-sm tracking-[0.1em] uppercase hover:text-[#ffffff] transition-colors group"
            >
              Explore Our Products
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

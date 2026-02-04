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

const ecoFeatures = [
  { title: "Reduced Particle Matters", description: "Strict limits on particulate emissions for cleaner air quality." },
  { title: "Lower Organic Compounds", description: "Minimized organic compound emissions during combustion." },
  { title: "Reduced Nitrous Oxides", description: "Controlled NOx emissions for environmental protection." },
  { title: "Less Carbon Oxide", description: "Optimized burning process reduces CO emissions." }
];

const benefits = [
  "Renewable Energy",
  "Eco Materials", 
  "Clean Burning",
  "Low Emissions"
];

export default function SustainabilityPage() {
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
              Our Commitment
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mt-4 mb-8">
              SUSTAINABILITY
            </h1>
            <p className="text-[#888] text-lg max-w-2xl leading-relaxed">
              Discover NORDflam SA&apos;s commitment to sustainability. Learn how our eco-friendly 
              cast iron fireplaces promote energy efficiency and reduce environmental impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
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
                RESPONSIBLE DESIGN<br />
                <span className="text-[#666]">A GREENER TOMORROW</span>
              </h2>
              <p className="text-[#888] text-lg leading-relaxed mb-6">
                Sustainable development with care for the environment around us is the key 
                element of the long-lasting success of our company. NORDflam strives to make 
                renewable energy more accessible and the technology safer, cleaner and economical.
              </p>
              <p className="text-[#666] text-base leading-relaxed">
                We offer exceptional, high-quality products, minimising harmful substances 
                emissions to the atmosphere because environment safety and care is one of our top priorities.
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
                  src="/substainability.jpg"
                  alt="Sustainable forest"
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

      {/* ECODESIGN 2022 */}
      <section className="py-16 md:py-24 bg-[#0c0c0c] border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="text-[#666] text-xs tracking-[0.2em] uppercase">
              EU Compliance
            </span>
            <h2 className="text-3xl md:text-4xl font-light text-white mt-4 mb-4">
              ECODESIGN 2022 CERTIFIED
            </h2>
            <p className="text-[#666] text-base max-w-2xl">
              The ECODESIGN 2022 EU Directive significantly increases requirements on 
              reduction of harmful side effects of heating sources.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {ecoFeatures.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="p-6 bg-[#1a1a1a] border border-white/5 hover:border-white/10 transition-colors card-noise"
              >
                <Check className="w-6 h-6 text-[#ffffff] mb-4" />
                <h3 className="text-white text-sm font-medium mb-2">
                  {item.title}
                </h3>
                <p className="text-[#666] text-xs leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Environmental Benefits */}
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
              <div className="grid grid-cols-2 gap-4">
                {benefits.map((label, index) => (
                  <div
                    key={index}
                    className="p-6 bg-[#0c0c0c] border border-white/5 text-center card-noise"
                  >
                    <Check className="w-6 h-6 text-[#ffffff] mx-auto mb-3" />
                    <span className="text-white text-sm font-medium">{label}</span>
                  </div>
                ))}
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
                Environmental Impact
              </span>
              <h2 className="text-4xl md:text-5xl font-light text-white mt-4 mb-6 leading-tight">
                ECO-FRIENDLY<br />
                <span className="text-[#666]">DESIGN PHILOSOPHY</span>
              </h2>
              <p className="text-[#888] text-lg leading-relaxed mb-6">
                Our products meet the requirements for the EU Directive of ECODESIGN 2022 
                on the emissions of fumes by heating devices.
              </p>
              <p className="text-[#666] text-base leading-relaxed">
                NORDflam has adjusted the fireplace inserts and stoves to fulfil 
                severe environmental restrictions and requirements.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 md:py-24 bg-[#0c0c0c] border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <blockquote className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight mb-8">
              &ldquo;NORDflam creates its products with<br />
              <span className="text-[#ffffff]">ECO-FRIENDLY</span> philosophy at heart.&rdquo;
            </blockquote>
            <p className="text-[#666] text-xs tracking-[0.2em] uppercase">
              Our Core Value
            </p>
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
              CHOOSE SUSTAINABLE HEATING
            </h2>
            <p className="text-[#666] text-lg mb-10 max-w-xl mx-auto">
              Join thousands of homeowners who have chosen NORDflam for eco-friendly, 
              efficient heating solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black text-sm font-medium tracking-[0.1em] uppercase hover:bg-[#ffffff] hover:text-white transition-all"
              >
                Explore Products
              </Link>
              <Link
                href="/technology"
                className="inline-flex items-center gap-3 text-white text-sm tracking-[0.1em] uppercase hover:text-[#ffffff] transition-colors group px-8 py-4 border border-white/20"
              >
                Learn About Technology
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

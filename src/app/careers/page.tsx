import Link from "next/link";
import { ArrowRight, Briefcase, MapPin, Clock } from "lucide-react";

const openPositions = [
  {
    title: "Sales Representative",
    location: "Johannesburg",
    type: "Full-time",
    description: "Join our sales team to help customers find the perfect 3D printing solutions.",
  },
  {
    title: "Technical Support Specialist",
    location: "Pretoria",
    type: "Full-time",
    description: "Provide expert technical support for our range of 3D printers and scanners.",
  },
  {
    title: "3D Printing Technician",
    location: "Cape Town",
    type: "Full-time",
    description: "Operate and maintain 3D printing equipment in our service center.",
  },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-[#0c0c0c] pt-24">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] to-[#0c0c0c]" />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <span className="text-[#666] text-xs tracking-widest uppercase">Join Our Team</span>
          <h1 className="text-5xl md:text-6xl font-light text-white mt-4 mb-6">CAREERS</h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Be part of South Africa&apos;s leading 3D printing company. We&apos;re always looking for talented individuals to join our growing team.
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="text-2xl font-light text-white mb-8">Why Join BuildVolume?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#1a1a1a] border border-white/5 p-6">
              <h3 className="text-white text-lg font-medium mb-2">Cutting-Edge Technology</h3>
              <p className="text-white/60 text-sm">
                Work with the latest 3D printing and scanning technology from world-leading brands.
              </p>
            </div>
            <div className="bg-[#1a1a1a] border border-white/5 p-6">
              <h3 className="text-white text-lg font-medium mb-2">Growth Opportunities</h3>
              <p className="text-white/60 text-sm">
                Develop your skills and advance your career in a rapidly growing industry.
              </p>
            </div>
            <div className="bg-[#1a1a1a] border border-white/5 p-6">
              <h3 className="text-white text-lg font-medium mb-2">Great Team Culture</h3>
              <p className="text-white/60 text-sm">
                Join a passionate team of makers, engineers, and innovators.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="text-2xl font-light text-white mb-8">Open Positions</h2>
          <div className="space-y-4">
            {openPositions.map((position, index) => (
              <div key={index} className="bg-[#1a1a1a] border border-white/5 p-6 hover:border-white/10 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-white text-lg font-medium">{position.title}</h3>
                    <div className="flex items-center gap-4 mt-2 text-white/60 text-sm">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {position.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {position.type}
                      </span>
                    </div>
                    <p className="text-white/50 text-sm mt-2">{position.description}</p>
                  </div>
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center gap-2 px-6 py-2 border border-white/20 text-white text-sm tracking-widest uppercase hover:bg-white/5 transition-colors whitespace-nowrap"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl font-light text-white mb-4">Don&apos;t See Your Role?</h2>
          <p className="text-white/60 mb-8 max-w-xl mx-auto">
            We&apos;re always interested in hearing from talented people. Send us your CV and we&apos;ll keep you in mind for future opportunities.
          </p>
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black text-sm tracking-widest uppercase hover:bg-white/90 transition-colors"
          >
            Send Your CV <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

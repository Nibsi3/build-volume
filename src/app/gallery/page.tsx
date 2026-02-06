import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, MapPin } from "lucide-react";

const events = [
  {
    title: "3D Printing Expo 2025",
    date: "March 15-17, 2025",
    location: "Sandton Convention Centre",
    description: "Join us at South Africa's largest 3D printing exhibition.",
  },
  {
    title: "Bambu Lab Product Launch",
    date: "February 28, 2025",
    location: "BuildVolume Pretoria",
    description: "Be the first to see the latest Bambu Lab innovations.",
  },
  {
    title: "Industrial 3D Printing Workshop",
    date: "April 5, 2025",
    location: "Cape Town",
    description: "Hands-on workshop for industrial applications.",
  },
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-[#0c0c0c] pt-24">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] to-[#0c0c0c]" />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <span className="text-[#666] text-xs tracking-widest uppercase">News & Updates</span>
          <h1 className="text-5xl md:text-6xl font-light text-white mt-4 mb-6">PRESS & EVENTS</h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Stay updated with the latest news, events, and happenings from BuildVolume.
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="text-2xl font-light text-white mb-8">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <div key={index} className="bg-[#1a1a1a] border border-white/5 p-6">
                <h3 className="text-white text-lg font-medium mb-4">{event.title}</h3>
                <div className="space-y-2 text-white/60 text-sm mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {event.location}
                  </div>
                </div>
                <p className="text-white/50 text-sm">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="text-2xl font-light text-white mb-8">Press Releases</h2>
          <div className="space-y-6">
            <div className="bg-[#1a1a1a] border border-white/5 p-6">
              <span className="text-white/40 text-xs">January 2025</span>
              <h3 className="text-white text-lg font-medium mt-2">BuildVolume Announces Partnership with Bambu Lab</h3>
              <p className="text-white/60 text-sm mt-2">
                BuildVolume is now the official distributor of Bambu Lab products in South Africa.
              </p>
            </div>
            <div className="bg-[#1a1a1a] border border-white/5 p-6">
              <span className="text-white/40 text-xs">December 2024</span>
              <h3 className="text-white text-lg font-medium mt-2">New Cape Town Showroom Opening</h3>
              <p className="text-white/60 text-sm mt-2">
                Expanding our presence with a new showroom in Cape Town to better serve the Western Cape.
              </p>
            </div>
            <div className="bg-[#1a1a1a] border border-white/5 p-6">
              <span className="text-white/40 text-xs">November 2024</span>
              <h3 className="text-white text-lg font-medium mt-2">UltiMaker Factor 4 Now Available</h3>
              <p className="text-white/60 text-sm mt-2">
                The industrial-grade UltiMaker Factor 4 is now available for order in South Africa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl font-light text-white mb-4">Media Inquiries</h2>
          <p className="text-white/60 mb-8 max-w-xl mx-auto">
            For press inquiries and media requests, please contact our communications team.
          </p>
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black text-sm tracking-widest uppercase hover:bg-white/90 transition-colors"
          >
            Contact Press Team <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

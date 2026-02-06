import Link from "next/link";
import { ArrowRight, Truck, MapPin, Clock } from "lucide-react";

export default function DeliveryChargesPage() {
  return (
    <div className="min-h-screen bg-[#0c0c0c] pt-24">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] to-[#0c0c0c]" />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <span className="text-[#666] text-xs tracking-widest uppercase">Shipping Information</span>
          <h1 className="text-5xl md:text-6xl font-light text-white mt-4 mb-6">DELIVERY CHARGES</h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            We deliver nationwide across South Africa. Find out about our shipping rates and delivery times.
          </p>
        </div>
      </section>

      {/* Delivery Options */}
      <section className="py-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#1a1a1a] border border-white/5 p-8">
              <Truck className="w-8 h-8 text-white mb-4" />
              <h3 className="text-white text-xl font-light mb-2">Standard Delivery</h3>
              <p className="text-white/60 text-sm mb-4">3-5 business days</p>
              <p className="text-white text-2xl font-light">From R150</p>
              <p className="text-white/40 text-xs mt-2">Depending on weight and location</p>
            </div>
            <div className="bg-[#1a1a1a] border border-white/5 p-8">
              <Clock className="w-8 h-8 text-white mb-4" />
              <h3 className="text-white text-xl font-light mb-2">Express Delivery</h3>
              <p className="text-white/60 text-sm mb-4">1-2 business days</p>
              <p className="text-white text-2xl font-light">From R350</p>
              <p className="text-white/40 text-xs mt-2">Major metros only</p>
            </div>
            <div className="bg-[#1a1a1a] border border-white/5 p-8">
              <MapPin className="w-8 h-8 text-white mb-4" />
              <h3 className="text-white text-xl font-light mb-2">Collection</h3>
              <p className="text-white/60 text-sm mb-4">Same day available</p>
              <p className="text-white text-2xl font-light">FREE</p>
              <p className="text-white/40 text-xs mt-2">Pretoria, Sandton, Cape Town</p>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Zones */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="text-2xl font-light text-white mb-8">Delivery Zones</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-white text-lg">Zone 1 - Major Metros</h3>
              <p className="text-white/60 text-sm">Johannesburg, Pretoria, Cape Town, Durban</p>
              <ul className="space-y-2 text-white/60 text-sm">
                <li>• Standard: R150 - R250</li>
                <li>• Express: R350 - R450</li>
                <li>• Delivery time: 1-3 business days</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-white text-lg">Zone 2 - Secondary Cities</h3>
              <p className="text-white/60 text-sm">Port Elizabeth, Bloemfontein, East London, etc.</p>
              <ul className="space-y-2 text-white/60 text-sm">
                <li>• Standard: R200 - R350</li>
                <li>• Express: R450 - R550</li>
                <li>• Delivery time: 2-4 business days</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-white text-lg">Zone 3 - Regional Areas</h3>
              <p className="text-white/60 text-sm">Smaller towns and rural areas</p>
              <ul className="space-y-2 text-white/60 text-sm">
                <li>• Standard: R300 - R500</li>
                <li>• Express: Not available</li>
                <li>• Delivery time: 3-7 business days</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-white text-lg">Large Items</h3>
              <p className="text-white/60 text-sm">Industrial printers and heavy equipment</p>
              <ul className="space-y-2 text-white/60 text-sm">
                <li>• Quoted individually</li>
                <li>• White glove delivery available</li>
                <li>• Installation services optional</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Important Info */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="text-2xl font-light text-white mb-8">Important Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white/60 text-sm">
            <div className="space-y-4">
              <h3 className="text-white text-lg">Order Processing</h3>
              <ul className="space-y-2">
                <li>• Orders placed before 2pm are processed same day</li>
                <li>• Orders placed after 2pm are processed next business day</li>
                <li>• Tracking information sent via email</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-white text-lg">Special Requirements</h3>
              <ul className="space-y-2">
                <li>• Signature required on delivery</li>
                <li>• Insurance included on all shipments</li>
                <li>• Contact us for international shipping</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl font-light text-white mb-4">Questions About Delivery?</h2>
          <p className="text-white/60 mb-8 max-w-xl mx-auto">
            Contact us for a custom shipping quote or special delivery requirements.
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

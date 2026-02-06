import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-[#0c0c0c] pt-24">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] to-[#0c0c0c]" />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <span className="text-[#666] text-xs tracking-widest uppercase">Policies</span>
          <h1 className="text-5xl md:text-6xl font-light text-white mt-4 mb-6">REFUND POLICY</h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Our commitment to customer satisfaction includes a fair and transparent refund policy.
          </p>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-16">
        <div className="max-w-[900px] mx-auto px-6 lg:px-12">
          <div className="prose prose-invert prose-lg max-w-none">
            <div className="space-y-8 text-white/70">
              <div>
                <h2 className="text-white text-2xl font-light mb-4">Return Window</h2>
                <p>
                  You may return most new, unopened items within 14 days of delivery for a full refund. 
                  We&apos;ll also pay the return shipping costs if the return is a result of our error.
                </p>
              </div>

              <div>
                <h2 className="text-white text-2xl font-light mb-4">Eligibility</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Items must be unused and in original packaging</li>
                  <li>All accessories and documentation must be included</li>
                  <li>Proof of purchase is required</li>
                  <li>Items must not be damaged by the customer</li>
                </ul>
              </div>

              <div>
                <h2 className="text-white text-2xl font-light mb-4">Non-Returnable Items</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Opened filament spools and resins</li>
                  <li>Custom or special order items</li>
                  <li>Items marked as final sale</li>
                  <li>Software licenses and digital products</li>
                </ul>
              </div>

              <div>
                <h2 className="text-white text-2xl font-light mb-4">Refund Process</h2>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Contact our support team to initiate a return</li>
                  <li>Receive a Return Merchandise Authorization (RMA) number</li>
                  <li>Ship the item back with the RMA number clearly marked</li>
                  <li>Refund processed within 5-7 business days of receipt</li>
                </ol>
              </div>

              <div>
                <h2 className="text-white text-2xl font-light mb-4">Defective Products</h2>
                <p>
                  If you receive a defective product, please contact us immediately. We will arrange for 
                  a replacement or full refund, including shipping costs. Manufacturer warranties apply 
                  to all products as specified by the manufacturer.
                </p>
              </div>

              <div>
                <h2 className="text-white text-2xl font-light mb-4">Exchanges</h2>
                <p>
                  We can exchange items for a different model or variant, subject to availability and 
                  price differences. Contact our support team to arrange an exchange.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl font-light text-white mb-4">Need to Return Something?</h2>
          <p className="text-white/60 mb-8 max-w-xl mx-auto">
            Contact our support team to initiate a return or ask questions about our refund policy.
          </p>
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black text-sm tracking-widest uppercase hover:bg-white/90 transition-colors"
          >
            Contact Support <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

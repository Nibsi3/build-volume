import Image from "next/image";
import Link from "next/link";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-[#0c0c0c] pt-20">
      <section className="py-14 md:py-18">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#666] text-xs tracking-widest uppercase">About</span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mt-4 mb-6">
                ABOUT
                <br />
                <span className="text-[#666]">BUILDVOLUME</span>
              </h1>
              <p className="text-[#888] text-lg max-w-2xl leading-relaxed">
                BuildVolume is all about bringing 3D printing into the lives of regular people.
                With the rapid development of 3D printers, 3D scanners, and 3D modelling software,
                additive manufacturing has become more accessible, more capable, and more exciting
                than ever.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/shop"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black text-sm tracking-widest uppercase hover:bg-[#cccccc] transition-all"
                >
                  Shop Now
                </Link>
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 text-white text-sm tracking-widest uppercase hover:bg-white/5 transition-all"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="aspect-[4/3] bg-[#1a1a1a] rounded-sm overflow-hidden relative border border-white/5">
              <Image
                src="/pexels-papaz-30620861.png"
                alt="BuildVolume"
                fill
                className="object-cover"
                priority
                quality={95}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="bg-[#1a1a1a] border border-white/5 p-8 card-noise">
              <h2 className="text-2xl font-light text-white mb-5">What we do</h2>
              <p className="text-[#888] text-sm leading-relaxed">
                We supply 3D printers, 3D scanners, consumables, spares, and expert support—from
                personal projects to industrial Additive Manufacturing. Our goal is to help you
                choose the right solution, get productive quickly, and keep production running.
              </p>
            </div>
            <div className="bg-[#1a1a1a] border border-white/5 p-8 card-noise">
              <h2 className="text-2xl font-light text-white mb-5">Our story</h2>
              <p className="text-[#888] text-sm leading-relaxed">
                BuildVolume was established in 2014 and has expanded to multiple branches including
                Pretoria, Sandton, and Cape Town—supporting customers nationwide with product
                knowledge, service, and training.
              </p>
            </div>
            <div className="bg-[#1a1a1a] border border-white/5 p-8 card-noise">
              <h2 className="text-2xl font-light text-white mb-5">Why BuildVolume</h2>
              <p className="text-[#888] text-sm leading-relaxed">
                From product selection and onboarding to ongoing support, we focus on real outcomes:
                reliable prints, accurate scans, and practical workflows that save time and reduce
                risk.
              </p>
            </div>
          </div>

          <div className="mt-10 grid lg:grid-cols-2 gap-10 items-center">
            <div className="aspect-[16/10] bg-[#1a1a1a] rounded-sm overflow-hidden relative border border-white/5">
              <Image
                src="/pexels-bertellifotografia-20877032.png"
                alt="BuildVolume Team"
                fill
                className="object-cover"
                quality={95}
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-white mb-5">How we help</h2>
              <p className="text-[#888] text-sm leading-relaxed">
                Whether you need a reliable desktop printer, a high-throughput production solution,
                or a scanner for reverse engineering and inspection, our team helps you evaluate the
                options, configure the right setup, and support you after purchase.
              </p>
              <div className="mt-8">
                <Link
                  href="/support"
                  className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 text-white text-sm tracking-widest uppercase hover:bg-white/5 transition-all"
                >
                  View Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

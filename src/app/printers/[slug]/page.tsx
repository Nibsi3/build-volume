import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { printers, getPrinterBySlug, getPrintersByBrand } from "@/lib/printerData";

 export const dynamic = "force-dynamic";

 const IMAGE_VERSION = "2026-02-05";

 function withCacheBuster(src: string): string {
   const v = process.env.NODE_ENV === "development" ? String(Date.now()) : IMAGE_VERSION;
   return src.includes("?") ? `${src}&v=${v}` : `${src}?v=${v}`;
 }

export function generateStaticParams() {
  return printers.map((printer) => ({
    slug: printer.slug,
  }));
}

export default async function PrinterDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const printer = getPrinterBySlug(slug);

  if (!printer) {
    notFound();
  }

  const relatedPrinters = getPrintersByBrand(printer.brand)
    .filter((p) => p.id !== printer.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-[#0c0c0c] pt-24">
      {/* Breadcrumb */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-4">
        <Link
          href="/3d-printers"
          className="inline-flex items-center gap-2 text-white/40 hover:text-white text-sm transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to 3D Printers
        </Link>
      </div>

      {/* Product Hero */}
      <section className="py-8 lg:py-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Image Gallery */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="aspect-square relative overflow-hidden bg-white rounded-lg border border-[#15647c]/20">
                <Image
                  src={withCacheBuster(printer.images[0])}
                  alt={printer.name}
                  fill
                  className="object-contain p-8"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={100}
                  unoptimized
                />
              </div>

              {/* Thumbnail Gallery */}
              {printer.images.length > 1 && (
                <div className="grid grid-cols-4 gap-3">
                  {printer.images.map((img, idx) => (
                    <div
                      key={idx}
                      className="aspect-square relative overflow-hidden bg-white rounded-lg border-2 border-white/10 hover:border-white/30 transition-colors cursor-pointer"
                    >
                      <Image
                        src={withCacheBuster(img)}
                        alt={`${printer.name} - Image ${idx + 1}`}
                        fill
                        className="object-contain p-2"
                        sizes="100px"
                        quality={100}
                        unoptimized
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <span className="text-white/40 text-xs tracking-widest uppercase">
                  {printer.brand}
                </span>
                <h1 className="text-3xl lg:text-4xl font-light text-white mt-2">
                  {printer.name}
                </h1>
                <p className="text-2xl text-white mt-4 font-medium">
                  {printer.price}
                </p>
              </div>

              <p className="text-white/60 text-lg leading-relaxed">
                {printer.description}
              </p>

              {/* Specs */}
              <div className="border-t border-white/10 pt-6 space-y-4">
                <h3 className="text-white text-sm tracking-widest uppercase">
                  Specifications
                </h3>
                <div className="grid gap-3">
                  {printer.specs.buildVolume && (
                    <div className="flex justify-between py-2 border-b border-white/5">
                      <span className="text-white/40">Build Volume</span>
                      <span className="text-white">{printer.specs.buildVolume}</span>
                    </div>
                  )}
                  {printer.specs.resolution && (
                    <div className="flex justify-between py-2 border-b border-white/5">
                      <span className="text-white/40">Layer Resolution</span>
                      <span className="text-white">{printer.specs.resolution}</span>
                    </div>
                  )}
                  {printer.specs.printSpeed && (
                    <div className="flex justify-between py-2 border-b border-white/5">
                      <span className="text-white/40">Print Speed</span>
                      <span className="text-white">{printer.specs.printSpeed}</span>
                    </div>
                  )}
                  {printer.specs.nozzleTemp && (
                    <div className="flex justify-between py-2 border-b border-white/5">
                      <span className="text-white/40">Nozzle Temperature</span>
                      <span className="text-white">{printer.specs.nozzleTemp}</span>
                    </div>
                  )}
                  {printer.specs.bedTemp && (
                    <div className="flex justify-between py-2 border-b border-white/5">
                      <span className="text-white/40">Bed Temperature</span>
                      <span className="text-white">{printer.specs.bedTemp}</span>
                    </div>
                  )}
                  {printer.specs.materials && (
                    <div className="flex justify-between py-2 border-b border-white/5">
                      <span className="text-white/40">Materials</span>
                      <span className="text-white text-right max-w-[60%]">
                        {printer.specs.materials}
                      </span>
                    </div>
                  )}
                  {printer.specs.connectivity && (
                    <div className="flex justify-between py-2 border-b border-white/5">
                      <span className="text-white/40">Connectivity</span>
                      <span className="text-white">{printer.specs.connectivity}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Features */}
              {printer.features && printer.features.length > 0 && (
                <div className="border-t border-white/10 pt-6 space-y-4">
                  <h3 className="text-white text-sm tracking-widest uppercase">
                    Key Features
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {printer.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-white/70 text-sm">
                        <span className="w-1.5 h-1.5 bg-white/40 rounded-full" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href={`/order-form?product=${encodeURIComponent(printer.name)}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black text-sm tracking-widest uppercase hover:bg-white/90 transition-colors"
                >
                  Order Form
                </Link>
                <Link
                  href="/contact-us"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white text-sm tracking-widest uppercase hover:bg-white/5 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Printers */}
      {relatedPrinters.length > 0 && (
        <section className="py-16 border-t border-white/5">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-light text-white">
                More {printer.brand} Printers
              </h2>
              <Link
                href={`/${printer.brand.toLowerCase().replace(" ", "-")}-landing-page`}
                className="text-white/40 hover:text-white text-xs tracking-widest uppercase transition-colors flex items-center gap-2"
              >
                View All <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedPrinters.map((p) => (
                <Link key={p.slug} href={`/printers/${p.slug}`} className="block group">
                  <div className="bg-[#1a1a1a] hover:bg-[#2a2a2a] transition-all duration-300 border border-white/5 hover:border-white/10">
                    <div className="aspect-square relative overflow-hidden bg-white">
                      {p.images[0] ? (
                        <Image
                          src={withCacheBuster(p.images[0])}
                          alt={p.name}
                          fill
                          className="object-contain p-4 group-hover:scale-105 transition-transform duration-500 mix-blend-darken"
                          sizes="(max-width: 768px) 50vw, 25vw"
                          unoptimized
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center bg-[#1a1a1a] text-white/20 text-2xl">
                          {printer.brand.substring(0, 2).toUpperCase()}
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="text-white text-sm font-medium line-clamp-2">
                        {p.name}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

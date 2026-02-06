import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getScannerBySlug, scanners } from "@/lib/scannerData";

export const dynamic = "force-dynamic";

export function generateStaticParams() {
  return scanners.map((scanner) => ({
    slug: scanner.slug,
  }));
}

export default async function ScannerDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const scanner = getScannerBySlug(slug);

  if (!scanner) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#0c0c0c] pt-24">
      {/* Breadcrumb */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-6">
        <Link
          href="/3d-scanners"
          className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Scanners
        </Link>
      </div>

      {/* Product Section */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square relative bg-white overflow-hidden border border-[#15647c]/20">
              <Image
                src={scanner.images[0]}
                alt={scanner.name}
                fill
                className="object-contain p-8"
                priority
                quality={100}
                unoptimized
              />
            </div>
            {scanner.images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {scanner.images.slice(1).map((image, index) => (
                  <div
                    key={index}
                    className="aspect-square relative bg-white overflow-hidden border border-[#15647c]/20"
                  >
                    <Image
                      src={image}
                      alt={`${scanner.name} view ${index + 2}`}
                      fill
                      className="object-contain p-2"
                      quality={100}
                      unoptimized
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div>
              <span className="text-[#666] text-xs tracking-widest uppercase">
                {scanner.brand}
              </span>
              <h1 className="text-4xl md:text-5xl font-light text-white mt-2">
                {scanner.name}
              </h1>
            </div>

            <p className="text-white/70 text-lg leading-relaxed">
              {scanner.description}
            </p>

            {/* Specifications */}
            <div className="border-t border-white/10 pt-8">
              <h2 className="text-white text-lg font-medium mb-6">
                Specifications
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {scanner.specs.accuracy && (
                  <div className="bg-[#1a1a1a] p-4 border border-white/5">
                    <span className="text-white/50 text-xs tracking-widest uppercase">
                      Accuracy
                    </span>
                    <p className="text-white mt-1">{scanner.specs.accuracy}</p>
                  </div>
                )}
                {scanner.specs.scanSpeed && (
                  <div className="bg-[#1a1a1a] p-4 border border-white/5">
                    <span className="text-white/50 text-xs tracking-widest uppercase">
                      Scan Speed
                    </span>
                    <p className="text-white mt-1">{scanner.specs.scanSpeed}</p>
                  </div>
                )}
                {scanner.specs.scanRange && (
                  <div className="bg-[#1a1a1a] p-4 border border-white/5">
                    <span className="text-white/50 text-xs tracking-widest uppercase">
                      Scan Range
                    </span>
                    <p className="text-white mt-1">{scanner.specs.scanRange}</p>
                  </div>
                )}
                {scanner.specs.lightSource && (
                  <div className="bg-[#1a1a1a] p-4 border border-white/5">
                    <span className="text-white/50 text-xs tracking-widest uppercase">
                      Light Source
                    </span>
                    <p className="text-white mt-1">{scanner.specs.lightSource}</p>
                  </div>
                )}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href={`/order-form?product=${encodeURIComponent(scanner.name)}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black text-sm tracking-widest uppercase hover:bg-white/90 transition-colors"
              >
                Order Form <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/shop"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white text-sm tracking-widest uppercase hover:bg-white/5 transition-colors"
              >
                Visit Shop
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

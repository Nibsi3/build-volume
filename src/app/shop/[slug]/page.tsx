import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getStoreProductsSitemap, getProductJsonLdBySlug, formatSlugTitle } from "@/lib/buildvolumeStore";
import { ArrowLeft, ExternalLink } from "lucide-react";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  
  const allProducts = await getStoreProductsSitemap();
  const product = allProducts.find((p) => p.slug === slug);
  
  if (!product) {
    notFound();
  }

  const jsonLd = await getProductJsonLdBySlug(slug);
  
  const title = jsonLd?.name || formatSlugTitle(slug);
  const description = jsonLd?.description || "";
  
  const offers = Array.isArray(jsonLd?.offers) ? jsonLd.offers[0] : jsonLd?.offers;
  const price = offers?.price;
  const currency = offers?.priceCurrency || "ZAR";
  const availability = offers?.availability;
  
  const images = product.images.length > 0 ? product.images : [];
  const buyUrl = product.loc;

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_left,_#15647c_0%,_#0c0c0c_55%,_#000_100%)] pt-24">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-10">
        {/* Back Link */}
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm tracking-widest uppercase mb-10 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Shop
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Images */}
          <div className="space-y-4">
            {images[0] && (
              <div className="aspect-square relative bg-[#1a1a1a] border border-white/5">
                <Image
                  src={images[0]}
                  alt={title}
                  fill
                  className="object-contain p-8"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                  quality={100}
                  unoptimized
                />
              </div>
            )}
            
            {images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {images.slice(1, 5).map((img, i) => (
                  <div key={i} className="aspect-square relative bg-[#1a1a1a] border border-white/5">
                    <Image
                      src={img}
                      alt={`${title} - Image ${i + 2}`}
                      fill
                      className="object-contain p-2"
                      sizes="25vw"
                      quality={100}
                      unoptimized
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            <span className="text-[#666] text-xs tracking-widest uppercase">Product</span>
            <h1 className="text-3xl md:text-4xl font-light text-white mt-2 mb-6">{title}</h1>
            
            {price && (
              <div className="mb-6">
                <span className="text-3xl font-light text-white">
                  {currency === "ZAR" ? "R" : currency} {Number(price).toLocaleString()}
                </span>
                {availability && (
                  <span className="ml-4 text-sm text-white/40">
                    {availability.includes("InStock") ? "In Stock" : "Contact for availability"}
                  </span>
                )}
              </div>
            )}

            {description && (
              <div className="prose prose-invert prose-sm max-w-none mb-8">
                <p className="text-white/60 leading-relaxed">{description}</p>
              </div>
            )}

            {/* Buy Button */}
            <div className="space-y-4">
              <a
                href={buyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black text-sm tracking-widest uppercase hover:bg-white/90 transition-colors w-full justify-center"
              >
                Buy Now <ExternalLink className="w-4 h-4" />
              </a>
              <Link
                href={`/order-form?product=${encodeURIComponent(title)}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white text-sm tracking-widest uppercase hover:bg-white/5 transition-colors w-full"
              >
                Order Form
              </Link>
              <p className="text-white/40 text-xs text-center">
                You will be redirected to complete your purchase
              </p>
            </div>

            {/* Contact */}
            <div className="mt-12 p-6 bg-[#1a1a1a] border border-white/5">
              <h3 className="text-white font-medium mb-2">Need Help?</h3>
              <p className="text-white/50 text-sm mb-4">
                Our team can help you choose the right product for your needs.
              </p>
              <Link
                href="/contact-us"
                className="text-white text-sm tracking-widest uppercase hover:text-white/80 transition-colors"
              >
                Contact Us →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const products = await getStoreProductsSitemap();
  return products.slice(0, 100).map((p) => ({ slug: p.slug }));
}

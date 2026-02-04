import Link from "next/link";

const footerLinks = {
  navigation: [
    { href: "/products", label: "Products" },
    { href: "/technology", label: "Technology" },
    { href: "/sustainability", label: "Sustainability" },
    { href: "/retailers", label: "Retailers" },
  ],
  company: [
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0c0c0c] border-t border-white/5">
      {/* Large Brand Name */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-20 pb-12">
        <div className="mb-16">
          <h2 className="text-[8vw] md:text-[120px] font-light tracking-[-0.02em] leading-none text-white/5 select-none">
            NORDFLAM
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <svg 
                viewBox="0 0 24 24" 
                className="w-5 h-5 text-white"
                fill="currentColor"
              >
                <path d="M12 2C8 6 6 10 6 13c0 3.31 2.69 6 6 6s6-2.69 6-6c0-3-2-7-6-11zm0 16c-2.21 0-4-1.79-4-4 0-1.5.5-3 2-5.5 1.5 2.5 2 4 2 5.5 0 2.21-1.79 4-4 4z"/>
              </svg>
              <span className="text-white text-sm tracking-[0.2em] uppercase font-medium">
                NORDflam
              </span>
            </div>
            <p className="text-[#666] text-sm leading-relaxed max-w-sm mb-6">
              Over two decades of leadership in sustainable heating technology. 
              Premium fireplaces designed for modern living.
            </p>
            <p className="text-[#444] text-xs">
              ECODESIGN 2022 Certified
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-[#666] text-xs tracking-[0.2em] uppercase mb-6">
              Navigation
            </h3>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#888] hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[#666] text-xs tracking-[0.2em] uppercase mb-6">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:info@nordflamsa.co.za"
                  className="text-[#888] hover:text-white transition-colors text-sm"
                >
                  info@nordflamsa.co.za
                </a>
              </li>
              <li className="text-[#666] text-sm">
                Southern Africa
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#444] text-xs">
            © {new Date().getFullYear()} NORDflam SA. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-[#444] hover:text-[#888] transition-colors text-xs">
              Privacy
            </Link>
            <Link href="/terms" className="text-[#444] hover:text-[#888] transition-colors text-xs">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

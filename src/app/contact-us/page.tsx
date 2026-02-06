import Link from "next/link";

const branches = [
  {
    name: "Pretoria",
    address: [
      "Unit A3, Ground Floor, Block 1A,",
      "Phase 5, Boardwalk Office Park,",
      "107 Boardwalk Boulevard",
      "Faerie Glen, Gauteng",
      "South Africa",
      "0043",
    ],
  },
  {
    name: "Sandton",
    address: [
      "Rivonia Crossing",
      "Shop 7",
      "5 Achter Road",
      "Paulshof",
      "Sandton",
      "Johannesburg",
      "2191",
    ],
  },
  {
    name: "Century City",
    address: [
      "Unit Re3 Ground Floor,",
      "Heron Place,",
      "Heron Close",
      "Century City,",
      "Cape Town",
      "7441",
    ],
  },
];

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-[#0c0c0c] pt-20">
      <section className="py-12 md:py-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div>
            <span className="text-[#666] text-xs tracking-widest uppercase">Contact</span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mt-4 mb-6">
              CONTACT US
            </h1>
            <p className="text-[#888] text-lg max-w-2xl leading-relaxed">
              Contact BuildVolume and meet the team.
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-[#1a1a1a] border border-white/5 p-8 card-noise">
              <h2 className="text-2xl font-light text-white mb-6">Contact Details</h2>
              <div className="space-y-4">
                <div>
                  <div className="text-[#666] text-xs tracking-widest uppercase mb-2">Phone</div>
                  <a
                    href="tel:+27105944644"
                    className="text-white hover:text-[#ffffff] transition-colors"
                  >
                    +27(0)10 594 4644
                  </a>
                </div>
                <div>
                  <div className="text-[#666] text-xs tracking-widest uppercase mb-2">Email</div>
                  <a
                    href="mailto:info@buildvolume.co.za"
                    className="text-white hover:text-[#ffffff] transition-colors"
                  >
                    info@buildvolume.co.za
                  </a>
                </div>
                <div>
                  <div className="text-[#666] text-xs tracking-widest uppercase mb-2">WhatsApp</div>
                  <a
                    href="https://wa.me/27673091772"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#ffffff] transition-colors"
                  >
                    +27(0)67 309 1772
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-[#1a1a1a] border border-white/5 p-8 card-noise">
              <h2 className="text-2xl font-light text-white mb-6">Trading Hours</h2>
              <div className="space-y-6">
                <div>
                  <div className="text-white text-sm tracking-widest uppercase mb-2">
                    Pretoria and Century City
                  </div>
                  <div className="text-[#888] text-sm leading-relaxed">
                    Mondays - Thursday: 08:00 - 16:30
                    <br />
                    Fridays: 08:00 - 16:00
                    <br />
                    Saturdays: 09:00 - 13:00
                  </div>
                </div>
                <div>
                  <div className="text-white text-sm tracking-widest uppercase mb-2">Sandton</div>
                  <div className="text-[#888] text-sm leading-relaxed">
                    Mondays - Thursday: 08:00 - 16:30
                    <br />
                    Fridays: 08:00 - 16:00
                    <br />
                    Saturdays: 09:00 - 15:00
                    <br />
                    Sundays: 09:00 - 14:00
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="mb-10">
            <span className="text-[#666] text-xs tracking-widest uppercase">Our Branches</span>
            <h2 className="text-3xl md:text-4xl font-light text-white mt-4">BRANCHES</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {branches.map((branch) => (
              <div key={branch.name} className="bg-[#1a1a1a] border border-white/5 p-6 card-noise">
                <h3 className="text-white text-lg font-medium mb-4">{branch.name}</h3>
                <div className="text-[#888] text-sm leading-relaxed">
                  {branch.address.map((line) => (
                    <div key={line}>{line}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/shop"
              className="inline-flex items-center gap-3 text-white text-sm tracking-widest uppercase hover:text-[#ffffff] transition-colors group"
            >
              Visit Shop
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

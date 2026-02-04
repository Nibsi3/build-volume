"use client";

import { useState, useMemo } from "react";
import { MapPin, Phone, Mail, Globe, Search, ChevronDown, ArrowRight, List, Map } from "lucide-react";
import { retailers, getRetailersByRegion, Retailer } from "@/data/retailers";

export default function RetailersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("All Regions");
  const [selectedRetailer, setSelectedRetailer] = useState<Retailer | null>(null);
  const [viewMode, setViewMode] = useState<"map" | "list">("map");
  const retailersByRegion = getRetailersByRegion();
  const regions = ["All Regions", ...Object.keys(retailersByRegion).sort()];

  const filteredRetailers = useMemo(() => retailers.filter((retailer) => {
    const matchesSearch =
      retailer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      retailer.address.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRegion =
      selectedRegion === "All Regions" || retailer.region === selectedRegion;
    return matchesSearch && matchesRegion;
  }), [searchTerm, selectedRegion]);

  // Generate Google Maps embed URL - show place when selected, otherwise show search for all retailers
  const mapUrl = useMemo(() => {
    if (selectedRetailer) {
      // Show specific location with place search
      const query = encodeURIComponent(`${selectedRetailer.name}, ${selectedRetailer.address}`);
      return `https://www.google.com/maps/embed/v1/place?key=***REMOVED***&q=${query}&zoom=15`;
    }
    // Show all South Africa fireplace retailers area - centered on Cape Town area where most are
    return `https://www.google.com/maps/embed/v1/search?key=***REMOVED***&q=fireplace+retailers+South+Africa&zoom=6&center=-33.5,22`;
  }, [selectedRetailer]);

  return (
    <div className="min-h-screen bg-[#0c0c0c] pt-20">
      {/* Hero Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div>
            <span className="text-[#666] text-xs tracking-widest uppercase">
              Authorized Dealers
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mt-4 mb-6">
              FIND A DEALER
            </h1>
            <p className="text-[#888] text-lg max-w-2xl leading-relaxed">
              Locate authorized NORDflam retailers across South Africa and Namibia. 
              Get expert advice on premium cast iron heating solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="border-y border-white/5 sticky top-20 z-40 bg-[#0c0c0c]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row gap-4 py-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#666]" />
              <input
                type="text"
                placeholder="Search by name or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-[#1a1a1a] border border-white/5 text-white text-sm placeholder-[#666] focus:outline-none focus:border-white/20 transition-colors"
              />
            </div>
            <div className="relative">
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="appearance-none w-full md:w-56 px-4 py-3 pr-10 bg-[#1a1a1a] border border-white/5 text-white text-sm focus:outline-none focus:border-white/20 transition-colors cursor-pointer"
              >
                {regions.map((region) => (
                  <option key={region} value={region}>
                    {region}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#666] pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* Map and List Section */}
      <section className="py-8">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          {/* View Toggle */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-[#666] text-sm">
              Showing <span className="text-white">{filteredRetailers.length}</span> retailers
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode("map")}
                className={`p-2 border transition-colors ${viewMode === "map" ? "bg-[#ffffff] border-[#ffffff] text-white" : "border-white/10 text-[#666] hover:text-white"}`}
              >
                <Map className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 border transition-colors ${viewMode === "list" ? "bg-[#ffffff] border-[#ffffff] text-white" : "border-white/10 text-[#666] hover:text-white"}`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Retailer List */}
            <div className={`${viewMode === "map" ? "lg:col-span-1" : "lg:col-span-3"} space-y-3 max-h-[600px] overflow-y-auto pr-2`}>
              {filteredRetailers.length === 0 ? (
                <div className="text-center py-16">
                  <MapPin className="w-12 h-12 text-[#333] mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-white mb-2">No retailers found</h3>
                  <p className="text-[#666] text-sm">Try adjusting your search or filter criteria</p>
                </div>
              ) : (
                <div className={`grid ${viewMode === "list" ? "md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"} gap-3`}>
                  {filteredRetailers.map((retailer) => (
                    <div
                      key={retailer.id}
                      onClick={() => setSelectedRetailer(retailer)}
                      className={`bg-[#1a1a1a] p-4 border cursor-pointer transition-all card-noise ${selectedRetailer?.id === retailer.id ? "border-[#ffffff]" : "border-white/5 hover:border-white/10"}`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h3 className={`text-sm font-medium transition-colors ${selectedRetailer?.id === retailer.id ? "text-[#ffffff]" : "text-white"}`}>
                          {retailer.name}
                        </h3>
                        <span className="text-[9px] text-[#888] bg-white/5 px-2 py-0.5 uppercase tracking-wider">
                          {retailer.region}
                        </span>
                      </div>
                      <p className="text-[#666] text-xs mb-2">{retailer.address}</p>
                      <div className="flex items-center gap-2">
                        <Phone className="w-3 h-3 text-[#ffffff]" />
                        <a href={`tel:${retailer.phone}`} className="text-[#888] text-xs hover:text-white">
                          {retailer.phone}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Map */}
            {viewMode === "map" && (
              <div className="lg:col-span-2 h-[600px] bg-[#1a1a1a] border border-white/5 overflow-hidden">
                <iframe
                  src={mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Retailer Locations Map"
                />
              </div>
            )}
          </div>

          {/* Selected Retailer Details */}
          {selectedRetailer && (
            <div className="mt-6 p-6 bg-[#1a1a1a] border border-[#ffffff] card-noise">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl text-white font-medium">{selectedRetailer.name}</h3>
                  <p className="text-[#666] text-sm mt-1">{selectedRetailer.address}</p>
                </div>
                <button
                  onClick={() => setSelectedRetailer(null)}
                  className="text-[#666] hover:text-white text-sm"
                >
                  ✕
                </button>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                <a href={`tel:${selectedRetailer.phone}`} className="flex items-center gap-3 text-[#888] hover:text-white transition-colors">
                  <Phone className="w-4 h-4 text-[#ffffff]" />
                  {selectedRetailer.phone}
                </a>
                {selectedRetailer.email && (
                  <a href={`mailto:${selectedRetailer.email}`} className="flex items-center gap-3 text-[#888] hover:text-white transition-colors">
                    <Mail className="w-4 h-4 text-[#ffffff]" />
                    {selectedRetailer.email}
                  </a>
                )}
                {selectedRetailer.website && (
                  <a href={selectedRetailer.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#888] hover:text-white transition-colors">
                    <Globe className="w-4 h-4 text-[#ffffff]" />
                    Visit Website
                  </a>
                )}
              </div>
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${selectedRetailer.lat},${selectedRetailer.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-white text-black text-sm hover:bg-[#cccccc] transition-colors"
              >
                <MapPin className="w-4 h-4" />
                Get Directions
              </a>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-[#1a1a1a] border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
              BECOME A RETAILER
            </h2>
            <p className="text-[#666] text-lg mb-10 max-w-xl mx-auto">
              Interested in becoming an authorized NORDflam retailer? Contact us to 
              learn about partnership opportunities.
            </p>
            <a
              href="mailto:info@nordflamsa.co.za"
              className="inline-flex items-center gap-3 text-white text-sm tracking-widest uppercase hover:text-[#ffffff] transition-colors group"
            >
              <Mail className="w-4 h-4" />
              Contact Us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

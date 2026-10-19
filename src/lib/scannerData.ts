export type Scanner = {
  id: string;
  name: string;
  brand: "Shining 3D" | "Creality" | "HP";
  slug: string;
  description: string;
  price?: string;
  images: string[];
  specs: {
    accuracy?: string;
    scanSpeed?: string;
    scanRange?: string;
    lightSource?: string;
    pointDistance?: string;
    workingDistance?: string;
    textureCapture?: string;
  };
  features?: string[];
};

export const scanners: Scanner[] = [
  // Shining 3D Scanners
  {
    id: "einstar",
    name: "EinStar",
    brand: "Shining 3D",
    slug: "einstar",
    description: "The EinStar is a cost-effective handheld 3D scanner utilizing infrared VCSEL structured light technology. Perfect for hobbyists, educators, and professionals seeking an accessible entry into 3D scanning. It supports full-color texture capture, outdoor scanning, and multiple alignment modes for capturing medium to large objects with ease.",
    price: "R24 999",
    images: [
      "/products/scanners/einstar-1.jpg",
    ],
    specs: {
      accuracy: "Up to 0.1 mm",
      scanSpeed: "Up to 14 FPS (980,000 points/s)",
      scanRange: "Max FOV: 434 × 379 mm",
      lightSource: "Infrared VCSEL structured light",
      pointDistance: "0.1 - 3 mm adjustable",
      workingDistance: "280 - 780 mm",
      textureCapture: "Full color texture scanning",
    },
    features: [
      "Infrared VCSEL structured light",
      "Full-color texture capture",
      "Outdoor scanning capable",
      "Multiple alignment modes",
      "Portable and lightweight",
      "ExStar software included",
      "Marker and markerless tracking",
      "Real-time mesh preview",
    ],
  },
  {
    id: "einscan-pro-hd",
    name: "EinScan Pro HD",
    brand: "Shining 3D",
    slug: "einscan-pro-hd",
    description: "The EinScan Pro HD is a professional-grade handheld 3D scanner delivering industrial-level accuracy of 0.04mm. Designed for reverse engineering, quality inspection, and product development, it features multiple scanning modes and optional add-ons including a turntable and color pack for comprehensive scanning solutions.",
    price: "R89 999",
    images: [
      "/products/scanners/einscan-pro-hd-1.jpg",
    ],
    specs: {
      accuracy: "Up to 0.04 mm",
      scanSpeed: "Up to 30 FPS",
      scanRange: "300 x 170 mm (handheld)",
      lightSource: "LED Structured Light",
      pointDistance: "0.2 - 3 mm",
      workingDistance: "400 mm (handheld)",
      textureCapture: "Optional Color Pack add-on",
    },
    features: [
      "Industrial 0.04mm accuracy",
      "Handheld HD scan mode",
      "Fixed scan with turntable",
      "Rapid scan mode",
      "Optional Color Pack",
      "Optional HD Prime Pack",
      "Solid Edge SHINING 3D Edition",
      "Reverse engineering ready",
      "Quality inspection workflows",
    ],
  },
  {
    id: "einscan-hx",
    name: "EinScan HX",
    brand: "Shining 3D",
    slug: "einscan-hx",
    description: "The EinScan HX is a hybrid 3D scanner combining blue laser and LED structured light sources for versatile scanning of different materials and surfaces. The dual light source technology enables scanning of challenging surfaces including dark, reflective, and multi-material objects without spray, making it ideal for industrial applications.",
    price: "R149 999",
    images: [
      "/products/scanners/einscan-hx-1.jpg",
    ],
    specs: {
      accuracy: "Up to 0.04 mm (laser) / 0.05 mm (LED)",
      scanSpeed: "Up to 25 FPS (1,200,000 points/s)",
      scanRange: "420 x 440 mm",
      lightSource: "Hybrid Blue Laser + LED Structured Light",
      pointDistance: "0.05 - 3 mm",
      workingDistance: "430 mm",
    },
    features: [
      "Hybrid blue laser + LED technology",
      "Scan dark/reflective surfaces",
      "No spray required",
      "Industrial-grade accuracy",
      "Large scan area",
      "Rapid data acquisition",
      "Multi-material scanning",
      "Portable design",
      "ExScan HX software",
    ],
  },
  {
    id: "einscan-hx2",
    name: "EinScan HX2",
    brand: "Shining 3D",
    slug: "einscan-hx2",
    description: "The EinScan HX2 is the next-generation hybrid scanner with enhanced 0.03mm accuracy and faster 30 FPS scanning speeds. Building on the HX platform, it delivers improved performance for demanding professional applications including automotive, aerospace, and manufacturing quality control.",
    price: "R189 999",
    images: [
      "/products/scanners/einscan-hx2-1.jpg",
    ],
    specs: {
      accuracy: "Up to 0.03 mm (laser) / 0.04 mm (LED)",
      scanSpeed: "Up to 30 FPS (1,500,000 points/s)",
      scanRange: "420 x 440 mm",
      lightSource: "Enhanced Hybrid Blue Laser + LED",
      pointDistance: "0.04 - 3 mm",
      workingDistance: "430 mm",
    },
    features: [
      "Enhanced 0.03mm accuracy",
      "Faster 30 FPS scanning",
      "Improved hybrid light source",
      "Automotive/aerospace ready",
      "Quality control workflows",
      "Dark surface scanning",
      "Reflective material capable",
      "Professional-grade output",
      "Advanced alignment algorithms",
    ],
  },
  {
    id: "einscan-h2",
    name: "EinScan H2",
    brand: "Shining 3D",
    slug: "einscan-h2",
    description: "The EinScan H2 is a handheld 3D scanner featuring infrared VCSEL structured light technology, making it safe and comfortable for scanning people. With excellent accuracy and a large scan area, it's ideal for body scanning, healthcare applications, custom orthotics, and capturing large objects.",
    price: "R69 999",
    images: [
      "/products/scanners/einscan-h2-1.jpg",
    ],
    specs: {
      accuracy: "Up to 0.05 mm",
      scanSpeed: "Up to 20 FPS (1,100,000 points/s)",
      scanRange: "400 x 250 mm",
      lightSource: "Infrared VCSEL Structured Light",
      pointDistance: "0.25 - 3 mm",
      workingDistance: "300 - 700 mm",
      textureCapture: "Full color texture",
    },
    features: [
      "Safe infrared light for body scanning",
      "Full-color texture capture",
      "Large scan area",
      "Healthcare applications",
      "Custom orthotics/prosthetics",
      "Portrait and body scanning",
      "Ergonomic handheld design",
      "Real-time visualization",
      "Multiple tracking modes",
    ],
  },
  {
    id: "einscan-h",
    name: "EinScan H",
    brand: "Shining 3D",
    slug: "einscan-h",
    description: "The EinScan H is a portable handheld 3D scanner optimized for scanning human bodies and large objects with high efficiency. Using safe infrared and LED hybrid lighting, it captures detailed full-body scans quickly and comfortably, making it perfect for custom apparel, fitness tracking, and VR/gaming avatar creation.",
    price: "R54 999",
    images: [
      "/products/scanners/einscan-h-1.jpg",
    ],
    specs: {
      accuracy: "Up to 0.05 mm",
      scanSpeed: "Up to 18 FPS",
      scanRange: "380 x 240 mm",
      lightSource: "Infrared + LED Hybrid",
      pointDistance: "0.25 - 3 mm",
      workingDistance: "400 - 900 mm",
      textureCapture: "Full color texture",
    },
    features: [
      "Safe for body scanning",
      "Full-color texture capture",
      "Fast full-body scanning",
      "Custom apparel applications",
      "VR/gaming avatar creation",
      "Fitness and health tracking",
      "Portable and lightweight",
      "Intuitive operation",
      "Large object capable",
    ],
  },
  {
    id: "einscan-libre",
    name: "EinScan Libre",
    brand: "Shining 3D",
    slug: "einscan-libre",
    description: "The EinScan Libre is a lightweight wireless 3D scanner offering ultimate portability and freedom of movement. With no cables to restrict your scanning, it's perfect for on-site scanning, field work, and situations where mobility is essential. The compact design and long battery life make it ideal for professionals on the go.",
    price: "R44 999",
    images: [
      "/products/scanners/einscan-libre-1.jpg",
    ],
    specs: {
      accuracy: "Up to 0.1 mm",
      scanSpeed: "Up to 15 FPS",
      scanRange: "300 x 200 mm",
      lightSource: "Infrared Structured Light",
      pointDistance: "0.5 - 3 mm",
      workingDistance: "200 - 600 mm",
    },
    features: [
      "Fully wireless operation",
      "Lightweight and portable",
      "Long battery life",
      "On-site scanning",
      "Field work ready",
      "No cable restrictions",
      "Compact design",
      "Easy data transfer",
      "Mobile workflow",
    ],
  },
  {
    id: "einscan-rigil",
    name: "EinScan Rigil",
    brand: "Shining 3D",
    slug: "einscan-rigil",
    description: "The EinScan Rigil is an industrial-grade 3D scanner delivering exceptional 0.02mm accuracy for high-precision metrology and quality control applications. With blue laser technology and a large scan area, it's designed for manufacturing environments requiring traceable, repeatable measurements for inspection and reverse engineering.",
    price: "R249 999",
    images: [
      "/products/scanners/einscan-rigil-1.jpg",
    ],
    specs: {
      accuracy: "Up to 0.02 mm (volumetric)",
      scanSpeed: "Up to 25 FPS (2,000,000 points/s)",
      scanRange: "500 x 400 mm",
      lightSource: "Blue Laser",
      pointDistance: "0.02 - 3 mm",
      workingDistance: "300 - 500 mm",
    },
    features: [
      "Metrology-grade 0.02mm accuracy",
      "Blue laser technology",
      "Large scan area",
      "Quality control workflows",
      "Traceable measurements",
      "Manufacturing inspection",
      "Reverse engineering",
      "Photogrammetry compatible",
      "Industrial certification ready",
    ],
  },
  {
    id: "freescan-combo",
    name: "FreeScan Combo+",
    brand: "Shining 3D",
    slug: "freescan-combo",
    description: "The FreeScan Combo+ is a professional metrology-grade 3D scanner delivering exceptional 0.02mm accuracy for the most demanding industrial applications. With its large scan area, high-speed data acquisition, and blue laser technology, it's the choice for aerospace, automotive, and precision manufacturing quality control.",
    price: "R349 999",
    images: [
      "/products/scanners/freescan-combo-1.jpg",
    ],
    specs: {
      accuracy: "Up to 0.02 mm (volumetric)",
      scanSpeed: "Up to 30 FPS (2,800,000 points/s)",
      scanRange: "600 x 550 mm",
      lightSource: "Blue Laser (26 cross lines)",
      pointDistance: "0.02 - 3 mm",
      workingDistance: "300 - 600 mm",
    },
    features: [
      "Metrology-grade accuracy",
      "26 blue laser cross lines",
      "Largest scan area in class",
      "Aerospace/automotive ready",
      "Precision manufacturing QC",
      "High-speed acquisition",
      "Photogrammetry system",
      "Global coordinate measurement",
      "Traceable certification",
    ],
  },

  // Creality Scanners
  {
    id: "cr-scan-otter",
    name: "CR-Scan Otter",
    brand: "Creality",
    slug: "cr-scan-otter",
    description: "The CR-Scan Otter is a compact and affordable 3D scanner perfect for hobbyists, makers, and small object scanning. With its user-friendly design and Creality Scan software, it makes 3D scanning accessible to beginners while delivering quality results for 3D printing, game asset creation, and digital archiving.",
    price: "R7 999",
    images: [
      "/products/scanners/cr-scan-otter-1.jpg",
    ],
    specs: {
      accuracy: "Up to 0.1 mm",
      scanSpeed: "Up to 10 FPS",
      scanRange: "200 x 100 mm",
      lightSource: "Infrared Structured Light",
      pointDistance: "0.1 - 1 mm",
      workingDistance: "150 - 400 mm",
    },
    features: [
      "Affordable entry-level scanner",
      "Compact and portable",
      "Creality Scan software",
      "Small object optimized",
      "3D printing ready output",
      "Game asset creation",
      "Digital archiving",
      "Beginner-friendly",
      "USB powered",
    ],
  },
  {
    id: "cr-scan-raptor",
    name: "CR-Scan Raptor",
    brand: "Creality",
    slug: "cr-scan-raptor",
    description: "The CR-Scan Raptor is a high-speed 3D scanner delivering excellent 0.05mm accuracy for both hobbyist and professional applications. With faster scanning speeds and a larger capture area than entry-level models, it bridges the gap between consumer and professional scanning for reverse engineering, product design, and content creation.",
    price: "R14 999",
    images: [
      "/products/scanners/cr-scan-raptor-1.jpg",
    ],
    specs: {
      accuracy: "Up to 0.05 mm",
      scanSpeed: "Up to 20 FPS",
      scanRange: "300 x 180 mm",
      lightSource: "Infrared Structured Light",
      pointDistance: "0.05 - 2 mm",
      workingDistance: "200 - 500 mm",
      textureCapture: "Full color texture",
    },
    features: [
      "Professional 0.05mm accuracy",
      "High-speed scanning",
      "Full-color texture capture",
      "Larger scan area",
      "Reverse engineering ready",
      "Product design workflows",
      "Content creation",
      "Creality Scan Pro software",
      "Multiple export formats",
    ],
  },
  {
    id: "creality-raptorx",
    name: "Creality RaptorX",
    brand: "Creality",
    slug: "creality-raptorx",
    description: "The Creality RaptorX is an advanced 3D scanner featuring blue light technology for enhanced accuracy and performance. With 0.04mm precision and faster scanning speeds, it's designed for professional applications including industrial design, quality inspection, and medical/dental workflows requiring higher fidelity scans.",
    price: "R24 999",
    images: [
      "/products/scanners/creality-raptorx-1.jpg",
    ],
    specs: {
      accuracy: "Up to 0.04 mm",
      scanSpeed: "Up to 25 FPS",
      scanRange: "350 x 200 mm",
      lightSource: "Blue Structured Light",
      pointDistance: "0.04 - 2 mm",
      workingDistance: "200 - 600 mm",
      textureCapture: "High-resolution color",
    },
    features: [
      "Blue light technology",
      "Professional 0.04mm accuracy",
      "High-speed 25 FPS",
      "Industrial design ready",
      "Quality inspection workflows",
      "Medical/dental applications",
      "High-resolution texture",
      "Advanced alignment",
      "Professional software suite",
    ],
  },
];

export function getScannersByBrand(brand: Scanner["brand"]): Scanner[] {
  return scanners.filter((s) => s.brand === brand);
}

export function getScannerBySlug(slug: string): Scanner | undefined {
  return scanners.find((s) => s.slug === slug || s.id === slug);
}

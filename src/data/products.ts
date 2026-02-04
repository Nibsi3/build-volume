export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  power: string;
  powerMax?: string;
  warranty: string;
  fuelType: string;
  material: "Cast Iron" | "Steel";
  description: string;
  features: string[];
  image: string;
  dimensionsImage?: string;
  energyRatingImage?: string;
  heroImage?: string;
  dimensions?: {
    width: number;
    height: number;
    depth: number;
  };
}

export const products: Product[] = [
  {
    id: "arica",
    name: "Arica",
    price: 27979,
    power: "13 kW",
    warranty: "2 years",
    fuelType: "Wood",
    material: "Cast Iron",
    description: "A powerful 13 kW fireplace designed for larger spaces, combining robust heating performance with elegant aesthetics.",
    features: ["Afterburning", "Airwash System", "External Air Supply", "Heat-Resistant Glass", "Recuperation System"],
    image: "/images/products/arica.webp",
    dimensionsImage: "/images/products/details/arica-dimensions.png",
    energyRatingImage: "/images/products/details/Arica-naklejka-klasy-energetycznej-1.jpg",
    heroImage: "/images/products/details/arica_TIF-1536x1086.jpeg",
    dimensions: { width: 560, height: 1230, depth: 465 }
  },
  {
    id: "augusta",
    name: "Augusta",
    price: 29980,
    power: "7.8 kW",
    powerMax: "10 kW",
    warranty: "2 years",
    fuelType: "Wood",
    material: "Steel",
    description: "The Augusta fireplace is a premium heating solution that combines modern elegance, high-performance efficiency, and advanced technology. Constructed from top-quality materials including stainless steel, heat-resistant ceramic glass, and durable refractory bricks.",
    features: ["Afterburning", "Airwash System", "External Air Supply", "Grill", "Heat-Resistant Glass", "Recuperation System"],
    image: "/images/products/augusta.webp",
    dimensionsImage: "/images/products/details/Augusta-dimensions.png",
    energyRatingImage: "/images/products/details/AUGUSTA-naklejka-klasy-energetycznej.jpg",
    heroImage: "/images/products/details/Wiz_augusta_wer_3_04-1536x1075.jpeg",
    dimensions: { width: 540, height: 1180, depth: 450 }
  },
  {
    id: "brema",
    name: "Brema",
    price: 27979,
    power: "13 kW",
    warranty: "2 years",
    fuelType: "Wood",
    material: "Cast Iron",
    description: "The Brema delivers exceptional 13 kW heating power with a sophisticated design that enhances any living space.",
    features: ["Afterburning", "Airwash System", "External Air Supply", "Heat-Resistant Glass", "Recuperation System"],
    image: "/images/products/brema.webp",
    dimensionsImage: "/images/products/details/brema-dimensions.png",
    energyRatingImage: "/images/products/details/BREMA-naklejka-klasy-energetycznej.jpg",
    heroImage: "/images/products/details/BREMA-FRONT-2-e1733299380395-768x764.png",
    dimensions: { width: 560, height: 1230, depth: 465 }
  },
  {
    id: "carini",
    name: "Carini",
    price: 25383,
    power: "10 kW",
    warranty: "2 years",
    fuelType: "Wood",
    material: "Cast Iron",
    description: "A versatile 10 kW fireplace offering the perfect balance of power and efficiency for medium to large rooms.",
    features: ["Afterburning", "Airwash System", "External Air Supply", "Heat-Resistant Glass", "Recuperation System"],
    image: "/images/products/carini.png",
    dimensionsImage: "/images/products/details/carini-dimensions.png",
    energyRatingImage: "/images/products/details/carini_nordflam_hs_sp_z_oo_klasa_energetyczna.jpg",
    heroImage: "/images/products/details/Carini_wiz_2-002-1536x1098.jpeg",
    dimensions: { width: 520, height: 1150, depth: 440 }
  },
  {
    id: "erino",
    name: "Erino",
    price: 14568,
    originalPrice: 15777,
    power: "8 kW",
    warranty: "2 years",
    fuelType: "Wood",
    material: "Steel",
    description: "An efficient 8 kW fireplace at an exceptional value, perfect for cozy spaces requiring reliable heating.",
    features: ["Afterburning", "Airwash System", "External Air Supply", "Heat-Resistant Glass"],
    image: "/images/products/erino.png",
    dimensionsImage: "/images/products/details/erino-dimensions.png",
    energyRatingImage: "/images/products/details/ERINO-Naklejka-klasy-energetycznej.jpg",
    heroImage: "/images/products/details/erino-hero-e1734002414832.jpg",
    dimensions: { width: 480, height: 1050, depth: 400 }
  },
  {
    id: "flam",
    name: "Flam",
    price: 16400,
    power: "7 kW",
    warranty: "2 years",
    fuelType: "Wood",
    material: "Steel",
    description: "The signature Flam model offers 7 kW of heating power with the brand's renowned quality and craftsmanship.",
    features: ["Afterburning", "Airwash System", "External Air Supply", "Heat-Resistant Glass"],
    image: "/images/products/flam.png",
    dimensionsImage: "/images/products/details/flam-dimensions.png",
    energyRatingImage: "/images/products/details/Nordflam-HS-SP-Z-Energy-Class.jpg.webp",
    heroImage: "/images/products/details/1640-hero.jpg.webp",
    dimensions: { width: 450, height: 980, depth: 380 }
  },
  {
    id: "fokus",
    name: "Fokus",
    price: 13389,
    power: "6 kW",
    warranty: "2 years",
    fuelType: "Wood",
    material: "Steel",
    description: "A compact 6 kW fireplace ideal for smaller spaces, delivering focused warmth with minimal footprint.",
    features: ["Afterburning", "Airwash System", "External Air Supply", "Heat-Resistant Glass"],
    image: "/images/products/fokus.png",
    dimensionsImage: "/images/products/details/fokus-dimensions.png",
    energyRatingImage: "/images/products/details/fokus_nordflam_hs_sp_z_oo_klasa_energetyczna-1.jpeg",
    heroImage: "/images/products/details/FOKUS-FRONT-e1733299638433-779x1024.png",
    dimensions: { width: 420, height: 920, depth: 360 }
  },
  {
    id: "iberia",
    name: "Iberia",
    price: 24604,
    power: "12 kW",
    warranty: "2 years",
    fuelType: "Wood",
    material: "Cast Iron",
    description: "The Iberia brings Mediterranean-inspired design with powerful 12 kW heating capacity.",
    features: ["Afterburning", "Airwash System", "External Air Supply", "Heat-Resistant Glass", "Recuperation System"],
    image: "/images/products/iberia.png",
    dimensionsImage: "/images/products/details/iberia-dimensions.png",
    energyRatingImage: "/images/products/details/Iberia-naklejka-klasy-energetycznej.jpg",
    heroImage: "/images/products/details/IBERIA.jpeg",
    dimensions: { width: 540, height: 1200, depth: 450 }
  },
  {
    id: "katania",
    name: "Katania",
    price: 21748,
    power: "8 kW",
    warranty: "2 years",
    fuelType: "Wood",
    material: "Cast Iron",
    description: "An elegant 8 kW fireplace with refined styling that complements contemporary interiors.",
    features: ["Afterburning", "Airwash System", "External Air Supply", "Heat-Resistant Glass", "Recuperation System"],
    image: "/images/products/katania.png",
    dimensionsImage: "/images/products/details/catania-dimensions.png",
    energyRatingImage: "/images/products/details/catania_nordflam_hs_sp_z_oo_klasa_energetyczna.jpg",
    heroImage: "/images/products/details/catania-hero.jpg",
    dimensions: { width: 500, height: 1100, depth: 420 }
  },
  {
    id: "marsala",
    name: "Marsala",
    price: 29995,
    power: "12.5 kW",
    warranty: "2 years",
    fuelType: "Wood",
    material: "Cast Iron",
    description: "A premium 12.5 kW fireplace offering exceptional heating performance with luxurious design elements.",
    features: ["Afterburning", "Airwash System", "External Air Supply", "Heat-Resistant Glass", "Recuperation System"],
    image: "/images/products/marsala.png",
    dimensionsImage: "/images/products/details/marsala-dimensions.png",
    energyRatingImage: "/images/products/details/MARSALA-naklejka-klasy-energetycznej.jpg",
    heroImage: "/images/products/details/marsala-hero.jpg",
    dimensions: { width: 550, height: 1220, depth: 460 }
  },
  {
    id: "merido",
    name: "Merido",
    price: 15380,
    power: "8 kW",
    warranty: "2 years",
    fuelType: "Wood",
    material: "Steel",
    description: "The Merido combines affordability with quality, delivering 8 kW of reliable heating power.",
    features: ["Afterburning", "Airwash System", "External Air Supply", "Heat-Resistant Glass"],
    image: "/images/products/merido.png",
    dimensionsImage: "/images/products/details/merido-dimensions.png",
    energyRatingImage: "/images/products/details/merido_nordflam_hs_sp_z_oo_klasa_energetyczna-2.jpeg",
    heroImage: "/images/products/details/MERIDO-FRONT-e1733299961731-1024x924.png",
    dimensions: { width: 470, height: 1020, depth: 390 }
  },
  {
    id: "modena",
    name: "Modena",
    price: 26629,
    power: "11 kW",
    warranty: "2 years",
    fuelType: "Wood",
    material: "Cast Iron",
    description: "Italian-inspired design meets powerful 11 kW heating in this sophisticated fireplace model.",
    features: ["Afterburning", "Airwash System", "External Air Supply", "Heat-Resistant Glass", "Recuperation System"],
    image: "/images/products/modena.png",
    dimensionsImage: "/images/products/details/modena-dimensions.png",
    energyRatingImage: "/images/products/details/modena_nordflam_hs_sp_z_oo_klasa_energetyczna-1.jpg",
    heroImage: "/images/products/details/modena-hero-1.jpg",
    dimensions: { width: 530, height: 1180, depth: 445 }
  },
  {
    id: "palermo",
    name: "Palermo",
    price: 28187,
    power: "10 kW",
    warranty: "2 years",
    fuelType: "Wood",
    material: "Cast Iron",
    description: "The Palermo is specially designed for homes with recuperation, featuring a fully sealed cast iron chamber with integrated air regulation.",
    features: ["Afterburning", "Airwash System", "External Air Supply", "Heat-Resistant Glass", "Recuperation System", "Fully Sealed Chamber"],
    image: "/images/products/palermo.png",
    dimensionsImage: "/images/products/details/palermo-dimensions.jpg",
    energyRatingImage: "/images/products/details/palermo_nordflam_hs_sp_z_oo_klasa_energetyczna.jpg",
    heroImage: "/images/products/details/palermo-hero.jpg",
    dimensions: { width: 520, height: 1150, depth: 440 }
  },
  {
    id: "roma",
    name: "Roma",
    price: 19931,
    power: "8 kW",
    warranty: "2 years",
    fuelType: "Wood",
    material: "Cast Iron",
    description: "Classic Roman elegance meets modern heating technology in this 8 kW fireplace.",
    features: ["Afterburning", "Airwash System", "External Air Supply", "Heat-Resistant Glass", "Recuperation System"],
    image: "/images/products/roma.png",
    dimensionsImage: "/images/products/details/roma-dimensions.png",
    energyRatingImage: "/images/products/details/roma_nordflam_hs_sp_z_oo_klasa_energetyczna-2.jpg",
    heroImage: "/images/products/details/roma-hero-e1734003110970.jpg",
    dimensions: { width: 490, height: 1080, depth: 410 }
  },
  {
    id: "skane",
    name: "Skane",
    price: 29995,
    power: "9 kW",
    powerMax: "11 kW",
    warranty: "2 years",
    fuelType: "Wood",
    material: "Cast Iron",
    description: "The Skane redefines the wood-burning experience with Polish craftsmanship and modern engineering. Built entirely from premium cast iron with FSC-certified wooden legs, offering outstanding heat retention and long-lasting durability.",
    features: ["Afterburning", "Airwash System", "External Air Supply", "Grill", "Recuperation System", "Full Cast Iron Construction", "Vermiculite Liners"],
    image: "/images/products/skane.png",
    dimensionsImage: "/images/products/details/Image-from-Nordflam.png",
    energyRatingImage: "/images/products/details/Nordflam-HS-SP-Z-Energy-Class-19.jpg",
    heroImage: "/images/products/details/1629-hero.jpg",
    dimensions: { width: 545, height: 1200, depth: 455 }
  },
  {
    id: "sora",
    name: "Sora",
    price: 19220,
    power: "8 kW",
    warranty: "2 years",
    fuelType: "Wood",
    material: "Cast Iron",
    description: "The Sora is specially designed for homes with recuperation, made entirely of high quality cast iron with a fully sealed chamber.",
    features: ["Afterburning", "Airwash System", "External Air Supply", "Heat-Resistant Glass", "Recuperation System", "Fully Sealed Chamber"],
    image: "/images/products/sora.png",
    dimensionsImage: "/images/products/details/sora-dimensions.png",
    energyRatingImage: "/images/products/details/SORA-naklejka-klasy-energetycznej.jpg",
    heroImage: "/images/products/details/Wiz_Sora_004.jpeg",
    dimensions: { width: 500, height: 1100, depth: 420 }
  },
  {
    id: "toria",
    name: "Toria",
    price: 31146,
    power: "15 kW",
    warranty: "2 years",
    fuelType: "Wood",
    material: "Cast Iron",
    description: "The flagship Toria delivers an impressive 15 kW of heating power, perfect for large spaces demanding maximum warmth.",
    features: ["Afterburning", "Airwash System", "External Air Supply", "Heat-Resistant Glass", "Recuperation System"],
    image: "/images/products/toria.png",
    dimensionsImage: "/images/products/details/toria-dimensions.png",
    energyRatingImage: "/images/products/details/TORIA-naklejka-klasy-energetycznej.jpg",
    heroImage: "/images/products/details/Toria.jpg",
    dimensions: { width: 580, height: 1280, depth: 480 }
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id);
};

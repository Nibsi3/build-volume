export interface Retailer {
  id: string;
  name: string;
  address: string;
  phone: string;
  email?: string;
  website?: string;
  region: string;
  lat: number;
  lng: number;
}

export const retailers: Retailer[] = [
  {
    id: "4th-element",
    name: "4th Element",
    address: "12 Parson Lane, Die Voor Bay, Mossel Bay, South Africa",
    phone: "+27 72 132 0081",
    email: "info@4thelement.co.za",
    website: "https://4thelement.co.za/",
    region: "Western Cape",
    lat: -34.1751,
    lng: 22.1269
  },
  {
    id: "exact-fireplaces",
    name: "Exact Fireplaces and Gas",
    address: "66 Section Street, Paarden Eiland, Cape Town, South Africa",
    phone: "+27 21 511 8973",
    email: "admin@exactgas.co.za",
    website: "https://exactgas.co.za/",
    region: "Western Cape",
    lat: -33.9166,
    lng: 18.4833
  },
  {
    id: "fire-empire-cpt",
    name: "Fire Empire CPT",
    address: "Stodels Garden Centre, Racecourse Road, Milnerton, Cape Town, South Africa",
    phone: "+27 82 749 4684",
    email: "cptsales@fireempire.co.za",
    website: "https://fireempire.co.za/",
    region: "Western Cape",
    lat: -33.8833,
    lng: 18.5167
  },
  {
    id: "fire-empire-jhb",
    name: "Fire Empire JHB",
    address: "60 Lyttelton Road, Clubview, Centurion, South Africa",
    phone: "+27 76 536 5305",
    email: "sales@fireempire.co.za",
    website: "https://fireempire.co.za/",
    region: "Gauteng",
    lat: -25.8500,
    lng: 28.1833
  },
  {
    id: "fired-up",
    name: "Fired Up",
    address: "21 C. J. Langenhoven Road, Dormehls Drift, George, South Africa",
    phone: "+27 84 020 0930",
    email: "firedupshop24@gmail.com",
    region: "Western Cape",
    lat: -33.9667,
    lng: 22.4500
  },
  {
    id: "firefrog",
    name: "Firefrog",
    address: "73 Victoria Street, Somerset West, Cape Town, South Africa",
    phone: "+27 61 564 2889",
    email: "info@firefrog.co.za",
    website: "https://firefrog.co.za/",
    region: "Western Cape",
    lat: -34.0833,
    lng: 18.8500
  },
  {
    id: "fireplace-warehouse",
    name: "Fireplace Warehouse",
    address: "Randpark Ridge, Randburg, South Africa",
    phone: "+27 11 794 6000",
    email: "Info@fireplacewarehouse.co.za",
    website: "https://fireplacewarehouse.co.za/",
    region: "Gauteng",
    lat: -26.0833,
    lng: 27.9500
  },
  {
    id: "firescience",
    name: "Firescience",
    address: "42 Industria Ring Road, Parow Industrial, Cape Town, South Africa",
    phone: "+27 82 215 1333",
    email: "Sales@firescience.co.za",
    website: "https://www.firescience.co.za/",
    region: "Western Cape",
    lat: -33.9000,
    lng: 18.5667
  },
  {
    id: "gc-fires",
    name: "GC Fires",
    address: "39 Delson Circle, Somerset West Business Park, Cape Town, South Africa",
    phone: "+27 21 851 3187",
    email: "Mauritza@gcfires.co.za",
    website: "https://gcfires.co.za/",
    region: "Western Cape",
    lat: -34.0833,
    lng: 18.8500
  },
  {
    id: "heat-king",
    name: "Heat King",
    address: "129 Rabie Street, Fontainebleau, Randburg, South Africa",
    phone: "+27 11 791 1150",
    email: "info@heatking.co.za",
    website: "https://heatking.co.za/",
    region: "Gauteng",
    lat: -26.0833,
    lng: 27.9500
  },
  {
    id: "hi-fire",
    name: "Hi-Fire",
    address: "Andimba Toivo-ya-Toivo Street, Windhoek, Namibia",
    phone: "+264 61 231 244",
    email: "charles@afol.com.na",
    website: "https://hi-fire.co/",
    region: "Namibia",
    lat: -22.5597,
    lng: 17.0832
  },
  {
    id: "hyper-fires-warehouse",
    name: "Hyper Fires Import Showroom & Warehouse",
    address: "2 Patrys Crescent, Okavango Park, Cape Town, South Africa",
    phone: "+27 21 981 4401",
    email: "info@hyperfires.com",
    website: "https://hyperfires.com/",
    region: "Western Cape",
    lat: -33.8833,
    lng: 18.6333
  },
  {
    id: "hyper-fires-showroom",
    name: "Hyper Fires Showroom",
    address: "32 Jeanette Street, Brackenfell, Cape Town, South Africa",
    phone: "+27 21 981 4401",
    email: "info@hyperfires.com",
    website: "https://hyperfires.com",
    region: "Western Cape",
    lat: -33.8667,
    lng: 18.7000
  },
  {
    id: "lourens-wurz",
    name: "Lourens Wurz Projects",
    address: "Table View, Cape Town, South Africa",
    phone: "+27 76 666 5381",
    email: "info@lourenswurzprojects.co.za",
    website: "https://www.lourenswurzprojects.co.za",
    region: "Western Cape",
    lat: -33.8167,
    lng: 18.5000
  },
  {
    id: "macd-fireplaces",
    name: "macD Fireplaces",
    address: "Industria Road, Hermanus, South Africa",
    phone: "+27 79 892 0510",
    website: "https://www.macd.co.za",
    region: "Western Cape",
    lat: -34.4167,
    lng: 19.2333
  },
  {
    id: "marksman-heating",
    name: "Marksman Heating",
    address: "2 Ormond Street, Pietermaritzburg, South Africa",
    phone: "+27 33 342 4675",
    email: "sales@marksman.co.za",
    website: "https://marksman.co.za/",
    region: "KwaZulu-Natal",
    lat: -29.6167,
    lng: 30.3833
  },
  {
    id: "multifire",
    name: "Multifire",
    address: "5 Bellingham Street, Highveld, Centurion, South Africa",
    phone: "+27 12 492 9834",
    email: "info@multifire.co.za",
    website: "https://www.multifire.co.za/",
    region: "Gauteng",
    lat: -25.8500,
    lng: 28.1833
  },
  {
    id: "on-fire",
    name: "On Fire",
    address: "C/O Platinum & Silver Street, Platinum Dr, Ysterplaat Airbase, Cape Town, South Africa",
    phone: "+27 21 554 3473",
    email: "info@on-fire.co.za",
    website: "https://on-fire.co.za/",
    region: "Western Cape",
    lat: -33.9167,
    lng: 18.5000
  },
  {
    id: "on-fire-garden-route",
    name: "On Fire Garden Route",
    address: "12 Bolton Road, Die Voor Bay, Mossel Bay, South Africa",
    phone: "+27 44 050 8686",
    region: "Western Cape",
    lat: -34.1751,
    lng: 22.1269
  },
  {
    id: "on-fire-weskus",
    name: "On Fire Weskus",
    address: "Sterling Road, Marais Industria, Vredenburg, South Africa",
    phone: "+27 22 100 1669",
    region: "Western Cape",
    lat: -32.9000,
    lng: 17.9833
  },
  {
    id: "southern-fireplaces",
    name: "Southern Fireplaces & Braais",
    address: "Service Road Bergvliet, Main Road, Bergvliet, Cape Town, South Africa",
    phone: "+27 21 712 6015",
    email: "sales@southernfireplace.co.za",
    website: "https://www.southernfireplace.co.za/",
    region: "Western Cape",
    lat: -34.0500,
    lng: 18.4500
  },
  {
    id: "pool-fire-space",
    name: "The Pool & Fire Space",
    address: "46 Caledon Street, Lionviham, Cape Town, South Africa",
    phone: "+27 21 852 7912",
    email: "info@spacegroups.co.za",
    website: "https://spacegroups.co.za/",
    region: "Western Cape",
    lat: -34.0833,
    lng: 18.8500
  },
  {
    id: "thermo-fires",
    name: "Thermo Fires",
    address: "18 Viben Avenue, Brackenfell Industrial, Cape Town, South Africa",
    phone: "+27 21 981 1998",
    email: "sales@thermofires.com",
    website: "https://www.thermofires.co.za/",
    region: "Western Cape",
    lat: -33.8667,
    lng: 18.7000
  },
  {
    id: "vulcan-heat-studio",
    name: "Vulcan Heat Studio",
    address: "244 Main Road, Strand, Helderberg, South Africa",
    phone: "+27 21 850 8073",
    email: "Info@vulcanheatstudio.co.za",
    website: "https://vulcanheatstudio.co.za/",
    region: "Western Cape",
    lat: -34.1167,
    lng: 18.8333
  },
  {
    id: "west-coast-fires",
    name: "West Coast Fires",
    address: "West Coast, South Africa",
    phone: "+27 22 100 1669",
    region: "Western Cape",
    lat: -32.9000,
    lng: 17.9833
  }
];

export const getRetailersByRegion = (): Record<string, Retailer[]> => {
  return retailers.reduce((acc, retailer) => {
    if (!acc[retailer.region]) {
      acc[retailer.region] = [];
    }
    acc[retailer.region].push(retailer);
    return acc;
  }, {} as Record<string, Retailer[]>);
};

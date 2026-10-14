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

export const products: Product[] = [];
export function getProductById(id:string){return products.find(p=>p.id===id);}

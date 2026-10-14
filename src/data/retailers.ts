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

export const retailers: Retailer[] = [];

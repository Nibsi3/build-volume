import {printers} from "./printerData";
import {scanners} from "./scannerData";
export type StoreProductSitemapEntry={slug:string;loc:string;lastmod?:string;images:string[]};
export type ProductJsonLd={name?:string;description?:string;image?:string|string[];offers?:{price?:string|number;priceCurrency?:string;availability?:string;url?:string}|Array<{price?:string|number;priceCurrency?:string;availability?:string;url?:string}>};
const catalogue=[...printers,...scanners];
export async function getStoreProductsSitemap():Promise<StoreProductSitemapEntry[]>{return catalogue.map(p=>({slug:p.slug,loc:"/order-form",images:p.images,lastmod:"2026-10-14"}));}
export async function getProductJsonLdBySlug(slug:string):Promise<ProductJsonLd|null>{const p=catalogue.find(p=>p.slug===slug);return p?{name:p.name,description:"Illustrative catalogue entry for this independent concept. "+p.description,image:p.images}:null;}
export async function getPrinterProductSlugs(){return new Set(printers.map(p=>p.slug));}
export function formatSlugTitle(slug:string){return slug.replace(/[-_]+/g," ").replace(/\b\w/g,c=>c.toUpperCase());}

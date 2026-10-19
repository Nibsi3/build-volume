/**
 * Image utilities for background removal and processing
 * 
 * For true background removal, you'll need an API key from:
 * - remove.bg (https://www.remove.bg/api)
 * - Photoroom (https://www.photoroom.com/api)
 * 
 * Set REMOVE_BG_API_KEY in your .env.local file
 */

const REMOVE_BG_API_KEY = process.env.REMOVE_BG_API_KEY;

/**
 * Remove background from an image using remove.bg API
 * Returns the original URL if no API key is configured
 */
export async function removeBackground(imageUrl: string): Promise<string> {
  if (!REMOVE_BG_API_KEY) {
    // No API key - return original image
    return imageUrl;
  }

  try {
    const response = await fetch("https://api.remove.bg/v1.0/removebg", {
      method: "POST",
      headers: {
        "X-Api-Key": REMOVE_BG_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        image_url: imageUrl,
        size: "auto",
        format: "png",
      }),
    });

    if (!response.ok) {
      console.error("Background removal failed:", response.statusText);
      return imageUrl;
    }

    // Convert response to base64 data URL
    const blob = await response.blob();
    const buffer = await blob.arrayBuffer();
    const base64 = Buffer.from(buffer).toString("base64");
    return `data:image/png;base64,${base64}`;
  } catch (error) {
    console.error("Background removal error:", error);
    return imageUrl;
  }
}

/**
 * CSS classes for visual background blending (fallback when no API)
 * Apply these to product images with white/light backgrounds
 */
export const productImageStyles = {
  // For images on white backgrounds - makes white transparent-ish
  whiteBackground: "bg-white mix-blend-darken",
  // For images on dark backgrounds - makes dark transparent-ish  
  darkBackground: "bg-[#1a1a1a] mix-blend-lighten",
  // Standard product image container
  container: "aspect-square relative overflow-hidden",
  // Image styling with hover effect
  image: "object-contain p-4 group-hover:scale-105 transition-transform duration-500",
};

/**
 * Get optimized image URL for product display
 * Adds Wix image optimization parameters if it's a Wix URL
 */
export function getOptimizedImageUrl(url: string, width: number = 400): string {
  if (url.includes("wixstatic.com")) {
    // Wix image optimization
    const baseUrl = url.split("/v1/")[0];
    return `${baseUrl}/v1/fill/w_${width},h_${width},al_c,q_85,usm_0.66_1.00_0.01,enc_auto/${url.split("/").pop()}`;
  }
  return url;
}

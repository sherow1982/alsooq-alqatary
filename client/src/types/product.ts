// Product type from JSON file
export interface Product {
  id: number;
  sku: string;
  image_link: string;
  title: string;
  price: number;
  sale_price: number;
  gtin: string;
}

// Enhanced product type for display with additional UI fields
export interface DisplayProduct {
  id: number;
  sku: string;
  name: string;
  image: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  badge: string;
}

// Calculate discount percentage
export function calculateDiscount(originalPrice: number, salePrice: number): number {
  return Math.round(((originalPrice - salePrice) / originalPrice) * 100);
}

// Generate badge based on discount percentage
export function generateBadge(discount: number): string {
  if (discount >= 30) return "خصم كبير";
  if (discount >= 20) return `خصم ${discount}%`;
  if (discount >= 10) return "عرض مميز";
  return "جديد";
}

// Generate random rating between 4.5 and 5.0
export function generateRating(): number {
  return Number((Math.random() * 0.5 + 4.5).toFixed(1));
}

// Generate random reviews count between 50 and 200
export function generateReviews(): number {
  return Math.floor(Math.random() * 150) + 50;
}

// Transform Product to DisplayProduct
export function transformProduct(product: Product): DisplayProduct {
  const discount = calculateDiscount(product.price, product.sale_price);

  return {
    id: product.id,
    sku: product.sku,
    name: product.title,
    image: product.image_link,
    price: product.sale_price,
    originalPrice: product.price,
    rating: generateRating(),
    reviews: generateReviews(),
    badge: generateBadge(discount),
  };
}

// Convert Arabic text to URL-friendly slug
export function slugify(text: string): string {
  return text
    .toString()
    .trim()
    .replace(/\s+/g, '-')     // Replace spaces with -
    .replace(/[^\u0600-\u06FFa-zA-Z0-9-]/g, '') // Remove non-word chars (keeping Arabic)
    .replace(/\-\-+/g, '-')   // Replace multiple - with single -
    .replace(/^-+/, '')       // Trim - from start of text
    .replace(/-+$/, '');      // Trim - from end of text
}

// Get badge color based on type
export function getBadgeColor(badge: string): string {
  if (badge.includes("كبير")) return "bg-red-500";
  if (badge.includes("%")) return "bg-orange-500";
  if (badge.includes("مميز")) return "bg-blue-500";
  return "bg-green-500";
}

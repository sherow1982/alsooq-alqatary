import { ShoppingCart, Eye, Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import productsData from "@/data/products.json";
import { Product, transformProduct, slugify, getBadgeColor } from "@/types/product";
import { Link } from "wouter";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

export default function FeaturedProducts() {
  const { addToCart } = useCart();
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  // Get featured products (first 8)
  const featuredProducts = (productsData as Product[])
    .slice(0, 8)
    .map(transformProduct);

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
            منتجات مختارة
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold">
            الأكثر مبيعاً
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            اكتشف مجموعتنا الحصرية من المنتجات الفاخرة والأكثر رواجاً
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-border/50"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Product Image */}
              <Link href={`/product/${slugify(product.name)}`}>
                <div className="relative aspect-square bg-muted overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Badge */}
                  <div className={`absolute top-3 right-3 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg ${getBadgeColor(product.badge)}`}>
                    {product.badge}
                  </div>

                  {/* Discount */}
                  {product.originalPrice > product.price && (
                    <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg">
                      -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                    </div>
                  )}

                  {/* Quick Actions Overlay */}
                  <div 
                    className={`absolute inset-0 bg-black/40 flex items-center justify-center gap-2 transition-opacity duration-300 ${
                      hoveredId === product.id ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <Button
                      size="icon"
                      variant="secondary"
                      className="h-10 w-10 rounded-full shadow-lg hover:scale-110 transition-transform"
                      onClick={(e) => {
                        e.preventDefault();
                        addToCart(product);
                      }}
                    >
                      <ShoppingCart className="h-4 w-4" />
                    </Button>
                    <Link href={`/product/${slugify(product.name)}`}>
                      <Button
                        size="icon"
                        variant="secondary"
                        className="h-10 w-10 rounded-full shadow-lg hover:scale-110 transition-transform"
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                    </Link>
                    <Button
                      size="icon"
                      variant="secondary"
                      className="h-10 w-10 rounded-full shadow-lg hover:scale-110 transition-transform"
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Link>

              {/* Product Info */}
              <div className="p-4 space-y-3">
                {/* Rating */}
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'fill-muted text-muted'
                      }`}
                    />
                  ))}
                  <span className="text-xs text-muted-foreground mr-1">({product.reviews})</span>
                </div>

                {/* Product Name */}
                <Link href={`/product/${slugify(product.name)}`}>
                  <h3 className="font-bold text-foreground line-clamp-2 hover:text-primary transition-colors leading-tight min-h-[2.5rem]">
                    {product.name}
                  </h3>
                </Link>

                {/* Price */}
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-primary">
                        {product.price}
                      </span>
                      <span className="text-sm text-primary">ر.ق</span>
                    </div>
                    {product.originalPrice > product.price && (
                      <span className="text-sm text-muted-foreground line-through">
                        {product.originalPrice} ر.ق
                      </span>
                    )}
                  </div>
                </div>

                {/* Quick Buy Button */}
                <Button
                  className="w-full h-11 font-bold gap-2 group/btn"
                  onClick={() => addToCart(product)}
                >
                  <ShoppingCart className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                  أضف للسلة
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <Button size="lg" variant="outline" className="h-14 px-12 text-lg font-bold border-2">
            عرض جميع المنتجات
          </Button>
        </div>
      </div>
    </section>
  );
}

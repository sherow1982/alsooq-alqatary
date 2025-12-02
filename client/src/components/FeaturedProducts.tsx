import { Star, ShoppingCart, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import productsData from "@/data/products.json";
import { Link } from "wouter";
import { Product, transformProduct, DisplayProduct, slugify } from "@/types/product";

// Transform all products from JSON to display format
const products: DisplayProduct[] = (productsData as Product[]).map(transformProduct);

export default function FeaturedProducts() {
  return (
    <section id="products" className="py-20 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
            المنتجات المميزة
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            اختر من أفضل المنتجات المختارة بعناية والتي تحظى بأعلى التقييمات
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {products.map((product, index) => (
            <Link key={product.id} href={`/product/${slugify(product.name)}`}>
              <div
                className="fade-in-up hover-lift group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-white rounded-2xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-300 h-full flex flex-col">
                  {/* Image Container */}
                  <div className="relative overflow-hidden h-64 bg-muted">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    {/* Badge */}
                    <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold">
                      {product.badge}
                    </div>

                    {/* Wishlist button */}
                    <button className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
                      <Heart className="w-5 h-5 text-primary" />
                    </button>

                    {/* Quick add button */}
                    <button className="absolute bottom-0 left-0 right-0 bg-primary text-primary-foreground py-3 font-bold flex items-center justify-center gap-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <ShoppingCart className="w-5 h-5" />
                      أضف للسلة
                    </button>
                  </div>

                  {/* Content */}
                  <div className="p-4 flex-1 flex flex-col">
                    <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2">
                      {product.name}
                    </h3>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-accent text-accent"
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">
                        ({product.reviews})
                      </span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center gap-3 mt-auto">
                      <span className="text-2xl font-bold text-primary">
                        {product.price} ر.ق
                      </span>
                      <span className="text-sm text-muted-foreground line-through">
                        {product.originalPrice} ر.ق
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12 fade-in-up">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-bold text-base px-8 h-14"
          >
            عرض جميع المنتجات
          </Button>
        </div>
      </div>
    </section>
  );
}

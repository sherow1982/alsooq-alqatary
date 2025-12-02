import { Button } from "@/components/ui/button";
import { ArrowLeft, ShoppingBag, Sparkles, TrendingUp } from "lucide-react";
import { Link } from "wouter";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-cream-50 to-background">
      {/* Announcement Bar */}
      <div className="bg-primary text-primary-foreground py-2 text-center text-sm font-medium">
        <Sparkles className="inline w-4 h-4 ml-2" />
        شحن مجاني للطلبات فوق 500 ريال قطري
      </div>

      {/* Main Hero */}
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[calc(100vh-200px)] py-12 lg:py-20">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-right order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <TrendingUp className="w-4 h-4" />
              الأكثر مبيعاً هذا الأسبوع
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
                <span className="block text-foreground">اكتشف منتجات</span>
                <span className="block bg-gradient-to-l from-primary to-primary/60 bg-clip-text text-transparent">
                  فاخرة وأصلية
                </span>
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                تسوق من مجموعة مختارة بعناية من أفضل المنتجات في قطر. جودة عالية، أسعار تنافسية، وتوصيل سريع لكل المناطق.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
              <Button size="lg" className="h-14 px-8 text-lg font-bold shadow-lg hover:shadow-xl transition-all gap-2 group">
                <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform" />
                تسوق الآن
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-bold border-2" asChild>
                <Link href="#products">استكشف المنتجات</Link>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">2000+</div>
                <div className="text-sm text-muted-foreground mt-1">منتج متنوع</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">5000+</div>
                <div className="text-sm text-muted-foreground mt-1">عميل سعيد</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground mt-1">دعم فني</div>
              </div>
            </div>
          </div>

          {/* Right Image Grid */}
          <div className="order-1 lg:order-2 relative">
            <div className="grid grid-cols-2 gap-4 lg:gap-6">
              {/* Large Featured Image */}
              <div className="col-span-2 relative group cursor-pointer">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80"
                    alt="منتجات فاخرة"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                {/* Floating Badge */}
                <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  خصم 40%
                </div>
              </div>

              {/* Two Small Images */}
              <div className="relative group cursor-pointer">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80"
                    alt="إكسسوارات"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className="relative group cursor-pointer">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&q=80"
                    alt="عطور"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="currentColor" className="text-background" />
        </svg>
      </div>
    </section>
  );
}

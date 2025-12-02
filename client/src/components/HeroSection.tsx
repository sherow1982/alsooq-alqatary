import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background pt-20 pb-32">
      {/* Organic blob decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 organic-blob -z-10 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/15 organic-blob -z-10 blur-3xl" />

      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="fade-in-up space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-primary leading-tight">
                مرحبًا بك في السوق القطري
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                اكتشف مجموعة فريدة من المنتجات الراقية المختارة بعناية لك. من المنتجات التقليدية إلى الحديثة، نقدم لك أفضل ما يناسب ذوقك.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-bold text-base px-8 h-14 hover-lift"
              >
                تسوق الآن
                <ArrowRight className="w-5 h-5 mr-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary/5 rounded-full font-bold text-base px-8 h-14 hover-lift"
              >
                اعرف المزيد
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6 pt-8 border-t border-border">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-lg">✓</span>
                </div>
                <span className="text-sm font-medium text-foreground">منتجات أصلية 100%</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-lg">✓</span>
                </div>
                <span className="text-sm font-medium text-foreground">توصيل سريع</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-lg">✓</span>
                </div>
                <span className="text-sm font-medium text-foreground">ضمان الرضا</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-96 lg:h-full min-h-96 fade-in-up" style={{ animationDelay: "0.2s" }}>
            <img
              src="/hero-banner.jpg"
              alt="متجر قطري - منتجات فاخرة"
              className="w-full h-full object-cover rounded-3xl shadow-2xl"
            />
            {/* Decorative frame */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-4 border-primary/30 rounded-3xl -z-10" />
            <div className="absolute -top-4 -left-4 w-32 h-32 border-4 border-secondary/30 rounded-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}

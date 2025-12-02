import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "فاطمة أحمد",
    role: "عميلة مميزة",
    content: "تجربة تسوق رائعة! المنتجات أصلية وجودتها عالية جدًا. التوصيل كان سريعًا والخدمة ممتازة.",
    rating: 5,
    image: "👩‍🦰",
  },
  {
    id: 2,
    name: "محمد علي",
    role: "عميل دائم",
    content: "أفضل متجر إلكتروني جربته. الأسعار معقولة والمنتجات فاخرة. سأعود بالتأكيد للشراء مرة أخرى.",
    rating: 5,
    image: "👨‍💼",
  },
  {
    id: 3,
    name: "سارة محمود",
    role: "عميلة جديدة",
    content: "اشتريت هدايا لعائلتي وكانوا سعداء جدًا. الجودة والتغليف الفاخر أعجبني كثيرًا.",
    rating: 4.5,
    image: "👩‍🎨",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 organic-blob -z-10 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/10 organic-blob -z-10 blur-3xl" />

      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
            آراء عملائنا
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            اسمع من عملائنا الراضين عن تجربتهم معنا
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="fade-in-up hover-lift"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="bg-white rounded-2xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-300 h-full flex flex-col relative">
                {/* Quote icon */}
                <Quote className="w-8 h-8 text-accent/30 mb-4" />

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(testimonial.rating)
                          ? "fill-accent text-accent"
                          : "text-border"
                      }`}
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground mb-6 flex-1 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-border/50">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl">
                    {testimonial.image}
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mt-20">
          {[
            { label: "عميل سعيد", value: "2,500+" },
            { label: "منتج فاخر", value: "500+" },
            { label: "تقييم ممتاز", value: "4.9/5" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center fade-in-up"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <p className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </p>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

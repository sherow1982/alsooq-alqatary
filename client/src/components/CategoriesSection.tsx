import { Package, Sparkles, Watch, Shirt, Home, Gift } from "lucide-react";

const categories = [
  {
    id: 1,
    name: "العطور",
    description: "عطور فاخرة وأصلية",
    icon: Sparkles,
    color: "from-primary to-primary/60",
    count: 24,
  },
  {
    id: 2,
    name: "الإكسسوارات",
    description: "ساعات وحقائب وأكثر",
    icon: Watch,
    color: "from-secondary to-secondary/60",
    count: 18,
  },
  {
    id: 3,
    name: "الملابس",
    description: "ملابس عصرية وراقية",
    icon: Shirt,
    color: "from-accent to-accent/60",
    count: 32,
  },
  {
    id: 4,
    name: "الديكور",
    description: "ديكور منزلي فريد",
    icon: Home,
    color: "from-primary/80 to-secondary/60",
    count: 15,
  },
  {
    id: 5,
    name: "الهدايا",
    description: "هدايا مميزة وفخمة",
    icon: Gift,
    color: "from-secondary/80 to-accent/60",
    count: 28,
  },
  {
    id: 6,
    name: "المزيد",
    description: "منتجات متنوعة أخرى",
    icon: Package,
    color: "from-accent/80 to-primary/60",
    count: 45,
  },
];

export default function CategoriesSection() {
  return (
    <section id="categories" className="py-20 bg-gradient-to-b from-background via-muted/30 to-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
            تصفح الفئات
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            اختر من بين مجموعة واسعة من الفئات المتنوعة والمختارة بعناية
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={category.id}
                className="fade-in-up hover-lift group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden rounded-2xl bg-white p-8 h-full border border-border/50 hover:border-primary/30 transition-all duration-300">
                  {/* Gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-primary mb-2">
                      {category.name}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {category.description}
                    </p>

                    {/* Count badge */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-primary">
                        {category.count} منتج
                      </span>
                      <span className="text-primary group-hover:translate-x-2 transition-transform duration-300">
                        ←
                      </span>
                    </div>
                  </div>

                  {/* Decorative element */}
                  <div className={`absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br ${category.color} rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

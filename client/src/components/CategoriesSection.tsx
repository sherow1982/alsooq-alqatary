import { Smartphone, Heart, Home, Sparkles, Zap, ShoppingBag } from "lucide-react";

const categories = [
  {
    id: 1,
    name: "العناية الصحية",
    description: "أجهزة طبية ومنتجات العناية",
    icon: Heart,
    color: "from-red-500 to-pink-500",
    count: 24,
  },
  {
    id: 2,
    name: "الإلكترونيات",
    description: "أجهزة ذكية ومبتكرة",
    icon: Smartphone,
    color: "from-blue-500 to-cyan-500",
    count: 18,
  },
  {
    id: 3,
    name: "المنزل والمطبخ",
    description: "أدوات منزلية عملية",
    icon: Home,
    color: "from-green-500 to-emerald-500",
    count: 32,
  },
  {
    id: 4,
    name: "العناية الشخصية",
    description: "منتجات التجميل والعناية",
    icon: Sparkles,
    color: "from-purple-500 to-pink-500",
    count: 15,
  },
  {
    id: 5,
    name: "الأجهزة الكهربائية",
    description: "أجهزة منزلية حديثة",
    icon: Zap,
    color: "from-yellow-500 to-orange-500",
    count: 28,
  },
  {
    id: 6,
    name: "منتجات متنوعة",
    description: "اكتشف المزيد من المنتجات",
    icon: ShoppingBag,
    color: "from-indigo-500 to-purple-500",
    count: 45,
  },
];

export default function CategoriesSection() {
  return (
    <section id="categories" className="py-20 bg-gradient-to-b from-background via-muted/30 to-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            تسوق حسب الفئة
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
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
                className="group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden rounded-2xl bg-white p-8 h-full border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  {/* Gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-2">
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
                      <span className="text-primary group-hover:-translate-x-2 transition-transform duration-300 text-2xl">
                        ←
                      </span>
                    </div>
                  </div>

                  {/* Decorative element */}
                  <div className={`absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br ${category.color} rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-2xl`} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

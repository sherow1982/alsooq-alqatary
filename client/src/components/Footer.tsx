import { Heart, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-background to-muted/50 border-t border-border">
      {/* Main Footer Content */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div className="fade-in-up">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
                ق
              </div>
              <h3 className="text-xl font-bold text-primary">السوق القطري</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              متجر إلكتروني متخصص في بيع المنتجات الفاخرة والمختارة بعناية في قطر.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Heart className="w-4 h-4 text-accent" />
              <span>صنع بحب في قطر</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="fade-in-up" style={{ animationDelay: "0.1s" }}>
            <h4 className="font-bold text-foreground mb-4">روابط سريعة</h4>
            <ul className="space-y-3">
              {["الرئيسية", "المنتجات", "الفئات", "من نحن", "التواصل"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Policies */}
          <div className="fade-in-up" style={{ animationDelay: "0.2s" }}>
            <h4 className="font-bold text-foreground mb-4">السياسات</h4>
            <ul className="space-y-3">
              {[
                "سياسة الخصوصية",
                "شروط الاستخدام",
                "سياسة الإرجاع",
                "سياسة التوصيل",
              ].map((policy) => (
                <li key={policy}>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {policy}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="fade-in-up" style={{ animationDelay: "0.3s" }}>
            <h4 className="font-bold text-foreground mb-4">تواصل معنا</h4>
            <div className="space-y-3">
              <a
                href="tel:+97440000000"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
              >
                <Phone className="w-4 h-4" />
                <span>+974 4000 0000</span>
              </a>
              <a
                href="mailto:info@qatarstore.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
              >
                <Mail className="w-4 h-4" />
                <span>info@qatarstore.com</span>
              </a>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4" />
                <span>الدوحة، قطر</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 border-t border-border">
          {/* Social Media */}
          <div className="fade-in-up">
            <h4 className="font-bold text-foreground mb-4">تابعنا</h4>
            <div className="flex items-center gap-4">
              {[
                { icon: Facebook, label: "فيسبوك" },
                { icon: Instagram, label: "إنستجرام" },
                { icon: Twitter, label: "تويتر" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300 hover-lift"
                  title={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="fade-in-up" style={{ animationDelay: "0.1s" }}>
            <h4 className="font-bold text-foreground mb-4">اشترك في النشرة البريدية</h4>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="بريدك الإلكتروني"
                className="flex-1 px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300 text-sm"
              />
              <button className="px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-bold transition-all duration-300 text-sm">
                اشترك
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-border bg-muted/30">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm text-center md:text-right">
            © {currentYear} متجر قطري. جميع الحقوق محفوظة.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-muted-foreground text-sm">طرق الدفع المقبولة:</span>
            <div className="flex items-center gap-3">
              {["💳", "🏦", "📱"].map((emoji, i) => (
                <span key={i} className="text-xl">{emoji}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

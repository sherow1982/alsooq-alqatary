import { Heart, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-background to-muted/50 border-t border-border">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-white font-bold">
                ق
              </div>
              <h3 className="text-xl font-bold">السوق القطري</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              متجر إلكتروني متخصص في بيع المنتجات الفاخرة والمختارة بعناية في قطر.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Heart className="w-4 h-4 text-red-500" />
              <span>صنع بحب في قطر</span>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-4">روابط سريعة</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors text-sm block">
                  الرئيسية
                </Link>
              </li>
              <li>
                <a href="#products" className="text-muted-foreground hover:text-primary transition-colors text-sm block">
                  المنتجات
                </a>
              </li>
              <li>
                <a href="#categories" className="text-muted-foreground hover:text-primary transition-colors text-sm block">
                  الفئات
                </a>
              </li>
              <li>
                <Link href="/cart" className="text-muted-foreground hover:text-primary transition-colors text-sm block">
                  سلة التسوق
                </Link>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors text-sm block">
                  اتصل بنا
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-4">السياسات</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/shipping-policy" className="text-muted-foreground hover:text-primary transition-colors text-sm block">
                  سياسة الشحن
                </Link>
              </li>
              <li>
                <Link href="/return-policy" className="text-muted-foreground hover:text-primary transition-colors text-sm block">
                  سياسة الارتجاع
                </Link>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm block">
                  شروط الاستخدام
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm block">
                  سياسة الخصوصية
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-4">تواصل معنا</h4>
            <div className="space-y-3">
              <a
                href="tel:+201110760081"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                <span dir="ltr">+20 111 076 0081</span>
              </a>
              <a
                href="mailto:info@qatarstore.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 border-t border-border">
          <div>
            <h4 className="font-bold text-foreground mb-4">تابعنا</h4>
            <div className="flex items-center gap-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary text-primary hover:text-white flex items-center justify-center transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary text-primary hover:text-white flex items-center justify-center transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary text-primary hover:text-white flex items-center justify-center transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-4">اشترك في النشرة البريدية</h4>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="بريدك الإلكتروني"
                className="flex-1 px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
              />
              <button className="px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg font-bold transition-all text-sm whitespace-nowrap">
                اشترك
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border bg-muted/30">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm text-center md:text-right">
            © {currentYear} السوق القطري. جميع الحقوق محفوظة.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-muted-foreground text-sm">طرق الدفع:</span>
            <div className="flex items-center gap-3">
              <span className="text-2xl">💳</span>
              <span className="text-2xl">🏦</span>
              <span className="text-2xl">📱</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

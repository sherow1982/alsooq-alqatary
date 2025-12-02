import { MessageCircle, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  const whatsappNumber = "201110760081";
  const whatsappMessage = "مرحبًا! أود الاستفسار عن المنتجات";

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              تواصل معنا
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              هل لديك أي استفسارات أو تحتاج إلى مساعدة؟ نحن هنا لمساعدتك. تواصل معنا عبر أي من القنوات التالية.
            </p>

            {/* Contact Methods */}
            <div className="space-y-6">
              {/* WhatsApp */}
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted transition-colors duration-300 hover-lift"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-secondary/60 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">واتساب</h3>
                  <p className="text-muted-foreground text-sm">
                    تواصل معنا مباشرة عبر الواتساب
                  </p>
                  <p className="text-primary font-semibold text-sm mt-1">
                    +{whatsappNumber}
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:info@qatarstore.com"
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted transition-colors duration-300 hover-lift"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">البريد الإلكتروني</h3>
                  <p className="text-muted-foreground text-sm">
                    أرسل لنا رسالة بريدية
                  </p>
                  <p className="text-primary font-semibold text-sm mt-1">
                    info@qatarstore.com
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+97440000000"
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted transition-colors duration-300 hover-lift"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">الهاتف</h3>
                  <p className="text-muted-foreground text-sm">
                    اتصل بنا مباشرة
                  </p>
                  <p className="text-primary font-semibold text-sm mt-1">
                    +974 4000 0000
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/50">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/80 to-secondary/60 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">الموقع</h3>
                  <p className="text-muted-foreground text-sm">
                    الدوحة، قطر
                  </p>
                  <p className="text-primary font-semibold text-sm mt-1">
                    متجر إلكتروني - توصيل لجميع أنحاء قطر
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Contact Form */}
          <div className="fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="bg-white rounded-3xl p-8 border border-border/50 shadow-lg">
              <h3 className="text-2xl font-bold text-primary mb-6">
                أرسل لنا رسالة
              </h3>

              <form className="space-y-5">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    الاسم
                  </label>
                  <input
                    type="text"
                    placeholder="أدخل اسمك"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    البريد الإلكتروني
                  </label>
                  <input
                    type="email"
                    placeholder="بريدك الإلكتروني"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    الرسالة
                  </label>
                  <textarea
                    placeholder="اكتب رسالتك هنا"
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-bold text-base h-12"
                >
                  إرسال الرسالة
                </Button>
              </form>

              {/* Quick WhatsApp Button */}
              <div className="mt-6 pt-6 border-t border-border">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl border-2 border-secondary text-secondary hover:bg-secondary/5 font-bold transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5" />
                  تواصل عبر الواتساب
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

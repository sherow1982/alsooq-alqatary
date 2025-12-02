import React from "react";

export function Footer() {
  return (
    <footer className="border-t bg-background mt-10">
      <div className="container mx-auto px-4 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">السوق القطري</h3>
            <p className="text-sm text-muted-foreground">
              متجر إلكتروني لعرض وبيع المنتجات المختارة بعناية لعملاء دول الخليج،
              مع تجربة استخدام بسيطة وواضحة.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-base font-semibold">التواصل</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>
                البريد الإلكتروني:{" "}
                <a
                  href="mailto:sherow1982@gmail.com"
                  className="text-primary hover:underline"
                >
                  sherow1982@gmail.com
                </a>
              </p>
              <p>
                واتساب:{" "}
                <a
                  href="https://wa.me/201110760081"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  تواصل معنا على واتساب
                </a>
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-base font-semibold">النشرة البريدية</h4>
            <p className="text-sm text-muted-foreground">
              اشترك ليصلك أحدث العروض والمنتجات الجديدة مباشرة إلى بريدك.
            </p>
            <form
              className="space-y-2"
              onSubmit={(event) => {
                event.preventDefault();
                const formData = new FormData(event.currentTarget);
                const email = String(formData.get("email") || "").trim();
                if (!email) {
                  alert("من فضلك أدخل بريدك الإلكتروني");
                  return;
                }
                alert("تم الاشتراك في النشرة البريدية بنجاح");
                event.currentTarget.reset();
              }}
            >
              <input
                type="email"
                name="email"
                required
                placeholder="أدخل بريدك الإلكتروني"
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              />
              <button
                type="submit"
                className="w-full rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                اشترك
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 border-t pt-4 text-center text-xs text-muted-foreground">
          جميع الحقوق محفوظة © {new Date().getFullYear()} السوق القطري
        </div>
      </div>
    </footer>
  );
}

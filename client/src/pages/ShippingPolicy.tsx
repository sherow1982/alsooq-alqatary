import SEOHead from "@/components/SEOHead";
import { ArrowRight, Truck, Clock, MapPin } from "lucide-react";
import { Link } from "wouter";

export default function ShippingPolicy() {
    return (
        <>
            <SEOHead title="سياسة الشحن والتوصيل" description="تعرف على سياسة الشحن والتوصيل في السوق القطري" />

            <div className="min-h-screen bg-background pb-20">
                <div className="bg-muted/30 border-b">
                    <div className="container py-4">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Link href="/" className="hover:text-primary transition-colors">الرئيسية</Link>
                            <span className="rtl:rotate-180"><ArrowRight className="w-4 h-4" /></span>
                            <span className="text-foreground font-medium">سياسة الشحن</span>
                        </div>
                    </div>
                </div>

                <div className="container mt-8 max-w-3xl">
                    <h1 className="text-3xl font-bold mb-8">سياسة الشحن والتوصيل</h1>

                    <div className="space-y-8">
                        <div className="bg-white p-6 rounded-xl border shadow-sm">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                    <Clock className="w-6 h-6" />
                                </div>
                                <h2 className="text-xl font-bold">مدة التوصيل</h2>
                            </div>
                            <p className="text-muted-foreground leading-relaxed">
                                نحرص في السوق القطري على توصيل طلباتكم في أسرع وقت ممكن. تستغرق عملية التوصيل عادةً من <strong>يوم واحد إلى 3 أيام عمل</strong> كحد أقصى داخل جميع مناطق دولة قطر.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl border shadow-sm">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                    <Truck className="w-6 h-6" />
                                </div>
                                <h2 className="text-xl font-bold">تكلفة الشحن</h2>
                            </div>
                            <p className="text-muted-foreground leading-relaxed">
                                يسعدنا أن نقدم لكم خدمة <strong>شحن مجاني</strong> لجميع الطلبات داخل قطر، دون حد أدنى للطلب. نحن نتحمل تكاليف التوصيل بالكامل لضمان أفضل تجربة تسوق لكم.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl border shadow-sm">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <h2 className="text-xl font-bold">مناطق التغطية</h2>
                            </div>
                            <p className="text-muted-foreground leading-relaxed">
                                نقوم بالتوصيل إلى جميع المناطق والبلديات في دولة قطر، بما في ذلك الدوحة، الريان، الوكرة، الخور، والشمال.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

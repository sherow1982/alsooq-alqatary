import SEOHead from "@/components/SEOHead";
import { ArrowRight, RotateCcw, AlertCircle, CheckCircle } from "lucide-react";
import { Link } from "wouter";

export default function ReturnPolicy() {
    return (
        <>
            <SEOHead title="سياسة الاسترجاع" description="تعرف على سياسة الاسترجاع والاستبدال في السوق القطري" />

            <div className="min-h-screen bg-background pb-20">
                <div className="bg-muted/30 border-b">
                    <div className="container py-4">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Link href="/" className="hover:text-primary transition-colors">الرئيسية</Link>
                            <span className="rtl:rotate-180"><ArrowRight className="w-4 h-4" /></span>
                            <span className="text-foreground font-medium">سياسة الاسترجاع</span>
                        </div>
                    </div>
                </div>

                <div className="container mt-8 max-w-3xl">
                    <h1 className="text-3xl font-bold mb-8">سياسة الاسترجاع والاستبدال</h1>

                    <div className="space-y-8">
                        <div className="bg-white p-6 rounded-xl border shadow-sm">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                    <RotateCcw className="w-6 h-6" />
                                </div>
                                <h2 className="text-xl font-bold">فترة الاسترجاع</h2>
                            </div>
                            <p className="text-muted-foreground leading-relaxed">
                                يحق لعملائنا الكرام طلب استرجاع أو استبدال المنتجات خلال <strong>14 يومًا</strong> من تاريخ استلام الطلب، بشرط أن يكون المنتج في حالته الأصلية وغير مستخدم.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl border shadow-sm">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-500">
                                    <AlertCircle className="w-6 h-6" />
                                </div>
                                <h2 className="text-xl font-bold">المنتجات غير القابلة للاسترجاع</h2>
                            </div>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                حرصًا على الصحة والسلامة العامة، لا يتم استرجاع أو استبدال المنتجات التالية:
                            </p>
                            <ul className="space-y-2 list-none">
                                <li className="flex items-center gap-2 text-muted-foreground">
                                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                                    منتجات التجميل والعناية الشخصية (المكياج، الكريمات، العطور المفتوحة).
                                </li>
                                <li className="flex items-center gap-2 text-muted-foreground">
                                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                                    الملابس الداخلية وملابس السباحة.
                                </li>
                                <li className="flex items-center gap-2 text-muted-foreground">
                                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                                    المنتجات التي تم استخدامها أو إتلاف غلافها الأصلي.
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white p-6 rounded-xl border shadow-sm">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                                    <CheckCircle className="w-6 h-6" />
                                </div>
                                <h2 className="text-xl font-bold">شروط الاسترجاع</h2>
                            </div>
                            <ul className="space-y-3 list-none">
                                <li className="flex items-start gap-3 text-muted-foreground">
                                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                    أن يكون المنتج في عبوته الأصلية مع كامل ملحقاته.
                                </li>
                                <li className="flex items-start gap-3 text-muted-foreground">
                                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                    وجود فاتورة الشراء الأصلية أو رقم الطلب.
                                </li>
                                <li className="flex items-start gap-3 text-muted-foreground">
                                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                    في حالة وجود عيب مصنعي، يتم استبدال المنتج مجانًا.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

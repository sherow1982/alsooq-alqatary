import { useCart } from "@/context/CartContext";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link, useLocation } from "wouter";
import { useState } from "react";

export default function Checkout() {
    const { cart, totalPrice, clearCart } = useCart();
    const [, setLocation] = useLocation();
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        address: "",
        notes: ""
    });

    if (cart.length === 0) {
        setLocation("/cart");
        return null;
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const itemsList = cart.map(item =>
            `- ${item.name} (${item.quantity}x) - ${item.price * item.quantity} ر.ق`
        ).join("\n");

        const message = `مرحبًا، أريد إتمام طلب جديد:

المنتجات:
${itemsList}

الإجمالي: ${totalPrice} ر.ق

بيانات العميل:
الاسم: ${formData.name}
رقم الهاتف: ${formData.phone}
العنوان: ${formData.address}
ملاحظات: ${formData.notes || "لا يوجد"}

رابط الموقع: ${window.location.origin}`;

        window.open(`https://wa.me/201110760081?text=${encodeURIComponent(message)}`, '_blank');
        clearCart();
        setLocation("/");
    };

    return (
        <>
            <SEOHead title="إتمام الطلب" description="أدخل بياناتك لإتمام الطلب" />

            <div className="min-h-screen bg-background pb-20">
                <div className="bg-muted/30 border-b">
                    <div className="container py-4">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Link href="/cart" className="hover:text-primary transition-colors">سلة التسوق</Link>
                            <span className="rtl:rotate-180"><ArrowRight className="w-4 h-4" /></span>
                            <span className="text-foreground font-medium">إتمام الطلب</span>
                        </div>
                    </div>
                </div>

                <div className="container mt-8">
                    <div className="max-w-2xl mx-auto">
                        <h1 className="text-3xl font-bold mb-8 text-center">بيانات الشحن</h1>

                        <div className="bg-white p-6 rounded-xl border shadow-sm">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="space-y-2">
                                    <Label htmlFor="name">الاسم الكامل</Label>
                                    <Input
                                        id="name"
                                        required
                                        placeholder="أدخل اسمك الكامل"
                                        value={formData.name}
                                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="phone">رقم الهاتف</Label>
                                    <Input
                                        id="phone"
                                        required
                                        type="tel"
                                        placeholder="أدخل رقم هاتفك"
                                        dir="ltr"
                                        className="text-right"
                                        value={formData.phone}
                                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="address">العنوان بالتفصيل</Label>
                                    <Textarea
                                        id="address"
                                        required
                                        placeholder="المنطقة، الشارع، رقم المنزل..."
                                        value={formData.address}
                                        onChange={e => setFormData({ ...formData, address: e.target.value })}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="notes">ملاحظات إضافية (اختياري)</Label>
                                    <Textarea
                                        id="notes"
                                        placeholder="أي تعليمات خاصة للتوصيل..."
                                        value={formData.notes}
                                        onChange={e => setFormData({ ...formData, notes: e.target.value })}
                                    />
                                </div>

                                <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                                    <div className="flex justify-between font-medium">
                                        <span>عدد المنتجات</span>
                                        <span>{cart.reduce((acc, item) => acc + item.quantity, 0)}</span>
                                    </div>
                                    <div className="flex justify-between font-bold text-lg text-primary border-t pt-2 border-border/50">
                                        <span>الإجمالي النهائي</span>
                                        <span>{totalPrice} ر.ق</span>
                                    </div>
                                </div>

                                <Button type="submit" size="lg" className="w-full text-lg font-bold h-12 gap-2 bg-green-500 hover:bg-green-600">
                                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                                    تأكيد الطلب عبر واتساب
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

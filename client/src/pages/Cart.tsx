import { useCart } from "@/context/CartContext";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from "lucide-react";
import { Link } from "wouter";

export default function Cart() {
    const { cart, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();

    if (cart.length === 0) {
        return (
            <>
                <SEOHead title="سلة التسوق" description="سلة التسوق فارغة" />
                <div className="min-h-[60vh] flex flex-col items-center justify-center container">
                    <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-6">
                        <ShoppingBag className="w-12 h-12 text-muted-foreground" />
                    </div>
                    <h1 className="text-2xl font-bold mb-4">سلة التسوق فارغة</h1>
                    <p className="text-muted-foreground mb-8">لم تقم بإضافة أي منتجات للسلة بعد</p>
                    <Link href="/">
                        <Button size="lg" className="gap-2">
                            <ArrowRight className="w-4 h-4" />
                            تصفح المنتجات
                        </Button>
                    </Link>
                </div>
            </>
        );
    }

    return (
        <>
            <SEOHead title="سلة التسوق" description="مراجعة سلة التسوق وإتمام الطلب" />

            <div className="min-h-screen bg-background pb-20">
                <div className="bg-muted/30 border-b">
                    <div className="container py-4">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Link href="/" className="hover:text-primary transition-colors">الرئيسية</Link>
                            <span className="rtl:rotate-180"><ArrowRight className="w-4 h-4" /></span>
                            <span className="text-foreground font-medium">سلة التسوق</span>
                        </div>
                    </div>
                </div>

                <div className="container mt-8">
                    <h1 className="text-3xl font-bold mb-8">سلة التسوق</h1>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Cart Items */}
                        <div className="lg:col-span-2 space-y-4">
                            {cart.map((item) => (
                                <div key={item.id} className="flex gap-4 p-4 bg-white rounded-xl border shadow-sm">
                                    <div className="w-24 h-24 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                    </div>

                                    <div className="flex-1 flex flex-col justify-between">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h3 className="font-bold text-lg line-clamp-1">{item.name}</h3>
                                                <p className="text-primary font-bold mt-1">{item.price} ر.ق</p>
                                            </div>
                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className="text-red-500 hover:bg-red-50 p-2 rounded-full transition-colors"
                                            >
                                                <Trash2 className="w-5 h-5" />
                                            </button>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <div className="flex items-center border rounded-lg overflow-hidden">
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                    className="p-2 hover:bg-muted transition-colors disabled:opacity-50"
                                                    disabled={item.quantity <= 1}
                                                >
                                                    <Minus className="w-4 h-4" />
                                                </button>
                                                <span className="w-12 text-center font-medium">{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    className="p-2 hover:bg-muted transition-colors"
                                                >
                                                    <Plus className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Order Summary */}
                        <div className="lg:col-span-1">
                            <div className="bg-white p-6 rounded-xl border shadow-sm sticky top-24">
                                <h2 className="text-xl font-bold mb-6">ملخص الطلب</h2>

                                <div className="space-y-4 mb-6">
                                    <div className="flex justify-between text-muted-foreground">
                                        <span>المجموع الفرعي</span>
                                        <span>{totalPrice} ر.ق</span>
                                    </div>
                                    <div className="flex justify-between text-muted-foreground">
                                        <span>الشحن</span>
                                        <span className="text-green-600 font-medium">مجاني</span>
                                    </div>
                                    <div className="border-t pt-4 flex justify-between font-bold text-lg">
                                        <span>الإجمالي</span>
                                        <span className="text-primary">{totalPrice} ر.ق</span>
                                    </div>
                                </div>

                                <Link href="/checkout">
                                    <Button size="lg" className="w-full text-lg font-bold h-12">
                                        إتمام الطلب
                                    </Button>
                                </Link>

                                <Button
                                    variant="outline"
                                    className="w-full mt-3 text-red-500 hover:text-red-600 hover:bg-red-50 border-red-200"
                                    onClick={clearCart}
                                >
                                    إفراغ السلة
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

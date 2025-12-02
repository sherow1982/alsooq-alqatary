import { useRoute } from "wouter";
import { useMemo } from "react";
import productsData from "@/data/products.json";
import { Product, transformProduct, slugify, getBadgeColor } from "@/types/product";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star, ArrowRight, Check, Truck, Shield } from "lucide-react";
import { Link } from "wouter";
import NotFound from "./NotFound";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/hooks/use-toast";

export default function ProductDetail() {
    const [match, params] = useRoute("/product/:slug");
    const { addToCart } = useCart();
    const { toast } = useToast();

    // Find product based on slug
    const product = useMemo(() => {
        if (!match || !params?.slug) return null;

        // Decode URL component to handle Arabic characters
        const decodedSlug = decodeURIComponent(params.slug);

        const foundProduct = (productsData as Product[]).find(p => {
            const slug = slugify(p.title);
            return slug === decodedSlug;
        });

        return foundProduct ? transformProduct(foundProduct) : null;
    }, [match, params]);

    // Get related products (random 4 products excluding current)
    const relatedProducts = useMemo(() => {
        if (!product) return [];
        return (productsData as Product[])
            .filter(p => p.id !== product.id)
            .sort(() => 0.5 - Math.random())
            .slice(0, 4)
            .map(transformProduct);
    }, [product]);

    if (!match || !product) {
        return <NotFound />;
    }

    const discountPercentage = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

    return (
        <>
            <SEOHead
                title={product.name}
                description={`اشترِ ${product.name} الآن بسعر ${product.price} ر.ق. أفضل جودة وأسعار منافسة في السوق القطري.`}
                image={product.image}
                price={product.price}
                type="product"
            />

            <div className="min-h-screen bg-background pb-20">
                {/* Breadcrumb */}
                <div className="bg-muted/30 border-b">
                    <div className="container py-4">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Link href="/" className="hover:text-primary transition-colors">الرئيسية</Link>
                            <span className="rtl:rotate-180"><ArrowRight className="w-4 h-4" /></span>
                            <span className="text-foreground font-medium truncate">{product.name}</span>
                        </div>
                    </div>
                </div>

                <div className="container mt-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Product Image */}
                        <div className="space-y-4">
                            <div className="relative aspect-square bg-white rounded-2xl overflow-hidden border shadow-sm">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-contain p-4"
                                />
                                <div className={`absolute top-4 right-4 text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-md ${getBadgeColor(product.badge)}`}>
                                    {product.badge}
                                </div>
                            </div>

                            {/* Features Grid */}
                            <div className="grid grid-cols-3 gap-4">
                                <div className="bg-muted/30 p-4 rounded-xl text-center space-y-2 border">
                                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary">
                                        <Truck className="w-5 h-5" />
                                    </div>
                                    <p className="text-xs font-medium">توصيل سريع</p>
                                </div>
                                <div className="bg-muted/30 p-4 rounded-xl text-center space-y-2 border">
                                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary">
                                        <Shield className="w-5 h-5" />
                                    </div>
                                    <p className="text-xs font-medium">ضمان الجودة</p>
                                </div>
                                <div className="bg-muted/30 p-4 rounded-xl text-center space-y-2 border">
                                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary">
                                        <Check className="w-5 h-5" />
                                    </div>
                                    <p className="text-xs font-medium">أصلي 100%</p>
                                </div>
                            </div>
                        </div>

                        {/* Product Info */}
                        <div className="space-y-8">
                            <div>
                                <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 leading-tight">
                                    {product.name}
                                </h1>

                                <div className="flex items-center gap-4 mb-6">
                                    <div className="flex items-center gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "fill-muted text-muted"}`} />
                                        ))}
                                    </div>
                                    <span className="text-sm text-muted-foreground">({product.reviews} تقييم)</span>
                                    <span className="w-1 h-1 bg-muted-foreground rounded-full"></span>
                                    <span className="text-sm text-green-600 font-medium">متوفر في المخزون</span>
                                </div>

                                <div className="flex items-end gap-4 mb-8">
                                    <div className="text-4xl font-bold text-primary">
                                        {product.price} <span className="text-xl">ر.ق</span>
                                    </div>
                                    {product.originalPrice > product.price && (
                                        <div className="flex flex-col mb-1">
                                            <span className="text-lg text-muted-foreground line-through decoration-red-500/50">
                                                {product.originalPrice} ر.ق
                                            </span>
                                            <span className="text-xs text-red-500 font-medium bg-red-50 px-2 py-0.5 rounded-full">
                                                وفر {discountPercentage}%
                                            </span>
                                        </div>
                                    )}
                                </div>

                                <div className="prose prose-stone max-w-none text-muted-foreground">
                                    <p>
                                        احصل على {product.name} الآن بأفضل سعر في قطر. منتج أصلي ومضمون مع خدمة توصيل سريعة لجميع المناطق.
                                        يتميز هذا المنتج بالجودة العالية والتصميم العصري الذي يلبي احتياجاتك.
                                    </p>
                                    <ul className="mt-4 space-y-2 list-none pl-0">
                                        <li className="flex items-center gap-2">
                                            <Check className="w-4 h-4 text-green-500" />
                                            <span>جودة عالية ومواد ممتازة</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <Check className="w-4 h-4 text-green-500" />
                                            <span>ضمان استرجاع لمدة 14 يوم</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <Check className="w-4 h-4 text-green-500" />
                                            <span>دعم فني متواصل</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="flex gap-4 pt-8 border-t">
                                <Button
                                    size="lg"
                                    className="flex-1 h-14 text-lg font-bold gap-2 rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all"
                                    onClick={() => {
                                        if (product) {
                                            addToCart(product);
                                            toast({
                                                title: "تمت الإضافة للسلة",
                                                description: `تم إضافة ${product.name} إلى سلة التسوق`,
                                            });
                                        }
                                    }}
                                >
                                    <ShoppingCart className="w-6 h-6" />
                                    أضف للسلة
                                </Button>
                                <Button
                                    size="lg"
                                    className="flex-1 h-14 text-lg font-bold gap-2 rounded-xl shadow-lg shadow-green-500/20 hover:shadow-green-500/40 hover:bg-green-600 bg-green-500 transition-all"
                                    onClick={() => {
                                        const message = `مرحبًا، أريد طلب هذا المنتج:
الاسم: ${product.name}
السعر: ${product.price} ر.ق
الرابط: ${window.location.href}

بيانات العميل:
اسم العميل:
العنوان:
عدد القطع:
رقم هاتف بديل:`;
                                        window.open(`https://wa.me/201110760081?text=${encodeURIComponent(message)}`, '_blank');
                                    }}
                                >
                                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                                    اطلب واتساب
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Related Products */}
                    <div className="mt-24">
                        <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
                            <span className="w-1 h-8 bg-primary rounded-full"></span>
                            منتجات قد تعجبك
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {relatedProducts.map((related) => (
                                <Link key={related.id} href={`/product/${slugify(related.name)}`}>
                                    <div className="group cursor-pointer bg-white rounded-xl border hover:border-primary/50 transition-all hover:shadow-lg overflow-hidden">
                                        <div className="aspect-square bg-muted relative overflow-hidden">
                                            <img
                                                src={related.image}
                                                alt={related.name}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                            <div className={`absolute top-3 right-3 text-white px-2 py-1 rounded-full text-xs font-bold ${getBadgeColor(related.badge)}`}>
                                                {related.badge}
                                            </div>
                                        </div>
                                        <div className="p-4">
                                            <h3 className="font-bold text-foreground line-clamp-1 mb-2 group-hover:text-primary transition-colors">
                                                {related.name}
                                            </h3>
                                            <div className="flex items-center justify-between">
                                                <span className="font-bold text-primary">{related.price} ر.ق</span>
                                                <span className="text-xs text-muted-foreground line-through">{related.originalPrice} ر.ق</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

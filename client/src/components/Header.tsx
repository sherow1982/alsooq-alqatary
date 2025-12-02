import { useCart } from "@/context/CartContext";
import { Link } from "wouter";
import { useState } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-white font-bold">
                ق
              </div>
              <div>
                <h1 className="text-lg font-bold">السوق القطري</h1>
                <p className="text-xs text-muted-foreground hidden sm:block">منتجات بجودة عالية</p>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-foreground hover:text-primary transition-colors font-medium text-sm">
              الرئيسية
            </Link>
            <a href="#products" className="text-foreground hover:text-primary transition-colors font-medium text-sm">
              المنتجات
            </a>
            <a href="#categories" className="text-foreground hover:text-primary transition-colors font-medium text-sm">
              الفئات
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium text-sm">
              التواصل
            </a>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <Link href="/cart">
              <button className="relative p-2 text-foreground hover:text-primary transition-colors">
                <ShoppingCart className="w-6 h-6" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white rounded-full text-xs flex items-center justify-center font-bold">
                    {totalItems}
                  </span>
                )}
              </button>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Announcement Bar */}
      <div className="bg-primary text-white py-2 text-center text-sm">
        <span>شحن مجاني للطلبات فوق 500 ريال قطري</span>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden border-t border-border bg-background">
          <div className="container py-4 flex flex-col gap-3">
            <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-foreground hover:text-primary transition-colors py-2 font-medium">
              الرئيسية
            </Link>
            <a href="#products" onClick={() => setIsMenuOpen(false)} className="text-foreground hover:text-primary transition-colors py-2 font-medium">
              المنتجات
            </a>
            <a href="#categories" onClick={() => setIsMenuOpen(false)} className="text-foreground hover:text-primary transition-colors py-2 font-medium">
              الفئات
            </a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-foreground hover:text-primary transition-colors py-2 font-medium">
              التواصل
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

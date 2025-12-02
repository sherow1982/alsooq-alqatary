import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CategoriesSection from "@/components/CategoriesSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

/**
 * Home Page - Natural Elegance Design
 * 
 * Design Philosophy:
 * - Warm, natural aesthetic with organic shapes
 * - Earthy color palette: warm brown, soft green, cream
 * - Smooth transitions and flowing animations
 * - Ample whitespace and minimalist composition
 * - Arabic typography with Almarai font family
 */
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <CategoriesSection />
        <FeaturedProducts />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

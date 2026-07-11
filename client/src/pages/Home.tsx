import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PackageCard } from "@/components/PackageCard";
import { PackagesAccordion } from "@/components/PackagesAccordion";
import { ProductDetailDrawer } from "@/components/ProductDetailDrawer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { GlobalFooter } from "@/components/GlobalFooter";
import { TrustSection } from "@/components/TrustSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { ScrollToTopButton } from "@/components/ScrollToTopButton";
import { packages, Package } from "@/data/packages";
import { useCurrency } from "@/hooks/useCurrency";
import { useLocation } from "wouter";
import { useEffect, useRef } from "react";

function LinkButton({ href, children }: { href: string; children: React.ReactNode }) {
  const [, setLocation] = useLocation();
  return (
    <button
      onClick={() => setLocation(href)}
      className="no-underline"
    >
      {children}
    </button>
  );
}

// Intersection Observer Hook for Fade In Animation
function useFadeInOnScroll() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in-visible");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return ref;
}

export default function Home() {
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);
  const [selectedDuration, setSelectedDuration] = useState<"3" | "6" | "12" | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { currency, setCurrency, availableCurrencies } = useCurrency();

  const handleSelectPlan = (pkg: Package, duration: "3" | "6" | "12") => {
    setSelectedPackage(pkg);
    setSelectedDuration(duration);
    setDrawerOpen(true);
  };

  const whatsappNumber = "966592360612";
  const message = "السلام عليكم، أنا مهتم بخدمات ALMAKI";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  // Fade in refs for different sections
  const packagesRef = useRef<HTMLDivElement>(null);
  const linksRef = useFadeInOnScroll();
  const whyChooseRef = useFadeInOnScroll();

  return (
    <div className="min-h-screen bg-background text-foreground" dir="rtl">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-secondary border-b-2 border-primary">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-3xl font-bold text-primary">ALMAKI TV</h1>
            <span className="text-muted-foreground">✨</span>
          </div>

          {/* Currency Selector */}
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="bg-card text-foreground border border-border rounded-lg px-3 py-2 text-sm"
          >
            {availableCurrencies.map((curr) => (
              <option key={curr} value={curr}>
                {curr}
              </option>
            ))}
          </select>
        </div>
      </header>

      {/* Hero Section - Enhanced */}
      <section className="hero-smoke-animation py-24 md:py-32 border-b-2 border-primary">
        <div className="max-w-6xl mx-auto px-4 text-center space-y-8">
          {/* Main Title - Larger */}
          <h2 className="text-5xl md:text-7xl font-black text-primary leading-tight">
            ارتق إلى قمة تجربة المشاهدة
          </h2>

          {/* Subtitle - Clearer */}
          <p className="text-2xl md:text-3xl text-foreground font-semibold max-w-3xl mx-auto">
            مع ALMAKI TV - أفضل اشتراكات IPTV في السعودية والخليج
          </p>

          {/* Features Grid - 4 Features Below Title */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto py-6">
            <div className="bg-black/40 backdrop-blur-sm border border-primary/30 rounded-lg p-4">
              <div className="text-primary text-2xl mb-2">✔</div>
              <p className="text-sm md:text-base text-foreground font-semibold">
                أكثر من 15000 قناة
              </p>
            </div>
            <div className="bg-black/40 backdrop-blur-sm border border-primary/30 rounded-lg p-4">
              <div className="text-primary text-2xl mb-2">✔</div>
              <p className="text-sm md:text-base text-foreground font-semibold">
                جودة حتى 4K
              </p>
            </div>
            <div className="bg-black/40 backdrop-blur-sm border border-primary/30 rounded-lg p-4">
              <div className="text-primary text-2xl mb-2">✔</div>
              <p className="text-sm md:text-base text-foreground font-semibold">
                دعم فني 24/7
              </p>
            </div>
            <div className="bg-black/40 backdrop-blur-sm border border-primary/30 rounded-lg p-4">
              <div className="text-primary text-2xl mb-2">✔</div>
              <p className="text-sm md:text-base text-foreground font-semibold">
                تفعيل خلال دقائق
              </p>
            </div>
          </div>

          {/* Secondary Description */}
          <p className="text-lg text-muted-foreground">
            بث مباشر بدون تقطيع | جودة 4K | أحدث الأفلام والمسلسلات
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 py-4 text-center">
            <div>
              <div className="text-3xl font-bold text-primary">50,000+</div>
              <p className="text-muted-foreground text-sm">عميل راضي</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">⭐ 4.9/5</div>
              <p className="text-muted-foreground text-sm">من التقييمات</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">24/7</div>
              <p className="text-muted-foreground text-sm">دعم فني</p>
            </div>
          </div>

          {/* CTA Buttons - Primary + Secondary */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button onClick={() => packagesRef.current?.scrollIntoView({ behavior: 'smooth' })} className="inline-block">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-8 text-lg font-bold rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-2xl hover:shadow-primary/50">
                عرض الباقات
              </Button>
            </button>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-block">
              <Button className="bg-green-600 text-white hover:bg-green-700 px-10 py-8 text-lg font-bold rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-2xl hover:shadow-green-600/50">
                تواصل معنا الآن
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Packages Section - Accordion View - With Fade In */}
      <section ref={packagesRef} className="fade-in py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary text-center mb-16">
            الأكثر اعتماداً في متجرنا
          </h2>

          {/* Accordion View */}
          <PackagesAccordion
            packages={packages}
            onSelectPlan={handleSelectPlan}
          />
        </div>
      </section>

      {/* Links of Interest Section - With Fade In */}
      <section ref={linksRef} className="fade-in py-24 bg-secondary border-y-2 border-primary">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary text-center mb-16">
            روابط تهمك
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Google TV / Android */}
            <LinkButton href="/activation-android">
              <div className="bg-card border-2 border-primary rounded-xl p-8 text-center h-full flex flex-col justify-between hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:scale-105">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    طريقة التفعيل للشاشات
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Google TV، Android، وأجهزة الشاومي
                  </p>
                </div>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  ابدأ التفعيل الآن ⚡
                </Button>
              </div>
            </LinkButton>

            {/* iOS / Apple TV */}
            <LinkButton href="/activation-ios">
              <div className="bg-card border-2 border-primary rounded-xl p-8 text-center h-full flex flex-col justify-between hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:scale-105">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    طريقة التفعيل للآيفون
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    iOS والآبل تيفي (Apple TV)
                  </p>
                </div>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  ابدأ التفعيل الآن ⚡
                </Button>
              </div>
            </LinkButton>

            {/* Samsung & LG */}
            <LinkButton href="/activation-samsung-lg">
              <div className="bg-card border-2 border-primary rounded-xl p-8 text-center h-full flex flex-col justify-between hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:scale-105">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    طريقة التفعيل للشاشات الذكية
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Samsung و LG
                  </p>
                </div>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  ابدأ التفعيل الآن ⚡
                </Button>
              </div>
            </LinkButton>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - With Fade In */}
      <section ref={whyChooseRef} className="fade-in py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary text-center mb-16">
            لماذا تختار ALMAKI TV؟
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-xl p-8 text-center hover:border-primary transition-all duration-300">
              <div className="text-5xl mb-6">⚡</div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                سرعة هائلة
              </h3>
              <p className="text-muted-foreground">
                بث مباشر بدون تقطيع بفضل خوادمنا الموزعة والمحمية
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 text-center hover:border-primary transition-all duration-300">
              <div className="text-5xl mb-6">⭐</div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                جودة فائقة
              </h3>
              <p className="text-muted-foreground">
                دعم كامل لدقات 4K و Ultra HD لكافة القنوات والمسلسلات
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 text-center hover:border-primary transition-all duration-300">
              <div className="text-5xl mb-6">🎧</div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                دعم 24/7
              </h3>
              <p className="text-muted-foreground">
                فريق دعم فني متكامل وجاهز لخدمتك وحل استفساراتك فوراً
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <TrustSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Product Detail Drawer */}
      <ProductDetailDrawer
        open={drawerOpen}
        onOpenChange={setDrawerOpen}
        pkg={selectedPackage}
        duration={selectedDuration}
      />

      {/* Scroll to Top Button */}
      <ScrollToTopButton />

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Global Footer */}
      <GlobalFooter />
    </div>
  );
}

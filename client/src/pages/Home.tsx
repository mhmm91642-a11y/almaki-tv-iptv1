import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PackageCard } from "@/components/PackageCard";
import { ProductDetailDrawer } from "@/components/ProductDetailDrawer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { GlobalFooter } from "@/components/GlobalFooter";
import { packages, Package } from "@/data/packages";
import { useCurrency } from "@/hooks/useCurrency";
import { useLocation } from "wouter";

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

  const whatsappNumber = "+966580928565";
  const message = "ماهي العروض المتوفرة؟";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

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

      {/* Hero Section */}
      <section className="hero-smoke-animation py-16 border-b-2 border-primary">
        <div className="max-w-6xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            ارتق إلى قمة تجربة المشاهدة
          </h2>
          <p className="text-xl text-foreground max-w-2xl mx-auto">
            مع ALMAKI TV - أفضل اشتراكات IPTV في السعودية والخليج
          </p>
          <p className="text-lg text-muted-foreground">
            بث مباشر بدون تقطيع | جودة 4K | أحدث الأفلام والمسلسلات
          </p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg font-bold">
              تواصل معنا الآن
            </Button>
          </a>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">
            الأكثر اعتماداً في متجرنا
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <PackageCard
                key={pkg.id}
                pkg={pkg}
                onSelectPlan={handleSelectPlan}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Links of Interest Section */}
      <section className="py-16 bg-secondary border-y-2 border-primary">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">
            روابط تهمك
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Google TV / Android */}
            <LinkButton href="/activation-android">
              <div className="bg-card border-2 border-primary rounded-xl p-6 text-center h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    طريقة التفعيل للشاشات
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Google TV، Android، وأجهزة الشاومي
                  </p>
                </div>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  اعرف المزيد
                </Button>
              </div>
            </LinkButton>

            {/* iOS / Apple TV */}
            <LinkButton href="/activation-ios">
              <div className="bg-card border-2 border-primary rounded-xl p-6 text-center h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    طريقة التفعيل للآيفون
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    iOS والآبل تيفي (Apple TV)
                  </p>
                </div>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  اعرف المزيد
                </Button>
              </div>
            </LinkButton>

            {/* Samsung & LG */}
            <LinkButton href="/activation-samsung-lg">
              <div className="bg-card border-2 border-primary rounded-xl p-6 text-center h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    طريقة التفعيل للشاشات الذكية
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Samsung و LG
                  </p>
                </div>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  اعرف المزيد
                </Button>
              </div>
            </LinkButton>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">
            لماذا تختار ALMAKI TV؟
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                سرعة هائلة
              </h3>
              <p className="text-muted-foreground">
                بث مباشر بدون تقطيع بفضل خوادمنا الموزعة والمحمية
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                جودة فائقة
              </h3>
              <p className="text-muted-foreground">
                دعم كامل لدقات 4K و Ultra HD لكافة القنوات والمسلسلات
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">🎧</div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                دعم 24/7
              </h3>
              <p className="text-muted-foreground">
                فريق دعم فني متكامل وجاهز لخدمتك وحل استفساراتك فوراً
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Detail Drawer */}
      <ProductDetailDrawer
        open={drawerOpen}
        onOpenChange={setDrawerOpen}
        pkg={selectedPackage}
        duration={selectedDuration}
      />

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Global Footer */}
      <GlobalFooter />
    </div>
  );
}

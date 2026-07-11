import { Button } from "@/components/ui/button";
import { Package } from "@/data/packages";
import { useCurrency } from "@/hooks/useCurrency";

interface PackageCardProps {
  pkg: Package;
  onSelectPlan: (pkg: Package, duration: "3" | "6" | "12") => void;
}

export function PackageCard({ pkg, onSelectPlan }: PackageCardProps) {
  const { convertPrice } = useCurrency();

  const durations: Array<{ key: "3" | "6" | "12"; label: string }> = [
    { key: "3", label: "3 شهور" },
    { key: "6", label: "6 شهور" },
    { key: "12", label: "سنة" },
  ];

  // Features list for all packages
  const features = [
    "✔ يعمل على جميع الأجهزة",
    "✔ جودة حتى 4K",
    "✔ تحديثات مستمرة",
  ];

  return (
    <div className="h-full">
      {/* Main Card Container */}
      <div className={`bg-card border-2 border-primary rounded-xl p-6 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 h-full flex flex-col ${
        pkg.id === "universe" ? "md:scale-105 md:origin-center" : ""
      }`}>
        
        {/* Header: Logo + Name (Horizontal) */}
        <div className="flex items-center gap-4 mb-6 pb-4 border-b-2 border-primary/30">
          {pkg.logo && (
            <img
              src={pkg.logo}
              alt={pkg.name}
              className="h-14 w-14 object-contain flex-shrink-0 rounded-lg bg-black/20 p-2"
            />
          )}
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-bold text-foreground">{pkg.name}</h3>
            <p className="text-xs text-muted-foreground mt-1">{pkg.subtitle}</p>
          </div>
        </div>

        {/* Features List */}
        <div className="mb-6 space-y-2">
          {features.map((feature, idx) => (
            <p key={idx} className="text-xs text-muted-foreground">
              {feature}
            </p>
          ))}
        </div>

        {/* Pricing Grid - 3 columns */}
        <div className="grid grid-cols-3 gap-4 flex-1 flex flex-col">
          {durations.map(({ key, label }) => {
            const price = pkg.prices[key];
            let originalPrice: number | undefined;
            
            if (key === "3") {
              originalPrice = pkg.originalPrice3;
            } else if (key === "6") {
              originalPrice = pkg.originalPrice6;
            } else if (key === "12") {
              originalPrice = pkg.originalPrice12;
            }
            
            const converted = convertPrice(price);
            const convertedOriginal = originalPrice ? convertPrice(originalPrice) : null;
            
            // Check if this is the 6-month plan
            const isBestSeller = key === "6";

            return (
              <div
                key={key}
                className={`bg-secondary rounded-xl border-2 p-4 text-center flex flex-col justify-between transition-all duration-300 hover:border-primary hover:shadow-lg ${
                  isBestSeller 
                    ? "border-primary bg-primary/5 ring-2 ring-primary/30" 
                    : "border-border hover:bg-secondary/80"
                }`}
              >
                {/* Best Seller Badge */}
                {isBestSeller && (
                  <div className="mb-2">
                    <span className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold">
                      🔥 الأكثر مبيعاً
                    </span>
                  </div>
                )}
                
                {/* Duration Label */}
                <p className="text-sm font-semibold text-foreground mb-2">{label}</p>
                
                {/* Original Price (Strikethrough) - Smaller */}
                {convertedOriginal && (
                  <p className="text-xs text-muted-foreground line-through mb-1">
                    {convertedOriginal.amount} ريال
                  </p>
                )}
                
                {/* Current Price - Much Larger and Clearer */}
                <div className="mb-3">
                  <p className="text-3xl font-black text-primary">
                    {converted.amount}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">ريال سعودي</p>
                </div>
                
                {/* Subscribe Button */}
                <Button
                  className={`w-full font-bold text-base py-3 rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 ${
                    isBestSeller
                      ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-primary/50"
                      : "bg-primary text-primary-foreground hover:bg-primary/90"
                  }`}
                  onClick={() => onSelectPlan(pkg, key)}
                >
                  اشترك الآن
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

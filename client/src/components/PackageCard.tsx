import { Button } from "@/components/ui/button";
import { Package } from "@/data/packages";
import { useCurrency } from "@/hooks/useCurrency";

interface PackageCardProps {
  pkg: Package;
  onSelectPlan: (pkg: Package, duration: "3" | "6" | "12") => void;
}

export function PackageCard({ pkg, onSelectPlan }: PackageCardProps) {
  const { convertPrice } = useCurrency();

  // 2-Column Grid Layout with all durations
  // Each card shows: Logo, Name, Duration, Price (with strikethrough original)
  
  const durations: Array<{ key: "3" | "6" | "12"; label: string }> = [
    { key: "12", label: "سنة كاملة" },
    { key: "6", label: "6 شهور" },
    { key: "3", label: "3 شهور" },
  ];

  return (
    <div className="bg-card border-2 border-primary rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="text-center mb-6">
        {pkg.logo && (
          <img
            src={pkg.logo}
            alt={pkg.name}
            className="h-16 w-auto mx-auto mb-4 object-contain"
          />
        )}
        <h3 className="text-xl font-bold text-foreground mb-2">{pkg.name}</h3>
        <p className="text-sm text-muted-foreground">{pkg.subtitle}</p>
      </div>

      <div className="space-y-3">
        {durations.map(({ key, label }) => {
          const price = pkg.prices[key];
          let originalPrice: number | undefined;
          
          // Get original price based on duration
          if (key === "3") {
            originalPrice = pkg.originalPrice3;
          } else if (key === "6") {
            originalPrice = pkg.originalPrice6;
          } else if (key === "12") {
            originalPrice = pkg.originalPrice12;
          }
          
          const converted = convertPrice(price);
          const convertedOriginal = originalPrice ? convertPrice(originalPrice) : null;

          return (
            <div
              key={key}
              className="flex items-center justify-between p-3 bg-secondary rounded-lg border border-border hover:border-primary transition-colors"
            >
              <div className="text-right flex-1">
                <p className="text-sm font-medium text-foreground">{label}</p>
                {convertedOriginal && (
                  <p className="text-xs text-muted-foreground line-through">
                    {convertedOriginal.amount} {convertedOriginal.symbol}
                  </p>
                )}
              </div>
              <div className="text-left ml-4">
                <p className="text-lg font-bold text-primary">
                  {converted.amount} {converted.symbol}
                </p>
              </div>
              <Button
                size="sm"
                className="ml-3 bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={() => onSelectPlan(pkg, key)}
              >
                اختر
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

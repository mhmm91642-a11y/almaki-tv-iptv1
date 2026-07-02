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

  return (
    <div className="bg-card border-2 border-primary rounded-lg p-3 hover:shadow-lg transition-shadow duration-300">
      {/* Header: Logo + Name (Horizontal) */}
      <div className="flex items-center gap-3 mb-3 pb-3 border-b border-border">
        {pkg.logo && (
          <img
            src={pkg.logo}
            alt={pkg.name}
            className="h-10 w-10 object-contain flex-shrink-0"
          />
        )}
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-bold text-foreground truncate">{pkg.name}</h3>
        </div>
      </div>

      {/* Pricing Grid - 3 columns */}
      <div className="grid grid-cols-3 gap-2">
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

          return (
            <div
              key={key}
              className="bg-secondary rounded-md border border-border p-2 text-center hover:border-primary transition-colors"
            >
              {/* Duration Label */}
              <p className="text-xs font-medium text-foreground mb-1">{label}</p>
              
              {/* Original Price (Strikethrough) */}
              {convertedOriginal && (
                <p className="text-xs text-muted-foreground line-through">
                  {convertedOriginal.amount}
                </p>
              )}
              
              {/* Current Price */}
              <p className="text-sm font-bold text-primary mb-1">
                {converted.amount}
              </p>
              
              {/* Select Button */}
              <Button
                size="sm"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-xs px-1 py-1 h-6"
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

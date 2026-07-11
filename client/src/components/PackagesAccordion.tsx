import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { PackageCard } from "./PackageCard";
import { Package } from "@/data/packages";

interface PackagesAccordionProps {
  packages: Package[];
  onSelectPlan: (pkg: Package, duration: "3" | "6" | "12") => void;
}

export function PackagesAccordion({
  packages,
  onSelectPlan,
}: PackagesAccordionProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="space-y-3 md:space-y-4">
      {packages.map((pkg, index) => (
        <div
          key={pkg.id}
          className="bg-card border-2 border-primary rounded-xl overflow-hidden hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
        >
          {/* Accordion Header */}
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full px-4 md:px-6 py-4 md:py-5 flex items-center justify-between hover:bg-secondary/50 transition-colors duration-200"
          >
            {/* Logo + Name */}
            <div className="flex items-center gap-3 md:gap-4 flex-1 min-w-0">
              {pkg.logo && (
                <img
                  src={pkg.logo}
                  alt={pkg.name}
                  className="h-10 md:h-14 w-10 md:w-14 object-contain flex-shrink-0 rounded-lg bg-black/20 p-2"
                  loading="lazy"
                />
              )}
              <div className="flex-1 min-w-0 text-right">
                <h3 className="text-base md:text-lg font-bold text-foreground">
                  {pkg.name}
                </h3>
                {pkg.subtitle && (
                  <p className="text-xs md:text-sm text-muted-foreground mt-1">
                    {pkg.subtitle}
                  </p>
                )}
              </div>
            </div>

            {/* Chevron Icon */}
            <ChevronDown
              className={`text-primary flex-shrink-0 ml-4 transition-transform duration-300 ${
                expandedIndex === index ? "rotate-180" : ""
              }`}
              size={24}
            />
          </button>

          {/* Accordion Content - Animated */}
          {expandedIndex === index && (
            <div className="animate-in fade-in slide-in-from-top-2 duration-300">
              <div className="px-4 md:px-6 py-4 md:py-6 border-t-2 border-primary/30 bg-secondary/30">
                {/* Pricing Grid - 3 columns */}
                <div className="grid grid-cols-3 gap-2 md:gap-4">
                  {/* 3 Months */}
                  <PricingOption
                    label="3 أشهر"
                    pkg={pkg}
                    duration="3"
                    onSelectPlan={onSelectPlan}
                  />

                  {/* 6 Months - Best Seller */}
                  <PricingOption
                    label="6 أشهر"
                    pkg={pkg}
                    duration="6"
                    isBestSeller={true}
                    onSelectPlan={onSelectPlan}
                  />

                  {/* 1 Year */}
                  <PricingOption
                    label="سنة"
                    pkg={pkg}
                    duration="12"
                    onSelectPlan={onSelectPlan}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

interface PricingOptionProps {
  label: string;
  pkg: Package;
  duration: "3" | "6" | "12";
  isBestSeller?: boolean;
  onSelectPlan: (pkg: Package, duration: "3" | "6" | "12") => void;
}

function PricingOption({
  label,
  pkg,
  duration,
  isBestSeller,
  onSelectPlan,
}: PricingOptionProps) {
  const price = pkg.prices[duration];

  // Get original price based on package
  let originalPrice: number | undefined;

  if (pkg.id === "strong4k") {
    const originalPrices: Record<string, number> = {
      "3": 150,
      "6": 200,
      "12": 500,
    };
    originalPrice = originalPrices[duration];
  } else if (pkg.id === "everest") {
    const originalPrices: Record<string, number> = {
      "3": 150,
      "6": 200,
      "12": 500,
    };
    originalPrice = originalPrices[duration];
  } else if (pkg.id === "hulk") {
    const originalPrices: Record<string, number> = {
      "3": 120,
      "6": 180,
      "12": 400,
    };
    originalPrice = originalPrices[duration];
  } else if (pkg.id === "falcon") {
    const originalPrices: Record<string, number> = {
      "3": 130,
      "6": 180,
      "12": 350,
    };
    originalPrice = originalPrices[duration];
  } else if (pkg.id === "vulture") {
    const originalPrices: Record<string, number> = {
      "3": 140,
      "6": 200,
      "12": 450,
    };
    originalPrice = originalPrices[duration];
  } else if (pkg.id === "universe") {
    const originalPrices: Record<string, number> = {
      "3": 150,
      "6": 200,
      "12": 500,
    };
    originalPrice = originalPrices[duration];
  } else if (pkg.id === "alfa") {
    const originalPrices: Record<string, number> = {
      "3": 130,
      "6": 180,
      "12": 350,
    };
    originalPrice = originalPrices[duration];
  }

  return (
    <div
      className={`bg-card border-2 rounded-lg p-3 md:p-4 text-center transition-all duration-300 ${
        isBestSeller
          ? "border-primary ring-2 ring-primary/30 scale-105 md:scale-105"
          : "border-primary/50 hover:border-primary"
      }`}
    >
      {/* Best Seller Badge */}
      {isBestSeller && (
        <div className="mb-2 inline-block bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-bold">
          🔥 الأكثر مبيعاً
        </div>
      )}

      {/* Duration Label */}
      <p className="text-xs md:text-sm font-semibold text-foreground mb-2">
        {label}
      </p>

      {/* Original Price (Strikethrough) */}
      {originalPrice && (
        <p className="text-xs text-muted-foreground line-through mb-1">
          {originalPrice} ريال
        </p>
      )}

      {/* Current Price */}
      <div className="mb-3">
        <p className="text-2xl md:text-3xl font-black text-primary">
          {price}
        </p>
        <p className="text-xs text-muted-foreground mt-1">ريال سعودي</p>
      </div>

      {/* Subscribe Button */}
      <button
        onClick={() => onSelectPlan(pkg, duration)}
        className={`w-full font-bold text-sm md:text-base py-2 md:py-3 rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 ${
          isBestSeller
            ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-primary/50"
            : "bg-primary text-primary-foreground hover:bg-primary/90"
        }`}
      >
        اشترك الآن
      </button>
    </div>
  );
}

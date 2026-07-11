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
    <div className="space-y-4 md:space-y-6 lg:space-y-8">
      {packages.map((pkg, index) => (
        <div
          key={pkg.id}
          className="bg-card border-2 border-primary rounded-xl overflow-hidden hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
        >
          {/* Accordion Header */}
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full px-4 md:px-6 lg:px-8 py-5 md:py-6 lg:py-7 flex items-center justify-between hover:bg-secondary/50 transition-colors duration-200"
          >
            {/* Logo + Name + Price */}
            <div className="flex items-center gap-4 md:gap-5 lg:gap-6 flex-1 min-w-0">
              {pkg.logo && (
                <img
                  src={pkg.logo}
                  alt={pkg.name}
                  className="h-10 md:h-14 w-10 md:w-14 object-contain flex-shrink-0 rounded-lg bg-black/20 p-2"
                  loading="lazy"
                />
              )}
              <div className="flex-1 min-w-0 text-right">
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-foreground">
                  {pkg.name}
                </h3>
                {pkg.subtitle && (
                  <p className="text-sm md:text-base text-muted-foreground mt-2">
                    {pkg.subtitle}
                  </p>
                )}
              </div>
            </div>

            {/* Price Preview + Chevron */}
            <div className="flex items-center gap-4 md:gap-6 flex-shrink-0">
              <div className="text-right hidden sm:block">
                <p className="text-xs md:text-sm text-muted-foreground">من</p>
                <p className="text-lg md:text-2xl font-bold text-primary">
                  {pkg.prices["3"].toString().split(" ")[0]}
                </p>
              </div>
              <ChevronDown
                className={`text-primary flex-shrink-0 transition-transform duration-300 ${
                  expandedIndex === index ? "rotate-180" : ""
                }`}
                size={24}
              />
            </div>
          </button>

          {/* Accordion Content - Animated */}
          {expandedIndex === index && (
            <div className="animate-in fade-in slide-in-from-top-2 duration-300">
              <div className="px-4 md:px-6 lg:px-8 py-6 md:py-8 lg:py-10 border-t-2 border-primary/30 bg-secondary/30">
                {/* Guarantee Badge */}
                <div className="mb-6 p-3 md:p-4 bg-green-900/20 border border-green-600/30 rounded-lg text-center">
                  <p className="text-sm md:text-base text-green-400 font-semibold">
                    ✓ ضمان استرجاع المال 30 يوم | لا توجد رسوم إضافية
                  </p>
                </div>
                {/* Pricing Grid - 3 columns */}
                <div className="grid grid-cols-3 gap-3 md:gap-5 lg:gap-6">
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
      className={`bg-card border-2 rounded-lg p-4 md:p-5 lg:p-6 text-center transition-all duration-300 ${
        isBestSeller
          ? "border-primary ring-2 ring-primary/30 scale-105 md:scale-105"
          : "border-primary/50 hover:border-primary"
      }`}
    >
      {/* Best Seller Badge */}
      {isBestSeller && (
        <div className="mb-3 md:mb-4 inline-block bg-primary text-primary-foreground px-3 py-2 rounded text-sm font-bold">
          🔥 الأكثر مبيعاً
        </div>
      )}

      {/* Duration Label */}
      <p className="text-sm md:text-base font-semibold text-foreground mb-3">
        {label}
      </p>

      {/* Original Price (Strikethrough) */}
      {originalPrice && (
        <p className="text-sm text-muted-foreground line-through mb-2">
          {originalPrice} ريال
        </p>
      )}

      {/* Current Price */}
      <div className="mb-4 md:mb-5">
        <p className="text-3xl md:text-4xl font-black text-primary">
          {price}
        </p>
        <p className="text-sm text-muted-foreground mt-2">ريال سعودي</p>
      </div>

      {/* Subscribe Button */}
      <button
        onClick={() => onSelectPlan(pkg, duration)}
        className={`w-full font-bold text-base md:text-lg py-3 md:py-4 rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 ${
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

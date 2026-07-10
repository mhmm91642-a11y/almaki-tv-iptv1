import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from "@/components/ui/drawer";
import { Package } from "@/data/packages";
import { useCurrency } from "@/hooks/useCurrency";
import { useNumberTicker } from "@/hooks/useNumberTicker";

interface ProductDetailDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  pkg: Package | null;
  duration: "3" | "6" | "12" | null;
}

export function ProductDetailDrawer({
  open,
  onOpenChange,
  pkg,
  duration,
}: ProductDetailDrawerProps) {
  const { convertPrice } = useCurrency();
  const channelsCount = useNumberTicker(pkg?.features.channels || 0, 1500, open);
  const moviesCount = useNumberTicker(pkg?.features.movies || 0, 1500, open);
  const seriesCount = useNumberTicker(pkg?.features.series || 0, 1500, open);

  if (!pkg || !duration) return null;

  const price = pkg.prices[duration as "3" | "6" | "12"];
  const originalPrice = duration === "12" ? pkg.originalPrice12 : undefined;
  const converted = convertPrice(price);
  
  const durationLabel = {
    "3": "3 شهور",
    "6": "6 شهور",
    "12": "سنة كاملة",
  }[duration];

  const whatsappNumber = "966592360612";
  const message = `مرحباً ALMAKI، أود الاشتراك في الباقة التالية:
🔹 السيرفر: ${pkg.name}
⏱️ المدة: ${durationLabel}
💰 السعر: ${converted.amount} ${converted.symbol}
يرجى تزويدي بطرق الدفع المتاحة لتفعيل الاشتراك.`;

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="bg-card border-border">
        <DrawerHeader className="border-b border-border">
          <DrawerTitle className="text-right text-primary text-2xl">
            {pkg.name} - {durationLabel}
          </DrawerTitle>
          <p className="text-sm text-muted-foreground mt-2">{pkg.subtitle}</p>
        </DrawerHeader>

        <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
          {/* Benefits Grid */}
          <div className="grid grid-cols-2 gap-3">
            {(pkg.benefits || []).map((benefit, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 p-3 bg-secondary rounded-lg border border-border"
              >
                <span className="text-primary">✓</span>
                <p className="text-sm font-medium text-foreground">{benefit}</p>
              </div>
            ))}
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-3 gap-4 bg-secondary p-4 rounded-lg border border-border">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">
                {channelsCount.toLocaleString("ar-SA")}
              </div>
              <p className="text-sm text-muted-foreground mt-2">قناة</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">
                {moviesCount.toLocaleString("ar-SA")}
              </div>
              <p className="text-sm text-muted-foreground mt-2">فيلم</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">
                {seriesCount.toLocaleString("ar-SA")}
              </div>
              <p className="text-sm text-muted-foreground mt-2">مسلسل</p>
            </div>
          </div>

          {/* Price Summary */}
          <div className="bg-secondary p-4 rounded-lg border-2 border-primary">
            <div className="flex justify-between items-center mb-4">
              <span className="text-foreground font-medium">السعر:</span>
              <span className="text-3xl font-bold text-primary">
                {converted.amount} {converted.symbol}
              </span>
            </div>
            {originalPrice && (
              <p className="text-sm text-muted-foreground text-center">
                السعر الأصلي:{" "}
                <span className="line-through">
                  {convertPrice(originalPrice).amount}{" "}
                  {convertPrice(originalPrice).symbol}
                </span>
              </p>
            )}
          </div>
        </div>

        {/* Fixed Bottom Action Bar */}
        <div className="sticky bottom-0 border-t border-border bg-card p-4">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-lg font-bold">
              اطلب الآن عبر الواتساب
            </Button>
          </a>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

export interface Package {
  id: string;
  name: string;
  subtitle: string;
  logo?: string;
  prices: {
    '3': number;
    '6': number;
    '12': number;
  };
  originalPrice3?: number;
  originalPrice6?: number;
  originalPrice12?: number;
  features: {
    channels: number;
    movies: number;
    series: number;
  };
  color: string;
  benefits?: string[];
}

export interface Plan {
  duration: string;
  durationMonths: number;
  price: number;
  originalPrice?: number;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

// New IPTV Store Builder format
export const packages: Package[] = [
  // Premium Tier
  {
    id: "strong",
    name: "اشتراكات سترونق 4K",
    subtitle: "أعلى دقة بث 4K حقيقية",
    logo: "/manus-storage/strong4k_0b9f2076.jpg",
    prices: {
      '3': 100,
      '6': 200,
      '12': 300,
    },
    features: {
      channels: 10000,
      movies: 70000,
      series: 15000,
    },
    color: "#FFD700",
    benefits: [
      "بث مباشر بدون تقطيع",
      "دعم 4K و Ultra HD",
      "أحدث الأفلام والمسلسلات",
      "دعم متعدد الأجهزة",
      "تحديثات يومية",
      "دعم 24/7",
    ],
  },
  // Standard Tier
  {
    id: "everest",
    name: "سيرفر إيفرست",
    subtitle: "الاشتراك الأفضل",
    logo: "/manus-storage/everest_011c17b2.jpg",
    prices: {
      '3': 80,
      '6': 130,
      '12': 190,
    },
    originalPrice12: 250,
    features: {
      channels: 10000,
      movies: 30000,
      series: 13000,
    },
    color: "#1e90ff",
    benefits: [
      "ثبات أسطوري",
      "مكتبة ضخمة",
      "جودة عالية",
      "تفعيل سهل",
      "سرعة فائقة",
      "دعم فني متميز",
    ],
  },
  {
    id: "hulk",
    name: "اشتراكات هولك",
    subtitle: "الباقة العملاقة للأفلام والمباريات",
    logo: "/manus-storage/hulk_e2fb0917.jpg",
    prices: {
      '3': 100,
      '6': 150,
      '12': 250,
    },
    features: {
      channels: 10000,
      movies: 33000,
      series: 7000,
    },
    color: "#D4AF37",
    benefits: [
      "مباريات حية",
      "أفلام جديدة",
      "مسلسلات عالمية",
      "جودة 4K",
      "بث مستقر",
      "دعم متواصل",
    ],
  },
  {
    id: "falcon",
    name: "اشتراكات فالكون الأصلي",
    subtitle: "الاشتراك العصري الغني عن التعريف",
    logo: "/manus-storage/falcon_c0d43a65.jpg",
    prices: {
      '3': 130,
      '6': 200,
      '12': 300,
    },
    features: {
      channels: 7000,
      movies: 24000,
      series: 10000,
    },
    color: "#FFD700",
    benefits: [
      "للعائلة",
      "محتوى آمن",
      "مستقر 24/7",
      "متميز",
      "سعر مناسب",
      "دعم سريع",
    ],
  },
  // Budget Tier
  {
    id: "vulture",
    name: "اشتراكات فولتشر",
    subtitle: "الاشتراك الترفيهي المتميز",
    logo: "/manus-storage/vulture_e7b78699.jpg",
    prices: {
      '3': 69,
      '6': 99,
      '12': 149,
    },
    features: {
      channels: 10000,
      movies: 25000,
      series: 15000,
    },
    color: "#D4AF37",
    benefits: [
      "سعر اقتصادي",
      "أفضل قيمة",
      "ترفيه متنوع",
      "متعدد الأجهزة",
      "تحديثات منتظمة",
      "دعم موثوق",
    ],
  },
  // Top-Selling Premium Tier
  {
    id: "universe",
    name: "Universe TV",
    subtitle: "خدمة بث متميزة",
    logo: "/manus-storage/Y1lwTVRbymt6_e4b88f02.jpg",
    prices: {
      '3': 100,
      '6': 150,
      '12': 250,
    },
    originalPrice3: 150,
    originalPrice6: 200,
    originalPrice12: 500,
    features: {
      channels: 12000,
      movies: 40000,
      series: 18000,
    },
    color: "#00D4FF",
    benefits: [
      "محتوى حصري",
      "بث عالي الجودة",
      "مكتبة ضخمة",
      "دعم متقدم",
      "تحديثات يومية",
      "أداء مستقر",
    ],
  },
  {
    id: "alfa",
    name: "Alfa TV",
    subtitle: "تجربة بث احترافية",
    logo: "/manus-storage/alfa-tv-logo_9fce1f0e.png",
    prices: {
      '3': 90,
      '6': 130,
      '12': 190,
    },
    originalPrice3: 130,
    originalPrice6: 180,
    originalPrice12: 350,
    features: {
      channels: 11000,
      movies: 35000,
      series: 16000,
    },
    color: "#FF6B9D",
    benefits: [
      "جودة فائقة",
      "محتوى متنوع",
      "سرعة عالية",
      "دعم 24/7",
      "تفعيل سريع",
      "ثبات مضمون",
    ],
  },
];

// Legacy format (keep for backward compatibility)
export const packagesLegacy = [
  {
    id: "everest",
    name: "سيرفر إيفرست",
    description: "الاشتراك الأفضل",
    plans: [
      { duration: "6 شهور", durationMonths: 6, price: 130 },
      { duration: "سنة كاملة", durationMonths: 12, price: 190, originalPrice: 250 },
      { duration: "3 شهور", durationMonths: 3, price: 80 },
    ],
    features: [
      { icon: "⚡", title: "ثبات أسطوري", description: "بث مستقر بدون تقطيع" },
      { icon: "📚", title: "مكتبة ضخمة", description: "آلاف القنوات والأفلام" },
      { icon: "🎬", title: "جودة عالية", description: "دعم 4K و Ultra HD" },
    ],
    channels: 10000,
    movies: 30000,
    series: 13000,
  },
];

export const currencyRates: Record<string, { symbol: string; rate: number }> = {
  SAR: { symbol: "ر.س", rate: 1 },
  USD: { symbol: "$", rate: 0.27 },
  AED: { symbol: "د.إ", rate: 0.99 },
  KWD: { symbol: "د.ك", rate: 0.083 },
  QAR: { symbol: "ر.ق", rate: 0.98 },
  BHD: { symbol: "د.ب", rate: 0.1 },
  OMR: { symbol: "ر.ع.", rate: 0.104 },
  EGP: { symbol: "ج.م", rate: 8.5 },
};

export const geoCountryCurrency: Record<string, string> = {
  SA: "SAR",
  AE: "AED",
  KW: "KWD",
  QA: "QAR",
  BH: "BHD",
  OM: "OMR",
  EG: "EGP",
  US: "USD",
  GB: "USD",
  FR: "USD",
  DE: "USD",
};

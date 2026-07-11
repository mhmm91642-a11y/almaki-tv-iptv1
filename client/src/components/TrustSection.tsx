export function TrustSection() {
  const stats = [
    { icon: "👥", label: "50,000+", value: "عميل راضي" },
    { icon: "📺", label: "15,000+", value: "قناة عالمية" },
    { icon: "⚡", label: "فوري", value: "تفعيل خلال دقائق" },
    { icon: "🔒", label: "256-bit", value: "تشفير آمن" },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-primary text-center mb-16">
          لماذا يثق بنا العملاء؟
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-card border-2 border-primary rounded-xl p-8 text-center hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105"
            >
              <div className="text-6xl mb-4 animate-pulse-gold">{stat.icon}</div>
              <h3 className="text-3xl font-black text-primary mb-2">
                {stat.label}
              </h3>
              <p className="text-muted-foreground font-semibold">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Security Badges */}
        <div className="mt-16 pt-12 border-t-2 border-primary/30 text-center">
          <p className="text-muted-foreground mb-6 text-sm md:text-base font-semibold">معايير الأمان والثقة</p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            <div className="flex items-center gap-2 text-sm md:text-base bg-card border border-border rounded-lg px-4 py-2">
              <span className="text-xl">🔐</span>
              <span className="text-foreground font-semibold">SSL محمي</span>
            </div>
            <div className="flex items-center gap-2 text-sm md:text-base bg-card border border-border rounded-lg px-4 py-2">
              <span className="text-xl">✓</span>
              <span className="text-foreground font-semibold">موثق ومعروف</span>
            </div>
            <div className="flex items-center gap-2 text-sm md:text-base bg-card border border-border rounded-lg px-4 py-2">
              <span className="text-xl">🛡️</span>
              <span className="text-foreground font-semibold">حماية بيانات</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

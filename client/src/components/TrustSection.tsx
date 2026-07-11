export function TrustSection() {
  const stats = [
    { icon: "⭐", label: "5000+ عميل", value: "رضا العملاء" },
    { icon: "📺", label: "أكثر من 15000 قناة", value: "محتوى متنوع" },
    { icon: "⚡", label: "تفعيل خلال دقائق", value: "سرعة فائقة" },
    { icon: "🛡️", label: "دعم فني 24/7", value: "دعم مستمر" },
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
              <div className="text-6xl mb-4">{stat.icon}</div>
              <h3 className="text-2xl font-bold text-primary mb-2">
                {stat.label}
              </h3>
              <p className="text-muted-foreground">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

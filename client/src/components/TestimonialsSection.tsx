export function TestimonialsSection() {
  const testimonials = [
    {
      name: "محمد السعيد",
      rating: 5,
      text: "خدمة ممتازة جداً! أفضل IPTV استخدمته. السرعة والجودة رائعة والدعم الفني متعاون.",
      avatar: "👨‍💼",
    },
    {
      name: "فاطمة الأحمد",
      rating: 5,
      text: "تفعيل سريع جداً وسهل. لا توجد مشاكل في البث. أنصح الجميع بـ ALMAKI TV.",
      avatar: "👩‍💼",
    },
    {
      name: "علي محمود",
      rating: 5,
      text: "أفضل سعر في السوق مع جودة عالية جداً. يعمل على جميع أجهزتي بدون مشاكل.",
      avatar: "👨‍💻",
    },
    {
      name: "سارة الشمري",
      rating: 5,
      text: "دعم فني رائع! ردوا على استفساراتي بسرعة. خدمة احترافية جداً.",
      avatar: "👩‍🦰",
    },
  ];

  return (
    <section className="py-24 bg-secondary border-y-2 border-primary">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-primary text-center mb-16">
          تقييمات العملاء
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-card border-2 border-primary rounded-xl p-8 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
            >
              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {Array(testimonial.rating)
                  .fill(0)
                  .map((_, i) => (
                    <span key={i} className="text-primary text-xl">
                      ⭐
                    </span>
                  ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-foreground mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="text-4xl">{testimonial.avatar}</div>
                <div>
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">عميل مميز</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

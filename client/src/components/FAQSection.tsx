import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "كيف يتم التفعيل؟",
      answer:
        "التفعيل بسيط جداً! بعد الشراء ستحصل على بيانات الدخول. ادخل البيانات في التطبيق واختر الجهاز الذي تريد التفعيل عليه. سيتم التفعيل خلال دقائق.",
    },
    {
      question: "هل يعمل على جميع الأجهزة؟",
      answer:
        "نعم! يعمل على Android و iOS و Smart TV و Google TV و Firestick وأجهزة أخرى كثيرة. اختر طريقة التفعيل المناسبة لجهازك.",
    },
    {
      question: "ما هي مدة الاشتراك؟",
      answer:
        "نقدم اشتراكات مرنة: 3 شهور أو 6 شهور أو سنة كاملة. اختر المدة التي تناسبك.",
    },
    {
      question: "هل هناك دعم فني؟",
      answer:
        "بالتأكيد! فريق الدعم الفني متاح 24/7 عبر WhatsApp والبريد الإلكتروني. سنساعدك في أي مشكلة.",
    },
    {
      question: "هل الخدمة آمنة وقانونية؟",
      answer:
        "نعم، خدمتنا آمنة وقانونية تماماً. نستخدم تقنيات تشفير عالية لحماية بيانات العملاء.",
    },
    {
      question: "ماذا لو حدثت مشكلة في البث؟",
      answer:
        "تواصل معنا فوراً عبر WhatsApp أو البريد الإلكتروني. فريقنا سيحل المشكلة في أسرع وقت ممكن.",
    },
    {
      question: "هل يمكن إلغاء الاشتراك في أي وقت؟",
      answer:
        "نعم، يمكنك إلغاء الاشتراك في أي وقت بدون رسوم إضافية. لا توجد عقود طويلة الأجل.",
    },
    {
      question: "هل هناك ضمان على الخدمة؟",
      answer:
        "نعم! نقدم ضمان استرجاع المال 30 يوم إذا لم تكن راضياً عن الخدمة. لا توجد أسئلة.",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-primary text-center mb-16">
          الأسئلة الشائعة
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-card border-2 border-primary rounded-xl overflow-hidden hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 gpu-accelerated"
            >
              {/* Question Header */}
              <button
                onClick={() =>
                  setOpenIndex(openIndex === idx ? null : idx)
                }
                className="w-full px-8 py-6 flex items-center justify-between hover:bg-secondary/50 transition-colors duration-200 gpu-accelerated"
              >
                <h3 className="text-lg font-bold text-foreground text-right">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`text-primary transition-transform duration-300 flex-shrink-0 ml-4 gpu-accelerated will-change-transform ${
                    openIndex === idx ? "rotate-180" : ""
                  }`}
                  size={24}
                />
              </button>

              {/* Answer - Animated */}
              {openIndex === idx && (
                <div className="animate-in fade-in slide-in-from-top-2 duration-300">
                  <div className="px-8 py-6 border-t-2 border-primary/30 bg-secondary/30">
                    <p className="text-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* FAQ CTA */}
        <div className="mt-16 pt-12 border-t-2 border-primary/30 text-center bg-secondary/30 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-primary mb-4">لم تجد إجابتك؟</h3>
          <p className="text-muted-foreground mb-6 text-lg">فريقنا متاح 24/7 للإجابة على جميع استفساراتك</p>
          <a href="https://wa.me/966592360612?text=السلام عليكم، لدي سؤال" target="_blank" rel="noopener noreferrer" className="inline-block">
            <button className="bg-green-600 text-white hover:bg-green-700 px-8 py-3 rounded-lg font-bold transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-green-600/50">
              تواصل معنا الآن 💬
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

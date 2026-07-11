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
              className="bg-card border-2 border-primary rounded-xl overflow-hidden hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
            >
              {/* Question Header */}
              <button
                onClick={() =>
                  setOpenIndex(openIndex === idx ? null : idx)
                }
                className="w-full px-8 py-6 flex items-center justify-between hover:bg-secondary/50 transition-colors duration-200"
              >
                <h3 className="text-lg font-bold text-foreground text-right">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`text-primary transition-transform duration-300 flex-shrink-0 ml-4 ${
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
      </div>
    </section>
  );
}

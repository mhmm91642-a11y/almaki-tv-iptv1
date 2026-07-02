import { Button } from "@/components/ui/button";

export function GlobalFooter() {
  const whatsappNumber = "+966580928565";
  const message = "أريد الاستفسار عن اشتراكات ALMAKI TV";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <footer className="bg-secondary border-t-2 border-primary mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center space-y-6">
          <h3 className="text-2xl font-bold text-primary">للتواصل والاستفسار</h3>
          <p className="text-foreground text-lg">
            فريقنا متاح 24/7 للإجابة على جميع استفساراتك
          </p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 text-lg font-bold">
              تواصل معنا عبر الواتساب
            </Button>
          </a>
          <div className="pt-6 border-t border-border">
            <p className="text-muted-foreground text-sm">
              © 2026 ALMAKI TV. جميع الحقوق محفوظة.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 left-8 z-30 bg-primary text-primary-foreground p-4 rounded-full hover:bg-primary/90 transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg hover:shadow-primary/50 animate-in fade-in slide-in-from-bottom-4 duration-300"
          aria-label="العودة للأعلى"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </>
  );
}

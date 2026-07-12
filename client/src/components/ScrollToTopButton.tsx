import { useState, useEffect, useRef } from "react";
import { ChevronUp } from "lucide-react";

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const throttleRef = useRef<NodeJS.Timeout | null>(null);

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
    const handleScroll = () => {
      if (throttleRef.current) return;
      
      throttleRef.current = setTimeout(() => {
        toggleVisibility();
        throttleRef.current = null;
      }, 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (throttleRef.current) clearTimeout(throttleRef.current);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-30 bg-primary text-primary-foreground p-4 rounded-full hover:bg-primary/90 transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg hover:shadow-primary/50 animate-in fade-in slide-in-from-bottom-4 duration-300 gpu-accelerated will-change-transform"
          aria-label="العودة للأعلى"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </>
  );
}

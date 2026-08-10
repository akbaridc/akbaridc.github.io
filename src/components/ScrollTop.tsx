import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

const ScrollTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className={`fixed bottom-6 right-6 z-50 h-11 w-11 rounded-full border border-border bg-card/80 backdrop-blur-xl flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 pointer-events-none translate-y-3"
      }`}
    >
      <ChevronUp className="h-5 w-5" />
    </button>
  );
};

export default ScrollTop;

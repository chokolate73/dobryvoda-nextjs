import { Phone, MessageCircle } from "lucide-react";

const FloatingPhoneButton = () => {
  return (
    <>
      {/* Mobile sticky bottom bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-card/95 backdrop-blur-md border-t border-border px-4 py-3 safe-bottom">
        <div className="flex gap-3">
          <a
            href="tel:+421944562059"
            className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold py-3 rounded-xl transition-colors hover:bg-primary/90"
          >
            <Phone className="w-5 h-5" />
            Zavolať
          </a>
          <a
            href="#kontakt"
            className="flex-1 flex items-center justify-center gap-2 bg-secondary text-foreground font-semibold py-3 rounded-xl border border-border transition-colors hover:bg-secondary/80"
          >
            <MessageCircle className="w-5 h-5" />
            Napíšte nám
          </a>
        </div>
      </div>

      {/* Desktop floating button */}
      <a
        href="tel:+421944562059"
        className="hidden md:flex fixed bottom-6 right-6 z-50 items-center justify-center w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-full shadow-2xl hover:scale-110 transition-all duration-300 hover:shadow-primary/50 hover:shadow-2xl animate-bounce ring-4 ring-primary/30 ring-offset-2 ring-offset-background"
        aria-label="Zavolať"
      >
        <Phone className="w-7 h-7 lg:w-9 lg:h-9" />
      </a>
    </>
  );
};

export default FloatingPhoneButton;

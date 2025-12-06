import { Phone } from "lucide-react";

const FloatingPhoneButton = () => {
  return (
    <a
      href="tel:+421944562059"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-full shadow-2xl hover:scale-110 transition-all duration-300 hover:shadow-primary/50 hover:shadow-2xl animate-bounce ring-4 ring-primary/30 ring-offset-2 ring-offset-background"
      aria-label="Zavolať"
    >
      <Phone className="w-7 h-7 md:w-9 md:h-9" />
    </a>
  );
};

export default FloatingPhoneButton;

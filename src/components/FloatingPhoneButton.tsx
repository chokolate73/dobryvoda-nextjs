import { Phone } from "lucide-react";

const FloatingPhoneButton = () => {
  return (
    <a
      href="tel:+421900123456"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-lg hover:scale-110 transition-transform duration-300 hover:shadow-xl animate-pulse-gentle"
      aria-label="Zavolať"
    >
      <Phone className="w-6 h-6" />
    </a>
  );
};

export default FloatingPhoneButton;

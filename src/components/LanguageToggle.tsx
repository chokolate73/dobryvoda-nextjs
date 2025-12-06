import { useLanguage } from "@/contexts/LanguageContext";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === "sk" ? "en" : "sk")}
      className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-accent hover:bg-accent/80 transition-colors text-sm font-medium"
      aria-label="Toggle language"
    >
      <span className={language === "sk" ? "opacity-100" : "opacity-50"}>SK</span>
      <span className="text-muted-foreground">/</span>
      <span className={language === "en" ? "opacity-100" : "opacity-50"}>EN</span>
    </button>
  );
};

export default LanguageToggle;

import { useLanguage } from "@/contexts/LanguageContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Globe } from "lucide-react";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: "sk" as const, label: "Slovenčina", flag: "🇸🇰" },
    { code: "en" as const, label: "English", flag: "🇬🇧" },
  ];

  const currentLanguage = languages.find((l) => l.code === language);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-accent hover:bg-accent/80 transition-colors text-sm font-medium outline-none">
        <Globe className="h-4 w-4" />
        <span>{currentLanguage?.label}</span>
        <ChevronDown className="h-3 w-3" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-background border border-border z-50">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`cursor-pointer ${language === lang.code ? "bg-accent" : ""}`}
          >
            <span className="mr-2">{lang.flag}</span>
            {lang.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageToggle;

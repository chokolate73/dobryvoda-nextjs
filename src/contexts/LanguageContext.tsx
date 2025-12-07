import { createContext, useContext, useState, ReactNode } from "react";

type Language = "sk" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  sk: {
    // SEO Specific
    "seo.title": "Dobrý Vodár Bratislava | Havarijná služba & Opravy 24/7",
    "seo.description": "Profesionálny vodoinštalatér v Bratislave a okolí. Rýchle opravy potrubí, montáž sanity, čistenie odpadov a havarijná služba 24/7. Volajte 0944 562 059.",
    "seo.keywords": "vodoinštalatér bratislava, oprava vody, havarijná služba voda, čistenie odpadov, inštalatér, výmena batérie, dobrý vodár",
    
    // Navbar
    "nav.home": "Domov",
    "nav.services": "Služby",
    "nav.work": "Naše práce",
    "nav.references": "Referencie",
    "nav.contact": "Kontakt",
    "nav.book": "Objednať sa",

    // Hero
    "hero.badge": "🔧 Spolu s vami 24/7",
    "hero.title1": "Dobrý vodár",
    "hero.title2": "Rýchlo a",
    "hero.title3": "Spoľahlivo",
    "hero.description": "Profesionálna inštalácia a oprava vodovodných systémov. Riešime všetky problémy s vodoinštaláciou rýchlo a spoľahlivo.",
    "hero.benefit1": "Havarijné výjazdy: 24/7",
    "hero.benefit2": "Bežné práce PON-PIA 7:00 - 17:00",
    "hero.benefit3": "Bratislava a okolie",
    "hero.cta.call": "Zavolať teraz",
    "hero.cta.services": "Naše služby",
    "hero.image.alt": "Profesionálny vodoinštalatér Bratislava",

    // Stats
    "stats.clients": "Spokojných klientov",
    "stats.years": "Rokov skúseností",
    "stats.projects": "Dokončených projektov",
    "stats.service": "Pohotovostná služba",

    // Services
    "services.label": "Naše služby",
    "services.title1": "Čo pre vás",
    "services.title2": " môžeme urobiť",
    "services.description": "Profesionálna inštalácia a oprava vodovodných systémov s dôrazom na kvalitu a spokojnosť zákazníka.",
    "services.emergency.title": "Havarijné služby",
    "services.emergency.1": "Únik vody / prasknuté potrubie",
    "services.emergency.2": "Zatekanie, havarijné opravy",
    "services.emergency.3": "Odstránenie porúch na rozvodoch studenej a teplej vody",
    "services.emergency.4": "Riešenie upchatia (drez, umývadlo, WC)",
    "services.regular.title": "Montážne a bežné práce",
    "services.regular.hours": "PON-PIA 7:00 - 17:00",
    "services.regular.1": "Výmena sifónu",
    "services.regular.2": "Výmena batérie (kuchyňa/kúpeľňa)",
    "services.regular.3": "Výmena a montáž WC",
    "services.regular.4": "Montáž a výmena ventilov",
    "services.regular.5": "Montáž zdravotechniky a sanity",
    "services.regular.6": "Oprava vodovodného potrubia",
    "services.regular.7": "Výmena a montáž rozvodov vody",
    "services.regular.8": "Výmena rozvodov kanalizácie v bytoch a rodinných domoch",
    "services.regular.9": "Montáž vykurovania v bytoch a domoch (radiátory, rozvody, prípojky)",
    "services.regular.10": "Montáž a pripojenie plynových zariadení",
    "services.pricing.title": "Ceny sú individuálne",
    "services.pricing.description": "Presná suma závisí od typu práce a stavu zariadenia. Pre presnú cenu ma kontaktujte telefonicky alebo správou.",

    // Our Work
    "work.label": "Naše práce",
    "work.title": "Ukážky našej práce",
    "work.description": "Pozrite si niektoré z našich dokončených projektov. Kvalita a precíznosť v každom detaile.",
    "work.1": "Inštalácia sprchy",
    "work.2": "Sprchovací kút",
    "work.3": "Moderná kúpeľňa",
    "work.4": "WC inštalácia",
    "work.5": "Sprchový systém",
    "work.6": "Dvojumývadlo",

    // Testimonials
    "testimonials.label": "Referencie",
    "testimonials.title1": "Čo hovoria naši",
    "testimonials.title2": " spokojní zákazníci",
    "testimonials.description": "Príbehy úspešných projektov a spokojných zákazníkov, ktorí nám zverili svoje vodoinštalačné potreby.",
    "testimonials.1.name": "Martin Kováč",
    "testimonials.1.role": "Majiteľ domu",
    "testimonials.1.content": "Výborná služba! Vodoinštalatér prišiel promptne a rýchlo vyriešil problém s mojím umývadlom. Profesionálny, zdvorilý a veľmi zručný. Vrelo odporúčam!",
    "testimonials.2.name": "Jana Horváthová",
    "testimonials.2.role": "Majiteľka bytu",
    "testimonials.2.content": "Fantastická skúsenosť! Tím bol veľmi profesionálny a cena bola férová. Opravili mi celú kúpeľňu za jeden deň. Určite ich budem kontaktovať znova.",
    "testimonials.3.name": "Peter Novák",
    "testimonials.3.role": "Správca budovy",
    "testimonials.3.content": "Spoľahlivá firma s rozumnými cenami. Pomohli nám s výmenou všetkých potrubí v celej budove. Práca bola dokončená v termíne a v rozpočte.",

    // Contact
    "contact.label": "Kontaktujte nás",
    "contact.title1": "Objednajte si",
    "contact.title2": " termín ešte dnes",
    "contact.description": "Máte problém s vodoinštaláciou? Kontaktujte nás a my vám pomôžeme.",
    "contact.form.title": "Napíšte nám",
    "contact.form.name": "Vaše meno",
    "contact.form.email": "Váš email",
    "contact.form.phone": "Telefónne číslo",
    "contact.form.message": "Opíšte váš problém alebo požiadavku...",
    "contact.form.submit": "Odoslať správu",
    "contact.toast.title": "Správa odoslaná!",
    "contact.toast.description": "Ďakujeme za vašu správu. Čoskoro vás budeme kontaktovať.",
    "contact.validation.name": "Prosím, vyplňte vaše meno.",
    "contact.validation.email": "Prosím, zadajte platný email.",
    "contact.validation.message": "Prosím, napíšte vašu správu.",
    "contact.info.phone": "Telefón (WhatsApp)",
    "contact.info.regular": "Bežné práce",
    "contact.info.emergency": "Havarijné výjazdy",
    "contact.info.area": "Oblasť pôsobenia",
    "contact.info.area.value": "Bratislava a okolie",

    // FAQ
    "faq.label": "Časté otázky",
    "faq.title1": "Rýchle odpovede na",
    "faq.title2": " vaše otázky",
    "faq.description": "Nájdite odpovede na najčastejšie otázky o našich vodoinštalačných službách.",
    "faq.cta": "Nenašli ste odpoveď? Kontaktujte nás na",
    "faq.1.question": "Ako rýchlo môžete prísť?",
    "faq.1.answer": "V prípade bežných objednávok príjdeme do 24-48 hodín. Pri naliehavých situáciách poskytujeme pohotovostnú službu s príjazdom do 60 minút.",
    "faq.2.question": "Aké služby ponúkate?",
    "faq.2.answer": "Ponúkame komplexné vodoinštalačné služby vrátane opráv vodovodných potrubí, inštalácie sanitárnych zariadení, čistenia odpadov, opráv vykurovania a montáže kotlov.",
    "faq.3.question": "Poskytujete záruky na vaše práce?",
    "faq.3.answer": "Áno, na všetky naše práce poskytujeme záruku minimálne 24 mesiacov. Na niektoré typy prác ponúkame aj rozšírenú záruku.",
    "faq.4.question": "Koľko stojí vaša služba?",
    "faq.4.answer": "Ceny závisia od typu práce. Vždy poskytujeme bezplatnú cenovú ponuku pred začatím prác, aby ste presne vedeli, čo očakávať. Bez skrytých poplatkov.",
    "faq.5.question": "Pracujete aj cez víkendy?",
    "faq.5.answer": "Áno, poskytujeme služby 7 dní v týždni. Pre pohotovostné služby sme dostupní 24/7 vrátane sviatkov.",

    // Footer
    "footer.description": "Dobrý vodár - spolu s vami 24/7. Profesionálne vodoinštalačné služby pre váš domov. Rýchlo a spoľahlivo.",
    "footer.quickLinks": "Rýchle odkazy",
    "footer.services": "Služby",
    "footer.contact": "Kontakt",
    "footer.service.1": "Havarijné služby 24/7",
    "footer.service.2": "Montáž sanity",
    "footer.service.3": "Opravy potrubí",
    "footer.service.4": "Čistenie odpadov",
    "footer.service.5": "Vykurovanie",
    "footer.service.6": "Plynové zariadenia",
    "footer.hours": "PON-PIA 7:00 - 17:00",
    "footer.emergency": "Havárie: 24/7",
    "footer.copyright": "Všetky práva vyhradené.",

    // Siphon Page Specific (SK)
    "siphon.seo.title": "Výmena sifónu Bratislava | Oprava & Montáž | Dobrý Vodár",
    "siphon.seo.description": "Profesionálna výmena sifónu v kuchyni, kúpeľni a WC. Riešime pretekanie, zápach a upchaté sifóny. Rýchly výjazd v Bratislave. Volajte 0944 562 059.",
    "siphon.seo.keywords": "výmena sifónu, oprava sifónu, montáž sifónu, sifón umývadlo, sifón vaňa, pretekajúci sifón, vodoinštalatér bratislava",
    "siphon.hero.title": "Výmena a oprava sifónov",
    "siphon.hero.subtitle": "Profesionálne riešenie pre vašu kuchyňu a kúpeľňu",
    "siphon.problem.title": "Máte problém so sifónom?",
    "siphon.problem.1": "Pretekajúca voda pod umývadlom",
    "siphon.problem.2": "Nepríjemný zápach z odpadu",
    "siphon.problem.3": "Upchatý alebo neodtekajúci sifón",
    "siphon.problem.4": "Starý a skorodovaný materiál",
    "siphon.cta": "Objednať výmenu",
  },
  en: {
    // SEO Specific
    "seo.title": "Good Plumber Bratislava | Emergency Service & Repairs 24/7",
    "seo.description": "Professional plumber in Bratislava. Fast pipe repairs, sanitary installation, drain cleaning and 24/7 emergency service. Call 0944 562 059.",
    "seo.keywords": "plumber bratislava, water repair, emergency plumber, drain cleaning, sanitary installation, good plumber",

    // Navbar
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.work": "Our Work",
    "nav.references": "References",
    "nav.contact": "Contact",
    "nav.book": "Book Now",

    // Hero
    "hero.badge": "🔧 With you 24/7",
    "hero.title1": "Good Plumber",
    "hero.title2": "Fast and",
    "hero.title3": "Reliable",
    "hero.description": "Professional installation and repair of plumbing systems. We solve all plumbing problems quickly and reliably.",
    "hero.benefit1": "Emergency calls: 24/7",
    "hero.benefit2": "Regular work MON-FRI 7:00 - 17:00",
    "hero.benefit3": "Bratislava and surroundings",
    "hero.cta.call": "Call Now",
    "hero.cta.services": "Our Services",
    "hero.image.alt": "Professional plumber Bratislava",

    // Stats
    "stats.clients": "Satisfied Clients",
    "stats.years": "Years of Experience",
    "stats.projects": "Completed Projects",
    "stats.service": "Emergency Service",

    // Services
    "services.label": "Our Services",
    "services.title1": "What we can",
    "services.title2": " do for you",
    "services.description": "Professional installation and repair of plumbing systems with emphasis on quality and customer satisfaction.",
    "services.emergency.title": "Emergency Services",
    "services.emergency.1": "Water leak / burst pipe",
    "services.emergency.2": "Leaking, emergency repairs",
    "services.emergency.3": "Fixing faults on cold and hot water pipes",
    "services.emergency.4": "Solving blockages (sink, basin, WC)",
    "services.regular.title": "Installation & Regular Work",
    "services.regular.hours": "MON-FRI 7:00 - 17:00",
    "services.regular.1": "Siphon replacement",
    "services.regular.2": "Faucet replacement (kitchen/bathroom)",
    "services.regular.3": "WC replacement and installation",
    "services.regular.4": "Valve installation and replacement",
    "services.regular.5": "Sanitary equipment installation",
    "services.regular.6": "Water pipe repair",
    "services.regular.7": "Water pipe installation",
    "services.regular.8": "Sewer pipe replacement in apartments and houses",
    "services.regular.9": "Heating installation (radiators, pipes, connections)",
    "services.regular.10": "Gas equipment installation and connection",
    "services.pricing.title": "Prices are individual",
    "services.pricing.description": "The exact amount depends on the type of work and condition of the equipment. Contact me by phone or message for an exact price.",

    // Our Work
    "work.label": "Our Work",
    "work.title": "Examples of Our Work",
    "work.description": "See some of our completed projects. Quality and precision in every detail.",
    "work.1": "Shower Installation",
    "work.2": "Shower Cabin",
    "work.3": "Modern Bathroom",
    "work.4": "WC Installation",
    "work.5": "Shower System",
    "work.6": "Double Sink",

    // Testimonials
    "testimonials.label": "References",
    "testimonials.title1": "What our",
    "testimonials.title2": " satisfied customers say",
    "testimonials.description": "Stories of successful projects and satisfied customers who trusted us with their plumbing needs.",
    "testimonials.1.name": "Martin Kovac",
    "testimonials.1.role": "Homeowner",
    "testimonials.1.content": "Excellent service! The plumber arrived promptly and quickly solved the problem with my sink. Professional, polite and very skilled. Highly recommend!",
    "testimonials.2.name": "Jana Horvathova",
    "testimonials.2.role": "Apartment Owner",
    "testimonials.2.content": "Fantastic experience! The team was very professional and the price was fair. They fixed my entire bathroom in one day. Will definitely contact them again.",
    "testimonials.3.name": "Peter Novak",
    "testimonials.3.role": "Building Manager",
    "testimonials.3.content": "Reliable company with reasonable prices. They helped us replace all the pipes in the entire building. Work was completed on time and on budget.",

    // Contact
    "contact.label": "Contact Us",
    "contact.title1": "Book your",
    "contact.title2": " appointment today",
    "contact.description": "Having plumbing problems? Contact us and we will help you.",
    "contact.form.title": "Write to Us",
    "contact.form.name": "Your name",
    "contact.form.email": "Your email",
    "contact.form.phone": "Phone number",
    "contact.form.message": "Describe your problem or request...",
    "contact.form.submit": "Send Message",
    "contact.toast.title": "Message sent!",
    "contact.toast.description": "Thank you for your message. We will contact you soon.",
    "contact.validation.name": "Please fill out your name.",
    "contact.validation.email": "Please enter a valid email.",
    "contact.validation.message": "Please write your message.",
    "contact.info.phone": "Phone (WhatsApp)",
    "contact.info.regular": "Regular Work",
    "contact.info.emergency": "Emergency Calls",
    "contact.info.area": "Service Area",
    "contact.info.area.value": "Bratislava and surroundings",

    // FAQ
    "faq.label": "FAQ",
    "faq.title1": "Quick answers to",
    "faq.title2": " your questions",
    "faq.description": "Find answers to the most common questions about our plumbing services.",
    "faq.cta": "Didn't find an answer? Contact us at",
    "faq.1.question": "How quickly can you come?",
    "faq.1.answer": "For regular orders, we arrive within 24-48 hours. In urgent situations, we provide emergency service with arrival within 60 minutes.",
    "faq.2.question": "What services do you offer?",
    "faq.2.answer": "We offer comprehensive plumbing services including water pipe repairs, sanitary equipment installation, drain cleaning, heating repairs and boiler installation.",
    "faq.3.question": "Do you provide warranties on your work?",
    "faq.3.answer": "Yes, we provide a minimum 24-month warranty on all our work. For some types of work, we also offer an extended warranty.",
    "faq.4.question": "How much does your service cost?",
    "faq.4.answer": "Prices depend on the type of work. We always provide a free quote before starting work so you know exactly what to expect. No hidden fees.",
    "faq.5.question": "Do you work on weekends?",
    "faq.5.answer": "Yes, we provide services 7 days a week. For emergency services, we are available 24/7 including holidays.",

    // Footer
    "footer.description": "Good Plumber - with you 24/7. Professional plumbing services for your home. Fast and reliable.",
    "footer.quickLinks": "Quick Links",
    "footer.services": "Services",
    "footer.contact": "Contact",
    "footer.service.1": "Emergency Services 24/7",
    "footer.service.2": "Sanitary Installation",
    "footer.service.3": "Pipe Repairs",
    "footer.service.4": "Drain Cleaning",
    "footer.service.5": "Heating",
    "footer.service.6": "Gas Equipment",
    "footer.hours": "MON-FRI 7:00 - 17:00",
    "footer.emergency": "Emergency: 24/7",
    "footer.copyright": "All rights reserved.",

    // Siphon Page Specific (EN)
    "siphon.seo.title": "Siphon Replacement Bratislava | Repair & Installation",
    "siphon.seo.description": "Professional siphon replacement for kitchen, bathroom and WC. We fix leaking, bad smell and clogged siphons. Fast service in Bratislava.",
    "siphon.seo.keywords": "siphon replacement, siphon repair, siphon installation, sink siphon, bathtub siphon, leaking siphon, plumber bratislava",
    "siphon.hero.title": "Siphon Replacement & Repair",
    "siphon.hero.subtitle": "Professional solutions for your kitchen and bathroom",
    "siphon.problem.title": "Having trouble with your siphon?",
    "siphon.problem.1": "Leaking water under the sink",
    "siphon.problem.2": "Unpleasant smell from the drain",
    "siphon.problem.3": "Clogged or slow draining siphon",
    "siphon.problem.4": "Old and corroded material",
    "siphon.cta": "Book Replacement",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("sk");

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

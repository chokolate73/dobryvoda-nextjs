import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Ako rýchlo môžete prísť?",
      answer: "V prípade bežných objednávok príjdeme do 24-48 hodín. Pri naliehavých situáciách poskytujeme pohotovostnú službu s príjazdom do 60 minút.",
    },
    {
      question: "Aké služby ponúkate?",
      answer: "Ponúkame komplexné vodoinštalačné služby vrátane opráv vodovodných potrubí, inštalácie sanitárnych zariadení, čistenia odpadov, opráv vykurovania a montáže kotlov.",
    },
    {
      question: "Poskytujete záruky na vaše práce?",
      answer: "Áno, na všetky naše práce poskytujeme záruku minimálne 24 mesiacov. Na niektoré typy prác ponúkame aj rozšírenú záruku.",
    },
    {
      question: "Koľko stojí vaša služba?",
      answer: "Ceny závisia od typu práce. Vždy poskytujeme bezplatnú cenovú ponuku pred začatím prác, aby ste presne vedeli, čo očakávať. Bez skrytých poplatkov.",
    },
    {
      question: "Pracujete aj cez víkendy?",
      answer: "Áno, poskytujeme služby 7 dní v týždni. Pre pohotovostné služby sme dostupní 24/7 vrátane sviatkov.",
    },
  ];

  return (
    <section id="faq" className="py-20 lg:py-28 bg-secondary/50">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Header */}
          <div className="lg:col-span-3 animate-fade-in">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-3 block">
              Časté otázky
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Rýchle odpovede na
              <span className="text-gradient"> vaše otázky</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              Nájdite odpovede na najčastejšie otázky o našich vodoinštalačných službách.
            </p>
            <p className="text-muted-foreground">
              Nenašli ste odpoveď? Kontaktujte nás na{" "}
              <a href="mailto:info@dobryvodar.sk" className="text-primary font-semibold hover:underline">
                info@dobryvodar.sk
              </a>
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="lg:col-span-2 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-xl px-6 data-[state=open]:card-shadow transition-all duration-300"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-5 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

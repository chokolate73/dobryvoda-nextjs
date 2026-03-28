"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";

const FAQSection = () => {
  const headerRef = useScrollAnimation({ threshold: 0.2 });
  const accordionRef = useScrollAnimation({ threshold: 0.1 });
  const { t } = useLanguage();

  const faqs = [
    {
      question: t("faq.1.question"),
      answer: t("faq.1.answer"),
    },
    {
      question: t("faq.2.question"),
      answer: t("faq.2.answer"),
    },
    {
      question: t("faq.3.question"),
      answer: t("faq.3.answer"),
    },
    {
      question: t("faq.4.question"),
      answer: t("faq.4.answer"),
    },
    {
      question: t("faq.5.question"),
      answer: t("faq.5.answer"),
    },
  ];

  return (
    <section id="faq" className="py-20 lg:py-28 bg-secondary/50">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Header */}
          <div
            ref={headerRef.ref}
            className={`lg:col-span-2 scroll-animate-left ${headerRef.isVisible ? "visible" : ""}`}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-3 block">
              {t("faq.label")}
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {t("faq.title1")}
              <span className="text-gradient">{t("faq.title2")}</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              {t("faq.description")}
            </p>
            <p className="text-muted-foreground">
              {t("faq.cta")}{" "}
              <a href="mailto:info@dobryvodar.sk" className="text-primary font-semibold hover:underline">
                info@dobryvodar.sk
              </a>
            </p>
          </div>

          {/* FAQ Accordion */}
          <div
            ref={accordionRef.ref}
            className={`lg:col-span-3 scroll-animate-right ${accordionRef.isVisible ? "visible" : ""}`}
          >
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

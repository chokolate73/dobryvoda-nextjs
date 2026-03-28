"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingPhoneButton from "@/components/FloatingPhoneButton";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { CheckCircle2, Phone, ArrowRight } from "lucide-react";

interface ServiceLayoutProps {
  translationKey: string;
  image: string;
}

const ServiceLayout = ({ translationKey, image }: ServiceLayoutProps) => {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-8 pb-16 md:pt-32 lg:pt-40 lg:pb-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">
                {t("services.label")}
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                {t(`${translationKey}.hero.title`)}
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                {t(`${translationKey}.hero.subtitle`)}
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="group" asChild>
                  <a href="tel:+421944562059">
                    <Phone className="mr-2 h-5 w-5" />
                    {t("hero.cta.call")}
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="#kontakt">
                    {t("nav.contact")}
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in delay-100">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={image}
                  alt={t(`${translationKey}.hero.title`)}
                  width={640}
                  height={400}
                  className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-display text-3xl font-bold mb-6">
              {t(`${translationKey}.problem.title`)}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-all">
                <div className="bg-primary/10 p-3 rounded-full shrink-0">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{t(`${translationKey}.problem.${num}`)}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="kontakt" className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            {t(`${translationKey}.cta`)}
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {t("contact.description")}
          </p>
          <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-6">
            <a href="tel:+421944562059">0944 562 059</a>
          </Button>
        </div>
      </section>

      <Footer />
      <FloatingPhoneButton />
    </main>
  );
};

export default ServiceLayout;

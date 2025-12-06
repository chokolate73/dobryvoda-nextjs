import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import plumberHero from "@/assets/plumber-hero.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();

  const benefits = [
    t("hero.benefit1"),
    t("hero.benefit2"),
    t("hero.benefit3"),
  ];

  return (
    <section id="domov" className="pt-24 pb-16 lg:pt-32 lg:pb-24 hero-gradient min-h-screen flex items-center">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <span className="inline-block px-4 py-1.5 bg-accent text-accent-foreground rounded-full text-sm font-medium mb-6">
              {t("hero.badge")}
            </span>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              {t("hero.title1")}
              <span className="text-gradient block">{t("hero.title2")}</span>
              {t("hero.title3")}
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-xl">
              {t("hero.description")}
            </p>

            {/* Benefits */}
            <div className="flex flex-col gap-3 mb-8">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground/80">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" className="group" asChild>
                <a href="tel:+421944520590">
                  {t("hero.cta.call")}
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#sluzby">{t("hero.cta.services")}</a>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative z-10">
              <div className="bg-card rounded-3xl overflow-hidden card-shadow">
                <img
                  src={plumberHero}
                  alt={t("hero.image.alt")}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-accent rounded-full blur-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

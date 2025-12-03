import { Wrench, Droplets, Thermometer, ShieldCheck, Clock, BadgeCheck } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Wrench,
      title: "Kvalitná práca",
      description: "Garantujeme dlhú životnosť vašej vodoinštalácie a opráv.",
    },
    {
      icon: Droplets,
      title: "Transparentné ceny",
      description: "Poskytujeme jasné cenové ponuky bez skrytých poplatkov.",
    },
    {
      icon: BadgeCheck,
      title: "Odborníci s praxou",
      description: "Náš tím tvoria vysoko kvalifikovaní a certifikovaní vodoinštalatéri.",
    },
    {
      icon: Clock,
      title: "Pohotovostná služba",
      description: "24/7 dostupnosť pre naliehavé problémy s vodoinštaláciou.",
    },
    {
      icon: Thermometer,
      title: "Vykurovanie",
      description: "Inštalácia a oprava vykurovacích systémov a kotlov.",
    },
    {
      icon: ShieldCheck,
      title: "Záruka na prácu",
      description: "Na všetky naše služby poskytujeme rozšírenú záruku.",
    },
  ];

  return (
    <section id="sluzby" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-3 block">
            Prečo si vybrať nás
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Vyberte si nás pre vaše
            <span className="text-gradient"> vodoinštalačné potreby</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Profesionálna inštalácia a oprava vodovodných systémov s dôrazom na kvalitu a spokojnosť zákazníka.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-6 lg:p-8 bg-card rounded-2xl border border-border hover:border-primary/30 card-shadow hover:card-shadow-hover transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <service.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

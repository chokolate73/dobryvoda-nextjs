import { AlertTriangle, Wrench, Droplets, Thermometer, ShieldCheck, Clock, Plug, Bath } from "lucide-react";

const ServicesSection = () => {
  const emergencyServices = [
    "Únik vody / prasknuté potrubie",
    "Zatekanie, havarijné opravy",
    "Odstránenie porúch na rozvodoch studenej a teplej vody",
    "Riešenie upchatia (drez, umývadlo, WC)",
  ];

  const regularServices = [
    "Výmena sifónu",
    "Výmena batérie (kuchyňa/kúpeľňa)",
    "Výmena a montáž WC",
    "Montáž a výmena ventilov",
    "Montáž zdravotechniky a sanity",
    "Oprava vodovodného potrubia",
    "Výmena a montáž rozvodov vody",
    "Výmena rozvodov kanalizácie v bytoch a rodinných domoch",
    "Montáž vykurovania v bytoch a domoch (radiátory, rozvody, prípojky)",
    "Montáž a pripojenie plynových zariadení",
  ];

  return (
    <section id="sluzby" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-3 block">
            Naše služby
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Čo pre vás
            <span className="text-gradient"> môžeme urobiť</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Profesionálna inštalácia a oprava vodovodných systémov s dôrazom na kvalitu a spokojnosť zákazníka.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Emergency Services */}
          <div className="bg-card rounded-2xl border border-border p-8 card-shadow animate-fade-in">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-destructive/10 rounded-xl flex items-center justify-center">
                <AlertTriangle className="h-7 w-7 text-destructive" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-foreground">
                  Havarijné služby
                </h3>
                <span className="text-destructive font-semibold">24/7</span>
              </div>
            </div>
            <ul className="space-y-3">
              {emergencyServices.map((service, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Regular Services */}
          <div className="bg-card rounded-2xl border border-border p-8 card-shadow animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center">
                <Wrench className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-foreground">
                  Montážne a bežné práce
                </h3>
                <span className="text-muted-foreground">PON-PIA 7:00 - 17:00</span>
              </div>
            </div>
            <ul className="space-y-3">
              {regularServices.map((service, index) => (
                <li key={index} className="flex items-start gap-3">
                  <ShieldCheck className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Pricing Note */}
        <div className="mt-12 bg-accent/50 rounded-2xl p-6 lg:p-8 text-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <h4 className="font-display text-xl font-bold text-foreground mb-2">
            Ceny sú individuálne
          </h4>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Presná suma závisí od typu práce a stavu zariadenia. Pre presnú cenu ma kontaktujte telefonicky alebo správou.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Martin Kováč",
      role: "Majiteľ domu",
      content: "Výborná služba! Vodoinštalatér prišiel promptne a rýchlo vyriešil problém s mojím umývadlom. Profesionálny, zdvorilý a veľmi zručný. Vrelo odporúčam!",
      rating: 5,
    },
    {
      name: "Jana Horváthová",
      role: "Majiteľka bytu",
      content: "Fantastická skúsenosť! Tím bol veľmi profesionálny a cena bola férová. Opravili mi celú kúpeľňu za jeden deň. Určite ich budem kontaktovať znova.",
      rating: 5,
    },
    {
      name: "Peter Novák",
      role: "Správca budovy",
      content: "Spoľahlivá firma s rozumnými cenami. Pomohli nám s výmenou všetkých potrubí v celej budove. Práca bola dokončená v termíne a v rozpočte.",
      rating: 5,
    },
  ];

  return (
    <section id="referencie" className="py-20 lg:py-28 bg-secondary/50">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-3 block">
            Referencie
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Čo hovoria naši
            <span className="text-gradient"> spokojní zákazníci</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Príbehy úspešných projektov a spokojných zákazníkov, ktorí nám zverili svoje vodoinštalačné potreby.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="p-6 lg:p-8 bg-card rounded-2xl card-shadow hover:card-shadow-hover transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground/80 leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

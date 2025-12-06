import { Star } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";

const TestimonialsSection = () => {
  const headerRef = useScrollAnimation({ threshold: 0.2 });
  const cardsRef = useScrollAnimation({ threshold: 0.1 });
  const { t } = useLanguage();

  const testimonials = [
    {
      name: t("testimonials.1.name"),
      role: t("testimonials.1.role"),
      content: t("testimonials.1.content"),
      rating: 5,
    },
    {
      name: t("testimonials.2.name"),
      role: t("testimonials.2.role"),
      content: t("testimonials.2.content"),
      rating: 5,
    },
    {
      name: t("testimonials.3.name"),
      role: t("testimonials.3.role"),
      content: t("testimonials.3.content"),
      rating: 5,
    },
  ];

  return (
    <section id="referencie" className="py-20 lg:py-28 bg-secondary/50">
      <div className="container mx-auto">
        {/* Header */}
        <div
          ref={headerRef.ref}
          className={`text-center max-w-2xl mx-auto mb-16 scroll-animate ${headerRef.isVisible ? "visible" : ""}`}
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-3 block">
            {t("testimonials.label")}
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t("testimonials.title1")}
            <span className="text-gradient">{t("testimonials.title2")}</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            {t("testimonials.description")}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div
          ref={cardsRef.ref}
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 scroll-animate ${cardsRef.isVisible ? "visible" : ""}`}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="p-6 lg:p-8 bg-card rounded-2xl card-shadow hover:card-shadow-hover transition-all duration-300"
              style={{ transitionDelay: `${index * 0.15}s` }}
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

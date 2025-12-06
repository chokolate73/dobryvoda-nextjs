import useScrollAnimation from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";

const StatsSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const { t } = useLanguage();

  const stats = [
    { value: "200+", label: t("stats.clients") },
    { value: "10", label: t("stats.years") },
    { value: "300+", label: t("stats.projects") },
    { value: "24/7", label: t("stats.service") },
  ];

  return (
    <section className="py-16 bg-card border-y border-border">
      <div className="container mx-auto">
        <div
          ref={ref}
          className={`grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 scroll-animate ${isVisible ? "visible" : ""}`}
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

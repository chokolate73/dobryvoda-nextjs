const StatsSection = () => {
  const stats = [
    { value: "500+", label: "Spokojných klientov" },
    { value: "15", label: "Rokov skúseností" },
    { value: "1000+", label: "Dokončených projektov" },
    { value: "24/7", label: "Pohotovostná služba" },
  ];

  return (
    <section className="py-16 bg-card border-y border-border">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

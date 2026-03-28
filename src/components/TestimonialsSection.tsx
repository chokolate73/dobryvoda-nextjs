"use client";
import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      fill="#EA4335"
    />
  </svg>
);

const TestimonialsSection = () => {
  const headerRef = useScrollAnimation({ threshold: 0.2 });
  const cardsRef = useScrollAnimation({ threshold: 0.1 });
  const { t } = useLanguage();
  const [currentPage, setCurrentPage] = useState(0);

  const testimonials = [
    {
      name: t("testimonials.1.name"),
      content: t("testimonials.1.content"),
      rating: 5,
    },
    {
      name: t("testimonials.2.name"),
      content: t("testimonials.2.content"),
      rating: 5,
    },
    {
      name: t("testimonials.3.name"),
      content: t("testimonials.3.content"),
      rating: 5,
    },
    {
      name: t("testimonials.4.name"),
      content: t("testimonials.4.content"),
      rating: 5,
    },
    {
      name: t("testimonials.5.name"),
      content: t("testimonials.5.content"),
      rating: 5,
    },
    {
      name: t("testimonials.6.name"),
      content: t("testimonials.6.content"),
      rating: 5,
    },
  ];

  const googleSource = t("testimonials.source");

  // Show 3 per page on desktop, 1 on mobile
  const totalPages = 2;
  const visibleTestimonials = testimonials.slice(
    currentPage * 3,
    currentPage * 3 + 3
  );

  const nextPage = () => setCurrentPage((p) => (p + 1) % totalPages);
  const prevPage = () => setCurrentPage((p) => (p - 1 + totalPages) % totalPages);

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

        {/* Testimonials Carousel */}
        <div
          ref={cardsRef.ref}
          className={`scroll-animate ${cardsRef.isVisible ? "visible" : ""}`}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {visibleTestimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="p-6 lg:p-8 bg-card rounded-2xl card-shadow hover:card-shadow-hover transition-all duration-300"
                style={{ transitionDelay: `${index * 0.15}s` }}
              >
                {/* Rating & Google Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < testimonial.rating
                            ? "fill-primary text-primary"
                            : "fill-muted text-muted"
                        }`}
                      />
                    ))}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <GoogleIcon />
                    <span>{googleSource}</span>
                  </div>
                </div>

                {/* Content */}
                <p className="text-foreground/80 leading-relaxed mb-6 text-sm">
                  &ldquo;{testimonial.content}&rdquo;
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
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={prevPage}
              className="p-2 rounded-full bg-card card-shadow hover:card-shadow-hover transition-all duration-200"
              aria-label="Previous reviews"
            >
              <ChevronLeft className="h-5 w-5 text-foreground" />
            </button>
            <div className="flex gap-2">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                    i === currentPage
                      ? "bg-primary w-6"
                      : "bg-muted-foreground/30"
                  }`}
                  aria-label={`Page ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextPage}
              className="p-2 rounded-full bg-card card-shadow hover:card-shadow-hover transition-all duration-200"
              aria-label="Next reviews"
            >
              <ChevronRight className="h-5 w-5 text-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

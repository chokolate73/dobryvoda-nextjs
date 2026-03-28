export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "PlumbingService",
  "@id": "https://dobryvodar.sk/#business",
  name: "Dobrý Vodár",
  alternateName: "DobryVodar",
  image: "https://dobryvodar.sk/og-image.png",
  logo: "https://dobryvodar.sk/favicon.png",
  telephone: "+421944562059",
  url: "https://dobryvodar.sk",
  description:
    "Profesionálny vodoinštalatér v Bratislave a okolí. Rýchle opravy potrubí, montáž sanity, čistenie odpadov a havarijná služba 24/7.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bratislava",
    addressRegion: "Bratislavský kraj",
    addressCountry: "SK",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 48.1486,
    longitude: 17.1077,
  },
  areaServed: {
    "@type": "City",
    name: "Bratislava",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "17:00",
    },
  ],
  priceRange: "$$",
  sameAs: [],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Vodoinštalačné služby",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Havarijné služby 24/7" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Výmena sifónu" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Oprava WC" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Čistenie kanalizácie" },
      },
    ],
  },
};

export function makeServiceSchema(serviceType: string, serviceName: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType,
    name: serviceName,
    provider: {
      "@type": "PlumbingService",
      "@id": "https://dobryvodar.sk/#business",
    },
    areaServed: {
      "@type": "City",
      name: "Bratislava",
    },
    description,
  };
}

export function makeFaqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function makeBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

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
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "6",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Bartolomej Proščák" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "Profesionálny prístup, dobrá cena a kvalitná práca. Vymenený celý sprchový kút, sprchový systém, termostatická batéria. Demontáž, montáž, odvoz, dovoz. Všetko v poriadku. Určite ak budeme potrebovať, opätovne sa obrátime na Dobrého vodára. Odporúčame.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Rene" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "Perfektny vodar, super sluzba a profesionalita, od zavolania do hodiny sa dostavil a opravil, a to bolo v sobotu. Doporucujem vsetkym.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Viktor Bab" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "S inštalatérskymi službami som maximálne spokojný. Prerábal mi radiátory a práca bola urobená rýchlo, kvalitne a za veľmi rozumnú cenu. Oceňujem profesionálny prístup, spoľahlivosť a detailné spracovanie. Určite odporúčam každému, kto hľadá kvalitného inštalatéra.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Yaroslava Svitlyk" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "Som veľmi spokojná so službami. Prišiel rýchlo, všetko profesionálne vysvetlil a problém vyriešil za chvíľu. Určite odporúčam.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Miroslava Š." },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "Mali sme dlhodobý problém – vlhla nám stena. Nevedeli sme prísť na to, z čoho to je, tak sme zavolali pána. Do 30 minút bola príčina nájdená a problém vyriešený, a hlavne za adekvátnu cenu. Klobúk dole.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Richard Tekel" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "Spokojnosť. Rýchla reakcia, mal som šťastie na skorý termín a havária v stúpačke bola vyriešená bez problémov. Veľmi dobrý prístup.",
    },
  ],
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

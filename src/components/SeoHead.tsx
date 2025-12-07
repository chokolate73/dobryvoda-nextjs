import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/contexts/LanguageContext";

const SeoHead = () => {
  const { t, language } = useLanguage();

  // Structured Data for Local Business (Plumber)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "PlumbingService",
    "name": "Dobrý Vodár",
    "image": "https://dobryvodar.sk/assets/logo-new.png",
    "telephone": "+421944562059",
    "url": "https://dobryvodar.sk",
    "description": t("seo.description"),
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bratislava",
      "addressCountry": "SK"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "07:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday", "Sunday"],
        "description": "Emergency Service 24/7"
      }
    ],
    "priceRange": "$$"
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <html lang={language} />
      <title>{t("seo.title")}</title>
      <meta name="description" content={t("seo.description")} />
      <meta name="keywords" content={t("seo.keywords")} />
      <meta name="author" content="Dobrý Vodár" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://dobryvodar.sk/" />
      <meta property="og:title" content={t("seo.title")} />
      <meta property="og:description" content={t("seo.description")} />
      <meta property="og:image" content="https://dobryvodar.sk/og-image.png" />
      <meta property="og:locale" content={language === 'sk' ? 'sk_SK' : 'en_US'} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://dobryvodar.sk/" />
      <meta property="twitter:title" content={t("seo.title")} />
      <meta property="twitter:description" content={t("seo.description")} />
      <meta property="twitter:image" content="https://dobryvodar.sk/og-image.png" />

      {/* Canonical URL */}
      <link rel="canonical" href="https://dobryvodar.sk/" />
      
      {/* Alternate languages */}
      <link rel="alternate" href="https://dobryvodar.sk/" hrefLang="sk" />
      <link rel="alternate" href="https://dobryvodar.sk/" hrefLang="x-default" />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </Helmet>
  );
};

export default SeoHead;

import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/contexts/LanguageContext";

interface SeoHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
}

const SeoHead = ({ title, description, keywords }: SeoHeadProps) => {
  const { t, language } = useLanguage();

  // Use props if provided, otherwise fallback to default translations
  const finalTitle = title || t("seo.title");
  const finalDescription = description || t("seo.description");
  const finalKeywords = keywords || t("seo.keywords");

  // Structured Data for Local Business
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "PlumbingService",
    "name": "Dobrý Vodár",
    "image": "https://dobryvodar.sk/assets/logo-new.png",
    "telephone": "+421944562059",
    "url": "https://dobryvodar.sk",
    "description": finalDescription,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bratislava",
      "addressCountry": "SK"
    },
    "priceRange": "$$"
  };

  return (
    <Helmet>
      <html lang={language} />
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords} />
      
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://dobryvodar.sk/og-image.png" />
      
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={finalTitle} />
      <meta property="twitter:description" content={finalDescription} />
      <meta property="twitter:image" content="https://dobryvodar.sk/og-image.png" />
      
      <link rel="canonical" href={typeof window !== 'undefined' ? window.location.href : 'https://dobryvodar.sk'} />
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </Helmet>
  );
};

export default SeoHead;

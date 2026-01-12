import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/contexts/LanguageContext";
import { useLocation } from "react-router-dom";

interface FAQItem {
  question: string;
  answer: string;
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface SeoHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  faqs?: FAQItem[];
  breadcrumbs?: BreadcrumbItem[];
  serviceType?: string;
  serviceName?: string;
}

const SeoHead = ({ 
  title, 
  description, 
  keywords, 
  faqs,
  breadcrumbs,
  serviceType,
  serviceName
}: SeoHeadProps) => {
  const { t, language } = useLanguage();
  const location = useLocation();

  // Use props if provided, otherwise fallback to default translations
  const finalTitle = title || t("seo.title");
  const finalDescription = description || t("seo.description");
  const finalKeywords = keywords || t("seo.keywords");
  const canonicalUrl = `https://dobryvodar.sk${location.pathname === '/' ? '' : location.pathname}`;

  // Structured Data for Local Business (PlumbingService)
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "PlumbingService",
    "@id": "https://dobryvodar.sk/#business",
    "name": "Dobrý Vodár",
    "alternateName": "DobryVodar",
    "image": "https://dobryvodar.sk/og-image.png",
    "logo": "https://dobryvodar.sk/favicon.png",
    "telephone": "+421944562059",
    "url": "https://dobryvodar.sk",
    "description": finalDescription,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bratislava",
      "addressRegion": "Bratislavský kraj",
      "addressCountry": "SK"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 48.1486,
      "longitude": 17.1077
    },
    "areaServed": {
      "@type": "City",
      "name": "Bratislava"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "07:00",
        "closes": "17:00"
      }
    ],
    "priceRange": "$$",
    "sameAs": [],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Vodoinštalačné služby",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Havarijné služby 24/7"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Výmena sifónu"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Oprava WC"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Čistenie kanalizácie"
          }
        }
      ]
    }
  };

  // FAQ Schema (if FAQs provided)
  const faqSchema = faqs && faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  // Breadcrumb Schema (if breadcrumbs provided)
  const breadcrumbSchema = breadcrumbs && breadcrumbs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  } : null;

  // Service Schema (for service pages)
  const serviceSchema = serviceType && serviceName ? {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": serviceType,
    "name": serviceName,
    "provider": {
      "@type": "PlumbingService",
      "@id": "https://dobryvodar.sk/#business"
    },
    "areaServed": {
      "@type": "City",
      "name": "Bratislava"
    },
    "description": finalDescription
  } : null;

  return (
    <Helmet>
      <html lang={language} />
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords} />
      
      {/* Open Graph */}
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content="https://dobryvodar.sk/og-image.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="sk_SK" />
      <meta property="og:site_name" content="Dobrý Vodár" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content="https://dobryvodar.sk/og-image.png" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Structured Data - LocalBusiness */}
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      
      {/* Structured Data - FAQ (if provided) */}
      {faqSchema && (
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      )}
      
      {/* Structured Data - Breadcrumbs (if provided) */}
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
      
      {/* Structured Data - Service (if provided) */}
      {serviceSchema && (
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
      )}
    </Helmet>
  );
};

export default SeoHead;

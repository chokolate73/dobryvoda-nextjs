import { localBusinessSchema, makeServiceSchema, makeBreadcrumbSchema } from "@/lib/structured-data";

interface ServiceSchemasProps {
  serviceType: string;
  title: string;
  description: string;
  slug: string;
  pageName: string;
}

export function ServiceSchemas({ serviceType, title, description, slug, pageName }: ServiceSchemasProps) {
  const breadcrumbs = [
    { name: "Domov", url: "https://dobryvodar.sk" },
    { name: pageName, url: `https://dobryvodar.sk/${slug}` },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(makeServiceSchema(serviceType, title, description)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(makeBreadcrumbSchema(breadcrumbs)),
        }}
      />
    </>
  );
}

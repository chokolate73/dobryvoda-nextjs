import type { Metadata } from "next";
import { seoData, serviceImages } from "@/lib/translations";
import { localBusinessSchema, makeServiceSchema } from "@/lib/structured-data";
import ServiceLayout from "@/components/ServiceLayout";

const data = seoData.boiler;

export const metadata: Metadata = {
  title: data.title,
  description: data.description,
  keywords: data.keywords,
  alternates: { canonical: `https://dobryvodar.sk/${data.slug}` },
  openGraph: { title: data.title, description: data.description, url: `https://dobryvodar.sk/${data.slug}` },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(makeServiceSchema("Montáž bojleru", data.title, data.description)) }} />
      <ServiceLayout translationKey="boiler" image={serviceImages.boiler} />
    </>
  );
}

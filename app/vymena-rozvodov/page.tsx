import type { Metadata } from "next";
import { seoData, serviceImages } from "@/lib/translations";
import { ServiceSchemas } from "@/lib/service-schemas";
import ServiceLayout from "@/components/ServiceLayout";

const data = seoData.pipes;

export const metadata: Metadata = {
  title: data.title,
  description: data.description,
  keywords: data.keywords,
  alternates: { canonical: `https://dobryvodar.sk/${data.slug}` },
  openGraph: {
    title: data.title,
    description: data.description,
    url: `https://dobryvodar.sk/${data.slug}`,
  },
};

export default function Page() {
  return (
    <>
      <ServiceSchemas
        serviceType="Výmena rozvodov"
        title={data.title}
        description={data.description}
        slug={data.slug}
        pageName="Výmena rozvodov vody"
      />
      <ServiceLayout translationKey="pipes" image={serviceImages.pipes} />
    </>
  );
}

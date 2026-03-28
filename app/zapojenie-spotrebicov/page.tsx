import type { Metadata } from "next";
import { seoData, serviceImages } from "@/lib/translations";
import { ServiceSchemas } from "@/lib/service-schemas";
import ServiceLayout from "@/components/ServiceLayout";

const data = seoData.appliance;

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
        serviceType="Zapojenie spotrebičov"
        title={data.title}
        description={data.description}
        slug={data.slug}
        pageName="Zapojenie spotrebičov"
      />
      <ServiceLayout translationKey="appliance" image={serviceImages.appliance} />
    </>
  );
}

import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://dobryvodar.sk";

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/vymena-sifonu`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/oprava-wc`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/montaz-baterie`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/oprava-potrubia`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/montaz-sprchy`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/zapojenie-spotrebicov`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/vymena-ventilov`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/montaz-sanity`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/oprava-kurenia`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/montaz-bojleru`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/vymena-rozvodov`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/kanalizacia`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
  ];
}

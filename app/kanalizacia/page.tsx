import type { Metadata } from "next";
import {
  localBusinessSchema,
  makeServiceSchema,
  makeFaqSchema,
  makeBreadcrumbSchema,
} from "@/lib/structured-data";
import KanalizaciaContent from "./kanalizacia-content";

export const metadata: Metadata = {
  // 58 chars
  title: "Krtkovanie a čistenie kanalizácie Bratislava | Dobrý Vodár",
  // 155 chars
  description:
    "Profesionálne krtkovanie a čistenie kanalizácie v Bratislave. Technológia Ridgid FlexShaft K9-102. Rýchly výjazd, férové ceny. Volajte 0944 562 059.",
  keywords:
    "krtkovanie, čistenie kanalizácie, upchatý odpad, profesionálne čistenie potrubia, krtkovanie bratislava, ridgid flexshaft",
  alternates: { canonical: "https://dobryvodar.sk/kanalizacia" },
  openGraph: {
    title: "Krtkovanie a čistenie kanalizácie Bratislava | Dobrý Vodár",
    description:
      "Profesionálne krtkovanie a čistenie kanalizácie v Bratislave. Technológia Ridgid FlexShaft K9-102. Rýchly výjazd, férové ceny. Volajte 0944 562 059.",
    url: "https://dobryvodar.sk/kanalizacia",
  },
};

const breadcrumbs = [
  { name: "Domov", url: "https://dobryvodar.sk" },
  { name: "Krtkovanie a čistenie kanalizácie", url: "https://dobryvodar.sk/kanalizacia" },
];

const pageFaqs = [
  {
    question: "Skúsenosť zákazníka: Ján M. z Petržalka",
    answer: "Upchatá kanalizácia v kúpeľni vyriešená za hodinu. Profesionálny prístup, čistá práca. Odporúčam!",
  },
  {
    question: "Skúsenosť zákazníka: Mária K. z Ružinov",
    answer: "Výborná služba. Prišli rýchlo, vyčistili odpad v kuchyni a všetko fungovalo ako nové.",
  },
  {
    question: "Skúsenosť zákazníka: Peter S. z Staré Mesto",
    answer: "Profesionálne krtkovanie za rozumnú cenu. Moderne vybavení a skúsený technik.",
  },
];

export default function KanalizaciaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            makeServiceSchema(
              "Čistenie kanalizácie",
              "Krtkovanie a čistenie kanalizácie Bratislava",
              metadata.description as string
            )
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(makeBreadcrumbSchema(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(makeFaqSchema(pageFaqs)) }}
      />
      <KanalizaciaContent />
    </>
  );
}

import type { Metadata } from "next";
import {
  localBusinessSchema,
  makeServiceSchema,
  makeFaqSchema,
  makeBreadcrumbSchema,
} from "@/lib/structured-data";
import MontazSanityContent from "./montaz-sanity-content";

export const metadata: Metadata = {
  title: "Montáž sanity Bratislava | Umývadlá, Vane, WC | Dobrý Vodár",
  description:
    "Kompletná montáž sanity v Bratislave. Osadenie umývadiel, vaní, sprchových kútov, WC a drezov. Profesionálna práca. Volajte 0944 562 059.",
  keywords:
    "montáž sanity, osadenie umývadla, montáž vane, inštalácia drezu, rekonštrukcia kúpeľne, montáž wc bratislava",
  alternates: { canonical: "https://dobryvodar.sk/montaz-sanity" },
  openGraph: {
    title: "Montáž sanity Bratislava | Umývadlá, Vane, WC | Dobrý Vodár",
    description:
      "Kompletná montáž sanity v Bratislave. Osadenie umývadiel, vaní, sprchových kútov, WC a drezov. Profesionálna práca. Volajte 0944 562 059.",
    url: "https://dobryvodar.sk/montaz-sanity",
  },
};

const breadcrumbs = [
  { name: "Domov", url: "https://dobryvodar.sk" },
  { name: "Montáž sanity", url: "https://dobryvodar.sk/montaz-sanity" },
];

const pageFaqs = [
  {
    question: "Dodávate aj sanitu alebo si ju mám kúpiť sám?",
    answer: "Sanitu si zvyčajne zabezpečuje zákazník podľa vlastného výberu a rozpočtu. Radi vám však poradíme s výberom a odporučíme overené značky a predajne.",
  },
  {
    question: "Koľko trvá montáž umývadla?",
    answer: "Bežná montáž umývadla vrátane pripojenia na vodu a odpad trvá približne 1-2 hodiny. Pri komplikovanejších prípadoch to môže byť dlhšie.",
  },
  {
    question: "Montujete aj do novostavieb?",
    answer: "Áno, montujeme sanitu do novostavieb aj pri rekonštrukciách. Pri novostavbách vieme zabezpečiť aj osadenie všetkých rozvodov od začiatku.",
  },
  {
    question: "Demontujete starú sanitu?",
    answer: "Áno, starú sanitu demontujeme a zabezpečíme jej odvoz. Cena za demontáž a odvoz sa kalkuluje individuálne podľa rozsahu prác.",
  },
];

export default function MontazSanityPage() {
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
              "Montáž sanity",
              "Montáž sanity Bratislava",
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
      <MontazSanityContent />
    </>
  );
}

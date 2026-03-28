import type { Metadata } from "next";
import {
  localBusinessSchema,
  makeServiceSchema,
  makeFaqSchema,
  makeBreadcrumbSchema,
} from "@/lib/structured-data";
import VymenaSifonuContent from "./vymena-sifonu-content";

export const metadata: Metadata = {
  title: "Výmena sifónu Bratislava | Oprava & Montáž | Dobrý Vodár",
  description:
    "Profesionálna výmena a oprava sifónov v Bratislave. Riešime pretekanie, zápach a upchaté sifóny v kuchyni a kúpeľni. Volajte 0944 562 059.",
  keywords:
    "výmena sifónu, oprava sifónu, montáž sifónu, sifón umývadlo, pretekajúci sifón, zápach z odpadu, vodoinštalatér bratislava",
  alternates: { canonical: "https://dobryvodar.sk/vymena-sifonu" },
  openGraph: {
    title: "Výmena sifónu Bratislava | Oprava & Montáž | Dobrý Vodár",
    description:
      "Profesionálna výmena a oprava sifónov v Bratislave. Riešime pretekanie, zápach a upchaté sifóny v kuchyni a kúpeľni. Volajte 0944 562 059.",
    url: "https://dobryvodar.sk/vymena-sifonu",
  },
};

const breadcrumbs = [
  { name: "Domov", url: "https://dobryvodar.sk" },
  { name: "Výmena sifónu", url: "https://dobryvodar.sk/vymena-sifonu" },
];

const pageFaqs = [
  {
    question: "Koľko stojí výmena sifónu?",
    answer: "Cena výmeny sifónu závisí od typu a prístupnosti. Bežná výmena sa pohybuje od 30 do 80 €. Presná cena zahŕňa prácu aj materiál.",
  },
  {
    question: "Musím sifón kúpiť sám?",
    answer: "Nie, sifón vám zabezpečíme my. Vždy používame kvalitné značkové sifóny s dlhou životnosťou.",
  },
  {
    question: "Ako dlho trvá výmena?",
    answer: "Bežná výmena sifónu trvá 30-60 minút. Pri komplikovanejšom napojení môže to trvať dlhšie.",
  },
  {
    question: "Prečo mi smrdí z odpadu?",
    answer: "Najčastejšou príčinou je vyschnutý alebo poškodený sifón, ktorý neprepúšťa vodnú zátku. Riešením je výmena sifónu alebo jeho prečistenie.",
  },
];

export default function VymenaSifonuPage() {
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
              "Výmena sifónu",
              "Výmena a oprava sifónov Bratislava",
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
      <VymenaSifonuContent />
    </>
  );
}

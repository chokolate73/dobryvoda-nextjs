import type { Metadata } from "next";
import {
  localBusinessSchema,
  makeServiceSchema,
  makeFaqSchema,
  makeBreadcrumbSchema,
} from "@/lib/structured-data";
import FiltreNaVoduContent from "./filtre-na-vodu-content";

export const metadata: Metadata = {
  title: "Filtre na vodu a zmäkčovače vody Bratislava | Dobrý Vodár",
  description:
    "Montáž a servis filtrov na vodu a zmäkčovačov vody v Bratislave. Zbavte sa vodného kameňa a zlepšite kvalitu pitnej vody. Volajte 0944 562 059.",
  keywords:
    "filtre na vodu, zmäkčovač vody, montáž filtra, vodný kameň, filtrácia vody bratislava, reverzná osmóza, zmäkčovanie vody",
  alternates: { canonical: "https://dobryvodar.sk/filtre-na-vodu" },
  openGraph: {
    title: "Filtre na vodu a zmäkčovače vody Bratislava | Dobrý Vodár",
    description:
      "Montáž a servis filtrov na vodu a zmäkčovačov vody v Bratislave. Zbavte sa vodného kameňa a zlepšite kvalitu pitnej vody. Volajte 0944 562 059.",
    url: "https://dobryvodar.sk/filtre-na-vodu",
  },
};

const breadcrumbs = [
  { name: "Domov", url: "https://dobryvodar.sk" },
  { name: "Filtre na vodu a zmäkčovače", url: "https://dobryvodar.sk/filtre-na-vodu" },
];

const pageFaqs = [
  {
    question: "Koľko stojí montáž zmäkčovača vody?",
    answer:
      "Cena montáže sa odvíja od typu zariadenia a rozsahu prác. Orientačne od 150 €, presnú cenu stanovíme po obhliadke.",
  },
  {
    question: "Dodávate aj samotné zariadenia?",
    answer:
      "Vieme zabezpečiť dodanie zariadenia, alebo namontujeme váš vlastný zmäkčovač či filter.",
  },
  {
    question: "Potrebujem zmäkčovač vody v byte?",
    answer:
      "V byte je najvhodnejšie riešenie filter pod drez alebo kompaktný zmäkčovač. Poradíme vám pri obhliadke.",
  },
  {
    question: "Ako často treba meniť filtre?",
    answer:
      "Závisí od typu filtra a kvality vody. Väčšina filtračných vložiek sa mení raz za 6-12 mesiacov.",
  },
  {
    question: "Zmäkčená voda je bezpečná na pitie?",
    answer:
      "Áno, zmäkčená voda je bezpečná. Pre pitie odporúčame kombináciu s filtrom na pitnú vodu pod drez.",
  },
  {
    question: "Inštalujete aj v novostavbách?",
    answer:
      "Áno, ideálne je naplánovať filtráciu už pri výstavbe – zabezpečíme návrh aj realizáciu.",
  },
];

export default function FiltreNaVoduPage() {
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
              "Montáž filtrov na vodu a zmäkčovačov vody",
              "Filtre na vodu a zmäkčovače vody Bratislava",
              metadata.description as string
            )
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(makeBreadcrumbSchema(breadcrumbs)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(makeFaqSchema(pageFaqs)),
        }}
      />
      <FiltreNaVoduContent />
    </>
  );
}

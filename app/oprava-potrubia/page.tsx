import type { Metadata } from "next";
import {
  localBusinessSchema,
  makeServiceSchema,
  makeFaqSchema,
  makeBreadcrumbSchema,
} from "@/lib/structured-data";
import OpravaPotrabiaContent from "./oprava-potrubia-content";

export const metadata: Metadata = {
  title: "Oprava prasknutého potrubia Bratislava | Únik vody | Dobrý Vodár",
  description:
    "Havarijná oprava vodovodného potrubia v Bratislave. Lokalizácia a odstránenie úniku vody. Rýchly výjazd do 60 minút. Volajte 0944 562 059.",
  keywords:
    "oprava potrubia, prasknuté potrubie, únik vody bratislava, havarijná služba voda, inštalatér potrubie, oprava rozvodov",
  alternates: { canonical: "https://dobryvodar.sk/oprava-potrubia" },
  openGraph: {
    title: "Oprava prasknutého potrubia Bratislava | Únik vody | Dobrý Vodár",
    description:
      "Havarijná oprava vodovodného potrubia v Bratislave. Lokalizácia a odstránenie úniku vody. Rýchly výjazd do 60 minút. Volajte 0944 562 059.",
    url: "https://dobryvodar.sk/oprava-potrubia",
  },
};

const breadcrumbs = [
  { name: "Domov", url: "https://dobryvodar.sk" },
  { name: "Oprava vodovodného potrubia", url: "https://dobryvodar.sk/oprava-potrubia" },
];

const pageFaqs = [
  {
    question: "Ako rýchlo prídete pri havárii?",
    answer: "V prípade havarijných situácií sa snažíme prísť čo najrýchlejšie, zvyčajne do 60 minút v rámci Bratislavy. Pri bežných objednávkach dohodneme termín do 24-48 hodín.",
  },
  {
    question: "Opravujete aj staré oceľové potrubie?",
    answer: "Áno, opravujeme všetky typy potrubí – medené, plastové (PPR, PEX) aj oceľové. Pri veľmi starom oceľovom potrubí vám poradíme, či je výhodnejšia oprava alebo kompletná výmena rozvodov.",
  },
  {
    question: "Koľko stojí oprava prasknutého potrubia?",
    answer: "Cena závisí od typu poruchy, materiálu potrubia a náročnosti prístupu. Vždy poskytneme cenovú ponuku pred začatím prác. Bežná oprava sa pohybuje od 60 do 200 €.",
  },
  {
    question: "Pracujete aj cez víkendy?",
    answer: "Štandardné služby poskytujeme v pracovné dni od 7:00 do 17:00. Pri havarijných situáciách sme k dispozícii 24/7 vrátane víkendov a sviatkov.",
  },
];

export default function OpravaPotrabiaPage() {
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
              "Oprava potrubia",
              "Oprava vodovodného potrubia Bratislava",
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
      <OpravaPotrabiaContent />
    </>
  );
}

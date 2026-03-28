import type { Metadata } from "next";
import {
  localBusinessSchema,
  makeServiceSchema,
  makeFaqSchema,
  makeBreadcrumbSchema,
} from "@/lib/structured-data";
import OpravaKureniaContent from "./oprava-kurenia-content";

export const metadata: Metadata = {
  title: "Oprava a výmena radiátorov Bratislava | Kúrenár | Dobrý Vodár",
  description:
    "Montáž, výmena a oprava radiátorov v Bratislave. Odvzdušnenie, oprava ventilov a kúrenárske práce. Rýchly výjazd. Volajte 0944 562 059.",
  keywords:
    "výmena radiátora, oprava kúrenia, tečúci radiátor, montáž radiátorov, kúrenár bratislava, odvzdušnenie radiátorov",
  alternates: { canonical: "https://dobryvodar.sk/oprava-kurenia" },
  openGraph: {
    title: "Oprava a výmena radiátorov Bratislava | Kúrenár | Dobrý Vodár",
    description:
      "Montáž, výmena a oprava radiátorov v Bratislave. Odvzdušnenie, oprava ventilov a kúrenárske práce. Rýchly výjazd. Volajte 0944 562 059.",
    url: "https://dobryvodar.sk/oprava-kurenia",
  },
};

const breadcrumbs = [
  { name: "Domov", url: "https://dobryvodar.sk" },
  { name: "Oprava a výmena radiátorov", url: "https://dobryvodar.sk/oprava-kurenia" },
];

const pageFaqs = [
  {
    question: "Kedy je najlepšie vymeniť radiátory?",
    answer: "Ideálny čas na výmenu radiátorov je mimo vykurovacej sezóny, od mája do septembra. V prípade havárie však vieme radiátor vymeniť kedykoľvek.",
  },
  {
    question: "Aké radiátory odporúčate?",
    answer: "Pre väčšinu domácností odporúčame panelové oceľové radiátory – majú výborný pomer výkonu a ceny. Poradíme vám podľa veľkosti miestnosti.",
  },
  {
    question: "Koľko stojí výmena radiátora?",
    answer: "Bežná výmena panelového radiátora sa pohybuje od 80 do 200 € bez ceny radiátora. Presnú cenu oznámime po obhliadke.",
  },
  {
    question: "Pracujete aj počas vykurovacej sezóny?",
    answer: "Áno, pracujeme celoročne. Počas sezóny riešime najmä havarijné opravy. Výmenu radiátorov odporúčame plánovať na letné mesiace.",
  },
];

export default function OpravaKureniaPage() {
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
              "Oprava kúrenia",
              "Oprava a výmena radiátorov Bratislava",
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
      <OpravaKureniaContent />
    </>
  );
}

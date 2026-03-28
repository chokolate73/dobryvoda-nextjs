import type { Metadata } from "next";
import {
  localBusinessSchema,
  makeServiceSchema,
  makeFaqSchema,
  makeBreadcrumbSchema,
} from "@/lib/structured-data";
import KrtkovanieContent from "./krtkovanie-content";

export const metadata: Metadata = {
  title: "Krtkovanie Bratislava | Čistenie odpadov 24/7 | Dobrý Vodár",
  description:
    "Profesionálne krtkovanie a čistenie upchatých odpadov v Bratislave. Moderná technika Ridgid FlexShaft, výjazd do 60 min. Volajte 0944 562 059.",
  keywords:
    "krtkovanie, krtkovanie bratislava, čistenie odpadov, upchatý odpad, upchatý drez, čistenie potrubia, krtkovanie cena",
  alternates: { canonical: "https://dobryvodar.sk/krtkovanie" },
  openGraph: {
    title: "Krtkovanie Bratislava | Čistenie odpadov 24/7 | Dobrý Vodár",
    description:
      "Profesionálne krtkovanie a čistenie upchatých odpadov v Bratislave. Moderná technika Ridgid FlexShaft, výjazd do 60 min. Volajte 0944 562 059.",
    url: "https://dobryvodar.sk/krtkovanie",
  },
};

const breadcrumbs = [
  { name: "Domov", url: "https://dobryvodar.sk" },
  { name: "Krtkovanie", url: "https://dobryvodar.sk/krtkovanie" },
];

const pageFaqs = [
  {
    question: "Koľko stojí krtkovanie?",
    answer:
      "Cena závisí od typu upchatia a prístupu k potrubiu. Orientačnú cenu vám povieme už pri telefonáte. Bez skrytých poplatkov.",
  },
  {
    question: "Ako rýchlo prídete?",
    answer:
      "V Bratislave sme u vás do 60 minút od zavolania. Službu poskytujeme aj cez víkendy a sviatky.",
  },
  {
    question: "Pomôže mi krtkovanie, ak mám starý dom s liatinovým potrubím?",
    answer:
      "Áno, naša technika je šetrná aj k starším materiálom vrátane liatinového a keramického potrubia.",
  },
  {
    question: "Robíte aj preventívne čistenie?",
    answer:
      "Áno, odporúčame preventívne krtkovanie raz za 1-2 roky, najmä v starších bytoch a domoch s veľkým zaťažením kanalizácie.",
  },
  {
    question: "Čistíte aj firemné a reštauračné prevádzky?",
    answer:
      "Áno, poskytujeme krtkovanie pre domácnosti aj firmy. Pre reštaurácie a kaviarne ponúkame aj pravidelný servis.",
  },
];

export default function KrtkovaniePage() {
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
              "Krtkovanie",
              "Krtkovanie a čistenie upchatých odpadov Bratislava",
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
      <KrtkovanieContent />
    </>
  );
}

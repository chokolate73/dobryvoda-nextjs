// Slovak translations used for server-side metadata generation
// This is the source of truth for SEO metadata on each service page

export const seoData: Record<
  string,
  { title: string; description: string; keywords: string; slug: string }
> = {
  siphon: {
    slug: "vymena-sifonu",
    title: "Výmena sifónu Bratislava | Oprava & Montáž | Dobrý Vodár",
    description:
      "Profesionálna výmena sifónu v kuchyni, kúpeľni a WC. Riešime pretekanie, zápach a upchaté sifóny. Rýchly výjazd v Bratislave. Volajte 0944 562 059.",
    keywords:
      "výmena sifónu, oprava sifónu, montáž sifónu, sifón umývadlo, sifón vaňa, pretekajúci sifón, vodoinštalatér bratislava",
  },
  wc: {
    slug: "oprava-wc",
    title: "Oprava a montáž WC Bratislava | Pretekajúce WC | Dobrý Vodár",
    description:
      "Rýchla oprava pretekajúceho WC, výmena splachovača a montáž nových toaliet v Bratislave. Geberit servis. Volajte ihneď.",
    keywords:
      "oprava wc bratislava, pretekajúce wc, výmena záchoda, montáž geberit, inštalatér wc",
  },
  faucet: {
    slug: "montaz-baterie",
    title: "Výmena a montáž batérie Bratislava | Kúpeľňa & Kuchyňa",
    description:
      "Odborná montáž a výmena vodovodných batérií. Oprava kvapkajúcich kohútikov v kuchyni a kúpeľni. Profesionálny prístup.",
    keywords:
      "výmena batérie, montáž vodovodnej batérie, kvapkajúci kohútik, inštalácia batérie bratislava",
  },
  pipe: {
    slug: "oprava-potrubia",
    title: "Oprava prasknutého potrubia Bratislava | Únik vody",
    description:
      "Havarijná oprava vodovodného potrubia. Lokalizácia a odstránenie úniku vody. Rýchly výjazd v celej Bratislave.",
    keywords:
      "oprava potrubia, prasknuté potrubie, únik vody bratislava, havarijná služba voda, inštalatér potrubie",
  },
  shower: {
    slug: "montaz-sprchy",
    title: "Montáž sprchového kúta Bratislava | Inštalácia sanity",
    description:
      "Profesionálna montáž sprchových kútov, vaničiek a zásten. Silikónovanie a utesnenie sprchy. Kvalitná práca.",
    keywords:
      "montáž sprchového kúta, inštalácia sprchy, výmena sprchovej vaničky, silikónovanie sprchy, vodár bratislava",
  },
  appliance: {
    slug: "zapojenie-spotrebicov",
    title: "Zapojenie práčky a umývačky Bratislava | Dobrý Vodár",
    description:
      "Odborné zapojenie práčky, umývačky riadu a sušičky. Úprava prívodu vody a odpadu. Pečiatka pre záruku.",
    keywords:
      "zapojenie práčky, zapojenie umývačky, inštalácia spotrebičov, pripojenie vody, vodár bratislava",
  },
  valve: {
    slug: "vymena-ventilov",
    title: "Výmena rohových ventilov Bratislava | Oprava ventilu",
    description:
      "Výmena nefunkčných a starých rohových ventilov pod umývadlom, pri WC alebo práčke. Predíďte vytopeniu.",
    keywords:
      "výmena rohového ventilu, oprava ventilu, nefunkčný ventil, vodársky ventil, poistný ventil",
  },
  sanitary: {
    slug: "montaz-sanity",
    title: "Montáž sanity Bratislava | Umývadlá, Vane, Bidety",
    description:
      "Kompletná montáž sanity do kúpeľne a kuchyne. Osadenie umývadla, vane, bidetu a kuchynského drezu.",
    keywords:
      "montáž sanity, osadenie umývadla, montáž vane, inštalácia drezu, rekonštrukcia kúpeľne",
  },
  heating: {
    slug: "oprava-kurenia",
    title: "Oprava a výmena radiátorov Bratislava | Kúrenár",
    description:
      "Montáž, výmena a oprava radiátorov. Riešenie tečúcich ventilov a odvzdušnenie systému. Kúrenárske práce.",
    keywords:
      "výmena radiátora, oprava kúrenia, tečúci radiátor, montáž radiátorov, kúrenár bratislava",
  },
  boiler: {
    slug: "montaz-bojleru",
    title: "Montáž a výmena bojlerov Bratislava | Servis",
    description:
      "Profesionálna výmena elektrických bojlerov. Zapojenie vody a elektriny, uvedenie do prevádzky. Odvoz starého bojlera.",
    keywords:
      "výmena bojlera, montáž bojlera, elektrický bojler, zapojenie ohrievača vody, servis bojlerov",
  },
  pipes: {
    slug: "vymena-rozvodov",
    title: "Výmena rozvodov vody Bratislava | Rekonštrukcia bytov",
    description:
      "Kompletná výmena vodovodných a odpadových rozvodov v bytoch a domoch. Rekonštrukcia stúpačiek a inštalácií.",
    keywords:
      "výmena rozvodov vody, rekonštrukcia vody, nové potrubie, inštalatérske práce, voda odpad plyn",
  },
};

// Image mapping for each service page
export const serviceImages: Record<string, string> = {
  siphon: "/images/work-4.jpg",
  wc: "/images/work-4.jpg",
  faucet: "/images/work-6.jpg",
  pipe: "/images/work-2.jpg",
  shower: "/images/work-1.jpg",
  appliance: "/images/work-3.jpg",
  valve: "/images/work-5.jpg",
  sanitary: "/images/work-6.jpg",
  heating: "/images/work-3.jpg",
  boiler: "/images/work-1.jpg",
  pipes: "/images/work-4.jpg",
};

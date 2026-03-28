// Slovak translations used for server-side metadata generation
// This is the source of truth for SEO metadata on each service page
// Title: 50-60 chars | Description: 150-160 chars

export const seoData: Record<
  string,
  { title: string; description: string; keywords: string; slug: string }
> = {
  siphon: {
    slug: "vymena-sifonu",
    // 57 chars
    title: "Výmena sifónu Bratislava | Oprava & Montáž | Dobrý Vodár",
    // 151 chars
    description:
      "Profesionálna výmena sifónu v kuchyni, kúpeľni a WC. Riešime pretekanie, zápach a upchaté sifóny. Rýchly výjazd v Bratislave. Volajte 0944 562 059.",
    keywords:
      "výmena sifónu, oprava sifónu, montáž sifónu, sifón umývadlo, sifón vaňa, pretekajúci sifón, vodoinštalatér bratislava",
  },
  wc: {
    slug: "oprava-wc",
    // 56 chars
    title: "Oprava WC Bratislava | Pretekajúce WC | Dobrý Vodár",
    // 155 chars
    description:
      "Rýchla oprava pretekajúceho WC, výmena splachovača a montáž nových toaliet v Bratislave. Geberit servis. Rýchly výjazd, férové ceny. Volajte 0944 562 059.",
    keywords:
      "oprava wc bratislava, pretekajúce wc, výmena záchoda, montáž geberit, inštalatér wc",
  },
  faucet: {
    slug: "montaz-baterie",
    // 56 chars
    title: "Výmena a montáž batérie Bratislava | Kúpeľňa & Kuchyňa",
    // 155 chars
    description:
      "Odborná montáž a výmena vodovodných batérií v Bratislave. Oprava kvapkajúcich kohútikov v kuchyni a kúpeľni. Profesionálny prístup. Volajte 0944 562 059.",
    keywords:
      "výmena batérie, montáž vodovodnej batérie, kvapkajúci kohútik, inštalácia batérie bratislava",
  },
  pipe: {
    slug: "oprava-potrubia",
    // 55 chars
    title: "Oprava potrubia Bratislava | Únik vody | Dobrý Vodár",
    // 155 chars
    description:
      "Havarijná oprava vodovodného potrubia v Bratislave. Lokalizácia a odstránenie úniku vody. Rýchly výjazd do 60 minút. Pohotovosť 24/7. Volajte 0944 562 059.",
    keywords:
      "oprava potrubia, prasknuté potrubie, únik vody bratislava, havarijná služba voda, inštalatér potrubie",
  },
  shower: {
    slug: "montaz-sprchy",
    // 59 chars
    title: "Montáž sprchového kúta Bratislava | Inštalácia | Dobrý Vodár",
    // 153 chars
    description:
      "Profesionálna montáž sprchových kútov, vaničiek a zásten v Bratislave. Silikónovanie a utesnenie sprchy. Kvalitná práca, férové ceny. Volajte 0944 562 059.",
    keywords:
      "montáž sprchového kúta, inštalácia sprchy, výmena sprchovej vaničky, silikónovanie sprchy, vodár bratislava",
  },
  appliance: {
    slug: "zapojenie-spotrebicov",
    // 56 chars
    title: "Zapojenie práčky a umývačky Bratislava | Dobrý Vodár",
    // 152 chars
    description:
      "Odborné zapojenie práčky, umývačky riadu a sušičky v Bratislave. Úprava prívodu vody a odpadu. Pečiatka pre záruku. Rýchly servis. Volajte 0944 562 059.",
    keywords:
      "zapojenie práčky, zapojenie umývačky, inštalácia spotrebičov, pripojenie vody, vodár bratislava",
  },
  valve: {
    slug: "vymena-ventilov",
    // 55 chars
    title: "Výmena ventilov Bratislava | Oprava ventilu | Dobrý Vodár",
    // 152 chars
    description:
      "Výmena nefunkčných a starých rohových ventilov pod umývadlom, pri WC alebo práčke v Bratislave. Predíďte vytopeniu. Rýchly výjazd. Volajte 0944 562 059.",
    keywords:
      "výmena rohového ventilu, oprava ventilu, nefunkčný ventil, vodársky ventil, poistný ventil",
  },
  sanitary: {
    slug: "montaz-sanity",
    // 56 chars
    title: "Montáž sanity Bratislava | Umývadlá, Vane | Dobrý Vodár",
    // 154 chars
    description:
      "Kompletná montáž sanity do kúpeľne a kuchyne v Bratislave. Osadenie umývadla, vane, bidetu a kuchynského drezu. Profesionálna práca. Volajte 0944 562 059.",
    keywords:
      "montáž sanity, osadenie umývadla, montáž vane, inštalácia drezu, rekonštrukcia kúpeľne",
  },
  heating: {
    slug: "oprava-kurenia",
    // 57 chars
    title: "Oprava a výmena radiátorov Bratislava | Kúrenár | Dobrý Vodár",
    // 153 chars
    description:
      "Montáž, výmena a oprava radiátorov v Bratislave. Riešenie tečúcich ventilov a odvzdušnenie systému. Kúrenárske práce s garanciou. Volajte 0944 562 059.",
    keywords:
      "výmena radiátora, oprava kúrenia, tečúci radiátor, montáž radiátorov, kúrenár bratislava",
  },
  boiler: {
    slug: "montaz-bojleru",
    // 55 chars
    title: "Montáž a výmena bojlerov Bratislava | Servis | Dobrý Vodár",
    // 153 chars
    description:
      "Profesionálna výmena elektrických bojlerov v Bratislave. Zapojenie vody a elektriny, uvedenie do prevádzky. Odvoz starého bojlera. Volajte 0944 562 059.",
    keywords:
      "výmena bojlera, montáž bojlera, elektrický bojler, zapojenie ohrievača vody, servis bojlerov",
  },
  pipes: {
    slug: "vymena-rozvodov",
    // 58 chars
    title: "Výmena rozvodov vody Bratislava | Rekonštrukcia | Dobrý Vodár",
    // 155 chars
    description:
      "Kompletná výmena vodovodných a odpadových rozvodov v bytoch a domoch v Bratislave. Rekonštrukcia stúpačiek a inštalácií. Férové ceny. Volajte 0944 562 059.",
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

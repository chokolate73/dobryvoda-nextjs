import { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Menu, X, CheckCircle2, MapPin, Clock, Shield, Zap, Star, Wrench, ChevronRight, Droplets, Home, Building, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SeoHead from "@/components/SeoHead";
import logoImage from "@/assets/logo-new.png";

const Kanalizacia = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const navLinks = [
    { href: "/", label: "Domov" },
    { href: "#technologia", label: "Technológia" },
    { href: "#sluzby", label: "Služby" },
    { href: "#oblast", label: "Oblasť" },
    { href: "#kontakt", label: "Kontakt" },
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Šetrné k potrubiu",
      description: "Na rozdiel od vysokotlakového čistenia, FlexShaft nepoškodzuje potrubie a je bezpečný aj pre staršie rozvody."
    },
    {
      icon: Sparkles,
      title: "Dokonalé vyčistenie",
      description: "Reťazové hlavice čistia celý priemer potrubia od steny k stene, odstraňujú usadeniny, korene aj tuky."
    },
    {
      icon: Home,
      title: "Čistá práca",
      description: "Kábel je uzavretý v ochrannom puzdre – žiadne špinenie interiéru, žiadny neporiadok vo vašom dome."
    }
  ];

  const services = [
    {
      icon: Droplets,
      title: "Kuchynské drezy",
      description: "Odstránenie tukov, zvyškov jedla a usadenín"
    },
    {
      icon: Home,
      title: "Odtoky v kúpeľni",
      description: "Čistenie umývadiel, vaní a sprchových kútov"
    },
    {
      icon: Building,
      title: "Hlavná kanalizácia",
      description: "Profesionálne čistenie hlavných odpadových potrubí"
    },
    {
      icon: Wrench,
      title: "Odstránenie vodného kameňa",
      description: "Efektívne odstránenie minerálnych usadenín a tukov"
    }
  ];

  const areas = [
    "Staré Mesto", "Ružinov", "Nové Mesto", "Petržalka", "Dúbravka",
    "Karlova Ves", "Rača", "Vajnory", "Devín", "Devínska Nová Ves",
    "Záhorská Bystrica", "Lamač", "Podunajské Biskupice", "Vrakuňa", "Čunovo"
  ];

  const trustPoints = [
    { icon: Zap, title: "Rýchly výjazd", description: "Do 60 minút v Bratislave" },
    { icon: Shield, title: "Férové ceny", description: "Bez skrytých poplatkov" },
    { icon: Star, title: "Profesionálny prístup", description: "Skúsení technici" }
  ];

  const reviews = [
    {
      name: "Ján M.",
      location: "Petržalka",
      text: "Upchatá kanalizácia v kúpeľni vyriešená za hodinu. Profesionálny prístup, čistá práca. Odporúčam!"
    },
    {
      name: "Mária K.",
      location: "Ružinov",
      text: "Výborná služba. Prišli rýchlo, vyčistili odpad v kuchyni a všetko fungovalo ako nové."
    },
    {
      name: "Peter S.",
      location: "Staré Mesto",
      text: "Profesionálne krtkovanie za rozumnú cenu. Moderne vybavení a skúsený technik."
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <SeoHead 
        title="Krtkovanie a Čistenie Kanalizácie Bratislava | Ridgid FlexShaft"
        description="Profesionálne krtkovanie a čistenie kanalizácie v Bratislave. Najnovšia technológia Ridgid FlexShaft K9-102. Rýchly výjazd, férové ceny. Volajte 0944 562 059."
        keywords="krtkovanie, čistenie kanalizácie, upchatý odpad, profesionálne čistenie potrubia, krtkovanie bratislava, ridgid flexshaft"
      />

      {/* Sticky Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img src={logoImage} alt="Dobrý Vodár" className="h-10 md:h-12" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-slate-700 hover:text-blue-600 font-medium transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="flex items-center gap-4">
              <Button 
                size="lg" 
                className="hidden sm:flex bg-red-600 hover:bg-red-700 text-white font-bold"
                asChild
              >
                <a href="tel:+421944562059">
                  <Phone className="mr-2 h-5 w-5" />
                  Zavolajte nám
                </a>
              </Button>

              {/* Mobile Menu Toggle */}
              <button
                className="md:hidden p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden py-4 border-t border-slate-200">
              <div className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-slate-700 hover:text-blue-600 font-medium py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <Button 
                  className="mt-2 bg-red-600 hover:bg-red-700 text-white font-bold"
                  asChild
                >
                  <a href="tel:+421944562059">
                    <Phone className="mr-2 h-5 w-5" />
                    Zavolajte nám
                  </a>
                </Button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230066cc' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Wrench className="h-4 w-4" />
              Profesionálne služby v Bratislave
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Efektívne <span className="text-blue-600">Krtkovanie</span> a{" "}
              <span className="text-blue-600">Čistenie Kanalizácie</span> v Bratislave
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Najnovšia technológia <strong className="text-red-600">Ridgid FlexShaft K9-102</strong>. 
              Čistíme potrubia od steny k stene, rýchlo a bezpečne.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-8 py-6"
                asChild
              >
                <a href="tel:+421944562059">
                  <Phone className="mr-2 h-5 w-5" />
                  Objednať krtkovanie
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold text-lg px-8 py-6"
                asChild
              >
                <a href="#technologia">
                  Viac informácií
                  <ChevronRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-8 mt-12 text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                <span>Výjazd do 60 min</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                <span>Férové ceny</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                <span>Záruka na prácu</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technologia" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-red-600 font-semibold tracking-wider uppercase text-sm mb-4 block">
              Naša technológia
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Prečo <span className="text-red-600">Ridgid FlexShaft K9-102</span>?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Používame najmodernejšiu technológiu na trhu pre dokonalé vyčistenie vašej kanalizácie.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-2 border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{benefit.title}</h3>
                  <p className="text-slate-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Technology Highlight Box */}
          <div className="mt-12 max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                  <Wrench className="h-10 w-10" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Ridgid FlexShaft K9-102</h3>
                <p className="text-blue-100">
                  Profesionálny stroj na čistenie potrubia s priemerom 32-100mm. 
                  Flexibilný kábel s rotujúcou reťazovou hlavicou odstraňuje aj tie najodolnejšie usadeniny.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="sluzby" className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-4 block">
              Naše služby
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Čo pre vás môžeme vyčistiť?
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="bg-white hover:shadow-xl transition-all group cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-blue-50 group-hover:bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4 transition-colors">
                    <service.icon className="h-7 w-7 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-sm text-slate-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section id="oblast" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-4 block">
                Oblasť pôsobenia
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Bratislava I - V a okolie
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Poskytujeme služby v celej Bratislave a blízkom okolí. 
                Rýchly výjazd zabezpečíme do všetkých mestských častí.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {areas.map((area, index) => (
                  <span 
                    key={index} 
                    className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full text-sm font-medium"
                  >
                    <MapPin className="h-3 w-3" />
                    {area}
                  </span>
                ))}
              </div>

              <Button 
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white font-bold"
                asChild
              >
                <a href="tel:+421944562059">
                  <Phone className="mr-2 h-5 w-5" />
                  0944 562 059
                </a>
              </Button>
            </div>

            {/* Map Placeholder */}
            <div className="bg-slate-100 rounded-2xl overflow-hidden h-[400px] flex items-center justify-center border-2 border-slate-200">
              <div className="text-center p-8">
                <MapPin className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <p className="text-slate-600 font-medium">Oblasť pôsobenia</p>
                <p className="text-2xl font-bold text-slate-900">Bratislava a okolie</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 md:py-24 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Prečo si vybrať nás?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            {trustPoints.map((point, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <point.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">{point.title}</h3>
                <p className="text-blue-100">{point.description}</p>
              </div>
            ))}
          </div>

          {/* Reviews */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-white/90 mb-4 italic">"{review.text}"</p>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-bold">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold">{review.name}</p>
                      <p className="text-sm text-blue-200">{review.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Emergency Footer */}
      <section id="kontakt" className="py-16 md:py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Potrebujete <span className="text-red-500">krtkovanie</span>?
              </h2>
              <p className="text-lg text-slate-300 mb-8">
                Zavolajte nám a vyriešime váš problém s kanalizáciou rýchlo a profesionálne.
              </p>

              <a 
                href="tel:+421944562059"
                className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white text-2xl md:text-3xl font-bold px-8 py-4 rounded-xl transition-colors mb-8"
              >
                <Phone className="h-8 w-8" />
                0944 562 059
              </a>

              <div className="space-y-4 text-slate-300">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-blue-400" />
                  <span>Pracovná doba: PON - PIA 7:00 - 17:00</span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="h-5 w-5 text-yellow-400" />
                  <span>Havárie: 24/7</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-green-400" />
                  <span>Bratislava a okolie</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-slate-800 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-bold mb-6">Napíšte nám</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    placeholder="Vaše meno"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    placeholder="Telefónne číslo"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Opíšte váš problém..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold"
                >
                  Odoslať správu
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="bg-slate-950 text-slate-400 py-6">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Dobrý Vodár. Všetky práva vyhradené.</p>
        </div>
      </footer>

      {/* Floating Phone Button (Mobile) */}
      <a
        href="tel:+421944562059"
        className="fixed bottom-4 right-4 sm:hidden z-50 bg-red-600 hover:bg-red-700 text-white p-4 rounded-full shadow-lg animate-pulse"
      >
        <Phone className="h-6 w-6" />
      </a>
    </main>
  );
};

export default Kanalizacia;

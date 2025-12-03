import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground py-16">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img src={logo} alt="DobryVodar" className="h-16 w-auto mb-4 brightness-0 invert" />
            <p className="text-primary-foreground/70 leading-relaxed">
              Profesionálne vodoinštalačné služby pre váš domov a firmu. Spoľahlivosť a kvalita na prvom mieste.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Rýchle odkazy</h4>
            <ul className="space-y-3">
              {[
                { name: "Domov", href: "#domov" },
                { name: "Služby", href: "#sluzby" },
                { name: "Prečo my", href: "#preco-my" },
                { name: "Referencie", href: "#referencie" },
                { name: "Kontakt", href: "#kontakt" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Služby</h4>
            <ul className="space-y-3">
              {[
                "Opravy potrubí",
                "Inštalácia sanity",
                "Čistenie odpadov",
                "Vykurovanie",
                "Pohotovostná služba",
              ].map((service) => (
                <li key={service}>
                  <span className="text-primary-foreground/70">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Kontakt</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+421900123456"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  <Phone className="h-5 w-5 flex-shrink-0" />
                  +421 900 123 456
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@dobryvodar.sk"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  <Mail className="h-5 w-5 flex-shrink-0" />
                  info@dobryvodar.sk
                </a>
              </li>
              <li>
                <div className="flex items-center gap-3 text-primary-foreground/70">
                  <MapPin className="h-5 w-5 flex-shrink-0" />
                  Bratislava a okolie
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {currentYear} DobryVodar. Všetky práva vyhradené.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

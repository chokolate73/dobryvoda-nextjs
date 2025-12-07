import { Phone, MapPin, Clock } from "lucide-react";
import logo from "@/assets/logo-new.png";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  const quickLinks = [
    { name: t("nav.home"), href: "#domov" },
    { name: t("nav.services"), href: "#sluzby" },
    { name: t("nav.work"), href: "#prace" },
    { name: t("nav.references"), href: "#referencie" },
    { name: t("nav.contact"), href: "#kontakt" },
  ];

  const services = [
    t("footer.service.1"),
    t("footer.service.2"),
    t("footer.service.3"),
    t("footer.service.4"),
    t("footer.service.5"),
    t("footer.service.6"),
  ];

  return (
    <footer className="bg-foreground text-primary-foreground py-16">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img src={logo} alt="Dobrý vodár" className="h-20 w-auto mb-4" />
            <p className="text-primary-foreground/70 leading-relaxed">
              {t("footer.description")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">{t("footer.quickLinks")}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
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
            <h4 className="font-display font-bold text-lg mb-4">{t("footer.services")}</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-primary-foreground/70">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">{t("footer.contact")}</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+421944562059"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  <Phone className="h-5 w-5 flex-shrink-0" />
                  0944 562 059 (WhatsApp)
                </a>
              </li>
              <li>
                <div className="flex items-center gap-3 text-primary-foreground/70">
                  <Clock className="h-5 w-5 flex-shrink-0" />
                  <div>
                    <div>{t("footer.hours")}</div>
                    <div className="text-sm">{t("footer.emergency")}</div>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-3 text-primary-foreground/70">
                  <MapPin className="h-5 w-5 flex-shrink-0" />
                  {t("contact.info.area.value")}
                </div>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.facebook.com/share/1BoTNz1Rhw/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/vodoinstalater_ba"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/20 text-center space-y-2">
          <p className="text-primary-foreground/60 text-sm">
            © {currentYear} Dobrý vodár. {t("footer.copyright")}
          </p>
          <p className="text-primary-foreground/40 text-xs">
            Made by{" "}
            <a
              href="https://umka.lol/en"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-foreground transition-colors underline"
            >
              /umka
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

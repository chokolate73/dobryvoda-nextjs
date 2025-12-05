import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MapPin, Send, Clock, MessageCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Správa odoslaná!",
      description: "Ďakujeme za vašu správu. Čoskoro vás budeme kontaktovať.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Telefón (WhatsApp)",
      value: "0944 520 590",
      href: "tel:+421944520590",
    },
    {
      icon: Clock,
      label: "Bežné práce",
      value: "PON-PIA 7:00 - 17:00",
      href: "#",
    },
    {
      icon: MessageCircle,
      label: "Havarijné výjazdy",
      value: "24/7",
      href: "tel:+421944520590",
    },
    {
      icon: MapPin,
      label: "Oblasť pôsobenia",
      value: "Bratislava a okolie",
      href: "#",
    },
  ];

  return (
    <section id="kontakt" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-3 block">
            Kontaktujte nás
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Objednajte si
            <span className="text-gradient"> termín ešte dnes</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Máte problém s vodoinštaláciou? Kontaktujte nás a my vám pomôžeme.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          {/* Form */}
          <div className="bg-card rounded-2xl p-8 card-shadow animate-fade-in h-full flex flex-col">
            <h3 className="font-display text-2xl font-bold text-foreground mb-6">
              Napíšte nám
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5 flex-1 flex flex-col">
              <div>
                <Input
                  placeholder="Vaše meno"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="h-12"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  type="email"
                  placeholder="Váš email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="h-12"
                />
                <Input
                  type="tel"
                  placeholder="Telefónne číslo"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="h-12"
                />
              </div>
              <Textarea
                placeholder="Opíšte váš problém alebo požiadavku..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={4}
                className="resize-none flex-1 min-h-[100px]"
              />
              <Button type="submit" variant="hero" size="lg" className="w-full group mt-auto">
                Odoslať správu
                <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            {contactInfo.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-4 p-5 bg-card rounded-xl border border-border hover:border-primary/30 hover:card-shadow transition-all duration-300"
              >
                <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">{item.label}</div>
                  <div className="font-bold text-lg text-foreground">{item.value}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

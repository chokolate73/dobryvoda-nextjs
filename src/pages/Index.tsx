import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import OurWorkSection from "@/components/OurWorkSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import FloatingPhoneButton from "@/components/FloatingPhoneButton";
import SeoHead from "@/components/SeoHead";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { t } = useLanguage();

  // FAQ data for structured data
  const faqs = [
    { question: t("faq.1.question"), answer: t("faq.1.answer") },
    { question: t("faq.2.question"), answer: t("faq.2.answer") },
    { question: t("faq.3.question"), answer: t("faq.3.answer") },
    { question: t("faq.4.question"), answer: t("faq.4.answer") },
    { question: t("faq.5.question"), answer: t("faq.5.answer") },
  ];

  return (
    <main className="min-h-screen">
      <SeoHead faqs={faqs} />
      <Navbar />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <OurWorkSection />
      <TestimonialsSection />
      <ContactSection />
      <FAQSection />
      <Footer />
      <FloatingPhoneButton />
    </main>
  );
};

export default Index;

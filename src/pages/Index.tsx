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

const Index = () => {
  return (
    <main className="min-h-screen">
      <SeoHead />
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

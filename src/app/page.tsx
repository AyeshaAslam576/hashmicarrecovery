import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ServiceAreas from "@/components/ServiceAreas";
import HowItWorks from "@/components/HowItWorks";
import WhyChooseUs from "@/components/WhyChooseUs";
import ContactSection from "@/components/ContactSection";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";
import StickyMobileBar from "@/components/StickyMobileBar";
import WhatsAppFAB from "@/components/WhatsAppFAB";

export default function Home() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <ServiceAreas />
        <HowItWorks />
        <WhyChooseUs />
        <ContactSection />
        <CtaBanner />
      </main>
      <Footer />
      <StickyMobileBar />
      <WhatsAppFAB />
    </>
  );
}

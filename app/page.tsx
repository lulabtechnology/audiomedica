import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import ProductsSection from "@/components/ProductsSection";
import WhyUsSection from "@/components/WhyUsSection";
import ProcessSection from "@/components/ProcessSection";
import HearingTestSection from "@/components/HearingTestSection";
import ImportantInfoSection from "@/components/ImportantInfoSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />

        <section id="servicios" className="py-14 md:py-20">
          <ServicesSection />
        </section>

        <section id="equipos" className="py-14 md:py-20">
          <ProductsSection />
        </section>

        <section id="nosotros" className="py-14 md:py-20">
          <WhyUsSection />
        </section>

        <section id="proceso" className="py-14 md:py-20">
          <ProcessSection />
        </section>

        <section id="chequeo" className="py-14 md:py-20">
          <HearingTestSection />
        </section>

        <section id="info-importante" className="py-14 md:py-20">
          <ImportantInfoSection />
        </section>

        <section id="contacto" className="py-16 md:py-24">
          <ContactSection />
        </section>
      </main>
      <Footer />
    </div>
  );
}

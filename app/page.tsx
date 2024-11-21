import AboutSection from "@/components/about";
import ContactSection from "@/components/contact";
import HeroSection from "@/components/hero";
import ServicesSection from "@/components/services";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}

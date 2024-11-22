import AboutSection from "@/components/about";
import ContactSection from "@/components/contact";
import HeroSection from "@/components/hero";
import ServiceSection from "@/components/service";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <HeroSection />
      <ServiceSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}

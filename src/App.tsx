import { LangProvider } from "./i18n/LangContext";
import HeroSection from "./sections/HeroSection";
import MarqueeSection from "./sections/MarqueeSection";
import AboutSection from "./sections/AboutSection";
import ServicesSection from "./sections/ServicesSection";
import ProjectsSection from "./sections/ProjectsSection";
import ContactSection from "./sections/ContactSection";
import FloatingContact from "./components/FloatingContact";

export default function App() {
  return (
    <LangProvider>
      <div className="bg-ink font-kanit" style={{ overflowX: "clip" }}>
        <HeroSection />
        <MarqueeSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <ContactSection />
        <FloatingContact />
      </div>
    </LangProvider>
  );
}

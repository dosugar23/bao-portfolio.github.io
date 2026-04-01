import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh] w-full overflow-x-hidden">
      <Navbar />
      <main className="flex-grow w-full">
        <HeroSection />
        <AboutSection />
        <PortfolioSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <footer className="bg-foreground text-background py-8 text-center" data-testid="footer">
        <p className="text-sm opacity-80">© {new Date().getFullYear()} Bao Nguyen. Stay safe and have a great day!</p>
      </footer>
    </div>
  );
}

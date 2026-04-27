import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Experience", href: "#experience" },
  { name: "Personal", href: "#personal-projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      const navHeight = 80; // approximate nav height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b shadow-sm py-3" : "bg-transparent py-5"
      }`}
      data-testid="navbar"
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <a 
          href="#home" 
          onClick={(e) => scrollToSection(e, "#home")}
          className="text-2xl font-bold tracking-tight text-foreground"
          data-testid="link-logo"
        >
          Bao<span className="text-primary">.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              data-testid={`link-nav-${item.name.toLowerCase()}`}
            >
              {item.name}
            </a>
          ))}
          <Button 
            onClick={(e) => scrollToSection(e as any, "#contact")}
            className="rounded-full px-6 bg-foreground text-background hover:bg-primary transition-colors"
            data-testid="button-nav-cta"
          >
            Let's Talk
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-foreground p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          data-testid="button-mobile-menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b shadow-lg py-4 px-6 flex flex-col gap-4 animate-in slide-in-from-top-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="text-lg font-medium text-foreground py-2 border-b border-border/50"
              data-testid={`link-mobile-nav-${item.name.toLowerCase()}`}
            >
              {item.name}
            </a>
          ))}
          <Button 
            onClick={(e) => scrollToSection(e as any, "#contact")}
            className="w-full mt-4 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground"
            data-testid="button-mobile-nav-cta"
          >
            Let's Talk
          </Button>
        </div>
      )}
    </header>
  );
}

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import avatarImg from "@/assets/profile/ava.jpg";

export default function HeroSection() {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex flex-col justify-center pt-20 overflow-hidden"
      data-testid="section-hero"
    >
      {/* Abstract Background Shapes */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-secondary/15 blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-16 items-center">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6 border border-primary/20">
                Available for new projects
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] tracking-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Hi, I'm Bao. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
                I build communities & craft content.
              </span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Bilingual Content Marketer • Founder @ Bao AI Daily • UGC Creator
              <br className="hidden md:block" />
              6+ years growing brands in AI, Crypto, and Tech.
            </motion.p>

            <motion.div
              className="flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button
                size="lg"
                className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground h-14 px-8 text-base shadow-lg shadow-primary/25 transition-all hover:scale-105"
                onClick={() => document.getElementById("portfolio")?.scrollIntoView({behavior: 'smooth'})}
                data-testid="button-hero-portfolio"
              >
                View My Work
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full h-14 px-8 text-base border-border hover:bg-secondary/5 hover:text-secondary hover:border-secondary/30 transition-all"
                onClick={() => document.getElementById("contact")?.scrollIntoView({behavior: 'smooth'})}
                data-testid="button-hero-contact"
              >
                Contact Me
              </Button>
            </motion.div>
          </div>

          <motion.div
            className="relative mx-auto lg:mx-0 w-full max-w-[360px]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            data-testid="hero-avatar"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/40 via-secondary/30 to-accent/40 rounded-[2.5rem] blur-2xl opacity-70" />
            <div className="relative aspect-square rounded-[2rem] overflow-hidden border-4 border-background shadow-2xl ring-1 ring-primary/20">
              <img
                src={avatarImg}
                alt="Bao Nguyen portrait"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-background border border-border rounded-2xl px-4 py-3 shadow-lg flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
              </span>
              <span className="text-sm font-semibold">Open to collab</span>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.button
        type="button"
        aria-label="Scroll to about section"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer text-muted-foreground hover:text-primary transition-colors bg-transparent border-0 p-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        onClick={scrollToAbout}
        data-testid="button-scroll-down"
      >
        <span className="text-xs font-semibold tracking-widest uppercase">SCROLL</span>
        <motion.span
          className="inline-flex"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown size={20} />
        </motion.span>
      </motion.button>
    </section>
  );
}

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Speak",
    role: "Marketing Executive",
    dates: "July 2024 – Present",
    duration: "~1yr 9mo",
    description: "Handling influencer outreach, video editing, creating visual content, and conducting market research for various marketing campaigns."
  },
  {
    company: "StarMaker",
    role: "UGC Creator / UGC Actor",
    dates: "July 2025 – Present", // Based on provided data
    duration: "~9mo",
    description: "Creating short UGC videos targeted at the Vietnamese audience. Responsible for writing scripts, filming, and editing content."
  },
  {
    company: "Bao AI Daily",
    role: "Founder",
    dates: "April 2023 – Present",
    duration: "~3yrs",
    description: "Built and managed a multi-platform AI media hub across Facebook, Instagram, and TikTok. Oversaw growth, content management, and monetization through AI services. Cultivated a community of thousands."
  },
  {
    company: "Upwork",
    role: "Freelancer",
    dates: "August 2021 – Present",
    duration: "~4yr 8mo",
    description: "Maintained a proven track record delivering high-quality work across various marketing, content creation, and strategy projects."
  },
  {
    company: "LBank",
    role: "KOL, Lead Trader",
    dates: "Nov 2024 – Jan 2025",
    duration: "3mo",
    description: "Promoted exchange campaigns, driving significant trading volume and contributing to rapid copytrader growth."
  },
  {
    company: "BoostenX",
    role: "Regional Marketing Manager",
    dates: "May 2024 – Oct 2024",
    duration: "6mo",
    description: "Led influencer outreach initiatives, developed comprehensive SEO content strategies, and managed critical client communications."
  },
  {
    company: "SuperStack",
    role: "Business Growth Assistant & Sales Staff",
    dates: "2021 – 2024",
    duration: "2yr 10mo",
    description: "Handled IT recruiting, executed sales strategies, and contributed significantly to broader business development goals."
  },
  {
    company: "OmniGPT",
    role: "Business Growth Assistant / Social Media Management",
    dates: "Dec 2023 – June 2024",
    duration: "7mo",
    description: "Drove multi-channel growth across Facebook, X, Reddit, and LinkedIn. Published over 100 posts, wrote 20+ SEO blog posts, and led KOL/UGC sourcing efforts."
  },
  {
    company: "Galaxy Dance Center",
    role: "Content Creator",
    dates: "Apr 2022 – Dec 2022",
    duration: "9mo",
    description: "Produced engaging social media content specifically tailored for a vibrant dance studio audience."
  },
  {
    company: "KTS Capital",
    role: "Content Creator / Community Manager",
    dates: "Oct 2021 – Mar 2022",
    duration: "6mo",
    description: "Managed crypto and blockchain communities, moderated Telegram channels, and acted as MC for various community events."
  },
  {
    company: "Clean Hub",
    role: "Content Writer",
    dates: "Jul 2021 – Nov 2021",
    duration: "5mo",
    description: "Wrote high-quality promotional and informational content for a luxury cleaning service brand."
  },
  {
    company: "What'SUP",
    role: "Content Writer",
    dates: "Jul 2020 – Nov 2021",
    duration: "1yr 5mo",
    description: "Created compelling content for a stand-up paddleboard rental company and actively managed their Facebook community."
  },
  {
    company: "Badaboom",
    role: "Content Writer & Promoter",
    dates: "Mar 2021 – Apr 2021",
    duration: "2mo",
    description: "Developed and promoted content for beach party events, successfully attracting over 400 attendees."
  },
  {
    company: "Da Dreamer Coffee & Hostel",
    role: "Event Manager",
    dates: "Jun 2019 – Sep 2019",
    duration: "4mo",
    description: "Directed event marketing strategies that successfully grew revenue by 50% per month over a 3-month period."
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-card" data-testid="section-experience">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Professional Experience</h2>
          <div className="w-20 h-1.5 bg-accent rounded-full mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Accordion type="single" collapsible defaultValue="item-0" className="w-full space-y-4">
            {experiences.map((exp, idx) => (
              <AccordionItem 
                key={idx} 
                value={`item-${idx}`}
                className="bg-background border border-border rounded-2xl px-2 overflow-hidden data-[state=open]:border-primary/50 data-[state=open]:shadow-md transition-all"
                data-testid={`experience-item-${idx}`}
              >
                <AccordionTrigger className="hover:no-underline py-5 px-4 group">
                  <div className="flex flex-col md:flex-row md:items-center text-left w-full gap-2 md:gap-4 pr-4">
                    <div className="flex-grow">
                      <h3 className="text-lg font-bold group-hover:text-primary transition-colors flex items-center gap-2">
                        <Briefcase size={18} className="text-primary/70" />
                        {exp.company}
                      </h3>
                      <p className="text-muted-foreground font-medium">{exp.role}</p>
                    </div>
                    <div className="text-sm font-semibold bg-secondary/10 text-secondary px-3 py-1 rounded-full whitespace-nowrap w-fit">
                      {exp.dates}
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-6 pt-2 text-muted-foreground">
                  <div className="pl-6 border-l-2 border-border/50 ml-2">
                    <p className="leading-relaxed">{exp.description}</p>
                    <p className="mt-3 text-sm font-semibold text-foreground/60">Duration: {exp.duration}</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}

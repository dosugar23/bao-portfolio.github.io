import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Briefcase, Image as ImageIcon } from "lucide-react";
import { experiences, type MediaItem } from "@/data/experience";

function MediaGallery({ media, company }: { media: MediaItem[]; company: string }) {
  if (media.length === 0) {
    return (
      <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground/70 italic">
        <ImageIcon size={14} />
        <span>No media available for this role yet.</span>
      </div>
    );
  }

  return (
    <div className="mt-6">
      <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
        Selected Work
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {media.map((item, i) => (
          <div
            key={i}
            className="group relative aspect-square overflow-hidden rounded-xl bg-muted border border-border/50 hover:border-primary/40 transition-colors"
            data-testid={`media-${i}`}
          >
            {item.type === "image" ? (
              <img
                src={item.src}
                alt={`${company} work sample ${i + 1}`}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <video
                src={item.src}
                controls
                playsInline
                preload="metadata"
                className="absolute inset-0 w-full h-full object-cover bg-black"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-card" data-testid="section-experience">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
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
                key={exp.slug}
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
                    <ul className="space-y-2 leading-relaxed list-disc pl-5 marker:text-primary/60">
                      {exp.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                    <p className="mt-3 text-sm font-semibold text-foreground/60">
                      Duration: {exp.duration}
                    </p>
                    <MediaGallery media={exp.media} company={exp.company} />
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

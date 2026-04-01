import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const projects = [
  {
    title: "AI Media Hub Growth",
    description: "Built and scaled a multi-platform AI media hub across Facebook, Instagram, and TikTok. Managed content strategy and monetization, growing a highly engaged community of thousands.",
    tags: ["Community Building", "AI Tools", "Growth"],
    image: "/images/portfolio-ai.png"
  },
  {
    title: "FinTech & Crypto Campaigns",
    description: "Led trading campaigns and drove significant volume as a KOL. Managed community moderation and events for blockchain projects, ensuring high engagement and retention.",
    tags: ["Crypto", "Community Management", "KOL"],
    image: "/images/portfolio-crypto.png"
  },
  {
    title: "UGC Video Production",
    description: "Scripted, filmed, and edited short-form UGC videos tailored for the Vietnamese audience. Handled full end-to-end production including acting and CapCut editing.",
    tags: ["UGC", "Video Editing", "Acting"],
    image: "/images/portfolio-ugc.png"
  },
  {
    title: "Multi-Channel Social Strategy",
    description: "Executed growth strategies across Facebook, X, Reddit, and LinkedIn. Published 100+ engaging posts and sourced KOLs/UGC creators for major campaigns.",
    tags: ["Social Media", "Reddit Marketing", "Strategy"],
    image: "/images/portfolio-social.png"
  },
  {
    title: "SEO & Content Localization",
    description: "Crafted 20+ high-ranking SEO blog posts and localized complex technical content into native Vietnamese with speed and accuracy without losing brand voice.",
    tags: ["SEO", "Content Writing", "Localization"],
    image: "/images/portfolio-seo.png"
  },
  {
    title: "Influencer Outreach & Booking",
    description: "Gathered data, pitched, and successfully booked top influencers in Vietnam for marketing campaigns. Negotiated deliverables and tracked campaign ROI.",
    tags: ["Influencer Marketing", "Outreach", "Negotiation"],
    image: "/images/portfolio-campaign.png"
  }
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 bg-background" data-testid="section-portfolio">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:flex md:items-end md:justify-between"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Selected Work</h2>
            <div className="w-20 h-1.5 bg-secondary rounded-full"></div>
          </div>
          <p className="text-muted-foreground max-w-md mt-6 md:mt-0">
            A showcase of campaigns, content, and communities built over the last 6 years across various industries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card className="overflow-hidden h-full group border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 bg-card">
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-6 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, tagIdx) => (
                      <Badge key={tagIdx} variant="outline" className="bg-background text-xs text-foreground/70 font-medium">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

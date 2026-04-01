import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const skills = [
  "Content Marketing", "SEO", "UGC Creation", "Video Editing (CapCut)", 
  "Influencer Outreach", "Community Building", "AI Tools", "Social Media Management", 
  "Copywriting", "Translation & Localization", "Reddit Marketing", "Acting"
];

const services = [
  { title: "SEO Content & Localization", desc: "Write SEO-friendly website content and localize to Vietnamese with speed and quality." },
  { title: "Copywriting", desc: "Craft engaging blog posts, Facebook ads, and persuasive sales scripts." },
  { title: "UGC Creation", desc: "Create and edit video scripts, film, and edit as a versatile UGC creator/actor." },
  { title: "Influencer Marketing", desc: "Gather data, book influencers in Vietnam, and recruit UGC creators for campaigns." },
  { title: "AI Tool Promotion", desc: "Promote and grow AI applications leveraging dedicated communities." }
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-card" data-testid="section-about">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1.5 bg-primary rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-2xl font-semibold mb-6">The Story</h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I'm a bilingual content marketer with over 6 years of experience driving strategy in both English and Vietnamese. I blend analytical thinking from my Computer Science background with creative execution to build brands in the AI and FinTech spaces.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Having collaborated with 30+ brands and built communities of thousands from scratch, I know what it takes to capture attention and sustain engagement across platforms.
            </p>

            <h3 className="text-xl font-semibold mb-4">Core Skills</h3>
            <div className="flex flex-wrap gap-2 mb-10">
              {skills.map((skill, index) => (
                <Badge key={index} variant="secondary" className="px-3 py-1.5 text-sm font-medium bg-secondary/10 text-secondary hover:bg-secondary/20 transition-colors border-none">
                  {skill}
                </Badge>
              ))}
            </div>

            <h3 className="text-xl font-semibold mb-4">Education & Certs</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 mt-2 rounded-full bg-primary"></div>
                <div>
                  <h4 className="font-semibold">Bachelor's, Computer Science</h4>
                  <p className="text-sm text-muted-foreground">VNUK - Institute of Research and Executive Education (2018-2022)</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 mt-2 rounded-full bg-accent"></div>
                <div>
                  <h4 className="font-semibold">Marketing Thinking Certificate</h4>
                  <p className="text-sm text-muted-foreground">Markus School</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 mt-2 rounded-full bg-secondary"></div>
                <div>
                  <h4 className="font-semibold">Academic IELTS 6.0</h4>
                  <p className="text-sm text-muted-foreground">Full Professional English, Native Vietnamese</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-background rounded-3xl p-8 md:p-10 border border-border shadow-xl">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <span className="text-primary">What I Do</span>
              </h3>
              
              <div className="space-y-8">
                {services.map((service, idx) => (
                  <div key={idx} className="group">
                    <h4 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{service.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
                    {idx < services.length - 1 && <div className="h-px w-full bg-border mt-6"></div>}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

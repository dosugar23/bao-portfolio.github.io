import { motion } from "framer-motion";
import { ExternalLink, Sparkles } from "lucide-react";
import { personalProjects, type MediaItem } from "@/data/personalProjects";
import ZoomableImage from "@/components/ZoomableImage";

function YouTubeEmbed({ videoId, slug, title }: { videoId: string; slug: string; title: string }) {
  return (
    <div className="mt-6 rounded-2xl overflow-hidden border border-border/60 bg-black">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={`${title} on YouTube`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="lazy"
        className="w-full aspect-video bg-black"
        data-testid={`personal-${slug}-youtube`}
      />
    </div>
  );
}

function ProjectMedia({ media, title, slug }: { media: MediaItem[]; title: string; slug: string }) {
  if (media.length === 0) return null;

  return (
    <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
      {media.map((item, i) => (
        <div
          key={i}
          className="group relative aspect-square overflow-hidden rounded-xl bg-muted border border-border/50 hover:border-primary/40 transition-colors"
          data-testid={`personal-${slug}-media-${i}`}
        >
          {item.type === "image" ? (
            <ZoomableImage
              src={item.src}
              alt={`${title} sample ${i + 1}`}
              testId={`personal-${slug}-media-${i}-zoom`}
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
  );
}

export default function PersonalProjectsSection() {
  return (
    <section
      id="personal-projects"
      className="py-24 bg-background"
      data-testid="section-personal-projects"
    >
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20 text-xs font-semibold tracking-widest uppercase mb-4">
            <Sparkles size={14} />
            Beyond the day job
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Personal Projects</h2>
          <div className="w-20 h-1.5 bg-accent rounded-full mx-auto"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-6 leading-relaxed">
            Communities I've built, films I've been in, and side bets that keep me curious.
          </p>
        </motion.div>

        <div className="space-y-8">
          {personalProjects.map((project, idx) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-card border border-border rounded-2xl p-6 md:p-8 hover:border-primary/40 hover:shadow-md transition-all"
              data-testid={`personal-project-${project.slug}`}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground font-medium mt-1">{project.role}</p>
                </div>
                <span className="text-sm font-semibold bg-secondary/10 text-secondary px-3 py-1 rounded-full whitespace-nowrap w-fit">
                  {project.dates}
                </span>
              </div>

              <ul className="space-y-2 leading-relaxed list-disc pl-5 marker:text-primary/60 text-muted-foreground">
                {project.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>

              {project.links.length > 0 && (
                <div className="flex flex-wrap gap-3 mt-5">
                  {project.links.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80 hover:underline underline-offset-4 decoration-2 transition-colors"
                      data-testid={`personal-${project.slug}-link-${i}`}
                    >
                      <ExternalLink size={14} />
                      {link.label}
                    </a>
                  ))}
                </div>
              )}

              {project.youtubeId ? (
                <YouTubeEmbed
                  videoId={project.youtubeId}
                  slug={project.slug}
                  title={project.title}
                />
              ) : (
                <ProjectMedia media={project.media} title={project.title} slug={project.slug} />
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

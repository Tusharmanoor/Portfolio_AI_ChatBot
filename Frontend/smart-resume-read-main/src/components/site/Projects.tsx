import { Star } from "lucide-react";

import { projects } from "@/lib/profile";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  const [featured, ...rest] = projects;

  return (
    <section id="projects" className="scroll-mt-24 py-12 sm:py-16">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Projects"
          title="Featured projects"
          description="Full-stack and Generative AI work built end to end, from REST API design to LLM-powered analysis."
        />

        {featured ? (
          <Reveal className="mt-7">
            <article className="surface-card relative overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1 hover:border-coral/60 sm:p-9">
              <div
                aria-hidden
                className="pointer-events-none absolute -top-20 -right-16 h-56 w-56 rounded-full bg-coral-soft/25 blur-3xl"
              />
              <div className="relative">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-coral-soft/40 px-3 py-1 text-xs font-semibold text-ink">
                    <Star className="h-3.5 w-3.5" strokeWidth={2} />
                    Flagship project
                  </span>
                  <span className="text-xs font-medium text-muted-foreground">{featured.year}</span>
                </div>

                <h3 className="mt-5 text-2xl font-semibold text-ink sm:text-3xl">{featured.name}</h3>
                <p className="mt-2 text-[15px] text-ink/70">{featured.tagline}</p>

                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {featured.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />
                      {point}
                    </li>
                  ))}
                </ul>

                <TechList tech={featured.tech} className="mt-7" />
              </div>
            </article>
          </Reveal>
        ) : null}

        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          {rest.map((project, i) => (
            <Reveal key={project.name} delay={i * 80}>
              <article className="surface-card h-full p-6 transition-all duration-300 hover:-translate-y-1 hover:border-coral/60 sm:p-7">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-lg font-semibold text-ink">{project.name}</h3>
                  <span className="text-xs font-medium text-muted-foreground">{project.year}</span>
                </div>
                <p className="mt-1.5 text-sm text-ink/70">{project.tagline}</p>

                <ul className="mt-5 space-y-2.5">
                  {project.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-mint" />
                      {point}
                    </li>
                  ))}
                </ul>

                <TechList tech={project.tech} className="mt-6" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function TechList({ tech, className }: { tech: string[]; className?: string }) {
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {tech.map((t) => (
        <span
          key={t}
          className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-ink/75"
        >
          {t}
        </span>
      ))}
    </div>
  );
}

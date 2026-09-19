import { Boxes, Code2, Layers, Sparkles } from "lucide-react";

import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const pillars = [
  {
    Icon: Code2,
    title: "Backend focus",
    body: "Spring Boot, Spring MVC, Spring Data JPA and Hibernate, with REST APIs built on a layered controller–service–repository architecture.",
  },
  {
    Icon: Layers,
    title: "Full-stack delivery",
    body: "React.js front ends wired to Spring Boot REST APIs, secured with Spring Security and JWT over MySQL and H2 databases.",
  },
  {
    Icon: Sparkles,
    title: "Generative AI",
    body: "LLM API calling, prompt engineering, Pydantic models and structured JSON output, applied to AI resume matching with Python and FastAPI.",
  },
  {
    Icon: Boxes,
    title: "Practical projects",
    body: "Independently designed and built a recruitment platform, a resume analysis API, and this portfolio AI chatbot end to end.",
  },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-24 border-y border-border bg-mint-soft/35 py-12 sm:py-16">
      <div className="section-shell">
        <SectionHeading
          eyebrow="About"
          title="Computer Science student building production-style backends"
          description="B.Tech Computer Science student with a strong foundation in Java, Spring Boot, REST API development, MySQL, Spring Security, JWT, and Data Structures & Algorithms."
        />

        <div className="mt-7 grid gap-4 sm:grid-cols-2">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 70}>
              <article className="surface-card h-full p-6 transition-all duration-300 hover:-translate-y-1 hover:border-coral/60">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background text-ink">
                  <p.Icon className="h-5 w-5" strokeWidth={1.6} />
                </span>
                <h3 className="mt-4 text-base font-semibold text-ink">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

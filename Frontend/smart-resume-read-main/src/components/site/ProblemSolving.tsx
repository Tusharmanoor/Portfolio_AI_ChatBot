import { Award, Binary } from "lucide-react";

import { certifications, problemSolving } from "@/lib/profile";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function ProblemSolving() {
  return (
    <section className="py-12 sm:py-16">
      <div className="section-shell">
        <SectionHeading eyebrow="Problem solving" title="Data Structures & Algorithms" />

        <div className="mt-7 grid gap-4 lg:grid-cols-[1.6fr_1fr]">
          <Reveal>
            <div className="surface-card h-full p-6 sm:p-8">
              <div className="flex items-center gap-4">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-mint-soft text-ink">
                  <Binary className="h-5 w-5" strokeWidth={1.6} />
                </span>
                <div>
                  <p className="text-2xl font-semibold text-ink">
                    {problemSolving.solved}{" "}
                    <span className="text-sm font-medium text-muted-foreground">
                      problems solved on {problemSolving.platform}
                    </span>
                  </p>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {problemSolving.topics.map((topic) => (
                  <span
                    key={topic}
                    className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-ink/75"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="surface-card h-full p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-coral-soft/35 text-ink">
                  <Award className="h-4.5 w-4.5" strokeWidth={1.6} />
                </span>
                <h3 className="text-sm font-semibold text-ink">Certifications</h3>
              </div>
              <ul className="mt-5 space-y-3">
                {certifications.map((c) => (
                  <li key={c} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

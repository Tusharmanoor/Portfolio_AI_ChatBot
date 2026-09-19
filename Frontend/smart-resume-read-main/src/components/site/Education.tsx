import { GraduationCap, MapPin } from "lucide-react";

import { education } from "@/lib/profile";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Education() {
  return (
    <section className="border-y border-border bg-mint-soft/35 py-12 sm:py-16">
      <div className="section-shell">
        <SectionHeading eyebrow="Education" title="Academic background" />

        <div className="mt-7 grid gap-4 sm:grid-cols-2">
          {education.map((item, i) => (
            <Reveal key={item.school} delay={i * 80}>
              <div className="surface-card h-full p-6 transition-all duration-300 hover:-translate-y-1 hover:border-coral/60">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background text-ink">
                  <GraduationCap className="h-5 w-5" strokeWidth={1.6} />
                </span>
                <h3 className="mt-4 text-base font-semibold text-ink">{item.degree}</h3>
                <p className="mt-1 text-sm text-ink/70">{item.school}</p>
                <p className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5" strokeWidth={1.7} />
                  {item.location}
                </p>
                {item.meta ? (
                  <p className="mt-3 inline-block rounded-full bg-coral-soft/35 px-3 py-1 text-xs font-medium text-ink">
                    {item.meta}
                  </p>
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

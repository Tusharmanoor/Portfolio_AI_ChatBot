import { skillGroups } from "@/lib/profile";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 border-y border-border bg-mint-soft/35 py-12 sm:py-16"
    >
      <div className="section-shell">
        <SectionHeading
          eyebrow="Skills"
          title="Technical skills"
          description="Languages, frameworks and tools I work with day to day."
        />

        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.label} delay={i * 60}>
              <div className="surface-card h-full p-5 transition-all duration-300 hover:-translate-y-1 hover:border-coral/60">
                <h3 className="text-sm font-semibold tracking-wide text-ink">{group.label}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-border bg-background px-2.5 py-1.5 text-xs font-medium text-ink/75 transition-colors duration-200 hover:border-coral hover:text-ink"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

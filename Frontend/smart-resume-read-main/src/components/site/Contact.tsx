import { Github, Linkedin, Mail, Phone } from "lucide-react";

import { profile } from "@/lib/profile";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const channels = [
  { label: "Gmail", value: profile.email, href: `mailto:${profile.email}`, Icon: Mail },
  { label: "LinkedIn", value: "Tushar Manoor", href: profile.linkedin, Icon: Linkedin },
  { label: "GitHub", value: "Tusharmanoor", href: profile.github, Icon: Github },
  { label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}`, Icon: Phone },
];

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-12 sm:py-16">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Contact"
          title="Let's talk"
          description="Open to internship and entry-level opportunities in Java backend, full-stack and Generative AI development."
        />

        <div className="mt-7 grid gap-4 sm:grid-cols-2">
          {channels.map((c, i) => (
            <Reveal key={c.label} delay={i * 70}>
              <a
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noreferrer noopener" : undefined}
                className="surface-card group flex items-center gap-4 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-coral/60"
              >
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-mint-soft text-ink transition-colors duration-300 group-hover:bg-coral-soft/40">
                  <c.Icon className="h-5 w-5" strokeWidth={1.6} />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-medium tracking-wide text-muted-foreground uppercase">
                    {c.label}
                  </span>
                  <span className="block truncate text-sm font-medium text-ink">{c.value}</span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import { ArrowRight, MessageSquareText } from "lucide-react";

import { profile } from "@/lib/profile";
import { SocialLinks } from "./SocialLinks";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-12 sm:pt-32 sm:pb-16">
      <div
        aria-hidden
        className="soft-drift pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-mint-soft blur-3xl"
      />
      <div
        aria-hidden
        className="soft-drift pointer-events-none absolute top-40 -left-28 h-64 w-64 rounded-full bg-coral-soft/35 blur-3xl [animation-delay:-6s]"
      />

      <div className="section-shell relative">
        <div className="max-w-3xl">
          <span className="rise-in inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium tracking-wide text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-coral" />
            B.Tech Computer Science · Expected 2028
          </span>

          <h1 className="rise-in mt-6 text-4xl leading-[1.05] font-semibold text-ink sm:text-6xl [animation-delay:80ms]">
            {profile.name}
          </h1>

          <p className="rise-in mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-base font-medium text-ink/70 sm:text-lg [animation-delay:140ms]">
            {profile.titles.map((title, i) => (
              <span key={title} className="flex items-center gap-3">
                {i > 0 && <span className="h-1 w-1 rounded-full bg-coral" />}
                {title}
              </span>
            ))}
          </p>

          <p className="rise-in mt-6 max-w-2xl text-[15px] leading-relaxed text-muted-foreground sm:text-base [animation-delay:200ms]">
            {profile.summary}
          </p>

          <div className="rise-in mt-7 flex flex-col gap-3 sm:flex-row sm:items-center [animation-delay:260ms]">
            <a
              href="#assistant"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-16px_oklch(0.245_0.032_262_/_0.9)]"
            >
              <MessageSquareText className="h-4 w-4" strokeWidth={1.8} />
              Chat with my AI Assistant
            </a>
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-coral"
            >
              View Projects
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                strokeWidth={1.8}
              />
            </a>
          </div>

          <div className="rise-in mt-6 [animation-delay:320ms]">
            <SocialLinks />
          </div>
        </div>
      </div>
    </section>
  );
}

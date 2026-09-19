import { Github, Linkedin, Mail } from "lucide-react";

import { cn } from "@/lib/utils";
import { profile } from "@/lib/profile";

const links = [
  { label: "GitHub", href: profile.github, Icon: Github },
  { label: "LinkedIn", href: profile.linkedin, Icon: Linkedin },
  { label: "Gmail", href: `mailto:${profile.email}`, Icon: Mail },
];

export function SocialLinks({ className, size = "md" }: { className?: string; size?: "sm" | "md" }) {
  const box = size === "sm" ? "h-9 w-9" : "h-10 w-10";
  const icon = size === "sm" ? "h-4 w-4" : "h-[18px] w-[18px]";

  return (
    <div className={cn("flex items-center gap-2", className)}>
      {links.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noreferrer noopener" : undefined}
          aria-label={label}
          title={label}
          className={cn(
            box,
            "inline-flex items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-coral hover:text-ink hover:shadow-[0_8px_20px_-12px_oklch(0.245_0.032_262_/_0.5)]",
          )}
        >
          <Icon className={icon} strokeWidth={1.7} />
        </a>
      ))}
    </div>
  );
}

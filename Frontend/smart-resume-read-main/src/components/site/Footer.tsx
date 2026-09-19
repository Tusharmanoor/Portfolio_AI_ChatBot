import { profile } from "@/lib/profile";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  return (
    <footer className="border-t border-border bg-mint-soft/40 py-7">
      <div className="section-shell flex flex-col items-center justify-between gap-5 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-display text-base font-semibold text-ink">{profile.name}</p>
          <p className="mt-1 text-xs text-muted-foreground">{profile.titles.join(" • ")}</p>
        </div>
        <SocialLinks size="sm" />
      </div>
    </footer>
  );
}

import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal className="max-w-2xl">
      <p className="text-xs font-semibold tracking-[0.18em] text-coral uppercase">{eyebrow}</p>
      <h2 className="mt-3 text-2xl font-semibold text-ink sm:text-3xl">{title}</h2>
      {description ? (
        <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{description}</p>
      ) : null}
    </Reveal>
  );
}

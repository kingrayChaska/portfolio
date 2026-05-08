import FadeIn from "./FadeIn";

export default function SectionHeading({ num, title }) {
  return (
    <FadeIn className="flex items-center gap-4 mb-16 whitespace-nowrap">
      <span className="font-mono text-[11px] text-moss-light tracking-[3px] uppercase">
        {num}
      </span>
      <h2
        className="font-display text-[28px] font-semibold tracking-[-0.5px]"
        style={{ color: "var(--eggshell)" }}
      >
        {title}
      </h2>
      <div className="section-rule ml-2" />
    </FadeIn>
  );
}

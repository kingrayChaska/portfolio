import FadeIn from "../ui/FadeIn";
import { IconGithub, IconLinkedin, IconTwitter } from "../icons";
import { EMAIL, SOCIAL_LINKS } from "../../constants/data";

const ICONS = { GitHub: IconGithub, LinkedIn: IconLinkedin, Twitter: IconTwitter };

export default function Contact() {
  return (
    <section id="contact" className="py-32 max-w-5xl mx-auto px-6 md:px-24 text-center">

      <FadeIn>
        <span className="font-mono text-[11px] tracking-[3px] uppercase text-moss-light">
          05. What's Next?
        </span>
      </FadeIn>

      <FadeIn delay={0.1}>
        <h2
          className="font-display font-semibold tracking-[-2px] mt-4 mb-6"
          style={{ fontSize: "clamp(40px, 6vw, 72px)", color: "var(--eggshell)" }}
        >
          Get In Touch
        </h2>
      </FadeIn>

      <FadeIn delay={0.2}>
        <p className="font-sans text-slate text-[16px] max-w-[480px] mx-auto leading-[1.9] mb-12">
          I'm currently open to new opportunities. Whether you have a project in
          mind, want to collaborate, or just want to say hi — my inbox is always open.
        </p>
      </FadeIn>

      <FadeIn delay={0.3}>
        <a
          href={`mailto:${EMAIL}`}
          className="group relative inline-block font-mono text-[12px] tracking-[2px] uppercase text-eggshell px-12 py-5 rounded-sm overflow-hidden transition-all duration-300 hover:-translate-y-0.5"
          style={{ background: "var(--moss)", border: "1px solid var(--moss-light)" }}
        >
          <span className="relative z-10">Say Hello</span>
          <span
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: "var(--moss-light)" }}
          />
        </a>
      </FadeIn>

      {/* Social icons — mobile only */}
      <FadeIn delay={0.4} className="flex justify-center gap-8 mt-16 lg:hidden">
        {SOCIAL_LINKS.map(({ label, href }) => {
          const Icon = ICONS[label];
          return (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-egg-dim hover:text-eggshell hover:-translate-y-1 transition-all duration-200"
            >
              {Icon && <Icon size={22} />}
            </a>
          );
        })}
      </FadeIn>

    </section>
  );
}

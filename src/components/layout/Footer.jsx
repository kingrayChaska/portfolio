import { SOCIAL_LINKS } from "../../constants/data";
import { IconGithub, IconLinkedin, IconTwitter } from "../icons";

const ICONS = {
  GitHub: IconGithub,
  LinkedIn: IconLinkedin,
  Twitter: IconTwitter,
};

export default function Footer() {
  return (
    <footer className="text-center py-8 font-mono text-[12px] text-slate leading-loose">
      {/* Social icons — visible only on mobile (sidebars hidden) */}
      <div className="flex justify-center gap-6 mb-4 lg:hidden">
        {SOCIAL_LINKS.map(({ label, href }) => {
          const Icon = ICONS[label];
          return (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-slate hover:text-eggshell transition-colors duration-200"
            >
              {Icon && <Icon size={18} />}
            </a>
          );
        })}
      </div>

      <p>
        Built by{" "}
        <span className="text-eggshell/80">Fadogba Oluwaseun Raymond</span> ·{" "}
        {new Date().getFullYear()}
      </p>
    </footer>
  );
}

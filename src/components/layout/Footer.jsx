import { SOCIAL_LINKS } from "../../constants/data";
import { IconGithub, IconLinkedin, IconTwitter } from "../icons";

const ICONS = { GitHub: IconGithub, LinkedIn: IconLinkedin, Twitter: IconTwitter };

export default function Footer() {
  return (
    <footer className="text-center py-10 font-mono text-[11px] text-egg-dim leading-loose tracking-wider">
      <div className="flex justify-center gap-6 mb-5 lg:hidden">
        {SOCIAL_LINKS.map(({ label, href }) => {
          const Icon = ICONS[label];
          return (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-egg-dim hover:text-eggshell transition-colors duration-200"
            >
              {Icon && <Icon size={18} />}
            </a>
          );
        })}
      </div>
      <p>
        Designed & Built by{" "}
        <span className="text-eggshell">Fadogba Oluwaseun</span>{" "}
        · {new Date().getFullYear()}
      </p>
    </footer>
  );
}

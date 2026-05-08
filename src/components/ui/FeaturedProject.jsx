import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { IconGithub, IconExternalLink } from "../icons";
import ProjectMockup from "./ProjectMockup";

export default function FeaturedProject({ project, reverse }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className={`fp-card grid grid-cols-1 lg:grid-cols-2 gap-0 items-center relative ${
        reverse ? "lg:[direction:rtl]" : ""
      }`}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* ── Image ── */}
      <div
        className="relative rounded-sm overflow-hidden aspect-[16/10]"
        style={{ background: "var(--card)" }}
      >
        <ProjectMockup title={project.title} url={project.live} image={project.image} />
        <div className="fp-img-overlay" />
      </div>

      {/* ── Text ── */}
      <div
        className={`relative z-10 pt-8 lg:pt-0 ${
          reverse ? "lg:[direction:ltr] lg:pr-12" : "lg:pl-12"
        }`}
      >
        <p className="font-mono text-[11px] text-moss-light mb-3 tracking-[2px] uppercase">
          {project.overline}
        </p>

        <h3
          className="font-display text-[28px] font-semibold mb-5 tracking-tight leading-tight"
          style={{ color: "var(--eggshell)" }}
        >
          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="underline-anim hover:text-moss-light transition-colors duration-200"
            >
              {project.title}
            </a>
          ) : (
            project.title
          )}
        </h3>

        <div
          className="rounded-sm p-5 mb-5 font-sans text-[14px] text-egg-dim leading-[1.8]"
          style={{
            background: "var(--card)",
            border: "1px solid var(--border-eggshell)",
          }}
        >
          {project.desc}
        </div>

        <ul className="flex flex-wrap gap-3 mb-6">
          {project.tech.map((t) => (
            <li key={t} className="font-mono text-[12px] text-moss-light tracking-wide">
              {t}
            </li>
          ))}
        </ul>

        <div className="flex gap-4 items-center">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-egg-dim hover:text-eggshell hover:-translate-y-0.5 transition-all duration-200"
            >
              <IconGithub size={20} />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live site"
              className="text-egg-dim hover:text-eggshell hover:-translate-y-0.5 transition-all duration-200"
            >
              <IconExternalLink size={20} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

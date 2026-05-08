import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { IconGithub, IconExternalLink, IconFolder } from "../icons";

export default function ProjectCard({ project, index = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.article
      ref={ref}
      className="group relative flex flex-col gap-4 p-7 rounded-sm cursor-default transition-all duration-300 hover:-translate-y-2"
      style={{
        background: "var(--card)",
        border: "1px solid var(--border-eggshell)",
        overflow: "hidden",
      }}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="project-card-border" />

      {/* Header */}
      <div className="flex justify-between items-start">
        <span className="text-moss-light">
          <IconFolder size={34} />
        </span>
        <div className="flex gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} GitHub`}
              className="text-egg-dim hover:text-eggshell transition-colors duration-200"
            >
              <IconGithub size={17} />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live site`}
              className="text-egg-dim hover:text-eggshell transition-colors duration-200"
            >
              <IconExternalLink size={17} />
            </a>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="flex-1">
        <h4
          className="font-sans text-[17px] font-semibold mb-2 tracking-tight"
          style={{ color: "var(--eggshell)" }}
        >
          {project.title}
        </h4>
        <p className="font-sans text-[13px] text-slate leading-[1.75]">
          {project.desc}
        </p>
      </div>

      {/* Tech */}
      <ul className="flex flex-wrap gap-2 pt-2">
        {project.tech.map((t) => (
          <li key={t} className="font-mono text-[11px] text-moss-light tracking-wide">
            {t}
          </li>
        ))}
      </ul>
    </motion.article>
  );
}

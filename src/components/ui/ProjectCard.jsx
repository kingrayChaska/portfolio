import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { IconGithub, IconExternalLink, IconFolder } from '../icons'

/**
 * Smaller project card used in the "Other Noteworthy Projects" grid.
 * Hover: card lifts, top-border gradient reveals.
 */
export default function ProjectCard({ project, index = 0 }) {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.article
      ref={ref}
      className="group relative flex flex-col gap-5 p-7 rounded cursor-default transition-all duration-300 hover:-translate-y-2"
      style={{
        background: '#1a1814',
        border: '1px solid rgba(240,234,220,0.05)',
        overflow: 'hidden',
      }}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Top border reveal on hover */}
      <div className="project-card-border" />

      {/* Header row */}
      <div className="flex justify-between items-start">
        <IconFolder size={38} />
        <div className="flex gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} GitHub`}
              className="text-slate hover:text-eggshell transition-colors duration-200"
            >
              <IconGithub size={18} />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live site`}
              className="text-slate hover:text-eggshell transition-colors duration-200"
            >
              <IconExternalLink size={18} />
            </a>
          )}
        </div>
      </div>

      {/* Body */}
      <div>
        <h4 className="font-sans text-[18px] font-semibold text-eggshell mb-2 tracking-tight">
          {project.title}
        </h4>
        <p className="font-sans text-[14px] text-slate leading-[1.7]">
          {project.desc}
        </p>
      </div>

      {/* Tech tags */}
      <ul className="flex flex-wrap gap-2.5 mt-auto pt-2">
        {project.tech.map(t => (
          <li key={t} className="font-mono text-[12px] text-egg-dim/70">
            {t}
          </li>
        ))}
      </ul>
    </motion.article>
  )
}

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { IconGithub, IconExternalLink } from '../icons'
import ProjectMockup from './ProjectMockup'

/**
 * Large alternating project card (xtmani style).
 * Even-indexed cards have image on left, odd on right.
 */
export default function FeaturedProject({ project, reverse }) {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      className={`fp-card grid grid-cols-1 lg:grid-cols-2 gap-0 items-center relative ${
        reverse ? 'lg:[direction:rtl]' : ''
      }`}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* ── Mockup / image ── */}
      <div
        className="relative rounded overflow-hidden aspect-[16/10]"
        style={{ background: '#1a1814' }}
      >
        <ProjectMockup title={project.title} url={project.live} />
        <div className="fp-img-overlay" />
      </div>

      {/* ── Text content ── */}
      <div
        className={`relative z-10 pt-6 lg:pt-0 ${
          reverse ? 'lg:[direction:ltr] lg:pr-12' : 'lg:pl-12'
        }`}
      >
        <p className="font-mono text-[13px] text-moss-light mb-2 tracking-wider">
          {project.overline}
        </p>

        <h3 className="font-display text-3xl text-eggshell font-semibold mb-5 tracking-tight">
          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="underline-anim hover:text-eggshell transition-colors"
            >
              {project.title}
            </a>
          ) : (
            project.title
          )}
        </h3>

        {/* Description card */}
        <div
          className="rounded p-5 mb-5 font-sans text-[15px] text-egg-dim leading-[1.75]"
          style={{
            background: '#1a1814',
            border: '1px solid rgba(240,234,220,0.04)',
          }}
        >
          {project.desc}
        </div>

        {/* Tech stack */}
        <ul className="flex flex-wrap gap-3 mb-5">
          {project.tech.map(t => (
            <li key={t} className="font-mono text-[13px] text-egg-dim">
              {t}
            </li>
          ))}
        </ul>

        {/* Links */}
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
  )
}

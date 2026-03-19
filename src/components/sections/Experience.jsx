import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import FadeIn from '../ui/FadeIn'
import { EXPERIENCES } from '../../constants/data'

export default function Experience() {
  const [activeIdx, setActiveIdx] = useState(0)
  const exp = EXPERIENCES[activeIdx]

  return (
    <section
      id="experience"
      className="py-28 max-w-5xl mx-auto px-6 md:px-24"
    >
      <SectionHeading num="02." title="Where I've Worked" />

      <FadeIn>
        <div className="flex flex-col sm:flex-row gap-0">

          {/* ── Tab list ── */}
          <div
            className="flex sm:flex-col overflow-x-auto sm:overflow-visible min-w-[160px]"
            style={{ borderLeft: '2px solid #2a2820' }}
            role="tablist"
            aria-label="Work experience"
          >
            {EXPERIENCES.map((e, i) => (
              <button
                key={e.company}
                role="tab"
                aria-selected={activeIdx === i}
                aria-controls={`exp-panel-${i}`}
                onClick={() => setActiveIdx(i)}
                className={`exp-tab font-mono text-[13px] px-5 py-3 whitespace-nowrap tracking-wide ${
                  activeIdx === i ? 'active' : 'text-egg-dim'
                }`}
              >
                {e.company}
              </button>
            ))}
          </div>

          {/* ── Panel ── */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIdx}
              id={`exp-panel-${activeIdx}`}
              role="tabpanel"
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="flex-1 pl-0 sm:pl-10 pt-6 sm:pt-0"
            >
              <h3 className="font-sans text-xl font-semibold text-eggshell mb-1">
                {exp.role}{' '}
                {exp.url ? (
                  <a
                    href={exp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-moss-light hover:underline"
                  >
                    @ {exp.company}
                  </a>
                ) : (
                  <span className="text-moss-light">@ {exp.company}</span>
                )}
              </h3>

              <p className="font-mono text-[13px] text-slate mb-5 tracking-wide">
                {exp.period} · {exp.location}
              </p>

              <ul className="space-y-3">
                {exp.bullets.map((bullet, i) => (
                  <li key={i} className="flex gap-3 font-sans text-[16px] text-slate leading-relaxed">
                    <span className="text-moss-light mt-1 shrink-0">▹</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>

        </div>
      </FadeIn>
    </section>
  )
}

import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import FadeIn from '../ui/FadeIn'
import { SKILLS } from '../../constants/data'

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-28 max-w-5xl mx-auto px-6 md:px-24"
    >
      <SectionHeading num="04." title="Skills & Tools" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {Object.entries(SKILLS).map(([category, items], catIdx) => (
          <FadeIn key={category} delay={catIdx * 0.1}>
            <div
              className="rounded p-6 h-full"
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border-eggshell)',
              }}
            >
              <h3
                className="font-display text-xl font-semibold text-eggshell mb-4 pb-3"
                style={{ borderBottom: '1px solid var(--border-divider)' }}
              >
                {category}
              </h3>

              <div className="flex flex-wrap gap-2">
                {items.map((item, itemIdx) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ y: -2 }}
                    transition={{ delay: itemIdx * 0.04, duration: 0.3 }}
                    viewport={{ once: true }}
                    className="font-mono text-[13px] text-egg-dim rounded px-3 py-1.5 cursor-default"
                    style={{
                      background: 'var(--overlay-moss)',
                      border: '1px solid var(--border-dark-strong)',
                    }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}

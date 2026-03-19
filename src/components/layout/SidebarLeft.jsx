import { motion } from 'framer-motion'
import { SOCIAL_LINKS } from '../../constants/data'
import { IconGithub, IconLinkedin, IconTwitter } from '../icons'

const ICONS = {
  GitHub:   IconGithub,
  LinkedIn: IconLinkedin,
  Twitter:  IconTwitter,
}

export default function SidebarLeft() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.6 }}
      className="fixed bottom-0 left-9 z-10 hidden lg:flex flex-col items-center gap-5"
    >
      {SOCIAL_LINKS.map(({ label, href }) => {
        const Icon = ICONS[label]
        return (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-slate hover:text-eggshell hover:-translate-y-1 transition-all duration-200"
          >
            {Icon && <Icon size={20} />}
          </a>
        )
      })}

      {/* Vertical line */}
      <div
        className="w-px h-24 mt-2"
        style={{ background: 'linear-gradient(180deg, #576238, transparent)' }}
      />
    </motion.div>
  )
}

import { motion } from 'framer-motion'
import { EMAIL } from '../../constants/data'

export default function SidebarRight() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.6 }}
      className="fixed bottom-0 right-9 z-10 hidden lg:flex flex-col items-center gap-5"
    >
      <a
        href={`mailto:${EMAIL}`}
        className="font-mono text-[12px] text-egg-dim hover:text-eggshell hover:-translate-y-1 transition-all duration-200 tracking-[2px]"
        style={{ writingMode: 'vertical-rl' }}
      >
        {EMAIL}
      </a>

      {/* Vertical line */}
      <div
        className="w-px h-24 mt-2"
        style={{ background: 'linear-gradient(180deg, #576238, transparent)' }}
      />
    </motion.div>
  )
}

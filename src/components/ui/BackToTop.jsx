import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IconArrowUp } from '../icons'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="#hero"
          aria-label="Back to top"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-10 h-10 rounded text-eggshell transition-all duration-200 hover:-translate-y-1"
          style={{
            background: 'rgba(87,98,56,0.3)',
            border: '1px solid rgba(87,98,56,0.5)',
          }}
        >
          <IconArrowUp size={16} />
        </motion.a>
      )}
    </AnimatePresence>
  )
}

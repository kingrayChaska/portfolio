import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

/**
 * Wraps children in a scroll-triggered fade + slide animation.
 *
 * @param {ReactNode} children
 * @param {number}    delay     - animation delay in seconds
 * @param {'up'|'left'|'right'|'none'} direction
 * @param {string}    className - extra Tailwind classes
 */
export default function FadeIn({
  children,
  delay     = 0,
  direction = 'up',
  className = '',
}) {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const offsets = {
    up:    { y: 28, x: 0  },
    down:  { y: -28, x: 0 },
    left:  { y: 0,  x: -28 },
    right: { y: 0,  x: 28  },
    none:  { y: 0,  x: 0  },
  }

  const { x, y } = offsets[direction] ?? offsets.up

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, x, y }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{
        duration: 0.65,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  )
}

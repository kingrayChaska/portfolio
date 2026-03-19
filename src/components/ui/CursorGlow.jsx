import { useState, useEffect } from 'react'

/**
 * Renders a subtle radial gradient that follows the cursor.
 * Only visible on pointer devices (hidden on touch/mobile via CSS).
 */
export default function CursorGlow() {
  const [pos, setPos] = useState({ x: -400, y: -400 })

  useEffect(() => {
    const onMove = e => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <div
      className="cursor-glow hidden lg:block"
      style={{ left: pos.x, top: pos.y }}
    />
  )
}

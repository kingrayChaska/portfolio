import { useState, useEffect } from 'react'

/**
 * Watches scroll position and returns the id of the section
 * currently in the viewport, used to highlight the active nav link.
 *
 * @param {string[]} sectionIds - ordered list of section ids to watch
 * @param {number}   offset     - px from top to trigger the active state
 * @returns {string} activeSection - the id of the active section
 */
export default function useActiveSection(sectionIds, offset = 120) {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i])
        if (el && window.scrollY >= el.offsetTop - offset) {
          setActiveSection(sectionIds[i])
          return
        }
      }
      setActiveSection('')
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [sectionIds, offset])

  return activeSection
}

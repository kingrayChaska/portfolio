import FadeIn from './FadeIn'

/**
 * Renders the numbered section heading used across all sections.
 * e.g.  01.  About Me  ————————————————
 */
export default function SectionHeading({ num, title }) {
  return (
    <FadeIn className="flex items-center gap-4 mb-14 whitespace-nowrap">
      <span className="font-mono text-moss-light text-lg font-light tracking-wider">
        {num}
      </span>
      <h2 className="font-display text-eggshell text-3xl font-semibold tracking-tight">
        {title}
      </h2>
      <div className="section-rule ml-2" />
    </FadeIn>
  )
}

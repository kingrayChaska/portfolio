import FadeIn from '../ui/FadeIn'
import { IconGithub, IconLinkedin, IconTwitter } from '../icons'
import { EMAIL, SOCIAL_LINKS } from '../../constants/data'

const ICONS = { GitHub: IconGithub, LinkedIn: IconLinkedin, Twitter: IconTwitter }

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 max-w-5xl mx-auto px-6 md:px-24 text-center"
    >
      <FadeIn>
        <p className="font-mono text-moss-light text-base mb-4 tracking-widest">
          05. What's Next?
        </p>
      </FadeIn>

      <FadeIn delay={0.1}>
        <h2
          className="font-display text-eggshell font-bold tracking-[-1.5px] mb-5"
          style={{
            fontSize: 'clamp(36px, 5vw, 64px)',
            textShadow: '0 2px 30px rgba(87,98,56,0.2)',
          }}
        >
          Get In Touch
        </h2>
      </FadeIn>

      <FadeIn delay={0.2}>
        <p className="font-sans text-slate text-lg max-w-[520px] mx-auto leading-relaxed mb-10">
          I'm currently open to new opportunities. Whether you have a project in
          mind, want to collaborate, or just want to say hi — my inbox is always
          open.
        </p>
      </FadeIn>

      <FadeIn delay={0.3}>
        <a
          href={`mailto:${EMAIL}`}
          className="inline-block font-mono text-sm text-eggshell tracking-[2px] rounded px-12 py-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(87,98,56,0.22)]"
          style={{
            border: '1px solid #7a8a4e',
            background: 'rgba(87,98,56,0.12)',
          }}
        >
          Say Hello
        </a>
      </FadeIn>

      {/* Social icons row — visible on mobile when sidebars are hidden */}
      <FadeIn delay={0.4} className="flex justify-center gap-8 mt-16 lg:hidden">
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
              {Icon && <Icon size={22} />}
            </a>
          )
        })}
      </FadeIn>
    </section>
  )
}

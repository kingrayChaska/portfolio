import SectionHeading from "../ui/SectionHeading";
import FadeIn from "../ui/FadeIn";
import { ABOUT_SKILLS } from "../../constants/data";

export default function About() {
  return (
    <section id="about" className="py-28 max-w-5xl mx-auto px-6 md:px-24">
      <SectionHeading num="01." title="About Me" />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">

        {/* ── Text column ── */}
        <FadeIn delay={0.1} className="lg:col-span-3 space-y-5">
          <p className="font-sans text-slate text-[16px] leading-[1.9]">
            I'm Oluwaseun — a{" "}
            <span className="text-eggshell font-medium">Frontend Developer</span> and IT
            Support Specialist based in Nigeria. I help product teams, companies, and
            digital creators attract and keep clients by creating the ideal experience
            their users love.
          </p>
          <p className="font-sans text-slate text-[16px] leading-[1.9]">
            I hold a{" "}
            <span className="text-eggshell font-medium">
              B.Tech in Computer Science (Information Systems)
            </span>{" "}
            from Federal University of Technology Akure. Since then I've shipped
            products across recruitment platforms, pension management systems,
            AI-powered learning tools, and analytics dashboards.
          </p>
          <p className="font-sans text-slate text-[16px] leading-[1.9]">
            I'm passionate about bridging design and engineering — converting Figma
            wireframes pixel-perfectly into performant, accessible interfaces. When
            I'm not shipping features, I mentor junior developers and explore new
            frontend tooling.
          </p>

          <div className="pt-3">
            <p className="font-mono text-[11px] text-moss-light mb-4 tracking-[2px] uppercase">
              Technologies I work with
            </p>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5">
              {ABOUT_SKILLS.map((skill) => (
                <li
                  key={skill}
                  className="font-mono text-[13px] text-egg-dim flex items-center gap-2.5"
                >
                  <span className="text-moss-light text-[10px]">▹</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        {/* ── Photo column ── */}
        <FadeIn delay={0.3} direction="right" className="lg:col-span-2 flex justify-center">
          <div className="relative group" style={{ width: 280, height: 320 }}>
            <div className="absolute inset-0 rounded overflow-hidden">
              <img
                src="/Ray.jpg"
                alt="Fadogba Oluwaseun"
                className="w-full h-full object-cover object-top grayscale-[15%] group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="fp-img-overlay rounded" />
            </div>
            <div
              className="absolute rounded pointer-events-none transition-all duration-300 group-hover:top-[10px] group-hover:left-[10px]"
              style={{
                top: 16, left: 16, right: -16, bottom: -16,
                border: "2px solid var(--moss)",
                zIndex: -1,
              }}
            />
          </div>
        </FadeIn>

      </div>
    </section>
  );
}

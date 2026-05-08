import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import FadeIn from "../ui/FadeIn";
import { SKILLS } from "../../constants/data";

export default function Skills() {
  return (
    <section id="skills" className="py-28 max-w-5xl mx-auto px-6 md:px-24">
      <SectionHeading num="04." title="Skills & Tools" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(SKILLS).map(([category, items], catIdx) => (
          <FadeIn key={category} delay={catIdx * 0.08}>
            <div
              className="rounded-sm p-7 h-full"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border-eggshell)",
              }}
            >
              <div className="flex items-center gap-3 mb-5 pb-4" style={{ borderBottom: "1px solid var(--border-divider)" }}>
                <span className="font-mono text-[10px] text-moss-light tracking-[2px] uppercase">{String(catIdx + 1).padStart(2, "0")}.</span>
                <h3
                className="font-sans text-[15px] font-semibold tracking-tight"
                style={{ color: "var(--eggshell)" }}
              >
                  {category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {items.map((item, itemIdx) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.92 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ y: -2 }}
                    transition={{ delay: itemIdx * 0.03, duration: 0.25 }}
                    viewport={{ once: true }}
                    className="font-mono text-[12px] text-egg-dim rounded-sm px-3 py-1.5 cursor-default tracking-wide"
                    style={{
                      background: "var(--overlay-moss)",
                      border: "1px solid var(--border-dark-strong)",
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
  );
}

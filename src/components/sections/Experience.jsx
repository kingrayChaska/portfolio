import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import FadeIn from "../ui/FadeIn";
import { EXPERIENCES } from "../../constants/data";

export default function Experience() {
  const [activeIdx, setActiveIdx] = useState(0);
  const exp = EXPERIENCES[activeIdx];

  return (
    <section id="experience" className="py-28 max-w-5xl mx-auto px-6 md:px-24">
      <SectionHeading num="02." title="Where I've Worked" />

      <FadeIn>
        <div className="flex flex-col sm:flex-row gap-0">

          {/* ── Tab list ── */}
          <div
            className="flex sm:flex-col overflow-x-auto sm:overflow-visible min-w-[180px]"
            style={{ borderLeft: "2px solid var(--border-divider)" }}
            role="tablist"
            aria-label="Work experience"
          >
            {EXPERIENCES.map((e, i) => (
              <button
                key={e.company}
                role="tab"
                aria-selected={activeIdx === i}
                aria-controls={`exp-panel-${i}`}
                onClick={() => setActiveIdx(i)}
                className={`exp-tab font-mono text-[12px] px-5 py-3.5 whitespace-nowrap tracking-[1px] uppercase ${
                  activeIdx === i ? "active" : "text-egg-dim"
                }`}
              >
                {e.company}
              </button>
            ))}
          </div>

          {/* ── Panel ── */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIdx}
              id={`exp-panel-${activeIdx}`}
              role="tabpanel"
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="flex-1 pl-0 sm:pl-12 pt-6 sm:pt-0"
            >
              <h3
                className="font-sans text-[20px] font-semibold leading-snug mb-1"
                style={{ color: "var(--eggshell)" }}
              >
                {exp.role}{" "}
                {exp.url ? (
                  <a
                    href={exp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-moss-light hover:underline"
                  >
                    @ {exp.company}
                  </a>
                ) : (
                  <span className="text-moss-light">@ {exp.company}</span>
                )}
              </h3>

              <p className="font-mono text-[12px] text-egg-dim mb-7 tracking-[1px] uppercase">
                {exp.period} · {exp.location}
              </p>

              <ul className="space-y-4">
                {exp.bullets.map((bullet, i) => (
                  <li key={i} className="flex gap-3 font-sans text-[15px] text-slate leading-[1.8]">
                    <span className="text-moss-light mt-1.5 shrink-0 text-[10px]">▹</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>

        </div>
      </FadeIn>
    </section>
  );
}

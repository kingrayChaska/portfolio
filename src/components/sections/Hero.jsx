import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function useTypewriter(words) {
  const [typed, setTyped] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const target = words[wordIndex];
    const speed = isDeleting ? 40 : 75;

    const timer = setTimeout(() => {
      if (!isDeleting && typed === target) {
        setTimeout(() => setIsDeleting(true), 2200);
        return;
      }
      if (isDeleting && typed === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
        return;
      }
      setTyped(isDeleting ? typed.slice(0, -1) : target.slice(0, typed.length + 1));
    }, speed);

    return () => clearTimeout(timer);
  }, [typed, isDeleting, wordIndex, words]);

  return typed;
}

const TAGLINES = [
  "build experiences users love.",
  "craft interfaces that convert.",
  "turn ideas into products.",
];

const STATS = [
  { value: "3+", label: "Years Experience" },
  { value: "15+", label: "Projects Shipped" },
  { value: "2", label: "Companies" },
];

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  const typed = useTypewriter(TAGLINES);

  return (
    <section
      id="hero"
      className="relative flex flex-col justify-center min-h-screen pt-[140px] pb-20 overflow-hidden"
    >
      {/* Ambient glow top-left */}
      <div
        className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle at 20% 30%, var(--overlay-moss) 0%, transparent 65%)",
        }}
      />
      {/* Ambient glow bottom-right */}
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle at 80% 80%, var(--overlay-moss-light) 0%, transparent 65%)",
        }}
      />

      <div className="relative max-w-5xl mx-auto w-full px-6 md:px-24">

        {/* ── Role badge ── */}
        <motion.div {...fade(0.2)} className="flex items-center gap-3 mb-8">
          <span
            className="font-mono text-[11px] tracking-[3px] uppercase text-moss-light px-3 py-1.5 rounded-full"
            style={{ border: "1px solid var(--moss-light)", background: "var(--overlay-moss-12)" }}
          >
            Frontend Developer
          </span>
          <span className="font-mono text-[11px] text-egg-dim tracking-wider">
            — Available for work
          </span>
        </motion.div>

        {/* ── Name ── */}
        <motion.div {...fade(0.35)} className="mb-2">
          <h1
            className="font-display font-semibold leading-[1.0] tracking-[-3px]"
            style={{ fontSize: "clamp(48px, 8vw, 100px)", color: "var(--eggshell)" }}
          >
            Fadogba Oluwaseun.
          </h1>
        </motion.div>

        {/* ── Typewriter line ── */}
        <motion.div {...fade(0.55)} className="mb-10">
          <p
            className="font-display italic text-slate leading-tight tracking-[-0.5px]"
            style={{ fontSize: "clamp(18px, 2.8vw, 32px)" }}
          >
            I{" "}
            <span className="text-moss-light not-italic font-semibold">{typed}</span>
            <span className="font-mono text-moss-light animate-blink text-[0.85em]">|</span>
          </p>
        </motion.div>

        {/* ── Divider ── */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="origin-left mb-10"
          style={{ height: "1px", background: "linear-gradient(90deg, var(--moss-light), transparent)", maxWidth: 480 }}
        />

        {/* ── Description ── */}
        <motion.p
          {...fade(0.75)}
          className="font-sans text-slate text-[16px] max-w-[460px] leading-[1.85] mb-12"
        >
          Specialising in{" "}
          <span className="text-eggshell font-medium">React & Next.js</span> — I help
          product teams and digital creators build scalable, high-performing web
          applications that convert users and deliver real business results.
        </motion.p>

        {/* ── CTAs ── */}
        <motion.div {...fade(0.9)} className="flex items-center gap-5 flex-wrap mb-16">
          <a
            href="#work"
            className="group relative font-mono text-[12px] tracking-[2px] uppercase px-8 py-4 rounded overflow-hidden transition-all duration-300 hover:-translate-y-0.5"
            style={{ background: "var(--moss)", border: "1px solid var(--moss-light)", color: "#f0eadc" }}
          >
            <span className="relative z-10">View My Work</span>
            <span
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: "var(--moss-light)" }}
            />
          </a>
          <a
            href="#contact"
            className="font-mono text-[12px] tracking-[2px] uppercase text-egg-dim hover:text-eggshell transition-colors duration-200 flex items-center gap-2"
          >
            Get In Touch
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform duration-200 group-hover:translate-x-1">
              <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </motion.div>

        {/* ── Stats row ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="flex items-center gap-8 flex-wrap"
        >
          {STATS.map(({ value, label }, i) => (
            <div key={label} className="flex items-center gap-8">
              <div>
                <p
                  className="font-display font-semibold text-eggshell leading-none mb-1"
                  style={{ fontSize: "clamp(22px, 3vw, 32px)" }}
                >
                  {value}
                </p>
                <p className="font-mono text-[11px] text-egg-dim tracking-wider uppercase">
                  {label}
                </p>
              </div>
              {i < STATS.length - 1 && (
                <div className="w-px h-8 self-center" style={{ background: "var(--border-subtle)", opacity: 3 }} />
              )}
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HERO_TAGLINES } from "../../constants/data";

/** Staggered entrance animation helper */
const Entrance = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

/** Typewriter that cycles through HERO_TAGLINES */
function useTypewriter(words) {
  const [typed, setTyped] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const target = words[wordIndex];
    const speed = isDeleting ? 35 : 70;

    const timer = setTimeout(() => {
      if (!isDeleting && typed === target) {
        setTimeout(() => setIsDeleting(true), 2000);
        return;
      }
      if (isDeleting && typed === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
        return;
      }
      setTyped(
        isDeleting ? typed.slice(0, -1) : target.slice(0, typed.length + 1),
      );
    }, speed);

    return () => clearTimeout(timer);
  }, [typed, isDeleting, wordIndex, words]);

  return typed;
}

export default function Hero() {
  const typed = useTypewriter(HERO_TAGLINES);

  return (
    <section
      id="hero"
      className="relative flex flex-col justify-center min-h-screen pt-[70px] overflow-hidden"
    >
      {/* Ambient glows */}
      <div
        className="absolute top-1/3 left-0 w-[520px] h-[520px] rounded-full pointer-events-none -translate-x-1/2"
        style={{
          background:
            "radial-gradient(circle, rgba(87,98,56,0.16) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-1/4 right-0 w-[400px] h-[400px] rounded-full pointer-events-none translate-x-1/3"
        style={{
          background:
            "radial-gradient(circle, rgba(87,98,56,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-5xl mx-auto w-full px-6 md:px-24">
        {/* Greeting */}
        <Entrance delay={0.3}>
          <p className="font-mono text-moss-light text-base mb-5 tracking-wider">
            Hi, my name is
          </p>
        </Entrance>

        {/* Name */}
        <Entrance delay={0.5}>
          <h1
            className="font-display text-eggshell leading-[1.05] tracking-[-2px] mb-3"
            style={{
              fontSize: "clamp(46px, 7.5vw, 88px)",
              textShadow: "0 2px 40px rgba(87,98,56,0.25)",
            }}
          >
            Fadogba Oluwaseun.
          </h1>
        </Entrance>

        {/* Typewriter tagline */}
        <Entrance delay={0.7}>
          <h2
            className="font-display text-slate leading-[1.1] tracking-[-1.5px] mb-8"
            style={{ fontSize: "clamp(28px, 5vw, 64px)" }}
          >
            I <span className="text-eggshell/80 italic">{typed}</span>
            <span className="font-mono text-moss-light animate-blink">|</span>
          </h2>
        </Entrance>

        {/* Description */}
        <Entrance delay={0.9}>
          <p className="font-sans text-slate text-[17px] max-w-[500px] leading-relaxed mb-10">
            Frontend Developer with{" "}
            <span className="text-eggshell/80 font-medium">3+ years</span> of
            experience helping product teams and digital creators build
            scalable, high-performing web applications that convert users and
            deliver real business results.
          </p>
        </Entrance>

        {/* CTAs */}
        <Entrance delay={1.1}>
          <div className="flex gap-4 flex-wrap">
            <a
              href="#work"
              className="font-mono text-sm text-eggshell border border-moss-light rounded px-8 py-4 tracking-wider transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(87,98,56,0.22)]"
              style={{ background: "rgba(87,98,56,0.12)" }}
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="font-mono text-sm text-egg-dim hover:text-eggshell border-b border-b-moss/40 px-2 py-4 tracking-wider transition-colors duration-200"
            >
              Get In Touch →
            </a>
          </div>
        </Entrance>
      </div>
    </section>
  );
}

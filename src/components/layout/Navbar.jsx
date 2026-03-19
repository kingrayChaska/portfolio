import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "../../constants/data";
import useActiveSection from "../../hooks/useActiveSection";
import { IconMenu, IconClose } from "../icons";

const SECTION_IDS = NAV_LINKS.map((l) => l.href.slice(1));

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 transition-shadow duration-300"
        style={{
          height: 70,
          background: scrolled ? "rgba(12,11,9,0.92)" : "rgba(12,11,9,0.6)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          borderBottom: "1px solid rgba(240,234,220,0.04)",
          boxShadow: scrolled ? "0 10px 30px rgba(0,0,0,0.5)" : "none",
        }}
      >
        {/* Logo */}
        <a>
          <img className="w-14" src="/chaska-logo.png" />
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ label, href, num }) => {
            const id = href.slice(1);
            return (
              <li key={href}>
                <a
                  href={href}
                  className={`font-mono text-[13px] px-3 py-2 rounded transition-colors duration-200 hover:text-eggshell ${
                    activeSection === id ? "text-eggshell" : "text-egg-dim"
                  }`}
                >
                  <span className="text-moss-light mr-1">{num}</span>
                  {label}
                </a>
              </li>
            );
          })}
          <li>
            <a
              href="/Fadogba_Oluwaseun_frontend_cv-1.pdf"
              download="Fadogba_Oluwaseun_frontend_cv-1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 font-mono text-[13px] text-eggshell border border-moss rounded px-5 py-2 hover:bg-moss/20 transition-all duration-200"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-eggshell p-1"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <IconMenu size={24} />
        </button>
      </motion.nav>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-black/50"
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed right-0 top-0 bottom-0 z-[70] w-[72vw] max-w-xs flex flex-col items-center justify-center gap-6 p-8"
              style={{
                background: "#1a1814",
                borderLeft: "1px solid rgba(87,98,56,0.2)",
              }}
            >
              <button
                className="absolute top-6 right-6 text-egg-dim hover:text-eggshell transition-colors"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <IconClose size={24} />
              </button>

              {NAV_LINKS.map(({ label, href, num }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className="font-mono text-base text-egg-dim hover:text-eggshell transition-colors"
                >
                  <span className="text-moss-light">{num}</span> {label}
                </a>
              ))}

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 font-mono text-sm text-eggshell border border-moss-light rounded px-8 py-3 hover:bg-moss/20 transition-all"
              >
                Resume
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "../../constants/data";
import useActiveSection from "../../hooks/useActiveSection";
import { useTheme } from "../../hooks/useTheme";
import { IconMenu, IconClose, IconSun, IconMoon } from "../icons";

const SECTION_IDS = NAV_LINKS.map((l) => l.href.slice(1));

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useActiveSection(SECTION_IDS);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
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
          background: scrolled ? "var(--nav-bg-scrolled)" : "var(--nav-bg)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          borderBottom: "1px solid var(--border-eggshell)",
          boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.12)" : "none",
        }}
      >
        {/* Logo */}
        <a href="#hero">
          <img className="w-14" src="/chaska-logo.png" alt="logo" />
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ label, href }) => {
            const id = href.slice(1);
            const isActive = activeSection === id;
            return (
              <li key={href}>
                <a
                  href={href}
                  className="font-sans text-[14px] font-medium px-4 py-2 rounded transition-colors duration-200"
                  style={{
                    color: isActive ? "var(--moss-light)" : "var(--eggshell)",
                  }}
                >
                  {label}
                </a>
              </li>
            );
          })}
          <li>
            <a
              href="/Fadogba_Oluwaseun_frontend_cv-1.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 font-sans text-[13px] font-semibold tracking-wide px-5 py-2 rounded-sm transition-all duration-200"
              style={{
                color: "var(--eggshell)",
                border: "1px solid var(--moss-light)",
                background: "var(--overlay-moss-12)",
              }}
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Theme toggle + hamburger */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-1.5 rounded transition-colors duration-200"
            style={{ color: "var(--eggshell)" }}
          >
            {isDark ? <IconSun size={19} /> : <IconMoon size={19} />}
          </button>
          <button
            className="md:hidden p-1.5 rounded"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            style={{ color: "var(--eggshell)" }}
          >
            <IconMenu size={22} />
          </button>
        </div>
      </motion.nav>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-black/40"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.28 }}
              className="fixed right-0 top-0 bottom-0 z-[70] w-[72vw] max-w-xs flex flex-col items-center justify-center gap-7 p-8"
              style={{
                background: "var(--surface)",
                borderLeft: "1px solid var(--border-eggshell)",
              }}
            >
              <button
                className="absolute top-6 right-6 transition-colors duration-200"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                style={{ color: "var(--eggshell)" }}
              >
                <IconClose size={22} />
              </button>

              {NAV_LINKS.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className="font-sans text-[15px] font-medium transition-colors duration-200"
                  style={{ color: "var(--eggshell)" }}
                >
                  {label}
                </a>
              ))}

              <a
                href="/Fadogba_Oluwaseun_frontend_cv-1.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 font-sans text-[13px] font-semibold tracking-wide px-8 py-3 rounded-sm transition-all duration-200"
                style={{
                  color: "var(--eggshell)",
                  border: "1px solid var(--moss-light)",
                  background: "var(--overlay-moss-12)",
                }}
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

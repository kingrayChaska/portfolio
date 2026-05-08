import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

function getInitialTheme() {
  const stored = localStorage.getItem("theme");
  if (stored) return stored === "dark";
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(() => {
    const dark = getInitialTheme();
    // Set synchronously before first paint
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
    return dark;
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

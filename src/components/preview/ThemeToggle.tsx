"use client";

import { useEffect, useState } from "react";

/**
 * ThemeToggle — dark/light switch for the Hyperscale palette.
 *
 * The theme is applied by writing `data-theme="light"` on
 * <html>. CSS variables in globals.css swap in-place, so every inline
 * style using var(--hs-*) re-paints without a React re-render.
 *
 * Precedence for the initial theme:
 *   1. `localStorage.hsTheme` if the user has picked one before
 *   2. `prefers-color-scheme: light` if no stored preference
 *   3. Otherwise stay dark (the design's home base)
 *
 * The pre-hydration script in RootLayout applies the same rule before
 * React mounts so there's no light-flash on load. This component just
 * mirrors the current value for the button label and writes changes.
 */

type Theme = "dark" | "light";

function readInitialTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  const stored = window.localStorage.getItem("hsTheme");
  if (stored === "light" || stored === "dark") return stored;
  const prefersLight = window.matchMedia(
    "(prefers-color-scheme: light)"
  ).matches;
  return prefersLight ? "light" : "dark";
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  // On mount, read the theme the pre-hydration script already applied so
  // the button reflects the true state, then keep DOM + localStorage in
  // sync whenever the user toggles.
  useEffect(() => {
    const initial =
      (document.documentElement.dataset.theme as Theme | undefined) ??
      readInitialTheme();
    setTheme(initial);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.dataset.theme = theme;
    try {
      window.localStorage.setItem("hsTheme", theme);
    } catch {
      // localStorage can throw in privacy modes; ignore.
    }
  }, [theme]);

  const isLight = theme === "light";
  const nextLabel = isLight ? "Switch to dark theme" : "Switch to light theme";

  return (
    <button
      type="button"
      onClick={() => setTheme(isLight ? "dark" : "light")}
      aria-label={nextLabel}
      title={nextLabel}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: 38,
        height: 38,
        borderRadius: 999,
        background: "var(--hs-amber-08)",
        border: "1px solid var(--hs-amber-40)",
        color: "var(--hs-amber)",
        cursor: "pointer",
        transition: "background 180ms ease, color 180ms ease, border-color 180ms ease",
      }}
    >
      {isLight ? <MoonIcon /> : <SunIcon />}
    </button>
  );
}

/** Sun — shown while dark is active, indicating "click to go light". */
function SunIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 3v2" />
      <path d="M12 19v2" />
      <path d="M3 12h2" />
      <path d="M19 12h2" />
      <path d="M5.6 5.6l1.4 1.4" />
      <path d="M17 17l1.4 1.4" />
      <path d="M5.6 18.4L7 17" />
      <path d="M17 7l1.4-1.4" />
    </svg>
  );
}

/** Moon — shown while light is active, indicating "click to go dark". */
function MoonIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M21 12.8A8.5 8.5 0 1111.2 3a7 7 0 009.8 9.8z" />
    </svg>
  );
}

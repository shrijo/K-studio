"use client";

import { useState, useEffect, use } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return <p>loading</p>;

  if (resolvedTheme === "dark") {
    return (
      <button
        aria-label="Switch to light mode"
        onClick={() => setTheme("light")}
        className="theme-switcher"
      >
        light
      </button>
    );
  }
  if (resolvedTheme === "light") {
    return (
      <button
        aria-label="Switch to dark mode"
        onClick={() => setTheme("dark")}
        className="theme-switcher"
      >
        dark
      </button>
    );
  }
}

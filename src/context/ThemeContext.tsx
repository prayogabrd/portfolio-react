// src/context/ThemeContext.tsx
import React, { useState, useEffect } from "react";
import ThemeContext, { type ThemeContextType } from "./theme-context-instance";

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [isLight, setIsLight]: [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>
  ] = useState<boolean>(() => {
    const saved: string | null = localStorage.getItem("theme");
    if (saved === "light") return true;
    if (saved === "dark") return false;

    const prefersDark: boolean = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    return !prefersDark;
  });

  useEffect((): void => {
    const theme: "light" | "dark" = isLight ? "light" : "dark";
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [isLight]);

  const value: ThemeContextType = { isLight, setIsLight };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

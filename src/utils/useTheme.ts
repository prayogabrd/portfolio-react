import React, { useEffect, useState } from "react";

const useTheme: () => {
  isLight: boolean;
  setIsLight: React.Dispatch<React.SetStateAction<boolean>>;
} = () => {
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

  return { isLight, setIsLight };
};

export default useTheme;

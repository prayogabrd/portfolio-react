// src/hooks/useThemeContext.ts
import { useContext } from "react";
import ThemeContext, {
  type ThemeContextType
} from "../context/theme-context-instance";

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }
  return context as ThemeContextType;
};

// src/context/theme-context-instance.ts
import { createContext } from "react";

export interface ThemeContextType {
  isLight: boolean;
  setIsLight: React.Dispatch<React.SetStateAction<boolean>>;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export default ThemeContext;

import { createContext } from 'react'
import type { ThemeDefinition, ThemeName } from '../types/portfolio'

export interface ThemeContextValue {
  theme: ThemeDefinition
  themes: ThemeDefinition[]
  setThemeById: (themeId: ThemeName) => void
}

export const ThemeContext = createContext<ThemeContextValue | null>(null)

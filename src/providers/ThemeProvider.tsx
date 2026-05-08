import {
  startTransition,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { themes } from '../data/portfolio'
import { ThemeContext, type ThemeContextValue } from './theme-context'
import type { ThemeName } from '../types/portfolio'

const STORAGE_KEY = 'premium-portfolio-theme'

function resolveInitialTheme(): ThemeName {
  if (typeof window === 'undefined') {
    return 'neon-dark'
  }

  const storedTheme = window.localStorage.getItem(STORAGE_KEY) as ThemeName | null

  if (storedTheme && themes.some((theme) => theme.id === storedTheme)) {
    return storedTheme
  }

  return 'neon-dark'
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [themeId, setThemeId] = useState<ThemeName>(resolveInitialTheme)
  const theme = useMemo(
    () => themes.find((candidate) => candidate.id === themeId) ?? themes[0],
    [themeId],
  )

  useEffect(() => {
    const root = document.documentElement

    root.dataset.theme = theme.id

    Object.entries(theme.colors).forEach(([token, value]) => {
      root.style.setProperty(token, value)
    })

    window.localStorage.setItem(STORAGE_KEY, theme.id)
  }, [theme])

  const contextValue = useMemo<ThemeContextValue>(
    () => ({
      theme,
      themes,
      setThemeById: (nextThemeId) => {
        startTransition(() => {
          setThemeId(nextThemeId)
        })
      },
    }),
    [theme],
  )

  return (
    <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>
  )
}

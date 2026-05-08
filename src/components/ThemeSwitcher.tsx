import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'
import { cn } from '../lib/cn'

export function ThemeSwitcher() {
  const { theme, themes, setThemeById } = useTheme()

  return (
    <div className="hidden items-center gap-2 xl:flex">
      <span className="theme-chip !px-3 !py-2 text-xs">
        <Sparkles className="h-3.5 w-3.5" />
        {theme.label}
      </span>
      <div className="flex items-center gap-1 rounded-full border border-[color:var(--border)] bg-[color:var(--panel-soft)] p-1 backdrop-blur-xl">
        {themes.map((option) => (
          <button
            key={option.id}
            type="button"
            className={cn(
              'relative rounded-full px-3 py-2 text-[0.72rem] font-medium tracking-[0.16em] transition-colors',
              theme.id === option.id
                ? 'text-[color:var(--text-primary)]'
                : 'text-[color:var(--text-muted)] hover:text-[color:var(--text-primary)]',
            )}
            onClick={() => setThemeById(option.id)}
          >
            {theme.id === option.id ? (
              <motion.span
                layoutId="theme-indicator"
                className="absolute inset-0 rounded-full bg-[linear-gradient(135deg,var(--accent-primary),var(--accent-secondary))] opacity-20"
              />
            ) : null}
            <span className="relative z-10">{option.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

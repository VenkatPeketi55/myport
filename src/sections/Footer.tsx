import { currentYear, navItems, portfolioMeta, socialLinks } from '../data/portfolio'
import { SocialLinks } from '../components/SocialLinks'

export function Footer() {
  return (
    <footer className="px-4 pb-28 pt-8 sm:px-6 lg:px-8 lg:pb-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-[32px] border border-[color:var(--border)] bg-[color:var(--panel-soft)] px-6 py-8 backdrop-blur-md lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="font-display text-2xl font-semibold tracking-[-0.05em] text-[color:var(--text-primary)]">
            {portfolioMeta.name}
          </p>
          <p className="mt-2 max-w-xl text-sm leading-7 text-[color:var(--text-secondary)]">
            Premium developer portfolio built with React, Vite, Tailwind CSS, Framer Motion, GSAP, Three.js, Lenis, EmailJS support, and theme-aware UI systems.
          </p>
        </div>

        <div className="flex flex-col gap-5 lg:items-end">
          <nav className="flex flex-wrap gap-4 text-sm text-[color:var(--text-secondary)]" aria-label="Footer">
            {navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="transition-colors hover:text-[color:var(--text-primary)]">
                {item.label}
              </a>
            ))}
          </nav>
          <SocialLinks links={socialLinks} compact />
          <p className="text-sm text-[color:var(--text-muted)]">
            © {currentYear} {portfolioMeta.name}. Built to feel like a modern product launch.
          </p>
        </div>
      </div>
    </footer>
  )
}

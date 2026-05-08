# Premium Developer Portfolio

A futuristic, recruiter-impressive developer portfolio built with `React`, `Vite`, `Tailwind CSS`, `Framer Motion`, `GSAP`, `React Three Fiber`, and `Lenis`.

## Highlights

- Five-theme system: `Neon Dark`, `Cyberpunk`, `Minimal White`, `Space Theme`, and `Matrix`
- Animated premium background with aurora gradients, moving particles, star field, grid motion, blobs, and mouse light
- Bento-inspired responsive layout with floating glass navigation, bottom dock, cursor trail, and smart scroll behavior
- Immersive hero, AI lab, GitHub insights, developer terminal, journey roadmap, achievements, project modal, and upgraded contact system
- Reusable components and centralized dummy content for fast customization
- Accessible semantics, keyboard-friendly interactions, reduced-motion fallbacks, and optional secret developer mode via Konami code
- SEO-ready metadata, sitemap, robots file, structured data, and placeholder resume download

## Stack

- `React 19`
- `Vite`
- `Tailwind CSS v4` via `@tailwindcss/vite`
- `Framer Motion`
- `GSAP`
- `React Three Fiber`
- `Three.js`
- `Lenis`
- `react-helmet-async`
- `@emailjs/browser`
- `lucide-react`
- `react-icons`

## Getting Started

```bash
npm install
npm run dev
```

Open the local Vite URL shown in the terminal.

## Optional Env Vars

Create a `.env` file if you want live integrations beyond the default demo fallbacks.

```bash
VITE_GITHUB_TOKEN=your_github_token
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```

- GitHub works without a token using public REST API fallbacks.
- GraphQL enrichment activates automatically when `VITE_GITHUB_TOKEN` is present.
- Contact form falls back to `mailto:` when EmailJS keys are missing.

## Scripts

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

## Project Structure

```text
src/
  components/   reusable UI primitives and interactive components
  data/         portfolio content and dummy data
  hooks/        shared behavior hooks
  lib/          small utilities
  sections/     page sections
  types/        shared TypeScript models
  App.tsx       top-level composition
  index.css     global styles and Tailwind entry
  main.tsx      app bootstrap and font imports
public/
  aarav-mehta-resume.pdf   placeholder resume file
  favicon.svg
  og-cover.svg
  robots.txt
  sitemap.xml
```

## Customization

- Update site content in [src/data/portfolio.ts](/C:/Users/z30189/Documents/v2/src/data/portfolio.ts).
- Adjust the visual system in [src/index.css](/C:/Users/z30189/Documents/v2/src/index.css).
- Reorder or replace sections in [src/App.tsx](/C:/Users/z30189/Documents/v2/src/App.tsx).
- Update theme tokens and switcher behavior in [src/providers/ThemeProvider.tsx](/C:/Users/z30189/Documents/v2/src/providers/ThemeProvider.tsx) and [src/data/portfolio.ts](/C:/Users/z30189/Documents/v2/src/data/portfolio.ts).
- Swap the placeholder resume at [public/aarav-mehta-resume.pdf](/C:/Users/z30189/Documents/v2/public/aarav-mehta-resume.pdf).

## Integration Notes

- EmailJS integration lives in [src/sections/ContactSection.tsx](/C:/Users/z30189/Documents/v2/src/sections/ContactSection.tsx).
- GitHub fetching and GraphQL fallback logic live in [src/services/github.ts](/C:/Users/z30189/Documents/v2/src/services/github.ts).
- The AI assistant and recommendation content are powered by local portfolio data in [src/data/portfolio.ts](/C:/Users/z30189/Documents/v2/src/data/portfolio.ts).
- The 3D globe is lazily loaded from [src/components/three/GlobeCanvas.tsx](/C:/Users/z30189/Documents/v2/src/components/three/GlobeCanvas.tsx).

## Build Notes

- Fonts are bundled locally with `@fontsource`.
- Tailwind is configured through the Vite plugin, so no separate Tailwind config file is required.
- Metadata is enhanced at runtime via [src/components/AppSeo.tsx](/C:/Users/z30189/Documents/v2/src/components/AppSeo.tsx).
- The large 3D payload is isolated into a lazy-loaded chunk so the main application stays lighter.

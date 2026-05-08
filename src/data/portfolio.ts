import {
  Award,
  BadgeCheck,
  BrainCircuit,
  BriefcaseBusiness,
  Compass,
  Globe2,
  GraduationCap,
  LayoutDashboard,
  Layers3,
  Mail,
  MapPinned,
  MessageCircleMore,
  Palette,
  Rocket,
  ServerCog,
  Sparkles,
  Trophy,
  WandSparkles,
  Waypoints,
  Workflow,
  Wrench,
} from 'lucide-react'
import {
  SiDocker,
  SiExpress,
  SiFigma,
  SiFramer,
  SiGit,
  SiGraphql,
  SiMongodb,
  SiNodedotjs,
  SiOpenai,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVercel,
} from 'react-icons/si'
import { FaDribbble, FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa6'
import type {
  Achievement,
  DashboardCard,
  ExperienceHighlight,
  FloatingBadge,
  HeroHighlight,
  NavItem,
  PortfolioMeta,
  Project,
  RoadmapEntry,
  Service,
  SkillCategory,
  SocialLink,
  Stat,
  TechStackItem,
  TerminalCommand,
  Testimonial,
  ThemeDefinition,
  TimelineEntry,
} from '../types/portfolio'

export const portfolioMeta: PortfolioMeta = {
  name: 'Aarav Mehta',
  role: 'Senior Frontend Engineer building cinematic product experiences',
  shortRole: 'Full Stack Engineer',
  intro: 'Futuristic portfolio for modern product teams, recruiters, and founders.',
  headline: 'Premium interfaces, AI-native workflows, and motion systems that feel alive.',
  statement:
    'I build polished developer portfolios, SaaS products, and launch surfaces that feel like product films instead of static pages. Design taste, engineering rigor, and interactive storytelling all belong in the same system.',
  bio: 'Product-minded engineer with 8+ years of experience shaping premium web experiences across SaaS, AI, fintech, ecommerce, and internal tooling.',
  about:
    'My sweet spot is turning complex products into experiences that feel immediate, smooth, and memorable. I care about motion language, clean architecture, accessibility, performance, and the kinds of details recruiters and customers notice in the first 20 seconds.',
  heroBlurb:
    'Currently focused on AI-enhanced interfaces, immersive product marketing pages, and scalable frontend systems with tasteful motion and strong conversion intent.',
  location: 'Bengaluru, India',
  availability: 'Available for premium freelance, founding, and product design-engineering work',
  email: 'hello@aaravmehta.dev',
  phone: '+91 98765 43210',
  whatsapp: '919876543210',
  calendly: 'https://calendly.com/aaravmehta/intro-call',
  githubUsername: 'aaravmehta',
  githubFallbackUsername: 'vercel',
  githubGraphqlEndpoint: 'https://api.github.com/graphql',
  resumeHref: '/aarav-mehta-resume.pdf',
  typingRoles: [
    'Shipping premium React experiences',
    'Designing AI-native product surfaces',
    'Building full stack launch systems',
    'Crafting motion-rich developer brands',
  ],
  aiPrompts: [
    'What kind of teams do you work best with?',
    'Which project is best for a React-heavy product?',
    'How would you approach a fintech dashboard redesign?',
    'What is your strongest combination of design and engineering skills?',
  ],
}

export const themes: ThemeDefinition[] = [
  {
    id: 'neon-dark',
    label: 'Neon Dark',
    mood: 'Futuristic teal-violet launch mode',
    colors: {
      '--bg-app': '#070B14',
      '--bg-app-secondary': '#0E1422',
      '--panel': 'rgba(11, 18, 32, 0.68)',
      '--panel-strong': 'rgba(13, 21, 37, 0.88)',
      '--panel-soft': 'rgba(255, 255, 255, 0.05)',
      '--border': 'rgba(255, 255, 255, 0.12)',
      '--text-primary': '#F8FAFC',
      '--text-secondary': '#C5D1E1',
      '--text-muted': '#8EA0B7',
      '--accent-primary': '#7C3AED',
      '--accent-secondary': '#06B6D4',
      '--accent-tertiary': '#67E8F9',
      '--blob-a': 'rgba(124, 58, 237, 0.34)',
      '--blob-b': 'rgba(6, 182, 212, 0.28)',
      '--blob-c': 'rgba(99, 102, 241, 0.24)',
      '--grid': 'rgba(255, 255, 255, 0.05)',
      '--shadow': 'rgba(5, 8, 18, 0.42)',
    },
  },
  {
    id: 'cyberpunk',
    label: 'Cyberpunk',
    mood: 'Electric magenta, cyan, and acid edge',
    colors: {
      '--bg-app': '#090511',
      '--bg-app-secondary': '#15041E',
      '--panel': 'rgba(20, 10, 28, 0.72)',
      '--panel-strong': 'rgba(26, 8, 36, 0.9)',
      '--panel-soft': 'rgba(255, 255, 255, 0.05)',
      '--border': 'rgba(255, 255, 255, 0.14)',
      '--text-primary': '#FFF8FC',
      '--text-secondary': '#F5D5EF',
      '--text-muted': '#C99BC3',
      '--accent-primary': '#FF2FD1',
      '--accent-secondary': '#00E5FF',
      '--accent-tertiary': '#FDE047',
      '--blob-a': 'rgba(255, 47, 209, 0.28)',
      '--blob-b': 'rgba(0, 229, 255, 0.22)',
      '--blob-c': 'rgba(253, 224, 71, 0.18)',
      '--grid': 'rgba(255, 255, 255, 0.05)',
      '--shadow': 'rgba(10, 2, 16, 0.5)',
    },
  },
  {
    id: 'minimal-white',
    label: 'Minimal White',
    mood: 'Editorial, bright, and ultra-clean',
    colors: {
      '--bg-app': '#F4F7FB',
      '--bg-app-secondary': '#FFFFFF',
      '--panel': 'rgba(255, 255, 255, 0.84)',
      '--panel-strong': 'rgba(255, 255, 255, 0.94)',
      '--panel-soft': 'rgba(15, 23, 42, 0.03)',
      '--border': 'rgba(15, 23, 42, 0.1)',
      '--text-primary': '#0F172A',
      '--text-secondary': '#334155',
      '--text-muted': '#64748B',
      '--accent-primary': '#7C3AED',
      '--accent-secondary': '#0891B2',
      '--accent-tertiary': '#4338CA',
      '--blob-a': 'rgba(124, 58, 237, 0.12)',
      '--blob-b': 'rgba(8, 145, 178, 0.11)',
      '--blob-c': 'rgba(99, 102, 241, 0.08)',
      '--grid': 'rgba(15, 23, 42, 0.05)',
      '--shadow': 'rgba(15, 23, 42, 0.08)',
    },
  },
  {
    id: 'space',
    label: 'Space Theme',
    mood: 'Orbital indigo and deep-space glass',
    colors: {
      '--bg-app': '#050816',
      '--bg-app-secondary': '#0A1230',
      '--panel': 'rgba(8, 14, 34, 0.72)',
      '--panel-strong': 'rgba(9, 15, 40, 0.9)',
      '--panel-soft': 'rgba(255, 255, 255, 0.05)',
      '--border': 'rgba(255, 255, 255, 0.11)',
      '--text-primary': '#F8FAFC',
      '--text-secondary': '#D6E0F5',
      '--text-muted': '#90A3C4',
      '--accent-primary': '#6366F1',
      '--accent-secondary': '#22D3EE',
      '--accent-tertiary': '#A78BFA',
      '--blob-a': 'rgba(99, 102, 241, 0.28)',
      '--blob-b': 'rgba(34, 211, 238, 0.22)',
      '--blob-c': 'rgba(167, 139, 250, 0.18)',
      '--grid': 'rgba(255, 255, 255, 0.04)',
      '--shadow': 'rgba(2, 6, 23, 0.45)',
    },
  },
  {
    id: 'matrix',
    label: 'Matrix',
    mood: 'Terminal green with stealth glow',
    colors: {
      '--bg-app': '#030A05',
      '--bg-app-secondary': '#07140B',
      '--panel': 'rgba(6, 20, 10, 0.76)',
      '--panel-strong': 'rgba(6, 22, 12, 0.92)',
      '--panel-soft': 'rgba(255, 255, 255, 0.04)',
      '--border': 'rgba(163, 230, 53, 0.18)',
      '--text-primary': '#ECFCCB',
      '--text-secondary': '#BEF264',
      '--text-muted': '#84CC16',
      '--accent-primary': '#22C55E',
      '--accent-secondary': '#A3E635',
      '--accent-tertiary': '#4ADE80',
      '--blob-a': 'rgba(34, 197, 94, 0.28)',
      '--blob-b': 'rgba(163, 230, 53, 0.18)',
      '--blob-c': 'rgba(74, 222, 128, 0.16)',
      '--grid': 'rgba(163, 230, 53, 0.05)',
      '--shadow': 'rgba(1, 10, 3, 0.42)',
    },
  },
]

export const navItems: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'projects', label: 'Projects' },
  { id: 'github', label: 'GitHub' },
  { id: 'journey', label: 'Journey' },
  { id: 'contact', label: 'Contact' },
]

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/aaravmehta', icon: FaGithub },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/aaravmehta',
    icon: FaLinkedinIn,
  },
  { label: 'Dribbble', href: 'https://dribbble.com/aaravmehta', icon: FaDribbble },
  { label: 'WhatsApp', href: `https://wa.me/${portfolioMeta.whatsapp}`, icon: FaWhatsapp },
]

export const heroHighlights: HeroHighlight[] = [
  { label: 'Base', value: portfolioMeta.location },
  { label: 'Mode', value: 'AI-native product design engineering' },
  { label: 'Status', value: 'Open for premium remote collaborations' },
]

export const floatingBadges: FloatingBadge[] = [
  { label: 'React Developer', icon: SiReact },
  { label: 'Full Stack Engineer', icon: SiNodedotjs },
  { label: 'UI Designer', icon: SiFigma },
]

export const stats: Stat[] = [
  {
    value: 8,
    suffix: '+',
    label: 'Years Experience',
    detail: 'Across SaaS, AI, ecommerce, and fintech experiences.',
  },
  {
    value: 32,
    suffix: '+',
    label: 'Premium Launches',
    detail: 'Products, redesigns, internal tools, and immersive portfolio experiences.',
  },
  {
    value: 98,
    suffix: '%',
    label: 'Delivery Satisfaction',
    detail: 'High-trust collaborations built around velocity and polish.',
  },
  {
    value: 12,
    label: 'Global Teams',
    detail: 'Distributed companies supported across product, growth, and brand.',
  },
]

export const dashboardCards: DashboardCard[] = [
  {
    title: 'Availability',
    description: 'Selective product design-engineering engagements for Q3 and Q4.',
    value: '2 slots open',
    icon: Sparkles,
  },
  {
    title: 'GitHub Focus',
    description: 'Frontend systems, motion patterns, AI prototypes, and DX tooling.',
    value: 'React + TypeScript',
    icon: FaGithub,
  },
  {
    title: 'Contact Velocity',
    description: 'Fast async response for briefs, audits, and design-engineering calls.',
    value: '< 24 hrs',
    icon: MessageCircleMore,
  },
  {
    title: 'Preferred Scope',
    description: 'Immersive marketing pages, dashboards, product shells, and brand systems.',
    value: '0→1 and redesigns',
    icon: LayoutDashboard,
  },
]

export const experienceHighlights: ExperienceHighlight[] = [
  {
    company: 'Northstar Labs',
    role: 'Lead Frontend Engineer',
    period: '2023 - Present',
    summary:
      'Directed a premium analytics redesign with cinematic onboarding, motion systems, and a refreshed design language.',
  },
  {
    company: 'Orbit Commerce',
    role: 'Senior Product Engineer',
    period: '2020 - 2023',
    summary:
      'Built immersive retail flows, experimentation tooling, and internal admin interfaces used by global product teams.',
  },
  {
    company: 'Freelance Studio',
    role: 'UI Engineer & Consultant',
    period: '2018 - 2020',
    summary:
      'Partnered with startup founders to create investor-ready MVPs, sharp landing pages, and scalable frontend foundations.',
  },
]

export const techStack: TechStackItem[] = [
  { name: 'React', icon: SiReact },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'Framer Motion', icon: SiFramer },
  { name: 'GSAP', icon: WandSparkles },
  { name: 'Three.js', icon: SiThreedotjs },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'Supabase', icon: SiSupabase },
]

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    description: 'High-performance interfaces that feel cinematic, tactile, and precise.',
    icon: Layers3,
    skills: [
      {
        name: 'React',
        icon: SiReact,
        level: 'Expert',
        note: 'App architecture, state design, performance, SSR-aware composition.',
      },
      {
        name: 'TypeScript',
        icon: SiTypescript,
        level: 'Expert',
        note: 'Strict typing, domain modeling, reusable patterns, large-scale refactors.',
      },
      {
        name: 'Tailwind CSS',
        icon: SiTailwindcss,
        level: 'Advanced',
        note: 'Themeable design systems, motion-aware UI, and premium responsive polish.',
      },
      {
        name: 'Framer Motion',
        icon: SiFramer,
        level: 'Advanced',
        note: 'Gesture systems, layout choreography, micro-interactions, and scroll reveals.',
      },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    description: 'APIs and services designed to support rich product workflows cleanly.',
    icon: ServerCog,
    skills: [
      {
        name: 'Node.js',
        icon: SiNodedotjs,
        level: 'Advanced',
        note: 'REST endpoints, server actions, integrations, tooling, and orchestration.',
      },
      {
        name: 'Express',
        icon: SiExpress,
        level: 'Advanced',
        note: 'Robust API delivery, middleware layering, and production-safe structure.',
      },
      {
        name: 'GraphQL',
        icon: SiGraphql,
        level: 'Intermediate',
        note: 'Schema-driven client experiences and developer-friendly data composition.',
      },
      {
        name: 'OpenAI APIs',
        icon: SiOpenai,
        level: 'Intermediate',
        note: 'AI copilots, summarization flows, recommendation layers, and automation.',
      },
    ],
  },
  {
    id: 'data',
    title: 'Database',
    description: 'Reliable data foundations for modern products and dashboards.',
    icon: BriefcaseBusiness,
    skills: [
      {
        name: 'PostgreSQL',
        icon: SiPostgresql,
        level: 'Advanced',
        note: 'Schema design, query optimization, and reporting-friendly modeling.',
      },
      {
        name: 'Prisma',
        icon: SiPrisma,
        level: 'Advanced',
        note: 'Type-safe database workflows and migration management for fast teams.',
      },
      {
        name: 'Supabase',
        icon: SiSupabase,
        level: 'Advanced',
        note: 'Realtime products, auth, storage, and managed backend acceleration.',
      },
      {
        name: 'MongoDB',
        icon: SiMongodb,
        level: 'Intermediate',
        note: 'Flexible content and document models for exploratory or content-heavy builds.',
      },
    ],
  },
  {
    id: 'tooling',
    title: 'Tools',
    description: 'Motion, deployment, collaboration, and product craftsmanship tooling.',
    icon: Wrench,
    skills: [
      {
        name: 'Docker',
        icon: SiDocker,
        level: 'Advanced',
        note: 'Stable dev environments and clean handoff for growing teams.',
      },
      {
        name: 'Git',
        icon: SiGit,
        level: 'Advanced',
        note: 'Healthy review workflows, branch discipline, and deployment confidence.',
      },
      {
        name: 'Vercel',
        icon: SiVercel,
        level: 'Advanced',
        note: 'Instant previews, edge-friendly apps, and frictionless product iteration.',
      },
      {
        name: 'Figma',
        icon: SiFigma,
        level: 'Advanced',
        note: 'Design-engineering feedback loops that keep concepts crisp through implementation.',
      },
    ],
  },
]

export const projectFilters = [
  'All',
  'React',
  'Full Stack',
  'UI/UX',
  'AI',
  'Ecommerce',
  'Trading Apps',
]

export const projects: Project[] = [
  {
    slug: 'zenith-cloud',
    title: 'Zenith Cloud',
    category: 'Full Stack',
    categories: ['React', 'Full Stack', 'UI/UX'],
    year: '2026',
    description:
      'A multi-tenant analytics cockpit with guided onboarding, crisp information density, and a motion-first design system.',
    liveUrl: 'https://example.com/zenith-cloud',
    repoUrl: 'https://github.com/aaravmehta/zenith-cloud',
    tags: ['React', 'TypeScript', 'Tailwind', 'Node.js', 'PostgreSQL'],
    metrics: ['32% faster onboarding', '4.9/5 operator score'],
    accentFrom: '#7C3AED',
    accentTo: '#06B6D4',
    preview: {
      eyebrow: 'Analytics cockpit',
      headline: 'Signal-rich dashboards that feel expensive and effortless',
      detail: 'Realtime reporting, collaborative workspaces, and focused motion cues for power users.',
    },
    before: 'Dense dashboards with low visual hierarchy and slow first-time activation.',
    after: 'Calmer data layouts, cinematic onboarding, and modular panels that guide user attention.',
    walkthrough: [
      'Mapped the operator journey from onboarding to weekly reporting workflows.',
      'Introduced a token-driven design system with theme-aware glass surfaces and motion rules.',
      'Built modular chart and workspace shells for fast rollout across product teams.',
    ],
    outcomes: ['Design system adoption across 4 teams', 'Performance consistently above 95 Lighthouse'],
    demoType: 'iframe',
  },
  {
    slug: 'luma-commerce',
    title: 'Luma Commerce',
    category: 'Ecommerce',
    categories: ['React', 'UI/UX', 'Ecommerce'],
    year: '2025',
    description:
      'A premium retail experience that blends editorial storytelling, personalization, and smooth conversion moments.',
    liveUrl: 'https://example.com/luma-commerce',
    repoUrl: 'https://github.com/aaravmehta/luma-commerce',
    tags: ['Next.js', 'Framer Motion', 'Supabase', 'Stripe'],
    metrics: ['21% lift in conversion', '18% boost in repeat visits'],
    accentFrom: '#F97316',
    accentTo: '#EC4899',
    preview: {
      eyebrow: 'Luxury retail',
      headline: 'Immersive shopping flows tuned for brand and conversion',
      detail: 'Fast cart interactions, layered storytelling, and premium motion rhythm from landing to checkout.',
    },
    before: 'Generic storefront templates with weak storytelling and shallow engagement.',
    after: 'Branded narrative-driven journeys with sticky product context and reduced checkout friction.',
    walkthrough: [
      'Rebuilt collection and PDP architecture around brand narrative and conversion checkpoints.',
      'Created animated recommendation rails and quick-buy interactions for mobile-first flows.',
      'Integrated payments, inventory sync, and CRM capture within a faster UI shell.',
    ],
    outcomes: ['Higher AOV from product storytelling', 'Improved retention from personalized return journeys'],
    demoType: 'mock',
  },
  {
    slug: 'orbit-ops',
    title: 'Orbit Ops',
    category: 'AI',
    categories: ['React', 'Full Stack', 'AI'],
    year: '2025',
    description:
      'An AI-assisted ops suite that summarizes incidents, recommends actions, and keeps distributed teams aligned in one command center.',
    liveUrl: 'https://example.com/orbit-ops',
    repoUrl: 'https://github.com/aaravmehta/orbit-ops',
    tags: ['React', 'OpenAI', 'GraphQL', 'Redis'],
    metrics: ['58% faster triage', '40% fewer manual handoffs'],
    accentFrom: '#0EA5E9',
    accentTo: '#8B5CF6',
    preview: {
      eyebrow: 'Ops intelligence',
      headline: 'AI copilots for high-velocity product and infra teams',
      detail: 'Incident recaps, workflow automation, live activity streams, and guided operator decisions.',
    },
    before: 'Fragmented incident threads and context switching between five tools.',
    after: 'A single command center with AI summaries, shared activity trails, and faster resolution loops.',
    walkthrough: [
      'Modeled incident response flows to identify where AI could reduce manual coordination.',
      'Built assistant surfaces for summaries, suggested owners, and next-step recommendations.',
      'Introduced live event updates and decision-ready views for leads and responders.',
    ],
    outcomes: ['Reduced coordination drag during incidents', 'Improved clarity for cross-functional responders'],
    demoType: 'mock',
  },
  {
    slug: 'alpha-trade',
    title: 'Alpha Trade',
    category: 'Trading Apps',
    categories: ['React', 'Full Stack', 'Trading Apps'],
    year: '2024',
    description:
      'A fast trading dashboard concept focused on glanceable risk views, execution clarity, and motion-aware live data.',
    liveUrl: 'https://example.com/alpha-trade',
    repoUrl: 'https://github.com/aaravmehta/alpha-trade',
    tags: ['React', 'TypeScript', 'WebSockets', 'Node.js'],
    metrics: ['27% faster order review', '34% fewer misclicks in testing'],
    accentFrom: '#10B981',
    accentTo: '#0EA5E9',
    preview: {
      eyebrow: 'Trading workstation',
      headline: 'Low-latency portfolio visibility with deliberate motion cues',
      detail: 'Execution panels, watchlists, and position heatmaps for focused decision making.',
    },
    before: 'Noisy screens, weak hierarchy, and risky action placement under pressure.',
    after: 'Clearer risk framing, stronger action grouping, and smoother live-data choreography.',
    walkthrough: [
      'Designed watchlists and execution panels around rapid scan patterns and operator trust.',
      'Introduced motion constraints so live data feels informative instead of distracting.',
      'Built resilient layout modules for different desk configurations and screen sizes.',
    ],
    outcomes: ['Sharper interaction confidence', 'Cleaner live data storytelling for active users'],
    demoType: 'mock',
  },
  {
    slug: 'prism-studio',
    title: 'Prism Studio',
    category: 'UI/UX',
    categories: ['React', 'UI/UX'],
    year: '2024',
    description:
      'A bold studio platform with cinematic case studies, premium transitions, and elevated lead-capture experiences.',
    liveUrl: 'https://example.com/prism-studio',
    repoUrl: 'https://github.com/aaravmehta/prism-studio',
    tags: ['Vite', 'React', 'GSAP', 'Firebase'],
    metrics: ['2.6x more qualified leads', '48% longer session duration'],
    accentFrom: '#22C55E',
    accentTo: '#06B6D4',
    preview: {
      eyebrow: 'Studio experience',
      headline: 'Case-study storytelling with strong emotional pacing',
      detail: 'Bold typography, interactive reveals, and booking flows tuned for creative service brands.',
    },
    before: 'Flat portfolio blocks that undersold the quality of the work.',
    after: 'Immersive storytelling with clearer proof, pacing, and conversion moments.',
    walkthrough: [
      'Reframed portfolio content into layered narratives with motion-led reveals.',
      'Paired studio credibility signals with a quieter, more intentional booking flow.',
      'Created reusable story modules that made future case studies faster to publish.',
    ],
    outcomes: ['More qualified inbound leads', 'Stronger perception of premium service quality'],
    demoType: 'mock',
  },
  {
    slug: 'meridian-labs',
    title: 'Meridian Labs',
    category: 'React',
    categories: ['React', 'AI', 'UI/UX'],
    year: '2023',
    description:
      'An AI research portal concept with interactive documentation, prompt workspaces, and product demo narratives.',
    liveUrl: 'https://example.com/meridian-labs',
    repoUrl: 'https://github.com/aaravmehta/meridian-labs',
    tags: ['React', 'Tailwind', 'OpenAI', 'Contentlayer'],
    metrics: ['39% better demo engagement', '54% more product trial clicks'],
    accentFrom: '#A855F7',
    accentTo: '#14B8A6',
    preview: {
      eyebrow: 'AI launch platform',
      headline: 'Research credibility and product storytelling in one narrative shell',
      detail: 'Interactive docs, embedded prompt workflows, and launch-ready motion systems.',
    },
    before: 'Disconnected docs, demos, and marketing surfaces.',
    after: 'One connected experience linking learning, proof, and conversion.',
    walkthrough: [
      'Unified product education and launch storytelling into a single branded flow.',
      'Designed interactive prompt cards and live capability teasers for stronger exploration.',
      'Built modular content blocks for rapid AI feature launches.',
    ],
    outcomes: ['Stronger conversion from docs to product trial', 'More compelling AI feature storytelling'],
    demoType: 'iframe',
  },
]

export const timeline: TimelineEntry[] = [
  {
    company: 'Northstar Labs',
    role: 'Lead Frontend Engineer',
    duration: '2023 - Present',
    location: 'Remote',
    responsibilities: [
      'Led a design system and motion overhaul across four product surfaces.',
      'Partnered with product leadership on activation, monetization, and retention UX.',
      'Raised accessibility, performance, and storytelling quality across customer-facing flows.',
    ],
  },
  {
    company: 'Orbit Commerce',
    role: 'Senior Product Engineer',
    duration: '2020 - 2023',
    location: 'Singapore / Remote',
    responsibilities: [
      'Shipped conversion-focused commerce experiences for premium consumer brands.',
      'Built experimentation tooling that reduced campaign setup from days to hours.',
      'Mentored teammates on frontend architecture, review quality, and motion craft.',
    ],
  },
  {
    company: 'Freelance Studio',
    role: 'UI Engineer & Consultant',
    duration: '2018 - 2020',
    location: 'Global',
    responsibilities: [
      'Worked closely with founders to define brand-led MVPs and launch narratives.',
      'Delivered investor-ready prototypes with production-minded code foundations.',
      'Built reusable kits that made post-launch product evolution easier for teams.',
    ],
  },
]

export const services: Service[] = [
  {
    title: 'Web Development',
    description:
      'Premium marketing pages, launch sites, and polished application surfaces built for performance and conversion.',
    icon: Globe2,
    outcomes: ['Launch-ready polish', 'Fast responsive builds', 'Strong SEO and accessibility foundations'],
  },
  {
    title: 'UI/UX Design',
    description:
      'Cinematic interfaces, information hierarchy, and motion systems tuned for brand and product clarity.',
    icon: Palette,
    outcomes: ['Product storytelling', 'Design systems', 'Interaction direction and refinement'],
  },
  {
    title: 'Full Stack Applications',
    description:
      'Scalable product builds spanning frontend architecture, backend delivery, data layers, and deployment.',
    icon: Rocket,
    outcomes: ['App shell architecture', 'Dashboards and workflows', 'Production-safe patterns'],
  },
  {
    title: 'API Integration',
    description:
      'Third-party services, AI workflows, and internal tooling integrations that feel seamless inside the product.',
    icon: Workflow,
    outcomes: ['Payments and automation', 'AI assistants and tooling', 'CRM, CMS, and analytics integration'],
  },
]

export const roadmap: RoadmapEntry[] = [
  {
    phase: '01',
    period: '2017 - 2018',
    title: 'Learning Journey',
    description:
      'Started with interface fundamentals, static sites, and an obsession with how polished products feel.',
    icon: GraduationCap,
    points: [
      'Built the first interactive portfolio experiments.',
      'Learned responsive design, CSS systems, and JavaScript fundamentals.',
      'Started recreating product UI from Apple, Stripe, and Dribbble inspirations.',
    ],
  },
  {
    phase: '02',
    period: '2019 - 2020',
    title: 'Freelance Momentum',
    description:
      'Moved into client-facing work, rapid MVP delivery, and stronger product communication skills.',
    icon: Compass,
    points: [
      'Shipped startup landing pages, dashboards, and investor demos.',
      'Refined storytelling around case studies and product launches.',
      'Began blending design thinking with scalable implementation.',
    ],
  },
  {
    phase: '03',
    period: '2021 - 2023',
    title: 'Experience Milestones',
    description:
      'Took on larger product systems, internal tooling, and collaborative design-engineering leadership.',
    icon: Waypoints,
    points: [
      'Led redesign initiatives with measurable business outcomes.',
      'Mentored engineers and improved frontend architecture quality.',
      'Built stronger accessibility and performance habits into delivery.',
    ],
  },
  {
    phase: '04',
    period: '2024 - 2026',
    title: 'AI + Motion Era',
    description:
      'Focused on AI-native workflows, premium motion design, and more immersive product storytelling.',
    icon: BrainCircuit,
    points: [
      'Created assistant-like product surfaces and recommendation systems.',
      'Integrated 3D, motion, and cinematic page choreography into product launches.',
      'Expanded into richer product-brand systems for modern startups.',
    ],
  },
]

export const achievements: Achievement[] = [
  {
    title: 'Frontend Excellence Award',
    issuer: 'Northstar Labs',
    year: '2025',
    description:
      'Recognized for raising product polish, performance, and design-engineering collaboration quality.',
    icon: Award,
  },
  {
    title: 'AI Workflow Hackathon Winner',
    issuer: 'Orbit Commerce',
    year: '2024',
    description:
      'Built a rapid internal AI triage assistant that reduced repetitive operator work.',
    icon: Trophy,
  },
  {
    title: 'Advanced Product Design Certification',
    issuer: 'Design Systems Institute',
    year: '2023',
    description:
      'Completed advanced coursework in systems thinking, UI architecture, and product narrative design.',
    icon: BadgeCheck,
  },
  {
    title: 'Motion for Interfaces Lab',
    issuer: 'Interactive Design Guild',
    year: '2022',
    description:
      'Specialized in interface motion principles, sequencing, and attention-guiding animation.',
    icon: WandSparkles,
  },
]

export const testimonials: Testimonial[] = [
  {
    quote:
      'Aarav turned a good product into a premium experience. The final interface felt incredibly deliberate, smooth, and confident.',
    name: 'Maya Chen',
    role: 'Head of Product',
    company: 'Northstar Labs',
    logo: 'Northstar',
    videoLabel: 'Product lead testimonial',
  },
  {
    quote:
      'He thinks like a designer, architect, and operator at the same time. That combination made every decision sharper.',
    name: 'Jonas Richter',
    role: 'Founder',
    company: 'Luma Commerce',
    logo: 'Luma',
    videoLabel: 'Founder testimonial',
  },
  {
    quote:
      'The motion was tasteful, the implementation was clean, and the product story finally matched the quality of the team behind it.',
    name: 'Priya Nair',
    role: 'Design Director',
    company: 'Orbit Studio',
    logo: 'Orbit',
    videoLabel: 'Design director testimonial',
  },
]

export const terminalCommands: TerminalCommand[] = [
  {
    command: 'help',
    lines: [
      'Available commands:',
      'about    - quick founder-friendly summary',
      'skills   - core stack and specialties',
      'projects - notable work and categories',
      'contact  - fastest ways to reach out',
      'resume   - resume and availability info',
      'clear    - reset terminal output',
    ],
  },
  {
    command: 'about',
    lines: [
      'Aarav Mehta',
      'Senior Frontend / Full Stack Engineer',
      'Specializes in cinematic UI, SaaS product surfaces, and AI-native workflows.',
    ],
  },
  {
    command: 'skills',
    lines: [
      'Frontend: React, TypeScript, Tailwind, Framer Motion, GSAP',
      'Backend: Node.js, Express, GraphQL, OpenAI integrations',
      'Data: PostgreSQL, Prisma, Supabase, MongoDB',
      'Tooling: Git, Docker, Vercel, Figma',
    ],
  },
  {
    command: 'projects',
    lines: [
      'Highlighted categories: React, Full Stack, UI/UX, AI, Ecommerce, Trading Apps',
      'Featured builds: Zenith Cloud, Orbit Ops, Alpha Trade, Luma Commerce',
    ],
  },
  {
    command: 'contact',
    lines: [
      `Email: ${portfolioMeta.email}`,
      `WhatsApp: +${portfolioMeta.whatsapp}`,
      `Calendly: ${portfolioMeta.calendly}`,
      'Response time: usually within 24 hours.',
    ],
  },
  {
    command: 'resume',
    lines: [
      `Resume: ${portfolioMeta.resumeHref}`,
      'Current status: open for selective premium collaborations.',
    ],
  },
]

export const contactMethods = [
  {
    label: 'Email',
    value: portfolioMeta.email,
    href: `mailto:${portfolioMeta.email}`,
    icon: Mail,
  },
  {
    label: 'WhatsApp',
    value: '+91 98765 43210',
    href: `https://wa.me/${portfolioMeta.whatsapp}`,
    icon: MessageCircleMore,
  },
  {
    label: 'Calendly',
    value: 'Book an intro call',
    href: portfolioMeta.calendly,
    icon: MapPinned,
  },
] satisfies Array<{
  label: string
  value: string
  href: string
  icon: typeof Mail
}>

export const askMeAnswers = [
  {
    question: 'What kind of products do you love building?',
    answer:
      'Products where interface quality changes perception immediately: SaaS dashboards, AI tools, launch pages, and premium ecommerce flows.',
  },
  {
    question: 'How do you balance design and engineering?',
    answer:
      'I treat motion, hierarchy, responsiveness, and maintainability as one system. The design should feel premium, but the code should stay calm and reusable.',
  },
  {
    question: 'Which project should I look at first?',
    answer:
      'If you care about dashboards, start with Zenith Cloud. If you want AI-native workflows, Orbit Ops is the strongest fit. For storytelling and conversion, open Luma Commerce or Prism Studio.',
  },
  {
    question: 'What makes this portfolio different?',
    answer:
      'It is built like a product launch experience, not a static resume. Motion, themes, 3D, and interactive utilities all reinforce the engineering and product story.',
  },
]

export const aiRecommendations = [
  {
    prompt: 'Show me the best work for a React-heavy SaaS team',
    title: 'React + SaaS Match',
    explanation:
      'Zenith Cloud and Meridian Labs show the strongest combination of React architecture, content pacing, and premium interaction detail.',
    matchingProjects: ['Zenith Cloud', 'Meridian Labs'],
  },
  {
    prompt: 'Recommend something for AI product builders',
    title: 'AI-native Recommendation',
    explanation:
      'Orbit Ops is the clearest example of assistant UX, operational decision support, and productized AI workflows.',
    matchingProjects: ['Orbit Ops', 'Meridian Labs'],
  },
  {
    prompt: 'What should a design-forward recruiter open first?',
    title: 'Visual Craft Recommendation',
    explanation:
      'Prism Studio and Luma Commerce are the strongest examples of cinematic pacing, visual polish, and conversion-minded storytelling.',
    matchingProjects: ['Prism Studio', 'Luma Commerce'],
  },
]

export const resumeAnalyzerKeywords = {
  strengths: [
    'react',
    'typescript',
    'tailwind',
    'motion',
    'design system',
    'node',
    'graphql',
    'ai',
    'accessibility',
    'performance',
  ],
  bonus: ['vercel', 'three.js', 'framer motion', 'seo', 'supabase', 'product thinking'],
}

export const repoTopicHints = ['portfolio', 'ui', 'motion', 'ai', 'react', 'fullstack']

export const hiddenFacts = [
  'Konami code unlocks a secret developer mode overlay.',
  'Theme preference is stored locally for repeat visits.',
  'The AI assistant suggests projects from local portfolio knowledge without a backend.',
  'GitHub GraphQL support is wired for optional token-based enrichment.',
]

export const currentYear = new Date().getFullYear()

import type { ComponentType } from 'react'

export type IconComponent = ComponentType<{ className?: string }>

export type ThemeName =
  | 'neon-dark'
  | 'cyberpunk'
  | 'minimal-white'
  | 'space'
  | 'matrix'

export type SectionId =
  | 'home'
  | 'dashboard'
  | 'about'
  | 'skills'
  | 'projects'
  | 'ai-lab'
  | 'github'
  | 'terminal'
  | 'journey'
  | 'experience'
  | 'services'
  | 'achievements'
  | 'testimonials'
  | 'contact'

export interface ThemeDefinition {
  id: ThemeName
  label: string
  mood: string
  colors: Record<string, string>
}

export interface NavItem {
  id: SectionId
  label: string
}

export interface SocialLink {
  label: string
  href: string
  icon: IconComponent
}

export interface HeroHighlight {
  label: string
  value: string
}

export interface FloatingBadge {
  label: string
  icon: IconComponent
}

export interface Stat {
  value: number
  label: string
  detail: string
  prefix?: string
  suffix?: string
}

export interface ExperienceHighlight {
  company: string
  role: string
  period: string
  summary: string
}

export interface TechStackItem {
  name: string
  icon: IconComponent
}

export interface SkillItem {
  name: string
  icon: IconComponent
  level: string
  note: string
}

export interface SkillCategory {
  id: string
  title: string
  description: string
  icon: IconComponent
  skills: SkillItem[]
}

export interface ProjectPreview {
  eyebrow: string
  headline: string
  detail: string
}

export interface Project {
  slug: string
  title: string
  category: string
  categories: string[]
  year: string
  description: string
  liveUrl: string
  repoUrl: string
  tags: string[]
  metrics: string[]
  accentFrom: string
  accentTo: string
  preview: ProjectPreview
  before: string
  after: string
  walkthrough: string[]
  outcomes: string[]
  demoType: 'iframe' | 'mock'
}

export interface TimelineEntry {
  company: string
  role: string
  duration: string
  location: string
  responsibilities: string[]
}

export interface Service {
  title: string
  description: string
  icon: IconComponent
  outcomes: string[]
}

export interface Testimonial {
  quote: string
  name: string
  role: string
  company: string
  logo: string
  videoLabel: string
}

export interface ContactMethod {
  label: string
  value: string
  href: string
  icon: IconComponent
}

export interface RoadmapEntry {
  phase: string
  period: string
  title: string
  description: string
  icon: IconComponent
  points: string[]
}

export interface Achievement {
  title: string
  issuer: string
  year: string
  description: string
  icon: IconComponent
}

export interface DashboardCard {
  title: string
  description: string
  value: string
  icon: IconComponent
}

export interface TerminalCommand {
  command: string
  lines: string[]
}

export interface PortfolioMeta {
  name: string
  role: string
  shortRole: string
  intro: string
  headline: string
  statement: string
  bio: string
  about: string
  heroBlurb: string
  location: string
  availability: string
  email: string
  phone: string
  whatsapp: string
  calendly: string
  githubUsername: string
  githubFallbackUsername: string
  githubGraphqlEndpoint: string
  resumeHref: string
  typingRoles: string[]
  aiPrompts: string[]
}

export interface GithubRepoCard {
  id: number
  name: string
  description: string
  htmlUrl: string
  homepage: string
  stargazersCount: number
  forksCount: number
  language: string
  topics: string[]
  updatedAt: string
}

export interface GithubCommitCard {
  id: string
  repo: string
  message: string
  url: string
  date: string
}

export interface GithubInsights {
  username: string
  avatarUrl: string
  profileUrl: string
  followers: number
  following: number
  publicRepos: number
  stars: number
  languages: Array<{ name: string; value: number }>
  repos: GithubRepoCard[]
  commits: GithubCommitCard[]
  contributions: number[]
  source: 'graphql' | 'rest' | 'fallback'
}

export interface AIRecommendation {
  prompt: string
  title: string
  explanation: string
  matchingProjects: string[]
}

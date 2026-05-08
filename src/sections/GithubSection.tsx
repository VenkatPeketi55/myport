import { motion } from 'framer-motion'
import { ArrowUpRight, RefreshCcw } from 'lucide-react'
import { GlassCard } from '../components/GlassCard'
import { SectionHeading } from '../components/SectionHeading'
import { useGithubInsights } from '../hooks/useGithubInsights'

export function GithubSection() {
  const github = useGithubInsights()

  return (
    <section
      id="github"
      className="scroll-mt-28 px-4 py-20 sm:px-6 lg:px-8"
      aria-labelledby="github-heading"
    >
      <div className="mx-auto max-w-7xl space-y-10">
        <SectionHeading
          eyebrow="GitHub"
          title="Dynamic GitHub integration for repos, language mix, commits, and activity."
          description="This section fetches live public GitHub data by default and can use GraphQL when `VITE_GITHUB_TOKEN` is present for richer insights."
          titleId="github-heading"
        />

        {github.status === 'loading' ? (
          <GlassCard className="flex items-center gap-3">
            <RefreshCcw className="h-4 w-4 animate-spin text-[color:var(--accent-secondary)]" />
            <span className="text-sm text-[color:var(--text-secondary)]">
              Loading GitHub activity...
            </span>
          </GlassCard>
        ) : null}

        {github.data ? (
          <>
            <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
              <GlassCard glow className="h-full">
                <div className="flex items-center gap-4">
                  {github.data.avatarUrl ? (
                    <img
                      src={github.data.avatarUrl}
                      alt={`${github.data.username} avatar`}
                      className="h-[4.5rem] w-[4.5rem] rounded-3xl border border-[color:var(--border)] object-cover"
                    />
                  ) : (
                    <div className="brand-orb flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-3xl font-display text-2xl font-semibold">
                      GH
                    </div>
                  )}
                  <div>
                    <p className="text-xs uppercase tracking-[0.26em] text-[color:var(--text-muted)]">
                      Data source: {github.data.source}
                    </p>
                    <h3 className="mt-2 font-display text-3xl font-semibold tracking-[-0.04em] text-[color:var(--text-primary)]">
                      @{github.data.username}
                    </h3>
                    <a
                      href={github.data.profileUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--accent-secondary)]"
                    >
                      Open GitHub profile
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {[
                    ['Followers', github.data.followers],
                    ['Following', github.data.following],
                    ['Public repos', github.data.publicRepos],
                    ['Total stars', github.data.stars],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded-[24px] border border-[color:var(--border)] bg-[color:var(--panel-soft)] p-5"
                    >
                      <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--text-muted)]">
                        {label}
                      </p>
                      <p className="mt-3 font-display text-4xl text-[color:var(--text-primary)]">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              </GlassCard>

              <GlassCard className="h-full">
                <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--text-muted)]">
                  Most used languages
                </p>
                <div className="mt-6 space-y-4">
                  {github.data.languages.map((language) => (
                    <div key={language.name}>
                      <div className="mb-2 flex items-center justify-between gap-4">
                        <p className="text-sm font-medium text-[color:var(--text-primary)]">
                          {language.name}
                        </p>
                        <p className="text-sm text-[color:var(--text-secondary)]">
                          {language.value}%
                        </p>
                      </div>
                      <div className="h-2.5 overflow-hidden rounded-full bg-[color:var(--panel)]">
                        <motion.div
                          className="h-full rounded-full bg-[linear-gradient(90deg,var(--accent-primary),var(--accent-secondary))]"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${language.value}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.65, ease: 'easeOut' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--text-muted)]">
                    Contribution graph
                  </p>
                  <div className="mt-4 grid grid-cols-8 gap-2 sm:grid-cols-12">
                    {github.data.contributions.map((value, index) => (
                      <span
                        key={`${value}-${index}`}
                        className="aspect-square rounded-md"
                        style={{
                          background: `color-mix(in srgb, var(--accent-secondary) ${20 + value * 8}%, var(--panel))`,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </GlassCard>
            </div>

            <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
              <GlassCard>
                <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--text-muted)]">
                  Dynamic repositories
                </p>
                <div className="mt-5 grid gap-4">
                  {github.data.repos.map((repo) => (
                    <a
                      key={repo.id}
                      href={repo.htmlUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-[24px] border border-[color:var(--border)] bg-[color:var(--panel-soft)] p-5 transition-transform hover:-translate-y-1"
                    >
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <h3 className="text-lg font-semibold text-[color:var(--text-primary)]">
                            {repo.name}
                          </h3>
                          <p className="mt-3 max-w-2xl text-sm leading-7 text-[color:var(--text-secondary)]">
                            {repo.description}
                          </p>
                        </div>
                        <span className="theme-chip">{repo.language}</span>
                      </div>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {(repo.topics.length ? repo.topics : [repo.language]).map((topic) => (
                          <span key={topic} className="theme-chip">
                            {topic}
                          </span>
                        ))}
                      </div>
                    </a>
                  ))}
                </div>
              </GlassCard>

              <GlassCard>
                <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--text-muted)]">
                  Recent commits
                </p>
                <div className="mt-5 space-y-4">
                  {github.data.commits.map((commit) => (
                    <a
                      key={commit.id}
                      href={commit.url}
                      target="_blank"
                      rel="noreferrer"
                      className="block rounded-[24px] border border-[color:var(--border)] bg-[color:var(--panel-soft)] p-5"
                    >
                      <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--text-muted)]">
                        {commit.repo}
                      </p>
                      <p className="mt-3 text-sm leading-7 text-[color:var(--text-primary)]">
                        {commit.message}
                      </p>
                      <p className="mt-3 text-xs text-[color:var(--text-muted)]">
                        {new Date(commit.date).toLocaleDateString()}
                      </p>
                    </a>
                  ))}
                </div>
              </GlassCard>
            </div>
          </>
        ) : null}
      </div>
    </section>
  )
}

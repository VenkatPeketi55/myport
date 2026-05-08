import type {
  GithubCommitCard,
  GithubInsights,
  GithubRepoCard,
} from '../types/portfolio'

const REST_API_BASE = 'https://api.github.com'

async function fetchJson<T>(input: RequestInfo | URL, init?: RequestInit) {
  const response = await fetch(input, init)

  if (!response.ok) {
    throw new Error(`GitHub request failed with status ${response.status}`)
  }

  return (await response.json()) as T
}

function summarizeLanguages(
  languageMaps: Array<Record<string, number>>,
): Array<{ name: string; value: number }> {
  const totals = new Map<string, number>()

  languageMaps.forEach((languageMap) => {
    Object.entries(languageMap).forEach(([language, value]) => {
      totals.set(language, (totals.get(language) ?? 0) + value)
    })
  })

  const grandTotal = [...totals.values()].reduce((sum, value) => sum + value, 0)

  return [...totals.entries()]
    .sort((first, second) => second[1] - first[1])
    .slice(0, 6)
    .map(([name, value]) => ({
      name,
      value: grandTotal ? Math.round((value / grandTotal) * 100) : 0,
    }))
}

function mapRepos(repos: Array<Record<string, unknown>>): GithubRepoCard[] {
  return repos.slice(0, 6).map((repo) => ({
    id: Number(repo.id),
    name: String(repo.name ?? 'Repository'),
    description: String(repo.description ?? 'No description provided.'),
    htmlUrl: String(repo.html_url ?? '#'),
    homepage: String(repo.homepage ?? ''),
    stargazersCount: Number(repo.stargazers_count ?? 0),
    forksCount: Number(repo.forks_count ?? 0),
    language: String(repo.language ?? 'Mixed'),
    topics: Array.isArray(repo.topics)
      ? repo.topics.map((topic) => String(topic))
      : [],
    updatedAt: String(repo.updated_at ?? new Date().toISOString()),
  }))
}

function buildFallbackInsights(username: string): GithubInsights {
  return {
    username,
    avatarUrl: '',
    profileUrl: `https://github.com/${username}`,
    followers: 0,
    following: 0,
    publicRepos: 0,
    stars: 0,
    languages: [
      { name: 'TypeScript', value: 38 },
      { name: 'React', value: 25 },
      { name: 'CSS', value: 14 },
      { name: 'Node.js', value: 12 },
      { name: 'GraphQL', value: 11 },
    ],
    repos: [
      {
        id: 1,
        name: 'premium-portfolio',
        description:
          'Fallback showcase data used when GitHub API limits or missing usernames prevent live fetches.',
        htmlUrl: `https://github.com/${username}`,
        homepage: '',
        stargazersCount: 24,
        forksCount: 4,
        language: 'TypeScript',
        topics: ['portfolio', 'react', 'motion'],
        updatedAt: new Date().toISOString(),
      },
    ],
    commits: [
      {
        id: 'fallback-1',
        repo: 'premium-portfolio',
        message: 'Fallback demo commit: enrich showcase with live GitHub support',
        url: `https://github.com/${username}`,
        date: new Date().toISOString(),
      },
    ],
    contributions: Array.from({ length: 24 }, (_, index) => 3 + ((index * 7) % 9)),
    source: 'fallback',
  }
}

async function fetchRestInsights(username: string): Promise<GithubInsights> {
  const [profile, repos] = await Promise.all([
    fetchJson<Record<string, unknown>>(`${REST_API_BASE}/users/${username}`),
    fetchJson<Array<Record<string, unknown>>>(
      `${REST_API_BASE}/users/${username}/repos?sort=updated&per_page=8`,
    ),
  ])

  const mappedRepos = mapRepos(repos)
  const languageMaps = await Promise.all(
    mappedRepos.map((repo) =>
      fetchJson<Record<string, number>>(
        `${REST_API_BASE}/repos/${username}/${repo.name}/languages`,
      ).catch(() => ({})),
    ),
  )

  const events = await fetchJson<Array<Record<string, unknown>>>(
    `${REST_API_BASE}/users/${username}/events/public?per_page=20`,
  ).catch(() => [])

  const commits = events
    .filter((event) => event.type === 'PushEvent')
    .slice(0, 6)
    .flatMap((event) => {
      const payload = event.payload as { commits?: Array<Record<string, unknown>> }
      const repo = event.repo as { name?: string }

      return (payload?.commits ?? []).slice(0, 2).map((commit) => ({
        id: String(commit.sha ?? Math.random()),
        repo: String(repo?.name ?? 'repository'),
        message: String(commit.message ?? 'Updated project activity'),
        url: `https://github.com/${String(repo?.name ?? username)}`,
        date: String(event.created_at ?? new Date().toISOString()),
      }))
    })
    .slice(0, 6)

  const contributionSeed = events.length
    ? events.map((_, index) => ((index * 5 + 3) % 9) + 1)
    : Array.from({ length: 24 }, (_, index) => 2 + ((index * 3) % 8))

  return {
    username,
    avatarUrl: String(profile.avatar_url ?? ''),
    profileUrl: String(profile.html_url ?? `https://github.com/${username}`),
    followers: Number(profile.followers ?? 0),
    following: Number(profile.following ?? 0),
    publicRepos: Number(profile.public_repos ?? mappedRepos.length),
    stars: mappedRepos.reduce((sum, repo) => sum + repo.stargazersCount, 0),
    languages: summarizeLanguages(languageMaps),
    repos: mappedRepos,
    commits,
    contributions: Array.from({ length: 24 }, (_, index) =>
      contributionSeed[index % contributionSeed.length] ?? 0,
    ),
    source: 'rest',
  }
}

async function fetchGraphqlInsights(
  username: string,
  endpoint: string,
  token: string,
): Promise<GithubInsights> {
  const query = `
    query PortfolioGithubOverview($login: String!) {
      user(login: $login) {
        avatarUrl
        url
        followers { totalCount }
        following { totalCount }
        repositories(first: 6, orderBy: {field: UPDATED_AT, direction: DESC}, ownerAffiliations: OWNER, isFork: false) {
          totalCount
          nodes {
            name
            description
            url
            homepageUrl
            stargazerCount
            forkCount
            primaryLanguage { name }
            repositoryTopics(first: 6) {
              nodes { topic { name } }
            }
            updatedAt
            languages(first: 8, orderBy: {field: SIZE, direction: DESC}) {
              edges { size node { name } }
            }
            defaultBranchRef {
              target {
                ... on Commit {
                  history(first: 2) {
                    nodes {
                      oid
                      messageHeadline
                      committedDate
                      url
                    }
                  }
                }
              }
            }
          }
        }
        contributionsCollection {
          contributionCalendar {
            weeks {
              contributionDays {
                contributionCount
              }
            }
          }
        }
      }
    }
  `

  const response = await fetchJson<{
    data?: {
      user?: {
        avatarUrl: string
        url: string
        followers: { totalCount: number }
        following: { totalCount: number }
        repositories: {
          totalCount: number
          nodes: Array<{
            name: string
            description: string | null
            url: string
            homepageUrl: string | null
            stargazerCount: number
            forkCount: number
            primaryLanguage: { name: string } | null
            repositoryTopics: { nodes: Array<{ topic: { name: string } }> }
            updatedAt: string
            languages: { edges: Array<{ size: number; node: { name: string } }> }
            defaultBranchRef: {
              target: {
                history: {
                  nodes: Array<{
                    oid: string
                    messageHeadline: string
                    committedDate: string
                    url: string
                  }>
                }
              } | null
            } | null
          }>
        }
        contributionsCollection: {
          contributionCalendar: {
            weeks: Array<{ contributionDays: Array<{ contributionCount: number }> }>
          }
        }
      }
    }
  }>(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ query, variables: { login: username } }),
  })

  const user = response.data?.user

  if (!user) {
    throw new Error('GraphQL user lookup failed')
  }

  const repos: GithubRepoCard[] = user.repositories.nodes.map((repo, index) => ({
    id: index + 1,
    name: repo.name,
    description: repo.description ?? 'No description provided.',
    htmlUrl: repo.url,
    homepage: repo.homepageUrl ?? '',
    stargazersCount: repo.stargazerCount,
    forksCount: repo.forkCount,
    language: repo.primaryLanguage?.name ?? 'Mixed',
    topics: repo.repositoryTopics.nodes.map((node) => node.topic.name),
    updatedAt: repo.updatedAt,
  }))

  const languageMaps = user.repositories.nodes.map((repo) =>
    Object.fromEntries(
      repo.languages.edges.map((edge) => [edge.node.name, edge.size]),
    ),
  )

  const commits: GithubCommitCard[] = user.repositories.nodes
    .flatMap((repo) =>
      repo.defaultBranchRef?.target?.history.nodes.map((commit) => ({
        id: commit.oid,
        repo: repo.name,
        message: commit.messageHeadline,
        url: commit.url,
        date: commit.committedDate,
      })) ?? [],
    )
    .slice(0, 8)

  const contributions = user.contributionsCollection.contributionCalendar.weeks
    .flatMap((week) => week.contributionDays.map((day) => day.contributionCount))
    .slice(-24)

  return {
    username,
    avatarUrl: user.avatarUrl,
    profileUrl: user.url,
    followers: user.followers.totalCount,
    following: user.following.totalCount,
    publicRepos: user.repositories.totalCount,
    stars: repos.reduce((sum, repo) => sum + repo.stargazersCount, 0),
    languages: summarizeLanguages(languageMaps),
    repos,
    commits,
    contributions: contributions.length ? contributions : Array(24).fill(0),
    source: 'graphql',
  }
}

export async function fetchGithubInsights({
  username,
  fallbackUsername,
  graphqlEndpoint,
  token,
}: {
  username: string
  fallbackUsername: string
  graphqlEndpoint: string
  token?: string
}) {
  try {
    if (token) {
      return await fetchGraphqlInsights(username, graphqlEndpoint, token)
    }

    return await fetchRestInsights(username)
  } catch {
    if (fallbackUsername && fallbackUsername !== username) {
      try {
        return await fetchRestInsights(fallbackUsername)
      } catch {
        return buildFallbackInsights(fallbackUsername)
      }
    }

    return buildFallbackInsights(username)
  }
}

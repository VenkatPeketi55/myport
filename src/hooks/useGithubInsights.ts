import { useEffect, useState } from 'react'
import { portfolioMeta } from '../data/portfolio'
import { fetchGithubInsights } from '../services/github'
import type { GithubInsights } from '../types/portfolio'

interface GithubState {
  status: 'loading' | 'ready' | 'error'
  data: GithubInsights | null
  error: string | null
}

export function useGithubInsights() {
  const [state, setState] = useState<GithubState>({
    status: 'loading',
    data: null,
    error: null,
  })

  useEffect(() => {
    let isMounted = true

    fetchGithubInsights({
      username: portfolioMeta.githubUsername,
      fallbackUsername: portfolioMeta.githubFallbackUsername,
      graphqlEndpoint: portfolioMeta.githubGraphqlEndpoint,
      token: import.meta.env.VITE_GITHUB_TOKEN,
    })
      .then((data) => {
        if (!isMounted) {
          return
        }

        setState({ status: 'ready', data, error: null })
      })
      .catch((error) => {
        if (!isMounted) {
          return
        }

        setState({
          status: 'error',
          data: null,
          error: error instanceof Error ? error.message : 'Unable to load GitHub insights.',
        })
      })

    return () => {
      isMounted = false
    }
  }, [])

  return state
}

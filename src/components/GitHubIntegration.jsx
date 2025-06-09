import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  StarIcon, 
  EyeIcon, 
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
  ClockIcon
} from '@heroicons/react/24/outline'
import { useAnalytics } from './shared/Analytics'

export default function GitHubIntegration({ 
  compact = false,
  showStats = true,
  className = ""
}) {
  const [repoData, setRepoData] = useState(null)
  const [loading, setLoading] = useState(true)
  const { trackExternalLink } = useAnalytics()

  const REPO_URL = 'https://github.com/Organica-Ai-Solutions/NIS_Protocol'
  const API_URL = 'https://api.github.com/repos/Organica-Ai-Solutions/NIS_Protocol'

  useEffect(() => {
    const fetchRepoData = async () => {
      try {
        // In production, you might want to cache this or use a serverless function
        // to avoid rate limiting
        const response = await fetch(API_URL)
        if (response.ok) {
          const data = await response.json()
          setRepoData(data)
        }
      } catch (error) {
        console.warn('Could not fetch GitHub data:', error)
        // Fallback data for when API is unavailable
        setRepoData({
          stargazers_count: 8,
          watchers_count: 3,
          forks_count: 2,
          updated_at: new Date().toISOString(),
          language: 'Python',
          description: 'Biologically-inspired framework for consciousness-level AI'
        })
      } finally {
        setLoading(false)
      }
    }

    fetchRepoData()
  }, [])

  const handleRepoClick = () => {
    trackExternalLink(REPO_URL, 'NIS Protocol Repository')
  }

  if (loading) {
    return (
      <div className={`animate-pulse ${className}`}>
        <div className="bg-gray-200 h-24 rounded-lg"></div>
      </div>
    )
  }

  if (compact) {
    return (
      <motion.a
        href={REPO_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleRepoClick}
        className={`group flex items-center p-4 bg-white/80 backdrop-blur-sm rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-[#0B84F3]/30 ${className}`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="flex-shrink-0">
          <div className="p-2 bg-gray-900 rounded-lg group-hover:bg-[#0B84F3] transition-colors">
            <CodeBracketIcon className="h-5 w-5 text-white" />
          </div>
        </div>
        <div className="ml-4 flex-1">
          <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#0B84F3] transition-colors">
            NIS Protocol v2.0
          </h3>
          <p className="text-xs text-gray-600">
            {repoData?.stargazers_count || 0} stars • {repoData?.language || 'Python'}
          </p>
        </div>
        <ArrowTopRightOnSquareIcon className="h-4 w-4 text-gray-400 group-hover:text-[#0B84F3] transition-colors" />
      </motion.a>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20 ${className}`}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div className="p-2 bg-gray-900 rounded-lg">
            <CodeBracketIcon className="h-6 w-6 text-white" />
          </div>
          <div className="ml-3">
            <h3 className="text-lg font-semibold text-gray-900">
              NIS Protocol Repository
            </h3>
            <p className="text-sm text-gray-600">
              Open source consciousness-level AI framework
            </p>
          </div>
        </div>
        <a
          href={REPO_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleRepoClick}
          className="p-2 text-gray-400 hover:text-[#0B84F3] transition-colors"
        >
          <ArrowTopRightOnSquareIcon className="h-5 w-5" />
        </a>
      </div>

      {showStats && repoData && (
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="text-center">
            <div className="flex items-center justify-center mb-1">
              <StarIcon className="h-4 w-4 text-yellow-500 mr-1" />
              <span className="text-lg font-semibold text-gray-900">
                {repoData.stargazers_count || 0}
              </span>
            </div>
            <p className="text-xs text-gray-600">Stars</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-1">
              <EyeIcon className="h-4 w-4 text-blue-500 mr-1" />
              <span className="text-lg font-semibold text-gray-900">
                {repoData.watchers_count || 0}
              </span>
            </div>
            <p className="text-xs text-gray-600">Watchers</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-1">
              <CodeBracketIcon className="h-4 w-4 text-green-500 mr-1" />
              <span className="text-lg font-semibold text-gray-900">
                {repoData.forks_count || 0}
              </span>
            </div>
            <p className="text-xs text-gray-600">Forks</p>
          </div>
        </div>
      )}

      <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
        <div className="flex items-center">
          <ClockIcon className="h-4 w-4 mr-1" />
          <span>
            Updated {repoData?.updated_at ? 
              new Date(repoData.updated_at).toLocaleDateString() : 
              'recently'
            }
          </span>
        </div>
        <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
          {repoData?.language || 'Python'}
        </span>
      </div>

      <div className="flex space-x-3">
        <a
          href={REPO_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleRepoClick}
          className="flex-1 bg-gradient-to-r from-[#0B84F3] to-[#FF3D90] text-white text-center py-2 px-4 rounded-lg hover:from-[#0B84F3]/90 hover:to-[#FF3D90]/90 transition-all duration-300 text-sm font-medium"
        >
          View Repository
        </a>
        <a
          href={`${REPO_URL}/releases`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackExternalLink(`${REPO_URL}/releases`, 'NIS Protocol Releases')}
          className="flex-1 border border-gray-300 text-gray-700 text-center py-2 px-4 rounded-lg hover:border-gray-400 hover:text-gray-800 transition-all duration-300 text-sm font-medium"
        >
          Releases
        </a>
      </div>
    </motion.div>
  )
} 
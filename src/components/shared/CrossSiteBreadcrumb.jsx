import { Link } from 'react-router-dom'
import { HomeIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { useAnalytics } from './Analytics'

export default function CrossSiteBreadcrumb({ items = [], showHome = true }) {
  const { trackCrossSiteNavigation } = useAnalytics()

  const handleBreadcrumbClick = (href, name, isExternal = false) => {
    if (isExternal) {
      trackCrossSiteNavigation('breadcrumb_navigation', 'main_website')
    }
  }

  const defaultBreadcrumbs = [
    { name: 'Organica AI', href: '/', current: false }
  ]

  const allBreadcrumbs = showHome ? [...defaultBreadcrumbs, ...items] : items

  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-4">
        {showHome && (
          <li>
            <div>
              <Link 
                to="/" 
                className="text-gray-400 hover:text-gray-500 transition-colors"
                onClick={() => handleBreadcrumbClick('/', 'Home')}
              >
                <HomeIcon className="h-5 w-5" aria-hidden="true" />
                <span className="sr-only">Home</span>
              </Link>
            </div>
          </li>
        )}
        
        {allBreadcrumbs.map((item, index) => (
          <li key={item.name}>
            <div className="flex items-center">
              {(showHome || index > 0) && (
                <ChevronRightIcon 
                  className="h-5 w-5 text-gray-400 flex-shrink-0" 
                  aria-hidden="true" 
                />
              )}
              {item.current ? (
                <span className="ml-4 text-sm font-medium text-gray-500">
                  {item.name}
                </span>
              ) : item.external ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors"
                  onClick={() => handleBreadcrumbClick(item.href, item.name, true)}
                >
                  {item.name}
                  <svg className="ml-1 h-3 w-3 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              ) : (
                <Link
                  to={item.href}
                  className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors"
                  onClick={() => handleBreadcrumbClick(item.href, item.name)}
                >
                  {item.name}
                </Link>
              )}
            </div>
          </li>
        ))}
      </ol>
    </nav>
  )
}

// Common breadcrumb configurations
export const getBreadcrumbConfig = (pageType, customItems = []) => {
  const configs = {
    services: [
      { name: 'AI Services', href: '/services', current: true }
    ],
    about: [
      { name: 'About', href: '/about', current: true }
    ],
    contact: [
      { name: 'Contact', href: '/contact', current: true }
    ],
    'nis-protocol': [
      { name: 'NIS Protocol', href: '/docs/nis-protocol', external: true, current: true }
    ],
    'nis-docs': [
      { name: 'AI Services', href: '/services', current: false },
      { name: 'NIS Protocol', href: '/docs/nis-protocol', external: true, current: false },
      { name: 'Documentation', href: '/docs/nis-protocol', external: true, current: true }
    ]
  }
  
  return configs[pageType] || customItems
} 
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Analytics configuration
const ANALYTICS_CONFIG = {
  // Google Analytics tracking ID (replace with your actual ID)
  GA_TRACKING_ID: 'GA_MEASUREMENT_ID',
  
  // Custom events for cross-site tracking
  CROSS_SITE_EVENTS: {
    NIS_PROTOCOL_VIEW: 'nis_protocol_documentation_view',
    GITHUB_CLICK: 'github_repository_click',
    SERVICE_INQUIRY: 'service_inquiry_click',
    CROSS_NAVIGATION: 'cross_site_navigation'
  }
}

// Track custom events
export const trackEvent = (eventName, parameters = {}) => {
  // Google Analytics 4 event tracking
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      event_category: 'engagement',
      event_label: parameters.label || '',
      value: parameters.value || 0,
      custom_parameter: parameters.custom || '',
      ...parameters
    })
  }
  
  // Console logging for development
  if (process.env.NODE_ENV === 'development') {
    console.log('Analytics Event:', eventName, parameters)
  }
}

// Track cross-site navigation
export const trackCrossSiteNavigation = (destination, source = 'main_website') => {
  trackEvent(ANALYTICS_CONFIG.CROSS_SITE_EVENTS.CROSS_NAVIGATION, {
    destination,
    source,
    timestamp: new Date().toISOString()
  })
}

// Track NIS Protocol interactions
export const trackNISProtocolInteraction = (action, details = {}) => {
  trackEvent(ANALYTICS_CONFIG.CROSS_SITE_EVENTS.NIS_PROTOCOL_VIEW, {
    action,
    ...details,
    protocol_version: 'v2.0'
  })
}

// Track external link clicks
export const trackExternalLink = (url, linkText) => {
  const isGitHub = url.includes('github.com')
  
  trackEvent(isGitHub ? ANALYTICS_CONFIG.CROSS_SITE_EVENTS.GITHUB_CLICK : 'external_link_click', {
    url,
    link_text: linkText,
    is_github: isGitHub
  })
}

// Main Analytics component
export default function Analytics() {
  const location = useLocation()
  
  useEffect(() => {
    // Track page views
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', ANALYTICS_CONFIG.GA_TRACKING_ID, {
        page_path: location.pathname + location.search,
        page_title: document.title
      })
    }
    
    // Track specific page interactions
    const currentPath = location.pathname
    
    if (currentPath.includes('/services')) {
      trackEvent('page_view_services', { 
        path: currentPath,
        focus: 'consciousness_level_ai'
      })
    } else if (currentPath.includes('/about')) {
      trackEvent('page_view_about', { 
        path: currentPath,
        company_focus: 'ai_research'
      })
    } else if (currentPath === '/') {
      trackEvent('page_view_home', { 
        path: currentPath,
        featured_protocol: 'nis_v2'
      })
    }
  }, [location])
  
  return null // This component doesn't render anything
}

// Hook for analytics in components
export const useAnalytics = () => {
  return {
    trackEvent,
    trackCrossSiteNavigation,
    trackNISProtocolInteraction,
    trackExternalLink
  }
} 
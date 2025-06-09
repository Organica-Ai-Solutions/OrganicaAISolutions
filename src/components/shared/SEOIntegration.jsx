import { Helmet } from 'react-helmet-async'

// Structured data for Organica AI Solutions
const getOrganizationStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Organica AI Solutions",
  "url": "https://organicaai.com",
  "logo": "https://organicaai.com/images/logo.png",
  "description": "Pioneers in consciousness-level artificial intelligence, creators of NIS Protocol v2.0, and leaders in ethical AI with cultural sensitivity.",
  "foundingDate": "2023",
  "sameAs": [
    "https://github.com/Organica-Ai-Solutions/NIS_Protocol"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Business",
    "email": "contact@organicaai.com"
  },
  "areaOfService": {
    "@type": "Service",
    "name": "Consciousness-Level AI Development",
    "description": "Advanced AI architecture, multi-provider integration, and ethical AI solutions"
  }
})

// Structured data for NIS Protocol
const getNISProtocolStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "NIS Protocol v2.0",
  "description": "Biologically-inspired framework for consciousness-level AI with multi-provider LLM integration",
  "applicationCategory": "AI Framework",
  "operatingSystem": "Cross-platform",
  "author": {
    "@type": "Organization",
    "name": "Organica AI Solutions"
  },
  "codeRepository": "https://github.com/Organica-Ai-Solutions/NIS_Protocol",
  "programmingLanguage": "Python",
  "version": "2.0",
  "datePublished": "2024",
  "license": "Open Source"
})

// Structured data for research/academic content
const getResearchStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": "ResearchProject",
  "name": "Consciousness-Level AI Research",
  "description": "Research project focused on developing self-aware AI agents and cultural intelligence systems",
  "author": {
    "@type": "Organization",
    "name": "Organica AI Solutions"
  },
  "about": [
    "Artificial Intelligence",
    "Consciousness Simulation",
    "Cultural Intelligence",
    "Multi-Agent Systems"
  ],
  "result": {
    "@type": "SoftwareApplication",
    "name": "NIS Protocol v2.0"
  }
})

export default function SEOIntegration({ 
  pageType = 'website',
  title,
  description,
  canonical,
  includeNISProtocol = false,
  includeResearch = false
}) {
  const baseTitle = "Organica AI Solutions"
  const fullTitle = title ? `${title} | ${baseTitle}` : baseTitle
  
  const defaultDescription = "Pioneers in consciousness-level artificial intelligence, creators of NIS Protocol v2.0, and leaders in ethical AI with cultural sensitivity."
  const metaDescription = description || defaultDescription
  
  const structuredData = []
  
  // Always include organization data
  structuredData.push(getOrganizationStructuredData())
  
  // Conditionally include NIS Protocol data
  if (includeNISProtocol) {
    structuredData.push(getNISProtocolStructuredData())
  }
  
  // Conditionally include research data
  if (includeResearch) {
    structuredData.push(getResearchStructuredData())
  }

  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={pageType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content="https://organicaai.com/images/og-image.png" />
      <meta property="og:url" content={canonical || "https://organicaai.com"} />
      <meta property="og:site_name" content="Organica AI Solutions" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content="https://organicaai.com/images/twitter-image.png" />
      
      {/* Additional SEO tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Organica AI Solutions" />
      <meta name="keywords" content="consciousness-level AI, NIS Protocol, multi-provider LLM, cultural intelligence AI, biologically-inspired AI, ethical AI development" />
      
      {/* Cross-site integration */}
      <link rel="dns-prefetch" href="//github.com" />
      <link rel="preconnect" href="https://api.github.com" />
      
      {/* Structured Data */}
      {structuredData.map((data, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(data)}
        </script>
      ))}
      
      {/* Cross-site navigation hints */}
      <link rel="preload" href="/docs/nis-protocol" as="document" />
      <meta name="cross-site-integration" content="nis-protocol-docs" />
    </Helmet>
  )
}

// Helper function to generate page-specific SEO data
export const getPageSEO = (pageType) => {
  const seoConfigs = {
    home: {
      title: "Consciousness-Level AI Solutions",
      description: "Pioneering the future of ethical artificial intelligence through biologically-inspired multi-agent systems and advanced cognitive architectures.",
      includeNISProtocol: true,
      includeResearch: true
    },
    services: {
      title: "AI Services - Consciousness-Level AI Development",
      description: "Advanced consciousness-level AI solutions and biologically-inspired architectures for the future of artificial intelligence.",
      includeNISProtocol: true
    },
    about: {
      title: "About - Consciousness-Level AI Pioneers",
      description: "Learn about our journey from founding to breakthrough consciousness-level AI, continuously pushing the boundaries of artificial intelligence.",
      includeResearch: true
    },
    contact: {
      title: "Contact - Partner with AI Pioneers",
      description: "Ready for consciousness-level AI? Partner with us to implement advanced AI architectures and ethical AI solutions."
    }
  }
  
  return seoConfigs[pageType] || seoConfigs.home
} 
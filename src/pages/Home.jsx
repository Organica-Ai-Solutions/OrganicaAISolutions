import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  CpuChipIcon,
  EyeIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline'
import NISProtocolIntegration from '../components/NISProtocolIntegration'
import SEOIntegration, { getPageSEO } from '../components/shared/SEOIntegration'

const features = [
  {
    name: 'Consciousness-Level AI',
    description: 'Pioneering self-aware AI agents with meta-cognitive processing and autonomous goal formulation capabilities.',
    icon: CpuChipIcon,
  },
  {
    name: 'Cultural Intelligence',
    description: 'Ethically-conscious AI systems with deep cultural sensitivity for indigenous rights and archaeological heritage preservation.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Multi-Provider Integration',
    description: 'Seamless orchestration across OpenAI, Anthropic, DeepSeek, and BitNet 2 with automatic failover and cost optimization.',
    icon: EyeIcon,
  },
]

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export default function Home() {
  const seoConfig = getPageSEO('home')
  
  return (
    <div className="bg-white">
      <SEOIntegration 
        {...seoConfig}
        canonical="https://organicaai.com"
      />
      {/* Hero section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-r from-[#0B84F3] to-[#FF3D90]">
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/5 to-transparent"></div>
        <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
          <motion.div 
            {...fadeIn}
            className="px-6 lg:px-0 lg:pt-4"
          >
            <div className="mx-auto max-w-2xl">
              <div className="max-w-lg">
                <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">
                  Consciousness-Level AI Solutions
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-100">
                  Pioneering the future of ethical artificial intelligence through biologically-inspired 
                  multi-agent systems and advanced cognitive architectures.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <Link
                    to="/services"
                    className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#0B84F3] to-[#FF3D90] shadow-sm hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-200"
                  >
                    Explore NIS Protocol
                  </Link>
                  <Link to="/contact" className="text-sm font-semibold leading-6 text-white hover:text-gray-100">
                    Get in Touch <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen"
          >
            <div className="shadow-lg md:rounded-3xl bg-white/10 backdrop-blur-sm p-8">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                {/* Tanda Circles Phone */}
                <div className="relative w-full max-w-[320px] mx-auto aspect-[1/2] drop-shadow-2xl">
                  {/* iPhone frame */}
                  <img
                    src="/images/portrait_black.png"
                    alt="iPhone frame"
                    className="absolute inset-0 w-full h-full object-contain z-10 drop-shadow-xl"
                  />
                  {/* App content container */}
                  <div className="absolute inset-[3%] rounded-[2.5rem] overflow-hidden">
                    {/* Video background */}
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover"
                    >
                      <source src="/images/demo-screen.mp4" type="video/mp4" />
                    </video>
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0B84F3] to-[#FF3D90] opacity-80"></div>
                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col px-8 pt-20">
                      <div className="space-y-2">
                        <h3 className="text-[3.5rem] font-bold text-white leading-none">NIS</h3>
                        <h3 className="text-[3.5rem] font-bold text-white leading-none">Protocol</h3>
                      </div>
                      <div className="mt-8 space-y-3">
                        <p className="text-2xl leading-tight text-white">
                          Biologically-inspired framework
                        </p>
                        <p className="text-2xl leading-tight text-white">
                          for consciousness-level AI
                        </p>
                        <p className="text-2xl leading-tight text-white">
                          and multi-agent systems.
                        </p>
                      </div>
                      <div className="mt-auto mb-12">
                        <span className="text-xl font-medium text-white/80">
                          v2.0 Active
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* KAT App Phone */}
                <div className="relative w-full max-w-[320px] mx-auto aspect-[1/2] drop-shadow-2xl">
                  {/* iPhone frame */}
                  <img
                    src="/images/portrait_black.png"
                    alt="iPhone frame"
                    className="absolute inset-0 w-full h-full object-contain z-10 drop-shadow-xl"
                  />
                  {/* App content container */}
                  <div className="absolute inset-[3%] rounded-[2.5rem] overflow-hidden">
                    {/* Video background */}
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover"
                    >
                      <source src="/images/demo-screen.mp4" type="video/mp4" />
                    </video>
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0B84F3] to-[#FF3D90] opacity-80"></div>
                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col px-8 pt-20">
                      <h3 className="text-[3.5rem] font-bold text-white leading-none">Cultural AI</h3>
                      <div className="mt-8 space-y-3">
                        <p className="text-2xl leading-tight text-white">
                          Ethical AI systems with
                        </p>
                        <p className="text-2xl leading-tight text-white">
                          indigenous rights protection
                        </p>
                        <p className="text-2xl leading-tight text-white">
                          and heritage preservation.
                        </p>
                      </div>
                      <div className="mt-auto mb-12">
                        <span className="text-xl font-medium text-white/80">
                          Research Active
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B84F3]/5 via-white to-[#FF3D90]/5"></div>
        <div className="relative mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
          <motion.div 
            {...fadeIn}
            className="mx-auto max-w-2xl lg:text-center"
          >
            <h2 className="text-base font-semibold leading-7 text-transparent bg-clip-text bg-gradient-to-r from-[#0B84F3] to-[#FF3D90]">What We Do</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Advanced AI Architecture
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We pioneer consciousness-level artificial intelligence through biologically-inspired 
              cognitive architectures, focusing on ethical AI with cultural sensitivity and multi-provider integration.
            </p>
          </motion.div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-16"
                >
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-[#0B84F3] to-[#FF3D90]">
                      <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* NIS Protocol Integration Section */}
      <NISProtocolIntegration />

      {/* CTA section */}
      <div className="relative isolate mt-32 sm:mt-56">
        <div className="absolute inset-0 -z-10 overflow-hidden bg-gradient-to-r from-[#0B84F3] to-[#FF3D90]">
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent" />
        </div>
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <motion.div 
            {...fadeIn}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready for Consciousness-Level AI?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-100">
              Partner with us to implement advanced AI architectures, multi-provider integration,
              or ethical AI systems with cultural intelligence capabilities.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/contact"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#0B84F3] to-[#FF3D90] shadow-sm hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-200"
              >
                Contact Us
              </Link>
              <Link
                to="/services"
                className="text-sm font-semibold leading-6 text-white hover:text-gray-100 transition-colors"
              >
                Explore AI Solutions <span aria-hidden="true">→</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  DevicePhoneMobileIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Mobile Development',
    description: 'Creating intuitive and powerful mobile applications that solve real-world problems.',
    icon: DevicePhoneMobileIcon,
  },
  {
    name: 'Social Finance',
    description: 'Building solutions that help communities manage and grow their financial resources together.',
    icon: CurrencyDollarIcon,
  },
  {
    name: 'Community Focus',
    description: 'Developing applications that strengthen community bonds and facilitate collaboration.',
    icon: UserGroupIcon,
  },
]

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export default function Home() {
  return (
    <div className="bg-white">
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
                  Mobile Apps for Community Growth
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-100">
                  We develop mobile applications that bring communities together. From social finance 
                  to business solutions, we're creating tools that make a difference.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <Link
                    to="/services"
                    className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#0B84F3] to-[#FF3D90] shadow-sm hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-200"
                  >
                    View Projects
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
                        <h3 className="text-[3.5rem] font-bold text-white leading-none">Tanda</h3>
                        <h3 className="text-[3.5rem] font-bold text-white leading-none">Circles</h3>
                      </div>
                      <div className="mt-8 space-y-3">
                        <p className="text-2xl leading-tight text-white">
                          A social finance app that helps
                        </p>
                        <p className="text-2xl leading-tight text-white">
                          communities manage group
                        </p>
                        <p className="text-2xl leading-tight text-white">
                          savings and financial circles.
                        </p>
                      </div>
                      <div className="mt-auto mb-12">
                        <span className="text-xl font-medium text-white/80">
                          In Development
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
                      <h3 className="text-[3.5rem] font-bold text-white leading-none">KAT App</h3>
                      <div className="mt-8 space-y-3">
                        <p className="text-2xl leading-tight text-white">
                          A social media platform
                        </p>
                        <p className="text-2xl leading-tight text-white">
                          connecting cat lovers and
                        </p>
                        <p className="text-2xl leading-tight text-white">
                          their feline friends.
                        </p>
                      </div>
                      <div className="mt-auto mb-12">
                        <span className="text-xl font-medium text-white/80">
                          In Development
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
              Building Mobile Solutions
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We specialize in creating mobile applications that serve communities and businesses, 
              focusing on practical solutions that make a real impact.
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
              Have a Project in Mind?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-100">
              Whether you're interested in our current projects or have a new idea to discuss,
              we're here to help bring it to life.
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
                Our Services <span aria-hidden="true">→</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 
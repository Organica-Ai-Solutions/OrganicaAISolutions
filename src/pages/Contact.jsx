import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon
} from '@heroicons/react/24/outline'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    researchArea: 'NIS Protocol Core Research',
    researchInterest: ''
  })

  const researchAreas = [
    'NIS Protocol Core Research',
    'Multi-Agent Systems',
    'Physics-Informed Neural Networks',
    'Space Science Applications',
    'Financial Intelligence Systems',
    'AI-Enhanced Developer Tools',
    'Interactive Educational AI',
    'Other Research Interest'
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    // TODO: Implement form submission
    console.log('Form submitted:', formData)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  }

  return (
    <div className="relative isolate bg-white">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B84F3] to-[#FF3D90] opacity-10" />
      </div>
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <motion.div 
          {...fadeIn}
          className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48"
        >
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden lg:w-1/2">
              <div className="absolute inset-0 bg-gradient-to-r from-[#0B84F3] to-[#FF3D90] opacity-20" />
            </div>
            <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-[#0B84F3] to-[#FF3D90] bg-clip-text text-transparent sm:text-5xl">Research Collaboration</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We're actively seeking research collaborations in neuro-inspired AI systems, physics-informed neural networks, 
              and multi-agent coordination. Contact us to explore how we can advance AI science together.
            </p>
            <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <BuildingOffice2Icon className="h-7 w-6 text-[#0B84F3]" aria-hidden="true" />
                </dt>
                <dd>
                  1438 N7th st.
                  <br />
                  Philadelphia PA0, 19122
                  <br />
                  USA
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Phone</span>
                  <PhoneIcon className="h-7 w-6 text-[#0B84F3]" aria-hidden="true" />
                </dt>
                <dd>
                  <a className="hover:text-[#FF3D90] transition-colors" href="tel:+1-215-888-8748">
                    +1-215-888-8748
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <EnvelopeIcon className="h-7 w-6 text-[#0B84F3]" aria-hidden="true" />
                </dt>
                <dd>
                  <a className="hover:text-[#FF3D90] transition-colors" href="mailto:diego.torres@organicaai.com">
                    diego.torres@organicaai.com
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </motion.div>
        <motion.form 
          {...fadeIn}
          onSubmit={handleSubmit} 
          className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"
        >
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label htmlFor="firstName" className="block text-sm font-semibold leading-6 text-gray-900">
                  First Name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 bg-white/50 backdrop-blur-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#0B84F3] hover:ring-gray-400 transition-all duration-200 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-semibold leading-6 text-gray-900">
                  Last Name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 bg-white/50 backdrop-blur-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#0B84F3] hover:ring-gray-400 transition-all duration-200 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 bg-white/50 backdrop-blur-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#0B84F3] hover:ring-gray-400 transition-all duration-200 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-gray-900">
                  Phone
                </label>
                <div className="mt-2.5">
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 bg-white/50 backdrop-blur-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#0B84F3] hover:ring-gray-400 transition-all duration-200 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
                  Company
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 bg-white/50 backdrop-blur-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#0B84F3] hover:ring-gray-400 transition-all duration-200 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="researchArea" className="block text-sm font-semibold leading-6 text-gray-900">
                  Research Area of Interest
                </label>
                <div className="mt-2.5">
                  <select
                    id="researchArea"
                    value={formData.researchArea}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 bg-white/50 backdrop-blur-sm focus:ring-2 focus:ring-inset focus:ring-[#0B84F3] hover:ring-gray-400 transition-all duration-200 sm:text-sm sm:leading-6"
                  >
                    {researchAreas.map((area) => (
                      <option key={area} value={area}>
                        {area}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="researchInterest" className="block text-sm font-semibold leading-6 text-gray-900">
                  Specific Research Interest
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    id="researchInterest"
                    value={formData.researchInterest}
                    onChange={handleChange}
                    placeholder="e.g., Physics-Informed Neural Networks for fluid dynamics"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 bg-white/50 backdrop-blur-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#0B84F3] hover:ring-gray-400 transition-all duration-200 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 bg-white/50 backdrop-blur-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#0B84F3] hover:ring-gray-400 transition-all duration-200 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                className="rounded-md bg-gradient-to-r from-[#0B84F3] to-[#FF3D90] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B84F3] transition-all duration-200"
              >
                Submit Research Inquiry
              </button>
            </div>
          </div>
        </motion.form>
      </div>
    </div>
  )
} 
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import { FaBook, FaAmazon, FaStar, FaGraduationCap, FaFlask, FaChartLine } from 'react-icons/fa'

const Books = () => {
  const [series, setSeries] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchSeries()
  }, [])

  const fetchSeries = async () => {
    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'
      const response = await fetch(`${API_URL}/api/books/series`)
      const data = await response.json()

      if (data.status === 'success') {
        setSeries(data.data)
      } else {
        toast.error('Failed to load book series')
      }
    } catch (error) {
      console.error('Error fetching series:', error)
      toast.error('Failed to load book series')
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <>
      <Helmet>
        <title>Books by Diego Torres & Organica AI Solutions | Data Science, AI & Culinary Science</title>
        <meta name="description" content="Explore books by Diego Torres on data science, AI, business analytics, and culinary science. Practical guides for professionals combining technology with real-world applications." />
        <meta name="keywords" content="Diego Torres books, data science books, AI books, business analytics, culinary science, Amazon books" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 via-blue-50 to-white">
        {/* Hero Section - Author Branding */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center justify-center mb-4">
                <FaBook className="text-5xl mb-2" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Books by Diego Torres
              </h1>
              <p className="text-xl md:text-2xl mb-6 text-blue-100">
                Author • Data Scientist • AI Researcher • Culinary Innovator
              </p>
              <p className="text-lg text-white/90 max-w-3xl mx-auto">
                Bridging the gap between complex technical concepts and practical applications.
                From precision culinary science to business analytics, discover books that combine
                rigorous methodology with real-world insights.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Author Credentials */}
        <div className="container mx-auto px-4 -mt-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-lg shadow-xl p-6 max-w-4xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center">
                <FaGraduationCap className="text-4xl text-blue-600 mb-2" />
                <h3 className="font-bold text-gray-900">Academic Background</h3>
                <p className="text-sm text-gray-600">Data Science & AI Research</p>
              </div>
              <div className="flex flex-col items-center">
                <FaFlask className="text-4xl text-purple-600 mb-2" />
                <h3 className="font-bold text-gray-900">Innovation</h3>
                <p className="text-sm text-gray-600">Founder of Organica AI Solutions</p>
              </div>
              <div className="flex flex-col items-center">
                <FaChartLine className="text-4xl text-green-600 mb-2" />
                <h3 className="font-bold text-gray-900">Practical Experience</h3>
                <p className="text-sm text-gray-600">Real-world implementations</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="container mx-auto px-4 py-8">
          {/* Main Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Published Book Series
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Available on Amazon in Kindle, Paperback, and Hardcover formats
            </p>
          </div>

          {/* Series Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            {series.map((s, index) => (
              <motion.div
                key={s._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <Link
                  to={`/books/series/${s.slug}`}
                  className="block bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group h-full"
                >
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-6 text-white">
                    <div className="flex items-center justify-between mb-3">
                      <FaBook className="text-4xl" />
                      <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold">
                        {s.bookCount} {s.bookCount === 1 ? 'Book' : 'Books'}
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold">
                      {s.name}
                    </h2>
                  </div>

                  <div className="p-6">
                    {/* Preview of books in series */}
                    <div className="space-y-3 mb-6">
                      {s.books.slice(0, 3).map((book, bookIndex) => (
                        <div key={bookIndex} className="flex items-start">
                          <FaStar className="text-yellow-500 mt-1 mr-2 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-gray-900">{book.title}</p>
                            {book.subtitle && (
                              <p className="text-sm text-gray-600">{book.subtitle}</p>
                            )}
                          </div>
                        </div>
                      ))}
                      {s.books.length > 3 && (
                        <div className="text-sm text-gray-500 italic pl-6">
                          + {s.books.length - 3} more {s.books.length - 3 === 1 ? 'book' : 'books'}
                        </div>
                      )}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <span className="text-primary font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center">
                        View All Books <span className="ml-2">→</span>
                      </span>
                      <FaAmazon className="text-3xl text-gray-400 group-hover:text-orange-500 transition-colors" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Empty State */}
          {series.length === 0 && (
            <div className="text-center py-12">
              <FaBook className="text-6xl text-gray-300 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-gray-600 mb-2">No books available yet</h3>
              <p className="text-gray-500">Check back soon for new releases!</p>
            </div>
          )}

          {/* Why Read These Books */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white rounded-xl shadow-lg p-8 mb-16 max-w-5xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              What Makes These Books Different?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">📊</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Data-Driven Approach</h3>
                  <p className="text-gray-600">
                    Every concept backed by research, data, and real-world testing. No guesswork.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Practical Applications</h3>
                  <p className="text-gray-600">
                    Immediately applicable techniques for professionals and enthusiasts alike.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🔬</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Scientific Rigor</h3>
                  <p className="text-gray-600">
                    Complex topics explained with clarity, bridging theory and practice.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">✨</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Unique Perspectives</h3>
                  <p className="text-gray-600">
                    Cross-disciplinary insights from AI research, data science, and hands-on experience.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Call to Action - Amazon */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl shadow-2xl p-12 text-center text-white max-w-4xl mx-auto"
          >
            <FaAmazon className="text-7xl mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Available Now on Amazon
            </h2>
            <p className="text-xl mb-6 text-white/90 max-w-2xl mx-auto">
              Choose your preferred format: Kindle eBook for instant reading, Paperback for your bookshelf,
              or Premium Hardcover for a collector's edition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-2xl mr-2">📱</span>
                <span className="font-semibold">Kindle: $9.99</span>
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-2xl mr-2">📖</span>
                <span className="font-semibold">Paperback: $19.99</span>
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-2xl mr-2">📚</span>
                <span className="font-semibold">Hardcover: $59.99</span>
              </div>
            </div>
            <p className="mt-6 text-sm text-white/80">
              Free shipping with Amazon Prime • 30-day money-back guarantee
            </p>
          </motion.div>

          {/* About the Author */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="mt-16 text-center max-w-3xl mx-auto"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">About Diego Torres</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Diego Torres is a data scientist, AI researcher, and founder of Organica AI Solutions.
              With a background in artificial intelligence and a passion for applying rigorous methodology
              to diverse fields, Diego's work spans from cutting-edge AI systems to precision culinary science.
              His books reflect a commitment to making complex topics accessible while maintaining technical accuracy.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors"
            >
              Learn more about Organica AI Solutions <span className="ml-2">→</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default Books

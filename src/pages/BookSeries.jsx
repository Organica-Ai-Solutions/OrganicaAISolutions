import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import toast from 'react-hot-toast'
import { FaAmazon, FaBook, FaCheckCircle, FaClock, FaArrowLeft } from 'react-icons/fa'

const BookSeries = () => {
  const { slug } = useParams()
  const [seriesData, setSeriesData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchSeriesBooks()
  }, [slug])

  const fetchSeriesBooks = async () => {
    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'
      const response = await fetch(`${API_URL}/api/books/series/${slug}`)
      const data = await response.json()

      if (data.status === 'success') {
        setSeriesData(data.data)
      } else {
        toast.error('Series not found')
      }
    } catch (error) {
      console.error('Error fetching series:', error)
      toast.error('Failed to load series')
    } finally {
      setLoading(false)
    }
  }

  const getStatusBadge = (status) => {
    const statusConfig = {
      live: { text: 'Live', color: 'bg-green-500', icon: FaCheckCircle },
      in_review: { text: 'In Review', color: 'bg-yellow-500', icon: FaClock },
      publishing: { text: 'Publishing', color: 'bg-blue-500', icon: FaClock },
      draft: { text: 'Draft', color: 'bg-gray-500', icon: FaClock },
      live_with_unpublished_changes: { text: 'Live', color: 'bg-green-500', icon: FaCheckCircle }
    }

    const config = statusConfig[status] || statusConfig.draft
    const Icon = config.icon

    return (
      <span className={`${config.color} text-white px-3 py-1 rounded-full text-xs font-semibold inline-flex items-center gap-1`}>
        <Icon className="text-xs" />
        {config.text}
      </span>
    )
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price)
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!seriesData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <FaBook className="text-6xl text-gray-300 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-gray-600 mb-2">Series not found</h2>
          <Link to="/books" className="text-primary hover:underline">
            Back to all books
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      <Helmet>
        <title>{seriesData.series.name} | Organica AI Solutions</title>
        <meta name="description" content={`Explore the ${seriesData.series.name} book series`} />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Link
            to="/books"
            className="inline-flex items-center text-primary hover:text-secondary mb-8 transition-colors"
          >
            <FaArrowLeft className="mr-2" />
            Back to all books
          </Link>

          {/* Series Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {seriesData.series.name}
            </h1>
            <p className="text-xl text-gray-600">
              {seriesData.books.length} {seriesData.books.length === 1 ? 'Book' : 'Books'} in this series
            </p>
          </div>

          {/* Books Grid */}
          <div className="grid grid-cols-1 gap-8 max-w-5xl mx-auto">
            {seriesData.books.map((book, index) => (
              <div
                key={book._id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="md:flex">
                  {/* Book Cover */}
                  <div className="md:w-1/3 bg-gradient-to-br from-primary to-secondary p-8 flex items-center justify-center">
                    <div className="text-center">
                      <FaBook className="text-8xl text-white mb-4 mx-auto" />
                      <p className="text-white text-sm font-semibold">Book {index + 1}</p>
                    </div>
                  </div>

                  {/* Book Details */}
                  <div className="md:w-2/3 p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">
                          {book.title}
                        </h2>
                        <p className="text-gray-600 mb-2">by {book.author}</p>
                        {book.kdpSelect && (
                          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">
                            KDP Select
                          </span>
                        )}
                      </div>
                    </div>

                    <p className="text-gray-700 mb-6">{book.description}</p>

                    {/* Format Availability */}
                    <div className="space-y-3 mb-6">
                      {/* Kindle */}
                      {book.formats.kindle.available && (
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center gap-3">
                            <FaBook className="text-primary" />
                            <div>
                              <p className="font-semibold text-gray-900">Kindle eBook</p>
                              <p className="text-sm text-gray-600">{formatPrice(book.formats.kindle.price)}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            {getStatusBadge(book.formats.kindle.status)}
                            {book.formats.kindle.amazonUrl && book.formats.kindle.status === 'live' && (
                              <a
                                href={book.formats.kindle.amazonUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-primary hover:bg-secondary text-white px-4 py-2 rounded-lg transition-colors inline-flex items-center gap-2"
                              >
                                <FaAmazon />
                                View on Amazon
                              </a>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Paperback */}
                      {book.formats.paperback.available && (
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center gap-3">
                            <FaBook className="text-primary" />
                            <div>
                              <p className="font-semibold text-gray-900">Paperback</p>
                              <p className="text-sm text-gray-600">{formatPrice(book.formats.paperback.price)}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            {getStatusBadge(book.formats.paperback.status)}
                            {book.formats.paperback.amazonUrl && book.formats.paperback.status === 'live' && (
                              <a
                                href={book.formats.paperback.amazonUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-primary hover:bg-secondary text-white px-4 py-2 rounded-lg transition-colors inline-flex items-center gap-2"
                              >
                                <FaAmazon />
                                View on Amazon
                              </a>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Hardcover */}
                      {book.formats.hardcover.available && (
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center gap-3">
                            <FaBook className="text-primary" />
                            <div>
                              <p className="font-semibold text-gray-900">Hardcover</p>
                              <p className="text-sm text-gray-600">{formatPrice(book.formats.hardcover.price)}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            {getStatusBadge(book.formats.hardcover.status)}
                            {book.formats.hardcover.amazonUrl && book.formats.hardcover.status === 'live' && (
                              <a
                                href={book.formats.hardcover.amazonUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-primary hover:bg-secondary text-white px-4 py-2 rounded-lg transition-colors inline-flex items-center gap-2"
                              >
                                <FaAmazon />
                                View on Amazon
                              </a>
                            )}
                          </div>
                        </div>
                      )}
                    </div>

                    {book.tags && book.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {book.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default BookSeries

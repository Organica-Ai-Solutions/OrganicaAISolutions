import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { verifyEmail } from '../utils/api'
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline'

const VerifyEmail = () => {
  const [verificationStatus, setVerificationStatus] = useState('verifying') // verifying, success, error
  const { token } = useParams()

  useEffect(() => {
    const verify = async () => {
      try {
        await verifyEmail(token)
        setVerificationStatus('success')
        toast.success('Email verified successfully!')
      } catch (error) {
        console.error('Verification error:', error)
        setVerificationStatus('error')
        toast.error(error.response?.data?.message || 'Failed to verify email')
      }
    }

    if (token) {
      verify()
    }
  }, [token])

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Email Verification
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="text-center">
            {verificationStatus === 'verifying' && (
              <div className="animate-pulse">
                <div className="text-lg">Verifying your email...</div>
              </div>
            )}

            {verificationStatus === 'success' && (
              <div>
                <CheckCircleIcon className="mx-auto h-12 w-12 text-green-500" />
                <h3 className="mt-2 text-lg font-medium text-gray-900">
                  Email Verified Successfully
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  Your email has been verified. You can now access all features of your account.
                </p>
                <div className="mt-6">
                  <Link
                    to="/login"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Go to Login
                  </Link>
                </div>
              </div>
            )}

            {verificationStatus === 'error' && (
              <div>
                <XCircleIcon className="mx-auto h-12 w-12 text-red-500" />
                <h3 className="mt-2 text-lg font-medium text-gray-900">
                  Verification Failed
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  The verification link is invalid or has expired. Please try signing up again.
                </p>
                <div className="mt-6">
                  <Link
                    to="/signup"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default VerifyEmail 
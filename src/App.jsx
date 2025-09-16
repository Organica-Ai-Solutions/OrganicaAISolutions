import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { HelmetProvider } from 'react-helmet-async'
import { AuthProvider } from './contexts/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Chatbot from './components/Chatbot'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Signup from './pages/Signup'
import VerifyEmail from './pages/VerifyEmail'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import NotFound from './pages/NotFound'
import Chat from './pages/Chat'
import Projects from './pages/Projects'
import NISProtocol from './pages/NISProtocol'
import NISProtocolRedirect from './components/NISProtocolRedirect'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Legal from './pages/Legal'

function App() {
  return (
    <HelmetProvider>
      <Router>
        <AuthProvider>
        <div className="min-h-screen bg-gradient-to-b from-background to-white">
          <Toaster 
            position="top-right"
            toastOptions={{
              style: {
                background: '#fff',
                color: '#333',
                borderRadius: '0.5rem',
                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
              },
              success: {
                style: {
                  border: '1px solid #86efac',
                },
              },
              error: {
                style: {
                  border: '1px solid #fca5a5',
                },
              },
            }}
          />
          <Navbar />
          <div className="fixed bottom-6 right-6 z-50">
            <Chatbot />
          </div>
          <main className="flex-grow pt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/verify-email/:token" element={<VerifyEmail />} />
              <Route path="/dashboard" element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } />
              <Route path="/profile" element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              } />
              <Route path="/chat" element={<Chat />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/nis-protocol" element={<NISProtocol />} />
              <Route path="/nisprotocol" element={<NISProtocolRedirect />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/legal" element={<Legal />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </AuthProvider>
    </Router>
    </HelmetProvider>
  )
}

export default App 
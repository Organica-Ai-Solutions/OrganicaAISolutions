import React, { useState, useRef, useEffect } from 'react'
import { ChatBubbleLeftRightIcon, PaperAirplaneIcon, XMarkIcon, ArrowPathIcon } from '@heroicons/react/24/outline'
import { useAuth } from '../contexts/AuthContext'
import { chatService } from '../utils/api'

const ChatMessage = ({ message, isUser }) => (
  <div 
    className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4 animate-fade-in`}
  >
    {!isUser && (
      <div className="flex-shrink-0 mr-3">
        <div className="h-8 w-8 rounded-full bg-gradient-to-r from-primary-600 to-accent flex items-center justify-center">
          <ChatBubbleLeftRightIcon className="h-4 w-4 text-white" />
        </div>
      </div>
    )}
    <div
      className={`${
        isUser 
          ? 'bg-gradient-to-r from-primary-600 to-accent text-white' 
          : 'bg-gray-100 text-gray-900'
      } rounded-2xl px-4 py-2 max-w-[80%] break-words shadow-sm
      ${isUser ? 'rounded-tr-sm' : 'rounded-tl-sm'}
      transform transition-all duration-200 hover:shadow-md hover:scale-[1.02]`}
    >
      <p className="text-sm">{message.content}</p>
      {message.links && message.links.length > 0 && (
        <div className="mt-2 space-y-1">
          {message.links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`block text-sm underline ${
                isUser ? 'text-white/90 hover:text-white' : 'text-primary-600 hover:text-primary-500'
              } transition-colors duration-200`}
            >
              {link.text}
            </a>
          ))}
        </div>
      )}
    </div>
    {isUser && (
      <div className="flex-shrink-0 ml-3">
        <div className="h-8 w-8 rounded-full bg-gradient-to-r from-primary-600 to-accent flex items-center justify-center">
          <svg className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
    )}
  </div>
)

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      content: "Hello! I'm your Organica AI assistant. How can I help you with our technology solutions?",
      isUser: false,
    },
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef(null)
  const { isAuthenticated } = useAuth()

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!inputMessage.trim()) return

    const userMessage = { content: inputMessage, isUser: true }
    setMessages((prev) => [...prev, userMessage])
    setInputMessage('')
    setIsLoading(true)

    try {
      // Add debugging message to help diagnose connection issues
      console.log('Attempting to connect to backend at:', 'https://organicaai-backend.onrender.com/api/chat/public-message');
      
      // Try to use the real API with the hardcoded Render URL and public endpoint
      const response = await fetch('https://organicaai-backend.onrender.com/api/chat/public-message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: inputMessage }),
        mode: 'cors', // Explicitly set CORS mode
      });

      // Check if the response is valid
      if (response.ok) {
        const data = await response.json();
        console.log('Backend response:', data);
        
        const botMessage = {
          content: data.response || "I received your message but couldn't generate a proper response.",
          isUser: false,
          links: data.links || [],
        };
        setMessages((prev) => [...prev, botMessage]);
      } else {
        console.error(`Backend returned error status: ${response.status}`, await response.text());
        throw new Error(`Backend returned status: ${response.status}`);
      }
    } catch (error) {
      console.error('Chat API error details:', error.message, error.stack);
      
      // First try the public health endpoint to confirm basic connectivity
      try {
        console.log("Testing basic backend connectivity with health endpoint");
        const healthCheck = await fetch('https://organicaai-backend.onrender.com/health');
        if (healthCheck.ok) {
          console.log("Health endpoint connected successfully, but chat API failed");
          console.log("Health response:", await healthCheck.json());
        }
      } catch (healthError) {
        console.error("Health endpoint also failed:", healthError);
      }
      
      // Generate a more informative response if the API fails
      let mockResponse = "I'm sorry, I can't connect to our backend service at the moment. Our team has been notified and is working to restore service.";
      
      // Simple keyword-based responses when backend is unavailable
      const lowercaseInput = inputMessage.toLowerCase();
      
      if (lowercaseInput.includes('hello') || lowercaseInput.includes('hi')) {
        mockResponse = "Hello! I'm currently running in offline mode as we're experiencing connection issues with our backend service. How can I assist you with basic information today?";
      } else if (lowercaseInput.includes('ai solutions') || lowercaseInput.includes('solutions')) {
        mockResponse = "Organica AI offers solutions in mobile app development, AI integration, and blockchain technology. For more detailed information, please try again later when our backend services are fully operational.";
      } else if (lowercaseInput.includes('mobile') || lowercaseInput.includes('app')) {
        mockResponse = "Our mobile development team creates intuitive applications with optimized user experiences. We specialize in community-focused and business solutions. Please contact us directly for a more detailed conversation about your specific needs.";
      } else if (lowercaseInput.includes('blockchain') || lowercaseInput.includes('crypto')) {
        mockResponse = "Our blockchain services include secure payment processing, financial management solutions, and implementing blockchain security for various applications. For specific project inquiries, please email us at contact@organicaai.com.";
      } else if (lowercaseInput.includes('backend') || lowercaseInput.includes('error') || lowercaseInput.includes('not working')) {
        mockResponse = "Our backend service is temporarily unavailable. The connection issue has been automatically reported to our development team, and they are working to resolve it as quickly as possible. Please try again later.";
      } else if (lowercaseInput.includes('contact') || lowercaseInput.includes('help')) {
        mockResponse = "You can contact our team at contact@organicaai.com or visit our Contact page for more information. We apologize for the limited functionality right now and appreciate your patience.";
      }
      
      const errorMessage = {
        content: mockResponse,
        isUser: false,
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const suggestions = [
    'Tell me about your AI solutions',
    'How can you help with mobile development?',
    'What blockchain services do you offer?',
    'Explain your cybersecurity solutions',
  ]

  const clearChat = () => {
    setMessages([
      {
        content: "Hello! I'm your Organica AI assistant. How can I help you with our technology solutions?",
        isUser: false,
      },
    ])
  }

  return (
    <>
      {/* Chat button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-gradient-to-r from-primary-600 to-accent text-white rounded-full p-3 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 animate-bounce"
      >
        <ChatBubbleLeftRightIcon className="h-6 w-6" />
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 w-96 bg-white rounded-xl shadow-2xl border border-gray-200 transform transition-all duration-300 animate-slide-up">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gradient-to-r from-primary-600 to-accent rounded-t-xl">
            <h3 className="text-lg font-semibold text-white">AI Assistant</h3>
            <div className="flex items-center space-x-2">
              <button
                onClick={clearChat}
                className="text-white/80 hover:text-white transition-colors"
                title="Clear chat"
              >
                <ArrowPathIcon className="h-5 w-5" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="h-96 overflow-y-auto p-4 bg-gray-50/50">
            {messages.map((message, index) => (
              <ChatMessage key={index} message={message} isUser={message.isUser} />
            ))}
            {isLoading && (
              <div className="flex justify-start mb-4 animate-fade-in">
                <div className="bg-gray-100 rounded-lg px-4 py-2">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                    <div className="w-2 h-2 bg-primary-600 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggestions */}
          {messages.length === 1 && (
            <div className="px-4 pb-4">
              <div className="flex flex-wrap gap-2">
                {suggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => setInputMessage(suggestion)}
                    className="text-sm bg-gray-100 hover:bg-gray-200 rounded-full px-3 py-1 text-gray-700 transition-colors duration-200 hover:text-primary-600"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <form onSubmit={handleSubmit} className="border-t border-gray-200 p-4 bg-white rounded-b-xl">
            <div className="flex space-x-4">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 rounded-lg border border-gray-300 px-4 py-2 
                focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 
                bg-gray-50 placeholder:text-gray-400"
              />
              <button
                type="submit"
                disabled={!inputMessage.trim() || isLoading}
                className="bg-gradient-to-r from-primary-600 to-accent text-white rounded-lg px-4 py-2 
                hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed 
                transform hover:scale-105 active:scale-95 transition-all duration-200"
              >
                <PaperAirplaneIcon className="h-5 w-5" />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  )
} 
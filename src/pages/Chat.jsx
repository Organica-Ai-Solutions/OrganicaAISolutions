import { useState, useEffect } from 'react'
import { chatService } from '../utils/api'
import { useAuth } from '../contexts/AuthContext'
import toast from 'react-hot-toast'

export default function Chat() {
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const { user } = useAuth()

  useEffect(() => {
    loadChatHistory()
  }, [])

  const loadChatHistory = async () => {
    try {
      const response = await chatService.getChatHistory()
      setMessages(response.data)
    } catch (error) {
      console.error('Error loading chat history:', error)
      toast.error('Error al cargar el historial del chat')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!newMessage.trim()) return

    setLoading(true)
    try {
      const response = await chatService.sendMessage(newMessage)
      setMessages([...messages, response.data])
      setNewMessage('')
    } catch (error) {
      console.error('Error sending message:', error)
      toast.error('Error al enviar el mensaje')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="p-4 bg-primary-600 text-white">
          <h2 className="text-xl font-semibold">Chat con Organica AI</h2>
        </div>
        
        <div className="h-[500px] overflow-y-auto p-4 space-y-4">
          {messages.map((msg, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-start space-x-2">
                <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                  <p className="text-sm text-gray-800">{msg.message}</p>
                </div>
              </div>
              <div className="flex items-start space-x-2 justify-end">
                <div className="bg-primary-100 rounded-lg p-3 max-w-[80%]">
                  <p className="text-sm text-gray-800">{msg.response}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 border-t">
          <form onSubmit={handleSubmit} className="flex space-x-4">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Escribe tu mensaje..."
              className="flex-1 rounded-lg border-gray-300 focus:border-primary-500 focus:ring-primary-500"
              disabled={loading}
            />
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50"
            >
              {loading ? 'Enviando...' : 'Enviar'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
} 
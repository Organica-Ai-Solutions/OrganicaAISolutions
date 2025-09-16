import { useState, useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { chatService } from '../utils/api'
import toast from 'react-hot-toast'
import {
  ChartBarIcon,
  ChatBubbleLeftRightIcon,
  ClockIcon,
  UserIcon
} from '@heroicons/react/24/outline'

export default function Dashboard() {
  const { user } = useAuth()
  const [dashboardStats, setDashboardStats] = useState({
    totalChats: 0,
    avgResponseTime: '0s',
    activeChats: 0,
    completedChats: 0
  })
  const [recentChats, setRecentChats] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadDashboardData()
  }, [])

  const loadDashboardData = async () => {
    try {
      const [statsResponse, chatsResponse] = await Promise.all([
        chatService.getStats(),
        chatService.getChatHistory()
      ])
      
      setDashboardStats(statsResponse.data)
      setRecentChats(chatsResponse.data.slice(0, 5))
    } catch (error) {
      console.error('Error loading dashboard data:', error)
      toast.error('Error al cargar los datos del dashboard')
    } finally {
      setLoading(false)
    }
  }

  const stats = [
    {
      name: 'Total de chats',
      value: dashboardStats.totalChats,
      icon: ChatBubbleLeftRightIcon,
    },
    {
      name: 'Tiempo promedio de respuesta',
      value: dashboardStats.avgResponseTime,
      icon: ClockIcon,
    },
    {
      name: 'Chats activos',
      value: dashboardStats.activeChats,
      icon: ChartBarIcon,
    },
    {
      name: 'Chats completados',
      value: dashboardStats.completedChats,
      icon: UserIcon,
    },
  ]

  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Stats Grid */}
        <div className="mt-8">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((item) => (
              <div
                key={item.name}
                className="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"
              >
                <dt>
                  <div className="absolute bg-primary-500 rounded-md p-3">
                    <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-sm font-medium text-gray-500 truncate">{item.name}</p>
                </dt>
                <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
                  <p className="text-2xl font-semibold text-gray-900">{item.value}</p>
                </dd>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-8">
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h2 className="text-lg font-medium text-gray-900">Actividad reciente</h2>
            </div>
            <div className="border-t border-gray-200">
              <ul role="list" className="divide-y divide-gray-200">
                {recentChats.map((chat, index) => (
                  <li key={index} className="px-4 py-4 sm:px-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <ChatBubbleLeftRightIcon className="h-6 w-6 text-primary-500" />
                        </div>
                        <div className="ml-4">
                          <p className="text-sm font-medium text-gray-900 truncate">
                            {chat.message}
                          </p>
                          <p className="text-sm text-gray-500">
                            {new Date(chat.timestamp).toLocaleString()}
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 
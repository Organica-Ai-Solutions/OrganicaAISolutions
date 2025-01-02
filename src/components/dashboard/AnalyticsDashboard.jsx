import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ChatBubbleLeftIcon, ChartBarIcon, UserGroupIcon, CpuChipIcon } from '@heroicons/react/24/outline';

const mockData = {
  chatMetrics: [
    { month: 'Jan', messages: 65 },
    { month: 'Feb', messages: 85 },
    { month: 'Mar', messages: 120 },
    { month: 'Apr', messages: 90 },
    { month: 'May', messages: 150 },
    { month: 'Jun', messages: 180 },
  ],
  stats: [
    {
      id: 1,
      name: 'Total Conversations',
      value: '2,345',
      change: '+12.5%',
      icon: ChatBubbleLeftIcon,
    },
    {
      id: 2,
      name: 'Active Users',
      value: '987',
      change: '+18.2%',
      icon: UserGroupIcon,
    },
    {
      id: 3,
      name: 'AI Models Used',
      value: '15',
      change: '+5',
      icon: CpuChipIcon,
    },
    {
      id: 4,
      name: 'Success Rate',
      value: '98.5%',
      change: '+2.3%',
      icon: ChartBarIcon,
    },
  ],
};

function StatCard({ stat }) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <stat.icon className="h-6 w-6 text-primary" />
        </div>
        <div className="ml-4">
          <p className="text-sm font-medium text-gray-500">{stat.name}</p>
          <div className="flex items-baseline">
            <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
            <p className={`ml-2 text-sm font-medium ${
              stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
            }`}>
              {stat.change}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function AnalyticsDashboard() {
  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {mockData.stats.map((stat) => (
          <StatCard key={stat.id} stat={stat} />
        ))}
      </div>

      {/* Charts */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-6">Chat Activity</h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={mockData.chatMetrics}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="messages" fill="#4F46E5" name="Messages" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h3>
        <div className="space-y-4">
          {/* Add recent activity items here */}
        </div>
      </div>
    </div>
  );
}

export default AnalyticsDashboard; 
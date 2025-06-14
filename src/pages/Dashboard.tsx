import { Link } from 'react-router-dom';
import Card from '../components/Card';
import { Database, BarChart3, TrendingUp, DollarSign, Users, Calendar, Activity } from 'lucide-react';

export default function Dashboard() {
  const stats = [
    {
      title: 'Total Revenue',
      value: '₹2,45,67,890',
      change: '+12.5%',
      changeType: 'positive' as const,
      icon: <DollarSign className="w-6 h-6 text-primary" />
    },
    {
      title: 'Monthly Expenses',
      value: '₹1,89,34,567',
      change: '-3.2%',
      changeType: 'positive' as const,
      icon: <TrendingUp className="w-6 h-6 text-primary" />
    },
    {
      title: 'Active Patients',
      value: '1,234',
      change: '+8.1%',
      changeType: 'positive' as const,
      icon: <Users className="w-6 h-6 text-primary" />
    },
    {
      title: 'Bed Occupancy',
      value: '87%',
      change: '+2.3%',
      changeType: 'positive' as const,
      icon: <Activity className="w-6 h-6 text-primary" />
    }
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">Welcome back! Here's your hospital's performance overview.</p>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <Calendar className="w-4 h-4" />
          <span>Last updated: {new Date().toLocaleDateString()}</span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="text-center">
            <div className="flex items-center justify-between mb-4">
              {stat.icon}
              <span className={`text-sm font-medium px-2 py-1 rounded-full ${
                stat.changeType === 'positive' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-red-100 text-red-800'
              }`}>
                {stat.change}
              </span>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
            <div className="text-sm text-gray-600">{stat.title}</div>
          </Card>
        ))}
      </div>

      {/* Main Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card title="Hospital Data Management" hover>
          <div className="space-y-4">
            <p className="text-gray-600">
              Manage your hospital's revenue, expenses, and metadata for comprehensive financial tracking.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <Link to="/dashboard/hospital-data/revenue">
                <div className="p-3 bg-primary/5 rounded-lg text-center hover:bg-primary/10 transition-colors cursor-pointer">
                  <DollarSign className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-sm font-medium">Revenue</div>
                </div>
              </Link>
              <Link to="/dashboard/hospital-data/expenses">
                <div className="p-3 bg-primary/5 rounded-lg text-center hover:bg-primary/10 transition-colors cursor-pointer">
                  <TrendingUp className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-sm font-medium">Expenses</div>
                </div>
              </Link>
              <Link to="/dashboard/hospital-data/metadata">
                <div className="p-3 bg-primary/5 rounded-lg text-center hover:bg-primary/10 transition-colors cursor-pointer">
                  <Database className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-sm font-medium">Metadata</div>
                </div>
              </Link>
            </div>
            <Link to="/dashboard/hospital-data">
              <div className="btn-primary text-center block mt-4">
                Manage Hospital Data
              </div>
            </Link>
          </div>
        </Card>

        <Card title="Analytics Tools" hover>
          <div className="space-y-4">
            <p className="text-gray-600">
              Access powerful AI-driven analytics tools to gain insights into your hospital's financial performance.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50">
                <BarChart3 className="w-5 h-5 text-primary" />
                <span className="text-sm">Financial Overview</span>
              </div>
              <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50">
                <Activity className="w-5 h-5 text-primary" />
                <span className="text-sm">Operational Efficiency</span>
              </div>
              <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50">
                <DollarSign className="w-5 h-5 text-primary" />
                <span className="text-sm">Expense Insights</span>
              </div>
              <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50">
                <TrendingUp className="w-5 h-5 text-primary" />
                <span className="text-sm">Trends & Variance</span>
              </div>
            </div>
            <Link to="/dashboard/tools">
              <div className="btn-primary text-center block mt-4">
                Launch Analytics Tools
              </div>
            </Link>
          </div>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card title="Recent Activity">
        <div className="space-y-3">
          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <div className="flex-1">
              <div className="text-sm font-medium">Revenue data updated for December 2024</div>
              <div className="text-xs text-gray-500">2 hours ago</div>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <div className="w-2 h-2 bg-highlight rounded-full"></div>
            <div className="flex-1">
              <div className="text-sm font-medium">Expense analysis completed</div>
              <div className="text-xs text-gray-500">5 hours ago</div>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <div className="w-2 h-2 bg-secondary-dark rounded-full"></div>
            <div className="flex-1">
              <div className="text-sm font-medium">Monthly report generated</div>
              <div className="text-xs text-gray-500">1 day ago</div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
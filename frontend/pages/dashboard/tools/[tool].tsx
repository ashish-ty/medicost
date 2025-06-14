import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Card from '../../../components/Card';
import Button from '../../../components/Button';
import MonthSwitcher from '../../../components/MonthSwitcher';
import { BarChart3, TrendingUp, DollarSign, Target, Download, Share, RefreshCw } from 'lucide-react';

export default function ToolDetail() {
  const { query } = useRouter();
  const { tool } = query as { tool: string };
  const [month, setMonth] = useState<number>(new Date().getMonth() + 1);
  const [year, setYear] = useState<number>(new Date().getFullYear());
  const [loading, setLoading] = useState(false);

  const toolConfigs = {
    'financial-overview': {
      title: 'Financial Overview',
      description: 'Comprehensive financial analysis with AI-powered insights',
      icon: <BarChart3 className="w-8 h-8 text-primary" />,
      color: 'bg-blue-50 border-blue-200'
    },
    'operational-efficiency': {
      title: 'Operational Efficiency',
      description: 'Resource utilization and workflow optimization analysis',
      icon: <Target className="w-8 h-8 text-yellow-600" />,
      color: 'bg-yellow-50 border-yellow-200'
    },
    'expense-insights': {
      title: 'Expense Insights',
      description: 'Deep dive into expense patterns and cost optimization',
      icon: <DollarSign className="w-8 h-8 text-red-600" />,
      color: 'bg-red-50 border-red-200'
    },
    'trends-variance': {
      title: 'Trends & Variance Analysis',
      description: 'Pattern identification and variance analysis with forecasting',
      icon: <TrendingUp className="w-8 h-8 text-green-600" />,
      color: 'bg-green-50 border-green-200'
    }
  };

  const currentTool = toolConfigs[tool as keyof typeof toolConfigs];

  const generateReport = async () => {
    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setLoading(false);
    alert('Report generated successfully!');
  };

  if (!currentTool) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Tool Not Found</h1>
        <p className="text-gray-600">The requested analytics tool could not be found.</p>
      </div>
    );
  }

  // Mock data for demonstration
  const mockData = {
    'financial-overview': {
      metrics: [
        { label: 'Total Revenue', value: '₹24,56,789', change: '+12.5%', positive: true },
        { label: 'Total Expenses', value: '₹18,93,456', change: '-3.2%', positive: true },
        { label: 'Net Profit', value: '₹5,63,333', change: '+28.7%', positive: true },
        { label: 'Profit Margin', value: '23.1%', change: '+2.1%', positive: true }
      ],
      insights: [
        'Revenue growth is 15% above industry average',
        'Cardiology department shows highest profitability',
        'Expense control measures are showing positive results'
      ]
    },
    'operational-efficiency': {
      metrics: [
        { label: 'Bed Occupancy Rate', value: '87%', change: '+5.2%', positive: true },
        { label: 'Average Length of Stay', value: '4.2 days', change: '-0.8 days', positive: true },
        { label: 'Staff Utilization', value: '92%', change: '+3.1%', positive: true },
        { label: 'Equipment Efficiency', value: '89%', change: '+1.5%', positive: true }
      ],
      insights: [
        'ICU utilization is optimal at current capacity',
        'Nursing staff efficiency has improved significantly',
        'Equipment downtime reduced by 15% this month'
      ]
    },
    'expense-insights': {
      metrics: [
        { label: 'Pharmacy Costs', value: '₹8,45,123', change: '+2.1%', positive: false },
        { label: 'Staff Costs', value: '₹6,78,901', change: '-1.5%', positive: true },
        { label: 'Utilities', value: '₹1,23,456', change: '+8.3%', positive: false },
        { label: 'Maintenance', value: '₹89,012', change: '-12.4%', positive: true }
      ],
      insights: [
        'Pharmacy costs are trending upward - consider bulk purchasing',
        'Utility costs spike detected - investigate energy efficiency',
        'Maintenance costs well controlled this period'
      ]
    },
    'trends-variance': {
      metrics: [
        { label: 'Revenue Variance', value: '+12.5%', change: 'vs Budget', positive: true },
        { label: 'Expense Variance', value: '-3.2%', change: 'vs Budget', positive: true },
        { label: 'Patient Volume Trend', value: '+8.1%', change: 'vs Last Month', positive: true },
        { label: 'Seasonal Adjustment', value: '94%', change: 'Confidence', positive: true }
      ],
      insights: [
        'Strong positive trend in patient volume continues',
        'Revenue variance indicates excellent budget performance',
        'Seasonal patterns suggest 15% growth in next quarter'
      ]
    }
  };

  const currentData = mockData[tool as keyof typeof mockData];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div className="flex items-center space-x-4">
          {currentTool.icon}
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{currentTool.title}</h1>
            <p className="text-gray-600 mt-1">{currentTool.description}</p>
          </div>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" className="flex items-center space-x-2">
            <Share className="w-4 h-4" />
            <span>Share</span>
          </Button>
          <Button variant="outline" className="flex items-center space-x-2">
            <Download className="w-4 h-4" />
            <span>Export</span>
          </Button>
          <Button 
            onClick={generateReport} 
            disabled={loading}
            className="flex items-center space-x-2"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            <span>{loading ? 'Generating...' : 'Generate Report'}</span>
          </Button>
        </div>
      </div>

      <MonthSwitcher 
        currentMonth={month} 
        currentYear={year} 
        onChange={(m, y) => { setMonth(m); setYear(y); }} 
      />

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {currentData?.metrics.map((metric, index) => (
          <Card key={index} className={currentTool.color}>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
              <div className="text-sm text-gray-600 mb-2">{metric.label}</div>
              <div className={`text-xs px-2 py-1 rounded-full ${
                metric.positive 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-red-100 text-red-800'
              }`}>
                {metric.change}
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* AI Insights */}
      <Card title="AI-Powered Insights">
        <div className="space-y-3">
          {currentData?.insights.map((insight, index) => (
            <div key={index} className="flex items-start space-x-3 p-3 bg-highlight/10 rounded-lg">
              <div className="w-2 h-2 bg-highlight rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-sm text-gray-700">{insight}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Chart Placeholder */}
      <Card title="Visual Analytics">
        <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <BarChart3 className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">Interactive charts and visualizations will be displayed here</p>
            <p className="text-sm text-gray-400 mt-2">Data visualization powered by AI analytics</p>
          </div>
        </div>
      </Card>

      {/* Recommendations */}
      <Card title="Recommendations">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-green-50 rounded-lg">
            <h4 className="font-medium text-green-800 mb-2">Immediate Actions</h4>
            <ul className="text-sm text-green-700 space-y-1">
              <li>• Review pharmacy procurement processes</li>
              <li>• Optimize staff scheduling for peak hours</li>
              <li>• Implement energy-saving measures</li>
            </ul>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg">
            <h4 className="font-medium text-blue-800 mb-2">Strategic Initiatives</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• Expand high-performing specialties</li>
              <li>• Invest in automation technologies</li>
              <li>• Develop patient retention programs</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
}
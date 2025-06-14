import { Link } from 'react-router-dom';
import Card from '../components/Card';
import { BarChart3, TrendingUp, DollarSign, Target, Brain, Zap, Users, FileText } from 'lucide-react';

export default function ToolsOverview() {
  const tools = [
    {
      key: 'financial-overview',
      title: 'Financial Overview',
      description: 'Comprehensive analysis of revenue, expenses, and profitability with AI-powered insights',
      icon: <BarChart3 className="w-8 h-8 text-primary" />,
      features: ['Revenue Analysis', 'Profit Margins', 'Cash Flow', 'ROI Metrics'],
      color: 'bg-blue-50 border-blue-200'
    },
    {
      key: 'operational-efficiency',
      title: 'Operational Efficiency',
      description: 'Optimize resource utilization and operational workflows for maximum efficiency',
      icon: <Zap className="w-8 h-8 text-yellow-600" />,
      features: ['Resource Utilization', 'Workflow Analysis', 'Capacity Planning', 'Performance KPIs'],
      color: 'bg-yellow-50 border-yellow-200'
    },
    {
      key: 'expense-insights',
      title: 'Expense Insights',
      description: 'Deep dive into expense patterns with intelligent categorization and cost control',
      icon: <DollarSign className="w-8 h-8 text-red-600" />,
      features: ['Cost Breakdown', 'Expense Trends', 'Budget Variance', 'Cost Optimization'],
      color: 'bg-red-50 border-red-200'
    },
    {
      key: 'trends-variance',
      title: 'Trends & Variance Analysis',
      description: 'Identify patterns and anomalies with sophisticated variance analysis and forecasting',
      icon: <TrendingUp className="w-8 h-8 text-green-600" />,
      features: ['Trend Analysis', 'Variance Reports', 'Forecasting', 'Anomaly Detection'],
      color: 'bg-green-50 border-green-200'
    }
  ];

  const quickActions = [
    {
      title: 'Generate Monthly Report',
      description: 'Create comprehensive monthly financial report',
      icon: <FileText className="w-6 h-6 text-primary" />,
      action: 'Generate Report'
    },
    {
      title: 'AI Insights Dashboard',
      description: 'View AI-powered recommendations and insights',
      icon: <Brain className="w-6 h-6 text-primary" />,
      action: 'View Insights'
    },
    {
      title: 'Benchmark Analysis',
      description: 'Compare performance with industry standards',
      icon: <Target className="w-6 h-6 text-primary" />,
      action: 'Compare'
    },
    {
      title: 'Team Collaboration',
      description: 'Share reports and collaborate with team members',
      icon: <Users className="w-6 h-6 text-primary" />,
      action: 'Collaborate'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Analytics Tools</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Leverage AI-powered analytics to gain deep insights into your hospital's financial performance 
          and operational efficiency. Our tools help you make data-driven decisions with confidence.
        </p>
      </div>

      {/* Main Tools */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {tools.map((tool) => (
          <Card key={tool.key} hover className={`${tool.color} border-2`}>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  {tool.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {tool.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {tool.description}
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-medium text-gray-700">Key Features:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {tool.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              <Link to={`/dashboard/tools/${tool.key}`}>
                <div className="btn-primary text-center block mt-4">
                  Launch {tool.title}
                </div>
              </Link>
            </div>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <Card title="Quick Actions">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action, index) => (
            <div key={index} className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
              <div className="flex items-center space-x-3 mb-2">
                {action.icon}
                <h4 className="font-medium text-gray-900">{action.title}</h4>
              </div>
              <p className="text-sm text-gray-600 mb-3">{action.description}</p>
              <button className="text-sm text-primary hover:text-primary-dark font-medium">
                {action.action} →
              </button>
            </div>
          ))}
        </div>
      </Card>

      {/* AI Insights Preview */}
      <Card title="AI-Powered Insights Preview">
        <div className="space-y-4">
          <div className="flex items-start space-x-4 p-4 bg-highlight/10 rounded-lg">
            <Brain className="w-6 h-6 text-highlight flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-medium text-gray-900 mb-1">Revenue Optimization Opportunity</h4>
              <p className="text-sm text-gray-600">
                AI analysis suggests increasing OPD capacity in Cardiology could boost revenue by 15-20% 
                based on current demand patterns.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4 p-4 bg-secondary/20 rounded-lg">
            <Target className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-medium text-gray-900 mb-1">Cost Reduction Insight</h4>
              <p className="text-sm text-gray-600">
                Pharmacy expenses are 12% above industry average. Consider bulk purchasing agreements 
                to reduce costs by an estimated ₹2.3L monthly.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-lg">
            <TrendingUp className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-medium text-gray-900 mb-1">Performance Trend</h4>
              <p className="text-sm text-gray-600">
                Your hospital's efficiency metrics have improved by 8% over the last quarter, 
                outperforming 73% of similar-sized hospitals.
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
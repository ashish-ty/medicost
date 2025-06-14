import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Card from '../components/Card';
import { BarChart3, TrendingUp, DollarSign, Users, Brain, Shield, Zap, Target } from 'lucide-react';

export default function Home() {
  const features = [
    {
      icon: <BarChart3 className="w-8 h-8 text-primary" />,
      title: 'Financial Overview',
      description: 'Get comprehensive insights into your hospital\'s financial performance with AI-powered analytics that identify trends and opportunities.'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: 'Operational Efficiency',
      description: 'Optimize resource allocation and operational workflows using advanced data analysis to maximize efficiency and reduce waste.'
    },
    {
      icon: <DollarSign className="w-8 h-8 text-primary" />,
      title: 'Expense Insights',
      description: 'Deep dive into expense patterns with intelligent categorization and predictive modeling to control costs effectively.'
    },
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: 'Trends & Variance Analysis',
      description: 'Identify patterns and anomalies in your financial data with sophisticated variance analysis and trend forecasting.'
    }
  ];

  const benefits = [
    {
      icon: <Brain className="w-6 h-6 text-highlight" />,
      title: 'AI-Powered Intelligence',
      description: 'Advanced machine learning algorithms analyze your data to provide actionable insights.'
    },
    {
      icon: <Shield className="w-6 h-6 text-highlight" />,
      title: 'Secure & Compliant',
      description: 'Enterprise-grade security ensuring your sensitive hospital data remains protected.'
    },
    {
      icon: <Zap className="w-6 h-6 text-highlight" />,
      title: 'Real-time Analytics',
      description: 'Get instant insights with real-time data processing and dynamic reporting.'
    },
    {
      icon: <Users className="w-6 h-6 text-highlight" />,
      title: 'Multi-user Support',
      description: 'Collaborative platform supporting multiple users with role-based access control.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary-dark text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Maximize Your Hospital's 
              <span className="text-highlight"> Financial Health</span> with AI!
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              Effortlessly track profits and losses, optimize revenue, and make data-driven decisions 
              with our revolutionary AI-powered cost accounting platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/login">
                <Button size="lg" className="bg-highlight text-primary hover:bg-highlight/90 shadow-2xl">
                  Get Started Free
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Revolutionary Analytics for Modern Healthcare
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-integrated platform provides new dimensions of cost accounting specifically designed 
              for hospitals, helping you understand what every number truly means.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} hover className="text-center">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Medicost.ai?
            </h2>
            <p className="text-xl text-gray-600">
              Built specifically for healthcare financial management
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-12 h-12 bg-highlight/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-secondary to-secondary-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Ready to Transform Your Hospital's Financial Management?
          </h2>
          <p className="text-xl text-primary/80 mb-8 max-w-2xl mx-auto">
            Join hundreds of hospitals already using Medicost.ai to optimize their financial performance.
          </p>
          <Link to="/login">
            <Button size="lg" className="shadow-2xl">
              Start Your Free Trial
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
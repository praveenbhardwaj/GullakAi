import React, { useState, useEffect, useRef } from 'react';
import { 
  CreditCard, 
  Shield, 
  TrendingUp, 
  BarChart3, 
  Zap, 
  ArrowRight,
  CheckCircle 
} from 'lucide-react';

const capabilities = [
    {
      icon: CreditCard,
      title: 'Smart Budgeting',
      description: 'Our AI learns your spending habits to create a budget that works for you.',
      features: ['Auto-generated budgets', 'Spending alerts', 'Savings goals', 'Subscription finder'],
      color: 'from-orange-500 to-red-500',
      stats: { accuracy: 95.2, speed: 85, transactions: 1.5, uptime: 99.99 }
    },
    {
      icon: Shield,
      title: 'Investment Analysis',
      description: 'Get AI-driven insights on your portfolio to maximize growth and manage risk.',
      features: ['Portfolio analysis', 'Risk assessment', 'Market trends', 'Asset allocation'],
      color: 'from-purple-500 to-indigo-500',
      stats: { accuracy: 92.5, speed: 120, transactions: 2.1, uptime: 99.98 }
    },
    {
      icon: TrendingUp,
      title: 'Debt Management',
      description: 'Create a personalized plan to tackle your loans and credit card debt efficiently.',
      features: ['Debt snowball/avalanche', 'Interest savings calc', 'Payoff timeline', 'Credit score simulation'],
      color: 'from-blue-500 to-cyan-500',
      stats: { accuracy: 96.8, speed: 50, transactions: 0.8, uptime: 99.95 }
    },
    {
      icon: BarChart3,
      title: 'Future Projections',
      description: 'See the long-term impact of your financial habits on your net worth and retirement goals.',
      features: ['Net worth forecast', 'Retirement planning', 'Goal scenario analysis', 'Financial independence'],
      color: 'from-green-500 to-teal-500',
      stats: { accuracy: 98.1, speed: 200, transactions: 5.0, uptime: 99.92 }
    }
  ];
  
const useAnimatedValue = (endValue: number, duration: number = 800) => {
  const [currentValue, setCurrentValue] = useState(0);
  const previousEndValue = useRef(0);

  useEffect(() => {
    let frameId: number;
    let startTime: number | null = null;
    const startValue = previousEndValue.current;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Simple ease-out quadratic easing function
      const easedProgress = progress * (2 - progress);
      const newDisplayValue = startValue + (endValue - startValue) * easedProgress;
      
      setCurrentValue(newDisplayValue);

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      } else {
        setCurrentValue(endValue);
      }
    };

    frameId = requestAnimationFrame(animate);
    previousEndValue.current = endValue;

    return () => cancelAnimationFrame(frameId);
  }, [endValue, duration]);

  return currentValue;
};

export default function AICapabilitiesSection() {
  const [activeTab, setActiveTab] = useState(0);
  const activeCapability = capabilities[activeTab];
  const animatedAccuracy = useAnimatedValue(activeCapability.stats.accuracy);
  const animatedSpeed = useAnimatedValue(activeCapability.stats.speed);
  const animatedTransactions = useAnimatedValue(activeCapability.stats.transactions);
  const animatedUptime = useAnimatedValue(activeCapability.stats.uptime);
  return (
    <section className="py-24 bg-white relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-100 to-purple-100 rounded-full text-orange-600 text-sm font-medium mb-4">
            Intelligent Insights
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Deeper insights for{' '}
            <span className="bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
              your money
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI goes beyond simple tracking to provide actionable advice and forecasts, 
            helping you make smarter financial decisions every day.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Capability Tabs */}
          <div>
            <div className="space-y-4">
              {capabilities.map((capability, index) => {
                const Icon = capability.icon;
                const isActive = index === activeTab;
                
                return (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`w-full text-left p-6 rounded-2xl border-2 transition-all duration-500 group ${
                      isActive 
                        ? 'border-orange-200 bg-gradient-to-r from-orange-50 to-purple-50 shadow-lg' 
                        : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                    }`}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-r ${capability.color} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                        <Icon size={24} className="text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className={`text-xl font-bold mb-2 transition-colors ${
                          isActive ? 'text-orange-600' : 'text-gray-900 group-hover:text-orange-600'
                        }`}>
                          {capability.title}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          {capability.description}
                        </p>
                        
                        {/* Features list */}
                        <div className="grid grid-cols-2 gap-2">
                          {capability.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center text-sm text-gray-500">
                              <CheckCircle size={14} className={`mr-2 ${isActive ? 'text-orange-500' : 'text-gray-400'}`} />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <ArrowRight 
                        size={20} 
                        className={`transition-all duration-300 ${
                          isActive 
                            ? 'text-orange-500 transform translate-x-1' 
                            : 'text-gray-400 group-hover:text-orange-500 group-hover:translate-x-1'
                        }`} 
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Side - Financial Dashboard */}
          <div className="relative">
            {/* Main Dashboard Card */}
            <div className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-3xl p-8 text-white shadow-2xl">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Personal Finance AI</h3>
                  <p className="text-blue-200">Your financial snapshot</p>
                </div>
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                  <div className="text-3xl font-bold text-orange-400 mb-1">
                    {animatedAccuracy.toFixed(0)}%
                  </div>
                  <div className="text-sm text-blue-200">Budget Accuracy</div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                  <div className="text-3xl font-bold text-purple-400 mb-1">
                    ${animatedSpeed.toFixed(0)}
                  </div>
                  <div className="text-sm text-blue-200">Avg. Monthly Savings</div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                  <div className="text-3xl font-bold text-cyan-400 mb-1">
                    +{animatedTransactions.toFixed(1)}%
                  </div>
                  <div className="text-sm text-blue-200">Portfolio Growth</div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                  <div className="text-3xl font-bold text-green-400 mb-1">
                    {animatedUptime.toFixed(0)}
                  </div>
                  <div className="text-sm text-blue-200">Credit Score</div>
                </div>
              </div>

              {/* Progress Bars */}
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Savings Goal</span>
                    <span>{animatedAccuracy.toFixed(1)}%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-orange-400 to-purple-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${animatedAccuracy}%` }}
                    />
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Debt Paydown</span>
                    <span>{Math.min(animatedAccuracy - 20, 75).toFixed(1)}%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-400 to-cyan-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${Math.min(animatedAccuracy - 20, 75)}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Active Capability Highlight */}
              <div className="mt-8 p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${activeCapability.color} flex items-center justify-center`}>
                    {React.createElement(activeCapability.icon, { size: 20, className: 'text-white' })}
                  </div>
                  <div>
                    <div className="font-semibold">{activeCapability.title}</div>
                    <div className="text-sm text-blue-200">Analyzing your data...</div>
                  </div>
                  <div className="ml-auto">
                    <Zap size={16} className="text-yellow-400 animate-pulse" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-orange-400 to-purple-500 rounded-full animate-bounce opacity-80" />
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full animate-pulse opacity-60" />
          </div>
        </div>
      </div>
    </section>
  );
}

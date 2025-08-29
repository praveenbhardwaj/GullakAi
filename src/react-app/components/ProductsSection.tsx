import { useState } from 'react';
import { CreditCard, Shield, TrendingUp, Users, ArrowRight, Check } from 'lucide-react';

export default function ProductsSection() {
  const [activeProduct, setActiveProduct] = useState(0);

  const products = [
    {
      icon: TrendingUp,
      title: 'Expense Tracking',
      description: 'Connect all your accounts in one place and let our AI automatically categorize your spending.',
      features: ['Automatic categorization', 'Spending insights', 'Bill reminders', 'Custom budgets'],
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50',
    },
    {
      icon: Shield,
      title: 'Investment Hub',
      description: 'Track your portfolio, discover new opportunities, and get AI-powered analysis on your assets.',
      features: ['Portfolio tracking', 'AI market analysis', 'Goal-based investing', 'Performance alerts'],
      color: 'from-purple-500 to-indigo-500',
      bgColor: 'bg-purple-50',
    },
    {
      icon: CreditCard,
      title: 'Loan Management',
      description: 'Manage all your loans, from mortgages to credit cards, and find strategies to pay them off faster.',
      features: ['Debt overview', 'Payoff strategies', 'Interest rate alerts', 'Credit score impact'],
      color: 'from-green-500 to-teal-500',
      bgColor: 'bg-green-50',
    },
    {
      icon: Users,
      title: 'Net Worth Projection',
      description: 'Get a clear picture of your financial health and see how your decisions impact your future wealth.',
      features: ['Real-time net worth', 'Future projections', 'Goal setting & tracking', 'Scenario analysis'],
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
    }
  ];

  return (
    <section id="products" className="py-24 bg-white relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-100 to-purple-100 rounded-full text-orange-600 text-sm font-medium mb-4">
            All-in-One Dashboard
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            All your finances, one{' '}
            <span className="bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
              smart dashboard
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From daily spending to long-term investments, Gulllak AI brings everything together to give you a clear view of your financial life.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {products.map((product, index) => {
            const Icon = product.icon;
            const isActive = index === activeProduct;
            
            return (
              <div
                key={index}
                className={`group relative p-8 rounded-2xl border-2 transition-all duration-500 cursor-pointer ${
                  isActive 
                    ? `${product.bgColor} border-transparent shadow-2xl scale-105` 
                    : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-lg'
                }`}
                onMouseEnter={() => setActiveProduct(index)}
              >
                {/* Gradient background for active card */}
                {isActive && (
                  <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-5 rounded-2xl`} />
                )}
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${product.color} mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={32} className="text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <Check size={16} className={`text-orange-500 mr-3 ${isActive ? 'animate-pulse' : ''}`} />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <button className={`group/btn flex items-center text-sm font-semibold transition-colors ${
                    isActive ? 'text-orange-600' : 'text-gray-500 hover:text-orange-600'
                  }`}>
                    Learn more
                    <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <button className="bg-gradient-to-r from-orange-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center mx-auto">
            Create your free account
            <ArrowRight size={20} className="ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
}

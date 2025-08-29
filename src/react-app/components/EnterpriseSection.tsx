import { useState, useEffect, useRef } from 'react';
import { ArrowRight, TrendingUp, Shield, DollarSign, Users } from 'lucide-react';

const useInView = (options?: IntersectionObserverInit) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, ...options }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [options]);

  return [ref, isInView] as const;
};

export default function EnterpriseSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [benefitsRef, benefitsInView] = useInView({ threshold: 0.2 });
  const [testimonialsRef, testimonialsInView] = useInView({ threshold: 0.1 });

  const benefits = [
    {
      percentage: '+25%',
      title: 'Increase in monthly savings',
      description: 'Users who set a budget save more on average.',
      color: 'from-orange-500 to-red-500',
      icon: Shield,
    },
    {
      percentage: '+15%',
      title: 'Smarter investment returns',
      description: 'AI-powered insights help optimize your portfolio.',
      color: 'from-purple-500 to-indigo-500',
      icon: TrendingUp,
    },
    {
      percentage: '1M+',
      title: 'Users achieving their goals',
      description: 'From saving for a down payment to retiring early.',
      color: 'from-blue-500 to-cyan-500',
      icon: Users,
    },
  ];

  const testimonials = [
    {
      company: 'Priya S.',
      logo: 'PS',
      quote: 'For the first time, I feel in control of my money. I was able to identify wasteful subscriptions and save for my first home!',
      author: 'Priya S.',
      role: 'Software Engineer',
      color: 'from-orange-500 to-red-500',
    },
    {
      company: 'Rohan M.',
      logo: 'RM',
      quote: 'The investment insights are a game-changer. My portfolio is up 18% this year thanks to the AI analysis.',
      author: 'Rohan M.',
      role: 'Marketing Manager',
      color: 'from-purple-500 to-indigo-500',
    },
    {
      company: 'Anjali K.',
      logo: 'AK',
      quote: 'Managing my student loans felt overwhelming. Gulllak AI created a clear payoff plan, and I\'m on track to be debt-free years early.',
      author: 'Anjali K.',
      role: 'Graphic Designer',
      color: 'from-blue-500 to-cyan-500',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-orange-50/30 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-purple-600 text-sm font-medium mb-4">
            Achieve Your Financial Goals
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Your personal guide to{' '}
            <span className="bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
              financial wellness
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Whether you're saving for a big purchase, paying off debt, or building wealth for the future, 
            Gulllak AI provides the tools and insights you need to succeed.
          </p>
          
          <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center mx-auto">
            Start your journey
            <ArrowRight size={20} className="ml-2" />
          </button>
        </div>

        {/* Benefits Grid */}
        <div ref={benefitsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
            <div
              key={index}
              className={`group relative p-8 bg-white rounded-2xl border border-gray-200 hover:border-transparent hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-700 ${
                benefitsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Gradient overlay on hover */}
              {hoveredCard === index && (
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-5 rounded-2xl`} />
              )}
              
              <div className="relative z-10">
                <div className={`text-5xl font-bold bg-gradient-to-r ${benefit.color} bg-clip-text text-transparent mb-4`}>
                  {benefit.percentage}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
                
                {/* Animated icon */}
                <div className={`mt-6 w-12 h-12 bg-gradient-to-r ${benefit.color} rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={24} className="text-white" />
                </div>
              </div>
            </div>
          );
        })}
        </div>

        {/* Testimonials */}
        <div ref={testimonialsRef} className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Loved by users like you
            </h3>
            <p className="text-gray-600 text-lg">
              People from all walks of life use Gulllak AI to take control of their finances 
              and build a better future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`group p-6 border border-gray-200 rounded-2xl hover:border-gray-300 hover:shadow-lg transition-all duration-700 ${
                  testimonialsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Company Logo */}
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${testimonial.color} rounded-xl flex items-center justify-center text-white font-bold text-lg mr-4`}>
                    {testimonial.logo}
                  </div>
                  <div className="text-lg font-semibold text-gray-900">
                    {testimonial.company}
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-gray-600 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { useEffect, useMemo, useRef, useState } from 'react';
import {  Zap, Shield, TrendingUp } from 'lucide-react';
import { FaRupeeSign } from 'react-icons/fa';

export default function GlobalScaleSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      number: 'Bank-Level Security',
      label: 'Your data is protected with',
      detail: 'AES-256 encryption',
      icon: FaRupeeSign,
    },
    {
      number: 'End-to-End Encryption',
      label: 'All communication between your',
      detail: 'device and our servers is secure',
      icon: Shield,
    },
    {
      number: 'You Control Your Data',
      label: 'We never sell your data to third',
      detail: 'parties. Ever.',
      icon: TrendingUp,
    },
    {
      number: 'Privacy First',
      label: 'Connect your accounts securely',
      detail: 'using read-only access',
      icon: Zap,
    },
  ];

  const backgroundElements = useMemo(() => {
    const lines = Array.from({ length: 25 }).map((_, i) => ({
      x1: Math.random() * 1000,
      y1: Math.random() * 1000,
      x2: Math.random() * 1000,
      y2: Math.random() * 1000,
      animationDelay: `${i * 0.3}s`,
    }));
    const dots = Array.from({ length: 40 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 3}s`,
      animationDuration: `${1.5 + Math.random() * 2}s`,
    }));
    return { lines, dots };
  }, []);

  return (
    <section id='compliance' ref={sectionRef} className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden relative z-20">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Financial Network Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1000 1000">
          <defs>
            <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF6A00" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
          </defs>
          {/* Animated transaction flow lines */}
          {backgroundElements.lines.map((line, i) => (
            <line
              key={i}
              x1={line.x1}
              y1={line.y1}
              x2={line.x2}
              y2={line.y2}
              stroke="url(#line-gradient)"
              strokeWidth="1"
              className="animate-pulse"
              style={{ animationDelay: line.animationDelay }}
            />
          ))}
        </svg>

        {/* Floating Transaction Dots */}
        {backgroundElements.dots.map((dotStyle, i) => (
          <div key={i} className="absolute w-2 h-2 bg-gradient-to-r from-orange-400 to-purple-500 rounded-full animate-pulse" style={dotStyle} />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-orange-500/20 rounded-full text-orange-400 text-sm font-medium mb-6">
              Security and Privacy
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Your data, protected{' '}
              <span className="bg-gradient-to-r from-orange-400 to-purple-400 bg-clip-text text-transparent">
                and private
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We take the security of your financial data seriously. Using the latest encryption and security 
              standards, we ensure your information is always safe, secure, and under your control.
            </p>

            {/* Interactive Financial Network Animation */}
            <div className="relative w-64 h-64 mx-auto lg:mx-0 mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-purple-500/20 rounded-full animate-spin-slow" />
              <div className="absolute inset-4 bg-gradient-to-r from-blue-500/30 to-indigo-500/30 rounded-full animate-pulse" />
              <div className="absolute inset-8 bg-gradient-to-r from-orange-400/40 to-purple-400/40 rounded-full animate-bounce-slow" />
              <div className="absolute inset-0 m-auto text-white/80 text-[120px] font-bold flex items-center justify-center">
  ₹
</div>
              
              {/* Orbiting transaction indicators */}
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-4 h-4 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center text-xs font-bold text-white animate-orbit"
                  style={{
                    animationDelay: `${i * 1.33}s`,
                    transformOrigin: '128px 128px',
                  }}
                >
                  ₹
                </div>
              ))}
            </div>
          </div>

          {/* Right Stats */}
          <div className="space-y-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className={`flex items-start space-x-6 transform transition-all duration-1000 ${
                    isVisible 
                      ? 'translate-x-0 opacity-100' 
                      : 'translate-x-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-purple-600 rounded-2xl flex items-center justify-center">
                      <Icon size={28} className="text-white" />
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-4xl font-bold text-white mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-300 text-lg leading-relaxed">
                      {stat.label}{' '}
                      <span className="text-orange-400 font-semibold">
                        {stat.detail}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

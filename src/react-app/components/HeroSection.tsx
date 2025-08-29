import React, { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowRight, Sparkles, CreditCard, TrendingUp, Shield } from 'lucide-react';
import { motion, useSpring, useTransform, useMotionValue, MotionValue } from 'framer-motion';
import { IoLogoApple, IoLogoGooglePlaystore } from 'react-icons/io5';

interface PhoneScreen {
  Icon: React.ElementType;
  title: string;
  description: string;
  bgColor: string;
}

interface PhoneAnimationProps {
  phoneScreens: PhoneScreen[];
  mousePosition: { x: MotionValue<number>; y: MotionValue<number> };
}

export default function HeroSection() {
  // Replace state with motion values for smoother animations
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Create transformed motion values for the parallax effect on the background orbs
  const orb1X = useTransform(mouseX, (val) => val * 0.02);
  const orb1Y = useTransform(mouseY, (val) => val * 0.02);
  const orb2X = useTransform(mouseX, (val) => val * -0.01);
  const orb2Y = useTransform(mouseY, (val) => val * -0.01);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  const phoneScreens = [
    {
      Icon: CreditCard,
      title: 'Expense Tracking',
      description: 'Automatically categorize your spending to see where your money goes.',
      bgColor: 'from-blue-500 to-blue-600',
    },
    {
      Icon: Shield,
      title: 'Investment Growth',
      description: 'Monitor your portfolio and discover new investment opportunities with AI.',
      bgColor: 'from-purple-500 to-purple-600',
    },
    {
      Icon: TrendingUp,
      title: 'Net Worth Projection',
      description: 'See how your financial decisions today impact your future wealth.',
      bgColor: 'from-green-500 to-green-600',
    },
  ];

  const mousePosition = useMemo(() => ({ x: mouseX, y: mouseY }), [mouseX, mouseY]);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 via-orange-50/30 to-purple-50/30 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-r from-orange-400/20 to-purple-500/20 rounded-full filter blur-3xl animate-pulse"
          style={{
            left: '20%',
            top: '10%',
            x: orb1X,
            y: orb1Y,
          }}
        />
        <motion.div
          className="absolute w-80 h-80 bg-gradient-to-r from-purple-400/20 to-orange-500/20 rounded-full filter blur-3xl animate-pulse"
          style={{
            right: '20%',
            bottom: '10%',
            animationDelay: '1s',
            x: orb2X,
            y: orb2Y,
          }}
        />
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,106,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,106,0,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start pt-32 lg:pt-48">
          {/* Left side: Text content */}
          <div className="text-center lg:text-left lg:pb-[50vh]">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm border border-orange-200 rounded-full text-orange-600 text-sm font-medium mb-8 animate-fade-in-up">
              <Sparkles size={16} className="mr-2" />
              The future of financial AI
              <ArrowRight size={14} className="ml-2" />
            </div>
            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 opacity-0 animate-fade-in-up animation-delay-200">
              Take control of your{' '}
              <span className="bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
                financial future
              </span>
            </h1>
            {/* Subheading */}
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto lg:mx-0 leading-relaxed opacity-0 animate-fade-in-up animation-delay-400">
              Track every rupee, monitor expenses, manage loans, and grow your investments with AI-driven insights.
              All in one smart financial dashboard.
            </p>
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12 opacity-0 animate-fade-in-up animation-delay-600">
              <a
                href="#"
                className="group flex items-center justify-center gap-3 px-6 py-3 bg-black text-white rounded-lg font-semibold text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
                aria-label="Download on the App Store"
              >
                <IoLogoApple className="w-8 h-8" />
                <div>
                  <p className="text-xs -mb-1">Download on the</p>
                  <p className="text-xl font-semibold">App Store</p>
                </div>
              </a>
              <a
                href="#"
                className="group flex items-center justify-center gap-3 px-6 py-3 bg-black text-white rounded-lg font-semibold text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
                aria-label="Get it on Google Play"
              >
                <IoLogoGooglePlaystore className="w-8 h-8" />
                <div>
                  <p className="text-xs -mb-1">GET IT ON</p>
                  <p className="text-xl font-semibold">Google Play</p>
                </div>
              </a>
            </div>
          </div>
          {/* Right side: Phone animation */}
          <div className="lg:sticky lg:top-24 h-auto lg:h-[calc(100vh-6rem)] flex items-center justify-center lg:justify-end">
            <div className="w-full max-w-[300px] lg:max-w-none lg:translate-x-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
              >
                <PhoneAnimation phoneScreens={phoneScreens} mousePosition={mousePosition} />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PhoneAnimation({ phoneScreens, mousePosition }: PhoneAnimationProps) {
  const [activeScreen, setActiveScreen] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleScreenChange = (screenIndex: number) => {
    setActiveScreen(screenIndex);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsInteracting(true);
    timeoutRef.current = setTimeout(() => setIsInteracting(false), 5000);
  };

  useEffect(() => {
    if (isInteracting) return;
    const interval = setInterval(() => {
      setActiveScreen((prev) => (prev + 1) % phoneScreens.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [phoneScreens.length, isInteracting]);

  const { x, y } = mousePosition;
  const rotateX = useSpring(useTransform(y, [0, typeof window !== 'undefined' ? window.innerHeight : 1080], [15, -15]), {
    stiffness: 300,
    damping: 35,
    restDelta: 0.001,
  });
  const rotateY = useSpring(useTransform(x, [0, typeof window !== 'undefined' ? window.innerWidth : 1920], [-15, 15]), {
    stiffness: 300,
    damping: 35,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="relative w-[300px] h-[600px] animate-float"
      style={{
        transformStyle: 'preserve-3d',
        perspective: '2000px',
        rotateX,
        rotateY,
      }}
    >
      {/* Phone chassis */}
      <motion.div
        className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm rounded-[40px] shadow-2xl border-4 border-gray-800/80"
        style={{ transform: 'translateZ(-20px)' }}
      />
      {/* Glare effect */}
      <motion.div
        className="absolute inset-0 rounded-[40px] overflow-hidden"
        style={{ transform: 'translateZ(30px)' }}
      >
        <motion.div
          className="absolute w-96 h-96 bg-white/5"
          style={{
            x: useTransform(rotateY, [-15, 15], [-100, 100]),
            y: useTransform(rotateX, [-15, 15], [100, -100]),
            filter: 'blur(60px)',
            opacity: 0.8,
          }}
        />
      </motion.div>
      {/* Notch */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-xl z-20"
        style={{
          transform: 'translateZ(5px) translateX(-50%)',
        }}
      />
      {/* Screen */}
      <div className="absolute inset-[16px] bg-gray-800 rounded-[24px] overflow-hidden">
        <div className="h-full transition-transform duration-700 ease-in-out" style={{ transform: `translateY(-${activeScreen * 100}%)` }}>
          {phoneScreens.map((screen, index) => {
            const Icon = screen.Icon;
            return (
              <div
                key={index}
                className={`h-full w-full flex flex-col items-center justify-center p-8 text-white text-center bg-gradient-to-br ${screen.bgColor}`}
              >
                <div className="mb-6 p-4 bg-white/20 rounded-full">
                  <Icon size={48} />
                </div>
                <h3 className="text-2xl font-bold mb-2">{screen.title}</h3>
                <p className="text-sm text-white/80">{screen.description}</p>
              </div>
            );
          })}
        </div>
        {/* Progress bars */}
        <div className="absolute top-4 left-4 right-4 flex gap-2">
          {phoneScreens.map((_, index) => {
            const isActive = index === activeScreen;
            return (
              <button
                key={index}
                onClick={() => handleScreenChange(index)}
                className="flex-1 h-1 bg-white/20 rounded-full overflow-hidden cursor-pointer"
                aria-label={`Go to screen ${index + 1}`}
              >
                <motion.div
                  className="h-full bg-white"
                  initial={{ width: '0%' }}
                  animate={{ width: isActive ? '100%' : '0%' }}
                  transition={{
                    duration: isActive && !isInteracting ? 5 : 0.3,
                    ease: isActive && !isInteracting ? 'linear' : 'easeOut',
                  }}
                />
              </button>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
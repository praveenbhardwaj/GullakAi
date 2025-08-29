import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CreditCard, Shield, Zap } from 'lucide-react';
import { FaCreditCard } from 'react-icons/fa';
import { IoLogoApple } from 'react-icons/io5';

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.98 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: 'easeOut',
        },
    },
};

const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
        pathLength: 1,
        opacity: 1,
        transition: {
            duration: 2,
            ease: 'easeInOut',
            delay: 0.5,
        },
    },
};

export default function StripeInspiredSection() {
    // Explicitly typed ref to avoid potential TS errors
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    return (
        <section className="relative py-24 bg-gray-50 overflow-hidden z-20">
            {/* Background Gradient */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-50 via-orange-50 to-transparent" />
                <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-blue-100/50 to-transparent rounded-full filter blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        An intelligent, end-to-end{' '}
                        <span className="bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
                            financial flow
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        From checkout to your dashboard, Gullak AI connects every part of your financial life with powerful, automated insights.
                    </p>
                </div>

                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    className="relative"
                >
                    {/* Animated SVG Lines (Desktop only) */}
                    <div className="hidden lg:block absolute inset-0">
                        <svg width="100%" height="100%" viewBox="0 0 1200 550" preserveAspectRatio="none" className="overflow-visible">
                            <defs>
                                <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#f97316" />
                                    <stop offset="50%" stopColor="#ec4899" />
                                    <stop offset="100%" stopColor="#a855f7" />
                                </linearGradient>
                            </defs>
                            {/* Line from Checkout to Payments. Connects right-center of col 1 to left-center of col 2. */}
                            <motion.path
                                d="M 280 320 C 380 320, 420 100, 520 100"
                                fill="none"
                                stroke="url(#line-gradient)"
                                strokeWidth="2"
                                strokeLinecap="round"
                                variants={pathVariants}
                                style={{ filter: 'drop-shadow(0 0 10px rgba(236, 72, 153, 0.7))' }}
                            />
                            {/* Line from Checkout to Tax. Connects right-center of col 1 to left-center of col 4. */}
                            <motion.path
                                d="M 280 320 C 500 320, 700 50, 1000 100"
                                fill="none"
                                stroke="url(#line-gradient)"
                                strokeWidth="2"
                                strokeLinecap="round"
                                variants={pathVariants}
                                style={{ filter: 'drop-shadow(0 0 10px rgba(236, 72, 153, 0.7))' }}
                            />
                            {/* Line from Checkout to Radar. Connects right-center of col 1 to left-center of col 4. */}
                            <motion.path
                                d="M 280 320 C 500 320, 700 400, 1000 300"
                                fill="none"
                                stroke="url(#line-gradient)"
                                strokeWidth="2"
                                strokeLinecap="round"
                                variants={pathVariants}
                                style={{ filter: 'drop-shadow(0 0 10px rgba(236, 72, 153, 0.7))' }}
                            />
                        </svg>
                    </div>

                    {/* Cards Layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
                        <motion.div variants={cardVariants} className="lg:col-span-1 lg:mt-24">
                            <CheckoutCard />
                        </motion.div>

                        <motion.div variants={cardVariants} className="lg:col-span-2">
                            <FeatureCard
                                icon={CreditCard}
                                title="Smart Payments"
                                description="Your transactions are automatically categorized and analyzed."
                            />
                        </motion.div>

                        <motion.div variants={cardVariants} className="lg:col-span-1 space-y-8">
                            <FeatureCard
                                icon={Zap}
                                title="Automated Tax"
                                description="Insights for tax-loss harvesting and optimization."
                            />
                            <FeatureCard
                                icon={Shield}
                                title="AI Radar"
                                description="Proactive alerts for unusual spending and opportunities."
                            />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

const Card = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
    <motion.div
        whileHover={{ scale: 1.03, y: -5 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className={`bg-white/60 backdrop-blur-xl p-6 rounded-2xl shadow-lg border border-gray-200/80 ${className}`}
    >
        {children}
    </motion.div>
);

const CheckoutCard = () => {
    return (
        <Card>
            <div className="text-center">
                <img
                    src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=400&h=400&fit=crop"
                    alt="A piggy bank representing financial wellness"
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover shadow-md"
                />
                <h3 className="font-semibold text-gray-800">Financial Wellness Plan</h3>
                <p className="text-2xl font-bold text-gray-900 mt-1 mb-4">FREE</p>

                {/* Button container with overlay */}
                <div className="relative">
                    <div className="space-y-3 opacity-50 pointer-events-none">
                        <a
                            href="#"
                            className="w-full bg-black text-white font-semibold py-3 rounded-lg flex items-center justify-center transition-colors"
                        >
                            <IoLogoApple className="w-6 h-6 mr-2" /> Pay
                        </a>
                        <a
                            href="#"
                            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg flex items-center justify-center transition-colors"
                        >
                            <FaCreditCard className="w-5 h-5 mr-2" /> Pay with Card
                        </a>
                    </div>

                    {/* Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 rounded-lg">
                        <span className="text-white font-bold text-lg">Coming Soon</span>
                    </div>
                </div>

                <div className="text-xs text-gray-400 mt-4">
                    Secure payments powered by AI
                </div>
            </div>
        </Card>

    );
};

const FeatureCard = ({
    icon: Icon,
    title,
    description,
}: {
    icon: React.ElementType;
    title: string;
    description: string;
}) => {
    return (
        <Card>
            <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                </div>
                <div>
                    <h3 className="text-lg font-bold text-gray-900">{title}</h3>
                    <p className="text-gray-600 mt-1">{description}</p>
                </div>
            </div>
        </Card>
    );
};
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/80 backdrop-blur-lg border-b border-gray-200' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">G</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
                Gulllak AI
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#products" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
              Products
            </a>
            <a href="#solutions" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
              Solutions
            </a>
            <a href="#developers" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
              Developers
            </a>
            <a href="#compliance" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
              Compliance
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
              Pricing
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
              Sign in
            </button>
            <button className="bg-gradient-to-r from-orange-500 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
              Get started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-orange-500 transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              <a href="#products" className="text-gray-700 hover:text-orange-500 font-medium">
                Products
              </a>
              <a href="#solutions" className="text-gray-700 hover:text-orange-500 font-medium">
                Solutions
              </a>
              <a href="#developers" className="text-gray-700 hover:text-orange-500 font-medium">
                Developers
              </a>
              <a href="#compliance" className="text-gray-700 hover:text-orange-500 font-medium">
                Compliance
              </a>
              <a href="#pricing" className="text-gray-700 hover:text-orange-500 font-medium">
                Pricing
              </a>
              <div className="pt-4 border-t border-gray-200">
                <button className="w-full text-left text-gray-700 hover:text-orange-500 font-medium mb-2">
                  Sign in
                </button>
                <button className="w-full bg-gradient-to-r from-orange-500 to-purple-600 text-white px-6 py-2 rounded-lg font-medium">
                  Get started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

import Navigation from '@/react-app/components/Navigation';
import HeroSection from '@/react-app/components/HeroSection';
import ProductsSection from '@/react-app/components/ProductsSection';
import AICapabilitiesSection from '@/react-app/components/AICapabilitiesSection';
import StripeInspiredSection from '@/react-app/components/StripeInspiredSection';
import EnterpriseSection from '@/react-app/components/EnterpriseSection';
import GlobalScaleSection from '@/react-app/components/GlobalScaleSection';
import Footer from '@/react-app/components/Footer';

export default function HomePage() {
  return (
    <div className="font-inter bg-white">
      <Navigation />
      <main>
        <HeroSection />
        <ProductsSection />
        <AICapabilitiesSection />
        <StripeInspiredSection />
        <EnterpriseSection />
        <GlobalScaleSection />
      </main>
      <Footer />
    </div>
  );
}
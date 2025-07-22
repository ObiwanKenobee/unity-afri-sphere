import { Navigation } from '@/components/ui/navigation';
import { Hero } from '@/components/sections/Hero';
import { Vision } from '@/components/sections/Vision';
import { ModulesPreview } from '@/components/sections/ModulesPreview';
import { CallToAction } from '@/components/sections/CallToAction';
import { Footer } from '@/components/ui/footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Vision />
      <ModulesPreview />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;

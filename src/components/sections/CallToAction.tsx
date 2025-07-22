import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Globe, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-hero text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border border-white/20 rounded-full"></div>
        <div className="absolute top-32 right-20 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-32 right-1/3 w-24 h-24 border border-white/20 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Join the African
            <span className="block text-yellow-300">Digital Revolution</span>
          </h2>
          
          <p className="text-lg md:text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Be part of history in the making. Connect with millions of Africans building 
            a unified, prosperous future through technology, innovation, and shared values.
          </p>

          {/* Action Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Users,
                title: 'Citizens',
                description: 'Join the community and access all platform benefits',
                action: 'Create Account',
                href: '/signup',
              },
              {
                icon: Globe,
                title: 'Investors',
                description: 'Fund infrastructure projects and earn sustainable returns',
                action: 'Invest Now',
                href: '/modules/crowdfunding',
              },
              {
                icon: Zap,
                title: 'Partners',
                description: 'Collaborate with us to build Africa\'s digital future',
                action: 'Partner With Us',
                href: '/contact',
              },
            ].map((card, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <card.icon className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
                <p className="text-white/80 mb-6 text-sm leading-relaxed">
                  {card.description}
                </p>
                <Link to={card.href}>
                  <Button 
                    variant="outline" 
                    className="border-white/50 text-white hover:bg-white hover:text-primary transition-all"
                  >
                    {card.action}
                  </Button>
                </Link>
              </div>
            ))}
          </div>

          {/* Main CTA */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/dashboard">
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 shadow-glow group transition-all duration-300 transform hover:scale-105"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/explore">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white/50 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
                >
                  Explore Platform
                </Button>
              </Link>
            </div>
            
            <p className="text-white/70 text-sm">
              Free to join • No hidden fees • Secure & transparent
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
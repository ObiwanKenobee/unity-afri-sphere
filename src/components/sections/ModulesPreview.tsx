import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Wallet, TrendingUp, Users, Globe, BookOpen, ShoppingCart, Vote, MapPin, Repeat } from 'lucide-react';
import { Link } from 'react-router-dom';

const modules = [
  {
    icon: Wallet,
    title: 'AfriCoin Wallet',
    description: 'Unified digital currency for seamless transactions across Africa',
    href: '/modules/wallet',
    color: 'bg-gradient-to-br from-amber-500 to-orange-600',
    status: 'Live',
  },
  {
    icon: TrendingUp,
    title: 'Trade Network',
    description: 'Blockchain-powered logistics and smart contract management',
    href: '/modules/trade',
    color: 'bg-gradient-to-br from-blue-500 to-cyan-600',
    status: 'Live',
  },
  {
    icon: Users,
    title: 'Infrastructure Fund',
    description: 'Crowdfunding platform for continental development projects',
    href: '/modules/crowdfunding',
    color: 'bg-gradient-to-br from-green-500 to-emerald-600',
    status: 'Live',
  },
  {
    icon: Globe,
    title: 'Agriculture AI',
    description: 'AI-driven insights for sustainable farming and food security',
    href: '/modules/agriculture',
    color: 'bg-gradient-to-br from-lime-500 to-green-600',
    status: 'Live',
  },
  {
    icon: BookOpen,
    title: 'Digital University',
    description: 'Continental education platform with AI-powered learning',
    href: '/modules/learning',
    color: 'bg-gradient-to-br from-purple-500 to-indigo-600',
    status: 'Live',
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce',
    description: 'Pan-African marketplace with AfriCoin integration',
    href: '/modules/e-commerce',
    color: 'bg-gradient-to-br from-pink-500 to-rose-600',
    status: 'Live',
  },
  {
    icon: Vote,
    title: 'Voting Governance',
    description: 'Blockchain-based democratic decision making platform',
    href: '/modules/voting',
    color: 'bg-gradient-to-br from-red-500 to-pink-600',
    status: 'Beta',
  },
  {
    icon: MapPin,
    title: 'Free Movement',
    description: 'Visa-free travel coordination and border management',
    href: '/modules/travel',
    color: 'bg-gradient-to-br from-teal-500 to-cyan-600',
    status: 'Beta',
  },
  {
    icon: Repeat,
    title: 'Resource Exchange',
    description: 'Circular economy hub for sustainable resource sharing',
    href: '/modules/marketplace',
    color: 'bg-gradient-to-br from-orange-500 to-red-600',
    status: 'Coming Soon',
  },
];

export const ModulesPreview = () => {
  return (
    <section className="py-20 bg-gradient-earth">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4">Platform Modules</Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Nine Pillars of
            <span className="block text-primary">African Unity</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Each module represents a critical component of continental integration, 
            designed to foster economic growth, cultural exchange, and technological advancement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-warm transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-card"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl ${module.color} flex items-center justify-center shadow-lg`}>
                    <module.icon className="w-6 h-6 text-white" />
                  </div>
                  <Badge 
                    variant={module.status === 'Live' ? 'default' : module.status === 'Beta' ? 'secondary' : 'outline'}
                    className={module.status === 'Live' ? 'bg-accent text-accent-foreground' : ''}
                  >
                    {module.status}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {module.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {module.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <Link to={module.href}>
                  <Button 
                    variant="ghost" 
                    className="w-full justify-between group-hover:text-primary group-hover:bg-primary/5 transition-all"
                  >
                    Explore Module
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/modules">
            <Button size="lg" className="bg-gradient-hero shadow-warm">
              View All Modules
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
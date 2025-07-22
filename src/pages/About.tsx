import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Target, Users, Globe, Zap, Shield } from 'lucide-react';

const principles = [
  {
    icon: Heart,
    title: 'Pan-Africanism',
    description: 'Rooted in the vision of African unity and continental solidarity.',
  },
  {
    icon: Target,
    title: 'Innovation',
    description: 'Leveraging cutting-edge technology to solve African challenges.',
  },
  {
    icon: Users,
    title: 'Inclusivity',
    description: 'Ensuring every African benefits from our digital transformation.',
  },
  {
    icon: Globe,
    title: 'Sustainability',
    description: 'Building systems that protect our environment and future generations.',
  },
  {
    icon: Zap,
    title: 'Transparency',
    description: 'Open, accountable governance through blockchain technology.',
  },
  {
    icon: Shield,
    title: 'Security',
    description: 'Protecting user data and ensuring platform integrity.',
  },
];

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-white/20 text-white border-white/30">
            About AUEP
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Building Africa's
            <span className="block text-yellow-300">Digital Future</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            The African Unity Economic Platform represents the largest technological 
            initiative for continental integration, connecting 54 nations through 
            innovation, collaboration, and shared prosperity.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                To create a unified digital ecosystem that empowers every African 
                citizen, business, and nation to participate in the global economy 
                while preserving our rich cultural heritage and promoting sustainable 
                development across the continent.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: 'Nations', value: '54' },
                  { label: 'Languages', value: '2000+' },
                  { label: 'Population', value: '1.4B' },
                  { label: 'Land Area', value: '30M km²' },
                ].map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-muted rounded-lg">
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                Our Vision
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                A unified Africa where technology bridges divides, creates opportunities, 
                and ensures no citizen is left behind in our journey toward prosperity. 
                We envision a continent where borders facilitate cooperation rather than 
                separation, and where African solutions address global challenges.
              </p>
              <div className="bg-gradient-hero rounded-xl p-6 text-white">
                <h3 className="text-xl font-semibold mb-4">2030 Goals</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-yellow-300 rounded-full mr-3"></div>
                    Complete digital integration across all 54 nations
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-yellow-300 rounded-full mr-3"></div>
                    500 million active platform users
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-yellow-300 rounded-full mr-3"></div>
                    $100 billion in facilitated trade
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-yellow-300 rounded-full mr-3"></div>
                    Carbon-neutral platform operations
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founding Principles */}
      <section className="py-20 bg-gradient-earth">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Our Foundation</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Founding Principles
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Built on the bedrock of Pan-African values and modern technological innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
              <Card key={index} className="border-0 shadow-card hover:shadow-warm transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-hero rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <principle.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                    {principle.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {principle.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership & Partners */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Our Team</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Leadership & Partners
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Guided by visionary leaders and supported by strategic partners across Africa and beyond
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-8 text-primary">Strategic Partners</h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  'African Union',
                  'African Development Bank',
                  'UNECA',
                  'AfCFTA Secretariat',
                  'Smart Africa Alliance',
                  'AUDA-NEPAD',
                ].map((partner, index) => (
                  <div key={index} className="bg-muted rounded-lg p-4 text-center">
                    <div className="text-sm font-medium">{partner}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-8 text-primary">Technology Partners</h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  'Microsoft Africa',
                  'Google Africa',
                  'IBM Research Africa',
                  'Huawei Africa',
                  'SAP Africa',
                  'Oracle Africa',
                ].map((partner, index) => (
                  <div key={index} className="bg-muted rounded-lg p-4 text-center">
                    <div className="text-sm font-medium">{partner}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
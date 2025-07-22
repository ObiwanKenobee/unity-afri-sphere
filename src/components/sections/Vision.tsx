import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Zap, Heart, Shield, Globe, Target, Users } from 'lucide-react';

const visionPoints = [
  {
    icon: Globe,
    title: 'Continental Integration',
    description: 'Breaking down barriers between African nations through technology',
  },
  {
    icon: Zap,
    title: 'Economic Empowerment',
    description: 'Creating sustainable wealth and opportunities for all Africans',
  },
  {
    icon: Heart,
    title: 'Cultural Preservation',
    description: 'Celebrating and preserving the rich diversity of African heritage',
  },
  {
    icon: Shield,
    title: 'Security & Trust',
    description: 'Building transparent, secure systems for continental cooperation',
  },
  {
    icon: Target,
    title: 'Sustainable Development',
    description: 'Achieving UN SDGs through innovative African solutions',
  },
  {
    icon: Users,
    title: 'Inclusive Growth',
    description: 'Ensuring no African is left behind in our digital transformation',
  },
];

export const Vision = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4">Our Vision</Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Unifying Africa Through
            <span className="block text-primary">Shared Prosperity</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            The African Unity Economic Platform represents more than technology—it's a movement 
            toward a unified, prosperous continent where every African can thrive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {visionPoints.map((point, index) => (
            <Card key={index} className="border-0 shadow-card hover:shadow-warm transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-hero rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <point.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                  {point.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {point.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-hero rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Impact Across the Continent
            </h3>
            <p className="text-white/90 max-w-2xl mx-auto">
              Real numbers showcasing the transformative power of unified African cooperation
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '54', label: 'Nations United', suffix: '' },
              { value: '1.4', label: 'Billion People', suffix: 'B' },
              { value: '30', label: 'Million km²', suffix: 'M' },
              { value: '3.4', label: 'Trillion GDP', suffix: 'T' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-white/80 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
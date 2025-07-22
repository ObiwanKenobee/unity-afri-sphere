import { Link } from 'react-router-dom';
import { Globe, Mail, MapPin, Phone } from 'lucide-react';

const footerSections = [
  {
    title: 'Platform',
    links: [
      { label: 'About AUEP', href: '/about' },
      { label: 'Modules', href: '/modules' },
      { label: 'Explore', href: '/explore' },
      { label: 'Dashboard', href: '/dashboard' },
    ],
  },
  {
    title: 'Modules',
    links: [
      { label: 'AfriCoin Wallet', href: '/modules/wallet' },
      { label: 'Trade Network', href: '/modules/trade' },
      { label: 'Agriculture AI', href: '/modules/agriculture' },
      { label: 'Digital University', href: '/modules/learning' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Contact Us', href: '/contact' },
      { label: 'Help Center', href: '/help' },
      { label: 'Community', href: '/community' },
      { label: 'Partners', href: '/partners' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Terms of Service', href: '/legal/terms' },
      { label: 'Privacy Policy', href: '/legal/privacy' },
      { label: 'Cookie Policy', href: '/legal/cookies' },
      { label: 'Compliance', href: '/legal/compliance' },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl text-background">AUEP</span>
            </div>
            <p className="text-background/80 mb-6 leading-relaxed">
              Unifying Africa through technology, innovation, and shared prosperity. 
              Building the digital infrastructure for a connected continent.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-background/70">
                <MapPin className="w-4 h-4" />
                <span>Pan-African Headquarters</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-background/70">
                <Mail className="w-4 h-4" />
                <span>info@auep.africa</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-background/70">
                <Phone className="w-4 h-4" />
                <span>+254 (0) 700 000 000</span>
              </div>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-background mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      to={link.href} 
                      className="text-background/70 hover:text-background transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-background/60 text-sm mb-4 md:mb-0">
              © 2024 African Unity Economic Platform. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <span className="text-background/60 text-sm">Follow us:</span>
              <div className="flex space-x-4">
                {['Twitter', 'LinkedIn', 'Facebook', 'YouTube'].map((social) => (
                  <a 
                    key={social}
                    href={`#${social.toLowerCase()}`}
                    className="text-background/70 hover:text-background transition-colors text-sm"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
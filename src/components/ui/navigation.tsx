import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import { Menu, Wallet, Bell, Globe, Users, TrendingUp, BookOpen, ShoppingCart, Vote, MapPin, Repeat } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/', label: 'Home', icon: Globe },
  { href: '/about', label: 'About', icon: Users },
  { href: '/modules', label: 'Modules', icon: TrendingUp },
  { href: '/explore', label: 'Explore', icon: BookOpen },
  { href: '/contact', label: 'Contact', icon: MapPin },
];

const moduleItems = [
  { href: '/modules/wallet', label: 'AfriCoin Wallet', icon: Wallet },
  { href: '/modules/trade', label: 'Trade Network', icon: TrendingUp },
  { href: '/modules/crowdfunding', label: 'Infrastructure Fund', icon: Users },
  { href: '/modules/agriculture', label: 'Agriculture AI', icon: Globe },
  { href: '/modules/learning', label: 'Digital University', icon: BookOpen },
  { href: '/modules/e-commerce', label: 'E-Commerce', icon: ShoppingCart },
  { href: '/modules/voting', label: 'Voting Governance', icon: Vote },
  { href: '/modules/travel', label: 'Free Movement', icon: MapPin },
  { href: '/modules/marketplace', label: 'Resource Exchange', icon: Repeat },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
              <Globe className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl bg-gradient-hero bg-clip-text text-transparent">
              AUEP
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary",
                  isActive(item.href) ? "text-primary" : "text-muted-foreground"
                )}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="w-4 h-4" />
              <Badge className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-accent text-accent-foreground text-xs p-0 flex items-center justify-center">
                3
              </Badge>
            </Button>
            <Button variant="ghost" size="sm">
              <Wallet className="w-4 h-4 mr-2" />
              Connect Wallet
            </Button>
            <Link to="/dashboard">
              <Button variant="default" size="sm" className="bg-gradient-hero shadow-warm">
                Dashboard
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px]">
              <div className="flex flex-col space-y-6 mt-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Navigation</h3>
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "flex items-center space-x-3 p-2 rounded-lg transition-colors",
                        isActive(item.href) 
                          ? "bg-primary/10 text-primary" 
                          : "hover:bg-muted"
                      )}
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{item.label}</span>
                    </Link>
                  ))}
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Modules</h3>
                  <div className="grid grid-cols-1 gap-2">
                    {moduleItems.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center space-x-3 p-2 rounded-lg hover:bg-muted transition-colors text-sm"
                      >
                        <item.icon className="w-4 h-4" />
                        <span>{item.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t space-y-4">
                  <Button variant="outline" className="w-full justify-start">
                    <Wallet className="w-4 h-4 mr-2" />
                    Connect Wallet
                  </Button>
                  <Link to="/dashboard" onClick={() => setIsOpen(false)}>
                    <Button className="w-full bg-gradient-hero shadow-warm">
                      Dashboard
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};
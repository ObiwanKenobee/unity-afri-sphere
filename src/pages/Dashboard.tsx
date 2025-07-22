import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Wallet, 
  TrendingUp, 
  Users, 
  Globe, 
  BookOpen, 
  ShoppingCart, 
  Vote, 
  MapPin, 
  Bell,
  Plus,
  ArrowRight,
  ArrowUp,
  ArrowDown,
  Activity
} from 'lucide-react';
import { Link } from 'react-router-dom';

const quickActions = [
  { icon: Wallet, label: 'Send AfriCoin', href: '/modules/wallet', color: 'bg-amber-500' },
  { icon: TrendingUp, label: 'Track Trade', href: '/modules/trade', color: 'bg-blue-500' },
  { icon: Users, label: 'Fund Project', href: '/modules/crowdfunding', color: 'bg-green-500' },
  { icon: BookOpen, label: 'Join Course', href: '/modules/learning', color: 'bg-purple-500' },
];

const recentActivity = [
  { type: 'wallet', action: 'Received 250 AfriCoin', time: '2 mins ago', icon: ArrowDown, color: 'text-green-500' },
  { type: 'trade', action: 'Shipment arrived in Lagos', time: '1 hour ago', icon: MapPin, color: 'text-blue-500' },
  { type: 'learning', action: 'Completed AI Farming module', time: '3 hours ago', icon: BookOpen, color: 'text-purple-500' },
  { type: 'voting', action: 'Voted on Infrastructure Bill', time: '1 day ago', icon: Vote, color: 'text-red-500' },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-earth">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-primary">Welcome back, Kwame</h1>
              <p className="text-muted-foreground">Your African Unity dashboard</p>
            </div>
            <Button className="bg-gradient-hero shadow-warm">
              <Bell className="w-4 h-4 mr-2" />
              3 Notifications
            </Button>
          </div>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="border-0 shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">AfriCoin Balance</p>
                    <p className="text-2xl font-bold text-primary">2,450.75</p>
                  </div>
                  <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center">
                    <Wallet className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="flex items-center mt-2 text-sm text-green-500">
                  <ArrowUp className="w-4 h-4 mr-1" />
                  +12.5% this month
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Active Trades</p>
                    <p className="text-2xl font-bold text-primary">7</p>
                  </div>
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="flex items-center mt-2 text-sm text-blue-500">
                  <Activity className="w-4 h-4 mr-1" />
                  3 in transit
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Learning Progress</p>
                    <p className="text-2xl font-bold text-primary">68%</p>
                  </div>
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                </div>
                <Progress value={68} className="mt-2" />
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Projects Funded</p>
                    <p className="text-2xl font-bold text-primary">12</p>
                  </div>
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="flex items-center mt-2 text-sm text-green-500">
                  <ArrowUp className="w-4 h-4 mr-1" />
                  2 new this week
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <div className="lg:col-span-1">
            <Card className="border-0 shadow-card mb-6">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Frequently used features</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {quickActions.map((action, index) => (
                  <Link key={index} to={action.href}>
                    <Button variant="ghost" className="w-full justify-start h-12 hover:bg-muted">
                      <div className={`w-8 h-8 ${action.color} rounded-lg flex items-center justify-center mr-3`}>
                        <action.icon className="w-4 h-4 text-white" />
                      </div>
                      {action.label}
                      <ArrowRight className="w-4 h-4 ml-auto" />
                    </Button>
                  </Link>
                ))}
                <Button variant="outline" className="w-full justify-start h-12">
                  <Plus className="w-4 h-4 mr-3" />
                  Customize Actions
                </Button>
              </CardContent>
            </Card>

            {/* Notifications */}
            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle>Recent Notifications</CardTitle>
                <CardDescription>Stay updated on your activities</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3 p-3 bg-accent/10 rounded-lg">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">New AgriAI insights available</p>
                    <p className="text-xs text-muted-foreground">Crop recommendations for your region</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Trade route optimized</p>
                    <p className="text-xs text-muted-foreground">Save 15% on shipping costs</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Project funding milestone reached</p>
                    <p className="text-xs text-muted-foreground">Solar project 80% funded</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Recent Activity */}
            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Your latest platform interactions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 hover:bg-muted rounded-lg transition-colors">
                      <div className={`${activity.color}`}>
                        <activity.icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">{activity.action}</p>
                        <p className="text-sm text-muted-foreground">{activity.time}</p>
                      </div>
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Module Overview */}
            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle>Your Modules</CardTitle>
                <CardDescription>Active platform integrations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { name: 'AfriCoin Wallet', status: 'Active', icon: Wallet, color: 'bg-amber-500' },
                    { name: 'Trade Network', status: 'Active', icon: TrendingUp, color: 'bg-blue-500' },
                    { name: 'Agriculture AI', status: 'Active', icon: Globe, color: 'bg-green-500' },
                    { name: 'Digital University', status: 'In Progress', icon: BookOpen, color: 'bg-purple-500' },
                    { name: 'E-Commerce', status: 'Setup Required', icon: ShoppingCart, color: 'bg-pink-500' },
                    { name: 'Voting Governance', status: 'Active', icon: Vote, color: 'bg-red-500' },
                  ].map((module, index) => (
                    <div key={index} className="flex items-center space-x-3 p-4 border rounded-lg hover:shadow-md transition-all">
                      <div className={`w-10 h-10 ${module.color} rounded-lg flex items-center justify-center`}>
                        <module.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">{module.name}</p>
                        <Badge 
                          variant={module.status === 'Active' ? 'default' : module.status === 'In Progress' ? 'secondary' : 'outline'}
                          className="text-xs"
                        >
                          {module.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
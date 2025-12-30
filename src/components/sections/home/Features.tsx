'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Code2, Zap, Shield, Users, Clock, Target } from 'lucide-react';
import { useState, useEffect } from 'react';

const DEFAULT_FEATURES = {
  badge: 'Features',
  title: 'Everything You Need for Modern Testing',
  subtitle: 'Powerful features designed to streamline your development workflow and boost productivity.',
  features: [
    {
      icon: 'Zap',
      title: 'Lightning Fast',
      description: 'Execute tests in milliseconds with our optimized testing engine. No more waiting around for slow test suites.'
    },
    {
      icon: 'Code2',
      title: 'Developer Friendly',
      description: 'Clean APIs and intuitive syntax that feels natural. Write tests that are easy to read and maintain.'
    },
    {
      icon: 'Shield',
      title: 'Rock Solid Reliability',
      description: 'Built for production environments with enterprise-grade stability and comprehensive error handling.'
    },
    {
      icon: 'Users',
      title: 'Team Collaboration',
      description: 'Share test results, collaborate on test cases, and keep your entire team in sync with real-time updates.'
    },
    {
      icon: 'Clock',
      title: 'Real-time Monitoring',
      description: 'Monitor your applications continuously with instant alerts and detailed performance insights.'
    },
    {
      icon: 'Target',
      title: 'Precise Testing',
      description: 'Target specific components, functions, or user flows with surgical precision and comprehensive coverage.'
    }
  ]
} as const;

type FeaturesProps = Partial<typeof DEFAULT_FEATURES>;

export default function Features(props: FeaturesProps) {
  const config = { ...DEFAULT_FEATURES, ...props };
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap':
        return <Zap className="h-8 w-8" />;
      case 'Code2':
        return <Code2 className="h-8 w-8" />;
      case 'Shield':
        return <Shield className="h-8 w-8" />;
      case 'Users':
        return <Users className="h-8 w-8" />;
      case 'Clock':
        return <Clock className="h-8 w-8" />;
      case 'Target':
        return <Target className="h-8 w-8" />;
      default:
        return <Code2 className="h-8 w-8" />;
    }
  };

  return (
    <section id="features" className="bg-muted/30 text-foreground py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          {/* Badge */}
          <div
            className={`mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <Badge
              variant="secondary"
              className="bg-muted text-muted-foreground px-4 py-2 text-sm font-medium"
            >
              <span data-editable="badge">{config.badge}</span>
            </Badge>
          </div>

          {/* Main Heading */}
          <div
            className={`mb-6 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight">
              <span data-editable="title">{config.title}</span>
            </h2>
          </div>

          {/* Subtitle */}
          <div
            className={`mb-12 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              <span data-editable="subtitle">{config.subtitle}</span>
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {config.features.map((feature, idx) => (
            <div
              key={idx}
              className={`transition-all duration-700 delay-${300 + idx * 100} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              <Card className="h-full bg-card text-card-foreground border-border hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-6 text-primary">
                    {getIcon(feature.icon)}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    <span data-editable={`features[${idx}].title`}>{feature.title}</span>
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    <span data-editable={`features[${idx}].description`}>{feature.description}</span>
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

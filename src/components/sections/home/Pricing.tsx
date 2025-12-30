'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Check, Zap, Star } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_PRICING = {
  badge: 'Pricing Plans',
  title: 'Simple, Transparent Pricing',
  subtitle: 'Choose the perfect plan for your testing needs. Start free, scale as you grow.',
  plans: [
    {
      name: 'Starter',
      price: 'Free',
      period: 'forever',
      description: 'Perfect for getting started with basic testing',
      features: [
        'Up to 100 tests per month',
        'Basic reporting',
        'Community support',
        '1 project',
        'Standard integrations'
      ],
      ctaText: 'Get Started',
      ctaHref: '/signup',
      popular: false,
      icon: 'Zap'
    },
    {
      name: 'Professional',
      price: '$29',
      period: 'per month',
      description: 'Ideal for growing teams and advanced testing',
      features: [
        'Unlimited tests',
        'Advanced analytics',
        'Priority support',
        '10 projects',
        'All integrations',
        'Custom workflows',
        'Team collaboration'
      ],
      ctaText: 'Start Free Trial',
      ctaHref: '/signup?plan=pro',
      popular: true,
      icon: 'Star'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'contact us',
      description: 'For large organizations with specific requirements',
      features: [
        'Everything in Professional',
        'Dedicated support',
        'Custom integrations',
        'Unlimited projects',
        'Advanced security',
        'SLA guarantee',
        'On-premise deployment'
      ],
      ctaText: 'Contact Sales',
      ctaHref: '/contact',
      popular: false,
      icon: 'Star'
    }
  ]
} as const;

type PricingProps = Partial<typeof DEFAULT_PRICING>;

export default function Pricing(props: PricingProps) {
  const config = { ...DEFAULT_PRICING, ...props };
  const navigate = useSmartNavigation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handlePlanClick = (href: string) => {
    navigate(href);
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap':
        return <Zap className="h-6 w-6" />;
      case 'Star':
        return <Star className="h-6 w-6" />;
      default:
        return <Zap className="h-6 w-6" />;
    }
  };

  return (
    <section id="pricing" className="bg-background text-foreground py-20 lg:py-32">
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
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              <span data-editable="subtitle">{config.subtitle}</span>
            </p>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {config.plans.map((plan, idx) => (
            <div
              key={idx}
              className={`transition-all duration-700 delay-${300 + idx * 100} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              <Card className={`relative h-full ${plan.popular ? 'border-primary shadow-lg scale-105' : 'border-border'}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-8">
                  <div className="flex justify-center mb-4 text-primary">
                    {getIcon(plan.icon)}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    <span data-editable={`plans[${idx}].name`}>{plan.name}</span>
                  </h3>
                  
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-foreground">
                      <span data-editable={`plans[${idx}].price`}>{plan.price}</span>
                    </span>
                    {plan.period && (
                      <span className="text-muted-foreground ml-2">
                        <span data-editable={`plans[${idx}].period`}>/{plan.period}</span>
                      </span>
                    )}
                  </div>
                  
                  <p className="text-muted-foreground text-sm">
                    <span data-editable={`plans[${idx}].description`}>{plan.description}</span>
                  </p>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIdx) => (
                      <li key={featureIdx} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-foreground">
                          <span data-editable={`plans[${idx}].features[${featureIdx}]`}>{feature}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button
                    onClick={() => handlePlanClick(plan.ctaHref)}
                    data-editable-href={`plans[${idx}].ctaHref`}
                    data-href={plan.ctaHref}
                    variant={plan.popular ? 'default' : 'outline'}
                    className="w-full"
                  >
                    <span data-editable={`plans[${idx}].ctaText`}>{plan.ctaText}</span>
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-16 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <p className="text-muted-foreground mb-4">
            Need a custom solution? We're here to help.
          </p>
          <Button
            variant="ghost"
            onClick={() => navigate('/contact')}
            className="text-primary hover:text-primary-foreground hover:bg-primary"
          >
            Contact our sales team
          </Button>
        </div>
      </div>
    </section>
  );
}

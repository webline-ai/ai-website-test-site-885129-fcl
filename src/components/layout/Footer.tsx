'use client';

import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_FOOTER = {
  logo: 'Test Site',
  description: 'Streamlined testing for modern web development. Built by developers, for developers.',
  links: {
    product: [
      { label: 'Features', href: '#features' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Get Started', href: '#cta' }
    ],
    company: [
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'Blog', href: '/blog' }
    ],
    legal: [
      { label: 'Privacy', href: '/privacy' },
      { label: 'Terms', href: '/terms' }
    ]
  },
  copyright: '© 2024 Test Site. All rights reserved.'
} as const;

type FooterProps = Partial<typeof DEFAULT_FOOTER>;

export default function Footer(props: FooterProps) {
  const config = { ...DEFAULT_FOOTER, ...props };
  const navigate = useSmartNavigation();

  const handleLinkClick = (href: string) => {
    navigate(href);
  };

  return (
    <footer className="bg-muted/30 text-foreground py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <button
                onClick={() => navigate('#hero')}
                className="text-xl font-bold text-foreground hover:text-primary transition-colors"
                data-editable="logo"
              >
                {config.logo}
              </button>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              <span data-editable="description">{config.description}</span>
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Product</h3>
            <ul className="space-y-2">
              {config.links.product.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    data-editable-href={`links.product[${index}].href`}
                    data-href={link.href}
                    className="text-muted-foreground hover:text-primary text-sm transition-colors"
                  >
                    <span data-editable={`links.product[${index}].label`}>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2">
              {config.links.company.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    data-editable-href={`links.company[${index}].href`}
                    data-href={link.href}
                    className="text-muted-foreground hover:text-primary text-sm transition-colors"
                  >
                    <span data-editable={`links.company[${index}].label`}>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-2">
              {config.links.legal.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    data-editable-href={`links.legal[${index}].href`}
                    data-href={link.href}
                    className="text-muted-foreground hover:text-primary text-sm transition-colors"
                  >
                    <span data-editable={`links.legal[${index}].label`}>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-center text-muted-foreground text-sm">
            <span data-editable="copyright">{config.copyright}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
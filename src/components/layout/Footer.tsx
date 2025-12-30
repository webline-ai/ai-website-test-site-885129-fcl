'use client';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Github, Twitter, Linkedin } from 'lucide-react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_FOOTER = {
  brandName: 'TestFlow',
  brandDescription: 'Clean, fast, and developer-friendly solutions for modern web testing',
  copyright: '© 2024 TestFlow. Built for developers.',

  // Product Links
  productTitle: 'Product',
  productLinks: [
    { label: 'Testing Suite', href: '/testing' },
    { label: 'API Testing', href: '/api' },
  ],

  // Developer Resources
  developerTitle: 'Developers',
  developerLinks: [
    { label: 'Documentation', href: '/docs' },
    { label: 'API Reference', href: '/api-docs' },
  ],

  // Company Links
  companyTitle: 'Company',
  companyLinks: [
    { label: 'About', href: '/about' },
    { label: 'Careers', href: '/careers' },
  ],

  // Legal Links
  legalTitle: 'Legal',
  legalLinks: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],

  // Social Links
  socialTitle: 'Connect',
  githubHref: 'https://github.com',
  twitterHref: 'https://twitter.com',
  linkedinHref: 'https://linkedin.com',
} as const;

type FooterProps = Partial<typeof DEFAULT_FOOTER>;

export default function Footer(props: FooterProps) {
  const config = { ...DEFAULT_FOOTER, ...props };
  const navigate = useSmartNavigation();

  const handleLinkClick = (href: string) => {
    if (href.startsWith('http')) {
      window.open(href, '_blank', 'noopener,noreferrer');
    } else {
      navigate(href);
    }
  };

  return (
    <footer id="footer" className="bg-background text-foreground border-t border-border">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold mb-4">
              <span data-editable="brandName">{config.brandName}</span>
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-md">
              <span data-editable="brandDescription">{config.brandDescription}</span>
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium">
                <span data-editable="socialTitle">{config.socialTitle}</span>
              </span>
              <div className="flex gap-3">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleLinkClick(config.githubHref)}
                  data-editable-href="githubHref"
                  data-href={config.githubHref}
                  className="h-8 w-8 p-0 hover:bg-accent hover:text-accent-foreground"
                  aria-label="GitHub"
                >
                  <Github className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleLinkClick(config.twitterHref)}
                  data-editable-href="twitterHref"
                  data-href={config.twitterHref}
                  className="h-8 w-8 p-0 hover:bg-accent hover:text-accent-foreground"
                  aria-label="Twitter"
                >
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleLinkClick(config.linkedinHref)}
                  data-editable-href="linkedinHref"
                  data-href={config.linkedinHref}
                  className="h-8 w-8 p-0 hover:bg-accent hover:text-accent-foreground"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-medium mb-4">
              <span data-editable="productTitle">{config.productTitle}</span>
            </h4>
            <ul className="space-y-3">
              {config.productLinks.map((link, idx) => (
                <li key={idx}>
                  <Button
                    variant="ghost"
                    onClick={() => handleLinkClick(link.href)}
                    data-editable-href={`productLinks[${idx}].href`}
                    data-href={link.href}
                    className="h-auto p-0 text-sm text-muted-foreground hover:text-foreground justify-start"
                  >
                    <span data-editable={`productLinks[${idx}].label`}>{link.label}</span>
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          {/* Developer Links */}
          <div>
            <h4 className="font-medium mb-4">
              <span data-editable="developerTitle">{config.developerTitle}</span>
            </h4>
            <ul className="space-y-3">
              {config.developerLinks.map((link, idx) => (
                <li key={idx}>
                  <Button
                    variant="ghost"
                    onClick={() => handleLinkClick(link.href)}
                    data-editable-href={`developerLinks[${idx}].href`}
                    data-href={link.href}
                    className="h-auto p-0 text-sm text-muted-foreground hover:text-foreground justify-start"
                  >
                    <span data-editable={`developerLinks[${idx}].label`}>{link.label}</span>
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Legal Links */}
          <div>
            <h4 className="font-medium mb-4">
              <span data-editable="companyTitle">{config.companyTitle}</span>
            </h4>
            <ul className="space-y-3 mb-6">
              {config.companyLinks.map((link, idx) => (
                <li key={idx}>
                  <Button
                    variant="ghost"
                    onClick={() => handleLinkClick(link.href)}
                    data-editable-href={`companyLinks[${idx}].href`}
                    data-href={link.href}
                    className="h-auto p-0 text-sm text-muted-foreground hover:text-foreground justify-start"
                  >
                    <span data-editable={`companyLinks[${idx}].label`}>{link.label}</span>
                  </Button>
                </li>
              ))}
            </ul>

            <h4 className="font-medium mb-4">
              <span data-editable="legalTitle">{config.legalTitle}</span>
            </h4>
            <ul className="space-y-3">
              {config.legalLinks.map((link, idx) => (
                <li key={idx}>
                  <Button
                    variant="ghost"
                    onClick={() => handleLinkClick(link.href)}
                    data-editable-href={`legalLinks[${idx}].href`}
                    data-href={link.href}
                    className="h-auto p-0 text-sm text-muted-foreground hover:text-foreground justify-start"
                  >
                    <span data-editable={`legalLinks[${idx}].label`}>{link.label}</span>
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <Separator className="my-8" />
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            <span data-editable="copyright">{config.copyright}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

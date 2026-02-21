import type { Metadata } from 'next';
import ResponsibleDisclosureContent from './components/ResponsibleDisclosureContent';

export const metadata: Metadata = {
  title: 'Responsible Disclosure',
  description:
    'eclyraX supports structured vulnerability reporting and responsible communication of security concerns affecting infrastructure integrity. Guidelines for reporting security vulnerabilities in deterministic financial infrastructure.',
  keywords: [
    'responsible disclosure',
    'security',
    'vulnerability reporting',
    'reporting guidelines',
    'review process',
    'disclosure boundaries',
    'security concerns',
    'infrastructure integrity',
    'vulnerability communication',
  ],

  openGraph: {
    title: 'Responsible Disclosure | eclyraX',
    description:
      'Structured vulnerability reporting and responsible communication of security concerns affecting infrastructure integrity.',
    type: 'website',
    url: 'https://eclyrax.com/responsible-disclosure',
    siteName: 'eclyraX',
    images: [
      {
        url: 'https://img.rocket.new/generatedImages/rocket_gen_img_192eca872-1768648176954.png',
        width: 1200,
        height: 630,
        alt: 'eclyraX Responsible Disclosure',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Responsible Disclosure | eclyraX',
    description: 'Vulnerability reporting and responsible communication of security concerns.',
    images: ['https://eclyrax.com/og-image.jpg'],
    site: '@eclyraX',
    creator: '@eclyraX',
  },
  alternates: {
    canonical: 'https://eclyrax.com/responsible-disclosure',
  },
};

export default function ResponsibleDisclosurePage() {
  return <ResponsibleDisclosureContent />;
}

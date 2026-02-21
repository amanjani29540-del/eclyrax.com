import type { Metadata } from 'next';
import DocumentationContent from './components/DocumentationContent';

export const metadata: Metadata = {
  title: 'Documentation',
  description:
    'Comprehensive architectural and operational documentation governing eclyraX infrastructure behavior, execution controls, and financial state integrity. Technical specifications for deterministic financial systems.',
  keywords: [
    'documentation',
    'architecture',
    'control',
    'audit',
    'governance',
    'infrastructure',
    'technical specifications',
    'execution controls',
    'financial state integrity',
    'operational documentation',
  ],

  openGraph: {
    title: 'Documentation | eclyraX',
    description:
      'Comprehensive architectural and operational documentation governing eclyraX infrastructure behavior, execution controls, and financial state integrity.',
    type: 'website',
    url: 'https://eclyrax.com/documentation',
    siteName: 'eclyraX',
    images: [
      {
        url: 'https://img.rocket.new/generatedImages/rocket_gen_img_135bb5629-1769246872904.png',
        width: 1200,
        height: 630,
        alt: 'eclyraX Documentation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Documentation | eclyraX',
    description:
      'Architectural and operational documentation governing infrastructure behavior, execution controls, and financial state integrity.',
    images: ['https://eclyrax.com/og-image.jpg'],
    site: '@eclyraX',
    creator: '@eclyraX',
  },
  alternates: {
    canonical: 'https://eclyrax.com/documentation',
  },
};

export default function DocumentationPage() {
  return <DocumentationContent />;
}

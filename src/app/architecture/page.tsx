import type { Metadata } from 'next';
import ArchitectureContent from './components/ArchitectureContent';

export const metadata: Metadata = {
  title: 'Architecture - eclyraX',
  description:
    'Deterministic financial control infrastructure. Institutional-grade architecture for monetary operations.',
  openGraph: {
    title: 'Architecture - eclyraX',
    description:
      'Deterministic financial control infrastructure. Institutional-grade architecture for monetary operations.',
    url: 'https://eclyrax.com/architecture',
    siteName: 'eclyraX',
    images: [
      {
        url: 'https://eclyrax.com/og.jpg',
        width: 1200,
        height: 630,
        alt: 'eclyraX Architecture - Financial Infrastructure',
      },
    ],

    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Architecture - eclyraX',
    description:
      'Deterministic financial control infrastructure. Institutional-grade architecture for monetary operations.',
    images: ['https://eclyrax.com/og.jpg'],
  },
};

export default function ArchitecturePage() {
  return <ArchitectureContent />;
}

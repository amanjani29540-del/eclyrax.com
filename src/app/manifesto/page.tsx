import type { Metadata } from 'next';
import ManifestoContent from './components/ManifestoContent';

export const metadata: Metadata = {
  title: 'Manifesto - eclyraX',
  description:
    'Deterministic financial control infrastructure. Institutional-grade architecture for monetary operations.',
  openGraph: {
    title: 'Manifesto - eclyraX',
    description:
      'Deterministic financial control infrastructure. Institutional-grade architecture for monetary operations.',
    url: 'https://eclyrax.com/manifesto',
    siteName: 'eclyraX',
    images: [
      {
        url: 'https://eclyrax.com/og.jpg',
        width: 1200,
        height: 630,
        alt: 'eclyraX Manifesto - Financial Infrastructure',
      },
    ],

    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Manifesto - eclyraX',
    description:
      'Deterministic financial control infrastructure. Institutional-grade architecture for monetary operations.',
    images: ['https://eclyrax.com/og.jpg'],
  },
};

export default function ManifestoPage() {
  return <ManifestoContent />;
}

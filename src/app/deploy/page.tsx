import type { Metadata } from 'next';
import DeployContent from './components/DeployContent';

export const metadata: Metadata = {
  title: 'Deploy - eclyraX',
  description:
    'Deterministic financial control infrastructure. Institutional-grade architecture for monetary operations.',
  openGraph: {
    title: 'Deploy - eclyraX',
    description:
      'Deterministic financial control infrastructure. Institutional-grade architecture for monetary operations.',
    url: 'https://eclyrax.com/deploy',
    siteName: 'eclyraX',
    images: [
      {
        url: 'https://eclyrax.com/og.jpg',
        width: 1200,
        height: 630,
        alt: 'eclyraX Deploy - Financial Infrastructure',
      },
    ],

    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Deploy - eclyraX',
    description:
      'Deterministic financial control infrastructure. Institutional-grade architecture for monetary operations.',
    images: ['https://eclyrax.com/og.jpg'],
  },
};

export default function DeployPage() {
  return <DeployContent />;
}

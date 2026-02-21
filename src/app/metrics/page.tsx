import type { Metadata } from 'next';
import MetricsContent from './components/MetricsContent';

export const metadata: Metadata = {
  title: 'Metrics - eclyraX',
  description:
    'Deterministic financial control infrastructure. Institutional-grade architecture for monetary operations.',
  openGraph: {
    title: 'Metrics - eclyraX',
    description:
      'Deterministic financial control infrastructure. Institutional-grade architecture for monetary operations.',
    url: 'https://eclyrax.com/metrics',
    siteName: 'eclyraX',
    images: [
      {
        url: 'https://eclyrax.com/og.jpg',
        width: 1200,
        height: 630,
        alt: 'eclyraX Metrics - Financial Infrastructure',
      },
    ],

    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Metrics - eclyraX',
    description:
      'Deterministic financial control infrastructure. Institutional-grade architecture for monetary operations.',
    images: ['https://eclyrax.com/og.jpg'],
  },
};

export default function MetricsPage() {
  return <MetricsContent />;
}

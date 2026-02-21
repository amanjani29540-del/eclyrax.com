import type { Metadata } from 'next';
import GovernanceContent from './components/GovernanceContent';

export const metadata: Metadata = {
  title: 'Governance - eclyraX',
  description:
    'Deterministic financial control infrastructure. Institutional-grade architecture for monetary operations.',
  openGraph: {
    title: 'Governance - eclyraX',
    description:
      'Deterministic financial control infrastructure. Institutional-grade architecture for monetary operations.',
    url: 'https://eclyrax.com/governance',
    siteName: 'eclyraX',
    images: [
      {
        url: 'https://eclyrax.com/og.jpg',
        width: 1200,
        height: 630,
        alt: 'eclyraX Governance - Financial Infrastructure',
      },
    ],

    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Governance - eclyraX',
    description:
      'Deterministic financial control infrastructure. Institutional-grade architecture for monetary operations.',
    images: ['https://eclyrax.com/og.jpg'],
  },
};

export default function GovernancePage() {
  return <GovernanceContent />;
}

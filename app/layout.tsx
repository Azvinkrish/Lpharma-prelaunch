import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'L Pharma - Coming Soon | Pharmaceutical Automation Solutions',
  description: 'L Pharma, a division of Laistung Group, is engineering next-gen pharmaceutical automation. CGMP-compliant design, advanced control systems, and comprehensive validation services.',
  keywords: 'pharmaceutical automation, CGMP compliance, bioreactors, fermenters, process validation, industrial automation, Bengaluru, India',
  authors: [{ name: 'L Pharma' }],
  openGraph: {
    title: 'L Pharma - Coming Soon | Pharmaceutical Automation Solutions',
    description: 'Engineering next-gen pharmaceutical automation with CGMP-compliant design and advanced control system integration.',
    url: 'https://lpharma.com',
    siteName: 'L Pharma',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'L Pharma - Pharmaceutical Automation Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'L Pharma - Coming Soon | Pharmaceutical Automation Solutions',
    description: 'Engineering next-gen pharmaceutical automation with CGMP-compliant design and advanced control system integration.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
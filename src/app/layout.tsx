import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from '../config';

import './global.css';
import '@coinbase/onchainkit/styles.css';
import '@rainbow-me/rainbowkit/styles.css';
import dynamic from 'next/dynamic';
import Head from 'next/head';
const OnchainProviders = dynamic(
  () => import('src/components/OnchainProviders'),
  {
    ssr: false,
  },
);

export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
};

export const metadata: Metadata = {
  title: 'Mochi',
  description: `Named after the CEO of Coinbase's pet cat, $MOCHI pairs the unstoppable narrative of being Brian Armstrong's cat with Coinbase's push to bring the masses onchain to Base. The masses will love Mochi, and thousands on Base already do.`,
  openGraph: {
    title: 'Mochi',
    description: `Named after the CEO of Coinbase's pet cat, $MOCHI pairs the unstoppable narrative of being Brian Armstrong's cat with Coinbase's push to bring the masses onchain to Base. The masses will love Mochi, and thousands on Base already do.`,
    images: [`${NEXT_PUBLIC_URL}/img/logo.png`],
  },
};

export default function RootLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <title>Mochi</title>
        <meta name="format-detection" content="telephone=no" />
        <link rel="shortcut icon" href="favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body className="flex items-center justify-center">
        <OnchainProviders>{children}</OnchainProviders>
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ahlulbayt Centrum | Brno',
  description: 'A spiritual and community center in Brno for prayer, Islamic education, family programs, announcements and events.',
  manifest: '/manifest.json',
  icons: { icon: '/icon.png', apple: '/apple-touch-icon.png' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import './globals.css';

export const metadata: Metadata = {
  title: 'Zen Barber | Yaoundé Dragage',
  description:
    'Zen Barber, le standard du grooming masculin à Yaoundé. Coupes signature, service VIP et transformations premium.',
  icons: {
    icon: '/images/logo.png',
    shortcut: '/images/logo.png',
    apple: '/images/logo.png',
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-bg text-fg selection:bg-accent selection:text-fg font-sans antialiased">
        <Navbar />
        {children}
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}

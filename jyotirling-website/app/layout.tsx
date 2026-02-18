import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Jyotirling.com - Sacred Journey to 12 Jyotirlinga Temples',
    template: '%s | Jyotirling.com'
  },
  description: 'Discover the 12 sacred Jyotirlinga temples of Lord Shiva across India. Complete pilgrimage guide, temple information, travel tips, and spiritual insights.',
  keywords: ['Jyotirlinga', 'Shiva temples', 'Hindu pilgrimage', 'spiritual journey', 'sacred sites', 'India temples'],
  authors: [{ name: 'Jyotirling.com Team' }],
  creator: 'Jyotirling.com',
  publisher: 'Jyotirling.com',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://jyotirling.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Jyotirling.com - Sacred Journey to 12 Jyotirlinga Temples',
    description: 'Discover the 12 sacred Jyotirlinga temples of Lord Shiva across India. Complete pilgrimage guide with interactive map.',
    url: 'https://jyotirling.com',
    siteName: 'Jyotirling.com',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '12 Sacred Jyotirlinga Temples',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jyotirling.com - Sacred Journey Guide',
    description: 'Explore the 12 sacred Jyotirlinga temples with interactive map and complete travel information.',
    images: ['/twitter-image.jpg'],
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
    google: 'your-google-verification-token',
    yandex: 'your-yandex-verification-token',
  },
  category: 'spirituality',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#8B0000" />
        <meta name="color-scheme" content="dark light" />
      </head>
      <body 
        className={`${inter.className} antialiased min-h-screen flex flex-col`}
        suppressHydrationWarning
      >
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Jyotirling.com",
              "description": "Sacred journey guide to 12 Jyotirlinga temples",
              "url": "https://jyotirling.com",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://jyotirling.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Jyotirling.com",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://jyotirling.com/logo.png"
                }
              }
            })
          }}
        />
      </body>
    </html>
  );
}
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '../components/theme-provider';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { BackToTop } from '../components/ui/BackToTop';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Bibek Adhikari | Portfolio',
  description: 'Portfolio website showcasing projects, skills, experience and blog posts of Bibek Adhikari.',
  keywords: ['Bibek Adhikari', 'Portfolio', 'Full Stack Developer', 'Projects', 'Blog'],
  authors: [{ name: 'Bibek Adhikari' }],
  openGraph: {
    title: 'Bibek Adhikari | Portfolio',
    description: 'Full-stack developer portfolio website',
    url: 'https://example.com',
    siteName: 'Bibek Portfolio',
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bibek Adhikari | Portfolio',
    description: 'Full-stack developer portfolio website'
  },
  metadataBase: new URL('https://example.com')
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}

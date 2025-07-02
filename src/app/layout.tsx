import type { Metadata } from 'next';
import { Lato, Syne } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';
import { Preloader } from '@/components/preloader';
import { ThemeProvider } from '@/components/theme-provider';

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lato',
});

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-syne',
});


export const metadata: Metadata = {
  title: 'CodeGova - Next-Gen Scripts & CMS Solutions',
  description: 'High-quality scripts and CMS solutions for the modern web. Built by CodeGova.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('min-h-screen bg-background font-body antialiased', lato.variable, syne.variable)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Preloader />
          <div className="relative flex min-h-dvh flex-col">
            <div className="fixed top-0 left-0 -z-10 h-full w-full bg-gradient-to-r from-primary/5 via-background to-primary/5 bg-[length:200%_200%] animate-pan-background" />
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}

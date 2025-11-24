
"use client";

import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import AppHeader from '@/components/layout/app-header';
import BottomNav from '@/components/layout/bottom-nav';
import { NotificationsProvider } from '@/context/notifications-context';
import { LanguageProvider } from '@/context/language-context';
import { useState, useEffect } from 'react';
import SplashScreen from '@/components/splash-screen';

const inter = Inter({ subsets: ['latin']});

// This is required for GitHub Pages deployment. It must match the repository name.
const basePath = process.env.NODE_ENV === 'production' ? '/adatna' : '';


// Since we are using 'use client', we can't export Metadata directly.
// This is a workaround to still have metadata in the page.
const AppMetadata: React.FC = () => {
  useEffect(() => {
    document.title = 'هاكر العادات';
    const descriptionMeta = document.querySelector('meta[name="description"]');
    if (descriptionMeta) {
      descriptionMeta.setAttribute('content', 'تطبيق لمساعدتك على التخلص من العادات السيئة');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'تطبيق لمساعدتك على التخلص من العادات السيئة';
      document.head.appendChild(meta);
    }
  }, []);
  return null;
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate app loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Set splash screen duration to 3 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
         <link rel="manifest" href={`${basePath}/manifest.json`} />
         <link rel="apple-touch-icon" href="https://picsum.photos/seed/1/192/192"></link>
         <meta name="theme-color" content="#18453B" />
         {/* We can't export Metadata, so we manage it via a component */}
      </head>
      <body className={`${inter.className} font-body antialiased`}>
        <AppMetadata />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <NotificationsProvider>
              {loading && <SplashScreen />}
              <div className={`relative flex min-h-screen flex-col transition-opacity duration-300 ${loading ? 'opacity-0' : 'opacity-100'}`}>
                <AppHeader />
                <main className="flex-1 pb-20">{children}</main>
                <BottomNav />
              </div>
              <Toaster />
            </NotificationsProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

    

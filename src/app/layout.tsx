
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
import { useEffect } from 'react';

const inter = Inter({ subsets: ['latin']});

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

  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
         <link rel="manifest" href="/adatna/manifest.json" />
         <meta name="theme-color" content="#18453B" />
         <link rel="apple-touch-icon" href="/adatna/icons/icon-192x192.png"></link>
         <meta name="apple-mobile-web-app-capable" content="yes" />
         <meta name="mobile-web-app-capable" content="yes" />
         <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
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
              <div className="relative flex min-h-screen flex-col">
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

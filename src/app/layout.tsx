import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import AppHeader from '@/components/layout/app-header';
import BottomNav from '@/components/layout/bottom-nav';
import { NotificationsProvider } from '@/context/notifications-context';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'هاكر العادات',
  description: 'تطبيق لمساعدتك على التخلص من العادات السيئة',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={`${inter.variable} font-body antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NotificationsProvider>
            <div className="relative flex min-h-screen flex-col">
              <AppHeader />
              <main className="flex-1 pb-20">{children}</main>
              <BottomNav />
            </div>
            <Toaster />
          </NotificationsProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

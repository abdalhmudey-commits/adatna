
"use client";

import { useContext } from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Bell, BellOff, Languages, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useToast } from '@/hooks/use-toast';
import { NotificationsContext } from '@/context/notifications-context';
import { useLanguage } from '@/context/language-context';
import { Locale } from '@/lib/i1n';


export default function AppHeader() {
  const { setTheme, theme } = useTheme();
  const { toast } = useToast();
  const { locale, setLocale, t } = useLanguage();
  const { notificationsEnabled, setNotificationsEnabled } = useContext(NotificationsContext);

  const handleLanguageChange = (lang: Locale) => {
    setLocale(lang);
    toast({
      title: t('header.langChangedTitle'),
      description: lang === 'ar' ? t('header.langChangedToArabic') : t('header.langChangedToEnglish'),
    });
  };

  const handleNotificationsToggle = () => {
    const newStatus = !notificationsEnabled;
    setNotificationsEnabled(newStatus);
    toast({
        title: newStatus ? t('header.notificationsOn') : t('header.notificationsOff'),
        description: newStatus ? t('header.notificationsOnDescription') : t('header.notificationsOffDescription'),
    });
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-auto flex items-center space-x-4 rtl:ml-auto rtl:mr-0 rtl:space-x-reverse">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Languages className="h-[1.2rem] w-[1.2rem]" />
                <span className="sr-only">{t('header.toggleLanguage')}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => handleLanguageChange('ar')} disabled={locale === 'ar'}>
                {t('header.arabic')}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleLanguageChange('en')} disabled={locale === 'en'}>
                {t('header.english')}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Button variant="ghost" size="icon" onClick={handleNotificationsToggle} aria-label={t('header.toggleNotifications')}>
            {notificationsEnabled ? <Bell className="h-[1.2rem] w-[1.2rem]" /> : <BellOff className="h-[1.2rem] w-[1.2rem] text-muted-foreground" />}
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label={t('header.toggleTheme')}
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">{t('header.toggleTheme')}</span>
          </Button>
        </div>
      </div>
    </header>
  );
}

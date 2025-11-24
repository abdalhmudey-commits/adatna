"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Bell, Languages, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useToast } from '@/hooks/use-toast';

export default function AppHeader() {
  const { setTheme, theme } = useTheme();
  const { toast } = useToast();
  const [currentLang, setCurrentLang] = useState('ar');

  const handleLanguageChange = (lang: 'ar' | 'en') => {
    if (typeof window !== 'undefined') {
      const currentDir = lang === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.lang = lang;
      document.documentElement.dir = currentDir;
      setCurrentLang(lang);
      // You may need a more robust i18n solution to reload content
       toast({
        title: lang === 'ar' ? 'تم تغيير اللغة' : 'Language Changed',
        description: lang === 'ar' ? 'تم التبديل إلى اللغة العربية.' : 'Switched to English.',
      });
    }
  };

  const handleNotificationsClick = () => {
    toast({
        title: "الإشعارات",
        description: "لا توجد إشعارات جديدة في الوقت الحالي.",
    });
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-auto flex items-center space-x-2 rtl:ml-auto rtl:mr-0 rtl:space-x-reverse">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Languages className="h-[1.2rem] w-[1.2rem]" />
                <span className="sr-only">تغيير اللغة</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => handleLanguageChange('ar')} disabled={currentLang === 'ar'}>
                العربية
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleLanguageChange('en')} disabled={currentLang === 'en'}>
                English
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="ghost" size="icon" onClick={handleNotificationsClick}>
            <Bell className="h-[1.2rem] w-[1.2rem]" />
            <span className="sr-only">الإشعارات</span>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">تغيير الثيم</span>
          </Button>
        </div>
      </div>
    </header>
  );
}


"use client";

import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { Locale, translations } from '@/lib/i1n';

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string, ...args: any[]) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [locale, setLocaleState] = useState<Locale>('ar');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const storedLocale = localStorage.getItem('habitual_locale') as Locale;
    if (storedLocale && ['ar', 'en', 'fr', 'tr', 'id', 'fa'].includes(storedLocale)) {
      setLocaleState(storedLocale);
      document.documentElement.lang = storedLocale;
      document.documentElement.dir = ['ar', 'fa'].includes(storedLocale) ? 'rtl' : 'ltr';
    } else {
       document.documentElement.lang = 'ar';
       document.documentElement.dir = 'rtl';
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    if (isClient) {
      setLocaleState(newLocale);
      localStorage.setItem('habitual_locale', newLocale);
      document.documentElement.lang = newLocale;
      document.documentElement.dir = ['ar', 'fa'].includes(newLocale) ? 'rtl' : 'ltr';
    }
  };

  const t = (key: string, ...args: any[]): string => {
    const keys = key.split('.');
    let result: any = translations[locale] || translations.en; // Fallback to English
    
    for (const k of keys) {
        if (result && typeof result === 'object' && k in result) {
            result = result[k];
        } else {
            // Fallback to English if key not found in current locale
            let fallbackResult: any = translations.en;
            for (const fk of keys) {
                if (fallbackResult && typeof fallbackResult === 'object' && fk in fallbackResult) {
                    fallbackResult = fallbackResult[fk];
                } else {
                    return key; // Return the key itself if not found in fallback
                }
            }
            result = fallbackResult;
            break;
        }
    }

    if (typeof result === 'function') {
        return result(...args);
    }
    
    return typeof result === 'string' ? result : key;
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};


"use client";

import { useState, useEffect } from 'react';
import { motivationalQuotes } from '@/lib/quotes';
import { Quote } from 'lucide-react';
import { useLanguage } from '@/context/language-context';

const SplashScreen = () => {
  const { locale } = useLanguage();
  const [quote, setQuote] = useState<{ quote: string; author: string } | null>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Select a random quote based on the current locale
    const quotesForLocale = motivationalQuotes[locale]?.length > 0 ? motivationalQuotes[locale] : motivationalQuotes.en;
    const randomQuote = quotesForLocale[Math.floor(Math.random() * quotesForLocale.length)];
    setQuote(randomQuote);

    // Hide splash screen after a delay
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, [locale]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-opacity duration-500 animate-out fade-out">
      {quote && (
        <div className="text-center p-8 max-w-2xl">
           <Quote className="mx-auto h-12 w-12 text-primary/50" />
           <blockquote className="mt-6 text-xl md:text-2xl font-medium text-foreground">
             {quote.quote}
           </blockquote>
           <p className="mt-4 text-base text-muted-foreground">- {quote.author}</p>
        </div>
      )}
       <div className="absolute bottom-10">
        <div className="h-5 w-5 rounded-full bg-primary animate-pulse"></div>
      </div>
    </div>
  );
};

export default SplashScreen;



"use client";

import { useState, useEffect } from 'react';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Sunrise, Sunset } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { Skeleton } from '@/components/ui/skeleton';

type Dhikr = {
  title: string;
  content: string;
  count: string;
  virtue: string;
};

type AdhkarCollection = {
  morning: Dhikr[];
  evening: Dhikr[];
};

const DhikrCard = ({ title, content, count, virtue }: Dhikr) => (
  <div className="p-4 bg-card rounded-lg border">
    <h3 className="font-bold text-lg mb-2 text-right">{title}</h3>
    <p className="text-base leading-relaxed rtl:font-serif text-right">{content}</p>
    <div className="mt-3 flex flex-wrap gap-2 text-sm">
      <span className="font-semibold py-1 px-2.5 rounded-full bg-secondary text-secondary-foreground">{count}</span>
      <span className="text-muted-foreground py-1 px-2.5 text-right">{virtue}</span>
    </div>
  </div>
);

const AdhkarSkeleton = () => (
    <div className="space-y-4 pt-4">
        {[...Array(5)].map((_, i) => (
            <div className="p-4 bg-card rounded-lg border" key={i}>
                <Skeleton className="h-6 w-1/2 mb-3" />
                <Skeleton className="h-4 w-full mb-1" />
                <Skeleton className="h-4 w-full mb-1" />
                <Skeleton className="h-4 w-3/4 mb-3" />
                <div className="flex gap-2">
                    <Skeleton className="h-7 w-20 rounded-full" />
                    <Skeleton className="h-7 w-48 rounded-full" />
                </div>
            </div>
        ))}
    </div>
);

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function AdhkarPage() {
  const { locale, t } = useLanguage();
  const [adhkar, setAdhkar] = useState<AdhkarCollection | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAdhkar = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${basePath}/data/adhkar/${locale}.json`);
        if (!response.ok) {
            // Fallback to English if the locale-specific file is not found
            const fallbackResponse = await fetch(`${basePath}/data/adhkar/en.json`);
            const data = await fallbackResponse.json();
            setAdhkar(data);
        } else {
            const data = await response.json();
            setAdhkar(data);
        }
      } catch (error) {
        console.error("Failed to load adhkar data, falling back to English", error);
        // Fallback to English on any error
        try {
            const fallbackResponse = await fetch(`${basePath}/data/adhkar/en.json`);
            const data = await fallbackResponse.json();
            setAdhkar(data);
        } catch (fallbackError) {
            console.error("Failed to load English fallback adhkar data", fallbackError);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchAdhkar();
  }, [locale]);

  return (
    <div className="container mx-auto p-4 md:p-8">
      <Tabs defaultValue="morning" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="morning">
            <div className="flex items-center gap-2">
              <Sunrise className="h-5 w-5" />
              <span>{t('adhkar.morning')}</span>
            </div>
          </TabsTrigger>
          <TabsTrigger value="evening">
            <div className="flex items-center gap-2">
              <Sunset className="h-5 w-5" />
              <span>{t('adhkar.evening')}</span>
            </div>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="morning">
          {loading || !adhkar ? <AdhkarSkeleton/> : (
            <div className="space-y-4 pt-4">
              {adhkar.morning.map((dhikr, index) => (
                <DhikrCard key={`morning-${index}`} {...dhikr} />
              ))}
            </div>
          )}
        </TabsContent>
        <TabsContent value="evening">
           {loading || !adhkar ? <AdhkarSkeleton/> : (
             <div className="space-y-4 pt-4">
                {adhkar.evening.map((dhikr, index) => (
                   <DhikrCard key={`evening-${index}`} {...dhikr} />
                ))}
              </div>
           )}
        </TabsContent>
      </Tabs>
    </div>
  );
}

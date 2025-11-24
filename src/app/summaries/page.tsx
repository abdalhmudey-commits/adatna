
"use client";

import { useState, useEffect } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BookCheck } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { Skeleton } from '@/components/ui/skeleton';

type BookSummary = {
  id: string;
  title: string;
  author: string;
  summary: string[];
};

const SummariesSkeleton = () => (
    <div className="space-y-2">
        {[...Array(8)].map((_, i) => (
            <div className="p-4 bg-card rounded-lg border flex items-center h-[58px]" key={i}>
                <Skeleton className="h-6 w-6 mr-3" />
                <Skeleton className="h-5 w-4/5" />
            </div>
        ))}
    </div>
);


export default function SummariesPage() {
  const { t, locale } = useLanguage();
  const [summaries, setSummaries] = useState<BookSummary[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSummaries = async () => {
        setLoading(true);
      try {
        const response = await fetch(`/data/summaries/${locale}.json`);
        if (!response.ok) {
            const fallbackResponse = await fetch(`/data/summaries/en.json`);
            const data = await fallbackResponse.json();
            setSummaries(data);
        } else {
            const data = await response.json();
            setSummaries(data);
        }
      } catch (error) {
        console.error("Failed to load summaries, falling back to English", error);
        try {
            const fallbackResponse = await fetch(`/data/summaries/en.json`);
            const data = await fallbackResponse.json();
            setSummaries(data);
        } catch (fallbackError) {
            console.error("Failed to load English fallback summaries", fallbackError);
        }
      } finally {
          setLoading(false);
      }
    };

    fetchSummaries();
  }, [locale]);

  return (
    <div className="container mx-auto p-4 md:p-8">
      <header className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">
          {t('summaries.title')}
        </h1>
        <p className="text-lg text-muted-foreground mt-2">
           {t('summaries.description')}
        </p>
      </header>

      <div className="max-w-4xl mx-auto">
        {loading ? <SummariesSkeleton /> : (
            <Accordion type="single" collapsible className="w-full">
            {summaries.map((book) => (
                <AccordionItem value={book.id} key={book.id}>
                <AccordionTrigger className="text-xl text-right font-semibold hover:no-underline">
                    <div className="flex items-center gap-3">
                        <BookCheck className="h-6 w-6 text-primary" />
                        <span>{book.title}</span>
                    </div>
                </AccordionTrigger>
                <AccordionContent className="px-2 pt-2">
                    <div className="space-y-4 text-base leading-relaxed text-muted-foreground rtl:text-right ltr:text-left">
                        {book.summary.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                        <p className="font-semibold text-foreground pt-2">{t('summaries.author')}: {book.author}</p>
                    </div>
                </AccordionContent>
                </AccordionItem>
            ))}
            </Accordion>
        )}
      </div>
    </div>
  );
}


"use client";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Sunrise, Sunset } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { adhkar } from "@/lib/adhkar";


const DhikrCard = ({ title, content, count, virtue }: { title: string, content: string, count: string, virtue: string }) => (
  <div className="p-4 bg-card rounded-lg border">
    <h3 className="font-bold text-lg mb-2 text-right">{title}</h3>
    <p className="text-base leading-relaxed rtl:font-serif text-right">{content}</p>
    <div className="mt-3 flex flex-wrap gap-2 text-sm">
      <span className="font-semibold py-1 px-2.5 rounded-full bg-secondary text-secondary-foreground">{count}</span>
      <span className="text-muted-foreground py-1 px-2.5 text-right">{virtue}</span>
    </div>
  </div>
);


export default function AdhkarPage() {
  const { locale, t } = useLanguage();
  const currentAdhkar = adhkar[locale] || adhkar.en;

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
          <div className="space-y-4 pt-4">
            {currentAdhkar.morning.map((dhikr, index) => (
              <DhikrCard key={`morning-${index}`} {...dhikr} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="evening">
           <div className="space-y-4 pt-4">
              {currentAdhkar.evening.map((dhikr, index) => (
                 <DhikrCard key={`evening-${index}`} {...dhikr} />
              ))}
            </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

"use client";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Sunrise, Sunset } from "lucide-react";

const morningAdhkar = [
    {
        title: "آية الكرسي",
        content: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ.",
        count: "مرة واحدة",
        virtue: "من قالها حين يصبح أجير من الجن حتى يمسي."
    },
    {
        title: "المعوذات",
        content: "قُلْ هُوَ اللَّهُ أَحَدٌ... / قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ... / قُلْ أَعُوذُ بِرَبِّ النَّاسِ...",
        count: "ثلاث مرات",
        virtue: "من قالها ثلاث مرات حين يصبح وحين يمسي كفته من كل شيء."
    },
    {
        title: "سيد الاستغفار",
        content: "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ لَكَ بِذَنْبِي فَاغْفِرْ لِي، فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ.",
        count: "مرة واحدة",
        virtue: "من قالها موقناً بها حين يصبح، فمات من يومه دخل الجنة."
    },
    {
        title: "دعاء شامل",
        content: "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ...",
        count: "مرة واحدة",
        virtue: "من أذكار الصباح المأثورة."
    }
];

const eveningAdhkar = [
    {
        title: "آية الكرسي",
        content: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ... (نفس الآية)",
        count: "مرة واحدة",
        virtue: "من قالها حين يمsi أجير من الجن حتى يصبح."
    },
    {
        title: "المعوذات",
        content: "قُلْ هُوَ اللَّهُ أَحَدٌ... / قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ... / قُلْ أَعُوذُ بِرَبِّ النَّاسِ...",
        count: "ثلاث مرات",
        virtue: "من قالها ثلاث مرات حين يصبح وحين يمسي كفته من كل شيء."
    },
    {
        title: "سيد الاستغفار",
        content: "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ... (نفس الدعاء)",
        count: "مرة واحدة",
        virtue: "من قالها موقناً بها حين يمسي، فمات من ليلته دخل الجنة."
    },
    {
        title: "دعاء شامل",
        content: "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ...",
        count: "مرة واحدة",
        virtue: "من أذكار المساء المأثورة."
    }
];

const DhikrCard = ({ title, content, count, virtue }: { title: string, content: string, count: string, virtue: string }) => (
  <div className="p-4 bg-card rounded-lg border">
    <h3 className="font-bold text-lg mb-2">{title}</h3>
    <p className="text-base leading-relaxed rtl:font-serif">{content}</p>
    <div className="mt-3 flex flex-wrap gap-2 text-sm">
      <span className="font-semibold py-1 px-2.5 rounded-full bg-secondary text-secondary-foreground">{count}</span>
      <span className="text-muted-foreground py-1 px-2.5">{virtue}</span>
    </div>
  </div>
);


export default function AdhkarPage() {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <header className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">الأذكار</h1>
        <p className="text-lg text-muted-foreground mt-2">حصن المسلم اليومي من أذكار الصباح والمساء</p>
      </header>

      <Tabs defaultValue="morning" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="morning">
            <div className="flex items-center gap-2">
              <Sunrise className="h-5 w-5" />
              <span>أذكار الصباح</span>
            </div>
          </TabsTrigger>
          <TabsTrigger value="evening">
            <div className="flex items-center gap-2">
              <Sunset className="h-5 w-5" />
              <span>أذكار المساء</span>
            </div>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="morning">
          <div className="space-y-4 pt-4">
            {morningAdhkar.map((dhikr, index) => (
              <DhikrCard key={`morning-${index}`} {...dhikr} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="evening">
           <div className="space-y-4 pt-4">
              {eveningAdhkar.map((dhikr, index) => (
                 <DhikrCard key={`evening-${index}`} {...dhikr} />
              ))}
            </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

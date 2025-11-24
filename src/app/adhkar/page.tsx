"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
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
        virtue: "من قالها حين يمسي أجير من الجن حتى يصبح."
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


export default function AdhkarPage() {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">الأذكار</h1>
        <p className="text-lg text-muted-foreground mt-2">حصن المسلم اليومي من أذكار الصباح والمساء</p>
      </header>

      <Accordion type="multiple" defaultValue={['morning', 'evening']} className="w-full">
        <AccordionItem value="morning">
          <AccordionTrigger className="text-xl font-bold text-primary hover:no-underline">
            <div className="flex items-center gap-3">
              <Sunrise className="h-6 w-6 text-accent" />
              <span>أذكار الصباح</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 pt-4">
              {morningAdhkar.map((dhikr, index) => (
                <div key={index} className="p-4 bg-card rounded-lg border">
                  <h3 className="font-bold text-lg mb-2">{dhikr.title}</h3>
                  <p className="text-base leading-relaxed rtl:font-serif">{dhikr.content}</p>
                  <div className="mt-3 flex flex-wrap gap-2 text-sm">
                    <span className="font-semibold py-1 px-2.5 rounded-full bg-secondary text-secondary-foreground">{dhikr.count}</span>
                    <span className="text-muted-foreground py-1 px-2.5">{dhikr.virtue}</span>
                  </div>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="evening">
          <AccordionTrigger className="text-xl font-bold text-primary hover:no-underline">
             <div className="flex items-center gap-3">
              <Sunset className="h-6 w-6 text-accent" />
              <span>أذكار المساء</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 pt-4">
              {eveningAdhkar.map((dhikr, index) => (
                <div key={index} className="p-4 bg-card rounded-lg border">
                  <h3 className="font-bold text-lg mb-2">{dhikr.title}</h3>
                  <p className="text-base leading-relaxed rtl:font-serif">{dhikr.content}</p>
                   <div className="mt-3 flex flex-wrap gap-2 text-sm">
                    <span className="font-semibold py-1 px-2.5 rounded-full bg-secondary text-secondary-foreground">{dhikr.count}</span>
                    <span className="text-muted-foreground py-1 px-2.5">{dhikr.virtue}</span>
                  </div>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

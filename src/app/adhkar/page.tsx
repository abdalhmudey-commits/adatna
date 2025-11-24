import { BookOpen } from "lucide-react";

export default function AdhkarPage() {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">الأذكار</h1>
        <p className="text-lg text-muted-foreground mt-2">قسم الأذكار قيد التطوير.</p>
      </header>
      <div className="text-center py-16 px-6 bg-card rounded-lg border-2 border-dashed">
        <BookOpen className="mx-auto h-12 w-12 text-muted-foreground" />
        <h3 className="mt-4 text-xl font-semibold">قريباً...</h3>
        <p className="mt-1 text-muted-foreground">نعمل حاليًا على إضافة مجموعة من الأذكار اليومية.</p>
      </div>
    </div>
  );
}

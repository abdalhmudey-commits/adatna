import { BarChart2 } from "lucide-react";

export default function SummariesPage() {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">ملخصات</h1>
        <p className="text-lg text-muted-foreground mt-2">قسم الملخصات قيد التطوير.</p>
      </header>
      <div className="text-center py-16 px-6 bg-card rounded-lg border-2 border-dashed">
        <BarChart2 className="mx-auto h-12 w-12 text-muted-foreground" />
        <h3 className="mt-4 text-xl font-semibold">قريباً...</h3>
        <p className="mt-1 text-muted-foreground">سيتم عرض ملخصات وإحصائيات عن عاداتك هنا.</p>
      </div>
    </div>
  );
}

"use client";

import { type Habit } from "@/lib/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Bell, Mic, Trash2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface HabitItemProps {
  habit: Habit;
  onDelete: (id: string) => void;
}

export default function HabitItem({ habit, onDelete }: HabitItemProps) {

  const getFrequencyText = () => {
    const unitMap = {
        seconds: 'ثوانٍ',
        minutes: 'دقائق',
        hours: 'ساعات',
        days: 'أيام',
    };
    return `كل ${habit.interval} ${unitMap[habit.intervalUnit]}`;
  }

  return (
    <Card className="transition-all hover:shadow-md">
      <CardHeader>
        <div className="flex justify-between items-start">
            <div>
                <CardTitle>{habit.name}</CardTitle>
                {habit.description && <CardDescription className="mt-1">{habit.description}</CardDescription>}
            </div>
            <AlertDialog>
                <AlertDialogTrigger asChild>
                    <Button variant="ghost" size="icon">
                        <Trash2 className="h-5 w-5 text-destructive" />
                    </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                    <AlertDialogTitle>هل أنت متأكد؟</AlertDialogTitle>
                    <AlertDialogDescription>
                        سيتم حذف هذه العادة بشكل دائم. لا يمكن التراجع عن هذا الإجراء وسيتم إيقاف جميع الإشعارات المتعلقة بها.
                    </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                    <AlertDialogCancel>إلغاء</AlertDialogCancel>
                    <AlertDialogAction onClick={() => onDelete(habit.id)} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
                        حذف
                    </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">"{habit.message}"</p>
      </CardContent>
      <CardFooter className="flex flex-wrap items-center gap-2">
        <Badge variant="secondary" className="flex items-center gap-2">
            {habit.reminderType === 'notification' ? <Bell className="h-3 w-3" /> : <Mic className="h-3 w-3" />}
            <span>{habit.reminderType === 'notification' ? 'إشعار نصي' : 'تنبيه صوتي'}</span>
        </Badge>
        <Badge variant="outline">{getFrequencyText()}</Badge>
      </CardFooter>
    </Card>
  );
}

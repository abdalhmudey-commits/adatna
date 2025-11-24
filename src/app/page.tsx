"use client";

import { useState, useEffect, useCallback } from 'react';
import { type Habit } from '@/lib/types';
import AddHabitForm from '@/components/habit/add-habit-form';
import HabitList from '@/components/habit/habit-list';
import { useToast } from "@/hooks/use-toast";
import { Smile } from 'lucide-react';

type ManagedHabit = Habit & { intervalId?: number };

const HABIT_STORAGE_KEY = 'habitual_habits';

export default function Home() {
  const [habits, setHabits] = useState<ManagedHabit[]>([]);
  const [isClient, setIsClient] = useState(false);
  const { toast } = useToast();

  const playAudio = (url: string) => {
    const audio = new Audio(url);
    audio.play().catch(e => console.error("Error playing audio:", e));
  };

  const showNotification = (title: string, body: string) => {
    if ('Notification' in window && Notification.permission === "granted") {
      new Notification(title, { body });
    }
  };

  const startNotificationInterval = useCallback((habit: Habit): number => {
    const { interval, intervalUnit, name, message, reminderType, audioBlobUrl } = habit;
    let intervalMs = 0;
    switch (intervalUnit) {
      case 'seconds':
        intervalMs = interval * 1000;
        break;
      case 'minutes':
        intervalMs = interval * 60 * 1000;
        break;
      case 'hours':
        intervalMs = interval * 60 * 60 * 1000;
        break;
      case 'days':
        intervalMs = interval * 24 * 60 * 60 * 1000;
        break;
    }

    const id = window.setInterval(() => {
      if (reminderType === 'audio' && audioBlobUrl) {
        playAudio(audioBlobUrl);
        toast({
            title: `حان وقت التنبيه الصوتي لـ: ${name}`,
            description: 'يتم الآن تشغيل تنبيهك الصوتي المخصص.',
        });
      } else {
        showNotification(name, message);
      }
    }, intervalMs);

    return id;
  }, [toast]);

  useEffect(() => {
    setIsClient(true);
    if ('Notification' in window && Notification.permission !== "granted" && Notification.permission !== "denied") {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          toast({ title: 'تمكين الإشعارات', description: 'يمكنك الآن تلقي إشعارات التذكير.' });
        } else {
          toast({ title: 'الإشعارات معطلة', description: 'لن تتمكن من تلقي تذكيرات نصية.', variant: 'destructive' });
        }
      });
    }

    const storedHabitsRaw = localStorage.getItem(HABIT_STORAGE_KEY);
    if (storedHabitsRaw) {
      try {
        const storedHabits: Habit[] = JSON.parse(storedHabitsRaw);
        const managedHabits = storedHabits.map(habit => ({
          ...habit,
          intervalId: startNotificationInterval(habit)
        }));
        setHabits(managedHabits);
      } catch (error) {
        console.error("Failed to parse habits from localStorage", error);
        localStorage.removeItem(HABIT_STORAGE_KEY);
      }
    }
  }, [startNotificationInterval, toast]);

  useEffect(() => {
    if (isClient) {
      const savableHabits = habits.map(({ intervalId, ...rest }) => rest);
      localStorage.setItem(HABIT_STORAGE_KEY, JSON.stringify(savableHabits));
    }
  }, [habits, isClient]);

  const addHabit = (newHabit: Habit) => {
    const intervalId = startNotificationInterval(newHabit);
    const managedHabit: ManagedHabit = { ...newHabit, intervalId };
    setHabits(prevHabits => [...prevHabits, managedHabit]);
    toast({
        title: "تم إضافة العادة بنجاح!",
        description: `سيتم تذكيرك بشأن "${newHabit.name}".`,
    });
  };

  const deleteHabit = (id: string) => {
    setHabits(prevHabits => {
      const habitToDelete = prevHabits.find(h => h.id === id);
      if (habitToDelete && habitToDelete.intervalId) {
        clearInterval(habitToDelete.intervalId);
      }
      return prevHabits.filter(h => h.id !== id);
    });
    toast({
        title: "تم حذف العادة",
        description: "تم إيقاف جميع التذكيرات لهذه العادة.",
    });
  };

  if (!isClient) {
    return null;
  }

  return (
    <div className="container mx-auto p-4 md:p-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">هاكر العادات</h1>
        <p className="text-lg text-muted-foreground mt-2">تحكم في عاداتك، تحكم في حياتك.</p>
      </header>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-1">
          <AddHabitForm onAddHabit={addHabit} />
        </div>
        <div className="lg:col-span-2">
            <h2 className="text-2xl font-headline font-semibold mb-4 border-b pb-2">قائمة عاداتك</h2>
            {habits.length > 0 ? (
                <HabitList habits={habits} onDeleteHabit={deleteHabit} />
            ) : (
                <div className="text-center py-16 px-6 bg-card rounded-lg border-2 border-dashed">
                    <Smile className="mx-auto h-12 w-12 text-muted-foreground" />
                    <h3 className="mt-4 text-xl font-semibold">القائمة فارغة</h3>
                    <p className="mt-1 text-muted-foreground">لم تقم بإضافة أي عادات بعد. ابدأ بإضافة واحدة!</p>
                </div>
            )}
        </div>
      </div>
    </div>
  );
}

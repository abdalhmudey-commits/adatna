
"use client";

import { useState, useEffect, useCallback, useContext } from 'react';
import { type Habit } from '@/lib/types';
import AddHabitForm from '@/components/habit/add-habit-form';
import HabitList from '@/components/habit/habit-list';
import { useToast } from "@/hooks/use-toast";
import { Smile } from 'lucide-react';
import { NotificationsContext } from '@/context/notifications-context';
import { useLanguage } from '@/context/language-context';
import { Skeleton } from '@/components/ui/skeleton';

type ManagedHabit = Habit & { intervalId?: number };

const HABIT_STORAGE_KEY = 'habitual_habits';

const HomePageSkeleton = () => (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-1">
            <div className="p-6 border rounded-lg bg-card">
                <Skeleton className="h-8 w-1/2 mb-6" />
                <div className="space-y-6">
                    <Skeleton className="h-4 w-1/3 mb-2" />
                    <Skeleton className="h-10 w-full" />
                    <Skeleton className="h-4 w-1/3 mb-2" />
                    <Skeleton className="h-20 w-full" />
                    <Skeleton className="h-10 w-full" />
                </div>
            </div>
        </div>
        <div className="lg:col-span-2">
            <Skeleton className="h-8 w-1/3 mb-4" />
            <div className="space-y-4">
                <Skeleton className="h-32 w-full" />
                <Skeleton className="h-32 w-full" />
            </div>
        </div>
    </div>
);


export default function Home() {
  const [habits, setHabits] = useState<ManagedHabit[]>([]);
  const [isClient, setIsClient] = useState(false);
  const { toast } = useToast();
  const { notificationsEnabled } = useContext(NotificationsContext);
  const { t } = useLanguage();

  const playAudio = useCallback((url: string) => {
    const audio = new Audio(url);
    audio.play().catch(e => console.error("Error playing audio:", e));
  }, []);

  const showNotification = useCallback((title: string, body: string) => {
    if ('Notification' in window && Notification.permission === "granted") {
      new Notification(title, { body });
    }
  }, []);

  const startNotificationInterval = useCallback((habit: Habit): number | undefined => {
    if (!notificationsEnabled) return undefined;

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

    if (intervalMs <= 0) return undefined;

    const id = window.setInterval(() => {
      if (reminderType === 'audio' && audioBlobUrl) {
        playAudio(audioBlobUrl);
        toast({
            title: `Time for audio alert for: ${name}`,
            description: 'Playing your custom audio alert now.',
        });
      } else {
        showNotification(name, message);
      }
    }, intervalMs);

    return id;
  }, [toast, notificationsEnabled, playAudio, showNotification]);

  const stopNotificationInterval = (intervalId?: number) => {
    if (intervalId) {
      clearInterval(intervalId);
    }
  };
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  // Effect to manage intervals when notificationsEnabled changes
  useEffect(() => {
    if (!isClient) return;

    setHabits(currentHabits => currentHabits.map(habit => {
        stopNotificationInterval(habit.intervalId); // Stop any existing interval
        const newIntervalId = notificationsEnabled ? startNotificationInterval(habit) : undefined;
        return {
          ...habit,
          intervalId: newIntervalId
        };
      }));
      // We don't want startNotificationInterval in the dependency array as it creates a new function on every render
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [notificationsEnabled, isClient]);

  useEffect(() => {
    if (!isClient) return;

    if ('Notification' in window && Notification.permission !== "granted" && Notification.permission !== "denied") {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          toast({ title: 'Notifications Enabled', description: 'You can now receive reminder notifications.' });
        } else {
          toast({ title: 'Notifications Disabled', description: 'You will not be able to receive text reminders.', variant: 'destructive' });
        }
      });
    }

    const storedHabitsRaw = localStorage.getItem(HABIT_STORAGE_KEY);
    if (storedHabitsRaw) {
      try {
        const storedHabits: Habit[] = JSON.parse(storedHabitsRaw);
        setHabits(storedHabits.map(h => ({
            ...h,
            intervalId: notificationsEnabled ? startNotificationInterval(h) : undefined
        })));
      } catch (error) {
        console.error("Failed to parse habits from localStorage", error);
        localStorage.removeItem(HABIT_STORAGE_KEY);
      }
    }
     // We only want to run this once on mount, with the correct initial `notificationsEnabled` state
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isClient, toast]);

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
        title: t('home.habitAddedSuccess'),
        description: t('home.habitAddedDescription', newHabit.name),
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
        title: t('home.habitDeletedSuccess'),
        description: t('home.habitDeletedDescription'),
    });
  };

  if (!isClient) {
    return (
        <div className="container mx-auto p-4 md:p-8">
            <HomePageSkeleton />
        </div>
    );
  }

  return (
    <div className="container mx-auto p-4 md:p-8">
       <header className="text-center mb-6">
       </header>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-1">
          <AddHabitForm onAddHabit={addHabit} />
        </div>
        <div className="lg:col-span-2">
            <h2 className="text-2xl font-headline font-semibold mb-4 border-b pb-2">{t('home.yourHabits')}</h2>
            {habits.length > 0 ? (
                <HabitList habits={habits} onDeleteHabit={deleteHabit} />
            ) : (
                <div className="text-center py-16 px-6 bg-card rounded-lg border-2 border-dashed">
                    <Smile className="mx-auto h-12 w-12 text-muted-foreground" />
                    <h3 className="mt-4 text-xl font-semibold">{t('home.emptyHabitsTitle')}</h3>
                    <p className="mt-1 text-muted-foreground">{t('home.emptyHabitsDescription')}</p>
                </div>
            )}
        </div>
      </div>
    </div>
  );
}

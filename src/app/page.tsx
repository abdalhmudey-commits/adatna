
"use client";

import { useState, useEffect, useCallback, useContext } from 'react';
import { type Habit } from '@/lib/types';
import AddHabitForm from '@/components/habit/add-habit-form';
import HabitList from '@/components/habit/habit-list';
import { useToast } from "@/hooks/use-toast";
import { Smile } from 'lucide-react';
import { NotificationsContext } from '@/context/notifications-context';
import { useLanguage } from '@/context/language-context';

type ManagedHabit = Habit & { intervalId?: number };

const HABIT_STORAGE_KEY = 'habitual_habits';

export default function Home() {
  const [habits, setHabits] = useState<ManagedHabit[]>([]);
  const [isClient, setIsClient] = useState(false);
  const { toast } = useToast();
  const { notificationsEnabled } = useContext(NotificationsContext);
  const { t } = useLanguage();

  const playAudio = (url: string) => {
    const audio = new Audio(url);
    audio.play().catch(e => console.error("Error playing audio:", e));
  };

  const showNotification = (title: string, body: string) => {
    if ('Notification' in window && Notification.permission === "granted") {
      new Notification(title, { body });
    }
  };

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
  }, [toast, notificationsEnabled]);

  const stopNotificationInterval = (intervalId?: number) => {
    if (intervalId) {
      clearInterval(intervalId);
    }
  };
  
  // Effect to manage intervals when notificationsEnabled changes
  useEffect(() => {
    if (!isClient) return;

    if (notificationsEnabled) {
      // Start intervals for all habits
      setHabits(currentHabits => currentHabits.map(habit => {
        // Clear any existing interval first
        stopNotificationInterval(habit.intervalId);
        return {
          ...habit,
          intervalId: startNotificationInterval(habit)
        };
      }));
    } else {
      // Stop all intervals
      setHabits(currentHabits => currentHabits.map(habit => {
        stopNotificationInterval(habit.intervalId);
        return { ...habit, intervalId: undefined };
      }));
    }
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [notificationsEnabled, isClient, startNotificationInterval]);

  useEffect(() => {
    setIsClient(true);
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
        // We defer starting the intervals until the notificationsEnabled effect runs
        setHabits(storedHabits.map(h => ({...h, intervalId: undefined})));
      } catch (error) {
        console.error("Failed to parse habits from localStorage", error);
        localStorage.removeItem(HABIT_STORAGE_KEY);
      }
    }
  }, [toast]);

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
    return null;
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

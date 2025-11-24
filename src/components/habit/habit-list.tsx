"use client";

import { type Habit } from "@/lib/types";
import HabitItem from "@/components/habit/habit-item";

interface HabitListProps {
  habits: Habit[];
  onDeleteHabit: (id: string) => void;
}

export default function HabitList({ habits, onDeleteHabit }: HabitListProps) {
  return (
    <div className="space-y-4">
      {habits.map((habit) => (
        <HabitItem key={habit.id} habit={habit} onDelete={onDeleteHabit} />
      ))}
    </div>
  );
}

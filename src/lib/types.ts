export type IntervalUnit = 'seconds' | 'minutes' | 'hours' | 'days';
export type ReminderType = 'notification' | 'audio';

export interface Habit {
  id: string;
  name: string;
  description?: string;
  message: string;
  interval: number;
  intervalUnit: IntervalUnit;
  reminderType: ReminderType;
  audioBlobUrl?: string;
}

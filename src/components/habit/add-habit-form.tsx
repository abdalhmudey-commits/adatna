
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { type Habit, type IntervalUnit, type ReminderType } from "@/lib/types";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mic, Square, Plus, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/context/language-context";

const formSchema = z.object({
  name: z.string().min(2, { message: "يجب أن يكون الاسم حرفين على الأقل." }),
  description: z.string().optional(),
  message: z.string().min(5, { message: "يجب أن تكون الرسالة 5 أحرف على الأقل." }),
  interval: z.coerce.number().min(1, { message: "يجب أن يكون الفاصل الزمني 1 على الأقل." }),
  intervalUnit: z.enum(['seconds', 'minutes', 'hours', 'days']),
  reminderType: z.enum(['notification', 'audio']),
});

interface AddHabitFormProps {
  onAddHabit: (habit: Habit) => void;
}

export default function AddHabitForm({ onAddHabit }: AddHabitFormProps) {
  const { t } = useLanguage();
  const [isRecording, setIsRecording] = useState(false);
  const [audioBlobUrl, setAudioBlobUrl] = useState<string | undefined>(undefined);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      message: "",
      interval: 5,
      intervalUnit: "minutes",
      reminderType: "notification",
    },
  });

  const reminderType = form.watch("reminderType");

  const handleStartRecording = async () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mediaRecorderRef.current = new MediaRecorder(stream);
        mediaRecorderRef.current.ondataavailable = (event) => {
          audioChunksRef.current.push(event.data);
        };
        mediaRecorderRef.current.onstop = () => {
          const audioBlob = new Blob(audioChunksRef.current, { type: mediaRecorderRef.current?.mimeType });
          const url = URL.createObjectURL(audioBlob);
          setAudioBlobUrl(url);
          audioChunksRef.current = [];
          stream.getTracks().forEach(track => track.stop());
        };
        audioChunksRef.current = [];
        mediaRecorderRef.current.start();
        setIsRecording(true);
        setAudioBlobUrl(undefined);
      } catch (err) {
        console.error("Error accessing microphone:", err);
        toast({
          title: t('home.micError'),
          description: t('home.micErrorDescription'),
          variant: "destructive",
        });
      }
    }
  };

  const handleStopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (values.reminderType === 'audio' && !audioBlobUrl) {
      form.setError("reminderType", {
        type: "manual",
        message: t('home.audioRecordingRequired'),
      });
      return;
    }

    const newHabit: Habit = {
      id: uuidv4(),
      ...values,
      intervalUnit: values.intervalUnit as IntervalUnit,
      reminderType: values.reminderType as ReminderType,
      audioBlobUrl: audioBlobUrl,
    };
    onAddHabit(newHabit);
    form.reset();
    setAudioBlobUrl(undefined);
  }

  useEffect(() => {
    return () => {
      if (audioBlobUrl) {
        URL.revokeObjectURL(audioBlobUrl);
      }
    };
  }, [audioBlobUrl]);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
            <Plus />
            {t('home.addHabit')}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('home.habitName')}</FormLabel>
                  <FormControl>
                    <Input placeholder={t('home.habitNamePlaceholder')} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('home.habitDescription')}</FormLabel>
                  <FormControl>
                    <Textarea placeholder={t('home.habitDescriptionPlaceholder')} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('home.reminderMessage')}</FormLabel>
                  <FormControl>
                    <Textarea placeholder={t('home.reminderMessagePlaceholder')} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormItem>
                <FormLabel>{t('home.reminderFrequency')}</FormLabel>
                <div className="flex items-center gap-2">
                    <span className="text-sm">{t('home.every')}</span>
                    <FormField
                    control={form.control}
                    name="interval"
                    render={({ field }) => (
                        <FormItem className="flex-1">
                        <FormControl>
                            <Input type="number" {...field} />
                        </FormControl>
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="intervalUnit"
                    render={({ field }) => (
                        <FormItem className="flex-1">
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                            <SelectTrigger>
                                <SelectValue placeholder={t('home.intervalUnit')} />
                            </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                                <SelectItem value="seconds">{t('home.seconds')}</SelectItem>
                                <SelectItem value="minutes">{t('home.minutes')}</SelectItem>
                                <SelectItem value="hours">{t('home.hours')}</SelectItem>
                                <SelectItem value="days">{t('home.days')}</SelectItem>
                            </SelectContent>
                        </Select>
                        </FormItem>
                    )}
                    />
                </div>
                <FormMessage>{form.formState.errors.interval?.message}</FormMessage>
            </FormItem>

            <FormField
              control={form.control}
              name="reminderType"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>{t('home.reminderType')}</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0 rtl:space-x-reverse">
                        <FormControl>
                          <RadioGroupItem value="notification" />
                        </FormControl>
                        <FormLabel className="font-normal">{t('home.notification')}</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0 rtl:space-x-reverse">
                        <FormControl>
                          <RadioGroupItem value="audio" />
                        </FormControl>
                        <FormLabel className="font-normal">{t('home.audio')}</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            {reminderType === 'audio' && (
                <div className="space-y-3 p-4 border rounded-lg bg-secondary/50">
                    <h4 className="font-medium">{t('home.recordAudio')}</h4>
                    <div className="flex items-center gap-4 flex-wrap">
                        {!isRecording ? (
                            <Button type="button" onClick={handleStartRecording} disabled={isRecording}>
                                <Mic className="mr-2 h-4 w-4" />
                                {t('home.record')}
                            </Button>
                        ) : (
                            <Button type="button" variant="destructive" onClick={handleStopRecording}>
                                <Square className="mr-2 h-4 w-4" />
                                {t('home.stop')}
                                <span className="ml-2 h-2 w-2 rounded-full bg-white animate-pulse"></span>
                            </Button>
                        )}
                        {audioBlobUrl && (
                            <div className="flex items-center gap-2">
                                <audio src={audioBlobUrl} controls className="h-10" />
                                <Button type="button" variant="ghost" size="icon" onClick={() => setAudioBlobUrl(undefined)}>
                                    <Trash2 className="h-4 w-4 text-destructive"/>
                                </Button>
                            </div>
                        )}
                    </div>
                     {form.formState.errors.reminderType && <p className="text-sm font-medium text-destructive">{form.formState.errors.reminderType.message}</p>}
                </div>
            )}

            <Button type="submit" className="w-full">
              <Plus className="mr-2 h-4 w-4" />
              {t('home.addHabitButton')}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

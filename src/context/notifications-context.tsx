"use client";

import React, { createContext, useState, useEffect } from 'react';

const NOTIFICATIONS_ENABLED_KEY = 'habitual_notifications_enabled';

interface NotificationsContextType {
  notificationsEnabled: boolean;
  setNotificationsEnabled: (enabled: boolean) => void;
}

export const NotificationsContext = createContext<NotificationsContextType>({
  notificationsEnabled: true,
  setNotificationsEnabled: () => {},
});

export const NotificationsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [notificationsEnabled, setNotificationsEnabledState] = useState<boolean>(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const storedValue = localStorage.getItem(NOTIFICATIONS_ENABLED_KEY);
    if (storedValue !== null) {
      setNotificationsEnabledState(JSON.parse(storedValue));
    }
  }, []);

  const setNotificationsEnabled = (enabled: boolean) => {
    setNotificationsEnabledState(enabled);
    if (isClient) {
      localStorage.setItem(NOTIFICATIONS_ENABLED_KEY, JSON.stringify(enabled));
    }
  };

  return (
    <NotificationsContext.Provider value={{ notificationsEnabled, setNotificationsEnabled }}>
      {children}
    </NotificationsContext.Provider>
  );
};

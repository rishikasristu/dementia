import React, { createContext, useContext, useState, useEffect } from 'react';
import { INITIAL_MEMORIES, INITIAL_REMINDERS, TRANSLATIONS } from '../types/data';
import { evaluatePerformance } from '../utils/personalizationEngine';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [userRole, setUserRole] = useState('elderly'); // 'elderly' | 'caregiver'
  const [currentView, setCurrentView] = useState('home'); // 'home' | 'album' | 'games' | 'reminders' | 'caregiver_dashboard'
  const [language, setLanguage] = useState('en'); // 'en' | 'te' | 'hi'
  const [activeGameType, setActiveGameType] = useState('memory'); // 'memory' | 'attention' | 'pattern'

  // Garden Growth & Activity Metrics
  const [completedCount, setCompletedCount] = useState(1);
  const [streakDays, setStreakDays] = useState(4);
  const [memories, setMemories] = useState(() => {
    const savedMemories = localStorage.getItem('memoryGardenMemories');

    if (savedMemories) {
      return JSON.parse(savedMemories);
    }

    return INITIAL_MEMORIES;
  });
  const [reminders, setReminders] = useState(INITIAL_REMINDERS);
  const [history, setHistory] = useState(() => {
    const savedHistory = localStorage.getItem('memoryGardenHistory');

    if (savedHistory) {
      return JSON.parse(savedHistory);
    }

    return [
      {
        gameId: 'mem1',
        isCorrect: true,
        timeTakenSeconds: 5,
        hintsUsed: 0,
        timestamp: Date.now() - 3600000
      }
    ];
  });
  // Offline-First State Simulator
  const [isOffline, setIsOffline] = useState(false);
  const [pendingSyncQueue, setPendingSyncQueue] = useState(() => {
    const savedQueue = localStorage.getItem('memoryGardenSyncQueue');

    if (savedQueue) {
      return JSON.parse(savedQueue);
    }

    return [];
  });
  const [lastSyncTime, setLastSyncTime] = useState('Just now');
  const [syncToast, setSyncToast] = useState(null);
  useEffect(() => {
    localStorage.setItem('memoryGardenHistory', JSON.stringify(history));
  }, [history]);
  useEffect(() => {
    localStorage.setItem(
      'memoryGardenMemories',
      JSON.stringify(memories)
    );
  }, [memories]);
  useEffect(() => {
    localStorage.setItem(
      'memoryGardenSyncQueue',
      JSON.stringify(pendingSyncQueue)
    );
  }, [pendingSyncQueue]);
  // Derived Garden Stage (0: Seedling, 1: Sprout, 2: Blossom, 3: Sanctuary Tree)
  const gardenStage = Math.min(Math.floor(completedCount / 1), 3);

  // Derived AI Personalization State
  const aiState = evaluatePerformance(history);

  // Translations shortcut helper
  const t = TRANSLATIONS[language] || TRANSLATIONS.en;

  // Toggle Reminder Completion (Works offline & syncs)
  const toggleReminder = (id) => {
    setReminders(prev => prev.map(r => {
      if (r.id === id) {
        const updated = { ...r, completed: !r.completed };
        if (isOffline) {
          setPendingSyncQueue(q => [...q, { type: 'TOGGLE_REMINDER', id, completed: updated.completed }]);
        }
        return updated;
      }
      return r;
    }));
  };

  // Add Memory (Caregiver action)
  const addMemory = (newMem) => {
    const memoryObj = {
      id: 'm_' + Date.now(),
      ...newMem,
      options: [newMem.name + ' (' + newMem.relation + ')', 'Family Relative', 'Neighbor']
    };
    setMemories(prev => [memoryObj, ...prev]);
    if (isOffline) {
      setPendingSyncQueue(q => [...q, { type: 'ADD_MEMORY', data: memoryObj }]);
    } else {
      setLastSyncTime('Just now');
    }
  };

  // Add Reminder (Caregiver action)
  const addReminder = (newRem) => {
    const reminderObj = {
      id: 'r_' + Date.now(),
      completed: false,
      icon: newRem.icon || '🔔',
      ...newRem
    };
    setReminders(prev => [...prev, reminderObj]);
    if (isOffline) {
      setPendingSyncQueue(q => [...q, { type: 'ADD_REMINDER', data: reminderObj }]);
    } else {
      setLastSyncTime('Just now');
    }
  };

  // Record Cognitive Activity Performance
  const recordActivity = (result) => {
    const logEntry = {
      ...result,
      timestamp: Date.now()
    };

    setHistory(prev => [...prev, logEntry]);
    
    if (result.isCorrect) {
      setCompletedCount(prev => prev + 1);
    }

    if (isOffline) {
      setPendingSyncQueue(q => [...q, { type: 'ACTIVITY_RESULT', data: logEntry }]);
    } else {
      setLastSyncTime('Just now');
    }
  };

  // Toggle Offline Connection Simulator
  const toggleOffline = () => {
    if (isOffline) {
      // Re-connecting online -> Trigger Auto Sync
      setIsOffline(false);
      if (pendingSyncQueue.length > 0) {
        setSyncToast(`Synced ${pendingSyncQueue.length} offline activities to Caregiver Dashboard!`);
        setPendingSyncQueue([]);
        setTimeout(() => setSyncToast(null), 4000);
      }
      setLastSyncTime('Just now');
    } else {
      setIsOffline(true);
    }
  };

  return (
    <AppContext.Provider value={{
      userRole,
      setUserRole,
      currentView,
      setCurrentView,
      language,
      setLanguage,
      activeGameType,
      setActiveGameType,
      completedCount,
      streakDays,
      gardenStage,
      memories,
      reminders,
      history,
      aiState,
      isOffline,
      toggleOffline,
      pendingSyncQueue,
      lastSyncTime,
      syncToast,
      toggleReminder,
      addMemory,
      addReminder,
      recordActivity,
      t
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);

import React, {
  createContext,
  useContext,
  useState
} from 'react';

import {
  INITIAL_MEMORIES,
  INITIAL_REMINDERS,
  TRANSLATIONS
} from '../types/data';

import {
  evaluatePerformance
} from '../utils/personalizationEngine';

const AppContext = createContext();

export const AppProvider = ({ children }) => {

  // User Settings
  const [userRole, setUserRole] = useState('elderly');

  const [currentView, setCurrentView] = useState('home');

  const [language, setLanguage] = useState('en');

  const [activeGameType, setActiveGameType] =
    useState('memory');


  // Activity Metrics
  const [completedCount, setCompletedCount] =
    useState(1);

  const [streakDays, setStreakDays] =
    useState(4);


  // Memories and Reminders
  const [memories, setMemories] =
    useState(INITIAL_MEMORIES);

  const [reminders, setReminders] =
    useState(INITIAL_REMINDERS);


  // Cognitive Game History
  const [history, setHistory] = useState([
    {
      gameId: 'mem1',
      gameType: 'memory',
      isCorrect: true,
      correctAnswers: 1,
      wrongAnswers: 0,
      accuracy: 100,
      timeTakenSeconds: 5,
      hintsUsed: 0,
      difficulty: 'Easy',
      timestamp: Date.now() - 3600000
    }
  ]);


  // Offline State
  const [isOffline, setIsOffline] =
    useState(false);

  const [pendingSyncQueue, setPendingSyncQueue] =
    useState([]);

  const [lastSyncTime, setLastSyncTime] =
    useState('Just now');

  const [syncToast, setSyncToast] =
    useState(null);


  // Garden Growth Stage
  const gardenStage =
    Math.min(Math.floor(completedCount / 1), 3);


  // AI Personalization
  const aiState =
    evaluatePerformance(history);


  // Translation Helper
  const t =
    TRANSLATIONS[language] || TRANSLATIONS.en;


  // Toggle Reminder
  const toggleReminder = (id) => {

    setReminders((prev) =>
      prev.map((reminder) => {

        if (reminder.id === id) {

          const updatedReminder = {
            ...reminder,
            completed: !reminder.completed
          };

          if (isOffline) {

            setPendingSyncQueue((queue) => [
              ...queue,
              {
                type: 'TOGGLE_REMINDER',
                id: id,
                completed: updatedReminder.completed
              }
            ]);

          }

          return updatedReminder;
        }

        return reminder;

      })
    );

  };


  // Add Memory
  const addMemory = (newMem) => {

    const memoryObj = {
      id: 'm_' + Date.now(),
      ...newMem,
      options: [
        newMem.name + ' (' + newMem.relation + ')',
        'Family Relative',
        'Neighbor'
      ]
    };

    setMemories((prev) => [
      memoryObj,
      ...prev
    ]);

    if (isOffline) {

      setPendingSyncQueue((queue) => [
        ...queue,
        {
          type: 'ADD_MEMORY',
          data: memoryObj
        }
      ]);

    } else {

      setLastSyncTime('Just now');

    }

  };


  // Add Reminder
  const addReminder = (newRem) => {

    const reminderObj = {
      id: 'r_' + Date.now(),
      completed: false,
      icon: newRem.icon || '🔔',
      ...newRem
    };

    setReminders((prev) => [
      ...prev,
      reminderObj
    ]);

    if (isOffline) {

      setPendingSyncQueue((queue) => [
        ...queue,
        {
          type: 'ADD_REMINDER',
          data: reminderObj
        }
      ]);

    } else {

      setLastSyncTime('Just now');

    }

  };


  // Record General Activity
  const recordActivity = (result) => {

    const logEntry = {
      ...result,
      timestamp: Date.now()
    };

    setHistory((prev) => [
      ...prev,
      logEntry
    ]);

    if (result.isCorrect) {

      setCompletedCount((prev) => prev + 1);

    }

    if (isOffline) {

      setPendingSyncQueue((queue) => [
        ...queue,
        {
          type: 'ACTIVITY_RESULT',
          data: logEntry
        }
      ]);

    } else {

      setLastSyncTime('Just now');

    }

  };


  // Record Game Result
  const recordGameResult = (result) => {

    const correct =
      result.correct ?? result.isCorrect ?? false;

    const responseTime =
      result.responseTime ??
      result.timeTakenSeconds ??
      0;

    const gameResult = {
      gameId: result.gameId || 'game_' + Date.now(),

      gameType:
        result.gameType || activeGameType,

      isCorrect: correct,

      correctAnswers:
        correct ? 1 : 0,

      wrongAnswers:
        correct ? 0 : 1,

      accuracy:
        correct ? 100 : 0,

      timeTakenSeconds:
        responseTime,

      hintsUsed:
        result.hintsUsed || 0,

      difficulty:
        aiState.difficulty || 'Easy',

      timestamp:
        Date.now()
    };

    setHistory((prev) => [
      ...prev,
      gameResult
    ]);

    if (correct) {

      setCompletedCount((prev) => prev + 1);

    }

    if (isOffline) {

      setPendingSyncQueue((queue) => [
        ...queue,
        {
          type: 'GAME_RESULT',
          data: gameResult
        }
      ]);

    } else {

      setLastSyncTime('Just now');

    }

  };


  // Toggle Offline Mode
  const toggleOffline = () => {

    if (isOffline) {

      setIsOffline(false);

      if (pendingSyncQueue.length > 0) {

        setSyncToast(
          `Synced ${pendingSyncQueue.length} offline activities to Caregiver Dashboard!`
        );

        setPendingSyncQueue([]);

        setTimeout(() => {

          setSyncToast(null);

        }, 4000);

      }

      setLastSyncTime('Just now');

    } else {

      setIsOffline(true);

    }

  };


  return (

    <AppContext.Provider
      value={{

        // User
        userRole,
        setUserRole,

        // Navigation
        currentView,
        setCurrentView,

        // Language
        language,
        setLanguage,

        // Games
        activeGameType,
        setActiveGameType,

        // Metrics
        completedCount,
        streakDays,
        gardenStage,

        // Data
        memories,
        reminders,
        history,

        // AI
        aiState,

        // Offline
        isOffline,
        toggleOffline,
        pendingSyncQueue,
        lastSyncTime,
        syncToast,

        // Actions
        toggleReminder,
        addMemory,
        addReminder,
        recordActivity,
        recordGameResult,

        // Translation
        t

      }}
    >

      {children}

    </AppContext.Provider>

  );

};


export const useApp = () =>
  useContext(AppContext);
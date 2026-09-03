import React from 'react';
import { useApp } from '../../context/AppContext';
import { PrivacyNotice } from '../privacy/PrivacyNotice';
import {
  HeartHandshake,
  Activity,
  Brain,
  Clock,
  Wifi,
  WifiOff,
  TrendingUp,
  User
} from 'lucide-react';

import { AlertPanel } from '../alerts/AlertPanel';
import { ReminderManager } from './ReminderManager';
import { PersonalMemoryManager } from './PersonalMemoryManager';

export const CaregiverDashboard = () => {
  const {
    memories,
    reminders,
    history,
    aiState,
    isOffline,
    lastSyncTime,
    completedCount,
    streakDays,
    addMemory,
    setCurrentView,
    setUserRole,
    t
  } = useApp();

  /* -------------------------------------------------
     TASK 2 - WEEKLY ACTIVITY SUMMARY
  ------------------------------------------------- */

  const weeklyActivity = [
    { day: 'Mon', count: 3 },
    { day: 'Tue', count: 5 },
    { day: 'Wed', count: 2 },
    { day: 'Thu', count: 4 },
    { day: 'Fri', count: 3 },
    { day: 'Sat', count: 1 },
    { day: 'Sun', count: 0 }
  ];

  const weeklyTotal = weeklyActivity.reduce(
    (total, item) => total + item.count,
    0
  );

  const activeDays = weeklyActivity.filter(
    (item) => item.count > 0
  ).length;

  const maxWeeklyActivity = Math.max(
    ...weeklyActivity.map((item) => item.count),
    1
  );

  /* -------------------------------------------------
     TASK 3 - GAME PERFORMANCE
  ------------------------------------------------- */

  const gamePerformance = [
    {
      name: 'Memory',
      accuracy: 90,
      icon: '🧠'
    },
    {
      name: 'Attention',
      accuracy: 85,
      icon: '🎯'
    },
    {
      name: 'Pattern',
      accuracy: 75,
      icon: '🧩'
    }
  ];

  const totalSessions = history.length;

  const correctSessions = history.filter(
    (item) => item.isCorrect
  ).length;

  const attemptedSessions =
    totalSessions - correctSessions;

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 space-y-6">

      {/* =================================================
          CAREGIVER HEADER
      ================================================= */}

      <div className="bg-forest text-cream p-6 md:p-8 rounded-3xl border-2 border-sage/40 shadow-photo flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden">

        <div className="absolute top-0 right-0 w-64 h-64 bg-sage/10 rounded-full blur-2xl pointer-events-none" />

        <div className="flex items-center gap-5">

          <div className="w-16 h-16 rounded-2xl bg-cream/10 border-2 border-gold/40 flex items-center justify-center text-3xl font-bold text-gold">
            👵
          </div>

          <div>

            <div className="flex items-center gap-2">

              <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Lakshmi Syagamreddy
              </h1>

              <span className="bg-cream/15 text-cream text-xs px-3 py-1 rounded-full border border-cream/20 font-bold">
                Age 74
              </span>

            </div>

            <p className="text-sm text-cream/80 font-medium mt-1">
              Caregiver Support Portal • Primary Caregiver:
              Ramesh (Family)
            </p>

          </div>
        </div>

        {/* Sync Status */}

        <div className="flex items-center gap-4 bg-forest-dark px-4 py-2.5 rounded-2xl border border-sage/30">

          <div className="flex items-center gap-2 text-xs">

            {isOffline ? (
              <WifiOff className="w-4 h-4 text-terracotta animate-pulse" />
            ) : (
              <Wifi className="w-4 h-4 text-emerald-400" />
            )}

            <div>

              <p className="font-bold text-cream">
                {isOffline
                  ? 'Offline Mode'
                  : 'Cloud Sync Active'}
              </p>

              <p className="text-cream/60 text-[10px]">
                {isOffline
                  ? 'Saving changes on device'
                  : `Synced ${lastSyncTime}`}
              </p>

            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">

  <button
    onClick={() => {
      setUserRole('healthcare_worker');
      setCurrentView('healthcare_dashboard');
    }}
    className="px-3.5 py-1.5 bg-sage text-forest hover:bg-sage-light rounded-xl font-bold text-xs shadow-sm transition-all"
  >
    Healthcare View 🧑‍⚕️
  </button>

  <button
    onClick={() => {
      setUserRole('elderly');
      setCurrentView('home');
    }}
    className="px-3.5 py-1.5 bg-gold text-forest hover:bg-gold-light rounded-xl font-bold text-xs shadow-sm transition-all"
  >
    Go to Elderly UI 🌿
  </button>

</div>
        </div>
      </div>


      {/* =================================================
          TASK 4 - ALERT SYSTEM
      ================================================= */}

      <AlertPanel />


      {/* =================================================
          TASK 1 - PATIENT PROFILE
      ================================================= */}

      <div className="bg-cream-light p-6 rounded-3xl border-2 border-sage/40 shadow-photo">

        <div className="flex items-center gap-3 mb-5">

          <div className="w-11 h-11 rounded-xl bg-forest/10 text-forest flex items-center justify-center">
            <User className="w-6 h-6" />
          </div>

          <div>

            <h2 className="text-xl font-extrabold text-forest">
              Patient Profile
            </h2>

            <p className="text-xs text-ink/70 mt-1">
              Basic patient and caregiver information
            </p>

          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          <div className="bg-cream p-4 rounded-2xl border border-sage/30">

            <p className="text-xs font-bold text-ink/60 uppercase tracking-wider">
              Patient
            </p>

            <p className="text-lg font-extrabold text-forest mt-1">
              Lakshmi Syagamreddy
            </p>

            <p className="text-xs text-ink/70 mt-1">
              Age 74
            </p>

          </div>


          <div className="bg-cream p-4 rounded-2xl border border-sage/30">

            <p className="text-xs font-bold text-ink/60 uppercase tracking-wider">
              Primary Caregiver
            </p>

            <p className="text-lg font-extrabold text-forest mt-1">
              Ramesh
            </p>

            <p className="text-xs text-ink/70 mt-1">
              Family
            </p>

          </div>


          <div className="bg-cream p-4 rounded-2xl border border-sage/30">

            <p className="text-xs font-bold text-ink/60 uppercase tracking-wider">
              Personal Memories
            </p>

            <p className="text-lg font-extrabold text-forest mt-1">
              {memories.length}
            </p>

            <p className="text-xs text-ink/70 mt-1">
              Memories in album
            </p>

          </div>

        </div>
      </div>


      {/* =================================================
          TOP METRICS
      ================================================= */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

        {/* Activities */}

        <div className="bg-cream-light p-5 rounded-2xl border border-sage/40 shadow-sm flex items-center gap-4">

          <div className="w-12 h-12 rounded-xl bg-sage/20 text-forest flex items-center justify-center text-2xl">
            🌱
          </div>

          <div>

            <p className="text-xs font-bold text-ink/70 uppercase tracking-wider">
              Garden Growth
            </p>

            <p className="text-2xl font-extrabold text-forest">
              {completedCount} Activities
            </p>

            <p className="text-xs text-forest/80 font-bold">
              {streakDays} Day Active Streak
            </p>

          </div>
        </div>


        {/* Cognitive Accuracy */}

        <div className="bg-cream-light p-5 rounded-2xl border border-sage/40 shadow-sm flex items-center gap-4">

          <div className="w-12 h-12 rounded-xl bg-gold/20 text-forest flex items-center justify-center text-2xl">
            🎯
          </div>

          <div>

            <p className="text-xs font-bold text-ink/70 uppercase tracking-wider">
              Puzzle Accuracy
            </p>

            <p className="text-2xl font-extrabold text-forest">
              {aiState.accuracyRate || 85}% Rate
            </p>

            <p className="text-xs text-forest/80 font-bold">
              Avg {aiState.avgResponseTime || 5}s Response
            </p>

          </div>
        </div>


        {/* AI Personalization */}

        <div className="bg-cream-light p-5 rounded-2xl border border-sage/40 shadow-sm flex items-center gap-4">

          <div className="w-12 h-12 rounded-xl bg-forest/10 text-forest flex items-center justify-center text-2xl">
            🌿
          </div>

          <div>

            <p className="text-xs font-bold text-ink/70 uppercase tracking-wider">
              AI Personalization
            </p>

            <p className="text-2xl font-extrabold text-forest">
              {aiState.difficulty}
            </p>

            <p className="text-xs text-forest/80 font-bold">
              {aiState.maxChoices} Choice Grid
            </p>

          </div>
        </div>


        {/* Family Memories */}

        <div className="bg-cream-light p-5 rounded-2xl border border-sage/40 shadow-sm flex items-center gap-4">

          <div className="w-12 h-12 rounded-xl bg-terracotta/20 text-terracotta flex items-center justify-center text-2xl">
            🖼
          </div>

          <div>

            <p className="text-xs font-bold text-ink/70 uppercase tracking-wider">
              Family Photos
            </p>

            <p className="text-2xl font-extrabold text-forest">
              {memories.length} Memories
            </p>

            <p className="text-xs text-terracotta-dark font-bold">
              Active Album
            </p>

          </div>
        </div>

      </div>


      {/* =================================================
          TASK 2 - WEEKLY ACTIVITY SUMMARY
      ================================================= */}

      <div className="bg-cream-light p-6 rounded-3xl border-2 border-sage/40 shadow-photo space-y-5">

        <div className="flex items-center justify-between">

          <div>

            <h2 className="text-xl font-extrabold text-forest flex items-center gap-2">
              <Activity className="w-5 h-5 text-forest" />
              Weekly Activity Summary
            </h2>

            <p className="text-xs text-ink/70 mt-1">
              Overview of cognitive and daily activity
            </p>

          </div>

          <span className="bg-sage/20 text-forest text-xs font-bold px-3 py-1 rounded-full border border-sage/30">
            7 Days
          </span>

        </div>


        {/* Summary cards */}

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">

          <div className="bg-cream p-4 rounded-2xl border border-sage/30">

            <p className="text-xs font-bold text-ink/60 uppercase">
              Activities Completed
            </p>

            <p className="text-2xl font-extrabold text-forest mt-1">
              {weeklyTotal}
            </p>

          </div>


          <div className="bg-cream p-4 rounded-2xl border border-sage/30">

            <p className="text-xs font-bold text-ink/60 uppercase">
              Active Days
            </p>

            <p className="text-2xl font-extrabold text-forest mt-1">
              {activeDays}/7
            </p>

          </div>


          <div className="bg-cream p-4 rounded-2xl border border-sage/30">

            <p className="text-xs font-bold text-ink/60 uppercase">
              Current Streak
            </p>

            <p className="text-2xl font-extrabold text-forest mt-1">
              {streakDays} Days
            </p>

          </div>

        </div>


        {/* Weekly bars */}

        <div className="flex items-end justify-between gap-2 h-40 pt-4">

          {weeklyActivity.map((item) => {

            const height =
              (item.count / maxWeeklyActivity) * 100;

            return (
              <div
                key={item.day}
                className="flex-1 flex flex-col items-center justify-end h-full gap-2"
              >

                <span className="text-[10px] font-bold text-forest">
                  {item.count}
                </span>

                <div className="w-full max-w-8 bg-cream-dark rounded-t-xl h-full flex items-end overflow-hidden">

                  <div
                    className="w-full bg-forest rounded-t-xl transition-all"
                    style={{
                      height: `${height}%`
                    }}
                  />

                </div>

                <span className="text-[10px] font-bold text-ink/60">
                  {item.day}
                </span>

              </div>
            );

          })}

        </div>


        <div className="p-3 bg-sage/10 border border-sage/30 rounded-2xl">

          <p className="text-xs text-ink/70 leading-relaxed">
            🌿 This summary is intended to help caregivers
            understand activity patterns. It is not a medical
            assessment or diagnosis.
          </p>

        </div>

      </div>


      {/* =================================================
          TASK 3 - GAME PERFORMANCE + COGNITIVE TRENDS
      ================================================= */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Cognitive Trends */}

        <div className="bg-cream-light p-6 rounded-3xl border-2 border-sage/40 shadow-photo space-y-5">

          <div>

            <h2 className="text-xl font-extrabold text-forest flex items-center gap-2">
              <Brain className="w-5 h-5 text-terracotta" />
              Cognitive Trends
            </h2>

            <p className="text-xs text-ink/70 mt-1">
              Recent performance across cognitive activities
            </p>

          </div>


          <div className="space-y-4">

            {gamePerformance.map((game, index) => (

              <div key={game.name}>

                <div className="flex justify-between items-center mb-1">

                  <span className="text-xs font-bold text-ink flex items-center gap-2">
                    <span>{game.icon}</span>
                    {game.name}
                  </span>

                  <span className="text-xs font-extrabold text-forest">
                    {game.accuracy}%
                  </span>

                </div>

                <div className="w-full h-3 bg-cream-dark rounded-full overflow-hidden">

                  <div
                    className={`h-full rounded-full ${
                      index === 0
                        ? 'bg-forest'
                        : index === 1
                        ? 'bg-terracotta'
                        : 'bg-gold-dark'
                    }`}
                    style={{
                      width: `${game.accuracy}%`
                    }}
                  />

                </div>

              </div>

            ))}

          </div>


          <div className="p-3 bg-sage/10 border border-sage/30 rounded-2xl">

            <p className="text-xs text-ink/70 leading-relaxed">
              These percentages represent game performance
              trends only and should not be interpreted as a
              medical diagnosis.
            </p>

          </div>

        </div>


        {/* Game Performance */}

        <div className="bg-cream-light p-6 rounded-3xl border-2 border-sage/40 shadow-photo space-y-5">

          <div>

            <h2 className="text-xl font-extrabold text-forest flex items-center gap-2">
              <HeartHandshake className="w-5 h-5 text-forest" />
              Game Performance
            </h2>

            <p className="text-xs text-ink/70 mt-1">
              Summary of recent cognitive game sessions
            </p>

          </div>


          <div className="grid grid-cols-3 gap-3">

            <div className="bg-cream p-4 rounded-2xl border border-sage/30 text-center">

              <p className="text-[10px] font-bold text-ink/60 uppercase">
                Sessions
              </p>

              <p className="text-2xl font-extrabold text-forest mt-1">
                {totalSessions}
              </p>

            </div>


            <div className="bg-cream p-4 rounded-2xl border border-sage/30 text-center">

              <p className="text-[10px] font-bold text-ink/60 uppercase">
                Correct
              </p>

              <p className="text-2xl font-extrabold text-forest mt-1">
                {correctSessions}
              </p>

            </div>


            <div className="bg-cream p-4 rounded-2xl border border-sage/30 text-center">

              <p className="text-[10px] font-bold text-ink/60 uppercase">
                Needs Review
              </p>

              <p className="text-2xl font-extrabold text-terracotta mt-1">
                {attemptedSessions}
              </p>

            </div>

          </div>


          <div className="space-y-3">

            {gamePerformance.map((game) => (

              <div
                key={game.name}
                className="flex items-center justify-between p-3 bg-cream rounded-2xl border border-sage/30"
              >

                <div className="flex items-center gap-3">

                  <div className="w-10 h-10 rounded-xl bg-sage/15 flex items-center justify-center text-lg">
                    {game.icon}
                  </div>

                  <div>

                    <p className="text-sm font-extrabold text-forest">
                      {game.name} Game
                    </p>

                    <p className="text-xs text-ink/60">
                      Recent accuracy
                    </p>

                  </div>

                </div>

                <span className="text-sm font-extrabold text-forest">
                  {game.accuracy}%
                </span>

              </div>

            ))}

          </div>

        </div>

      </div>


      {/* =================================================
          RECENT ACTIVITY LOG
      ================================================= */}

      <div className="bg-cream-light p-6 rounded-3xl border-2 border-sage/40 shadow-photo space-y-4">

        <div>

          <h2 className="text-xl font-extrabold text-forest flex items-center gap-2">
            <Clock className="w-5 h-5 text-forest" />
            Recent Activity Log
          </h2>

          <p className="text-xs text-ink/70 mt-1">
            Recent cognitive activity sessions
          </p>

        </div>


        <div className="space-y-3">

          {history.length > 0 ? (

            history.map((h, i) => (

              <div
                key={i}
                className="flex items-center justify-between p-3.5 bg-cream rounded-2xl border border-sage/30"
              >

                <div className="flex items-center gap-3">

                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                      h.isCorrect
                        ? 'bg-sage text-forest'
                        : 'bg-terracotta/20 text-terracotta'
                    }`}
                  >
                    {h.isCorrect ? '✓' : '•'}
                  </div>

                  <div>

                    <p className="text-sm font-bold text-forest uppercase">
                      {h.gameType} Puzzle
                    </p>

                    <p className="text-xs text-ink/70">
                      Response time: {h.timeTakenSeconds}s
                      {' • '}
                      Hints: {h.hintsUsed}
                    </p>

                  </div>

                </div>

                <span className="text-xs font-bold text-forest/70">
                  {h.isCorrect
                    ? 'Completed'
                    : 'Attempted'}
                </span>

              </div>

            ))

          ) : (

            <div className="text-center py-8">

              <Activity className="w-8 h-8 mx-auto text-sage" />

              <p className="text-sm font-bold text-forest mt-2">
                No recent activity
              </p>

              <p className="text-xs text-ink/60 mt-1">
                Activity sessions will appear here.
              </p>

            </div>

          )}

        </div>

      </div>


      {/* =================================================
          TASK 6 - PERSONAL MEMORY MANAGEMENT
      ================================================= */}

      <PersonalMemoryManager
        memories={memories}
        addMemory={addMemory}
      />


      {/* =================================================
          TASK 5 - REMINDER MANAGER
      ================================================= */}

      <ReminderManager
        reminders={reminders}
      />


      {/* =================================================
          PRIVACY NOTICE
      ================================================= */}

     

      {/* =================================================
    PRIVACY NOTICE
================================================= */}

<div className="bg-cream-light p-5 rounded-3xl border-2 border-sage/40 shadow-photo">

  <div className="flex items-start gap-3">

    <div className="w-10 h-10 rounded-xl bg-forest/10 text-forest flex items-center justify-center shrink-0">
      🔒
    </div>

    <div>

      <h2 className="text-sm font-extrabold text-forest">
        Privacy & Data Awareness
      </h2>

      <p className="text-xs text-ink/70 mt-1 leading-relaxed">
        Patient memories, activity information and
        caregiver-entered details are intended for
        authorized caregiver use. Healthcare-worker access
        should remain read-only where applicable.
      </p>

      <p className="text-[10px] text-forest/70 font-bold mt-2">
        Memory Garden supports monitoring and
        personalization; it does not provide medical
        diagnosis.
      </p>

    </div>

  </div>

</div>

    </div>
  );
};
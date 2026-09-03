import React from 'react';
import {
  Activity,
  Brain,
  Clock,
  TrendingUp,
  User,
  ShieldCheck
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const HealthcareDashboard = () => {
  const {
    history,
    aiState,
    completedCount,
    streakDays,
    memories
  } = useApp();

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

  const maxActivity = Math.max(
    ...weeklyActivity.map((item) => item.count),
    1
  );

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

  const correctSessions = history.filter(
    (item) => item.isCorrect
  ).length;

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 space-y-6">

      {/* Header */}

      <div className="bg-forest text-cream p-6 md:p-8 rounded-3xl border-2 border-sage/40 shadow-photo">

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">

          <div className="flex items-center gap-4">

            <div className="w-14 h-14 rounded-2xl bg-cream/10 border-2 border-gold/40 flex items-center justify-center">
              🧑‍⚕️
            </div>

            <div>

              <h1 className="text-2xl md:text-3xl font-extrabold">
                Healthcare Worker View
              </h1>

              <p className="text-sm text-cream/75 mt-1">
                Read-only patient activity and cognitive trends
              </p>

            </div>

          </div>

          <div className="flex items-center gap-2 bg-cream/10 px-4 py-2.5 rounded-xl border border-cream/20">

            <ShieldCheck className="w-5 h-5 text-gold" />

            <span className="text-xs font-bold">
              Read-Only Access
            </span>

          </div>

        </div>

      </div>


      {/* Patient Profile */}

      <div className="bg-cream-light p-6 rounded-3xl border-2 border-sage/40 shadow-photo">

        <div className="flex items-center gap-3 mb-5">

          <div className="w-11 h-11 rounded-xl bg-forest/10 text-forest flex items-center justify-center">
            <User className="w-6 h-6" />
          </div>

          <div>

            <h2 className="text-xl font-extrabold text-forest">
              Patient Information
            </h2>

            <p className="text-xs text-ink/70 mt-1">
              Information available for monitoring
            </p>

          </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          <div className="bg-cream p-4 rounded-2xl border border-sage/30">

            <p className="text-xs font-bold text-ink/60 uppercase">
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

            <p className="text-xs font-bold text-ink/60 uppercase">
              Activities
            </p>

            <p className="text-lg font-extrabold text-forest mt-1">
              {completedCount}
            </p>

            <p className="text-xs text-ink/70 mt-1">
              Completed activities
            </p>

          </div>

          <div className="bg-cream p-4 rounded-2xl border border-sage/30">

            <p className="text-xs font-bold text-ink/60 uppercase">
              Memories
            </p>

            <p className="text-lg font-extrabold text-forest mt-1">
              {memories.length}
            </p>

            <p className="text-xs text-ink/70 mt-1">
              Personal memories
            </p>

          </div>

        </div>

      </div>


      {/* Weekly Activity */}

      <div className="bg-cream-light p-6 rounded-3xl border-2 border-sage/40 shadow-photo space-y-5">

        <div>

          <h2 className="text-xl font-extrabold text-forest flex items-center gap-2">
            <Activity className="w-5 h-5" />
            Weekly Activity
          </h2>

          <p className="text-xs text-ink/70 mt-1">
            Read-only overview of recorded activity
          </p>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">

          <div className="bg-cream p-4 rounded-2xl border border-sage/30">

            <p className="text-xs font-bold text-ink/60 uppercase">
              Weekly Activities
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


        <div className="flex items-end gap-2 h-36">

          {weeklyActivity.map((item) => {

            const height =
              (item.count / maxActivity) * 100;

            return (
              <div
                key={item.day}
                className="flex-1 h-full flex flex-col items-center justify-end gap-1"
              >

                <span className="text-[10px] font-bold text-forest">
                  {item.count}
                </span>

                <div className="w-full max-w-8 h-full bg-cream-dark rounded-t-xl flex items-end overflow-hidden">

                  <div
                    className="w-full bg-forest rounded-t-xl"
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

      </div>


      {/* Cognitive Trends */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        <div className="bg-cream-light p-6 rounded-3xl border-2 border-sage/40 shadow-photo space-y-5">

          <div>

            <h2 className="text-xl font-extrabold text-forest flex items-center gap-2">
              <Brain className="w-5 h-5" />
              Cognitive Activity Trends
            </h2>

            <p className="text-xs text-ink/70 mt-1">
              Recorded game performance trends
            </p>

          </div>

          <div className="space-y-4">

            {gamePerformance.map((game) => (

              <div key={game.name}>

                <div className="flex justify-between mb-1">

                  <span className="text-xs font-bold text-ink">
                    {game.icon} {game.name}
                  </span>

                  <span className="text-xs font-extrabold text-forest">
                    {game.accuracy}%
                  </span>

                </div>

                <div className="w-full h-3 bg-cream-dark rounded-full overflow-hidden">

                  <div
                    className="h-full bg-forest rounded-full"
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
              These trends describe recorded activity and game
              performance only. They are not a medical diagnosis.
            </p>

          </div>

        </div>


        {/* Game Statistics */}

        <div className="bg-cream-light p-6 rounded-3xl border-2 border-sage/40 shadow-photo space-y-5">

          <div>

            <h2 className="text-xl font-extrabold text-forest flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Game Statistics
            </h2>

            <p className="text-xs text-ink/70 mt-1">
              Read-only session statistics
            </p>

          </div>

          <div className="grid grid-cols-2 gap-3">

            <div className="bg-cream p-4 rounded-2xl border border-sage/30">

              <p className="text-xs font-bold text-ink/60 uppercase">
                Total Sessions
              </p>

              <p className="text-2xl font-extrabold text-forest mt-1">
                {history.length}
              </p>

            </div>

            <div className="bg-cream p-4 rounded-2xl border border-sage/30">

              <p className="text-xs font-bold text-ink/60 uppercase">
                Correct
              </p>

              <p className="text-2xl font-extrabold text-forest mt-1">
                {correctSessions}
              </p>

            </div>

            <div className="bg-cream p-4 rounded-2xl border border-sage/30">

              <p className="text-xs font-bold text-ink/60 uppercase">
                Accuracy
              </p>

              <p className="text-2xl font-extrabold text-forest mt-1">
                {aiState.accuracyRate || 85}%
              </p>

            </div>

            <div className="bg-cream p-4 rounded-2xl border border-sage/30">

              <p className="text-xs font-bold text-ink/60 uppercase">
                Avg Response
              </p>

              <p className="text-2xl font-extrabold text-forest mt-1">
                {aiState.avgResponseTime || 5}s
              </p>

            </div>

          </div>

        </div>

      </div>


      {/* Activity History */}

      <div className="bg-cream-light p-6 rounded-3xl border-2 border-sage/40 shadow-photo space-y-4">

        <div>

          <h2 className="text-xl font-extrabold text-forest flex items-center gap-2">
            <Clock className="w-5 h-5" />
            Activity History
          </h2>

          <p className="text-xs text-ink/70 mt-1">
            Read-only record of recent sessions
          </p>

        </div>

        <div className="space-y-3">

          {history.length > 0 ? (

            history.map((item, index) => (

              <div
                key={index}
                className="flex items-center justify-between p-4 bg-cream rounded-2xl border border-sage/30"
              >

                <div>

                  <p className="text-sm font-extrabold text-forest uppercase">
                    {item.gameType} Puzzle
                  </p>

                  <p className="text-xs text-ink/70 mt-1">
                    Response time: {item.timeTakenSeconds}s
                    {' • '}
                    Hints: {item.hintsUsed}
                  </p>

                </div>

                <span
                  className={`text-xs font-bold px-3 py-1 rounded-full ${
                    item.isCorrect
                      ? 'bg-sage text-forest'
                      : 'bg-terracotta/15 text-terracotta'
                  }`}
                >
                  {item.isCorrect
                    ? 'Completed'
                    : 'Attempted'}
                </span>

              </div>

            ))

          ) : (

            <p className="text-sm text-ink/60 text-center py-5">
              No activity history available.
            </p>

          )}

        </div>

      </div>


     {/* =================================================
    TASK 11 - PRIVACY & READ-ONLY PERMISSIONS
================================================= */}

<div className="bg-sage/10 border-2 border-sage/30 p-5 rounded-3xl space-y-4">

  <div className="flex items-start gap-3">

    <ShieldCheck className="w-6 h-6 text-forest shrink-0" />

    <div>

      <h3 className="text-sm font-extrabold text-forest">
        Privacy & Read-Only Permissions
      </h3>

      <p className="text-xs text-ink/70 mt-1 leading-relaxed">
        This healthcare worker view is restricted to monitoring
        patient activity and cognitive performance information.
      </p>

    </div>

  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">

    <div className="bg-cream-light p-4 rounded-2xl border border-sage/30">
      <p className="text-xs font-extrabold text-forest">
        👁️ View
      </p>
      <p className="text-[11px] text-ink/70 mt-1">
        Activity history, weekly trends and game performance.
      </p>
    </div>

    <div className="bg-cream-light p-4 rounded-2xl border border-sage/30">
      <p className="text-xs font-extrabold text-forest">
        🔒 No Editing
      </p>
      <p className="text-[11px] text-ink/70 mt-1">
        Cannot modify memories, reminders or caregiver settings.
      </p>
    </div>

    <div className="bg-cream-light p-4 rounded-2xl border border-sage/30">
      <p className="text-xs font-extrabold text-forest">
        🛡️ Privacy
      </p>
      <p className="text-[11px] text-ink/70 mt-1">
        Patient information is displayed only for authorized monitoring.
      </p>
    </div>

  </div>

  <div className="p-3 bg-cream-light border border-sage/30 rounded-2xl">
    <p className="text-xs text-ink/70 leading-relaxed">
      ⚠️ The information shown here describes recorded activity and
      game performance only. It does not provide a medical diagnosis
      or determine a health condition.
    </p>
  </div>

</div>
    </div>
  );
};
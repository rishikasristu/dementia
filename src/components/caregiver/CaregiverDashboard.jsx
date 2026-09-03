import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Calendar,
  Clock,
  Image as ImageIcon,
  Plus,
  Wifi,
  WifiOff,
  TrendingUp,
  Sparkles
} from 'lucide-react';
export const CaregiverDashboard = () => {
  const {
    memories = [],
    reminders = [],
    history = [],
    aiState = {},
    isOffline,
    lastSyncTime,
    completedCount = 0,
    streakDays = 0,
    addMemory,
    addReminder,
    setCurrentView,
    setUserRole
  } = useApp();

  const [showAddMemoryModal, setShowAddMemoryModal] = useState(false);
  const [showAddReminderModal, setShowAddReminderModal] = useState(false);

  // Memory form
  const [newMemName, setNewMemName] = useState('');
  const [newMemRelation, setNewMemRelation] = useState('');
  const [newMemPhoto, setNewMemPhoto] = useState(
    'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=600&q=80'
  );
  const [newMemStory, setNewMemStory] = useState('');

  // Reminder form
  const [newRemTitle, setNewRemTitle] = useState('');
  const [newRemTime, setNewRemTime] = useState('15:00');
  const [newRemIcon, setNewRemIcon] = useState('💊');

  // =====================================
  // HELPER FUNCTIONS
  // =====================================

  // Supports both "correct" and "isCorrect"
  const getIsCorrect = (item) => {
    if (item.isCorrect !== undefined) return item.isCorrect;
    if (item.correct !== undefined) return item.correct;

    return false;
  };

  // Supports both "responseTime" and "timeTakenSeconds"
  const getResponseTime = (item) => {
    if (item.timeTakenSeconds !== undefined) {
      return item.timeTakenSeconds;
    }

    if (item.responseTime !== undefined) {
      return item.responseTime;
    }

    return 0;
  };

  const formatGameName = (gameType) => {
    const gameNames = {
      memory: 'Memory',
      attention: 'Attention',
      pattern: 'Pattern',
      objectRecognition: 'Object Recognition',
      oddOneOut: 'Odd One Out',
      dailyRoutine: 'Daily Routine',
      spotDifference: 'Spot the Difference'
    };

    return gameNames[gameType] || gameType || 'Activity';
  };

  // =====================================
  // DYNAMIC GAME STATISTICS
  // =====================================

  const getGameStats = (gameTypes) => {
    const gameHistory = history.filter((item) =>
      gameTypes.includes(item.gameType)
    );

    if (gameHistory.length === 0) {
      return {
        accuracy: 0,
        attempts: 0
      };
    }

    const correctCount = gameHistory.filter(
      (item) => getIsCorrect(item)
    ).length;

    return {
      accuracy: Math.round(
        (correctCount / gameHistory.length) * 100
      ),
      attempts: gameHistory.length
    };
  };

  const memoryStats = getGameStats(['memory']);

  const attentionStats = getGameStats([
    'attention',
    'objectRecognition',
    'oddOneOut',
    'spotDifference'
  ]);

  const patternStats = getGameStats([
    'pattern',
    'dailyRoutine'
  ]);

  // Overall accuracy
  const calculatedAccuracy =
    history.length > 0
      ? Math.round(
          (history.filter(getIsCorrect).length /
            history.length) *
            100
        )
      : 0;

  const overallAccuracy =
    history.length > 0
      ? calculatedAccuracy
      : aiState.accuracyRate || 0;

  // Average response time
  const responseTimes = history
    .map(getResponseTime)
    .filter((time) => time > 0);

  const calculatedAverageTime =
    responseTimes.length > 0
      ? Math.round(
          responseTimes.reduce(
            (total, time) => total + time,
            0
          ) / responseTimes.length
        )
      : 0;

  const averageResponseTime =
    responseTimes.length > 0
      ? calculatedAverageTime
      : aiState.avgResponseTime || 0;

  // =====================================
  // ADD MEMORY
  // =====================================

  const handleAddMemorySubmit = (e) => {
    e.preventDefault();

    if (!newMemName || !newMemRelation) return;

    addMemory({
      name: newMemName,
      relation: newMemRelation,
      photo: newMemPhoto,
      date: 'Recent',
      story:
        newMemStory ||
        `A special photo of ${newMemName}.`,
      audioTag: `This is your ${newMemRelation}, ${newMemName}.`
    });

    setNewMemName('');
    setNewMemRelation('');
    setNewMemStory('');
    setShowAddMemoryModal(false);
  };

  // =====================================
  // ADD REMINDER
  // =====================================

  const handleAddReminderSubmit = (e) => {
    e.preventDefault();

    if (!newRemTitle) return;

    addReminder({
      title: newRemTitle,
      time: newRemTime,
      icon: newRemIcon,
      audioText: `It is ${newRemTime}. ${newRemTitle}.`
    });

    setNewRemTitle('');
    setShowAddReminderModal(false);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 space-y-6">

      {/* HEADER */}
      <div className="bg-forest text-cream p-6 md:p-8 rounded-3xl border-2 border-sage/40 shadow-photo flex flex-col md:flex-row items-start md:items-center justify-between gap-6">

        <div className="flex items-center gap-5">
          <div className="w-16 h-16 rounded-2xl bg-cream/10 border-2 border-gold/40 flex items-center justify-center text-3xl">
            👵
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl md:text-3xl font-extrabold">
                Lakshmi Syagamreddy
              </h1>

              <span className="bg-cream/15 text-cream text-xs px-3 py-1 rounded-full font-bold">
                Age 74
              </span>
            </div>

            <p className="text-sm text-cream/80 mt-1">
              Caregiver Support Portal • Primary Caregiver: Ramesh (Family)
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 bg-forest-dark px-4 py-2.5 rounded-2xl">

          <div className="flex items-center gap-2 text-xs">
            {isOffline ? (
              <WifiOff className="w-4 h-4 text-terracotta" />
            ) : (
              <Wifi className="w-4 h-4 text-emerald-400" />
            )}

            <div>
              <p className="font-bold">
                {isOffline ? 'Offline Mode' : 'Cloud Sync Active'}
              </p>

              <p className="text-cream/60 text-[10px]">
                {isOffline
                  ? 'Saving changes on device'
                  : `Synced ${lastSyncTime}`}
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              setUserRole('elderly');
              setCurrentView('home');
            }}
            className="px-3 py-2 bg-gold text-forest rounded-xl font-bold text-xs"
          >
            Go to Elderly UI 🌿
          </button>

        </div>

      </div>

      {/* TOP METRICS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

        {/* Activities */}
        <div className="bg-cream-light p-5 rounded-2xl border border-sage/40 flex items-center gap-4">

          <div className="w-12 h-12 rounded-xl bg-sage/20 flex items-center justify-center text-2xl">
            🌱
          </div>

          <div>
            <p className="text-xs font-bold text-ink/70 uppercase">
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

        {/* Accuracy */}
        <div className="bg-cream-light p-5 rounded-2xl border border-sage/40 flex items-center gap-4">

          <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center text-2xl">
            🎯
          </div>

          <div>
          </div>
          <p className="text-xs font-bold text-ink/70 uppercase tracking-wider">
              Puzzle Accuracy
          </p>

<p className="text-2xl font-extrabold text-forest">
  {aiState.accuracyRate || overallAccuracy}% Rate
</p>

<p className="text-xs text-terracotta font-bold">
  Cognitive Score: {aiState.cognitiveScore ?? 0}/100
</p>

<p className="text-xs text-forest/80 font-bold">
  Avg {aiState.avgResponseTime || averageResponseTime}s Response
</p>

        </div>

        {/* AI */}
        <div className="bg-cream-light p-5 rounded-2xl border border-sage/40 flex items-center gap-4">

          <div className="w-12 h-12 rounded-xl bg-forest/10 flex items-center justify-center text-2xl">
            🌿
          </div>

          <div>
            <p className="text-xs font-bold text-ink/70 uppercase">
              AI Personalization
            </p>

            <p className="text-2xl font-extrabold text-forest">
              {aiState.difficulty || 'Easy'}
            </p>

            <p className="text-xs text-forest/80 font-bold">
              {aiState.maxChoices || 3} Choice Grid
            </p>
          </div>

        </div>

        {/* Family Photos */}
        <div className="bg-cream-light p-5 rounded-2xl border border-sage/40 flex items-center gap-4">

          <div className="w-12 h-12 rounded-xl bg-terracotta/20 flex items-center justify-center text-2xl">
            🖼
          </div>

          <div>
            <p className="text-xs font-bold text-ink/70 uppercase">
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

      {/* MAIN CONTENT */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT SIDE */}
        <div className="lg:col-span-2 space-y-6">

          {/* DYNAMIC COGNITIVE TRENDS */}
          <div className="bg-cream-light p-6 rounded-3xl border-2 border-sage/40 shadow-photo space-y-5">

            <div className="flex justify-between items-center">

              <div>
                <h2 className="text-xl font-extrabold text-forest flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-terracotta" />
                  Cognitive Activity Trends
                </h2>

                <p className="text-xs text-ink/70">
                  Based on actual game results
                </p>
              </div>

              <span className="bg-sage/20 text-forest text-xs font-bold px-3 py-1 rounded-full">
                {history.length} Activities
              </span>

            </div>
{/* MEMORY */}
<div>

  <div className="flex justify-between text-xs font-bold text-ink mb-1">
    <span>Memory Activities</span>

    <span>
      {memoryStats.attempts > 0
        ? `${memoryStats.accuracy}% Accuracy`
        : 'No data yet'}
    </span>
  </div>

  <div className="w-full h-3 bg-cream-dark rounded-full overflow-hidden">
    <div
      className="h-full bg-forest rounded-full"
      style={{
        width: `${memoryStats.accuracy}%`
      }}
    />
  </div>

</div>

{/* ATTENTION */}
<div>

  <div className="flex justify-between text-xs font-bold text-ink mb-1">
    <span>Attention Activities</span>

    <span>
      {attentionStats.attempts > 0
        ? `${attentionStats.accuracy}% Accuracy`
        : 'No data yet'}
    </span>
  </div>

  <div className="w-full h-3 bg-cream-dark rounded-full overflow-hidden">
    <div
      className="h-full bg-terracotta rounded-full"
      style={{
        width: `${attentionStats.accuracy}%`
      }}
    />
  </div>

</div>

{/* PATTERN */}
<div>

  <div className="flex justify-between text-xs font-bold text-ink mb-1">
    <span>Pattern Activities</span>

    <span>
      {patternStats.attempts > 0
        ? `${patternStats.accuracy}% Accuracy`
        : 'No data yet'}
    </span>
  </div>

  <div className="w-full h-3 bg-cream-dark rounded-full overflow-hidden">
    <div
      className="h-full bg-gold-dark rounded-full"
      style={{
        width: `${patternStats.accuracy}%`
      }}
    />
  </div>

</div>  
</div>            

          {/* AI Recommendation */}
          <div className="bg-forest text-cream p-5 rounded-3xl border-2 border-sage/40 shadow-photo">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gold/20 flex items-center justify-center shrink-0">
                <Sparkles className="w-6 h-6 text-gold" />
              </div>

            <div>
            <p className="text-xs font-bold text-gold uppercase tracking-wider">
              AI Recommendation
            </p>

            <h3 className="text-lg font-extrabold mt-1">
              {aiState.recommendation?.charAt(0).toUpperCase() +
                  aiState.recommendation?.slice(1)} Activity
            </h3>

            <p className="text-sm text-cream/80 mt-1">
              {aiState.recommendationReason}
            </p>

            <p className="text-xs text-sage mt-2 font-bold">
              Overall Trend: {aiState.overallTrend}
            </p>
            </div>
          </div>
          </div>

          {/* RECENT ACTIVITY LOG */}
          <div className="bg-cream-light p-6 rounded-3xl border-2 border-sage/40 shadow-photo space-y-4">

            <h2 className="text-xl font-extrabold text-forest flex items-center gap-2">
              <Clock className="w-5 h-5" />
              Recent Activity Log
            </h2>

            {history.length === 0 ? (

              <div className="p-6 text-center bg-cream rounded-2xl border border-sage/30">

                <p className="font-bold text-forest">
                  No activities completed yet 🌱
                </p>

                <p className="text-xs text-forest/70 mt-1">
                  Complete a game and your progress will appear here.
                </p>

              </div>

            ) : (

              <div className="space-y-3">

                {history
                  .slice()
                  .reverse()
                  .slice(0, 10)
                  .map((h, i) => {

                    const correct = getIsCorrect(h);
                    const responseTime = getResponseTime(h);

                    return (
                      <div
                        key={i}
                        className="flex items-center justify-between p-3.5 bg-cream rounded-2xl border border-sage/30"
                      >

                        <div className="flex items-center gap-3">

                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                              correct
                                ? 'bg-sage text-forest'
                                : 'bg-terracotta/20 text-terracotta'
                            }`}
                          >
                            {correct ? '✓' : '•'}
                          </div>

                          <div>

                            <p className="text-sm font-bold text-forest">
                              {formatGameName(h.gameType)}
                            </p>

                            <p className="text-xs text-ink/70">
                              Response time: {responseTime}s • Hints:{' '}
                              {h.hintsUsed ?? 0}
                            </p>

                          </div>

                        </div>

                        <span className="text-xs font-bold text-forest/70">
                          {correct ? 'Completed' : 'Attempted'}
                        </span>

                      </div>
                    );
                  })}

              </div>

            )}

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6">

          {/* FAMILY ALBUM */}
          <div className="bg-cream-light p-6 rounded-3xl border-2 border-sage/40 shadow-photo space-y-4">

            <div className="flex justify-between items-center">

              <h2 className="text-lg font-extrabold text-forest flex items-center gap-2">
                <ImageIcon className="w-5 h-5 text-terracotta" />
                Family Album Manager
              </h2>

              <button
                onClick={() => setShowAddMemoryModal(true)}
                className="flex items-center gap-1 bg-terracotta text-cream px-3 py-1.5 rounded-xl font-bold text-xs"
              >
                <Plus className="w-4 h-4" />
                Add Photo
              </button>

            </div>

            <div className="grid grid-cols-2 gap-3">

              {memories.map((m) => (
                <div
                  key={m.id}
                  className="polaroid-frame p-2 text-center text-xs font-bold"
                >
                  <img
                    src={m.photo}
                    alt={m.name}
                    className="w-full h-24 object-cover rounded-md mb-2"
                  />

                  <p className="font-handwriting text-base font-bold text-ink">
                    {m.name}
                  </p>

                  <p className="text-[10px] text-forest/70">
                    {m.relation}
                  </p>

                </div>
              ))}

            </div>

          </div>

          {/* REMINDERS */}
          <div className="bg-cream-light p-6 rounded-3xl border-2 border-sage/40 shadow-photo space-y-4">

            <div className="flex justify-between items-center">

              <h2 className="text-lg font-extrabold text-forest flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Schedule Reminders
              </h2>

              <button
                onClick={() => setShowAddReminderModal(true)}
                className="flex items-center gap-1 bg-forest text-cream px-3 py-1.5 rounded-xl font-bold text-xs"
              >
                <Plus className="w-4 h-4" />
                Add Reminder
              </button>

            </div>

            <div className="space-y-2">

              {reminders.map((r) => (
                <div
                  key={r.id}
                  className="flex items-center justify-between p-3 bg-cream rounded-xl border border-sage/30 text-xs"
                >

                  <div className="flex items-center gap-2">

                    <span className="text-base">
                      {r.icon}
                    </span>

                    <p className="font-extrabold text-forest">
                      {r.time} — {r.title}
                    </p>

                  </div>

                  <span
                    className={`px-2 py-0.5 rounded-full font-bold text-[10px] ${
                      r.completed
                        ? 'bg-sage text-forest'
                        : 'bg-gold/40 text-forest'
                    }`}
                  >
                    {r.completed ? 'Done' : 'Upcoming'}
                  </span>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>

      {/* ADD MEMORY MODAL */}
      {showAddMemoryModal && (

        <div className="fixed inset-0 bg-forest/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">

          <div className="bg-cream-light p-6 rounded-3xl max-w-md w-full shadow-2xl">

            <h3 className="text-xl font-extrabold text-forest mb-4">
              Add Family Memory Photo
            </h3>

            <form
              onSubmit={handleAddMemorySubmit}
              className="space-y-3"
            >

              <input
                type="text"
                required
                value={newMemName}
                onChange={(e) =>
                  setNewMemName(e.target.value)
                }
                placeholder="Family Member Name"
                className="w-full p-3 rounded-xl border border-sage"
              />

              <input
                type="text"
                required
                value={newMemRelation}
                onChange={(e) =>
                  setNewMemRelation(e.target.value)
                }
                placeholder="Relationship"
                className="w-full p-3 rounded-xl border border-sage"
              />

              <input
                type="url"
                value={newMemPhoto}
                onChange={(e) =>
                  setNewMemPhoto(e.target.value)
                }
                placeholder="Photo URL"
                className="w-full p-3 rounded-xl border border-sage"
              />

              <textarea
                value={newMemStory}
                onChange={(e) =>
                  setNewMemStory(e.target.value)
                }
                placeholder="Memory Story"
                className="w-full p-3 rounded-xl border border-sage h-24"
              />

              <div className="flex gap-2">

                <button
                  type="button"
                  onClick={() =>
                    setShowAddMemoryModal(false)
                  }
                  className="w-1/2 py-3 bg-cream border rounded-xl"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="w-1/2 py-3 bg-forest text-cream rounded-xl font-bold"
                >
                  Save Photo
                </button>

              </div>

            </form>

          </div>

        </div>
      )}

      {/* ADD REMINDER MODAL */}
      {showAddReminderModal && (

        <div className="fixed inset-0 bg-forest/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">

          <div className="bg-cream-light p-6 rounded-3xl max-w-md w-full shadow-2xl">

            <h3 className="text-xl font-extrabold text-forest mb-4">
              Add Care Schedule Reminder
            </h3>

            <form
              onSubmit={handleAddReminderSubmit}
              className="space-y-3"
            >

              <input
                type="text"
                required
                value={newRemTitle}
                onChange={(e) =>
                  setNewRemTitle(e.target.value)
                }
                placeholder="Reminder Title"
                className="w-full p-3 rounded-xl border border-sage"
              />

              <input
                type="time"
                required
                value={newRemTime}
                onChange={(e) =>
                  setNewRemTime(e.target.value)
                }
                className="w-full p-3 rounded-xl border border-sage"
              />

              <select
                value={newRemIcon}
                onChange={(e) =>
                  setNewRemIcon(e.target.value)
                }
                className="w-full p-3 rounded-xl border border-sage"
              >
                <option value="💊">💊 Medicine</option>
                <option value="💧">💧 Water</option>
                <option value="🍽">🍽 Meal</option>
                <option value="🌿">🌿 Walk</option>
              </select>

              <div className="flex gap-2">

                <button
                  type="button"
                  onClick={() =>
                    setShowAddReminderModal(false)
                  }
                  className="w-1/2 py-3 bg-cream border rounded-xl"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="w-1/2 py-3 bg-forest text-cream rounded-xl font-bold"
                >
                  Add Reminder
                </button>

              </div>

            </form>

          </div>

        </div>
      )}

    </div>
  );
};
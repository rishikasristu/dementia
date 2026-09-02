import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  HeartHandshake, 
  Activity, 
  Brain, 
  Calendar, 
  Clock, 
  Image as ImageIcon, 
  Plus, 
  Wifi, 
  WifiOff, 
  CheckCircle2, 
  Sparkles, 
  TrendingUp, 
  ShieldCheck,
  User
} from 'lucide-react';

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
    addReminder,
    setCurrentView,
    setUserRole,
    t 
  } = useApp();

  const [showAddMemoryModal, setShowAddMemoryModal] = useState(false);
  const [showAddReminderModal, setShowAddReminderModal] = useState(false);

  // New Memory Form State
  const [newMemName, setNewMemName] = useState('');
  const [newMemRelation, setNewMemRelation] = useState('');
  const [newMemPhoto, setNewMemPhoto] = useState('https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=600&q=80');
  const [newMemStory, setNewMemStory] = useState('');

  // New Reminder Form State
  const [newRemTitle, setNewRemTitle] = useState('');
  const [newRemTime, setNewRemTime] = useState('15:00');
  const [newRemIcon, setNewRemIcon] = useState('💊');

  const handleAddMemorySubmit = (e) => {
    e.preventDefault();
    if (!newMemName || !newMemRelation) return;
    addMemory({
      name: newMemName,
      relation: newMemRelation,
      photo: newMemPhoto,
      date: 'Recent',
      story: newMemStory || `A special photo of ${newMemName}.`,
      audioTag: `This is your ${newMemRelation}, ${newMemName}.`
    });
    setNewMemName('');
    setNewMemRelation('');
    setNewMemStory('');
    setShowAddMemoryModal(false);
  };

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
      {/* Top Caregiver Header */}
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
              Caregiver Support Portal • Primary Caregiver: Ramesh (Family)
            </p>
          </div>
        </div>

        {/* Sync Status Badge */}
        <div className="flex items-center gap-4 bg-forest-dark px-4 py-2.5 rounded-2xl border border-sage/30">
          <div className="flex items-center gap-2 text-xs">
            {isOffline ? (
              <WifiOff className="w-4 h-4 text-terracotta animate-pulse" />
            ) : (
              <Wifi className="w-4 h-4 text-emerald-400" />
            )}
            <div>
              <p className="font-bold text-cream">
                {isOffline ? 'Offline Mode' : 'Cloud Sync Active'}
              </p>
              <p className="text-cream/60 text-[10px]">
                {isOffline ? 'Saving changes on device' : `Synced ${lastSyncTime}`}
              </p>
            </div>
          </div>

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

      {/* Top 4 Metrics Summary Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* 1. Today's Activities Completed */}
        <div className="bg-cream-light p-5 rounded-2xl border border-sage/40 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-sage/20 text-forest flex items-center justify-center text-2xl">
            🌱
          </div>
          <div>
            <p className="text-xs font-bold text-ink/70 uppercase tracking-wider">Garden Growth</p>
            <p className="text-2xl font-extrabold text-forest">{completedCount} Activities</p>
            <p className="text-xs text-forest/80 font-bold">{streakDays} Day Active Streak</p>
          </div>
        </div>

        {/* 2. Cognitive Performance Accuracy */}
        <div className="bg-cream-light p-5 rounded-2xl border border-sage/40 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gold/20 text-forest flex items-center justify-center text-2xl">
            🎯
          </div>
          <div>
            <p className="text-xs font-bold text-ink/70 uppercase tracking-wider">Puzzle Accuracy</p>
            <p className="text-2xl font-extrabold text-forest">{aiState.accuracyRate || 85}% Rate</p>
            <p className="text-xs text-forest/80 font-bold">Avg {aiState.avgResponseTime || 5}s Response</p>
          </div>
        </div>

        {/* 3. AI Personalization Guide Mode */}
        <div className="bg-cream-light p-5 rounded-2xl border border-sage/40 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-forest/10 text-forest flex items-center justify-center text-2xl">
            🌿
          </div>
          <div>
            <p className="text-xs font-bold text-ink/70 uppercase tracking-wider">AI Personalization</p>
            <p className="text-2xl font-extrabold text-forest">{aiState.difficulty}</p>
            <p className="text-xs text-forest/80 font-bold">{aiState.maxChoices} Choice Grid</p>
          </div>
        </div>

        {/* 4. Memory Album Count */}
        <div className="bg-cream-light p-5 rounded-2xl border border-sage/40 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-terracotta/20 text-terracotta flex items-center justify-center text-2xl">
            🖼
          </div>
          <div>
            <p className="text-xs font-bold text-ink/70 uppercase tracking-wider">Family Photos</p>
            <p className="text-2xl font-extrabold text-forest">{memories.length} Memories</p>
            <p className="text-xs text-terracotta-dark font-bold">Active Album</p>
          </div>
        </div>
      </div>

      {/* Main Grid Section: Left Column (Cognitive Trends & Logs), Right Column (Memory Library & Reminders) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column (2 Cols) */}
        <div className="lg:col-span-2 space-y-6">
          {/* Cognitive Activity Trends */}
          <div className="bg-cream-light p-6 rounded-3xl border-2 border-sage/40 shadow-photo space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-extrabold text-forest flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-terracotta" />
                  <span>Cognitive Activity & Reaction Trends</span>
                </h2>
                <p className="text-xs text-ink/70 mt-0.5">Real-time stats monitored by Personalization Engine</p>
              </div>
              <span className="bg-sage/20 text-forest text-xs font-bold px-3 py-1 rounded-full border border-sage/30">
                Weekly Insights
              </span>
            </div>

            {/* Simple Bar Graphic Chart */}
            <div className="space-y-3 pt-2">
              <div>
                <div className="flex justify-between text-xs font-bold text-ink mb-1">
                  <span>Memory Puzzle Recognition</span>
                  <span>{aiState.gameStats?.mem1?.attempts > 0 ? `${aiState.gameStats.mem1.accuracy}% Accuracy` : 'No attempts yet'}</span>
                </div>
                <div className="w-full h-3 bg-cream-dark rounded-full overflow-hidden">
                  <div
                    className="h-full bg-forest rounded-full transition-all duration-500"
                    style={{ width: `${aiState.gameStats?.mem1?.accuracy || 0}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold text-ink mb-1">
                  <span>Attention Target Focus</span>
                  <span>{aiState.gameStats?.att1?.attempts > 0 ? `${aiState.gameStats.att1.accuracy}% Accuracy` : 'No attempts yet'}</span>
                </div>
                <div className="w-full h-3 bg-cream-dark rounded-full overflow-hidden">
                  <div
                    className="h-full bg-terracotta rounded-full transition-all duration-500"
                    style={{ width: `${aiState.gameStats?.att1?.accuracy || 0}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold text-ink mb-1">
                  <span>Pattern Completion</span>
                  <span>{aiState.gameStats?.pat1?.attempts > 0 ? `${aiState.gameStats.pat1.accuracy}% Accuracy` : 'No attempts yet'}</span>
                </div>
                <div className="w-full h-3 bg-cream-dark rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gold-dark rounded-full transition-all duration-500"
                    style={{ width: `${aiState.gameStats?.pat1?.accuracy || 0}%` }}
                  />
                </div>
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

          {/* Activity Logs Timeline */}
          <div className="bg-cream-light p-6 rounded-3xl border-2 border-sage/40 shadow-photo space-y-4">
            <h2 className="text-xl font-extrabold text-forest flex items-center gap-2">
              <Clock className="w-5 h-5 text-forest" />
              <span>Recent Activity Log</span>
            </h2>

            <div className="space-y-3">
              {history.map((h, i) => (
                <div key={i} className="flex items-center justify-between p-3.5 bg-cream rounded-2xl border border-sage/30">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                      h.isCorrect ? 'bg-sage text-forest' : 'bg-terracotta/20 text-terracotta'
                    }`}>
                      {h.isCorrect ? '✓' : '•'}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-forest uppercase">{h.gameType} Puzzle</p>
                      <p className="text-xs text-ink/70">Response time: {h.timeTakenSeconds}s • Hints: {h.hintsUsed}</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-forest/70">
                    {h.isCorrect ? 'Completed' : 'Attempted'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column (1 Col): Family Memories & Schedule Management */}
        <div className="space-y-6">
          {/* Family Memory Library Manager */}
          <div className="bg-cream-light p-6 rounded-3xl border-2 border-sage/40 shadow-photo space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-extrabold text-forest flex items-center gap-2">
                <ImageIcon className="w-5 h-5 text-terracotta" />
                <span>Family Album Manager</span>
              </h2>
              <button
                onClick={() => setShowAddMemoryModal(true)}
                className="flex items-center gap-1 bg-terracotta hover:bg-terracotta-dark text-cream px-3 py-1.5 rounded-xl font-bold text-xs shadow-sm transition-all"
              >
                <Plus className="w-4 h-4" />
                <span>Add Photo</span>
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {memories.map((m) => (
                <div key={m.id} className="polaroid-frame p-2 text-center text-xs font-bold">
                  <img src={m.photo} alt={m.name} className="w-full h-24 object-cover rounded-md mb-2" />
                  <p className="font-handwriting text-base font-bold text-ink">{m.name}</p>
                  <p className="text-[10px] text-forest/70 font-semibold">{m.relation}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Today's Schedule Manager */}
          <div className="bg-cream-light p-6 rounded-3xl border-2 border-sage/40 shadow-photo space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-extrabold text-forest flex items-center gap-2">
                <Calendar className="w-5 h-5 text-forest" />
                <span>Schedule Reminders</span>
              </h2>
              <button
                onClick={() => setShowAddReminderModal(true)}
                className="flex items-center gap-1 bg-forest hover:bg-forest-light text-cream px-3 py-1.5 rounded-xl font-bold text-xs shadow-sm transition-all"
              >
                <Plus className="w-4 h-4" />
                <span>Add Reminder</span>
              </button>
            </div>

            <div className="space-y-2">
              {reminders.map((r) => (
                <div key={r.id} className="flex items-center justify-between p-3 bg-cream rounded-xl border border-sage/30 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-base">{r.icon}</span>
                    <div>
                      <p className="font-extrabold text-forest">{r.time} — {r.title}</p>
                    </div>
                  </div>
                  <span className={`px-2 py-0.5 rounded-full font-bold text-[10px] ${
                    r.completed ? 'bg-sage text-forest' : 'bg-gold/40 text-forest'
                  }`}>
                    {r.completed ? 'Done' : 'Upcoming'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal: Add New Memory */}
      {showAddMemoryModal && (
        <div className="fixed inset-0 bg-forest/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-cream-light border-3 border-sage p-6 rounded-3xl max-w-md w-full shadow-2xl space-y-4">
            <h3 className="text-xl font-extrabold text-forest">Add Family Memory Photo</h3>
            <form onSubmit={handleAddMemorySubmit} className="space-y-3">
              <div>
                <label className="text-xs font-bold text-forest uppercase">Family Member Name</label>
                <input
                  type="text"
                  required
                  value={newMemName}
                  onChange={(e) => setNewMemName(e.target.value)}
                  placeholder="e.g. Ananya"
                  className="w-full mt-1 p-3 rounded-xl border border-sage bg-cream text-ink font-bold focus:outline-none focus:ring-2 focus:ring-forest"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-forest uppercase">Relationship</label>
                <input
                  type="text"
                  required
                  value={newMemRelation}
                  onChange={(e) => setNewMemRelation(e.target.value)}
                  placeholder="e.g. Granddaughter"
                  className="w-full mt-1 p-3 rounded-xl border border-sage bg-cream text-ink font-bold focus:outline-none focus:ring-2 focus:ring-forest"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-forest uppercase">Photo URL</label>
                <input
                  type="url"
                  value={newMemPhoto}
                  onChange={(e) => setNewMemPhoto(e.target.value)}
                  className="w-full mt-1 p-3 rounded-xl border border-sage bg-cream text-ink font-bold focus:outline-none focus:ring-2 focus:ring-forest"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-forest uppercase">Memory Story / Note</label>
                <textarea
                  value={newMemStory}
                  onChange={(e) => setNewMemStory(e.target.value)}
                  placeholder="e.g. She loves bringing fresh jasmine flowers when visiting on weekends."
                  className="w-full mt-1 p-3 rounded-xl border border-sage bg-cream text-ink font-bold focus:outline-none focus:ring-2 focus:ring-forest h-20"
                />
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddMemoryModal(false)}
                  className="w-1/2 py-3 bg-cream border border-forest/30 text-forest font-bold rounded-xl"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-1/2 py-3 bg-forest text-cream font-bold rounded-xl shadow-md btn-tactile-forest"
                >
                  Save Photo
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal: Add New Reminder */}
      {showAddReminderModal && (
        <div className="fixed inset-0 bg-forest/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-cream-light border-3 border-sage p-6 rounded-3xl max-w-md w-full shadow-2xl space-y-4">
            <h3 className="text-xl font-extrabold text-forest">Add Care Schedule Reminder</h3>
            <form onSubmit={handleAddReminderSubmit} className="space-y-3">
              <div>
                <label className="text-xs font-bold text-forest uppercase">Reminder Title</label>
                <input
                  type="text"
                  required
                  value={newRemTitle}
                  onChange={(e) => setNewRemTitle(e.target.value)}
                  placeholder="e.g. Evening Blood Pressure Medicine"
                  className="w-full mt-1 p-3 rounded-xl border border-sage bg-cream text-ink font-bold focus:outline-none focus:ring-2 focus:ring-forest"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-forest uppercase">Scheduled Time</label>
                <input
                  type="time"
                  required
                  value={newRemTime}
                  onChange={(e) => setNewRemTime(e.target.value)}
                  className="w-full mt-1 p-3 rounded-xl border border-sage bg-cream text-ink font-bold focus:outline-none focus:ring-2 focus:ring-forest"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-forest uppercase">Icon</label>
                <select
                  value={newRemIcon}
                  onChange={(e) => setNewRemIcon(e.target.value)}
                  className="w-full mt-1 p-3 rounded-xl border border-sage bg-cream text-ink font-bold focus:outline-none focus:ring-2 focus:ring-forest"
                >
                  <option value="💊">💊 Medicine</option>
                  <option value="💧">💧 Water</option>
                  <option value="🍽">🍽 Meal</option>
                  <option value="🌿">🌿 Walk</option>
                </select>
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddReminderModal(false)}
                  className="w-1/2 py-3 bg-cream border border-forest/30 text-forest font-bold rounded-xl"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-1/2 py-3 bg-forest text-cream font-bold rounded-xl shadow-md btn-tactile-forest"
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

import React from 'react';
import { useApp } from '../../context/AppContext';
import { GardenCanvas } from '../common/GardenCanvas';
import { Brain, Image as ImageIcon, Bell, Volume2 } from 'lucide-react';
import { speakText } from '../../utils/speech';

export const ElderlyHome = () => {
  const { setCurrentView, language, t } = useApp();

  const handleListenGreeting = () => {
    speakText(`${t.greetingTitle}. ${t.supportSubtitle}`, language);
  };

  return (
    <div className="space-y-6 pb-12 max-w-4xl mx-auto px-4 pt-4">
      {/* Warm Personal Greeting Header */}
      <div className="bg-cream-light p-6 md:p-8 rounded-3xl border-2 border-sage/40 shadow-photo flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-3xl md:text-4xl font-extrabold text-forest tracking-tight">
              {t.greetingTitle}
            </h1>
            <button
              onClick={handleListenGreeting}
              className="p-2 rounded-full bg-sage/20 text-forest hover:bg-sage/40 transition-all"
              title="Listen greeting"
            >
              <Volume2 className="w-6 h-6" />
            </button>
          </div>
          <p className="text-lg md:text-xl font-medium text-ink/80 mt-1">
            {t.supportSubtitle}
          </p>
        </div>

        {/* Date / Time Badge */}
        <div className="bg-forest text-cream px-5 py-2.5 rounded-2xl text-center shadow-sm self-stretch md:self-auto">
          <p className="text-xs uppercase tracking-wider text-gold font-bold">Today</p>
          <p className="text-lg font-extrabold">Tuesday, Sep 1</p>
        </div>
      </div>

      {/* Memory Garden Centerpiece */}
      <GardenCanvas />

      {/* 3 Large Visual Controls (No confusing small grids) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
        {/* 1. PLAY COGNITIVE PUZZLES */}
        <button
          onClick={() => setCurrentView('games')}
          className="group flex flex-col items-center justify-center p-8 bg-forest text-cream rounded-3xl border-4 border-forest-light shadow-photo btn-tactile-forest text-center transition-all min-h-[220px]"
        >
          <div className="w-20 h-20 rounded-full bg-cream/10 border-2 border-gold/40 flex items-center justify-center text-4xl mb-4 group-hover:scale-110 transition-transform">
            🧠
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gold">{t.play}</h2>
          <p className="text-sm text-cream/80 font-medium mt-1">Fun & gentle mind games</p>
        </button>

        {/* 2. FAMILY MEMORY ALBUM */}
        <button
          onClick={() => setCurrentView('album')}
          className="group flex flex-col items-center justify-center p-8 bg-terracotta text-cream rounded-3xl border-4 border-terracotta-light shadow-photo btn-tactile-terracotta text-center transition-all min-h-[220px]"
        >
          <div className="w-20 h-20 rounded-full bg-cream/10 border-2 border-cream/30 flex items-center justify-center text-4xl mb-4 group-hover:scale-110 transition-transform">
            🖼
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-cream">{t.memories}</h2>
          <p className="text-sm text-cream/90 font-medium mt-1">Family photo album</p>
        </button>

        {/* 3. TODAY'S SCHEDULE & REMINDERS */}
        <button
          onClick={() => setCurrentView('reminders')}
          className="group flex flex-col items-center justify-center p-8 bg-sage text-forest rounded-3xl border-4 border-sage-dark shadow-photo btn-tactile-sage text-center transition-all min-h-[220px]"
        >
          <div className="w-20 h-20 rounded-full bg-forest/10 border-2 border-forest/20 flex items-center justify-center text-4xl mb-4 group-hover:scale-110 transition-transform">
            🔔
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-forest">{t.today}</h2>
          <p className="text-sm text-forest/90 font-bold mt-1">Meds, water & walks</p>
        </button>
      </div>
    </div>
  );
};

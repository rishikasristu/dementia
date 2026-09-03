import React from 'react';
import { useApp } from '../../context/AppContext';

export const GardenCanvas = () => {
  const { gardenStage, completedCount, streakDays, t } = useApp();

  const STAGE_TEXTS = [
    { title: t.seedlingStage, icon: '🌱', detail: 'Complete 1 activity to sprout fresh leaves' },
    { title: t.sproutStage, icon: '🌿', detail: 'Your garden is growing beautifully' },
    { title: t.blossomStage, icon: '🌸', detail: 'Sunlight and flowers brighten your day' },
    { title: t.treeStage, icon: '🌳', detail: 'Your Memory Sanctuary is thriving & strong' },
  ];

  const currentStage = STAGE_TEXTS[gardenStage] || STAGE_TEXTS[0];

  return (
    <div className="relative w-full overflow-hidden rounded-3xl bg-gradient-to-b from-cream-light via-cream to-sage/20 border-2 border-sage/40 p-6 shadow-photo transition-all">
      {/* Decorative Sunbeam / Atmosphere */}
      <div className="absolute -top-16 -right-16 w-48 h-48 bg-gold/20 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute top-4 left-6 flex items-center gap-2 bg-cream/90 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-sage/30 shadow-sm z-10">
        <span className="text-xl">{currentStage.icon}</span>
        <div>
          <p className="text-xs font-bold text-forest uppercase tracking-wider">Memory Garden Progress</p>
          <p className="text-xs text-ink/80 font-medium">{currentStage.detail}</p>
        </div>
      </div>

      <div className="absolute top-4 right-6 flex items-center gap-2 bg-forest text-cream px-3 py-1 rounded-full text-xs font-bold shadow-sm z-10">
        <span>🔥 {streakDays} Day Streak</span>
      </div>

      {/* Organic Garden Graphic SVG */}
      <div className="w-full h-56 md:h-64 flex items-end justify-center relative pt-12">
        {/* Soil Base */}
        <div className="absolute bottom-0 w-full h-12 bg-forest/10 rounded-b-2xl border-t-2 border-sage/40" />

        {/* Dynamic Stage Visuals */}
        {gardenStage === 0 && (
          <div className="flex flex-col items-center animate-pulse-slow mb-3 z-10">
            <svg className="w-24 h-28" viewBox="0 0 100 100" fill="none">
              <path d="M50 90 L50 60 C50 45 40 40 35 35" stroke="#183C35" strokeWidth="4" strokeLinecap="round" />
              <path d="M50 60 C50 45 60 40 65 35" stroke="#183C35" strokeWidth="4" strokeLinecap="round" />
              <path d="M35 35 C30 25 45 20 50 30 C55 20 70 25 65 35 Z" fill="#A8C3A0" stroke="#183C35" strokeWidth="2" />
            </svg>
            <span className="text-xs font-bold text-forest bg-cream/90 px-3 py-0.5 rounded-full border border-sage/30 mt-1">
              Morning Seedling 🌱
            </span>
          </div>
        )}

        {gardenStage === 1 && (
          <div className="flex flex-col items-center animate-sway mb-3 z-10">
            <svg className="w-32 h-36" viewBox="0 0 100 120" fill="none">
              <path d="M50 110 Q48 70 50 30" stroke="#183C35" strokeWidth="5" strokeLinecap="round" />
              <path d="M50 75 Q30 65 20 50 C25 40 45 45 50 70" fill="#A8C3A0" stroke="#183C35" strokeWidth="2" />
              <path d="M50 60 Q70 50 80 35 C75 25 55 30 50 55" fill="#7A9B72" stroke="#183C35" strokeWidth="2" />
              <circle cx="50" cy="26" r="6" fill="#E9C46A" />
            </svg>
            <span className="text-xs font-bold text-forest bg-cream/90 px-3 py-0.5 rounded-full border border-sage/30 mt-1">
              Leaf Sprouts 🌿
            </span>
          </div>
        )}

        {gardenStage === 2 && (
          <div className="flex items-end justify-center gap-6 mb-3 z-10">
            <div className="flex flex-col items-center animate-sway">
              <svg className="w-28 h-36" viewBox="0 0 100 120" fill="none">
                <path d="M50 110 Q45 70 50 30" stroke="#183C35" strokeWidth="5" strokeLinecap="round" />
                <path d="M50 70 Q30 60 20 45 C25 35 45 40 50 65" fill="#A8C3A0" stroke="#183C35" strokeWidth="2" />
                <circle cx="50" cy="24" r="14" fill="#D98262" />
                <circle cx="50" cy="24" r="6" fill="#E9C46A" />
              </svg>
            </div>
            <div className="flex flex-col items-center animate-float">
              <svg className="w-36 h-44" viewBox="0 0 100 140" fill="none">
                <path d="M50 130 Q55 70 50 25" stroke="#183C35" strokeWidth="6" strokeLinecap="round" />
                <path d="M50 75 Q75 65 85 45 C80 35 60 40 50 70" fill="#7A9B72" stroke="#183C35" strokeWidth="2" />
                {/* Jasmine Blossom */}
                <circle cx="50" cy="20" r="18" fill="#FFF8EA" stroke="#183C35" strokeWidth="2" />
                <circle cx="50" cy="20" r="7" fill="#E9C46A" />
              </svg>
            </div>
          </div>
        )}

        {gardenStage >= 3 && (
          <div className="flex flex-col items-center animate-float mb-2 z-10">
            <svg className="w-44 h-48 md:w-56 md:h-56" viewBox="0 0 200 200" fill="none">
              {/* Trunk */}
              <path d="M90 190 C85 140 70 120 75 90 C80 60 120 60 125 90 C130 120 115 140 110 190 Z" fill="#183C35" />
              {/* Foliage Canopy */}
              <circle cx="100" cy="70" r="55" fill="#A8C3A0" stroke="#183C35" strokeWidth="3" />
              <circle cx="65" cy="85" r="35" fill="#7A9B72" stroke="#183C35" strokeWidth="3" />
              <circle cx="135" cy="85" r="35" fill="#23564C" stroke="#183C35" strokeWidth="3" />
              <circle cx="100" cy="45" r="38" fill="#E9C46A" opacity="0.9" stroke="#183C35" strokeWidth="2" />
              {/* Flowers in Canopy */}
              <circle cx="85" cy="65" r="8" fill="#D98262" />
              <circle cx="115" cy="75" r="8" fill="#FFF8EA" />
              <circle cx="100" cy="95" r="8" fill="#D98262" />
            </svg>
            <span className="text-xs font-extrabold text-forest bg-gold px-4 py-1 rounded-full border border-gold-dark shadow-sm">
              Thriving Memory Sanctuary 🌳
            </span>
          </div>
        )}
      </div>

      {/* Garden Growth Caption */}
      <div className="mt-4 text-center">
        <h3 className="text-xl font-bold text-forest">{currentStage.title}</h3>
        <p className="text-sm text-ink/70 mt-0.5">
          {completedCount} activities completed today • Keep growing your memory garden!
        </p>
      </div>
    </div>
  );
};

import React from 'react';
import { useApp } from '../../context/AppContext';
import { MemoryGame } from './MemoryGame';
import { AttentionGame } from './AttentionGame';
import { PatternGame } from './PatternGame';
import { ArrowLeft, Sparkles, Brain, Target, Puzzle } from 'lucide-react';

export const CognitiveHub = () => {
  const { activeGameType, setActiveGameType, setCurrentView, aiState, t } = useApp();

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 space-y-6">
      {/* Navigation Header */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => setCurrentView('home')}
          className="flex items-center gap-2 bg-cream-light hover:bg-cream-dark text-forest px-4 py-2 rounded-2xl border border-sage/40 font-bold shadow-sm transition-all"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Garden</span>
        </button>

        <div className="flex items-center gap-2 bg-gold/20 text-forest px-4 py-1.5 rounded-full font-bold text-sm border border-gold/40">
          <span>🧠 Cognitive Activities</span>
        </div>
      </div>

      {/* AI Personal Guide Banner (Visually demonstrating active AI Personalization) */}
      <div className="bg-forest text-cream p-6 rounded-3xl border-2 border-sage/40 shadow-photo relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-xl pointer-events-none" />
        
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 rounded-2xl bg-cream/10 border-2 border-gold/40 flex items-center justify-center text-3xl flex-shrink-0">
            🌿
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-gold text-lg tracking-wide uppercase">
                {t.personalGuide}
              </span>
              <span className="bg-sage/20 text-sage text-xs font-extrabold px-2.5 py-0.5 rounded-full border border-sage/30">
                {aiState.difficulty} Mode ({aiState.maxChoices} Choices)
              </span>
            </div>
            <p className="text-xl font-bold text-cream mt-1">
              "{aiState.guideMessage}"
            </p>
            <p className="text-xs text-cream/70 mt-1 font-medium">
              Adapting difficulty, hint support, and response timing based on your performance.
            </p>
          </div>
        </div>
      </div>

      {/* 3 Game Mode Selector Tabs */}
      <div className="grid grid-cols-3 gap-3 bg-cream-dark p-2 rounded-2xl border border-sage/40">
        <button
          onClick={() => setActiveGameType('memory')}
          className={`flex flex-col md:flex-row items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-extrabold text-base md:text-lg transition-all ${
            activeGameType === 'memory'
              ? 'bg-forest text-cream shadow-md scale-102'
              : 'text-forest hover:bg-cream'
          }`}
        >
          <Brain className="w-6 h-6 text-gold" />
          <span>1. Memory</span>
        </button>

        <button
          onClick={() => setActiveGameType('attention')}
          className={`flex flex-col md:flex-row items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-extrabold text-base md:text-lg transition-all ${
            activeGameType === 'attention'
              ? 'bg-terracotta text-cream shadow-md scale-102'
              : 'text-forest hover:bg-cream'
          }`}
        >
          <Target className="w-6 h-6 text-cream" />
          <span>2. Attention</span>
        </button>

        <button
          onClick={() => setActiveGameType('pattern')}
          className={`flex flex-col md:flex-row items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-extrabold text-base md:text-lg transition-all ${
            activeGameType === 'pattern'
              ? 'bg-sage text-forest shadow-md scale-102'
              : 'text-forest hover:bg-cream'
          }`}
        >
          <Puzzle className="w-6 h-6 text-forest" />
          <span>3. Pattern</span>
        </button>
      </div>

      {/* Render Active Game */}
      {activeGameType === 'memory' && <MemoryGame />}
      {activeGameType === 'attention' && <AttentionGame />}
      {activeGameType === 'pattern' && <PatternGame />}
    </div>
  );
};

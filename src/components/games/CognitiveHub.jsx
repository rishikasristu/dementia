import React from 'react';
import { useApp } from '../../context/AppContext';

import { MemoryGame } from './MemoryGame';
import { AttentionGame } from './AttentionGame';
import { PatternGame } from './PatternGame';
import { ObjectRecognitionGame } from './ObjectRecognitionGame';
import { OddOneOutGame } from './OddOneOutGame';
import { DailyRoutineGame } from './DailyRoutineGame';
import { SpotDifferenceGame } from './SpotDifferenceGame';

import {
  ArrowLeft,
  Brain,
  Target,
  Puzzle,
  Eye,
  Search,
  CalendarCheck,
  ScanSearch
} from 'lucide-react';

export const CognitiveHub = () => {
  const {
    activeGameType,
    setActiveGameType,
    setCurrentView,
    aiState,
    t
  } = useApp();

  return (
    <div className="max-w-5xl mx-auto px-4 py-6 space-y-6">

      {/* Navigation Header */}
      <div className="flex items-center justify-between">

        <button
          onClick={() => setCurrentView('home')}
          className="
            flex items-center gap-2
            bg-cream-light hover:bg-cream-dark
            text-forest px-4 py-2 rounded-2xl
            border border-sage/40
            font-bold shadow-sm transition-all
          "
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Garden</span>
        </button>

        <div
          className="
            flex items-center gap-2
            bg-gold/20 text-forest
            px-4 py-1.5 rounded-full
            font-bold text-sm
            border border-gold/40
          "
        >
          🧠 Cognitive Activities
        </div>

      </div>

      {/* AI Personal Guide */}
      <div
        className="
          bg-forest text-cream
          p-6 rounded-3xl
          border-2 border-sage/40
          shadow-photo relative overflow-hidden
        "
      >

        <div className="flex items-start gap-4">

          <div
            className="
              w-14 h-14 rounded-2xl
              bg-cream/10
              border-2 border-gold/40
              flex items-center justify-center
              text-3xl flex-shrink-0
            "
          >
            🌿
          </div>

          <div>

            <div className="flex items-center gap-2 flex-wrap">

              <span
                className="
                  font-extrabold text-gold
                  text-lg tracking-wide uppercase
                "
              >
                {t.personalGuide}
              </span>

              <span
                className="
                  bg-sage/20 text-sage
                  text-xs font-extrabold
                  px-2.5 py-0.5 rounded-full
                  border border-sage/30
                "
              >
                {aiState.difficulty} Mode
              </span>

            </div>

            <p className="text-xl font-bold text-cream mt-1">
              "{aiState.guideMessage}"
            </p>

            <p className="text-xs text-cream/70 mt-1 font-medium">
              Activities gently adapt based on your performance.
            </p>

          </div>

        </div>

      </div>

      {/* Game Mode Selector */}
      <div
        className="
          grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4
          gap-3 bg-cream-dark p-3 rounded-2xl
          border border-sage/40
        "
      >

        {/* Memory */}
        <button
          onClick={() => setActiveGameType('memory')}
          className={`
            flex flex-col items-center justify-center
            gap-2 py-3 px-2 rounded-xl
            font-extrabold text-sm transition-all
            ${
              activeGameType === 'memory'
                ? 'bg-forest text-cream shadow-md'
                : 'text-forest hover:bg-cream'
            }
          `}
        >
          <Brain className="w-6 h-6 text-gold" />
          <span>Memory</span>
        </button>

        {/* Attention */}
        <button
          onClick={() => setActiveGameType('attention')}
          className={`
            flex flex-col items-center justify-center
            gap-2 py-3 px-2 rounded-xl
            font-extrabold text-sm transition-all
            ${
              activeGameType === 'attention'
                ? 'bg-terracotta text-cream shadow-md'
                : 'text-forest hover:bg-cream'
            }
          `}
        >
          <Target className="w-6 h-6" />
          <span>Attention</span>
        </button>

        {/* Pattern */}
        <button
          onClick={() => setActiveGameType('pattern')}
          className={`
            flex flex-col items-center justify-center
            gap-2 py-3 px-2 rounded-xl
            font-extrabold text-sm transition-all
            ${
              activeGameType === 'pattern'
                ? 'bg-sage text-forest shadow-md'
                : 'text-forest hover:bg-cream'
            }
          `}
        >
          <Puzzle className="w-6 h-6" />
          <span>Pattern</span>
        </button>

        {/* Object Recognition */}
        <button
          onClick={() => setActiveGameType('objectRecognition')}
          className={`
            flex flex-col items-center justify-center
            gap-2 py-3 px-2 rounded-xl
            font-extrabold text-sm transition-all
            ${
              activeGameType === 'objectRecognition'
                ? 'bg-gold text-forest shadow-md'
                : 'text-forest hover:bg-cream'
            }
          `}
        >
          <Eye className="w-6 h-6" />
          <span>Object Recognition</span>
        </button>

        {/* Odd One Out */}
        <button
          onClick={() => setActiveGameType('oddOneOut')}
          className={`
            flex flex-col items-center justify-center
            gap-2 py-3 px-2 rounded-xl
            font-extrabold text-sm transition-all
            ${
              activeGameType === 'oddOneOut'
                ? 'bg-terracotta text-cream shadow-md'
                : 'text-forest hover:bg-cream'
            }
          `}
        >
          <Search className="w-6 h-6" />
          <span>Odd One Out</span>
        </button>

        {/* Daily Routine */}
        <button
          onClick={() => setActiveGameType('dailyRoutine')}
          className={`
            flex flex-col items-center justify-center
            gap-2 py-3 px-2 rounded-xl
            font-extrabold text-sm transition-all
            ${
              activeGameType === 'dailyRoutine'
                ? 'bg-forest text-cream shadow-md'
                : 'text-forest hover:bg-cream'
            }
          `}
        >
          <CalendarCheck className="w-6 h-6 text-gold" />
          <span>Daily Routine</span>
        </button>

        {/* Spot the Difference */}
        <button
          onClick={() => setActiveGameType('spotDifference')}
          className={`
            flex flex-col items-center justify-center
            gap-2 py-3 px-2 rounded-xl
            font-extrabold text-sm transition-all
            ${
              activeGameType === 'spotDifference'
                ? 'bg-sage text-forest shadow-md'
                : 'text-forest hover:bg-cream'
            }
          `}
        >
          <ScanSearch className="w-6 h-6" />
          <span>Spot Difference</span>
        </button>

      </div>

      {/* Render Active Game */}

      {activeGameType === 'memory' && (
        <MemoryGame />
      )}

      {activeGameType === 'attention' && (
        <AttentionGame />
      )}

      {activeGameType === 'pattern' && (
        <PatternGame />
      )}

      {activeGameType === 'objectRecognition' && (
        <ObjectRecognitionGame />
      )}

      {activeGameType === 'oddOneOut' && (
        <OddOneOutGame />
      )}

      {activeGameType === 'dailyRoutine' && (
        <DailyRoutineGame />
      )}

      {activeGameType === 'spotDifference' && (
        <SpotDifferenceGame />
      )}

    </div>
  );
};
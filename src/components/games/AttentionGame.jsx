import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { COGNITIVE_PUZZLES } from '../../types/data';
import { FeedbackModal } from './FeedbackModal';
import { SpeechButton } from '../common/SpeechButton';
import { speakWithAzure } from '../../utils/speech';

export const AttentionGame = () => {
  const { recordActivity, language } = useApp();
  const [puzzleIndex, setPuzzleIndex] = useState(0);
  const [tappedIds, setTappedIds] = useState([]);
  const [feedbackState, setFeedbackState] = useState({ isOpen: false, isCorrect: false });
  const [startTime, setStartTime] = useState(Date.now());

  const currentPuzzle = COGNITIVE_PUZZLES.attention[puzzleIndex] || COGNITIVE_PUZZLES.attention[0];

  useEffect(() => {
    setStartTime(Date.now());
    setTappedIds([]);
    speakWithAzure(currentPuzzle.instruction, language);
  }, [puzzleIndex, language]);

  const handleTileTap = (tile) => {
    if (tappedIds.includes(tile.id)) return;

    if (tile.isTarget) {
      const newTapped = [...tappedIds, tile.id];
      setTappedIds(newTapped);

      if (newTapped.length === currentPuzzle.totalTargets) {
        const timeTaken = Math.round((Date.now() - startTime) / 1000);
        recordActivity({
          gameId: currentPuzzle.id,
          gameType: 'attention',
          isCorrect: true,
          timeTakenSeconds: timeTaken,
          hintsUsed: 0
        });
        setFeedbackState({ isOpen: true, isCorrect: true });
      }
    } else {
      // Soft reminder if non-target tapped
      speakWithAzure(
        "That's a pretty flower! Look for the golden butterfly.",
        language
      );   
    }
  };

  const handleNextPuzzle = () => {
    setFeedbackState({ isOpen: false, isCorrect: false });
    setPuzzleIndex((prev) => (prev + 1) % COGNITIVE_PUZZLES.attention.length);
  };

  return (
    <div className="bg-[#FFFDF6] border-2 border-sage/40 rounded-3xl p-6 md:p-8 shadow-photo space-y-6 text-center">
      <div>
        <span className="text-xs uppercase font-extrabold tracking-wider text-terracotta">Activity 2: Selective Attention</span>
        <h2 className="text-2xl md:text-3xl font-extrabold text-forest">{currentPuzzle.title}</h2>
        <p className="text-xl font-bold text-ink mt-2">{currentPuzzle.instruction}</p>
      </div>

      <div className="flex items-center justify-center gap-3">
        <SpeechButton
          mode="listen"
          textToSpeak={currentPuzzle.instruction}
          label="🔊 Listen Instructions"
        />
        <div className="bg-sage/20 text-forest px-4 py-2 rounded-2xl font-bold text-sm">
          Found: {tappedIds.length} of {currentPuzzle.totalTargets} 🦋
        </div>
      </div>

      {/* Grid of Large Garden Objects */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-xl mx-auto pt-2">
        {currentPuzzle.grid.map((tile) => {
          const isSelected = tappedIds.includes(tile.id);
          return (
            <button
              key={tile.id}
              onClick={() => handleTileTap(tile)}
              className={`p-6 rounded-3xl border-3 font-bold text-2xl transition-all shadow-md flex flex-col items-center justify-center min-h-[130px] ${
                isSelected
                  ? 'bg-gold border-gold-dark text-forest ring-4 ring-gold/40 scale-95'
                  : 'bg-cream border-forest/20 text-forest hover:bg-sage/30 hover:scale-105'
              }`}
            >
              <span className="text-5xl mb-2">{tile.icon}</span>
              <span className="text-base font-bold text-ink">{tile.name}</span>
              {isSelected && <span className="text-xs font-extrabold text-forest uppercase mt-1">✓ Found</span>}
            </button>
          );
        })}
      </div>

      <FeedbackModal
        isOpen={feedbackState.isOpen}
        isCorrect={feedbackState.isCorrect}
        onNext={handleNextPuzzle}
        onRepeat={() => {
          setFeedbackState({ isOpen: false, isCorrect: false });
          setTappedIds([]);
        }}
      />
    </div>
  );
};

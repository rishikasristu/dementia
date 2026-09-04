import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { COGNITIVE_PUZZLES } from '../../types/data';
import { FeedbackModal } from './FeedbackModal';
import { SpeechButton } from '../common/SpeechButton';
import { Eye, HelpCircle, Sparkles } from 'lucide-react';
import { speakWithAzure } from '../../utils/speech';

export const MemoryGame = () => {
  const { aiState, recordActivity, language, t } = useApp();
  const [puzzleIndex, setPuzzleIndex] = useState(0);
  const [stage, setStage] = useState('memorize'); // 'memorize' | 'hidden'
  const [showHint, setShowHint] = useState(false);
  const [feedbackState, setFeedbackState] = useState({ isOpen: false, isCorrect: false });
  const [startTime, setStartTime] = useState(Date.now());

  const currentPuzzle = COGNITIVE_PUZZLES.memory[puzzleIndex] || COGNITIVE_PUZZLES.memory[0];

  useEffect(() => {
    setStartTime(Date.now());
    setStage('memorize');
    setShowHint(false);
    speakWithAzure(`${currentPuzzle.title}. ${currentPuzzle.instructions}`, language);
  }, [puzzleIndex, language]);

  const handleHideItems = () => {
    setStage('hidden');
    speakWithAzure(currentPuzzle.targetQuestion, language);
  };

  const handleSelectOption = (item) => {
    const timeTaken = Math.round((Date.now() - startTime) / 1000);
    const isCorrect = item.id === currentPuzzle.targetId;

    recordActivity({
      gameId: currentPuzzle.id,
      gameType: 'memory',
      isCorrect,
      timeTakenSeconds: timeTaken,
      hintsUsed: showHint ? 1 : 0
    });

    setFeedbackState({ isOpen: true, isCorrect });
  };

  const handleNextPuzzle = () => {
    setFeedbackState({ isOpen: false, isCorrect: false });
    setPuzzleIndex((prev) => (prev + 1) % COGNITIVE_PUZZLES.memory.length);
  };

  // Filter choices based on AI maxChoices
  const allChoices = [...currentPuzzle.items, ...currentPuzzle.distractors].slice(0, aiState.maxChoices);

  return (
    <div className="bg-[#FFFDF6] border-2 border-sage/40 rounded-3xl p-6 md:p-8 shadow-photo space-y-6">
      {/* Game Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-sage/30 pb-4">
        <div>
          <span className="text-xs uppercase font-extrabold tracking-wider text-terracotta">Activity 1: Memory Puzzle</span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-forest">{currentPuzzle.title}</h2>
        </div>

        {/* AI Hint Trigger Button */}
        {aiState.hintAvailable && stage === 'hidden' && (
          <button
            onClick={() => setShowHint(true)}
            className="flex items-center gap-2 bg-gold/20 hover:bg-gold/40 text-forest px-4 py-2 rounded-2xl border border-gold font-bold text-sm shadow-sm transition-all"
          >
            <Sparkles className="w-5 h-5 text-gold-dark" />
            <span>🌿 Need a Little Hint?</span>
          </button>
        )}
      </div>

      {/* Memorize Stage vs Recall Stage */}
      {stage === 'memorize' ? (
        <div className="space-y-6 text-center">
          <div className="bg-cream p-4 rounded-2xl border border-sage/30 inline-block">
            <p className="text-xl font-bold text-ink">{currentPuzzle.instructions}</p>
          </div>

          {/* Large Visible Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            {currentPuzzle.items.map((item) => (
              <div
                key={item.id}
                className={`p-6 rounded-3xl border-3 ${item.color} shadow-photo transform hover:scale-105 transition-all flex flex-col items-center justify-center min-h-[180px]`}
              >
                <span className="text-6xl mb-3">{item.icon}</span>
                <span className="text-2xl font-extrabold text-forest">{item.name}</span>
              </div>
            ))}
          </div>

          <button
            onClick={handleHideItems}
            className="px-8 py-4 bg-forest text-cream font-extrabold text-xl rounded-2xl shadow-md btn-tactile-forest"
          >
            I Have Memorized Them! 👁
          </button>
        </div>
      ) : (
        /* Hidden Recall Stage */
        <div className="space-y-6 text-center">
          <div className="bg-cream-light p-6 rounded-2xl border-2 border-terracotta/40 max-w-xl mx-auto">
            <h3 className="text-2xl font-extrabold text-forest">
              {currentPuzzle.targetQuestion}
            </h3>
            <SpeechButton
              mode="listen"
              textToSpeak={currentPuzzle.targetQuestion}
              label="🔊 Listen Question"
              className="mt-3 text-sm py-2 px-4"
            />
          </div>

          {/* AI Hint Box if Active */}
          {showHint && (
            <div className="bg-gold/20 border-2 border-gold p-4 rounded-2xl max-w-md mx-auto text-forest font-bold text-base animate-pulse">
              💡 Hint: Look for the bright yellow garden blossom!
            </div>
          )}

          {/* Tap Answer Choices */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto">
            {allChoices.map((choice) => (
              <button
                key={choice.id}
                onClick={() => handleSelectOption(choice)}
                className="p-6 bg-cream border-3 border-forest/20 text-forest hover:bg-forest hover:text-cream font-extrabold text-2xl rounded-3xl shadow-md transition-all flex items-center justify-center gap-4 group min-h-[120px]"
              >
                <span className="text-4xl group-hover:scale-110 transition-transform">{choice.icon}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Feedback Modal */}
      <FeedbackModal
        isOpen={feedbackState.isOpen}
        isCorrect={feedbackState.isCorrect}
        onNext={handleNextPuzzle}
        onRepeat={() => {
          setFeedbackState({ isOpen: false, isCorrect: false });
          setStage('memorize');
        }}
      />
    </div>
  );
};

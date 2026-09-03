import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { COGNITIVE_PUZZLES } from '../../types/data';
import { FeedbackModal } from './FeedbackModal';
import { SpeechButton } from '../common/SpeechButton';
import { speakWithAzure } from '../../utils/speech';
export const PatternGame = () => {
  const { aiState, recordActivity, language } = useApp();
  const [puzzleIndex, setPuzzleIndex] = useState(0);
  const [feedbackState, setFeedbackState] = useState({ isOpen: false, isCorrect: false });
  const [startTime, setStartTime] = useState(Date.now());

  const currentPuzzle = COGNITIVE_PUZZLES.pattern[puzzleIndex] || COGNITIVE_PUZZLES.pattern[0];

  useEffect(() => {
    setStartTime(Date.now());
    speakWithAzure(currentPuzzle.instruction, language);
  }, [puzzleIndex, language]);

  const handleSelectOption = (option) => {
    const timeTaken = Math.round((Date.now() - startTime) / 1000);
    const isCorrect = option.label === currentPuzzle.correctAnswer || option.icon === currentPuzzle.correctAnswer.split(' ')[0];

    recordActivity({
      gameId: currentPuzzle.id,
      gameType: 'pattern',
      isCorrect,
      timeTakenSeconds: timeTaken,
      hintsUsed: 0
    });

    setFeedbackState({ isOpen: true, isCorrect });
  };

  const handleNextPuzzle = () => {
    setFeedbackState({ isOpen: false, isCorrect: false });
    setPuzzleIndex((prev) => (prev + 1) % COGNITIVE_PUZZLES.pattern.length);
  };

  // Filter options based on AI maxChoices
  const availableOptions = currentPuzzle.options.slice(0, aiState.maxChoices);

  return (
    <div className="bg-[#FFFDF6] border-2 border-sage/40 rounded-3xl p-6 md:p-8 shadow-photo space-y-6 text-center">
      <div>
        <span className="text-xs uppercase font-extrabold tracking-wider text-terracotta">Activity 3: Visual Pattern Sequence</span>
        <h2 className="text-2xl md:text-3xl font-extrabold text-forest">{currentPuzzle.title}</h2>
        <p className="text-xl font-bold text-ink mt-2">{currentPuzzle.instruction}</p>
      </div>

      <div className="flex justify-center">
        <SpeechButton
          mode="listen"
          textToSpeak={currentPuzzle.instruction}
          label="🔊 Listen Sequence"
        />
      </div>

      {/* Visual Sequence Card Row */}
      <div className="flex flex-wrap items-center justify-center gap-3 bg-cream p-6 rounded-3xl border-2 border-sage/30 max-w-2xl mx-auto shadow-sm">
        {currentPuzzle.sequenceDisplay.map((seq, idx) => (
          <div
            key={idx}
            className={`flex flex-col items-center justify-center p-4 rounded-2xl border-2 min-w-[80px] min-h-[90px] ${
              seq.icon === '❓'
                ? 'bg-gold/30 border-gold-dark text-forest animate-pulse scale-105'
                : 'bg-cream-light border-forest/20 text-forest'
            }`}
          >
            <span className="text-4xl">{seq.icon}</span>
            <span className="text-xs font-bold text-ink/70 mt-1">{seq.label}</span>
          </div>
        ))}
      </div>

      {/* Choices to complete pattern */}
      <div className="space-y-3">
        <p className="text-xs font-extrabold text-forest uppercase tracking-widest">Select the item that comes next:</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-xl mx-auto">
          {availableOptions.map((opt) => (
            <button
              key={opt.id}
              onClick={() => handleSelectOption(opt)}
              className="p-6 bg-cream border-3 border-forest/20 hover:bg-forest hover:text-cream text-forest font-extrabold text-2xl rounded-3xl shadow-md transition-all flex flex-col items-center justify-center gap-2 group min-h-[120px]"
            >
              <span className="text-5xl group-hover:scale-110 transition-transform">{opt.icon}</span>
              <span className="text-base font-extrabold">{opt.label}</span>
            </button>
          ))}
        </div>
      </div>

      <FeedbackModal
        isOpen={feedbackState.isOpen}
        isCorrect={feedbackState.isCorrect}
        onNext={handleNextPuzzle}
        onRepeat={() => {
          setFeedbackState({ isOpen: false, isCorrect: false });
        }}
      />
    </div>
  );
};

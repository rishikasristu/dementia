import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { COGNITIVE_PUZZLES } from '../../types/data';
import { FeedbackModal } from './FeedbackModal';
import { SpeechButton } from '../common/SpeechButton';
import { Sparkles, Eye } from 'lucide-react';
import { speakText } from '../../utils/speech';

export const ObjectRecognitionGame = () => {
  const { aiState, recordActivity, language } = useApp();

  const [puzzleIndex, setPuzzleIndex] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [feedbackState, setFeedbackState] = useState({
    isOpen: false,
    isCorrect: false
  });
  const [startTime, setStartTime] = useState(Date.now());

  const puzzles = COGNITIVE_PUZZLES.objectRecognition;
  const currentPuzzle = puzzles[puzzleIndex] || puzzles[0];

  useEffect(() => {
    setStartTime(Date.now());
    setShowHint(false);

    speakText(
      currentPuzzle.title + ". " + currentPuzzle.instruction,
      language
    );
  }, [puzzleIndex, language, currentPuzzle]);

  const handleSelectOption = (option) => {
    const timeTaken = Math.round(
      (Date.now() - startTime) / 1000
    );

    const isCorrect =
      option.label === currentPuzzle.correctAnswer;

    recordActivity({
      gameId: currentPuzzle.id,
      gameType: 'objectRecognition',
      isCorrect: isCorrect,
      timeTakenSeconds: timeTaken,
      hintsUsed: showHint ? 1 : 0
    });

    setFeedbackState({
      isOpen: true,
      isCorrect: isCorrect
    });
  };

  const handleNextPuzzle = () => {
    setFeedbackState({
      isOpen: false,
      isCorrect: false
    });

    setPuzzleIndex((prev) => {
      return (prev + 1) % puzzles.length;
    });
  };

  const availableOptions = currentPuzzle.options.slice(
    0,
    Math.min(aiState.maxChoices, currentPuzzle.options.length)
  );

  return (
    <div className="bg-[#FFFDF6] border-2 border-sage/40 rounded-3xl p-6 md:p-8 shadow-photo space-y-6">

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-sage/30 pb-4">

        <div>
          <span className="text-xs uppercase font-extrabold tracking-wider text-terracotta">
            Activity: Object Recognition
          </span>

          <h2 className="text-2xl md:text-3xl font-extrabold text-forest">
            {currentPuzzle.title}
          </h2>
        </div>

        {aiState.hintAvailable && (
          <button
            onClick={() => setShowHint(true)}
            className="flex items-center gap-2 bg-gold/20 hover:bg-gold/40 text-forest px-4 py-2 rounded-2xl border border-gold font-bold text-sm shadow-sm transition-all"
          >
            <Sparkles className="w-5 h-5 text-gold-dark" />
            Need a Hint?
          </button>
        )}

      </div>

      <div className="text-center">

        <div className="bg-cream p-4 rounded-2xl border border-sage/30 inline-block">
          <p className="text-xl font-bold text-ink">
            {currentPuzzle.instruction}
          </p>
        </div>

        <div className="mt-3">
          <SpeechButton
            mode="listen"
            textToSpeak={currentPuzzle.instruction}
            label="Listen"
            className="text-sm py-2 px-4"
          />
        </div>

      </div>

      <div className="flex justify-center">

        <div className="w-full max-w-md min-h-[220px] bg-cream-light border-2 border-sage/40 rounded-3xl shadow-photo flex flex-col items-center justify-center p-8">

          <Eye className="w-8 h-8 text-forest mb-4" />

          <span className="text-8xl mb-4">
            {currentPuzzle.object.icon}
          </span>

          <p className="text-lg font-bold text-forest">
            Look carefully at the object
          </p>

        </div>

      </div>

      {showHint && (
        <div className="bg-gold/20 border-2 border-gold p-4 rounded-2xl max-w-md mx-auto text-forest font-bold text-center animate-pulse">
          Hint: {currentPuzzle.hint}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">

        {availableOptions.map((option) => (
          <button
            key={option.id}
            onClick={() => handleSelectOption(option)}
            className="p-6 bg-cream border-3 border-forest/20 text-forest hover:bg-forest hover:text-cream font-extrabold text-xl rounded-3xl shadow-md transition-all flex items-center justify-center gap-4 min-h-[110px]"
          >

            <span className="text-4xl">
              {option.icon}
            </span>

            <span>
              {option.label}
            </span>

          </button>
        ))}

      </div>

      <FeedbackModal
        isOpen={feedbackState.isOpen}
        isCorrect={feedbackState.isCorrect}
        onNext={handleNextPuzzle}
        onRepeat={() => {
          setFeedbackState({
            isOpen: false,
            isCorrect: false
          });

          setShowHint(false);
        }}
      />

    </div>
  );
};
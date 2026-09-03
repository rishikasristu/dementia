import React, { useState } from 'react';
import { COGNITIVE_PUZZLES } from '../../types/data';
import { useApp } from '../../context/AppContext';
import {
  Volume2,
  RotateCcw,
  ArrowRight,
  CheckCircle,
  XCircle
} from 'lucide-react';

export const DailyRoutineGame = () => {
  const { recordGameResult, aiState } = useApp();

  const puzzles = COGNITIVE_PUZZLES.dailyRoutine || [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  const [startTime, setStartTime] = useState(Date.now());

  if (puzzles.length === 0) {
    return (
      <div className="bg-cream rounded-3xl border border-sage/30 p-8 text-center">
        <p className="text-forest font-bold">
          No Daily Routine questions found.
        </p>
      </div>
    );
  }

  const puzzle = puzzles[currentIndex];

  const speakText = (text) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.8;

      window.speechSynthesis.speak(utterance);
    }
  };

  const handleAnswer = (option) => {
    if (answered) return;

    // Correct answer comparison using LABEL ONLY
    const answerIsCorrect = option.label === puzzle.correctAnswer;

    setSelectedAnswer(option.id);
    setIsCorrect(answerIsCorrect);
    setAnswered(true);

    const responseTime = Math.round(
      (Date.now() - startTime) / 1000
    );

    if (recordGameResult) {
      recordGameResult({
        gameType: 'dailyRoutine',
        correct: answerIsCorrect,
        responseTime,
        hintsUsed: 0
      });
    }
  };

  const handleNext = () => {
    // Move to next question
    if (currentIndex < puzzles.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    } else {
      // After last question, start again from first
      setCurrentIndex(0);
    }

    setSelectedAnswer(null);
    setAnswered(false);
    setIsCorrect(null);
    setStartTime(Date.now());
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setAnswered(false);
    setIsCorrect(null);
    setStartTime(Date.now());
  };

  const visibleOptions = puzzle.options.slice(
    0,
    aiState?.maxChoices || 3
  );

  return (
    <div className="bg-cream rounded-3xl border border-sage/30 shadow-photo p-6 md:p-8 space-y-6">

      {/* Header */}
      <div className="flex items-start justify-between gap-4">

        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-forest">
            🌞 {puzzle.title}
          </h2>

          <p className="text-forest/70 font-medium mt-2">
            {puzzle.instruction}
          </p>
        </div>

        <button
          onClick={() => speakText(puzzle.instruction)}
          className="p-3 rounded-2xl bg-gold/20 hover:bg-gold/30 text-forest transition-all"
          title="Listen"
        >
          <Volume2 className="w-6 h-6" />
        </button>

      </div>

      {/* Routine Sequence */}
      <div className="bg-cream-dark rounded-3xl p-6 border border-sage/30">

        <p className="text-sm font-bold text-forest/60 mb-5">
          DAILY ROUTINE
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

          {puzzle.sequence.map((step, index) => (
            <div
              key={index}
              className="bg-cream rounded-2xl p-5 text-center border border-sage/30 shadow-sm"
            >
              <div className="text-5xl mb-3">
                {step.icon}
              </div>

              <p className="font-extrabold text-forest">
                {step.label}
              </p>
            </div>
          ))}

        </div>

        <div className="text-center mt-6">
          <div className="text-5xl mb-2">
            ❓
          </div>

          <p className="font-bold text-forest text-lg">
            What comes next?
          </p>
        </div>

      </div>

      {/* Answer Options */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        {visibleOptions.map((option) => {

          const optionIsCorrect =
            option.label === puzzle.correctAnswer;

          const isSelected =
            selectedAnswer === option.id;

          let buttonStyle =
            'bg-cream-light border-sage/40 hover:bg-sage/20';

          // Selected correct answer
          if (
            answered &&
            isSelected &&
            optionIsCorrect
          ) {
            buttonStyle =
              'bg-green-100 border-green-500';
          }

          // Selected wrong answer
          if (
            answered &&
            isSelected &&
            !optionIsCorrect
          ) {
            buttonStyle =
              'bg-amber-100 border-amber-500';
          }

          // Show correct answer after wrong answer
          if (
            answered &&
            optionIsCorrect &&
            !isSelected
          ) {
            buttonStyle =
              'bg-green-50 border-green-300';
          }

          return (
            <button
              key={option.id}
              onClick={() => handleAnswer(option)}
              disabled={answered}
              className={`border-2 rounded-2xl p-5 transition-all text-center ${buttonStyle}`}
            >

              <div className="text-5xl mb-3">
                {option.icon}
              </div>

              <p className="font-extrabold text-forest">
                {option.label}
              </p>

            </button>
          );
        })}

      </div>

      {/* Feedback */}
      {answered && (
        <div
          className={`rounded-2xl p-5 flex items-center gap-4 ${
            isCorrect
              ? 'bg-green-50 border border-green-300'
              : 'bg-amber-50 border border-amber-300'
          }`}
        >

          {isCorrect ? (
            <CheckCircle className="w-8 h-8 text-green-600 flex-shrink-0" />
          ) : (
            <XCircle className="w-8 h-8 text-amber-600 flex-shrink-0" />
          )}

          <div>

            {isCorrect ? (
              <>
                <p className="font-extrabold text-green-700 text-lg">
                  Correct Answer! 🎉
                </p>

                <p className="text-forest/70 text-sm">
                  Excellent! You selected the correct next step.
                </p>
              </>
            ) : (
              <>
                <p className="font-extrabold text-amber-700 text-lg">
                  Well tried! 🌿
                </p>

                <p className="text-forest/70 text-sm">
                  The correct answer is{' '}
                  <strong>{puzzle.correctAnswer}</strong>
                </p>
              </>
            )}

          </div>

        </div>
      )}

      {/* Controls */}
      <div className="flex flex-wrap justify-between gap-3 pt-2">

        <button
          onClick={handleRestart}
          className="flex items-center gap-2 px-5 py-3 rounded-xl bg-cream-dark text-forest font-bold hover:bg-sage/20 transition-all"
        >
          <RotateCcw className="w-5 h-5" />
          Restart
        </button>

        {answered && (
          <button
            onClick={handleNext}
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-forest text-cream font-bold hover:scale-[1.02] transition-all"
          >
            {currentIndex === puzzles.length - 1
              ? 'Start Again'
              : 'Next Question'}

            <ArrowRight className="w-5 h-5" />
          </button>
        )}

      </div>

      {/* Progress */}
      <div className="text-center text-sm text-forest/60 font-medium">
        Question {currentIndex + 1} of {puzzles.length}
      </div>

    </div>
  );
};
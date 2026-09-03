import React, { useState, useEffect } from 'react';
import { COGNITIVE_PUZZLES } from "../../types/data";
import { Volume2, RotateCcw, ArrowRight, CheckCircle } from 'lucide-react';

export const OddOneOutGame = () => {
  const puzzles = COGNITIVE_PUZZLES.oddOneOut;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedId, setSelectedId] = useState(null);
  const [result, setResult] = useState(null);
  const [shuffledItems, setShuffledItems] = useState([]);

  const currentPuzzle = puzzles[currentIndex];

  // Shuffle items whenever question changes
  useEffect(() => {
    if (currentPuzzle) {
      const shuffled = [...currentPuzzle.items].sort(
        () => Math.random() - 0.5
      );

      setShuffledItems(shuffled);
      setSelectedId(null);
      setResult(null);
    }
  }, [currentIndex]);

  const speakText = (text) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();

      const speech = new SpeechSynthesisUtterance(text);
      speech.rate = 0.8;
      speech.pitch = 1;

      window.speechSynthesis.speak(speech);
    }
  };

  const handleSelect = (item) => {
    // Prevent changing answer after result
    if (result !== null) return;

    setSelectedId(item.id);

    // IMPORTANT:
    // Compare item.id with correctAnswerId
    // NOT label, NOT typed text
    if (item.id === currentPuzzle.correctAnswerId) {
      setResult('correct');

      speakText(
        `Correct! ${item.label} is the different item. ${currentPuzzle.explanation}`
      );
    } else {
      setResult('wrong');

      speakText(
        `Good effort. Try again and look carefully at which item is different.`
      );
    }
  };

  const handleTryAgain = () => {
    setSelectedId(null);
    setResult(null);
  };

  const handleNext = () => {
    if (currentIndex < puzzles.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedId(null);
    setResult(null);
  };

  if (!currentPuzzle) {
    return (
      <div className="text-center p-10">
        <p>No Odd One Out questions found.</p>
      </div>
    );
  }

  return (
    <div className="bg-cream rounded-3xl border border-sage/40 shadow-photo p-6 md:p-8 space-y-8">

      {/* Header */}
      <div className="text-center space-y-4">

        <h2 className="text-2xl md:text-3xl font-extrabold text-forest">
          {currentPuzzle.title}
        </h2>

        <p className="text-lg md:text-xl font-bold text-forest/80">
          {currentPuzzle.instruction}
        </p>

        <button
          onClick={() => speakText(currentPuzzle.instruction)}
          className="inline-flex items-center gap-3 bg-forest text-cream px-6 py-4 rounded-2xl font-bold shadow-md hover:scale-105 transition-transform"
        >
          <Volume2 className="w-6 h-6" />
          Listen to Question
        </button>

      </div>

      {/* Items */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

        {shuffledItems.map((item) => {
          const isSelected = selectedId === item.id;

          let cardStyle =
            'bg-white border-sage/40 hover:border-forest hover:shadow-lg';

          // Correct selected answer
          if (
            result === 'correct' &&
            item.id === currentPuzzle.correctAnswerId
          ) {
            cardStyle =
              'bg-green-100 border-green-500 ring-2 ring-green-400';
          }

          // Wrong selected answer
          if (
            result === 'wrong' &&
            isSelected
          ) {
            cardStyle =
              'bg-red-100 border-red-500';
          }

          return (
            <button
              key={item.id}
              onClick={() => handleSelect(item)}
              disabled={result !== null}
              className={`min-h-[200px] flex flex-col items-center justify-center gap-5 rounded-3xl border-2 p-6 transition-all ${cardStyle}`}
            >

              <span className="text-6xl md:text-7xl">
                {item.icon}
              </span>

              <span className="text-xl font-extrabold text-forest">
                {item.label}
              </span>

            </button>
          );
        })}

      </div>

      {/* Correct Result */}
      {result === 'correct' && (
        <div className="bg-green-50 border-2 border-green-300 rounded-3xl p-6 text-center space-y-4">

          <div className="flex justify-center">
            <CheckCircle className="w-14 h-14 text-green-600" />
          </div>

          <h3 className="text-2xl font-extrabold text-green-700">
            Wonderful! Correct Answer! 🎉
          </h3>

          <p className="text-lg font-medium text-forest">
            {currentPuzzle.explanation}
          </p>

          <button
            onClick={handleNext}
            className="inline-flex items-center gap-2 bg-forest text-cream px-7 py-4 rounded-2xl font-bold hover:scale-105 transition-transform"
          >
            Next Question
            <ArrowRight className="w-5 h-5" />
          </button>

        </div>
      )}

      {/* Wrong Result */}
      {result === 'wrong' && (
        <div className="bg-amber-50 border-2 border-amber-300 rounded-3xl p-6 text-center space-y-4">

          <h3 className="text-2xl font-extrabold text-amber-700">
            Good Effort 🌱
          </h3>

          <p className="text-lg font-medium text-forest">
            Look carefully. Which item does not belong with the other three?
          </p>

          <button
            onClick={handleTryAgain}
            className="inline-flex items-center gap-2 bg-terracotta text-cream px-7 py-4 rounded-2xl font-bold hover:scale-105 transition-transform"
          >
            <RotateCcw className="w-5 h-5" />
            Try Again
          </button>

        </div>
      )}

      {/* Question Counter */}
      <div className="text-center text-forest/60 font-bold">
        Question {currentIndex + 1} of {puzzles.length}
      </div>

      {/* Restart */}
      <div className="flex justify-center">

        <button
          onClick={handleRestart}
          className="text-forest font-bold flex items-center gap-2 hover:underline"
        >
          <RotateCcw className="w-4 h-4" />
          Restart Activity
        </button>

      </div>

    </div>
  );
};
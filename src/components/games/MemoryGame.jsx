import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { COGNITIVE_PUZZLES } from '../../types/data';
import { FeedbackModal } from './FeedbackModal';
import { SpeechButton } from '../common/SpeechButton';
import { Sparkles } from 'lucide-react';
import { speakText } from '../../utils/speech';

export const MemoryGame = () => {
  const {
    aiState,
    recordGameResult,
    language
  } = useApp();

  const [puzzleIndex, setPuzzleIndex] = useState(0);
  const [stage, setStage] = useState('memorize');

  const [showHint, setShowHint] = useState(false);

  const [feedbackState, setFeedbackState] = useState({
    isOpen: false,
    isCorrect: false
  });

  const [startTime, setStartTime] = useState(Date.now());

  // Score Tracking
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const [score, setScore] = useState(0);

  const currentPuzzle =
    COGNITIVE_PUZZLES.memory[puzzleIndex] ||
    COGNITIVE_PUZZLES.memory[0];

  const totalAnswered =
    correctAnswers + wrongAnswers;

  const accuracy =
    totalAnswered > 0
      ? Math.round(
          (correctAnswers / totalAnswered) * 100
        )
      : 0;


  useEffect(() => {
    setStartTime(Date.now());
    setStage('memorize');
    setShowHint(false);

    speakText(
      `${currentPuzzle.title}. ${currentPuzzle.instructions}`,
      language
    );

  }, [puzzleIndex, language]);


  const handleHideItems = () => {
    setStage('hidden');

    speakText(
      currentPuzzle.targetQuestion,
      language
    );
  };


  const handleSelectOption = (item) => {

    const timeTaken = Math.round(
      (Date.now() - startTime) / 1000
    );

    const isCorrect =
      item.id === currentPuzzle.targetId;


    // Update Score
    if (isCorrect) {
      setCorrectAnswers((prev) => prev + 1);
      setScore((prev) => prev + 1);
    } else {
      setWrongAnswers((prev) => prev + 1);
    }


    // Save Game Result
    recordGameResult({
      gameId: currentPuzzle.id,

      gameType: 'memory',

      correct: isCorrect,

      score: isCorrect ? 1 : 0,

      correctAnswers:
        isCorrect ? 1 : 0,

      wrongAnswers:
        isCorrect ? 0 : 1,

      accuracy:
        isCorrect ? 100 : 0,

      responseTime:
        timeTaken,

      hintsUsed:
        showHint ? 1 : 0,

      difficulty:
        aiState.difficulty || 'Easy'
    });


    setFeedbackState({
      isOpen: true,
      isCorrect
    });

  };


  const handleNextPuzzle = () => {

    setFeedbackState({
      isOpen: false,
      isCorrect: false
    });

    setPuzzleIndex((prev) =>
      (prev + 1) %
      COGNITIVE_PUZZLES.memory.length
    );

  };


  // Number of choices based on AI difficulty
  const maxChoices =
    aiState.maxChoices || 4;

  const allChoices = [
    ...currentPuzzle.items,
    ...currentPuzzle.distractors
  ].slice(0, maxChoices);


  return (
    <div className="bg-[#FFFDF6] border-2 border-sage/40 rounded-3xl p-6 md:p-8 shadow-photo space-y-6">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-sage/30 pb-4">

        <div>
          <span className="text-xs uppercase font-extrabold tracking-wider text-terracotta">
            Activity: Memory Puzzle
          </span>

          <h2 className="text-2xl md:text-3xl font-extrabold text-forest">
            {currentPuzzle.title}
          </h2>
        </div>


        {/* Difficulty */}
        <div className="bg-sage/20 border border-sage/40 px-4 py-2 rounded-2xl text-forest font-bold">
          Difficulty: {aiState.difficulty || 'Easy'}
        </div>

      </div>


      {/* Score Dashboard */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">

        <div className="bg-forest/10 rounded-2xl p-4 text-center">
          <p className="text-xs font-bold text-forest/70">
            Score
          </p>

          <p className="text-2xl font-extrabold text-forest">
            {score}
          </p>
        </div>


        <div className="bg-green-50 rounded-2xl p-4 text-center border border-green-200">
          <p className="text-xs font-bold text-green-700">
            Correct
          </p>

          <p className="text-2xl font-extrabold text-green-700">
            {correctAnswers}
          </p>
        </div>


        <div className="bg-red-50 rounded-2xl p-4 text-center border border-red-200">
          <p className="text-xs font-bold text-red-700">
            Wrong
          </p>

          <p className="text-2xl font-extrabold text-red-700">
            {wrongAnswers}
          </p>
        </div>


        <div className="bg-gold/20 rounded-2xl p-4 text-center border border-gold/40">
          <p className="text-xs font-bold text-forest">
            Accuracy
          </p>

          <p className="text-2xl font-extrabold text-forest">
            {accuracy}%
          </p>
        </div>

      </div>


      {/* AI Hint */}
      {aiState.hintAvailable && stage === 'hidden' && (
        <button
          onClick={() => setShowHint(true)}
          className="flex items-center gap-2 bg-gold/20 hover:bg-gold/40 text-forest px-4 py-2 rounded-2xl border border-gold font-bold text-sm shadow-sm transition-all"
        >
          <Sparkles className="w-5 h-5 text-gold-dark" />

          <span>
            🌿 Need a Little Hint?
          </span>
        </button>
      )}


      {/* Memorize Stage */}
      {stage === 'memorize' ? (

        <div className="space-y-6 text-center">

          <div className="bg-cream p-4 rounded-2xl border border-sage/30 inline-block">
            <p className="text-xl font-bold text-ink">
              {currentPuzzle.instructions}
            </p>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">

            {currentPuzzle.items.map((item) => (

              <div
                key={item.id}
                className={`p-6 rounded-3xl border-3 ${item.color} shadow-photo flex flex-col items-center justify-center min-h-[180px]`}
              >

                <span className="text-6xl mb-3">
                  {item.icon}
                </span>

                <span className="text-2xl font-extrabold text-forest">
                  {item.name}
                </span>

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

        /* Recall Stage */
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


          {/* Hint */}
          {showHint && (

            <div className="bg-gold/20 border-2 border-gold p-4 rounded-2xl max-w-md mx-auto text-forest font-bold">

              💡 Hint: Try remembering where you saw the item.

            </div>

          )}


          {/* Answer Choices */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto">

            {allChoices.map((choice) => (

              <button
                key={choice.id}

                onClick={() =>
                  handleSelectOption(choice)
                }

                className="p-6 bg-cream border-3 border-forest/20 text-forest hover:bg-forest hover:text-cream font-extrabold text-2xl rounded-3xl shadow-md transition-all flex items-center justify-center gap-4 group min-h-[120px]"
              >

                <span className="text-4xl group-hover:scale-110 transition-transform">
                  {choice.icon}
                </span>

                <span>
                  {choice.name}
                </span>

              </button>

            ))}

          </div>

        </div>

      )}


      {/* Feedback */}
      <FeedbackModal
        isOpen={feedbackState.isOpen}
        isCorrect={feedbackState.isCorrect}

        onNext={handleNextPuzzle}

        onRepeat={() => {

          setFeedbackState({
            isOpen: false,
            isCorrect: false
          });

          setStage('memorize');

          setShowHint(false);

          setStartTime(Date.now());

        }}
      />

    </div>
  );
};
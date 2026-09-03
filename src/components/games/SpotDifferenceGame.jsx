import React, { useState } from 'react';
import { COGNITIVE_PUZZLES } from '../../types/data';
import { useApp } from '../../context/AppContext';

import {
  Volume2,
  RotateCcw,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

export const SpotDifferenceGame = () => {
  const { recordActivity } = useApp();

  const puzzles = COGNITIVE_PUZZLES.spotDifference || [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [foundDifferences, setFoundDifferences] = useState([]);
  const [foundPositions, setFoundPositions] = useState({});
  const [wrongClicks, setWrongClicks] = useState(0);
  const [message, setMessage] = useState('');
  const [gameCompleted, setGameCompleted] = useState(false);
  const [allCompleted, setAllCompleted] = useState(false);
  const [startTime, setStartTime] = useState(Date.now());

  const puzzle = puzzles[currentIndex];

  if (!puzzle) {
    return (
      <div className="bg-cream rounded-3xl p-8 text-center">
        <h2 className="text-2xl font-bold text-forest">
          No Spot the Difference puzzles available.
        </h2>
      </div>
    );
  }

  const speakText = (text) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.8;

      window.speechSynthesis.speak(utterance);
    }
  };

  const handleClick = (event) => {
    if (gameCompleted || allCompleted) return;

    const rect = event.currentTarget.getBoundingClientRect();

    const clickX =
      ((event.clientX - rect.left) / rect.width) * 100;

    const clickY =
      ((event.clientY - rect.top) / rect.height) * 100;

    let clickedDifference = null;
    let closestDistance = Infinity;

    /*
      First try the coordinates from data.js.
      A large hit area is used so elderly users
      do not need to tap exactly on one pixel.
    */
    puzzle.differences.forEach((difference) => {
      if (foundDifferences.includes(difference.id)) return;

      const differenceX = parseFloat(difference.left);
      const differenceY = parseFloat(difference.top);

      const distance = Math.sqrt(
        Math.pow(clickX - differenceX, 2) +
        Math.pow(clickY - differenceY, 2)
      );

      if (distance < 25 && distance < closestDistance) {
        closestDistance = distance;
        clickedDifference = difference;
      }
    });

    /*
      If the click does not match the stored coordinates,
      allow the user to identify the remaining difference
      by clicking on Picture B.

      This is especially useful when image coordinates
      are slightly different from the original image.
    */
    if (!clickedDifference) {
      const remainingDifferences =
        puzzle.differences.filter(
          (difference) =>
            !foundDifferences.includes(difference.id)
        );

      /*
        After the known coordinates have been found,
        the next valid click on Picture B is treated
        as the next difference.
      */
      if (
        foundDifferences.length >= 3 &&
        remainingDifferences.length > 0
      ) {
        clickedDifference = remainingDifferences[0];
      }
    }

    // --------------------------------
    // CORRECT DIFFERENCE
    // --------------------------------
    if (clickedDifference) {
      if (foundDifferences.includes(clickedDifference.id)) {
        setMessage('You already found this one! 😊');
        return;
      }

      const updatedFound = [
        ...foundDifferences,
        clickedDifference.id
      ];

      setFoundDifferences(updatedFound);

      /*
        Save the ACTUAL click position.

        This means the green circle appears exactly
        where the user clicked, instead of depending
        completely on the old coordinate.
      */
      setFoundPositions((prev) => ({
        ...prev,
        [clickedDifference.id]: {
          left: clickX,
          top: clickY
        }
      }));

      // --------------------------------
      // ALL DIFFERENCES FOUND
      // --------------------------------
      if (
        updatedFound.length === puzzle.differences.length
      ) {
        setGameCompleted(true);

        const responseTime = Math.round(
          (Date.now() - startTime) / 1000
        );

        const totalAttempts =
          puzzle.differences.length + wrongClicks;

        const accuracy =
          totalAttempts > 0
            ? Math.round(
                (puzzle.differences.length / totalAttempts) * 100
              )
            : 100;

        if (recordActivity) {
          recordActivity({
            gameId: puzzle.id,
            gameType: 'spotDifference',
            isCorrect: true,
            timeTakenSeconds: responseTime,
            hintsUsed: 0,
            correctAnswers: puzzle.differences.length,
            wrongAnswers: wrongClicks,
            accuracy: accuracy,
            difficulty: puzzle.difficulty || 'Easy',
            date: new Date().toISOString().split('T')[0]
          });
        }

        setMessage(
          '🎉 Wonderful! You found all 5 differences!'
        );
      } else {
        setMessage(
          'Correct! ✓ Find another difference 🔍'
        );
      }

      return;
    }

    // --------------------------------
    // WRONG CLICK
    // --------------------------------

    setWrongClicks((prev) => prev + 1);

    setMessage(
      'Good try! Look carefully and try again 🌿'
    );
  };

  const resetPuzzle = () => {
    setFoundDifferences([]);
    setFoundPositions({});
    setWrongClicks(0);
    setMessage('');
    setGameCompleted(false);
    setStartTime(Date.now());
  };

  const handleNext = () => {
    if (currentIndex < puzzles.length - 1) {
      setCurrentIndex((prev) => prev + 1);

      setFoundDifferences([]);
      setFoundPositions({});
      setWrongClicks(0);
      setMessage('');
      setGameCompleted(false);
      setStartTime(Date.now());
    } else {
      setAllCompleted(true);
    }
  };

  const handlePlayAgain = () => {
    setCurrentIndex(0);
    setFoundDifferences([]);
    setFoundPositions({});
    setWrongClicks(0);
    setMessage('');
    setGameCompleted(false);
    setAllCompleted(false);
    setStartTime(Date.now());
  };

  // --------------------------------
  // ALL PUZZLES COMPLETED
  // --------------------------------

  if (allCompleted) {
    return (
      <div
        className="
          bg-cream rounded-3xl
          border border-sage/30
          shadow-photo
          p-8 md:p-12
          text-center space-y-6
        "
      >
        <div className="text-7xl">
          🎉
        </div>

        <h2 className="text-3xl font-extrabold text-forest">
          Amazing Work!
        </h2>

        <p className="text-forest/70 text-lg">
          You completed all {puzzles.length} Spot the Difference puzzles!
        </p>

        <button
          onClick={handlePlayAgain}
          className="
            inline-flex items-center gap-2
            px-6 py-3 rounded-xl
            bg-forest text-cream
            font-bold hover:scale-[1.02]
            transition-all
          "
        >
          <RotateCcw className="w-5 h-5" />
          Play Again
        </button>
      </div>
    );
  }

  return (
    <div
      className="
        bg-cream rounded-3xl
        border border-sage/30
        shadow-photo
        p-6 md:p-8
        space-y-6
      "
    >

      {/* Header */}
      <div className="flex justify-between items-start gap-4">

        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-forest">
            🔍 {puzzle.title}
          </h2>

          <p className="text-forest/70 font-medium mt-2">
            {puzzle.instruction}
          </p>
        </div>

        <button
          onClick={() => speakText(puzzle.instruction)}
          className="
            p-3 rounded-2xl
            bg-gold/20 hover:bg-gold/30
            text-forest
          "
          title="Listen"
        >
          <Volume2 className="w-6 h-6" />
        </button>

      </div>

      {/* Puzzle Progress */}
      <div className="text-center">
        <p className="text-sm font-bold text-forest/60">
          Puzzle {currentIndex + 1} of {puzzles.length}
        </p>
      </div>

      {/* Difference Progress */}
      <div className="bg-cream-dark rounded-2xl p-4 text-center">
        <p className="font-bold text-forest">
          Differences Found:{' '}

          <span className="text-green-600">
            {foundDifferences.length}
          </span>

          {' / '}

          {puzzle.differences.length}
        </p>
      </div>

      {/* Combined Picture */}
      <div
        className="
          relative w-full
          rounded-3xl overflow-hidden
          border-4 border-sage/30
          bg-white
        "
      >

        <img
          src={puzzle.image}
          alt={puzzle.title}
          className="
            w-full h-auto block
            select-none
          "
          draggable="false"
        />

        {/* Picture B clickable area */}
        <div
          onClick={handleClick}
          className="
            absolute
            top-0 right-0
            w-1/2 h-full
            cursor-crosshair
          "
        >

          {/* Green circles */}
          {puzzle.differences.map((difference) => {

            const isFound =
              foundDifferences.includes(difference.id);

            if (!isFound) return null;

            const position =
              foundPositions[difference.id];

            if (!position) return null;

            return (
              <div
                key={difference.id}
                className="
                  absolute
                  w-12 h-12
                  md:w-16 md:h-16
                  rounded-full
                  border-4 border-green-500
                  bg-green-400/20
                  pointer-events-none
                  shadow-lg
                "
                style={{
                  left: `${position.left}%`,
                  top: `${position.top}%`,
                  transform: 'translate(-50%, -50%)'
                }}
              />
            );
          })}

        </div>

      </div>

      {/* Helpful instruction */}
      {!message && !gameCompleted && (
        <div
          className="
            text-center
            bg-sage/10
            rounded-2xl
            p-4
          "
        >
          <p className="text-forest font-bold">
            👆 Tap on Picture B where you see a difference
          </p>
        </div>
      )}

      {/* Feedback */}
      {message && (
        <div
          className={`
            rounded-2xl p-5
            flex items-center gap-4
            ${
              message.includes('Correct') ||
              message.includes('Wonderful')
                ? 'bg-green-50 border border-green-300'
                : 'bg-amber-50 border border-amber-300'
            }
          `}
        >

          <CheckCircle
            className="
              w-8 h-8
              text-green-600
              flex-shrink-0
            "
          />

          <p className="font-bold text-forest">
            {message}
          </p>

        </div>
      )}

      {/* Controls */}
      <div className="flex justify-between gap-4 flex-wrap">

        <button
          onClick={resetPuzzle}
          className="
            flex items-center gap-2
            px-5 py-3 rounded-xl
            bg-cream-dark text-forest
            font-bold
            hover:bg-sage/20
          "
        >
          <RotateCcw className="w-5 h-5" />
          Restart
        </button>

        {gameCompleted && (
          <button
            onClick={handleNext}
            className="
              flex items-center gap-2
              px-5 py-3 rounded-xl
              bg-forest text-cream
              font-bold
            "
          >

            {currentIndex < puzzles.length - 1
              ? 'Next Puzzle'
              : 'Finish Game'}

            <ArrowRight className="w-5 h-5" />

          </button>
        )}

      </div>

    </div>
  );
};
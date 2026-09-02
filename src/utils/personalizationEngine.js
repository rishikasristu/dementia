// AI Personalization Engine for Memory Garden
// Uses recent cognitive performance to personalize:
// 1. Difficulty
// 2. Game recommendation
// 3. Assistance level
// 4. Cognitive analytics

const GAME_NAMES = {
  mem1: 'Memory',
  att1: 'Attention',
  pat1: 'Pattern',
};

const calculateGameStats = (history, gameId) => {
  const gameHistory = history.filter(
    activity => activity.gameId === gameId
  );

  if (gameHistory.length === 0) {
    return {
      attempts: 0,
      accuracy: 0,
      averageResponseTime: 0,
      hintsUsed: 0,
      trend: 'No data',
    };
  }

  const correct = gameHistory.filter(
    activity => activity.isCorrect
  ).length;

  const accuracy = Math.round(
    (correct / gameHistory.length) * 100
  );

  const averageResponseTime = Math.round(
    gameHistory.reduce(
      (sum, activity) =>
        sum + (activity.timeTakenSeconds || 5),
      0
    ) / gameHistory.length
  );

  const hintsUsed = gameHistory.reduce(
    (sum, activity) =>
      sum + (activity.hintsUsed || 0),
    0
  );

  // Compare earlier performance with recent performance
  let trend = 'Stable';

  if (gameHistory.length >= 4) {
    const midpoint = Math.floor(gameHistory.length / 2);

    const earlier = gameHistory.slice(0, midpoint);
    const recent = gameHistory.slice(midpoint);

    const earlierAccuracy =
      earlier.filter(activity => activity.isCorrect).length /
      earlier.length;

    const recentAccuracy =
      recent.filter(activity => activity.isCorrect).length /
      recent.length;

    if (recentAccuracy > earlierAccuracy + 0.15) {
      trend = 'Improving';
    } else if (recentAccuracy < earlierAccuracy - 0.15) {
      trend = 'Needs Support';
    }
  }

  return {
    attempts: gameHistory.length,
    accuracy,
    averageResponseTime,
    hintsUsed,
    trend,
  };
};

export const evaluatePerformance = (history = []) => {
  // Default state for a new user
  if (history.length === 0) {
    return {
      difficulty: 'Gentle',
      maxChoices: 3,
      hintAvailable: true,
      extraTime: true,
      voiceGuidance: true,

      guideMessage:
        "Welcome. Let's start with a gentle activity.",

      guideMood: 'calm',

      recommendation: 'memory',

      recommendationReason:
        'A gentle memory activity is a good place to begin.',

      accuracyRate: 0,
      avgResponseTime: 0,
      totalHintsUsed: 0,
      cognitiveScore: 0,

      overallTrend: 'Starting',

      gameStats: {},
    };
  }

  // Use the most recent 5 activities for immediate adaptation
  const recent = history.slice(-5);

  const totalCorrect = recent.filter(
    activity => activity.isCorrect
  ).length;

  const accuracyRate = totalCorrect / recent.length;

  const avgResponseTime =
    recent.reduce(
      (sum, activity) =>
        sum + (activity.timeTakenSeconds || 5),
      0
    ) / recent.length;

  const totalHintsUsed = recent.reduce(
    (sum, activity) =>
      sum + (activity.hintsUsed || 0),
    0
  );
  // -----------------------------------------
// COGNITIVE PERFORMANCE SCORE
// -----------------------------------------

  const accuracyScore = accuracyRate * 70;

  const responseScore =
    Math.max(0, Math.min(20, 20 - (avgResponseTime * 1.25)));

  const hintScore =
    Math.max(0, Math.min(10, 10 - (totalHintsUsed * 2)));

  const cognitiveScore = Math.round(
    accuracyScore + responseScore + hintScore
  );
  // -----------------------------------------
  // GAME-SPECIFIC PERFORMANCE
  // -----------------------------------------

  const gameStats = {
    mem1: calculateGameStats(history, 'mem1'),
    att1: calculateGameStats(history, 'att1'),
    pat1: calculateGameStats(history, 'pat1'),
  };

  // -----------------------------------------
  // FIND THE WEAKEST COGNITIVE AREA
  // -----------------------------------------

  const availableGames = Object.entries(gameStats)
    .filter(([, stats]) => stats.attempts > 0);

  let weakestGame = 'mem1';

  const unplayedGame = Object.entries(gameStats)
  .find(([, stats]) => stats.attempts === 0);

  if (unplayedGame) {
    weakestGame = unplayedGame[0];
  } else if (availableGames.length > 0) {
    weakestGame = availableGames.reduce(
      (weakest, current) => {
        return current[1].accuracy < weakest[1].accuracy
          ? current
          : weakest;
      }
    )[0];
  }

  const recommendation =
    weakestGame === 'mem1'
      ? 'memory'
      : weakestGame === 'att1'
      ? 'attention'
      : 'pattern';

  // -----------------------------------------
  // AI DIFFICULTY ADAPTATION
  // -----------------------------------------

  let difficulty = 'Gentle';
  let maxChoices = 3;
  let hintAvailable = true;
  let extraTime = true;
  let voiceGuidance = true;

  let guideMessage =
    "You're progressing nicely. Take your time with the next activity.";

  let guideMood = 'calm';

  if (
    accuracyRate >= 0.8 &&
    avgResponseTime <= 8 &&
    totalHintsUsed <= 1
  ) {
    // Strong performance
    difficulty = 'Challenging';
    maxChoices = 5;
    hintAvailable = false;
    extraTime = false;
    voiceGuidance = false;

    guideMood = 'encouraging';

    guideMessage =
      "You're doing wonderfully! Let's try a slightly more challenging activity.";
  } else if (
    accuracyRate <= 0.4 ||
    avgResponseTime > 12 ||
    totalHintsUsed >= 3
  ) {
    // Needs additional support
    difficulty = 'Calm Support';
    maxChoices = 2;
    hintAvailable = true;
    extraTime = true;
    voiceGuidance = true;

    guideMood = 'supportive';

    guideMessage =
      "Let's take our time together. I'll provide a little extra support.";
  } else {
    // Balanced performance
    difficulty = 'Gentle';
    maxChoices = 3;
    hintAvailable = true;
    extraTime = true;
    voiceGuidance = true;

    guideMood = 'calm';
  }

  // -----------------------------------------
  // OVERALL COGNITIVE TREND
  // -----------------------------------------

  let overallTrend = 'Stable';

  if (recent.length >= 3) {
    const midpoint = Math.ceil(recent.length / 2);

    const firstHalf = recent.slice(0, midpoint);
    const secondHalf = recent.slice(midpoint);

    const firstAccuracy =
      firstHalf.filter(activity => activity.isCorrect)
        .length / firstHalf.length;

    const secondAccuracy =
      secondHalf.filter(activity => activity.isCorrect)
        .length / secondHalf.length;

    if (secondAccuracy > firstAccuracy + 0.15) {
      overallTrend = 'Improving';
    } else if (secondAccuracy < firstAccuracy - 0.15) {
      overallTrend = 'Needs Support';
    }
  }

  // -----------------------------------------
  // RECOMMENDATION REASON
  // -----------------------------------------
  const weakestStats = gameStats[weakestGame];

  let recommendationReason;

  if (weakestStats.attempts === 0) {
    recommendationReason =
      `Try ${GAME_NAMES[weakestGame]} next to assess another cognitive area.`;
  } else {
    recommendationReason =
      `${GAME_NAMES[weakestGame]} performance can benefit from additional practice.`;
  }
  

  return {
    difficulty,
    maxChoices,
    hintAvailable,
    extraTime,
    voiceGuidance,

    guideMessage,
    guideMood,

    accuracyRate: Math.round(accuracyRate * 100),
    avgResponseTime: Math.round(avgResponseTime),
    totalHintsUsed,
    cognitiveScore,
    recommendation,
    recommendationReason,

    overallTrend,

    gameStats,
  };
};
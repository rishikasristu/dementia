// Dynamic Rules-Based AI Personalization Engine for Memory Garden

export const evaluatePerformance = (history = []) => {
  if (history.length === 0) {
    return {
      difficulty: 'Gentle', // Default gentle level
      maxChoices: 3,
      hintAvailable: true,
      guideMessage: "Welcome Lakshmi. Let's start with a gentle, relaxing puzzle today.",
      guideMood: 'calm',
      recommendation: 'memory'
    };
  }

  // Calculate recent stats (last 3-5 sessions)
  const recent = history.slice(-5);
  const totalCorrect = recent.filter(h => h.isCorrect).length;
  const avgResponseTimeMs = recent.reduce((sum, h) => sum + (h.timeTakenSeconds || 5), 0) / recent.length;
  const totalHintsUsed = recent.reduce((sum, h) => sum + (h.hintsUsed || 0), 0);
  const accuracyRate = totalCorrect / recent.length;

  let difficulty = 'Gentle';
  let maxChoices = 3;
  let hintAvailable = true;
  let guideMessage = '';
  let guideMood = 'calm';
  let recommendation = 'memory';

  if (accuracyRate >= 0.8 && avgResponseTimeMs <= 6) {
    // High accuracy, swift response -> Gently step up challenge
    difficulty = 'Confident';
    maxChoices = 4;
    hintAvailable = false;
    guideMood = 'encouraging';
    guideMessage = "You're doing wonderfully today! Ready for a slightly bigger memory challenge?";
    recommendation = 'pattern';
  } else if (accuracyRate <= 0.4 || avgResponseTimeMs > 12 || totalHintsUsed >= 3) {
    // Needs extra support -> Simplify choices, auto-enable big hints
    difficulty = 'Calm Support';
    maxChoices = 2; // Only 2 big simple options
    hintAvailable = true;
    guideMood = 'supportive';
    guideMessage = "Let's take our time together with a simpler choice and a helpful visual clue.";
    recommendation = 'attention';
  } else {
    // Balanced gentle state
    difficulty = 'Gentle';
    maxChoices = 3;
    hintAvailable = true;
    guideMood = 'calm';
    guideMessage = "You're progressing nicely. Take all the time you need for the next activity.";
    recommendation = 'memory';
  }

  return {
    difficulty,
    maxChoices,
    hintAvailable,
    guideMessage,
    guideMood,
    accuracyRate: Math.round(accuracyRate * 100),
    avgResponseTime: Math.round(avgResponseTimeMs),
    recommendation
  };
};

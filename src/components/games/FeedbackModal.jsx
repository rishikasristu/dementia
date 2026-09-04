import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { useApp } from '../../context/AppContext';
import { speakWithAzure } from '../../utils/speech';

export const FeedbackModal = ({ isOpen, isCorrect, onNext, onRepeat }) => {
  const { language, t } = useApp();

  useEffect(() => {
    if (isOpen) {
      if (isCorrect) {
  confetti({
    particleCount: 40,
    spread: 60,
    origin: { y: 0.6 },
    colors: ['#A8C3A0', '#E9C46A', '#D98262']
  });

  speakWithAzure(
    t.feedbackWonderfulAudio,
    language
  );
} else {
  speakWithAzure(
    t.feedbackTryAgainAudio,
    language
  );
}
    }
  }, [isOpen, isCorrect, language]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-forest/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in">
      <div className="bg-cream-light border-4 border-sage p-8 rounded-3xl max-w-md w-full text-center space-y-6 shadow-2xl relative overflow-hidden">
        {/* Flower Icon */}
        <div className="w-24 h-24 rounded-full bg-gold/20 border-4 border-gold text-5xl flex items-center justify-center mx-auto shadow-md animate-bounce">
          {isCorrect ? '🌸' : '🌿'}
        </div>

        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-forest">
            {isCorrect ? t.wonderful : t.goodEffort}
          </h2>
          <p className="text-lg font-bold text-terracotta mt-2">
            {isCorrect
  ? `${t.activityAddedFlower} 🌸`
  : t.takeYourTime}
          </p>
        </div>

        <div className="space-y-3 pt-2">
          <button
            onClick={onNext}
            className="w-full py-4 bg-forest text-cream font-extrabold text-xl rounded-2xl shadow-md btn-tactile-forest"
          >
            {t.tryAnother} ✨
          </button>

          {!isCorrect && (
            <button
              onClick={onRepeat}
              className="w-full py-3 bg-cream border-2 border-forest/30 text-forest font-bold text-lg rounded-2xl hover:bg-sage/20 transition-all"
            >
              {t.tryAgainGently} 🔄
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

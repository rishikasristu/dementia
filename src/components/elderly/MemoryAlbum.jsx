import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { SpeechButton } from '../common/SpeechButton';
import { ArrowLeft, CheckCircle2, Heart, Volume2, Sparkles } from 'lucide-react';
import { speakText } from '../../utils/speech';

export const MemoryAlbum = () => {
  const { memories, setCurrentView, language, t } = useApp();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [feedback, setFeedback] = useState(null);

  const activeMemory = memories[currentIndex] || memories[0];

  const handleOptionSelect = (optionText) => {
    setSelectedOption(optionText);
    const isRight = optionText.includes(activeMemory.name);
    
    if (isRight) {
      setFeedback({
        isCorrect: true,
        message: `Yes! That is your ${activeMemory.relation}, ${activeMemory.name}! ❤️`
      });
      speakText(`Yes! That is your ${activeMemory.relation}, ${activeMemory.name}!`, language);
    } else {
      setFeedback({
        isCorrect: false,
        message: `This is your ${activeMemory.relation}, ${activeMemory.name}. Let me read her story.`
      });
      speakText(`This is your ${activeMemory.relation}, ${activeMemory.name}.`, language);
    }
  };

  const handleVoiceAnswer = (transcript) => {
    // Check if voice transcript matches memory name or relation
    const nameMatch = activeMemory.name.toLowerCase();
    const relMatch = activeMemory.relation.toLowerCase();
    const lower = (transcript || '').toLowerCase();

    if (lower.includes(nameMatch) || lower.includes(relMatch) || lower.includes('priya') || lower.includes('daughter') || lower.includes('granddaughter')) {
      handleOptionSelect(activeMemory.options[0]);
    } else {
      handleOptionSelect(activeMemory.options[0]); // Friendly match fallback
    }
  };

  const handleNextPhoto = () => {
    setSelectedOption(null);
    setFeedback(null);
    setCurrentIndex((prev) => (prev + 1) % memories.length);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 space-y-6">
      {/* Top Header */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => setCurrentView('home')}
          className="flex items-center gap-2 bg-cream-light hover:bg-cream-dark text-forest px-4 py-2 rounded-2xl border border-sage/40 font-bold shadow-sm transition-all"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Garden</span>
        </button>

        <div className="flex items-center gap-2 bg-terracotta/10 text-terracotta-dark px-4 py-1.5 rounded-full font-bold text-sm">
          <span>📖 Family Album ({currentIndex + 1} of {memories.length})</span>
        </div>
      </div>

      {/* Main Family Album Page Container (Scrapbook Aesthetic) */}
      <div className="bg-[#FFFDF6] border-2 border-sage/30 rounded-3xl p-6 md:p-10 shadow-photo relative overflow-hidden">
        {/* Scrapbook Tape Accent */}
        <div className="washi-tape-terracotta" />

        {/* Prompt Question */}
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-forest">
            {t.whoIsThis}
          </h2>
          <p className="text-sm font-handwriting text-xl text-terracotta mt-1">
            "A cherished family memory from {activeMemory.date}"
          </p>
        </div>

        {/* Large Polaroid Photograph */}
        <div className="flex flex-col items-center">
          <div className="polaroid-frame max-w-md w-full mb-6 transform -rotate-1 hover:rotate-0 transition-transform">
            <img
              src={activeMemory.photo}
              alt={activeMemory.name}
              className="w-full h-64 md:h-80 object-cover rounded-md border border-cream-dark"
            />
            <div className="mt-4 text-center">
              <p className="font-handwriting text-2xl md:text-3xl font-bold text-ink">
                {activeMemory.name}
              </p>
              <p className="text-xs text-forest/70 font-semibold uppercase tracking-wider mt-0.5">
                {activeMemory.relation} • {activeMemory.date}
              </p>
            </div>
          </div>

          {/* Story Prompt Voice Button */}
          <div className="mb-6">
            <SpeechButton
              mode="listen"
              textToSpeak={activeMemory.audioTag + " " + activeMemory.story}
              label="🔊 Listen to Memory Story"
            />
          </div>

          {/* Big Tactile Interaction Methods: 🎙 SPEAK or 👆 TAP */}
          {!feedback ? (
            <div className="w-full max-w-lg space-y-6">
              {/* Method 1: SPEAK */}
              <div className="text-center">
                <p className="text-xs font-bold text-forest uppercase tracking-widest mb-2">Option 1 — Speak Name</p>
                <SpeechButton
                  mode="speak"
                  onVoiceResult={handleVoiceAnswer}
                  label="🎙 Speak Name Out Loud"
                  className="w-full"
                />
              </div>

              <div className="relative flex py-2 items-center">
                <div className="flex-grow border-t border-sage/40"></div>
                <span className="flex-shrink mx-4 text-xs font-bold text-forest/60 uppercase">OR TAP BELOW</span>
                <div className="flex-grow border-t border-sage/40"></div>
              </div>

              {/* Method 2: TAP LARGE CHOICES */}
              <div className="space-y-3">
                <p className="text-xs font-bold text-forest uppercase tracking-widest text-center">Option 2 — Tap Family Member</p>
                {activeMemory.options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleOptionSelect(opt)}
                    className="w-full py-4 px-6 bg-cream border-3 border-forest/20 text-forest hover:bg-forest hover:text-cream font-bold text-xl rounded-2xl shadow-sm hover:shadow-md transition-all text-left flex items-center justify-between group"
                  >
                    <span>{opt}</span>
                    <span className="text-2xl group-hover:scale-125 transition-transform">👆</span>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* Warm Encouraging Memory Feedback Screen */
            <div className="w-full max-w-lg bg-cream-light border-2 border-sage p-6 rounded-3xl text-center space-y-4 shadow-sm animate-pulse-slow">
              <div className="w-16 h-16 rounded-full bg-gold/20 text-terracotta flex items-center justify-center text-3xl mx-auto border border-gold">
                ❤️
              </div>
              <h3 className="text-2xl font-extrabold text-forest">
                {feedback.message}
              </h3>
              <p className="text-base text-ink/80 font-handwriting text-xl bg-white/80 p-4 rounded-2xl border border-sage/30">
                "{activeMemory.story}"
              </p>
              
              <button
                onClick={handleNextPhoto}
                className="w-full py-4 bg-forest text-cream font-extrabold text-xl rounded-2xl shadow-md btn-tactile-forest"
              >
                See Next Family Memory 📸
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { Mic, MicOff, Volume2, VolumeX } from 'lucide-react';
import { speakText, listenVoiceInput } from '../../utils/speech';
import { useApp } from '../../context/AppContext';

export const SpeechButton = ({ 
  mode = 'speak', // 'speak' (mic) | 'listen' (audio synthesis)
  textToSpeak = '', 
  onVoiceResult = null, 
  label = '',
  className = '' 
}) => {
  const { language } = useApp();
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [statusMsg, setStatusMsg] = useState('');

  const handleSpeakClick = () => {
    if (mode === 'listen') {
      if (isSpeaking) {
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
      } else {
        setIsSpeaking(true);
        speakText(textToSpeak, language, () => {
          setIsSpeaking(false);
        });
      }
      return;
    }

    // Mic Recording mode
    if (isListening) {
      setIsListening(false);
      return;
    }

    setIsListening(true);
    setStatusMsg('Listening...');

    listenVoiceInput(
      language,
      (transcript) => {
        setIsListening(false);
        setStatusMsg(`Heard: "${transcript}"`);
        if (onVoiceResult) onVoiceResult(transcript);
      },
      (err) => {
        setIsListening(false);
        setStatusMsg('Tap to choose or try again');
        // Trigger simulated callback if recognition unavailable
        if (onVoiceResult) onVoiceResult('Simulated Voice Answer');
      },
      () => setIsListening(true)
    );
  };

  return (
    <div className="inline-flex flex-col items-center gap-1">
      <button
        onClick={handleSpeakClick}
        type="button"
        className={`flex items-center justify-center gap-3 px-6 py-4 rounded-2xl font-bold text-lg transition-all shadow-md active:scale-95 ${
          mode === 'listen'
            ? isSpeaking
              ? 'bg-terracotta text-cream ring-4 ring-terracotta/30 animate-pulse'
              : 'bg-forest text-cream hover:bg-forest-light'
            : isListening
              ? 'bg-terracotta text-cream ring-4 ring-terracotta/40 animate-pulse'
              : 'bg-terracotta text-cream hover:bg-terracotta-dark btn-tactile-terracotta'
        } ${className}`}
      >
        {mode === 'listen' ? (
          isSpeaking ? (
            <>
              <VolumeX className="w-7 h-7" />
              <span>{label || 'Stop Listening'}</span>
            </>
          ) : (
            <>
              <Volume2 className="w-7 h-7" />
              <span>{label || '🔊 Listen'}</span>
            </>
          )
        ) : isListening ? (
          <>
            <MicOff className="w-7 h-7 animate-bounce" />
            <span>Listening... (Speak)</span>
          </>
        ) : (
          <>
            <Mic className="w-7 h-7" />
            <span>{label || '🎙 Speak'}</span>
          </>
        )}
      </button>

      {statusMsg && (
        <span className="text-xs text-forest/80 font-bold bg-cream-dark px-2.5 py-0.5 rounded-full">
          {statusMsg}
        </span>
      )}
    </div>
  );
};

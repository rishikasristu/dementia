// Web Speech Synthesis and Recognition Helper

const LANG_MAP = {
  en: 'en-IN',
  te: 'te-IN',
  hi: 'hi-IN'
};

export const speakText = (text, lang = 'en', onEndCallback = null) => {
  if (!('speechSynthesis' in window)) {
    console.warn('Speech synthesis not supported in this browser environment.');
    if (onEndCallback) onEndCallback();
    return;
  }

  // Cancel any ongoing speech
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = LANG_MAP[lang] || 'en-IN';
  utterance.rate = 0.85; // Slightly slower, calmer pace for elderly users
  utterance.pitch = 1.0;

  if (onEndCallback) {
    utterance.onend = () => onEndCallback();
    utterance.onerror = () => onEndCallback();
  }

  window.speechSynthesis.speak(utterance);
};

export const stopSpeech = () => {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
};

export const listenVoiceInput = (lang = 'en', onResult, onError, onStart) => {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    console.warn('SpeechRecognition API not available in browser. Returning mock simulator.');
    if (onError) onError('Voice recognition not supported natively on browser. Click speech options to simulate voice!');
    return null;
  }

  try {
    const recognition = new SpeechRecognition();
    recognition.lang = LANG_MAP[lang] || 'en-IN';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {
      if (onStart) onStart();
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      if (onResult) onResult(transcript);
    };

    recognition.onerror = (event) => {
      console.warn('Speech recognition error:', event.error);
      if (onError) onError(event.error);
    };

    recognition.start();
    return recognition;
  } catch (err) {
    console.error('Failed to initiate speech recognition:', err);
    if (onError) onError(err.message);
    return null;
  }
};

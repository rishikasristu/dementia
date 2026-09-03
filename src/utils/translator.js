const LANGUAGE_CODES = {
  en: 'en',
  hi: 'hi',
  te: 'te',
  as: 'as'
};

// Temporary translation function.
// We will connect this to the actual translation service next.
export async function translateText(text, targetLanguage, sourceLanguage = 'en') {
  if (!text || !text.trim()) {
    return text;
  }

  if (targetLanguage === sourceLanguage) {
    return text;
  }

  // Translation service will be connected here.
  // Keeping this fallback makes sure the app never crashes.
  return text;
}

export function getLanguageCode(language) {
  return LANGUAGE_CODES[language] || 'en';
}
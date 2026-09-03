const LANGUAGE_CODES = {
  en: 'en',
  hi: 'hi',
  te: 'te',
  as: 'as'
};

// Local translations for important Memory Garden phrases.
// Add more phrases here as the application grows.
const LOCAL_TRANSLATIONS = {
  hi: {
    'Grandmother went to the market yesterday.':
      'दादी कल बाजार गई थीं।',

    'Take your medicine':
      'अपनी दवा लें',

    'Drink some water':
      'थोड़ा पानी पिएँ',

    'Good morning':
      'शुभ प्रभात',

    'Well done!':
      'बहुत अच्छा!',
    'Your daughter Priya during her graduation in Bengaluru. Priya loves bringing you fresh jasmine flowers when she visits on Sundays.':
  'आपकी बेटी प्रिया बेंगलुरु में अपनी स्नातक की पढ़ाई पूरी करते हुए। प्रिया जब रविवार को आपसे मिलने आती है, तो आपके लिए ताज़े चमेली के फूल लाना पसंद करती है।',

'Your granddaughter Ananya smiling at the family Diwali celebration. Ananya spent the afternoon making homemade mathri snacks with you.':
  'पारिवारिक दिवाली समारोह में मुस्कुराती हुई आपकी पोती अनन्या। अनन्या ने दोपहर आपके साथ घर की बनी मठरी बनाते हुए बिताई।',

'You and Ramesh sitting under the Banyan tree at the botanical gardens. Ramesh sang your favorite classical song under the evening shadow.':
  'बोटैनिकल गार्डन में बरगद के पेड़ के नीचे बैठे आप और रमेश। शाम की छाया में रमेश ने आपका पसंदीदा शास्त्रीय गीत गाया।',

'Your peaceful courtyard house with mango trees in Mysuru. You planted the sweet red hibiscus bushes in the front yard.':
  'मैसूर में आम के पेड़ों वाला आपका शांत आँगन का घर। आपने सामने के आँगन में सुंदर लाल गुड़हल की झाड़ियाँ लगाई थीं।'
    
  },

  te: {
    'Grandmother went to the market yesterday.':
      'అమ్మమ్మ నిన్న మార్కెట్‌కు వెళ్లారు.',

    'Take your medicine':
      'మీ మందులు తీసుకోండి',

    'Drink some water':
      'కొంచెం నీరు తాగండి',

    'Good morning':
      'శుభోదయం',

    'Well done!':
      'చాలా బాగా చేశారు!' ,
    'Your daughter Priya during her graduation in Bengaluru. Priya loves bringing you fresh jasmine flowers when she visits on Sundays.':
  'బెంగళూరులో గ్రాడ్యుయేషన్ సమయంలో మీ కుమార్తె ప్రియా. ప్రియా ప్రతి ఆదివారం మిమ్మల్ని కలవడానికి వచ్చినప్పుడు మీ కోసం తాజా మల్లెపూలు తీసుకురావడం ఇష్టపడుతుంది.',

'Your granddaughter Ananya smiling at the family Diwali celebration. Ananya spent the afternoon making homemade mathri snacks with you.':
  'కుటుంబ దీపావళి వేడుకలో నవ్వుతూ ఉన్న మీ మనవరాలు అనన్య. అనన్య మీతో కలిసి ఇంట్లో తయారుచేసిన మఠ్రీ చిరుతిండిని తయారు చేస్తూ మధ్యాహ్నం గడిపింది.',

'You and Ramesh sitting under the Banyan tree at the botanical gardens. Ramesh sang your favorite classical song under the evening shadow.':
  'బొటానికల్ గార్డెన్‌లో మర్రిచెట్టు కింద కూర్చున్న మీరు మరియు రమేష్. సాయంత్రపు నీడలో రమేష్ మీకు ఇష్టమైన శాస్త్రీయ పాటను పాడాడు.',

'Your peaceful courtyard house with mango trees in Mysuru. You planted the sweet red hibiscus bushes in the front yard.':
  'మైసూరులో మామిడి చెట్లతో ఉన్న మీ ప్రశాంతమైన ఆవరణ ఇల్లు. మీరు ముందు ఆవరణలో అందమైన ఎర్ర మందార మొక్కలను నాటారు.'
  },

  as: {
    'Grandmother went to the market yesterday.':
      'আইতা কালি বজাৰলৈ গৈছিল।',

    'Take your medicine':
      'আপোনাৰ ঔষধ লওক',

    'Drink some water':
      'অলপ পানী খাওক',

    'Good morning':
      'সুপ্ৰভাত',

    'Well done!':
      'বৰ ভাল!',
    'Your daughter Priya during her graduation in Bengaluru. Priya loves bringing you fresh jasmine flowers when she visits on Sundays.':
  'বেংগালুৰুত স্নাতক হোৱাৰ সময়ৰ আপোনাৰ জীয়ৰী প্ৰিয়া। প্ৰিয়াই দেওবাৰে আপোনাক লগ কৰিবলৈ আহোঁতে সদায় সতেজ জেছমিন ফুল লৈ আহে।',

'Your granddaughter Ananya smiling at the family Diwali celebration. Ananya spent the afternoon making homemade mathri snacks with you.':
  'পৰিয়ালৰ দীপাৱলী উদযাপনত হাঁহি থকা আপোনাৰ নাতিনী অনন্যা। অনন্যাই আপোনাৰ সৈতে দুপৰীয়াটো ঘৰতে বনোৱা মঠৰী জলপান বনাই কটাইছিল।',

'You and Ramesh sitting under the Banyan tree at the botanical gardens. Ramesh sang your favorite classical song under the evening shadow.':
  'বোটানিকেল গাৰ্ডেনত বটগছৰ তলত বহি থকা আপুনি আৰু ৰমেশ। সন্ধিয়াৰ ছাঁত ৰমেশে আপোনাৰ প্ৰিয় শাস্ত্ৰীয় গীতটো গাইছিল।',

'Your peaceful courtyard house with mango trees in Mysuru. You planted the sweet red hibiscus bushes in the front yard.':
  'মাইছুৰুৰ আমগছ থকা আপোনাৰ শান্তিপূৰ্ণ চোতালৰ ঘৰখন। আপুনি সন্মুখৰ চোতালত মিঠা ৰঙা জবা ফুলৰ জোপা ৰোপণ কৰিছিল।'
  }
};

export async function translateText(
  text,
  targetLanguage,
  sourceLanguage = 'en'
) {
  if (!text || !text.trim()) {
    return text;
  }

  const target = LANGUAGE_CODES[targetLanguage] || 'en';
  const source = LANGUAGE_CODES[sourceLanguage] || 'en';

  // Same language — no translation needed
  if (target === source) {
    return text;
  }

  // Look for an exact local translation
  const translated = LOCAL_TRANSLATIONS[target]?.[text];

  if (translated) {
    return translated;
  }

  // Safe offline fallback
  console.warn(
    `No local translation available for: "${text}"`
  );

  return text;
}

export function getLanguageCode(language) {
  return LANGUAGE_CODES[language] || 'en';
}
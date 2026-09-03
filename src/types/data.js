// Default Initial Memories (Family Photo Album)
export const INITIAL_MEMORIES = [
  {
    id: 'm1',
    name: 'Priya',
    relation: 'Daughter',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80',
    audioTag: 'Your daughter Priya during her graduation in Bengaluru.',
    date: 'Summer 2019',
    story: 'Priya loves bringing you fresh jasmine flowers when she visits on Sundays.',
    options: ['Priya (Daughter)', 'Sunita (Sister)', 'Ananya (Granddaughter)']
  },
  {
    id: 'm2',
    name: 'Ananya',
    relation: 'Granddaughter',
    photo: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
    audioTag: 'Your granddaughter Ananya smiling at the family Diwali celebration.',
    date: 'Diwali 2022',
    story: 'Ananya spent the afternoon making homemade mathri snacks with you.',
    options: ['Ananya (Granddaughter)', 'Priya (Daughter)', 'Kavita (Niece)']
  },
  {
    id: 'm3',
    name: 'Ramesh & Lakshmi',
    relation: 'Husband & You',
    photo: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=600&q=80',
    audioTag: 'You and Ramesh sitting under the Banyan tree at the botanical gardens.',
    date: 'Golden Anniversary',
    story: 'Ramesh sang your favorite classical song under the evening shadow.',
    options: ['Ramesh (Husband)', 'Vijay (Brother)', 'Suresh (Friend)']
  },
  {
    id: 'm4',
    name: 'Family Garden House',
    relation: 'Home',
    photo: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80',
    audioTag: 'Your peaceful courtyard house with mango trees in Mysuru.',
    date: 'Home',
    story: 'You planted the sweet red hibiscus bushes in the front yard.',
    options: ['Mysuru Courtyard House', 'Bengaluru Flat', 'Chennai Cottage']
  }
];

// Initial Today's Reminders Timeline
export const INITIAL_REMINDERS = [
  {
    id: 'r1',
    time: '08:00',
    title: 'Morning Medicine & Warm Water',
    category: 'meds',
    icon: '💊',
    completed: true,
    audioText: 'It is 8:00 AM. Please take one blue tablet with warm water after breakfast.',
  },
  {
    id: 'r2',
    time: '10:00',
    title: 'Hydration Break (Fresh Water)',
    category: 'water',
    icon: '💧',
    completed: true,
    audioText: 'It is 10:00 AM. Time for a refreshing glass of water.',
  },
  {
    id: 'r3',
    time: '13:00',
    title: 'Nutritious Lunch & Soft Roti',
    category: 'lunch',
    icon: '🍽',
    completed: false,
    audioText: 'It is 1:00 PM. Enjoy your warm dal and fresh spinach roti.',
  },
  {
    id: 'r4',
    time: '17:00',
    title: 'Evening Garden Stroll',
    category: 'walk',
    icon: '🌿',
    completed: false,
    audioText: 'It is 5:00 PM. Take a gentle 15 minute stroll around the flowers.',
  },
  {
    id: 'r5',
    time: '20:00',
    title: 'Evening Medicine',
    category: 'meds',
    icon: '💊',
    completed: false,
    audioText: 'It is 8:00 PM. Take your evening calcium tablet after dinner.',
  }
];

// Multi-Language Dictionary
export const TRANSLATIONS = {
  en: {
    greetingTitle: "Good morning, Lakshmi",
    supportSubtitle: "Let's take a little peaceful time together.",
    play: "Play Puzzles",
    memories: "Family Album",
    today: "Today's Schedule",
    gardenTitle: "Your Memory Garden",
    seedlingStage: "Starting the day with a gentle seed 🌱",
    sproutStage: "Garden is sprouting fresh leaves 🌿",
    blossomStage: "Flowers are blossoming in warm sunshine 🌸",
    treeStage: "Your Memory Tree is strong and full of life 🌳",
    speak: "Speak",
    tap: "Tap Choice",
    listen: "Listen",
    completed: "Completed",
    upcoming: "Upcoming",
    markDone: "Mark Done",
    offlineNotice: "Offline — your activities are safely saved on this device.",
    syncedNotice: "Synced just now with caregiver dashboard.",
    whoIsThis: "Who is this family member?",
    wonderful: "Wonderful job!",
    takeYourTime: "Take all the time you need.",
    tryAnother: "Ready for another gentle puzzle?",
    personalGuide: "Personal Guide",
    caregiverDashboard: "Caregiver Dashboard",
    backToElderly: "Switch to Elderly View",
    caregiverTitle: "Caregiver Portal — Lakshmi's Overview",
    languageSelect: "Language",
    difficulty: "Difficulty",
    hintsAvailable: "Hint active",
    cognitiveMetrics: "Cognitive Activity Trends",
    addMemory: "+ Add New Memory",
    addReminder: "+ Add Reminder",
  },
  te: {
    greetingTitle: "శుభోదయం, లక్ష్మి గారూ",
    supportSubtitle: "ఈ రోజు మన ప్రశాంత సమయాన్ని సరదాగా గడుపుదాం.",
    play: "ఆటలు ఆడుకుందాం",
    memories: "కుటుంబ జ్ఞాపకాలు",
    today: "ఈ రోజు దినచర్య",
    gardenTitle: "మీ జ్ఞాపకాల తోట",
    seedlingStage: "ఈ ఉదయం చిన్న మొక్కతో ప్రారంభం 🌱",
    sproutStage: "తోటలో పచ్చని ఆకులు తొడుగుతున్నాయి 🌿",
    blossomStage: "తోటంతా పూలు వికసిస్తున్నాయి 🌸",
    treeStage: "మీ జ్ఞాపకాల వృక్షం ఎంతో ప్రశాంతంగా ఉంది 🌳",
    speak: "మాట్లాడండి",
    tap: "ఎంచుకోండి",
    listen: "వినండి",
    completed: "పూర్తయింది",
    upcoming: "రాబోయేది",
    markDone: "పూర్తి చేయి",
    offlineNotice: "ఆఫ్‌లైన్ — మీ వివరాలు ఈ పరికరంలో సురక్షితంగా ఉన్నాయి.",
    syncedNotice: "ఇప్పుడే సంరక్షకుడితో సమాచారం అనుసంధానించబడింది.",
    whoIsThis: "ఈ చిత్రంలో ఉన్నది ఎవరు?",
    wonderful: "అద్భుతంగా చేశారు!",
    takeYourTime: "నెమ్మదిగా సమయం తీసుకోండి.",
    tryAnother: "మరొక ఆట ఆడుదామా?",
    personalGuide: "వ్యక్తిగత మార్గదర్శి",
    caregiverDashboard: "సంరక్షకుడి డాష్‌బోర్డ్",
    backToElderly: "వృద్ధుల స్క్రీన్‌కి వెళ్లండి",
    caregiverTitle: "సంరక్షకుని పోర్టల్ — లక్ష్మి గారి నివేదిక",
    languageSelect: "భాష",
    difficulty: "కఠినత్వం",
    hintsAvailable: "సూచన ఉంది",
    cognitiveMetrics: "జ్ఞాపకశక్తి పురోగతి",
    addMemory: "+ కొత్త జ్ఞాపకం జతచేయి",
    addReminder: "+ గుర్తుచేసేది జతచేయి",
  },
  hi: {
    greetingTitle: "शुभ प्रभात, लक्ष्मी जी",
    supportSubtitle: "आइए साथ में कुछ शांत और सुखद समय बिताएं।",
    play: "खेल खेलें",
    memories: "परिवार की यादें",
    today: "आज की अनुसूची",
    gardenTitle: "आपका स्मृति उपवन",
    seedlingStage: "दिन की शुरुआत एक नन्हें पौधे के साथ 🌱",
    sproutStage: "उपवन में ताज़ी पत्तियाँ खिल रही हैं 🌿",
    blossomStage: "उपवन में सुंदर फूल खिल रहे हैं 🌸",
    treeStage: "आपका स्मृति वृक्ष विशाल और समृद्ध है 🌳",
    speak: "बोलें",
    tap: "चुनें",
    listen: "सुनें",
    completed: "पूरा हुआ",
    upcoming: "आगामी",
    markDone: "पूरा करें",
    offlineNotice: "ऑफ़लाइन — आपकी गतिविधियाँ इस डिवाइस पर सुरक्षित हैं।",
    syncedNotice: "अभी-अभी केयरगिवर डैशबोर्ड के साथ सिंक हुआ।",
    whoIsThis: "यह परिवार के कौन से सदस्य हैं?",
    wonderful: "अद्भुत कार्य!",
    takeYourTime: "पूरा समय लें, कोई जल्दी नहीं।",
    tryAnother: "क्या एक और खेल खेलना चाहेंगे?",
    personalGuide: "व्यक्तिगत मार्गदर्शक",
    caregiverDashboard: "केयरगिवर डैशबोर्ड",
    backToElderly: "बुज़ुर्ग इंटरफ़ेस पर जाएँ",
    caregiverTitle: "केयरगिवर पोर्टल — लक्ष्मी जी का अवलोकन",
    languageSelect: "भाषा",
    difficulty: "कठिनाई",
    hintsAvailable: "संकेत सक्रिय",
    cognitiveMetrics: "स्मृति प्रगति चार्ट",
    addMemory: "+ नई याद जोड़ें",
    addReminder: "+ नया रिमाइंडर जोड़ें",
  },
  as: {
    greetingTitle: "শুভ প্ৰভাত, লক্ষ্মী",

    supportSubtitle: "আহক, আজি আমি একেলগে অলপ শান্ত আৰু আনন্দময় সময় কটাওঁ।",

    play: "খেল খেলোঁ",

    memories: "পৰিয়ালৰ স্মৃতি",

    today: "আজিৰ সময়সূচী",

    gardenTitle: "আপোনাৰ স্মৃতিৰ বাগিচা",

    seedlingStage: "এটা সৰু পুলিৰ সৈতে দিনটো আৰম্ভ কৰোঁ 🌱",

    sproutStage: "বাগিচাত সতেজ সেউজীয়া পাত গজি উঠিছে 🌿",

    blossomStage: "বাগিচাত ধুনীয়া ফুল ফুলিছে 🌸",

    treeStage: "আপোনাৰ স্মৃতিৰ গছজোপা শক্তিশালী আৰু জীৱন্ত 🌳",

    speak: "কওক",

    tap: "বাছনি কৰক",

    listen: "শুনক",

    completed: "সম্পূৰ্ণ হৈছে",

    upcoming: "আগন্তুক",

    markDone: "সম্পূৰ্ণ কৰক",

    offlineNotice: "অফলাইন — আপোনাৰ কাৰ্যকলাপসমূহ এই ডিভাইচত সুৰক্ষিতভাৱে সংৰক্ষিত হৈছে।",

    syncedNotice: "এইমাত্ৰ যত্নদাতাৰ ড্যাশব’ৰ্ডৰ সৈতে ছিংক কৰা হৈছে।",

    whoIsThis: "এইজন পৰিয়ালৰ কোনজন সদস্য?",

    wonderful: "বৰ ভাল কৰিছে!",

    takeYourTime: "আপোনাৰ সময় লওক, কোনো খৰখেদা নাই।",

    tryAnother: "আকৌ এটা খেল খেলিব বিচাৰেনে?",

    personalGuide: "ব্যক্তিগত সহায়ক",

    caregiverDashboard: "যত্নদাতাৰ ড্যাশব’ৰ্ড",

    backToElderly: "বয়োজ্যেষ্ঠৰ স্ক্ৰীণলৈ যাওক",

    caregiverTitle: "যত্নদাতাৰ প’ৰ্টেল — লক্ষ্মীৰ অৱলোকন",

    languageSelect: "ভাষা",

    difficulty: "কঠিনতাৰ স্তৰ",

    hintsAvailable: "ইংগিত সক্ৰিয়",

    cognitiveMetrics: "স্মৃতিৰ অগ্ৰগতিৰ চাৰ্ট",

    addMemory: "+ নতুন স্মৃতি যোগ কৰক",

    addReminder: "+ নতুন ৰিমাইণ্ডাৰ যোগ কৰক"
  }

};

// Cognitive Games Data Setup
export const COGNITIVE_PUZZLES = {
  memory: [
    {
      id: 'mem1',
      title: 'Garden Flower Memory',
      instructions: 'Look closely at these 3 garden items. Memorize them!',
      items: [
        { id: 1, name: 'Marigold Flower', icon: '🌼', color: 'bg-amber-100 border-amber-300' },
        { id: 2, name: 'Clay Pot', icon: '🪴', color: 'bg-emerald-100 border-emerald-300' },
        { id: 3, name: 'Watering Can', icon: '🚿', color: 'bg-sky-100 border-sky-300' },
      ],
      targetId: 1,
      targetQuestion: 'Which item was the Marigold Flower?',
      distractors: [
        { id: 4, name: 'Red Rose', icon: '🌹', color: 'bg-rose-100 border-rose-300' },
      ]
    },
    {
      id: 'mem2',
      title: 'Family Tea Time Items',
      instructions: 'Memorize these afternoon tea items.',
      items: [
        { id: 1, name: 'Ceramic Teapot', icon: '🫖', color: 'bg-amber-100 border-amber-300' },
        { id: 2, name: 'Sweet Biscuits', icon: '🍪', color: 'bg-amber-50 border-amber-200' },
        { id: 3, name: 'Green Mango', icon: '🥭', color: 'bg-lime-100 border-lime-300' },
      ],
      targetId: 2,
      targetQuestion: 'Which item was the Sweet Biscuits?',
      distractors: [
        { id: 4, name: 'Apple', icon: '🍎', color: 'bg-red-100 border-red-300' },
      ]
    }
  ],
  attention: [
    {
      id: 'att1',
      title: 'Find the Butterflies',
      instruction: 'Tap all 3 golden butterflies in the garden grid!',
      targetType: 'butterfly',
      grid: [
        { id: 1, icon: '🦋', isTarget: true, name: 'Golden Butterfly' },
        { id: 2, icon: '🌸', isTarget: false, name: 'Pink Flower' },
        { id: 3, icon: '🦋', isTarget: true, name: 'Golden Butterfly' },
        { id: 4, icon: '🍃', isTarget: false, name: 'Green Leaf' },
        { id: 5, icon: '🌻', isTarget: false, name: 'Sunflower' },
        { id: 6, icon: '🦋', isTarget: true, name: 'Golden Butterfly' },
      ],
      totalTargets: 3
    },
    {
      id: 'att2',
      title: 'Find the Water Drops',
      instruction: 'Tap all 3 water drops to refresh the garden!',
      targetType: 'water',
      grid: [
        { id: 1, icon: '💧', isTarget: true, name: 'Water Drop' },
        { id: 2, icon: '🌿', isTarget: false, name: 'Leaf' },
        { id: 3, icon: '🌺', isTarget: false, name: 'Flower' },
        { id: 4, icon: '💧', isTarget: true, name: 'Water Drop' },
        { id: 5, icon: '☀️', isTarget: false, name: 'Sun' },
        { id: 6, icon: '💧', isTarget: true, name: 'Water Drop' },
      ],
      totalTargets: 3
    }
  ],
  pattern: [
    {
      id: 'pat1',
      title: 'Garden Flower Sequence',
      instruction: 'Look at the pattern. Which flower comes next?',
      sequence: ['🌸 Pink Blossom', '🌼 Marigold', '🌸 Pink Blossom', '🌼 Marigold', '?'],
      sequenceDisplay: [
        { icon: '🌸', label: 'Blossom' },
        { icon: '🌼', label: 'Marigold' },
        { icon: '🌸', label: 'Blossom' },
        { icon: '🌼', label: 'Marigold' },
        { icon: '❓', label: 'Next' }
      ],
      correctAnswer: '🌸 Pink Blossom',
      options: [
        { id: 'o1', icon: '🌸', label: 'Pink Blossom' },
        { id: 'o2', icon: '🌱', label: 'Green Seedling' },
        { id: 'o3', icon: '🍎', label: 'Red Apple' },
      ]
    },
    {
      id: 'pat2',
      title: 'Daily Rhythm Pattern',
      instruction: 'Sun, Cloud, Sun, Cloud... What comes next?',
      sequence: ['☀️ Sun', '☁️ Cloud', '☀️ Sun', '☁️ Cloud', '?'],
      sequenceDisplay: [
        { icon: '☀️', label: 'Sun' },
        { icon: '☁️', label: 'Cloud' },
        { icon: '☀️', label: 'Sun' },
        { icon: '☁️', label: 'Cloud' },
        { icon: '❓', label: 'Next' }
      ],
      correctAnswer: '☀️ Sun',
      options: [
        { id: 'o1', icon: '☀️', label: 'Sun' },
        { id: 'o2', icon: '🌙', label: 'Moon' },
        { id: 'o3', icon: '⚡️', label: 'Spark' },
      ]
    }
  ]
};

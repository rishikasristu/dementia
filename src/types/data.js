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
    story: 'Ananya spent the afternoon making homemade snacks with you.',
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
    audioTag: 'Your peaceful courtyard house with mango trees.',
    date: 'Home',
    story: 'You planted the sweet red hibiscus bushes in the front yard.',
    options: ['Family Garden House', 'City Apartment', 'Village Cottage']
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
    audioText: 'It is 8 AM. Please take your medicine with warm water after breakfast.'
  },
  {
    id: 'r2',
    time: '10:00',
    title: 'Hydration Break',
    category: 'water',
    icon: '💧',
    completed: true,
    audioText: 'It is 10 AM. Time for a refreshing glass of water.'
  },
  {
    id: 'r3',
    time: '13:00',
    title: 'Nutritious Lunch',
    category: 'lunch',
    icon: '🍽️',
    completed: false,
    audioText: 'It is 1 PM. Time for lunch.'
  },
  {
    id: 'r4',
    time: '17:00',
    title: 'Evening Garden Stroll',
    category: 'walk',
    icon: '🌿',
    completed: false,
    audioText: 'It is 5 PM. Take a gentle walk.'
  },
  {
    id: 'r5',
    time: '20:00',
    title: 'Evening Medicine',
    category: 'meds',
    icon: '💊',
    completed: false,
    audioText: 'It is 8 PM. Please take your evening medicine.'
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
    addReminder: "+ Add Reminder"
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
    caregiverTitle: "సంరక్షకుని పోర్టల్",
    languageSelect: "భాష",
    difficulty: "కఠినత్వం",
    hintsAvailable: "సూచన ఉంది",
    cognitiveMetrics: "జ్ఞాపకశక్తి పురోగతి",
    addMemory: "+ కొత్త జ్ఞాపకం జతచేయి",
    addReminder: "+ గుర్తుచేసేది జతచేయి"
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
    whoIsThis: "यह परिवार का कौन सा सदस्य है?",
    wonderful: "अद्भुत कार्य!",
    takeYourTime: "पूरा समय लें, कोई जल्दी नहीं।",
    tryAnother: "क्या एक और खेल खेलना चाहेंगे?",
    personalGuide: "व्यक्तिगत मार्गदर्शक",
    caregiverDashboard: "केयरगिवर डैशबोर्ड",
    backToElderly: "बुज़ुर्ग इंटरफ़ेस पर जाएँ",
    caregiverTitle: "केयरगिवर पोर्टल",
    languageSelect: "भाषा",
    difficulty: "कठिनाई",
    hintsAvailable: "संकेत सक्रिय",
    cognitiveMetrics: "स्मृति प्रगति चार्ट",
    addMemory: "+ नई याद जोड़ें",
    addReminder: "+ नया रिमाइंडर जोड़ें"
  }
};

// Cognitive Games Data Setup
export const COGNITIVE_PUZZLES = {

  // =========================
  // MEMORY GAME
  // =========================
  memory: [
    {
      id: 'mem1',
      title: 'Garden Flower Memory',
      instructions: 'Look closely at these 3 garden items. Memorize them!',
      items: [
        { id: 1, name: 'Marigold Flower', icon: '🌼', color: 'bg-amber-100 border-amber-300' },
        { id: 2, name: 'Clay Pot', icon: '🪴', color: 'bg-emerald-100 border-emerald-300' },
        { id: 3, name: 'Watering Can', icon: '🚿', color: 'bg-sky-100 border-sky-300' }
      ],
      targetId: 1,
      targetQuestion: 'Which item was the Marigold Flower?',
      distractors: [
        { id: 4, name: 'Red Rose', icon: '🌹', color: 'bg-rose-100 border-rose-300' }
      ]
    },
    {
      id: 'mem2',
      title: 'Family Tea Time Items',
      instructions: 'Memorize these afternoon tea items.',
      items: [
        { id: 1, name: 'Ceramic Teapot', icon: '🫖', color: 'bg-amber-100 border-amber-300' },
        { id: 2, name: 'Sweet Biscuits', icon: '🍪', color: 'bg-amber-50 border-amber-200' },
        { id: 3, name: 'Green Mango', icon: '🥭', color: 'bg-lime-100 border-lime-300' }
      ],
      targetId: 2,
      targetQuestion: 'Which item was the Sweet Biscuits?',
      distractors: [
        { id: 4, name: 'Apple', icon: '🍎', color: 'bg-red-100 border-red-300' }
      ]
    },

    // NER / Assam Cultural Memory
    {
      id: 'mem3',
      title: 'Assam Cultural Memory',
      instructions: 'Look carefully at these familiar Assamese items and memorize them.',
      items: [
        { id: 1, name: 'Japi', icon: '👒', color: 'bg-amber-100 border-amber-300' },
        { id: 2, name: 'Gamosa', icon: '🧣', color: 'bg-red-100 border-red-300' },
        { id: 3, name: 'Assam Tea', icon: '🫖', color: 'bg-lime-100 border-lime-300' }
      ],
      targetId: 2,
      targetQuestion: 'Which item was the Gamosa?',
      distractors: [
        { id: 4, name: 'Umbrella', icon: '☂️', color: 'bg-sky-100 border-sky-300' }
      ]
    },
    {
      id: 'mem4',
      title: 'Assam Festival Memory',
      instructions: 'Memorize these familiar festival items.',
      items: [
        { id: 1, name: 'Bihu Dance', icon: '💃', color: 'bg-orange-100 border-orange-300' },
        { id: 2, name: 'Pitha', icon: '🍘', color: 'bg-amber-100 border-amber-300' },
        { id: 3, name: 'Dhol Drum', icon: '🥁', color: 'bg-red-100 border-red-300' }
      ],
      targetId: 2,
      targetQuestion: 'Which item was the Pitha?',
      distractors: [
        { id: 4, name: 'Apple', icon: '🍎', color: 'bg-red-100 border-red-300' }
      ]
    },
    {
      id: 'mem5',
      title: 'Tea Garden Memory',
      instructions: 'Memorize these things commonly seen in a tea garden.',
      items: [
        { id: 1, name: 'Tea Leaves', icon: '🍃', color: 'bg-green-100 border-green-300' },
        { id: 2, name: 'Tea Basket', icon: '🧺', color: 'bg-yellow-100 border-yellow-300' },
        { id: 3, name: 'Tea Cup', icon: '☕', color: 'bg-orange-100 border-orange-300' }
      ],
      targetId: 1,
      targetQuestion: 'Which item was the Tea Leaves?',
      distractors: [
        { id: 4, name: 'Book', icon: '📖', color: 'bg-blue-100 border-blue-300' }
      ]
    }
  ],

  // =========================
  // ATTENTION GAME
  // =========================
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
        { id: 6, icon: '🦋', isTarget: true, name: 'Golden Butterfly' }
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
        { id: 6, icon: '💧', isTarget: true, name: 'Water Drop' }
      ],
      totalTargets: 3
    },

    // Assam Cultural Attention
    {
      id: 'att3',
      title: 'Find the Japi',
      instruction: 'Find all 3 traditional Japi symbols!',
      targetType: 'japi',
      grid: [
        { id: 1, icon: '👒', isTarget: true, name: 'Japi' },
        { id: 2, icon: '🧣', isTarget: false, name: 'Gamosa' },
        { id: 3, icon: '👒', isTarget: true, name: 'Japi' },
        { id: 4, icon: '🫖', isTarget: false, name: 'Tea Pot' },
        { id: 5, icon: '🍘', isTarget: false, name: 'Pitha' },
        { id: 6, icon: '👒', isTarget: true, name: 'Japi' }
      ],
      totalTargets: 3
    }
  ],

  // =========================
  // PATTERN GAME
  // =========================
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
        { id: 'o3', icon: '🍎', label: 'Red Apple' }
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
        { id: 'o3', icon: '⚡️', label: 'Spark' }
      ]
    },

    // Assam Cultural Pattern
    {
      id: 'pat3',
      title: 'Assam Cultural Pattern',
      instruction: 'Japi, Gamosa, Japi, Gamosa... What comes next?',
      sequence: ['👒 Japi', '🧣 Gamosa', '👒 Japi', '🧣 Gamosa', '?'],
      sequenceDisplay: [
        { icon: '👒', label: 'Japi' },
        { icon: '🧣', label: 'Gamosa' },
        { icon: '👒', label: 'Japi' },
        { icon: '🧣', label: 'Gamosa' },
        { icon: '❓', label: 'Next' }
      ],
      correctAnswer: '👒 Japi',
      options: [
        { id: 'o1', icon: '👒', label: 'Japi' },
        { id: 'o2', icon: '🫖', label: 'Tea' },
        { id: 'o3', icon: '🍘', label: 'Pitha' }
      ]
    }
  ],

  // =========================
  // OBJECT RECOGNITION
  // =========================
  objectRecognition: [
    {
      id: 'obj1',
      title: 'Recognize the Japi',
      instruction: 'Look at the object and choose its correct name.',
      object: { icon: '👒', name: 'Japi' },
      correctAnswer: 'Japi',
      options: [
        { id: 'o1', icon: '👒', label: 'Japi' },
        { id: 'o2', icon: '🧣', label: 'Gamosa' },
        { id: 'o3', icon: '🫖', label: 'Tea Pot' }
      ],
      hint: 'It is a traditional Assamese headgear.'
    },
    {
      id: 'obj2',
      title: 'Recognize the Gamosa',
      instruction: 'Look at the object and choose its correct name.',
      object: { icon: '🧣', name: 'Gamosa' },
      correctAnswer: 'Gamosa',
      options: [
        { id: 'o1', icon: '🧣', label: 'Gamosa' },
        { id: 'o2', icon: '👒', label: 'Japi' },
        { id: 'o3', icon: '☂️', label: 'Umbrella' }
      ],
      hint: 'It is a traditional Assamese cloth.'
    },
    {
      id: 'obj3',
      title: 'Recognize the Tea',
      instruction: 'Look at the object and choose its correct name.',
      object: { icon: '🫖', name: 'Tea Pot' },
      correctAnswer: 'Tea Pot',
      options: [
        { id: 'o1', icon: '🫖', label: 'Tea Pot' },
        { id: 'o2', icon: '🍚', label: 'Rice Bowl' },
        { id: 'o3', icon: '🍎', label: 'Apple' }
      ],
      hint: 'Assam is famous for its tea gardens.'
    },
    {
      id: 'obj4',
      title: 'Recognize the Pitha',
      instruction: 'Look at the food item and choose its correct name.',
      object: { icon: '🍘', name: 'Pitha' },
      correctAnswer: 'Pitha',
      options: [
        { id: 'o1', icon: '🍘', label: 'Pitha' },
        { id: 'o2', icon: '🍎', label: 'Apple' },
        { id: 'o3', icon: '🥭', label: 'Mango' }
      ],
      hint: 'It is a familiar traditional Assamese food.'
    },
    {
      id: 'obj5',
      title: 'Recognize the Tea Garden',
      instruction: 'Look at the symbol and choose the correct answer.',
      object: { icon: '🌿', name: 'Tea Garden' },
      correctAnswer: 'Tea Garden',
      options: [
        { id: 'o1', icon: '🌿', label: 'Tea Garden' },
        { id: 'o2', icon: '🏢', label: 'City Building' },
        { id: 'o3', icon: '🚗', label: 'Road' }
      ],
      hint: 'Assam is well known for its beautiful tea gardens.'
    }
  ],

  // =========================
  // ODD ONE OUT
  // =========================
  oddOneOut: [
    {
      id: 'odd1',
      title: 'Find the Different Item',
      instruction: 'Three items belong to the garden. Which one is different?',
      items: [
        { id: 'flower', icon: '🌸', label: 'Flower', category: 'garden' },
        { id: 'sunflower', icon: '🌻', label: 'Sunflower', category: 'garden' },
        { id: 'leaf', icon: '🍃', label: 'Leaf', category: 'garden' },
        { id: 'car', icon: '🚗', label: 'Car', category: 'vehicle' }
      ],
      correctAnswerId: 'car',
      explanation: 'The car is different because the other three belong to a garden.'
    },
    {
      id: 'odd2',
      title: 'Find the Different Item',
      instruction: 'Three of these are things we drink. Which one is different?',
      items: [
        { id: 'tea', icon: '☕', label: 'Tea', category: 'drink' },
        { id: 'water', icon: '💧', label: 'Water', category: 'drink' },
        { id: 'milk', icon: '🥛', label: 'Milk', category: 'drink' },
        { id: 'apple', icon: '🍎', label: 'Apple', category: 'food' }
      ],
      correctAnswerId: 'apple',
      explanation: 'Apple is different because the other three are drinks.'
    },
    {
      id: 'odd3',
      title: 'Find the Different Item',
      instruction: 'Three of these are animals. Which one is different?',
      items: [
        { id: 'dog', icon: '🐶', label: 'Dog', category: 'animal' },
        { id: 'cat', icon: '🐱', label: 'Cat', category: 'animal' },
        { id: 'cow', icon: '🐄', label: 'Cow', category: 'animal' },
        { id: 'chair', icon: '🪑', label: 'Chair', category: 'furniture' }
      ],
      correctAnswerId: 'chair',
      explanation: 'Chair is different because the other three are animals.'
    },
    {
      id: 'odd4',
      title: 'Find the Different Item',
      instruction: 'Three of these belong to the kitchen. Which one is different?',
      items: [
        { id: 'spoon', icon: '🥄', label: 'Spoon', category: 'kitchen' },
        { id: 'plate', icon: '🍽️', label: 'Plate', category: 'kitchen' },
        { id: 'cup', icon: '☕', label: 'Cup', category: 'kitchen' },
        { id: 'tree', icon: '🌳', label: 'Tree', category: 'nature' }
      ],
      correctAnswerId: 'tree',
      explanation: 'Tree is different because the other three are kitchen items.'
    },
    {
      id: 'odd5',
      title: 'Assam Cultural Items',
      instruction: 'Three of these are familiar Assam-related items. Which one is different?',
      items: [
        { id: 'japi', icon: '👒', label: 'Japi', category: 'assam' },
        { id: 'gamosa', icon: '🧣', label: 'Gamosa', category: 'assam' },
        { id: 'tea', icon: '🫖', label: 'Assam Tea', category: 'assam' },
        { id: 'airplane', icon: '✈️', label: 'Airplane', category: 'transport' }
      ],
      correctAnswerId: 'airplane',
      explanation: 'Airplane is different from the other familiar Assam-related items.'
    },
    {
      id: 'odd6',
      title: 'Assam Traditional Items',
      instruction: 'Which item does not belong with the familiar Assamese cultural items?',
      items: [
        { id: 'japi', icon: '👒', label: 'Japi', category: 'assam' },
        { id: 'gamosa', icon: '🧣', label: 'Gamosa', category: 'assam' },
        { id: 'pitha', icon: '🍘', label: 'Pitha', category: 'assam' },
        { id: 'computer', icon: '💻', label: 'Computer', category: 'technology' }
      ],
      correctAnswerId: 'computer',
      explanation: 'Computer is different because the other items are familiar Assamese cultural items.'
    }
  ],

  // =========================
  // DAILY ROUTINE
  // =========================
  dailyRoutine: [
    {
      id: "routine1",
      title: "Morning Routine",
      instruction: "Look at the daily routine. What should come next?",
      sequence: [
        { icon: "🌅", label: "Wake Up" },
        { icon: "🪥", label: "Brush Teeth" },
        { icon: "🍳", label: "Breakfast" }
      ],
      correctAnswer: "Take Medicine",
      options: [
        { id: "o1", icon: "💊", label: "Take Medicine" },
        { id: "o2", icon: "🌙", label: "Go to Sleep" },
        { id: "o3", icon: "🏠", label: "Leave Home" }
      ]
    },
    {
      id: "routine2",
      title: "Healthy Day Routine",
      instruction: "What should come next in this routine?",
      sequence: [
        { icon: "🍽️", label: "Eat Lunch" },
        { icon: "💧", label: "Drink Water" },
        { icon: "🌿", label: "Take a Walk" }
      ],
      correctAnswer: "Return Home",
      options: [
        { id: "o1", icon: "🏠", label: "Return Home" },
        { id: "o2", icon: "🌙", label: "Go to Sleep" },
        { id: "o3", icon: "🪥", label: "Brush Teeth" }
      ]
    },
    {
      id: "routine3",
      title: "Breakfast and Medicine",
      instruction: "After breakfast, what should come next?",
      sequence: [
        { icon: "🌅", label: "Wake Up" },
        { icon: "🪥", label: "Brush Teeth" },
        { icon: "🍳", label: "Breakfast" }
      ],
      correctAnswer: "Take Medicine",
      options: [
        { id: "o1", icon: "💊", label: "Take Medicine" },
        { id: "o2", icon: "🌙", label: "Go to Sleep" },
        { id: "o3", icon: "🍽️", label: "Eat Dinner" }
      ]
    },
    {
      id: "routine4",
      title: "Healthy Exercise Routine",
      instruction: "What should come next in this healthy routine?",
      sequence: [
        { icon: "🌿", label: "Go for a Walk" },
        { icon: "💧", label: "Drink Water" },
        { icon: "🪑", label: "Rest for a While" }
      ],
      correctAnswer: "Return Home",
      options: [
        { id: "o1", icon: "🏠", label: "Return Home" },
        { id: "o2", icon: "🌙", label: "Go to Sleep" },
        { id: "o3", icon: "🪥", label: "Brush Teeth" }
      ]
    },
    {
      id: "routine5",
      title: "Evening Routine",
      instruction: "After dinner, what should come next?",
      sequence: [
        { icon: "🌆", label: "Evening" },
        { icon: "🍽️", label: "Eat Dinner" }
      ],
      correctAnswer: "Take Evening Medicine",
      options: [
        { id: "o1", icon: "💊", label: "Take Evening Medicine" },
        { id: "o2", icon: "🌅", label: "Eat Breakfast" },
        { id: "o3", icon: "🌿", label: "Go for a Walk" }
      ]
    },
    {
      id: "routine6",
      title: "Bedtime Routine",
      instruction: "What should come next before going to sleep?",
      sequence: [
        { icon: "🌙", label: "Night Time" },
        { icon: "🪥", label: "Brush Teeth" },
        { icon: "🛏️", label: "Get Ready for Bed" }
      ],
      correctAnswer: "Go to Sleep",
      options: [
        { id: "o1", icon: "😴", label: "Go to Sleep" },
        { id: "o2", icon: "🍳", label: "Eat Breakfast" },
        { id: "o3", icon: "🌿", label: "Go for a Walk" }
      ]
    }
  ],

  // =========================
  // SPOT THE DIFFERENCE
  // =========================
spotDifference: [
  {
    id: "spot1",
    title: "Garden Spot the Difference",
    instruction: "Look carefully at Picture B and find 5 differences.",
    image: "/images/spot-difference/puzzle1.jpeg",

    differences: [
      { id: "d1", left: "78%", top: "18%" },
      { id: "d2", left: "22%", top: "70%" },
      { id: "d3", left: "58%", top: "70%" },
      { id: "d4", left: "70%", top: "35%" },
      { id: "d5", left: "82%", top: "68%" }
    ]
  },

  {
    id: "spot2",
    title: "Home Spot the Difference",
    instruction: "Look carefully at Picture B and find 5 differences.",
    image: "/images/spot-difference/puzzle2.jpeg",

    differences: [
      { id: "d1", left: "80%", top: "10%" },
      { id: "d2", left: "42%", top: "35%" },
      { id: "d3", left: "68%", top: "70%" },
      { id: "d4", left: "35%", top: "72%" },
      { id: "d5", left: "45%", top: "20%" }
    ]
  },

  {
    id: "spot3",
    title: "Park Spot the Difference",
    instruction: "Look carefully at Picture B and find 5 differences.",
    image: "/images/spot-difference/puzzle3.jpeg",

    differences: [
      { id: "d1", left: "75%", top: "8%" },
      { id: "d2", left: "78%", top: "35%" },
      { id: "d3", left: "72%", top: "75%" },
      { id: "d4", left: "55%", top: "18%" },
      { id: "d5", left: "25%", top: "72%" }
    ]
  }
]
};

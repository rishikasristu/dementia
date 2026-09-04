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
    addReminder: "+ Add Reminder",
        activity1MemoryPuzzle: "Activity 1: Memory Puzzle",
    needHint: "🌿 Need a Little Hint?",
    haveMemorizedThem: "I Have Memorized Them! 👀",
    listenQuestion: "🔊 Listen Question",
    hint: "💡 Hint",
    next: "Next",
    repeat: "Repeat",
    correct: "Correct!",
    incorrect: "Try Again!",
    memoryHint: "Look for the bright yellow garden blossom!",
    gardenFlowerMemory: "Garden Flower Memory",
gardenFlowerMemoryInstructions: "Look closely at these 3 garden items. Memorize them!",
gardenFlowerMemoryQuestion: "Which item was the Marigold Flower?",

afternoonTeaMemory: "Afternoon Tea Memory",
afternoonTeaMemoryInstructions: "Memorize these afternoon tea items.",
afternoonTeaMemoryQuestion: "Which item was the Sweet Biscuits?",

assamCulturalMemory: "Assam Cultural Memory",
assamCulturalMemoryInstructions: "Look carefully at these familiar Assamese items and memorize them.",
assamCulturalMemoryQuestion: "Which item was the Gamosa?",

assamFestivalMemory: "Assam Festival Memory",
assamFestivalMemoryInstructions: "Memorize these familiar festival items.",
assamFestivalMemoryQuestion: "Which item was the Pitha?",

teaGardenMemory: "Tea Garden Memory",
teaGardenMemoryInstructions: "Memorize these things commonly seen in a tea garden.",
teaGardenMemoryQuestion: "Which item was the Tea Leaves?",

needHint: "🌿 Need a Little Hint?",
haveMemorizedThem: "I Have Memorized Them! 👍",
listenQuestion: "🔊 Listen Question",
memoryHint: "💡 Hint: Look for the bright yellow garden blossom!",
marigoldFlower: "Marigold Flower",
clayPot: "Clay Pot",
wateringCan: "Watering Can",
redRose: "Red Rose",

ceramicTeapot: "Ceramic Teapot",
sweetBiscuits: "Sweet Biscuits",
greenMango: "Green Mango",
apple: "Apple",

japi: "Japi",
gamosa: "Gamosa",
assamTea: "Assam Tea",
umbrella: "Umbrella",

bihuDance: "Bihu Dance",
pitha: "Pitha",
dholDrum: "Dhol Drum",

teaLeaves: "Tea Leaves",
teaBasket: "Tea Basket",
teaCup: "Tea Cup",
book: "Book",
selectiveAttention: "Selective Attention",
selectiveAttentionInstruction: "Tap all 3 golden butterflies in the garden grid!",
waterDrops: "Find the Water Drops",
waterDropsInstruction: "Tap all 3 water drops to refresh the garden!",
findJapi: "Find the Japi",
findJapiInstruction: "Find all 3 traditional Japi symbols!",
activity2SelectiveAttention: "Activity 2: Selective Attention",
listenInstructions: "🔊 Listen Instructions",
found: "Found",
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
    addReminder: "+ గుర్తుచేసేది జతచేయి",
    activity1MemoryPuzzle: "కార్యకలాపం 1: జ్ఞాపకశక్తి పజిల్",
    needHint: "🌿 చిన్న సూచన కావాలా?",
    haveMemorizedThem: "నేను వాటిని గుర్తుంచుకున్నాను! 👀",
    listenQuestion: "🔊 ప్రశ్న వినండి",
    hint: "💡 సూచన",
    next: "తదుపరి",
    repeat: "మళ్లీ ప్రయత్నించండి",
    correct: "సరైనది!",
    incorrect: "మళ్లీ ప్రయత్నించండి!",
    memoryHint: "ప్రకాశవంతమైన పసుపు రంగు తోట పువ్వు కోసం చూడండి!",
    gardenFlowerMemory: "తోట పూల జ్ఞాపకం",
gardenFlowerMemoryInstructions: "ఈ 3 తోట వస్తువులను జాగ్రత్తగా చూడండి. వాటిని గుర్తుంచుకోండి!",
gardenFlowerMemoryQuestion: "బంతి పువ్వు ఏ వస్తువు?",

afternoonTeaMemory: "మధ్యాహ్నం టీ జ్ఞాపకం",
afternoonTeaMemoryInstructions: "ఈ మధ్యాహ్నం టీ వస్తువులను గుర్తుంచుకోండి.",
afternoonTeaMemoryQuestion: "తీపి బిస్కెట్లు ఏవి?",

assamCulturalMemory: "అస్సాం సాంస్కృతిక జ్ఞాపకం",
assamCulturalMemoryInstructions: "ఈ పరిచయమైన అస్సామీ వస్తువులను జాగ్రత్తగా చూసి గుర్తుంచుకోండి.",
assamCulturalMemoryQuestion: "గమోసా ఏ వస్తువు?",

assamFestivalMemory: "అస్సాం పండుగ జ్ఞాపకం",
assamFestivalMemoryInstructions: "ఈ పరిచయమైన పండుగ వస్తువులను గుర్తుంచుకోండి.",
assamFestivalMemoryQuestion: "పిఠా ఏ వస్తువు?",

teaGardenMemory: "టీ తోట జ్ఞాపకం",
teaGardenMemoryInstructions: "టీ తోటలో సాధారణంగా కనిపించే ఈ వస్తువులను గుర్తుంచుకోండి.",
teaGardenMemoryQuestion: "టీ ఆకులు ఏవి?",

needHint: "🌿 చిన్న సూచన కావాలా?",
haveMemorizedThem: "నేను వాటిని గుర్తుంచుకున్నాను! 👍",
listenQuestion: "🔊 ప్రశ్న వినండి",
memoryHint: "💡 సూచన: ప్రకాశవంతమైన పసుపు తోట పువ్వు కోసం చూడండి!",
marigoldFlower: "బంతి పువ్వు",
clayPot: "మట్టి కుండ",
wateringCan: "నీళ్లు పోసే డబ్బా",
redRose: "ఎర్ర గులాబీ",

ceramicTeapot: "సిరామిక్ టీ పాట్",
sweetBiscuits: "తీపి బిస్కెట్లు",
greenMango: "పచ్చి మామిడి",
apple: "ఆపిల్",

japi: "జాపి",
gamosa: "గమోసా",
assamTea: "అస్సాం టీ",
umbrella: "గొడుగు",

bihuDance: "బిహు నృత్యం",
pitha: "పిఠా",
dholDrum: "ఢోల్ డ్రమ్",

teaLeaves: "టీ ఆకులు",
teaBasket: "టీ బుట్ట",
teaCup: "టీ కప్పు",
book: "పుస్తకం",
selectiveAttention: "ఎంపికాత్మక శ్రద్ధ",
selectiveAttentionInstruction: "తోటలో ఉన్న 3 బంగారు సీతాకోకచిలుకలను నొక్కండి!",
waterDrops: "నీటి చుక్కలను కనుగొనండి",
waterDropsInstruction: "తోటను తాజాగా చేయడానికి 3 నీటి చుక్కలను నొక్కండి!",
findJapi: "జాపిని కనుగొనండి",
findJapiInstruction: "3 సంప్రదాయ జాపి గుర్తులను కనుగొనండి!",
activity2SelectiveAttention: "కార్యకలాపం 2: ఎంపికాత్మక శ్రద్ధ",
listenInstructions: "🔊 సూచనలు వినండి",
found: "కనుగొనబడింది",
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
    addReminder: "+ नया रिमाइंडर जोड़ें",
        activity1MemoryPuzzle: "गतिविधि 1: स्मृति पहेली",
    needHint: "🌿 थोड़ी मदद चाहिए?",
    haveMemorizedThem: "मैंने उन्हें याद कर लिया! 👀",
    listenQuestion: "🔊 प्रश्न सुनें",
    hint: "💡 संकेत",
    next: "अगला",
    repeat: "फिर से प्रयास करें",
    correct: "सही!",
    incorrect: "फिर से प्रयास करें!",
    memoryHint: "चमकीले पीले बगीचे के फूल को देखें!",
    gardenFlowerMemory: "बगीचे के फूलों की स्मृति",
gardenFlowerMemoryInstructions: "इन 3 बगीचे की चीज़ों को ध्यान से देखें और याद रखें!",
gardenFlowerMemoryQuestion: "गेंदा फूल कौन सी चीज़ थी?",

afternoonTeaMemory: "शाम की चाय की स्मृति",
afternoonTeaMemoryInstructions: "इन चाय के सामान को याद रखें।",
afternoonTeaMemoryQuestion: "मीठी बिस्कुट कौन सी थी?",

assamCulturalMemory: "असम की सांस्कृतिक स्मृति",
assamCulturalMemoryInstructions: "इन परिचित असमिया वस्तुओं को ध्यान से देखें और याद रखें।",
assamCulturalMemoryQuestion: "गमोसा कौन सी वस्तु थी?",

assamFestivalMemory: "असम त्योहार की स्मृति",
assamFestivalMemoryInstructions: "इन परिचित त्योहार की वस्तुओं को याद रखें।",
assamFestivalMemoryQuestion: "पीठा कौन सी वस्तु थी?",

teaGardenMemory: "चाय बागान की स्मृति",
teaGardenMemoryInstructions: "चाय बागान में आमतौर पर दिखाई देने वाली इन चीज़ों को याद रखें।",
teaGardenMemoryQuestion: "चाय की पत्तियाँ कौन सी थीं?",

needHint: "🌿 थोड़ी मदद चाहिए?",
haveMemorizedThem: "मैंने इन्हें याद कर लिया! 👍",
listenQuestion: "🔊 प्रश्न सुनें",
memoryHint: "💡 संकेत: चमकीले पीले बगीचे के फूल को देखें!",
marigoldFlower: "गेंदा फूल",
clayPot: "मिट्टी का गमला",
wateringCan: "पानी देने का डिब्बा",
redRose: "लाल गुलाब",

ceramicTeapot: "सिरेमिक चायदानी",
sweetBiscuits: "मीठे बिस्कुट",
greenMango: "कच्चा आम",
apple: "सेब",

japi: "जापी",
gamosa: "गमछा",
assamTea: "असम की चाय",
umbrella: "छाता",

bihuDance: "बिहू नृत्य",
pitha: "पीठा",
dholDrum: "ढोल",

teaLeaves: "चाय की पत्तियाँ",
teaBasket: "चाय की टोकरी",
teaCup: "चाय का कप",
book: "किताब",
selectiveAttention: "चयनात्मक ध्यान",
selectiveAttentionInstruction: "बगीचे में सभी 3 सुनहरी तितलियों को चुनें!",
waterDrops: "पानी की बूँदें खोजें",
waterDropsInstruction: "बगीचे को ताज़ा करने के लिए सभी 3 पानी की बूँदों को चुनें!",
findJapi: "जापी खोजें",
findJapiInstruction: "सभी 3 पारंपरिक जापी चिन्ह खोजें!",
activity2SelectiveAttention: "गतिविधि 2: चयनात्मक ध्यान",
listenInstructions: "🔊 निर्देश सुनें",
found: "मिल गया",
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

    backToElderly: "বয়োজ্যেষ্ঠৰ স্ক্ৰীনলৈ যাওক",

    caregiverTitle: "যত্নদাতাৰ প’ৰ্টেল — লক্ষ্মীৰ অৱলোকন",

    languageSelect: "ভাষা",

    difficulty: "কঠিনতাৰ স্তৰ",

    hintsAvailable: "ইংগিত সক্ৰিয়",

    cognitiveMetrics: "স্মৃতিৰ অগ্ৰগতিৰ চাৰ্ট",

    addMemory: "+ নতুন স্মৃতি যোগ কৰক",

    addReminder: "+ নতুন ৰিমাইণ্ডাৰ যোগ কৰক",
    activity1MemoryPuzzle: "কাৰ্যকলাপ ১: স্মৃতিৰ ধাঁধা",
    needHint: "🌿 অলপ সহায় লাগে নেকি?",
    haveMemorizedThem: "মই সেইবোৰ মনত ৰাখিছোঁ! 👀",
    listenQuestion: "🔊 প্ৰশ্নটো শুনক",
    hint: "💡 ইংগিত",
    next: "পৰৱৰ্তী",
    repeat: "পুনৰ চেষ্টা কৰক",
    correct: "শুদ্ধ!",
    incorrect: "পুনৰ চেষ্টা কৰক!",
    memoryHint: "উজ্জ্বল হালধীয়া বাগিচাৰ ফুলটো বিচাৰক!",
    gardenFlowerMemory: "বাগিচাৰ ফুলৰ স্মৃতি",
gardenFlowerMemoryInstructions: "এই ৩টা বাগিচাৰ সামগ্ৰী ভালদৰে চাওক আৰু মনত ৰাখক!",
gardenFlowerMemoryQuestion: "গেন্ধা ফুলটো কোনটো আছিল?",

afternoonTeaMemory: "আবেলিৰ চাহৰ স্মৃতি",
afternoonTeaMemoryInstructions: "এই চাহৰ সামগ্ৰীসমূহ মনত ৰাখক।",
afternoonTeaMemoryQuestion: "মিঠা বিস্কুটটো কোনটো আছিল?",

assamCulturalMemory: "অসমৰ সাংস্কৃতিক স্মৃতি",
assamCulturalMemoryInstructions: "এই পৰিচিত অসমীয়া সামগ্ৰীসমূহ ভালদৰে চাই মনত ৰাখক।",
assamCulturalMemoryQuestion: "গামোচাখন কোনটো আছিল?",

assamFestivalMemory: "অসমৰ উৎসৱৰ স্মৃতি",
assamFestivalMemoryInstructions: "এই পৰিচিত উৎসৱৰ সামগ্ৰীসমূহ মনত ৰাখক।",
assamFestivalMemoryQuestion: "পিঠাটো কোনটো আছিল?",

teaGardenMemory: "চাহ বাগিচাৰ স্মৃতি",
teaGardenMemoryInstructions: "চাহ বাগিচাত সাধাৰণতে দেখা এই বস্তুসমূহ মনত ৰাখক।",
teaGardenMemoryQuestion: "চাহৰ পাতবোৰ কোনবোৰ আছিল?",

needHint: "🌿 অলপ ইংগিত বিচাৰেনে?",
haveMemorizedThem: "মই সেইবোৰ মনত ৰাখিছোঁ! 👍",
listenQuestion: "🔊 প্ৰশ্নটো শুনক",
memoryHint: "💡 ইংগিত: উজ্জ্বল হালধীয়া বাগিচাৰ ফুলটো বিচাৰক!",
marigoldFlower: "গেন্ধা ফুল",
clayPot: "মাটিৰ টাব",
wateringCan: "পানী দিয়া পাত্ৰ",
redRose: "ৰঙা গোলাপ",

ceramicTeapot: "চিৰামিক চাহৰ পাত্ৰ",
sweetBiscuits: "মিঠা বিস্কুট",
greenMango: "কেঁচা আম",
apple: "আপেল",

japi: "জাপি",
gamosa: "গামোচা",
assamTea: "অসমৰ চাহ",
umbrella: "ছাতি",

bihuDance: "বিহু নৃত্য",
pitha: "পিঠা",
dholDrum: "ঢোল",

teaLeaves: "চাহৰ পাত",
teaBasket: "চাহৰ টোপোলা",
teaCup: "চাহৰ কাপ",
book: "কিতাপ",
selectiveAttention: "নিৰ্বাচিত মনোযোগ",
selectiveAttentionInstruction: "বাগিচাৰ গ্ৰীডত থকা ৩টা সোণালী পখিলা বাছনি কৰক!",
waterDrops: "পানীৰ টোপালবোৰ বিচাৰক",
waterDropsInstruction: "বাগিচাখন সতেজ কৰিবলৈ ৩টা পানীৰ টোপাল বাছনি কৰক!",
findJapi: "জাপি বিচাৰক",
findJapiInstruction: "৩টা পৰম্পৰাগত জাপিৰ চিহ্ন বিচাৰক!",
activity2SelectiveAttention: "কাৰ্যকলাপ ২: নিৰ্বাচিত মনোযোগ",
listenInstructions: "🔊 নিৰ্দেশনা শুনক",
found: "বিচাৰি পোৱা গ'ল",
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
      titleKey: 'gardenFlowerMemory',
      instructions: 'Look closely at these 3 garden items. Memorize them!',
      instructionsKey: 'gardenFlowerMemoryInstructions',
      items: [
        { id: 1, name: 'Marigold Flower',nameKey: 'marigoldFlower', icon: '🌼', color: 'bg-amber-100 border-amber-300' },
        { id: 2, name: 'Clay Pot',nameKey: 'clayPot', icon: '🪴', color: 'bg-emerald-100 border-emerald-300' },
        { id: 3, name: 'Watering Can',nameKey: 'wateringCan', icon: '🚿', color: 'bg-sky-100 border-sky-300' }
      ],
      targetId: 1,
      targetQuestion: 'Which item was the Marigold Flower?',
      questionKey: 'gardenFlowerMemoryQuestion',
      distractors: [
        { id: 4, name: 'Red Rose',nameKey: 'redRose', icon: '🌹', color: 'bg-rose-100 border-rose-300' }
      ]
      
    },
    {
      id: 'mem2',
      title: 'Family Tea Time Items',
      titleKey: 'afternoonTeaMemory',
      instructions: 'Memorize these afternoon tea items.',
      instructionsKey: 'afternoonTeaMemoryInstructions',
      items: [
        { id: 1, name: 'Ceramic Teapot',nameKey: 'ceramicTeapot', icon: '🫖', color: 'bg-amber-100 border-amber-300' },
        { id: 2, name: 'Sweet Biscuits',nameKey: 'sweetBiscuits', icon: '🍪', color: 'bg-amber-50 border-amber-200' },
        { id: 3, name: 'Green Mango',nameKey: 'greenMango', icon: '🥭', color: 'bg-lime-100 border-lime-300' }
      ],
      targetId: 2,
      targetQuestion: 'Which item was the Sweet Biscuits?',
      questionKey: 'afternoonTeaMemoryQuestion',
      distractors: [
        { id: 4, name: 'Apple',nameKey: 'apple',icon: '🍎', color: 'bg-red-100 border-red-300' }
      ]
    },

    // NER / Assam Cultural Memory
    {
      id: 'mem3',
      title: 'Assam Cultural Memory',
      titleKey: 'assamCulturalMemory',
      instructions: 'Look carefully at these familiar Assamese items and memorize them.',
      instructionsKey: 'assamCulturalMemoryInstructions',
      items: [
        { id: 1, name: 'Japi',nameKey: 'japi', icon: '👒', color: 'bg-amber-100 border-amber-300' },
        { id: 2, name: 'Gamosa',nameKey: 'gamosa', icon: '🧣', color: 'bg-red-100 border-red-300' },
        { id: 3, name: 'Assam Tea',nameKey: 'assamTea', icon: '🫖', color: 'bg-lime-100 border-lime-300' }
      ],
      targetId: 2,
      targetQuestion: 'Which item was the Gamosa?',
      questionKey: 'assamCulturalMemoryQuestion',
      distractors: [
        { id: 4, name: 'Umbrella',nameKey: 'umbrella', icon: '☂️', color: 'bg-sky-100 border-sky-300' }
      ]
    },
    {
      id: 'mem4',
      title: 'Assam Festival Memory',
      titleKey: 'assamFestivalMemory',
      instructions: 'Memorize these familiar festival items.',
      instructionsKey: 'assamFestivalMemoryInstructions',
      items: [
        { id: 1, name: 'Bihu Dance', nameKey: 'bihuDance',icon: '💃', color: 'bg-orange-100 border-orange-300' },
        { id: 2, name: 'Pitha',nameKey: 'pitha', icon: '🍘', color: 'bg-amber-100 border-amber-300' },
        { id: 3, name: 'Dhol Drum', nameKey: 'dholDrum',icon: '🥁', color: 'bg-red-100 border-red-300' }
      ],
      targetId: 2,
      targetQuestion: 'Which item was the Pitha?',
      questionKey: 'assamFestivalMemoryQuestion',
      distractors: [
        { id: 4, name: 'Apple',nameKey: 'apple', icon: '🍎', color: 'bg-red-100 border-red-300' }
      ]
    },
    {
      id: 'mem5',
      title: 'Tea Garden Memory',
      titleKey: 'teaGardenMemory',
      instructions: 'Memorize these things commonly seen in a tea garden.',
      instructionsKey: 'teaGardenMemoryInstructions',
      items: [
        { id: 1, name: 'Tea Leaves',nameKey: 'teaLeaves', icon: '🍃', color: 'bg-green-100 border-green-300' },
        { id: 2, name: 'Tea Basket',nameKey: 'teaBasket', icon: '🧺', color: 'bg-yellow-100 border-yellow-300' },
        { id: 3, name: 'Tea Cup',nameKey: 'teaCup', icon: '☕', color: 'bg-orange-100 border-orange-300' }
      ],
      targetId: 1,
      targetQuestion: 'Which item was the Tea Leaves?',
      questionKey: 'teaGardenMemoryQuestion',
      distractors: [
        { id: 4, name: 'Book',nameKey: 'book', icon: '📖', color: 'bg-blue-100 border-blue-300' }
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
      titleKey: 'selectiveAttention',
      instruction: 'Tap all 3 golden butterflies in the garden grid!',
      instructionKey: 'selectiveAttentionInstruction',
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
      titleKey: 'waterDrops',
      instruction: 'Tap all 3 water drops to refresh the garden!',
      instructionKey: 'waterDropsInstruction',
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
      titleKey: 'findJapi',
      instruction: 'Find all 3 traditional Japi symbols!',
      instructionKey: 'findJapiInstruction',
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

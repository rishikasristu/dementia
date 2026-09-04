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
    titleKey: 'morningMedicineWarmWater',
    category: 'meds',
    icon: '💊',
    completed: true,
    audioText:
      'It is 8 AM. Please take your medicine with warm water after breakfast.',
    audioTextKey: 'morningMedicineWarmWaterAudio'
  },

  {
    id: 'r2',
    time: '10:00',
    title: 'Hydration Break',
    titleKey: 'hydrationBreak',
    category: 'water',
    icon: '💧',
    completed: true,
    audioText:
      'It is 10 AM. Time for a refreshing glass of water.',
    audioTextKey: 'hydrationBreakAudio'
  },

  {
    id: 'r3',
    time: '13:00',
    title: 'Nutritious Lunch',
    titleKey: 'nutritiousLunch',
    category: 'lunch',
    icon: '🍽️',
    completed: false,
    audioText:
      'It is 1 PM. Time for lunch.',
    audioTextKey: 'nutritiousLunchAudio'
  },

  {
    id: 'r4',
    time: '17:00',
    title: 'Evening Garden Stroll',
    titleKey: 'eveningGardenStroll',
    category: 'walk',
    icon: '🌿',
    completed: false,
    audioText:
      'It is 5 PM. Take a gentle walk.',
    audioTextKey: 'eveningGardenStrollAudio'
  },

  {
    id: 'r5',
    time: '20:00',
    title: 'Evening Medicine',
    titleKey: 'eveningMedicine',
    category: 'meds',
    icon: '💊',
    completed: false,
    audioText:
      'It is 8 PM. Please take your evening medicine.',
    audioTextKey: 'eveningMedicineAudio'
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
spotDifference: "Spot the Difference",
spotDifferenceInstruction: "Look carefully at Picture B and find 5 differences.",
puzzle: "Puzzle",
of: "of",
differencesFound: "Differences Found",
tapPictureDifference: "Tap on Picture B where you see a difference",
restart: "Restart",
nextPuzzle: "Next Puzzle",
finishGame: "Finish Game",
activity3VisualPattern: "Activity 3: Visual Pattern Sequence",
listenSequence: "🔊 Listen Sequence",
selectNextItem: "Select the item that comes next:",
gardenFlowerSequence: "Garden Flower Sequence",
gardenFlowerSequenceInstruction: "Look at the pattern. Which flower comes next?",

dailyRhythmPattern: "Daily Rhythm Pattern",
dailyRhythmPatternInstruction: "Sun, Cloud, Sun, Cloud... What comes next?",

assamCulturalPattern: "Assam Cultural Pattern",
assamCulturalPatternInstruction: "Japi, Gamosa, Japi, Gamosa... What comes next?",
oddOneOut: "Odd One Out",
gardenOddOneOut: "Find the Different Item",
gardenOddOneOutInstruction: "Three items belong to the garden. Which one is different?",
gardenOddOneOutExplanation: "The car is different because the other three belong to a garden.",

homeOddOneOut: "Find the Different Item",
homeOddOneOutInstruction: "Three of these are things we drink. Which one is different?",
homeOddOneOutExplanation: "Apple is different because the other three are drinks.",

assamCulturalOddOneOut: "Find the Different Item",
assamCulturalOddOneOutInstruction: "Three of these are animals. Which one is different?",
assamCulturalOddOneOutExplanation: "Chair is different because the other three are animals.",

teaGardenOddOneOut: "Find the Different Item",
teaGardenOddOneOutInstruction: "Three of these belong to the kitchen. Which one is different?",
teaGardenOddOneOutExplanation: "Tree is different because the other three are kitchen items.",

assamCulturalItems: "Assam Cultural Items",
assamCulturalItemsInstruction: "Three of these are familiar Assam-related items. Which one is different?",
assamCulturalItemsExplanation: "Airplane is different from the other familiar Assam-related items.",

assamTraditionalItems: "Assam Traditional Items",
assamTraditionalItemsInstruction: "Which item does not belong with the familiar Assamese cultural items?",
assamTraditionalItemsExplanation: "Computer is different because the other items are familiar Assamese cultural items.",

wonderfulCorrectAnswer: "Wonderful! Correct Answer! 🎉",
nextQuestion: "Next Question",
goodEffort: "Good Effort 🌱",
oddOneOutHint: "Look carefully. Which item does not belong with the other three?",
tryAgain: "Try Again",
restartActivity: "Restart Activity",
listenToQuestion: "Listen to Question",
recognizeJapi: 'Recognize the Japi',
recognizeGamosa: 'Recognize the Gamosa',
recognizeTea: 'Recognize the Tea',
recognizePitha: 'Recognize the Pitha',
recognizeTeaGarden: 'Recognize the Tea Garden',

recognizeObjectInstruction: 'Look at the object and choose its correct name.',
recognizeFoodInstruction: 'Look at the food item and choose its correct name.',
recognizeSymbolInstruction: 'Look at the symbol and choose the correct answer.',

japiHint: 'It is a traditional Assamese headgear.',
gamosaHint: 'It is a traditional Assamese cloth.',
teaHint: 'Assam is famous for its tea gardens.',
pithaHint: 'It is a familiar traditional Assamese food.',
teaGardenHint: 'Assam is well known for its beautiful tea gardens.',
japi: 'Japi',
gamosa: 'Gamosa',
teaPot: 'Tea Pot',
umbrella: 'Umbrella',
riceBowl: 'Rice Bowl',
apple: 'Apple',
pitha: 'Pitha',
mango: 'Mango',
teaGarden: 'Tea Garden',
cityBuilding: 'City Building',
road: 'Road',
activityDailyRoutine: "Daily Routine",
dailyRoutine: "Daily Routine",
whatComesNext: "What comes next?",
correctAnswer: "Correct Answer!",
excellentCorrectNextStep:
  "Excellent! You selected the correct next step.",
wellTried: "Well tried!",
theCorrectAnswerIs: "The correct answer is",
restart: "Restart",
startAgain: "Start Again",
nextQuestion: "Next Question",
question: "Question",
of: "of",
backToGarden: "Back to Garden",
cognitiveActivities: "Cognitive Activities",
mode: "Mode",
activitiesAdaptToPerformance:
  "Activities gently adapt based on your performance.",

memory: "Memory",
attention: "Attention",
pattern: "Pattern",
objectRecognition: "Object Recognition",
oddOneOut: "Odd One Out",
dailyRoutine: "Daily Routine",
spotDifference: "Spot Difference",
todaysTimeline: "Today's Timeline",
todayRemindersDescription:
  "Simple reminders for medicine, fresh water, and gentle walks today.",
done: "Done",
listenReminder: "Listen reminder vocal audio",
morningMedicineWarmWater: "Morning Medicine & Warm Water",
hydrationBreak: "Hydration Break",
nutritiousLunch: "Nutritious Lunch",
eveningGardenStroll: "Evening Garden Stroll",
eveningMedicine: "Evening Medicine",

morningMedicineWarmWaterAudio:
  "It is 8 AM. Please take your medicine with warm water after breakfast.",
hydrationBreakAudio:
  "It is 10 AM. Time for a refreshing glass of water.",
nutritiousLunchAudio:
  "It is 1 PM. Time for lunch.",
eveningGardenStrollAudio:
  "It is 5 PM. Take a gentle walk.",
eveningMedicineAudio:
  "It is 8 PM. Please take your evening medicine.",
  feedbackWonderfulAudio: "Wonderful job! Your garden is growing.",
feedbackTryAgainAudio: "That was a great effort. Let's try once more together.",
goodEffort: "Good Effort!",
activityAddedFlower: "Your activity added a fresh flower to your Memory Garden!",
tryAgainGently: "Try Again Gently",
morningMedicineWarmWater: "Morning Medicine & Warm Water",
hydrationBreak: "Hydration Break (Fresh Water)",
nutritiousLunch: "Nutritious Lunch & Soft Roti",
eveningGardenStroll: "Evening Garden Stroll",
eveningMedicine: "Evening Medicine",
// Caregiver Dashboard
caregiverDashboard: "Caregiver Dashboard",
welcomeBack: "Welcome back",
gardenGrowth: "Garden Growth",
puzzleAccuracy: "Puzzle Accuracy",
aiPersonalization: "AI Personalization",
cognitiveActivityTrends: "Cognitive Activity Trends",
familyAlbumManager: "Family Album Manager",
scheduleReminders: "Schedule Reminders",
addPhoto: "Add Photo",
addReminder: "Add Reminder",
recentActivity: "Recent Activity",
viewAllActivity: "View All Activity",
noRecentActivity: "No recent activity",
completed: "Completed",
upcoming: "Upcoming",
done: "Done",
markDone: "Mark Done",
cancel: "Cancel",
save: "Save",
close: "Close",
delete: "Delete",
edit: "Edit",
name: "Name",
description: "Description",
date: "Date",
time: "Time",
title: "Title",
photo: "Photo",
reminder: "Reminder",
message: "Message",
status: "Status",
progress: "Progress",
accuracy: "Accuracy",
activities: "Activities",
thisWeek: "This Week",
today: "Today",
yesterday: "Yesterday",
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
spotDifference: "తేడాలను గుర్తించండి",
spotDifferenceInstruction: "చిత్రం Bను జాగ్రత్తగా చూసి 5 తేడాలను కనుగొనండి.",
puzzle: "ఆట",
of: "లో",
differencesFound: "కనుగొన్న తేడాలు",
tapPictureDifference: "తేడా కనిపించే చోట చిత్రం Bపై నొక్కండి",
restart: "మళ్లీ ప్రారంభించండి",
nextPuzzle: "తదుపరి ఆట",
finishGame: "ఆటను ముగించండి",
activity3VisualPattern: "కార్యకలాపం 3: దృశ్య నమూనా క్రమం",
listenSequence: "🔊 క్రమాన్ని వినండి",
selectNextItem: "తర్వాత వచ్చే అంశాన్ని ఎంచుకోండి:",
gardenFlowerSequence: "తోట పూల క్రమం",
gardenFlowerSequenceInstruction: "ఈ నమూనాను చూడండి. తర్వాత ఏ పువ్వు వస్తుంది?",

dailyRhythmPattern: "రోజువారీ లయ నమూనా",
dailyRhythmPatternInstruction: "సూర్యుడు, మేఘం, సూర్యుడు, మేఘం... తర్వాత ఏమి వస్తుంది?",

assamCulturalPattern: "అస్సాం సాంస్కృతిక నమూనా",
assamCulturalPatternInstruction: "జాపి, గామోసా, జాపి, గామోసా... తర్వాత ఏమి వస్తుంది?",
oddOneOut: "విభిన్నమైనదాన్ని కనుగొనండి",
gardenOddOneOut: "విభిన్నమైన వస్తువును కనుగొనండి",
gardenOddOneOutInstruction: "మూడు వస్తువులు తోటకు చెందినవి. ఏది భిన్నంగా ఉంది?",
gardenOddOneOutExplanation: "మిగిలిన మూడు తోటకు చెందినవి కాబట్టి కారు భిన్నమైనది.",

homeOddOneOut: "విభిన్నమైన వస్తువును కనుగొనండి",
homeOddOneOutInstruction: "వీటిలో మూడు మనం తాగే వస్తువులు. ఏది భిన్నంగా ఉంది?",
homeOddOneOutExplanation: "మిగిలిన మూడు పానీయాలు కాబట్టి ఆపిల్ భిన్నమైనది.",

assamCulturalOddOneOut: "విభిన్నమైన వస్తువును కనుగొనండి",
assamCulturalOddOneOutInstruction: "వీటిలో మూడు జంతువులు. ఏది భిన్నంగా ఉంది?",
assamCulturalOddOneOutExplanation: "మిగిలిన మూడు జంతువులు కాబట్టి కుర్చీ భిన్నమైనది.",

teaGardenOddOneOut: "విభిన్నమైన వస్తువును కనుగొనండి",
teaGardenOddOneOutInstruction: "వీటిలో మూడు వంటగదికి చెందినవి. ఏది భిన్నంగా ఉంది?",
teaGardenOddOneOutExplanation: "మిగిలిన మూడు వంటగది వస్తువులు కాబట్టి చెట్టు భిన్నమైనది.",

assamCulturalItems: "అస్సాం సాంస్కృతిక వస్తువులు",
assamCulturalItemsInstruction: "వీటిలో మూడు అస్సాంకు సంబంధించిన పరిచయమైన వస్తువులు. ఏది భిన్నంగా ఉంది?",
assamCulturalItemsExplanation: "మిగిలిన పరిచయమైన అస్సాం వస్తువుల నుండి విమానం భిన్నమైనది.",

assamTraditionalItems: "అస్సాం సంప్రదాయ వస్తువులు",
assamTraditionalItemsInstruction: "పరిచయమైన అస్సామీ సాంస్కృతిక వస్తువులతో సరిపోని వస్తువు ఏది?",
assamTraditionalItemsExplanation: "మిగిలినవి పరిచయమైన అస్సామీ సాంస్కృతిక వస్తువులు కాబట్టి కంప్యూటర్ భిన్నమైనది.",

wonderfulCorrectAnswer: "అద్భుతం! సరైన సమాధానం! 🎉",
nextQuestion: "తదుపరి ప్రశ్న",
goodEffort: "మంచి ప్రయత్నం 🌱",
oddOneOutHint: "జాగ్రత్తగా చూడండి. మిగిలిన మూడు వస్తువులతో సరిపోని వస్తువు ఏది?",
tryAgain: "మళ్లీ ప్రయత్నించండి",
restartActivity: "కార్యకలాపాన్ని మళ్లీ ప్రారంభించండి",
listenToQuestion: "ప్రశ్నను వినండి",
recognizeJapi: 'జాపిని గుర్తించండి',
recognizeGamosa: 'గమోసాను గుర్తించండి',
recognizeTea: 'టీని గుర్తించండి',
recognizePitha: 'పిఠాను గుర్తించండి',
recognizeTeaGarden: 'టీ తోటను గుర్తించండి',

recognizeObjectInstruction: 'వస్తువును చూసి దాని సరైన పేరును ఎంచుకోండి.',
recognizeFoodInstruction: 'ఆహార పదార్థాన్ని చూసి దాని సరైన పేరును ఎంచుకోండి.',
recognizeSymbolInstruction: 'చిహ్నాన్ని చూసి సరైన సమాధానాన్ని ఎంచుకోండి.',

japiHint: 'ఇది అస్సాంలోని సాంప్రదాయ తలపాగా.',
gamosaHint: 'ఇది అస్సాంలోని సాంప్రదాయ వస్త్రం.',
teaHint: 'అస్సాం టీ తోటలకు ప్రసిద్ధి చెందింది.',
pithaHint: 'ఇది అస్సాంలోని ప్రసిద్ధ సాంప్రదాయ ఆహారం.',
teaGardenHint: 'అస్సాం తన అందమైన టీ తోటలకు ప్రసిద్ధి చెందింది.',
japi: 'జాపి',
gamosa: 'గమోసా',
teaPot: 'టీ కుండ',
umbrella: 'గొడుగు',
riceBowl: 'అన్నం గిన్నె',
apple: 'ఆపిల్',
pitha: 'పిఠా',
mango: 'మామిడి',
teaGarden: 'టీ తోట',
cityBuilding: 'నగర భవనం',
road: 'రోడ్డు',
activityDailyRoutine: "రోజువారీ దినచర్య",
dailyRoutine: "రోజువారీ దినచర్య",
whatComesNext: "తర్వాత ఏమి చేయాలి?",
correctAnswer: "సరైన సమాధానం!",
excellentCorrectNextStep: "చాలా బాగుంది! మీరు సరైన తదుపరి పనిని ఎంచుకున్నారు.",
wellTried: "బాగా ప్రయత్నించారు!",
theCorrectAnswerIs: "సరైన సమాధానం",
restart: "మళ్లీ ప్రారంభించండి",
startAgain: "మళ్లీ ప్రారంభించండి",
nextQuestion: "తదుపరి ప్రశ్న",
question: "ప్రశ్న",
of: "లో",
morningRoutine: "ఉదయం దినచర్య",
morningRoutineInstruction: "రోజువారీ దినచర్యను చూడండి. తర్వాత ఏమి చేయాలి?",

wakeUp: "నిద్ర లేవడం",
brushTeeth: "పళ్ళు తోముకోవడం",
breakfast: "అల్పాహారం",
takeMedicine: "మందు తీసుకోవడం",
goToSleep: "నిద్రపోవడానికి వెళ్లడం",
leaveHome: "ఇంటి నుండి బయటకు వెళ్లడం",

healthyDayRoutine: "ఆరోగ్యకరమైన రోజు దినచర్య",
healthyDayRoutineInstruction: "ఈ దినచర్యలో తర్వాత ఏమి చేయాలి?",

eatLunch: "మధ్యాహ్న భోజనం చేయడం",
drinkWater: "నీరు తాగడం",
takeAWalk: "నడకకు వెళ్లడం",
returnHome: "ఇంటికి తిరిగి రావడం",

breakfastAndMedicine: "అల్పాహారం మరియు మందు",
breakfastAndMedicineInstruction: "అల్పాహారం తర్వాత ఏమి చేయాలి?",

eatDinner: "రాత్రి భోజనం చేయడం",

healthyExerciseRoutine: "ఆరోగ్యకరమైన వ్యాయామ దినచర్య",
healthyExerciseRoutineInstruction: "ఈ ఆరోగ్యకరమైన దినచర్యలో తర్వాత ఏమి చేయాలి?",

goForAWalk: "నడకకు వెళ్లడం",
restForAWhile: "కొంతసేపు విశ్రాంతి తీసుకోవడం",

eveningRoutine: "సాయంత్రం దినచర్య",
eveningRoutineInstruction: "రాత్రి భోజనం తర్వాత ఏమి చేయాలి?",

evening: "సాయంత్రం",
takeEveningMedicine: "సాయంత్రం మందు తీసుకోవడం",
eatBreakfast: "అల్పాహారం చేయడం",

bedtimeRoutine: "నిద్రవేళ దినచర్య",
bedtimeRoutineInstruction: "నిద్రపోయే ముందు తర్వాత ఏమి చేయాలి?",

nightTime: "రాత్రి సమయం",
getReadyForBed: "నిద్రకు సిద్ధం కావడం",
backToGarden: "తోటకు తిరిగి వెళ్ళండి",
cognitiveActivities: "జ్ఞాన సంబంధిత కార్యకలాపాలు",
mode: "మోడ్",
activitiesAdaptToPerformance:
  "మీ పనితీరును బట్టి కార్యకలాపాలు సున్నితంగా మారుతాయి.",

memory: "జ్ఞాపకశక్తి",
attention: "శ్రద్ధ",
pattern: "నమూనా",
objectRecognition: "వస్తువును గుర్తించడం",
oddOneOut: "విభిన్నమైనదాన్ని కనుగొనండి",
dailyRoutine: "రోజువారీ దినచర్య",
spotDifference: "తేడాను గుర్తించండి",
backToGarden: "తోటకు తిరిగి వెళ్ళండి",
todaysTimeline: "ఈరోజు కాలక్రమం",
todayRemindersDescription:
  "ఈరోజు మందులు, తాజా నీరు మరియు తేలికపాటి నడకల కోసం సాధారణ గుర్తింపులు.",
completed: "పూర్తయింది",
upcoming: "రాబోతోంది",
listen: "వినండి",
markDone: "పూర్తయినట్లు గుర్తించండి",
done: "పూర్తయింది",
listenReminder: "గుర్తింపును వినండి",
morningMedicineWarmWater: "ఉదయం మందులు & గోరువెచ్చని నీరు",
hydrationBreak: "నీరు తాగే విరామం",
nutritiousLunch: "పోషకమైన మధ్యాహ్న భోజనం",
eveningGardenStroll: "సాయంత్రం తోటలో నడక",
eveningMedicine: "సాయంత్రం మందులు",

morningMedicineWarmWaterAudio:
  "ఇప్పుడు ఉదయం 8 గంటలు. దయచేసి అల్పాహారం తర్వాత గోరువెచ్చని నీటితో మీ మందులు తీసుకోండి.",
hydrationBreakAudio:
  "ఇప్పుడు ఉదయం 10 గంటలు. తాజా నీటిని ఒక గ్లాసు తాగే సమయం.",
nutritiousLunchAudio:
  "ఇప్పుడు మధ్యాహ్నం 1 గంట. భోజనం చేసే సమయం.",
eveningGardenStrollAudio:
  "ఇప్పుడు సాయంత్రం 5 గంటలు. కొద్దిసేపు నెమ్మదిగా నడవండి.",
eveningMedicineAudio:
  "ఇప్పుడు రాత్రి 8 గంటలు. దయచేసి మీ సాయంత్రం మందులు తీసుకోండి.",
  feedbackWonderfulAudio: "అద్భుతంగా చేశారు! మీ తోట పెరుగుతోంది.",
feedbackTryAgainAudio: "అది చాలా మంచి ప్రయత్నం. మనం కలిసి మరోసారి ప్రయత్నిద్దాం.",
goodEffort: "మంచి ప్రయత్నం!",
activityAddedFlower: "మీ కార్యకలాపం మీ మెమరీ గార్డెన్‌కు ఒక అందమైన కొత్త పువ్వును జోడించింది!",
tryAgainGently: "మెల్లగా మరోసారి ప్రయత్నించండి",
morningMedicineWarmWater: "ఉదయం మందు & గోరువెచ్చని నీరు",
hydrationBreak: "నీరు తాగే విరామం (తాజా నీరు)",
nutritiousLunch: "పౌష్టికమైన మధ్యాహ్న భోజనం & మెత్తని రొట్టి",
eveningGardenStroll: "సాయంత్రం తోటలో నడక",
eveningMedicine: "సాయంత్రం మందు",
// Caregiver Dashboard
caregiverDashboard: "సంరక్షకుడి డ్యాష్‌బోర్డ్",
welcomeBack: "తిరిగి స్వాగతం",
gardenGrowth: "తోట అభివృద్ధి",
puzzleAccuracy: "పజిల్ ఖచ్చితత్వం",
aiPersonalization: "AI వ్యక్తిగతీకరణ",
cognitiveActivityTrends: "జ్ఞాపకశక్తి కార్యకలాపాల ధోరణులు",
familyAlbumManager: "కుటుంబ ఆల్బమ్ నిర్వహణ",
scheduleReminders: "రిమైండర్‌లను షెడ్యూల్ చేయండి",
addPhoto: "ఫోటో జోడించండి",
addReminder: "రిమైండర్ జోడించండి",
recentActivity: "ఇటీవలి కార్యకలాపాలు",
viewAllActivity: "అన్ని కార్యకలాపాలను చూడండి",
noRecentActivity: "ఇటీవలి కార్యకలాపాలు ఏవీ లేవు",
completed: "పూర్తయింది",
upcoming: "రాబోయేది",
done: "పూర్తయింది",
markDone: "పూర్తయినట్లు గుర్తించండి",
cancel: "రద్దు చేయండి",
save: "సేవ్ చేయండి",
close: "మూసివేయండి",
delete: "తొలగించండి",
edit: "సవరించండి",
name: "పేరు",
description: "వివరణ",
date: "తేదీ",
time: "సమయం",
title: "శీర్షిక",
photo: "ఫోటో",
reminder: "రిమైండర్",
message: "సందేశం",
status: "స్థితి",
progress: "పురోగతి",
accuracy: "ఖచ్చితత్వం",
activities: "కార్యకలాపాలు",
thisWeek: "ఈ వారం",
today: "ఈరోజు",
yesterday: "నిన్న",
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
spotDifference: "अंतर पहचानें",
spotDifferenceInstruction: "चित्र B को ध्यान से देखें और 5 अंतर खोजें।",
puzzle: "खेल",
of: "में से",
differencesFound: "मिले हुए अंतर",
tapPictureDifference: "जहाँ अंतर दिखाई दे वहाँ चित्र B पर टैप करें",
restart: "फिर से शुरू करें",
nextPuzzle: "अगला खेल",
finishGame: "खेल समाप्त करें",
activity3VisualPattern: "गतिविधि 3: दृश्य पैटर्न क्रम",
listenSequence: "🔊 क्रम सुनें",
selectNextItem: "अगला आने वाला विकल्प चुनें:",
gardenFlowerSequence: "बगीचे के फूलों का क्रम",
gardenFlowerSequenceInstruction: "इस पैटर्न को ध्यान से देखें। अगला कौन सा फूल आएगा?",

dailyRhythmPattern: "दैनिक लय पैटर्न",
dailyRhythmPatternInstruction: "सूरज, बादल, सूरज, बादल... अगला क्या आएगा?",

assamCulturalPattern: "असम सांस्कृतिक पैटर्न",
assamCulturalPatternInstruction: "जापी, गमोसा, जापी, गमोसा... अगला क्या आएगा?",
oddOneOut: "अलग वस्तु खोजें",
gardenOddOneOut: "अलग वस्तु खोजें",
gardenOddOneOutInstruction: "तीन वस्तुएँ बगीचे से संबंधित हैं। इनमें से कौन अलग है?",
gardenOddOneOutExplanation: "कार अलग है क्योंकि बाकी तीन वस्तुएँ बगीचे से संबंधित हैं।",

homeOddOneOut: "अलग वस्तु खोजें",
homeOddOneOutInstruction: "इनमें से तीन चीज़ें हम पीते हैं। इनमें से कौन अलग है?",
homeOddOneOutExplanation: "सेब अलग है क्योंकि बाकी तीन पेय हैं।",

assamCulturalOddOneOut: "अलग वस्तु खोजें",
assamCulturalOddOneOutInstruction: "इनमें से तीन जानवर हैं। इनमें से कौन अलग है?",
assamCulturalOddOneOutExplanation: "कुर्सी अलग है क्योंकि बाकी तीन जानवर हैं।",

teaGardenOddOneOut: "अलग वस्तु खोजें",
teaGardenOddOneOutInstruction: "इनमें से तीन चीज़ें रसोई से संबंधित हैं। इनमें से कौन अलग है?",
teaGardenOddOneOutExplanation: "पेड़ अलग है क्योंकि बाकी तीन रसोई की चीज़ें हैं।",

assamCulturalItems: "असम की सांस्कृतिक वस्तुएँ",
assamCulturalItemsInstruction: "इनमें से तीन परिचित असम से संबंधित वस्तुएँ हैं। इनमें से कौन अलग है?",
assamCulturalItemsExplanation: "हवाई जहाज़ बाकी परिचित असम से संबंधित वस्तुओं से अलग है।",

assamTraditionalItems: "असम की पारंपरिक वस्तुएँ",
assamTraditionalItemsInstruction: "परिचित असमिया सांस्कृतिक वस्तुओं में से कौन सी वस्तु अलग है?",
assamTraditionalItemsExplanation: "कंप्यूटर अलग है क्योंकि बाकी वस्तुएँ परिचित असमिया सांस्कृतिक वस्तुएँ हैं।",

wonderfulCorrectAnswer: "बहुत बढ़िया! सही उत्तर! 🎉",
nextQuestion: "अगला प्रश्न",
goodEffort: "अच्छा प्रयास 🌱",
oddOneOutHint: "ध्यान से देखें। कौन सी वस्तु बाकी तीन से अलग है?",
tryAgain: "फिर से प्रयास करें",
restartActivity: "गतिविधि फिर से शुरू करें",
listenToQuestion: "प्रश्न सुनें",
recognizeJapi: 'जापी को पहचानें',
recognizeGamosa: 'गमोसा को पहचानें',
recognizeTea: 'चाय को पहचानें',
recognizePitha: 'पीठा को पहचानें',
recognizeTeaGarden: 'चाय के बागान को पहचानें',

recognizeObjectInstruction: 'वस्तु को देखें और उसका सही नाम चुनें।',
recognizeFoodInstruction: 'खाद्य वस्तु को देखें और उसका सही नाम चुनें।',
recognizeSymbolInstruction: 'चिह्न को देखें और सही उत्तर चुनें।',

japiHint: 'यह असम की पारंपरिक सिर की टोपी है।',
gamosaHint: 'यह असम का पारंपरिक कपड़ा है।',
teaHint: 'असम अपने चाय के बागानों के लिए प्रसिद्ध है।',
pithaHint: 'यह असम का एक प्रसिद्ध पारंपरिक भोजन है।',
teaGardenHint: 'असम अपने सुंदर चाय के बागानों के लिए जाना जाता है।',
japi: 'जापी',
gamosa: 'गमोसा',
teaPot: 'चाय की केतली',
umbrella: 'छाता',
riceBowl: 'चावल का कटोरा',
apple: 'सेब',
pitha: 'पीठा',
mango: 'आम',
teaGarden: 'चाय का बागान',
cityBuilding: 'शहर की इमारत',
road: 'सड़क',
activityDailyRoutine: "दैनिक दिनचर्या",
dailyRoutine: "दैनिक दिनचर्या",
whatComesNext: "इसके बाद क्या करना चाहिए?",
correctAnswer: "सही उत्तर!",
excellentCorrectNextStep: "बहुत बढ़िया! आपने सही अगला काम चुना है।",
wellTried: "अच्छी कोशिश!",
theCorrectAnswerIs: "सही उत्तर है",
restart: "फिर से शुरू करें",
startAgain: "फिर से शुरू करें",
nextQuestion: "अगला प्रश्न",
question: "प्रश्न",
of: "में से",
morningRoutine: "सुबह की दिनचर्या",
morningRoutineInstruction: "दैनिक दिनचर्या को देखें। इसके बाद क्या करना चाहिए?",

wakeUp: "जागना",
brushTeeth: "दाँत साफ करना",
breakfast: "नाश्ता",
takeMedicine: "दवा लेना",
goToSleep: "सोने जाना",
leaveHome: "घर से निकलना",

healthyDayRoutine: "स्वस्थ दिन की दिनचर्या",
healthyDayRoutineInstruction: "इस दिनचर्या में इसके बाद क्या करना चाहिए?",

eatLunch: "दोपहर का भोजन करना",
drinkWater: "पानी पीना",
takeAWalk: "टहलने जाना",
returnHome: "घर वापस आना",

breakfastAndMedicine: "नाश्ता और दवा",
breakfastAndMedicineInstruction: "नाश्ते के बाद क्या करना चाहिए?",

eatDinner: "रात का खाना खाना",

healthyExerciseRoutine: "स्वस्थ व्यायाम की दिनचर्या",
healthyExerciseRoutineInstruction: "इस स्वस्थ दिनचर्या में इसके बाद क्या करना चाहिए?",

goForAWalk: "टहलने जाना",
restForAWhile: "थोड़ी देर आराम करना",

eveningRoutine: "शाम की दिनचर्या",
eveningRoutineInstruction: "रात के खाने के बाद क्या करना चाहिए?",

evening: "शाम",
takeEveningMedicine: "शाम की दवा लेना",
eatBreakfast: "नाश्ता करना",

bedtimeRoutine: "सोने की दिनचर्या",
bedtimeRoutineInstruction: "सोने से पहले इसके बाद क्या करना चाहिए?",

nightTime: "रात का समय",
getReadyForBed: "सोने के लिए तैयार होना",
backToGarden: "बगीचे पर वापस जाएँ",
cognitiveActivities: "संज्ञानात्मक गतिविधियाँ",
mode: "मोड",
activitiesAdaptToPerformance:
  "आपके प्रदर्शन के आधार पर गतिविधियाँ धीरे-धीरे अनुकूलित होती हैं।",

memory: "स्मृति",
attention: "ध्यान",
pattern: "पैटर्न",
objectRecognition: "वस्तु पहचान",
oddOneOut: "अलग वस्तु खोजें",
dailyRoutine: "दैनिक दिनचर्या",
spotDifference: "अंतर पहचानें",
backToGarden: "बगीचे पर वापस जाएँ",
todaysTimeline: "आज की समय-सारणी",
todayRemindersDescription:
  "आज दवा, ताज़ा पानी और हल्की सैर के लिए सरल याद दिलाने वाले संदेश।",
completed: "पूरा हुआ",
upcoming: "आने वाला",
listen: "सुनें",
markDone: "पूरा हुआ चिह्नित करें",
done: "पूरा हुआ",
listenReminder: "याद दिलाने वाला संदेश सुनें",
morningMedicineWarmWater: "सुबह की दवा और गुनगुना पानी",
hydrationBreak: "पानी पीने का समय",
nutritiousLunch: "पौष्टिक दोपहर का भोजन",
eveningGardenStroll: "शाम की बगीचे में सैर",
eveningMedicine: "शाम की दवा",

morningMedicineWarmWaterAudio:
  "अभी सुबह के 8 बजे हैं। कृपया नाश्ते के बाद गुनगुने पानी के साथ अपनी दवा लें।",
hydrationBreakAudio:
  "अभी सुबह के 10 बजे हैं। एक गिलास ताज़ा पानी पीने का समय है।",
nutritiousLunchAudio:
  "अभी दोपहर के 1 बजे हैं। दोपहर का भोजन करने का समय है।",
eveningGardenStrollAudio:
  "अभी शाम के 5 बजे हैं। थोड़ी देर आराम से टहलें।",
eveningMedicineAudio:
  "अभी रात के 8 बजे हैं। कृपया अपनी शाम की दवा लें।",
  feedbackWonderfulAudio: "बहुत बढ़िया! आपका बगीचा बढ़ रहा है।",
feedbackTryAgainAudio: "यह एक बहुत अच्छा प्रयास था। आइए, हम साथ मिलकर एक बार फिर कोशिश करें।",
goodEffort: "अच्छी कोशिश!",
activityAddedFlower: "आपकी गतिविधि ने आपके मेमोरी गार्डन में एक नया सुंदर फूल जोड़ा!",
tryAgainGently: "धीरे से फिर कोशिश करें",
morningMedicineWarmWater: "सुबह की दवा और गुनगुना पानी",
hydrationBreak: "पानी पीने का समय (ताज़ा पानी)",
nutritiousLunch: "पौष्टिक दोपहर का भोजन और नरम रोटी",
eveningGardenStroll: "शाम की बगीचे में सैर",
eveningMedicine: "शाम की दवा",
// Caregiver Dashboard
caregiverDashboard: "देखभालकर्ता डैशबोर्ड",
welcomeBack: "वापसी पर स्वागत है",
gardenGrowth: "बगीचे की प्रगति",
puzzleAccuracy: "पहेली की सटीकता",
aiPersonalization: "AI वैयक्तिकरण",
cognitiveActivityTrends: "संज्ञानात्मक गतिविधियों के रुझान",
familyAlbumManager: "पारिवारिक एल्बम प्रबंधक",
scheduleReminders: "रिमाइंडर शेड्यूल करें",
addPhoto: "फ़ोटो जोड़ें",
addReminder: "रिमाइंडर जोड़ें",
recentActivity: "हाल की गतिविधि",
viewAllActivity: "सभी गतिविधियाँ देखें",
noRecentActivity: "हाल की कोई गतिविधि नहीं है",
completed: "पूरा हुआ",
upcoming: "आगामी",
done: "हो गया",
markDone: "पूरा हुआ चिह्नित करें",
cancel: "रद्द करें",
save: "सहेजें",
close: "बंद करें",
delete: "हटाएँ",
edit: "संपादित करें",
name: "नाम",
description: "विवरण",
date: "तारीख",
time: "समय",
title: "शीर्षक",
photo: "फ़ोटो",
reminder: "रिमाइंडर",
message: "संदेश",
status: "स्थिति",
progress: "प्रगति",
accuracy: "सटीकता",
activities: "गतिविधियाँ",
thisWeek: "इस सप्ताह",
today: "आज",
yesterday: "कल",
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
spotDifference: "পাৰ্থক্য বিচাৰি উলিয়াওক",
spotDifferenceInstruction: "ছবি B ভালদৰে চাই ৫টা পাৰ্থক্য বিচাৰি উলিয়াওক।",
puzzle: "খেল",
of: "ৰ",
differencesFound: "বিচাৰি পোৱা পাৰ্থক্য",
tapPictureDifference: "য'ত পাৰ্থক্য দেখা যায় তাত ছবি B-ত টেপ কৰক",
restart: "পুনৰ আৰম্ভ কৰক",
nextPuzzle: "পৰৱৰ্তী খেল",
finishGame: "খেল শেষ কৰক",
activity3VisualPattern: "কাৰ্যকলাপ ৩: দৃশ্যমান আৰ্হিৰ ক্ৰম",
listenSequence: "🔊 ক্ৰমটো শুনক",
selectNextItem: "পিছত অহা বস্তুটো বাছনি কৰক:",
gardenFlowerSequence: "বাগিচাৰ ফুলৰ ক্ৰম",
gardenFlowerSequenceInstruction: "আৰ্হিটো ভালদৰে চাওক। তাৰ পিছত কোনটো ফুল আহিব?",

dailyRhythmPattern: "দৈনিক ছন্দৰ আৰ্হি",
dailyRhythmPatternInstruction: "সূৰ্য, মেঘ, সূৰ্য, মেঘ... তাৰ পিছত কি আহিব?",

assamCulturalPattern: "অসমীয়া সাংস্কৃতিক আৰ্হি",
assamCulturalPatternInstruction: "জাপি, গামোচা, জাপি, গামোচা... তাৰ পিছত কি আহিব?",
oddOneOut: "বেলেগ বস্তুটো বিচাৰি উলিয়াওক",
gardenOddOneOut: "বেলেগ বস্তুটো বিচাৰি উলিয়াওক",
gardenOddOneOutInstruction: "তিনিটা বস্তু বাগিচাৰ সৈতে জড়িত। কোনটো বেলেগ?",
gardenOddOneOutExplanation: "গাড়ীখন বেলেগ, কাৰণ বাকী তিনিটা বস্তু বাগিচাৰ সৈতে জড়িত।",

homeOddOneOut: "বেলেগ বস্তুটো বিচাৰি উলিয়াওক",
homeOddOneOutInstruction: "ইয়াৰ তিনিটা বস্তু আমি পান কৰোঁ। কোনটো বেলেগ?",
homeOddOneOutExplanation: "আপেলটো বেলেগ, কাৰণ বাকী তিনিটা পানীয়।",

assamCulturalOddOneOut: "বেলেগ বস্তুটো বিচাৰি উলিয়াওক",
assamCulturalOddOneOutInstruction: "ইয়াৰ তিনিটা জন্তু। কোনটো বেলেগ?",
assamCulturalOddOneOutExplanation: "চকীখন বেলেগ, কাৰণ বাকী তিনিটা জন্তু।",

teaGardenOddOneOut: "বেলেগ বস্তুটো বিচাৰি উলিয়াওক",
teaGardenOddOneOutInstruction: "ইয়াৰ তিনিটা বস্তু পাকঘৰৰ সৈতে জড়িত। কোনটো বেলেগ?",
teaGardenOddOneOutExplanation: "গছজোপা বেলেগ, কাৰণ বাকী তিনিটা পাকঘৰৰ সামগ্ৰী।",

assamCulturalItems: "অসমৰ সাংস্কৃতিক সামগ্ৰী",
assamCulturalItemsInstruction: "ইয়াৰ তিনিটা পৰিচিত অসম-সম্পৰ্কীয় সামগ্ৰী। কোনটো বেলেগ?",
assamCulturalItemsExplanation: "বিমানখন বাকী পৰিচিত অসম-সম্পৰ্কীয় সামগ্ৰীৰ পৰা বেলেগ।",

assamTraditionalItems: "অসমৰ পৰম্পৰাগত সামগ্ৰী",
assamTraditionalItemsInstruction: "পৰিচিত অসমীয়া সাংস্কৃতিক সামগ্ৰীৰ সৈতে নিমিলি থকা বস্তুটো কোনটো?",
assamTraditionalItemsExplanation: "কম্পিউটাৰটো বেলেগ, কাৰণ বাকী বস্তুবোৰ পৰিচিত অসমীয়া সাংস্কৃতিক সামগ্ৰী।",

wonderfulCorrectAnswer: "বৰ ভাল! শুদ্ধ উত্তৰ! 🎉",
nextQuestion: "পৰৱৰ্তী প্ৰশ্ন",
goodEffort: "ভাল চেষ্টা 🌱",
oddOneOutHint: "ভালদৰে চাওক। বাকী তিনিটাৰ সৈতে নিমিলা বস্তুটো কোনটো?",
tryAgain: "পুনৰ চেষ্টা কৰক",
restartActivity: "কাৰ্যকলাপ পুনৰ আৰম্ভ কৰক",
listenToQuestion: "প্ৰশ্নটো শুনক",
recognizeJapi: 'জাপিক চিনাক্ত কৰক',
recognizeGamosa: 'গামোচাক চিনাক্ত কৰক',
recognizeTea: 'চাহক চিনাক্ত কৰক',
recognizePitha: 'পিঠাক চিনাক্ত কৰক',
recognizeTeaGarden: 'চাহ বাগিচাক চিনাক্ত কৰক',

recognizeObjectInstruction: 'বস্তুটো চাওক আৰু ইয়াৰ সঠিক নাম বাছনি কৰক।',
recognizeFoodInstruction: 'খাদ্যবস্তুটো চাওক আৰু ইয়াৰ সঠিক নাম বাছনি কৰক।',
recognizeSymbolInstruction: 'চিহ্নটো চাওক আৰু সঠিক উত্তৰ বাছনি কৰক।',

japiHint: 'এইটো অসমৰ পৰম্পৰাগত মূৰৰ টুপী।',
gamosaHint: 'এইটো অসমৰ পৰম্পৰাগত কাপোৰ।',
teaHint: 'অসম ইয়াৰ চাহ বাগিচাৰ বাবে বিখ্যাত।',
pithaHint: 'এইটো অসমৰ এক পৰম্পৰাগত খাদ্য।',
teaGardenHint: 'অসম ইয়াৰ সুন্দৰ চাহ বাগিচাৰ বাবে জনাজাত।',
japi: 'জাপি',
gamosa: 'গামোচা',
teaPot: 'চাহৰ পাত্ৰ',
umbrella: 'ছাতি',
riceBowl: 'ভাতৰ বাটি',
apple: 'আপেল',
pitha: 'পিঠা',
mango: 'আম',
teaGarden: 'চাহ বাগিচা',
cityBuilding: 'চহৰৰ অট্টালিকা',
road: 'ৰাস্তা',
activityDailyRoutine: "দৈনন্দিন কাৰ্যসূচী",
dailyRoutine: "দৈনন্দিন কাৰ্যসূচী",
whatComesNext: "ইয়াৰ পিছত কি কৰিব লাগে?",
correctAnswer: "শুদ্ধ উত্তৰ!",
excellentCorrectNextStep: "বৰ ভাল! আপুনি সঠিক পৰৱৰ্তী কামটো বাছি লৈছে।",
wellTried: "ভাল চেষ্টা!",
theCorrectAnswerIs: "শুদ্ধ উত্তৰটো হ'ল",
restart: "পুনৰ আৰম্ভ কৰক",
startAgain: "পুনৰ আৰম্ভ কৰক",
nextQuestion: "পৰৱৰ্তী প্ৰশ্ন",
question: "প্ৰশ্ন",
of: "ৰ",
morningRoutine: "পুৱাৰ দৈনন্দিন কাৰ্যসূচী",
morningRoutineInstruction: "দৈনন্দিন কাৰ্যসূচীটো চাওক। ইয়াৰ পিছত কি কৰিব লাগে?",

wakeUp: "টোপনিৰ পৰা উঠা",
brushTeeth: "দাঁত ব্ৰাছ কৰা",
breakfast: "জলপান",
takeMedicine: "ঔষধ খোৱা",
goToSleep: "শুবলৈ যোৱা",
leaveHome: "ঘৰৰ পৰা ওলাই যোৱা",

healthyDayRoutine: "স্বাস্থ্যকৰ দিনৰ দৈনন্দিন কাৰ্যসূচী",
healthyDayRoutineInstruction: "এই দৈনন্দিন কাৰ্যসূচীত ইয়াৰ পিছত কি কৰিব লাগে?",

eatLunch: "দুপৰীয়াৰ আহাৰ খোৱা",
drinkWater: "পানী খোৱা",
takeAWalk: "খোজ কাঢ়িবলৈ যোৱা",
returnHome: "ঘৰলৈ উভতি অহা",

breakfastAndMedicine: "জলপান আৰু ঔষধ",
breakfastAndMedicineInstruction: "জলপানৰ পিছত কি কৰিব লাগে?",

eatDinner: "ৰাতিৰ আহাৰ খোৱা",

healthyExerciseRoutine: "স্বাস্থ্যকৰ ব্যায়ামৰ দৈনন্দিন কাৰ্যসূচী",
healthyExerciseRoutineInstruction: "এই স্বাস্থ্যকৰ দৈনন্দিন কাৰ্যসূচীত ইয়াৰ পিছত কি কৰিব লাগে?",

goForAWalk: "খোজ কাঢ়িবলৈ যোৱা",
restForAWhile: "অলপ সময় জিৰণি লোৱা",

eveningRoutine: "সন্ধিয়াৰ দৈনন্দিন কাৰ্যসূচী",
eveningRoutineInstruction: "ৰাতিৰ আহাৰৰ পিছত কি কৰিব লাগে?",

evening: "সন্ধিয়া",
takeEveningMedicine: "সন্ধিয়াৰ ঔষধ খোৱা",
eatBreakfast: "জলপান খোৱা",

bedtimeRoutine: "শোৱাৰ সময়ৰ দৈনন্দিন কাৰ্যসূচী",
bedtimeRoutineInstruction: "শুবলৈ যোৱাৰ আগতে ইয়াৰ পিছত কি কৰিব লাগে?",

nightTime: "ৰাতিৰ সময়",
getReadyForBed: "শুবলৈ সাজু হোৱা",
backToGarden: "বাগিচালৈ উভতি যাওক",
cognitiveActivities: "জ্ঞানমূলক কাৰ্যকলাপ",
mode: "ম'ড",
activitiesAdaptToPerformance:
  "আপোনাৰ কাৰ্যদক্ষতাৰ ওপৰত ভিত্তি কৰি কাৰ্যকলাপসমূহ লাহে লাহে সলনি হয়।",

memory: "স্মৃতি",
attention: "মনোযোগ",
pattern: "আৰ্হি",
objectRecognition: "বস্তু চিনাক্তকৰণ",
oddOneOut: "বেলেগ বস্তুটো বিচাৰক",
dailyRoutine: "দৈনন্দিন ৰুটিন",
spotDifference: "পাৰ্থক্য বিচাৰক",
backToGarden: "বাগিচালৈ উভতি যাওক",
todaysTimeline: "আজিৰ সময়সূচী",
todayRemindersDescription:
  "আজি ঔষধ, সতেজ পানী আৰু লাহে লাহে খোজ কঢ়াৰ বাবে সৰল সোঁৱৰণী।",
completed: "সম্পূৰ্ণ হৈছে",
upcoming: "আগন্তুক",
listen: "শুনক",
markDone: "সম্পূৰ্ণ হোৱা বুলি চিহ্নিত কৰক",
done: "সম্পূৰ্ণ",
listenReminder: "সোঁৱৰণীটো শুনক",
morningMedicineWarmWater: "ৰাতিপুৱাৰ ঔষধ আৰু গৰম পানী",
hydrationBreak: "পানী খোৱাৰ বিৰতি",
nutritiousLunch: "পুষ্টিকৰ দুপৰীয়াৰ আহাৰ",
eveningGardenStroll: "সন্ধিয়াৰ বাগিচাত খোজ কঢ়া",
eveningMedicine: "সন্ধিয়াৰ ঔষধ",

morningMedicineWarmWaterAudio:
  "এতিয়া ৰাতিপুৱা ৮ বাজিছে। অনুগ্ৰহ কৰি ৰাতিপুৱাৰ আহাৰৰ পিছত গৰম পানীৰ সৈতে আপোনাৰ ঔষধ লওক।",
hydrationBreakAudio:
  "এতিয়া ৰাতিপুৱা ১০ বাজিছে। সতেজ পানী এগিলাচ খোৱাৰ সময় হৈছে।",
nutritiousLunchAudio:
  "এতিয়া দুপৰীয়া ১ বাজিছে। দুপৰীয়াৰ আহাৰ খোৱাৰ সময় হৈছে।",
eveningGardenStrollAudio:
  "এতিয়া সন্ধিয়া ৫ বাজিছে। অলপ সময় লাহে লাহে খোজ কাঢ়ক।",
eveningMedicineAudio:
  "এতিয়া ৰাতি ৮ বাজিছে। অনুগ্ৰহ কৰি আপোনাৰ সন্ধিয়াৰ ঔষধ লওক।",
  feedbackWonderfulAudio: "বৰ সুন্দৰ! আপোনাৰ বাগিচাখন ডাঙৰ হৈ আছে।",
feedbackTryAgainAudio: "এইটো এটা বৰ ভাল প্ৰচেষ্টা আছিল। আহক, আমি একেলগে আকৌ এবাৰ চেষ্টা কৰোঁ।",
goodEffort: "ভাল চেষ্টা!",
activityAddedFlower: "আপোনাৰ কাৰ্যকলাপে আপোনাৰ মেমৰি গাৰ্ডেনত এটা নতুন সুন্দৰ ফুল যোগ কৰিলে!",
tryAgainGently: "লাহে লাহে আকৌ চেষ্টা কৰক",
morningMedicineWarmWater: "ৰাতিপুৱাৰ ঔষধ আৰু গৰম পানী",
hydrationBreak: "পানী খোৱাৰ বিৰতি (সতেজ পানী)",
nutritiousLunch: "পুষ্টিকৰ দুপৰীয়াৰ আহাৰ আৰু কোমল ৰুটি",
eveningGardenStroll: "সন্ধিয়াৰ বাগিচাত খোজ কঢ়া",
eveningMedicine: "সন্ধিয়াৰ ঔষধ",
// Caregiver Dashboard
caregiverDashboard: "যত্ন লওঁতাৰ ডেশ্বব’ৰ্ড",
welcomeBack: "পুনৰ স্বাগতম",
gardenGrowth: "বাগিচাৰ অগ্ৰগতি",
puzzleAccuracy: "পাজলৰ সঠিকতা",
aiPersonalization: "AI ব্যক্তিগতকৰণ",
cognitiveActivityTrends: "জ্ঞানীয় কাৰ্যকলাপৰ ধাৰা",
familyAlbumManager: "পৰিয়ালৰ এলবাম পৰিচালনা",
scheduleReminders: "ৰিমাইণ্ডাৰ সময়সূচী নিৰ্ধাৰণ কৰক",
addPhoto: "ফটো যোগ কৰক",
addReminder: "ৰিমাইণ্ডাৰ যোগ কৰক",
recentActivity: "শেহতীয়া কাৰ্যকলাপ",
viewAllActivity: "সকলো কাৰ্যকলাপ চাওক",
noRecentActivity: "শেহতীয়া কোনো কাৰ্যকলাপ নাই",
completed: "সম্পূৰ্ণ",
upcoming: "আগন্তুক",
done: "হৈ গ'ল",
markDone: "সম্পূৰ্ণ বুলি চিহ্নিত কৰক",
cancel: "বাতিল কৰক",
save: "সংৰক্ষণ কৰক",
close: "বন্ধ কৰক",
delete: "মচি পেলাওক",
edit: "সম্পাদনা কৰক",
name: "নাম",
description: "বিৱৰণ",
date: "তাৰিখ",
time: "সময়",
title: "শিৰোনাম",
photo: "ফটো",
reminder: "ৰিমাইণ্ডাৰ",
message: "বাৰ্তা",
status: "স্থিতি",
progress: "অগ্ৰগতি",
accuracy: "সঠিকতা",
activities: "কাৰ্যকলাপ",
thisWeek: "এই সপ্তাহত",
today: "আজি",
yesterday: "কালি",
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
      titleKey: 'gardenFlowerSequence',
      instruction: 'Look at the pattern. Which flower comes next?',
      instructionKey: 'gardenFlowerSequenceInstruction',
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
       titleKey: 'dailyRhythmPattern',
      instruction: 'Sun, Cloud, Sun, Cloud... What comes next?',
      instructionKey: 'dailyRhythmPatternInstruction',
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
      titleKey: 'assamCulturalPattern',
      instruction: 'Japi, Gamosa, Japi, Gamosa... What comes next?',
      instructionKey: 'assamCulturalPatternInstruction',
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
    titleKey: 'recognizeJapi',
    instruction: 'Look at the object and choose its correct name.',
    instructionKey: 'recognizeObjectInstruction',
    object: { icon: '👒', name: 'Japi' },
    correctAnswer: 'Japi',
    options: [
      { id: 'o1', icon: '👒', label: 'Japi', labelKey: 'japi' },
      { id: 'o2', icon: '🧣', label: 'Gamosa', labelKey: 'gamosa' },
      { id: 'o3', icon: '🫖', label: 'Tea Pot', labelKey: 'teaPot' }
    ],
    hint: 'It is a traditional Assamese headgear.',
    hintKey: 'japiHint'
  },

  {
    id: 'obj2',
    title: 'Recognize the Gamosa',
    titleKey: 'recognizeGamosa',
    instruction: 'Look at the object and choose its correct name.',
    instructionKey: 'recognizeObjectInstruction',
    object: { icon: '🧣', name: 'Gamosa' },
    correctAnswer: 'Gamosa',
    options: [
      { id: 'o1', icon: '🧣', label: 'Gamosa', labelKey: 'gamosa' },
      { id: 'o2', icon: '👒', label: 'Japi', labelKey: 'japi' },
      { id: 'o3', icon: '☂️', label: 'Umbrella', labelKey: 'umbrella' }
    ],
    hint: 'It is a traditional Assamese cloth.',
    hintKey: 'gamosaHint'
  },

  {
    id: 'obj3',
    title: 'Recognize the Tea',
    titleKey: 'recognizeTea',
    instruction: 'Look at the object and choose its correct name.',
    instructionKey: 'recognizeObjectInstruction',
    object: { icon: '🫖', name: 'Tea Pot' },
    correctAnswer: 'Tea Pot',
    options: [
      { id: 'o1', icon: '🫖', label: 'Tea Pot', labelKey: 'teaPot' },
      { id: 'o2', icon: '🍚', label: 'Rice Bowl', labelKey: 'riceBowl' },
      { id: 'o3', icon: '🍎', label: 'Apple', labelKey: 'apple' }
    ],
    hint: 'Assam is famous for its tea gardens.',
    hintKey: 'teaHint'
  },

  {
    id: 'obj4',
    title: 'Recognize the Pitha',
    titleKey: 'recognizePitha',
    instruction: 'Look at the food item and choose its correct name.',
    instructionKey: 'recognizeFoodInstruction',
    object: { icon: '🍘', name: 'Pitha' },
    correctAnswer: 'Pitha',
    options: [
      { id: 'o1', icon: '🍘', label: 'Pitha', labelKey: 'pitha' },
      { id: 'o2', icon: '🍎', label: 'Apple', labelKey: 'apple' },
      { id: 'o3', icon: '🥭', label: 'Mango', labelKey: 'mango' }
    ],
    hint: 'It is a familiar traditional Assamese food.',
    hintKey: 'pithaHint'
  },

  {
    id: 'obj5',
    title: 'Recognize the Tea Garden',
    titleKey: 'recognizeTeaGarden',
    instruction: 'Look at the symbol and choose the correct answer.',
    instructionKey: 'recognizeSymbolInstruction',
    object: { icon: '🌿', name: 'Tea Garden' },
    correctAnswer: 'Tea Garden',
    options: [
      { id: 'o1', icon: '🌿', label: 'Tea Garden', labelKey: 'teaGarden' },
      { id: 'o2', icon: '🏢', label: 'City Building', labelKey: 'cityBuilding' },
      { id: 'o3', icon: '🚗', label: 'Road', labelKey: 'road' }
    ],
    hint: 'Assam is well known for its beautiful tea gardens.',
    hintKey: 'teaGardenHint'
  }
],
  // =========================
  // ODD ONE OUT
  // =========================
  oddOneOut: [
    {
      id: 'odd1',
      title: 'Find the Different Item',
      titleKey: 'gardenOddOneOut',
      instruction: 'Three items belong to the garden. Which one is different?',
      instructionKey: 'gardenOddOneOutInstruction',
      items: [
        { id: 'flower', icon: '🌸', label: 'Flower', category: 'garden' },
        { id: 'sunflower', icon: '🌻', label: 'Sunflower', category: 'garden' },
        { id: 'leaf', icon: '🍃', label: 'Leaf', category: 'garden' },
        { id: 'car', icon: '🚗', label: 'Car', category: 'vehicle' }
      ],
      correctAnswerId: 'car',
      explanation: 'The car is different because the other three belong to a garden.',
      explanationKey: 'gardenOddOneOutExplanation',
    },
    {
      id: 'odd2',
      title: 'Find the Different Item',
      titleKey: 'homeOddOneOut',
      instruction: 'Three of these are things we drink. Which one is different?',
      instructionKey: 'homeOddOneOutInstruction',
      items: [
        { id: 'tea', icon: '☕', label: 'Tea', category: 'drink' },
        { id: 'water', icon: '💧', label: 'Water', category: 'drink' },
        { id: 'milk', icon: '🥛', label: 'Milk', category: 'drink' },
        { id: 'apple', icon: '🍎', label: 'Apple', category: 'food' }
      ],
      correctAnswerId: 'apple',
      explanation: 'Apple is different because the other three are drinks.',
      explanationKey: 'homeOddOneOutExplanation',
    },
    {
      id: 'odd3',
      title: 'Find the Different Item',
      titleKey: 'assamCulturalOddOneOut',
      instruction: 'Three of these are animals. Which one is different?',
      instructionKey: 'assamCulturalOddOneOutInstruction',
      items: [
        { id: 'dog', icon: '🐶', label: 'Dog', category: 'animal' },
        { id: 'cat', icon: '🐱', label: 'Cat', category: 'animal' },
        { id: 'cow', icon: '🐄', label: 'Cow', category: 'animal' },
        { id: 'chair', icon: '🪑', label: 'Chair', category: 'furniture' }
      ],
      correctAnswerId: 'chair',
      explanation: 'Chair is different because the other three are animals.',
      explanationKey: 'assamCulturalOddOneOutExplanation',
    },
    {
      id: 'odd4',
      title: 'Find the Different Item',
      titleKey: 'teaGardenOddOneOut',
      instruction: 'Three of these belong to the kitchen. Which one is different?',
      instructionKey: 'teaGardenOddOneOutInstruction',
      items: [
        { id: 'spoon', icon: '🥄', label: 'Spoon', category: 'kitchen' },
        { id: 'plate', icon: '🍽️', label: 'Plate', category: 'kitchen' },
        { id: 'cup', icon: '☕', label: 'Cup', category: 'kitchen' },
        { id: 'tree', icon: '🌳', label: 'Tree', category: 'nature' }
      ],
      correctAnswerId: 'tree',
      explanation: 'Tree is different because the other three are kitchen items.',
      explanationKey: 'teaGardenOddOneOutExplanation',
    },
    {
      id: 'odd5',
      title: 'Assam Cultural Items',
      titleKey: 'assamCulturalItems',
      instruction: 'Three of these are familiar Assam-related items. Which one is different?',
      instructionKey: 'assamCulturalItemsInstruction',
      items: [
        { id: 'japi', icon: '👒', label: 'Japi', category: 'assam' },
        { id: 'gamosa', icon: '🧣', label: 'Gamosa', category: 'assam' },
        { id: 'tea', icon: '🫖', label: 'Assam Tea', category: 'assam' },
        { id: 'airplane', icon: '✈️', label: 'Airplane', category: 'transport' }
      ],
      correctAnswerId: 'airplane',
      explanation: 'Airplane is different from the other familiar Assam-related items.',
      explanationKey: 'assamCulturalItemsExplanation',
    },
    {
      id: 'odd6',
      title: 'Assam Traditional Items',
      titleKey: 'assamTraditionalItems',
      instruction: 'Which item does not belong with the familiar Assamese cultural items?',
      instructionKey: 'assamTraditionalItemsInstruction',
      items: [
        { id: 'japi', icon: '👒', label: 'Japi', category: 'assam' },
        { id: 'gamosa', icon: '🧣', label: 'Gamosa', category: 'assam' },
        { id: 'pitha', icon: '🍘', label: 'Pitha', category: 'assam' },
        { id: 'computer', icon: '💻', label: 'Computer', category: 'technology' }
      ],
      correctAnswerId: 'computer',
      explanation: 'Computer is different because the other items are familiar Assamese cultural items.',
      explanationKey: 'assamTraditionalItemsExplanation',
    }
  ],

  // =========================
  // DAILY ROUTINE
  // =========================
  dailyRoutine: [
  {
    id: "routine1",
    title: "Morning Routine",
    titleKey: "morningRoutine",
    instruction: "Look at the daily routine. What should come next?",
    instructionKey: "morningRoutineInstruction",

    sequence: [
      { icon: "🌅", label: "Wake Up", labelKey: "wakeUp" },
      { icon: "🪥", label: "Brush Teeth", labelKey: "brushTeeth" },
      { icon: "🍳", label: "Breakfast", labelKey: "breakfast" }
    ],

    correctAnswer: "Take Medicine",

    options: [
      { id: "o1", icon: "💊", label: "Take Medicine", labelKey: "takeMedicine" },
      { id: "o2", icon: "🌙", label: "Go to Sleep", labelKey: "goToSleep" },
      { id: "o3", icon: "🏠", label: "Leave Home", labelKey: "leaveHome" }
    ]
  },

  {
    id: "routine2",
    title: "Healthy Day Routine",
    titleKey: "healthyDayRoutine",
    instruction: "What should come next in this routine?",
    instructionKey: "healthyDayRoutineInstruction",

    sequence: [
      { icon: "🍽️", label: "Eat Lunch", labelKey: "eatLunch" },
      { icon: "💧", label: "Drink Water", labelKey: "drinkWater" },
      { icon: "🌿", label: "Take a Walk", labelKey: "takeAWalk" }
    ],

    correctAnswer: "Return Home",

    options: [
      { id: "o1", icon: "🏠", label: "Return Home", labelKey: "returnHome" },
      { id: "o2", icon: "🌙", label: "Go to Sleep", labelKey: "goToSleep" },
      { id: "o3", icon: "🪥", label: "Brush Teeth", labelKey: "brushTeeth" }
    ]
  },

  {
    id: "routine3",
    title: "Breakfast and Medicine",
    titleKey: "breakfastAndMedicine",
    instruction: "After breakfast, what should come next?",
    instructionKey: "breakfastAndMedicineInstruction",

    sequence: [
      { icon: "🌅", label: "Wake Up", labelKey: "wakeUp" },
      { icon: "🪥", label: "Brush Teeth", labelKey: "brushTeeth" },
      { icon: "🍳", label: "Breakfast", labelKey: "breakfast" }
    ],

    correctAnswer: "Take Medicine",

    options: [
      { id: "o1", icon: "💊", label: "Take Medicine", labelKey: "takeMedicine" },
      { id: "o2", icon: "🌙", label: "Go to Sleep", labelKey: "goToSleep" },
      { id: "o3", icon: "🍽️", label: "Eat Dinner", labelKey: "eatDinner" }
    ]
  },

  {
    id: "routine4",
    title: "Healthy Exercise Routine",
    titleKey: "healthyExerciseRoutine",
    instruction: "What should come next in this healthy routine?",
    instructionKey: "healthyExerciseRoutineInstruction",

    sequence: [
      { icon: "🌿", label: "Go for a Walk", labelKey: "goForAWalk" },
      { icon: "💧", label: "Drink Water", labelKey: "drinkWater" },
      { icon: "🪑", label: "Rest for a While", labelKey: "restForAWhile" }
    ],

    correctAnswer: "Return Home",

    options: [
      { id: "o1", icon: "🏠", label: "Return Home", labelKey: "returnHome" },
      { id: "o2", icon: "🌙", label: "Go to Sleep", labelKey: "goToSleep" },
      { id: "o3", icon: "🪥", label: "Brush Teeth", labelKey: "brushTeeth" }
    ]
  },

  {
    id: "routine5",
    title: "Evening Routine",
    titleKey: "eveningRoutine",
    instruction: "After dinner, what should come next?",
    instructionKey: "eveningRoutineInstruction",

    sequence: [
      { icon: "🌆", label: "Evening", labelKey: "evening" },
      { icon: "🍽️", label: "Eat Dinner", labelKey: "eatDinner" }
    ],

    correctAnswer: "Take Evening Medicine",

    options: [
      { id: "o1", icon: "💊", label: "Take Evening Medicine", labelKey: "takeEveningMedicine" },
      { id: "o2", icon: "🌅", label: "Eat Breakfast", labelKey: "eatBreakfast" },
      { id: "o3", icon: "🌿", label: "Go for a Walk", labelKey: "goForAWalk" }
    ]
  },

  {
    id: "routine6",
    title: "Bedtime Routine",
    titleKey: "bedtimeRoutine",
    instruction: "What should come next before going to sleep?",
    instructionKey: "bedtimeRoutineInstruction",

    sequence: [
      { icon: "🌙", label: "Night Time", labelKey: "nightTime" },
      { icon: "🪥", label: "Brush Teeth", labelKey: "brushTeeth" },
      { icon: "🛏️", label: "Get Ready for Bed", labelKey: "getReadyForBed" }
    ],

    correctAnswer: "Go to Sleep",

    options: [
      { id: "o1", icon: "😴", label: "Go to Sleep", labelKey: "goToSleep" },
      { id: "o2", icon: "🍳", label: "Eat Breakfast", labelKey: "eatBreakfast" },
      { id: "o3", icon: "🌿", label: "Go for a Walk", labelKey: "goForAWalk" }
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
    titleKey: 'spotDifference',
    instruction: "Look carefully at Picture B and find 5 differences.",
    instructionKey: 'spotDifferenceInstruction',
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
    titleKey: 'spotDifference',
    instruction: "Look carefully at Picture B and find 5 differences.",
    instructionKey: 'spotDifferenceInstruction',
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
    titleKey: 'spotDifference',
    instruction: "Look carefully at Picture B and find 5 differences.",
    instructionKey: 'spotDifferenceInstruction',
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

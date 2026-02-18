export interface JyotirlingData {
  id: number;
  name: string;
  slug: string;
  title: string;
  location: {
    city: string;
    state: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  description: string;
  significance: string;
  legend: string;
  bestTimeToVisit: string;
  howToReach: {
    byAir: string;
    byTrain: string;
    byRoad: string;
  };
  nearbyAttractions: string[];
  rituals: string[];
  festivals: string[];
  imageUrl: string;
  galleryImages: string[];
  specialFeatures: string[];
  templeTiming: string;
  entryFee: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
}

export const jyotirlingData: JyotirlingData[] = [
  {
    id: 1,
    name: "Somnath",
    slug: "somnath",
    title: "Somnath Jyotirlinga - The Eternal Shrine of Lord Shiva",
    location: {
      city: "Somnath",
      state: "Gujarat",
      coordinates: { lat: 20.8880, lng: 70.4017 }
    },
    description: "Somnath Temple, located in Gujarat, is considered the first among the twelve Jyotirlingas. Known as the 'Eternal Shrine', it holds immense spiritual significance and has been rebuilt several times throughout history.",
    significance: "Considered the first Jyotirlinga, Somnath represents the eternal nature of Lord Shiva. The temple has been destroyed and rebuilt multiple times, symbolizing the indestructible nature of faith.",
    legend: "According to Hindu mythology, the Moon God (Soma) built the original temple in gold to worship Lord Shiva. Later, Ravana rebuilt it in silver, Krishna in wood, and King Bhimdev in stone.",
    bestTimeToVisit: "October to March",
    howToReach: {
      byAir: "Keshod Airport (55 km) is the nearest airport",
      byTrain: "Somnath Railway Station connects to major cities",
      byRoad: "Well connected by road to Ahmedabad (400 km) and Rajkot (200 km)"
    },
    nearbyAttractions: ["Bhalka Tirth", "Triveni Sangam", "Somnath Beach", "Prabhas Patan Museum"],
    rituals: ["Aarti at sunrise and sunset", "Abhishek ceremony", "Pradakshina (circumambulation)"],
    festivals: ["Maha Shivratri", "Kartik Purnima", "Shravan Month celebrations"],
    imageUrl: "https://images.unsplash.com/photo-1544350881-6eb75fb22913?w=800&h=600&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1544350881-6eb75fb22913?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1580490136026-264887d8a231?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1556787175-4b46a572b786?w=800&h=600&fit=crop"
    ],
    specialFeatures: ["Eternal Jyotirlinga", "Historical significance", "Coastal temple", "Sound and light show"],
    templeTiming: "6:00 AM to 9:00 PM",
    entryFee: "No entry fee",
    seoTitle: "Somnath Temple - First Jyotirlinga | Complete Guide & Timings",
    seoDescription: "Visit Somnath Temple, the first and eternal Jyotirlinga in Gujarat. Get complete information about timings, rituals, and how to reach this sacred shrine of Lord Shiva.",
    keywords: ["Somnath Temple", "First Jyotirlinga", "Gujarat temples", "Lord Shiva", "Hindu pilgrimage"]
  },
  {
    id: 2,
    name: "Mallikarjuna",
    slug: "mallikarjuna",
    title: "Mallikarjuna Jyotirlinga - The Sacred Mountain Temple",
    location: {
      city: "Srisailam",
      state: "Andhra Pradesh",
      coordinates: { lat: 16.0755, lng: 78.8682 }
    },
    description: "Mallikarjuna Temple at Srisailam is one of the most revered Jyotirlingas, situated on the Nallamala Hills. It's the only Jyotirlinga that also houses a Shakti Peetha.",
    significance: "The only temple that combines both Jyotirlinga and Shakti Peetha, making it doubly sacred. It represents the union of Shiva and Parvati.",
    legend: "When Lord Ganesha and Kartikeya competed to marry first, Ganesha won by circumambulating his parents. Disappointed Kartikeya went to Krauncha mountain. To pacify him, Shiva and Parvati manifested here.",
    bestTimeToVisit: "October to February",
    howToReach: {
      byAir: "Rajiv Gandhi International Airport, Hyderabad (213 km)",
      byTrain: "Markapur Road Railway Station (84 km)",
      byRoad: "Well connected to Hyderabad (133 km) and Kurnool (100 km)"
    },
    nearbyAttractions: ["Srisailam Dam", "Akka Mahadevi Cave", "Patala Ganga", "Mallela Theertham"],
    rituals: ["Abhishekam", "Harathi", "Special Puja on Purnima"],
    festivals: ["Maha Shivratri", "Ugadi", "Brahmotsavam"],
    imageUrl: "https://images.unsplash.com/photo-1580817140681-a9725b5b3b9f?w=800&h=600&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1580817140681-a9725b5b3b9f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop"
    ],
    specialFeatures: ["Jyotirlinga + Shakti Peetha", "Mountain temple", "River Krishna nearby", "Ancient architecture"],
    templeTiming: "4:00 AM to 10:00 PM",
    entryFee: "No entry fee",
    seoTitle: "Mallikarjuna Jyotirlinga Srisailam - Temple Guide & Darshan Timings",
    seoDescription: "Explore Mallikarjuna Jyotirlinga at Srisailam, the sacred mountain temple combining Jyotirlinga and Shakti Peetha. Complete travel guide and temple information.",
    keywords: ["Mallikarjuna Temple", "Srisailam Jyotirlinga", "Andhra Pradesh temples", "Shakti Peetha"]
  },
  {
    id: 3,
    name: "Mahakaleshwar",
    slug: "mahakaleshwar",
    title: "Mahakaleshwar Jyotirlinga - The Time Lord's Abode",
    location: {
      city: "Ujjain",
      state: "Madhya Pradesh",
      coordinates: { lat: 23.1765, lng: 75.7885 }
    },
    description: "Mahakaleshwar Temple in Ujjain is renowned for its unique south-facing (Dakshinamurti) lingam and the famous Bhasma Aarti performed at dawn with sacred ash.",
    significance: "The only Jyotirlinga facing south (Dakshinamurti), representing Shiva as the lord of time and death. The temple is believed to be swayambhu (self-manifested).",
    legend: "When the demon Dushana terrorized the people of Avanti, they prayed to Lord Shiva. Shiva emerged from the earth as Mahakaleshwar and destroyed the demon.",
    bestTimeToVisit: "October to March",
    howToReach: {
      byAir: "Devi Ahilyabai Holkar Airport, Indore (55 km)",
      byTrain: "Ujjain Junction Railway Station (2 km)",
      byRoad: "Well connected to Indore (55 km) and Bhopal (183 km)"
    },
    nearbyAttractions: ["Ram Ghat", "Kal Bhairav Temple", "Vedh Shala (Observatory)", "Chintaman Ganesh"],
    rituals: ["Bhasma Aarti (early morning)", "Regular Aarti", "Abhishek", "Bhog Aarti"],
    festivals: ["Maha Shivratri", "Sawan Somwar", "Nag Panchami"],
    imageUrl: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=800&h=600&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1580817140681-a9725b5b3b9f?w=800&h=600&fit=crop"
    ],
    specialFeatures: ["South-facing Lingam", "Bhasma Aarti", "Swayambhu Jyotirlinga", "Time deity"],
    templeTiming: "4:00 AM to 11:00 PM",
    entryFee: "No entry fee (VIP darshan charges apply)",
    seoTitle: "Mahakaleshwar Ujjain - Bhasma Aarti Timings | Complete Temple Guide",
    seoDescription: "Visit Mahakaleshwar Jyotirlinga in Ujjain, famous for Bhasma Aarti. Get details about temple timings, booking procedures, and spiritual significance.",
    keywords: ["Mahakaleshwar Temple", "Ujjain Jyotirlinga", "Bhasma Aarti", "Madhya Pradesh temples"]
  },
  {
    id: 4,
    name: "Omkareshwar",
    slug: "omkareshwar",
    title: "Omkareshwar Jyotirlinga - The Sacred OM Island",
    location: {
      city: "Omkareshwar",
      state: "Madhya Pradesh",
      coordinates: { lat: 22.2394, lng: 76.1467 }
    },
    description: "Located on an island shaped like the sacred symbol 'OM', Omkareshwar Temple is surrounded by the Narmada River, creating a naturally blessed environment for worship.",
    significance: "The island's natural OM shape makes it uniquely sacred. The temple represents the cosmic sound 'OM' and the primordial vibration of the universe.",
    legend: "The Vindhya mountain range performed penance here to grow taller than Mount Meru. Pleased with the devotion, Lord Shiva blessed the place with his presence as Omkareshwar.",
    bestTimeToVisit: "October to March",
    howToReach: {
      byAir: "Devi Ahilyabai Holkar Airport, Indore (77 km)",
      byTrain: "Omkareshwar Road Railway Station (12 km)",
      byRoad: "Well connected to Indore (77 km) and Ujjain (134 km)"
    },
    nearbyAttractions: ["Mamleshwar Temple", "Siddhanath Temple", "Narmada River", "Kajal Rani Cave"],
    rituals: ["Morning Aarti", "Evening Aarti", "Abhishek", "Parikrama of the island"],
    festivals: ["Maha Shivratri", "Kartik Purnima", "Narmada Jayanti"],
    imageUrl: "https://images.unsplash.com/photo-1605379399843-5870eea9b74e?w=800&h=600&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1605379399843-5870eea9b74e?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1580490136026-264887d8a231?w=800&h=600&fit=crop"
    ],
    specialFeatures: ["OM-shaped island", "Narmada River surroundings", "Two temples (Omkareshwar & Mamleshwar)", "Boat ride"],
    templeTiming: "4:30 AM to 10:30 PM",
    entryFee: "No entry fee",
    seoTitle: "Omkareshwar Temple - Sacred OM Island Jyotirlinga | Complete Guide",
    seoDescription: "Discover Omkareshwar Jyotirlinga on the sacred OM-shaped island surrounded by Narmada River. Complete travel and temple information for pilgrims.",
    keywords: ["Omkareshwar Temple", "OM island", "Narmada River", "Madhya Pradesh Jyotirlinga"]
  },
  {
    id: 5,
    name: "Kedarnath",
    slug: "kedarnath",
    title: "Kedarnath Jyotirlinga - The Himalayan Abode",
    location: {
      city: "Kedarnath",
      state: "Uttarakhand",
      coordinates: { lat: 30.7346, lng: 79.0669 }
    },
    description: "Perched at 3,583 meters in the Himalayas, Kedarnath is the highest among all Jyotirlingas. Part of the Char Dham Yatra, it's accessible only during summer months.",
    significance: "The highest Jyotirlinga, representing Shiva's connection to the cosmic heights. It's one of the Panch Kedar temples and part of the sacred Char Dham pilgrimage.",
    legend: "The Pandavas sought Shiva's forgiveness after the Kurukshetra war. Shiva disguised as a bull, but when Bhima caught him, he dived into the ground leaving behind his hump, which became the Kedarnath lingam.",
    bestTimeToVisit: "May to October (Temple closes in winter)",
    howToReach: {
      byAir: "Jolly Grant Airport, Dehradun (239 km to Gaurikund)",
      byTrain: "Rishikesh Railway Station (221 km to Gaurikund)",
      byRoad: "Drive to Gaurikund, then 16 km trek or helicopter"
    },
    nearbyAttractions: ["Bhairav Temple", "Gandhi Sarovar", "Vasuki Tal", "Chorabari Tal"],
    rituals: ["Morning Aarti", "Rudrabhishek", "Evening Aarti", "Special winter prayers at Ukhimath"],
    festivals: ["Maha Shivratri", "Kedarnath Yatra opening", "Badri Kedar Festival"],
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?w=800&h=600&fit=crop"
    ],
    specialFeatures: ["Highest Jyotirlinga", "Himalayan location", "Seasonal temple", "Trekking required"],
    templeTiming: "6:00 AM to 7:00 PM (May to October only)",
    entryFee: "No entry fee (Helicopter charges separate)",
    seoTitle: "Kedarnath Temple - Highest Jyotirlinga in Himalayas | Yatra Guide",
    seoDescription: "Plan your Kedarnath Yatra to the highest Jyotirlinga temple in the Himalayas. Complete guide for trekking, helicopter services, and temple information.",
    keywords: ["Kedarnath Temple", "Himalayan Jyotirlinga", "Char Dham Yatra", "Uttarakhand pilgrimage"]
  },
  {
    id: 6,
    name: "Bhimashankar",
    slug: "bhimashankar",
    title: "Bhimashankar Jyotirlinga - The Forest Temple",
    location: {
      city: "Bhimashankar",
      state: "Maharashtra",
      coordinates: { lat: 19.0728, lng: 73.5355 }
    },
    description: "Located in the Sahyadri range of Maharashtra, Bhimashankar Temple is surrounded by lush forests and is known for its ancient architecture and serene environment.",
    significance: "One of the 12 Jyotirlingas, this temple is also significant as it's located in a biodiversity hotspot and is the source of the Bhima river.",
    legend: "When the demon Bhima (son of Kumbhakarna) terrorized the sages, they prayed to Lord Shiva. Shiva appeared and defeated the demon, and the place came to be known as Bhimashankar.",
    bestTimeToVisit: "October to May",
    howToReach: {
      byAir: "Pune Airport (127 km)",
      byTrain: "Pune Railway Station (127 km)",
      byRoad: "Well connected to Pune and Mumbai via Kalyan-Murbad route"
    },
    nearbyAttractions: ["Bhimashankar Wildlife Sanctuary", "Hanuman Lake", "Gupt Bhimashankar", "Sakshi Vinayak Temple"],
    rituals: ["Morning Aarti", "Abhishek", "Evening Aarti", "Pradakshina"],
    festivals: ["Maha Shivratri", "Shravan Monday", "Bhimashankar Yatra"],
    imageUrl: "https://images.unsplash.com/photo-1580817140681-a9725b5b3b9f?w=800&h=600&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1580817140681-a9725b5b3b9f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop"
    ],
    specialFeatures: ["Forest location", "Wildlife sanctuary", "Ancient architecture", "Bhima river source"],
    templeTiming: "5:00 AM to 9:30 PM",
    entryFee: "No entry fee",
    seoTitle: "Bhimashankar Temple Maharashtra - Jyotirlinga in Sahyadri Hills",
    seoDescription: "Visit Bhimashankar Jyotirlinga temple in Maharashtra's Sahyadri range. Explore the forest temple, wildlife sanctuary, and spiritual significance.",
    keywords: ["Bhimashankar Temple", "Maharashtra Jyotirlinga", "Sahyadri temples", "Forest temple"]
  },
  {
    id: 7,
    name: "Kashi Vishwanath",
    slug: "kashi-vishwanath",
    title: "Kashi Vishwanath Jyotirlinga - The Golden Temple",
    location: {
      city: "Varanasi",
      state: "Uttar Pradesh",
      coordinates: { lat: 25.3176, lng: 83.0104 }
    },
    description: "The most famous of all Jyotirlingas, Kashi Vishwanath Temple in Varanasi is known for its golden spire and dome. It's considered the spiritual capital of India.",
    significance: "Known as the 'Golden Temple' due to its gold-plated spire. Kashi is considered the city of light and moksha (liberation). Dying here is believed to grant immediate salvation.",
    legend: "Lord Shiva chose Kashi as his permanent abode. It's believed that even during the cosmic dissolution, Kashi remains protected by Shiva's trident.",
    bestTimeToVisit: "October to March",
    howToReach: {
      byAir: "Lal Bahadur Shastri Airport, Varanasi (25 km)",
      byTrain: "Varanasi Cantt Railway Station (5 km)",
      byRoad: "Well connected to all major cities of North India"
    },
    nearbyAttractions: ["Dashashwamedh Ghat", "Manikarnika Ghat", "Sarnath", "Sankat Mochan Temple"],
    rituals: ["Mangla Aarti", "Bhog Aarti", "Sandhya Aarti", "Shayan Aarti"],
    festivals: ["Maha Shivratri", "Ganga Aarti", "Dev Deepavali", "Annakoot"],
    imageUrl: "https://images.unsplash.com/photo-1561361513-2d000314592f?w=800&h=600&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1561361513-2d000314592f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1580817140681-a9725b5b3b9f?w=800&h=600&fit=crop"
    ],
    specialFeatures: ["Golden spire", "Spiritual capital", "Ganges proximity", "Ancient city"],
    templeTiming: "3:00 AM to 11:00 PM",
    entryFee: "No entry fee (Special darshan charges apply)",
    seoTitle: "Kashi Vishwanath Temple Varanasi - Golden Temple Darshan Guide",
    seoDescription: "Experience divinity at Kashi Vishwanath Temple, the golden Jyotirlinga in Varanasi. Complete guide for darshan, aarti timings, and spiritual tours.",
    keywords: ["Kashi Vishwanath", "Varanasi temple", "Golden temple", "Spiritual capital India"]
  },
  {
    id: 8,
    name: "Trimbakeshwar",
    slug: "trimbakeshwar",
    title: "Trimbakeshwar Jyotirlinga - Source of Sacred Godavari",
    location: {
      city: "Trimbak",
      state: "Maharashtra",
      coordinates: { lat: 19.9317, lng: 73.5297 }
    },
    description: "Trimbakeshwar Temple is unique as it houses three lingas representing Brahma, Vishnu, and Mahesh (Shiva). It's located near the source of the holy Godavari river.",
    significance: "The only Jyotirlinga with three faces representing the Hindu trinity. It's also the source of river Godavari, making it doubly sacred.",
    legend: "Sage Gautama performed penance here. When Ganga appeared as Godavari, Lord Shiva manifested as Trimbakeshwar to purify the sage from a curse.",
    bestTimeToVisit: "October to March",
    howToReach: {
      byAir: "Mumbai Airport (167 km)",
      byTrain: "Nashik Road Railway Station (28 km)",
      byRoad: "Well connected to Mumbai (167 km) and Pune (212 km)"
    },
    nearbyAttractions: ["Brahmagiri Hill", "Kushavarta Kund", "Anjaneri Fort", "Coin Museum Nashik"],
    rituals: ["Rudrabhishek", "Laghurudra", "Maharudrabhishek", "Godavari Aarti"],
    festivals: ["Maha Shivratri", "Kumbh Mela (every 12 years)", "Shravan Month celebrations"],
    imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1580817140681-a9725b5b3b9f?w=800&h=600&fit=crop"
    ],
    specialFeatures: ["Three-faced lingam", "Godavari source", "Kumbh Mela venue", "Mountain location"],
    templeTiming: "5:30 AM to 9:00 PM",
    entryFee: "No entry fee",
    seoTitle: "Trimbakeshwar Temple Maharashtra - Trinity Jyotirlinga & Godavari Source",
    seoDescription: "Explore Trimbakeshwar Jyotirlinga temple, the unique three-faced lingam near Godavari river source. Complete pilgrimage guide and temple information.",
    keywords: ["Trimbakeshwar Temple", "Three-faced Jyotirlinga", "Godavari source", "Maharashtra temples"]
  },
  {
    id: 9,
    name: "Vaidyanath",
    slug: "vaidyanath",
    title: "Vaidyanath Jyotirlinga - The Healing Temple",
    location: {
      city: "Deoghar",
      state: "Jharkhand",
      coordinates: { lat: 24.4839, lng: 86.7025 }
    },
    description: "Vaidyanath Temple in Deoghar is known as the 'Temple of the Divine Healer'. Devotees believe that prayers here can cure all ailments and bring good health.",
    significance: "Known as Baba Baidyanath, this temple is famous for healing powers. The annual Shravan month pilgrimage (Bolbam Yatra) brings millions of devotees.",
    legend: "When Ravana performed severe penance and offered his ten heads to Shiva, the pleased lord appeared as Vaidyanath (the divine healer) and restored his heads.",
    bestTimeToVisit: "October to March",
    howToReach: {
      byAir: "Lok Nayak Jayaprakash Airport, Patna (281 km)",
      byTrain: "Jasidih Railway Station (7 km)",
      byRoad: "Well connected to Ranchi (253 km) and Patna (281 km)"
    },
    nearbyAttractions: ["Nandan Pahar", "Tapovan", "Trikut Pahar", "Naulakha Mandir"],
    rituals: ["Jalabhishek", "Rudrabhishek", "Shravan special prayers", "Kanwar Yatra rituals"],
    festivals: ["Maha Shivratri", "Shravan Kanwar Yatra", "Dussehra", "Poush Sankranti"],
    imageUrl: "https://images.unsplash.com/photo-1605379399843-5870eea9b74e?w=800&h=600&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1605379399843-5870eea9b74e?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1580490136026-264887d8a231?w=800&h=600&fit=crop"
    ],
    specialFeatures: ["Healing powers", "Kanwar Yatra destination", "Divine healer", "Shravan pilgrimage"],
    templeTiming: "4:00 AM to 10:00 PM",
    entryFee: "No entry fee",
    seoTitle: "Vaidyanath Temple Deoghar - Divine Healer Jyotirlinga | Kanwar Yatra",
    seoDescription: "Visit Vaidyanath Jyotirlinga in Deoghar, famous for healing powers and Kanwar Yatra. Complete temple guide and pilgrimage information.",
    keywords: ["Vaidyanath Temple", "Deoghar Jyotirlinga", "Baba Baidyanath", "Kanwar Yatra", "Healing temple"]
  },
  {
    id: 10,
    name: "Nageshwar",
    slug: "nageshwar",
    title: "Nageshwar Jyotirlinga - Protection from Serpents",
    location: {
      city: "Dwarka",
      state: "Gujarat",
      coordinates: { lat: 22.2587, lng: 68.9673 }
    },
    description: "Nageshwar Temple near Dwarka is known for protection from all poisons and serpent bites. The temple features a 125-foot tall statue of Lord Shiva in a meditative pose.",
    significance: "Known as the protector from serpents and all kinds of poison. The temple represents Shiva's victory over death and evil forces.",
    legend: "A devotee named Supriya was saved from a demon named Daruka by Lord Shiva's intervention. Shiva manifested as Nageshwar to protect his devotees from all evils.",
    bestTimeToVisit: "October to March",
    howToReach: {
      byAir: "Jamnagar Airport (137 km)",
      byTrain: "Dwarka Railway Station (17 km)",
      byRoad: "Well connected to Dwarka (17 km) and Jamnagar (137 km)"
    },
    nearbyAttractions: ["Dwarkadeesh Temple", "Rukmini Devi Temple", "Bet Dwarka", "Gopi Talav"],
    rituals: ["Abhishek with milk", "Nag Panchami special prayers", "Rudrabhishek", "Aarti"],
    festivals: ["Maha Shivratri", "Nag Panchami", "Krishna Janmashtami", "Kartik Purnima"],
    imageUrl: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=800&h=600&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=800&h=600&fit=crop"
    ],
    specialFeatures: ["Protection from serpents", "Giant Shiva statue", "Near Dwarka", "Coastal temple"],
    templeTiming: "6:00 AM to 9:30 PM",
    entryFee: "No entry fee",
    seoTitle: "Nageshwar Temple Dwarka - Serpent Protection Jyotirlinga Guide",
    seoDescription: "Visit Nageshwar Jyotirlinga near Dwarka, famous for protection from serpents and poisons. Temple guide with timings and spiritual significance.",
    keywords: ["Nageshwar Temple", "Dwarka Jyotirlinga", "Serpent protection", "Gujarat temples"]
  },
  {
    id: 11,
    name: "Rameshwaram",
    slug: "rameshwaram",
    title: "Rameshwaram Jyotirlinga - The Southern Kashi",
    location: {
      city: "Rameshwaram",
      state: "Tamil Nadu",
      coordinates: { lat: 9.2876, lng: 79.3129 }
    },
    description: "Ramanathaswamy Temple in Rameshwaram is famous for its magnificent corridors and 22 holy water tanks. It's one of the Char Dham pilgrimage sites.",
    significance: "Known as the 'Southern Kashi', it's part of Char Dham pilgrimage. The temple has the longest corridor among all Hindu temples and is connected to the Ramayana epic.",
    legend: "Lord Rama worshipped Shiva here to absolve himself of the sin of killing Ravana (a Brahmin). Hanuman brought a lingam from Kailash, but Sita had already made one from sand.",
    bestTimeToVisit: "October to April",
    howToReach: {
      byAir: "Madurai Airport (174 km)",
      byTrain: "Rameshwaram Railway Station (2 km)",
      byRoad: "Connected to Chennai (572 km) and Madurai (174 km)"
    },
    nearbyAttractions: ["Adam's Bridge (Ram Setu)", "Dhanushkodi", "APJ Abdul Kalam Memorial", "Ariyaman Beach"],
    rituals: ["Abhishekam to both lingams", "22 holy water baths", "Sethu Snaan", "Temple circumambulation"],
    festivals: ["Maha Shivratri", "Thirukalyanam", "Arudra Darshan", "Thai Pusam"],
    imageUrl: "https://images.unsplash.com/photo-1544350881-6eb75fb22913?w=800&h=600&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1544350881-6eb75fb22913?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1580490136026-264887d8a231?w=800&h=600&fit=crop"
    ],
    specialFeatures: ["Longest temple corridor", "22 holy tanks", "Island temple", "Char Dham site"],
    templeTiming: "5:00 AM to 1:00 PM, 3:00 PM to 9:00 PM",
    entryFee: "No entry fee",
    seoTitle: "Rameshwaram Temple - Southern Kashi Jyotirlinga | Char Dham Guide",
    seoDescription: "Explore Rameshwaram Jyotirlinga temple, the Southern Kashi with longest corridors and 22 holy tanks. Complete Char Dham pilgrimage guide.",
    keywords: ["Rameshwaram Temple", "Southern Kashi", "Char Dham", "Tamil Nadu Jyotirlinga", "Ramayana"]
  },
  {
    id: 12,
    name: "Grishneshwar",
    slug: "grishneshwar",
    title: "Grishneshwar Jyotirlinga - The Last Sacred Abode",
    location: {
      city: "Ellora",
      state: "Maharashtra",
      coordinates: { lat: 20.0230, lng: 75.1795 }
    },
    description: "Grishneshwar Temple, located near the famous Ellora Caves, is the last (12th) Jyotirlinga mentioned in ancient scriptures. It showcases exquisite Marathi architecture.",
    significance: "The last of the 12 Jyotirlingas mentioned in Shiva Purana. Its proximity to Ellora Caves adds to its archaeological and spiritual importance.",
    legend: "A devout woman named Kusuma worshipped a Shiv Lingam daily. Her devotion pleased Lord Shiva so much that he manifested as Grishneshwar to bless her and the region.",
    bestTimeToVisit: "October to March",
    howToReach: {
      byAir: "Aurangabad Airport (30 km)",
      byTrain: "Aurangabad Railway Station (30 km)",
      byRoad: "Well connected to Aurangabad (30 km) and Mumbai (350 km)"
    },
    nearbyAttractions: ["Ellora Caves", "Ajanta Caves", "Daulatabad Fort", "Bibi Ka Maqbara"],
    rituals: ["Abhishek", "Aarti", "Pradakshina", "Special Somwar prayers"],
    festivals: ["Maha Shivratri", "Shravan Monday", "Kartik Ekadashi", "Gudi Padwa"],
    imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1580817140681-a9725b5b3b9f?w=800&h=600&fit=crop"
    ],
    specialFeatures: ["Last Jyotirlinga", "Near Ellora Caves", "Marathi architecture", "Archaeological significance"],
    templeTiming: "5:30 AM to 9:30 PM",
    entryFee: "No entry fee",
    seoTitle: "Grishneshwar Temple Ellora - Last Jyotirlinga Near UNESCO Caves",
    seoDescription: "Visit Grishneshwar Jyotirlinga temple near Ellora Caves, the 12th and last sacred Jyotirlinga. Complete guide with cave exploration options.",
    keywords: ["Grishneshwar Temple", "Ellora Caves", "Last Jyotirlinga", "Maharashtra heritage", "Aurangabad temples"]
  }
];

// Helper function to get Jyotirlinga by slug
export const getJyotirlingBySlug = (slug: string): JyotirlingData | undefined => {
  return jyotirlingData.find(jyotirlinga => jyotirlinga.slug === slug);
};

// Helper function to get all Jyotirlinga names for navigation
export const getAllJyotirlingaSlugs = (): string[] => {
  return jyotirlingData.map(jyotirlinga => jyotirlinga.slug);
};

// Helper function to get related Jyotirlingas (exclude current one)
export const getRelatedJyotirlingas = (currentSlug: string, limit: number = 3): JyotirlingData[] => {
  return jyotirlingData
    .filter(jyotirlinga => jyotirlinga.slug !== currentSlug)
    .slice(0, limit);
};
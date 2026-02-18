export interface AdData {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  ctaText: string;
  link: string;
  category: 'spiritual' | 'travel' | 'accommodation' | 'services' | 'products';
  isSponsored: boolean;
  priority: 'high' | 'medium' | 'low';
  targetAudience: string[];
  location?: string;
  validUntil?: string;
}

export const adsData: AdData[] = [
  {
    id: 1,
    title: "Sacred Yatra Tours",
    description: "Complete spiritual journey packages to all 12 Jyotirlingas with expert guides and comfortable accommodation.",
    imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    ctaText: "Book Yatra",
    link: "#",
    category: "travel",
    isSponsored: true,
    priority: "high",
    targetAudience: ["pilgrims", "spiritual seekers", "families"],
    location: "Pan India",
    validUntil: "2026-12-31"
  },
  {
    id: 2,
    title: "Spiritual Retreat Center",
    description: "Peaceful accommodations near temples with meditation halls, yoga sessions, and sattvic food.",
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
    ctaText: "Book Now",
    link: "#",
    category: "accommodation",
    isSponsored: true,
    priority: "high",
    targetAudience: ["spiritual seekers", "yoga practitioners"],
    location: "Rishikesh",
    validUntil: "2026-06-30"
  },
  {
    id: 3,
    title: "Divine Rudraksha Collection",
    description: "Authentic Rudraksha beads and malas blessed by temple priests. Free certification included.",
    imageUrl: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&h=300&fit=crop",
    ctaText: "Shop Now",
    link: "#",
    category: "products",
    isSponsored: false,
    priority: "medium",
    targetAudience: ["devotees", "spiritual practitioners"],
    validUntil: "2026-12-31"
  },
  {
    id: 4,
    title: "Temple Photography Services",
    description: "Professional photography for your spiritual journey. Capture divine moments at sacred places.",
    imageUrl: "https://images.unsplash.com/photo-1561361513-2d000314592f?w=400&h=300&fit=crop",
    ctaText: "Hire Photographer",
    link: "#",
    category: "services",
    isSponsored: false,
    priority: "low",
    targetAudience: ["families", "couples", "travelers"]
  },
  {
    id: 5,
    title: "Ayurvedic Wellness Center",
    description: "Traditional Ayurvedic treatments and therapies for complete body and mind purification.",
    imageUrl: "https://images.unsplash.com/photo-1605379399843-5870eea9b74e?w=400&h=300&fit=crop",
    ctaText: "Book Treatment",
    link: "#",
    category: "services",
    isSponsored: true,
    priority: "medium",
    targetAudience: ["health-conscious", "spiritual seekers"],
    location: "Kerala",
    validUntil: "2026-09-30"
  },
  {
    id: 6,
    title: "Sacred Books & Scriptures",
    description: "Extensive collection of Hindu scriptures, spiritual books, and devotional literature.",
    imageUrl: "https://images.unsplash.com/photo-1544350881-6eb75fb22913?w=400&h=300&fit=crop",
    ctaText: "Browse Collection",
    link: "#",
    category: "products",
    isSponsored: false,
    priority: "low",
    targetAudience: ["scholars", "students", "devotees"]
  },
  {
    id: 7,
    title: "Helicopter Darshan Services",
    description: "Skip the queues with premium helicopter services to major temples. Safe and comfortable journey.",
    imageUrl: "https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?w=400&h=300&fit=crop",
    ctaText: "Book Flight",
    link: "#",
    category: "travel",
    isSponsored: true,
    priority: "high",
    targetAudience: ["premium travelers", "elderly pilgrims"],
    location: "Kedarnath, Vaishno Devi",
    validUntil: "2026-10-31"
  },
  {
    id: 8,
    title: "Spiritual Music Academy",
    description: "Learn devotional music, bhajans, and classical ragas from renowned spiritual musicians.",
    imageUrl: "https://images.unsplash.com/photo-1580490136026-264887d8a231?w=400&h=300&fit=crop",
    ctaText: "Enroll Now",
    link: "#",
    category: "services",
    isSponsored: false,
    priority: "medium",
    targetAudience: ["music lovers", "devotees", "students"]
  },
  {
    id: 9,
    title: "Premium Temple Accommodation",
    description: "Luxurious guest houses and dharamshalas near major temples with modern amenities.",
    imageUrl: "https://images.unsplash.com/photo-1580817140681-a9725b5b3b9f?w=400&h=300&fit=crop",
    ctaText: "Check Availability",
    link: "#",
    category: "accommodation",
    isSponsored: true,
    priority: "high",
    targetAudience: ["families", "comfortable travelers"],
    location: "All major temples"
  },
  {
    id: 10,
    title: "Organic Prasadam Delivery",
    description: "Fresh, organic prasadam and temple offerings delivered to your doorstep from sacred temples.",
    imageUrl: "https://images.unsplash.com/photo-1556787175-4b46a572b786?w=400&h=300&fit=crop",
    ctaText: "Order Prasadam",
    link: "#",
    category: "products",
    isSponsored: false,
    priority: "medium",
    targetAudience: ["devotees", "families", "health-conscious"]
  }
];

// Helper functions for ad management
export const getAdsByCategory = (category: AdData['category']): AdData[] => {
  return adsData.filter(ad => ad.category === category);
};

export const getAdsByPriority = (priority: AdData['priority']): AdData[] => {
  return adsData.filter(ad => ad.priority === priority);
};

export const getSponsoredAds = (): AdData[] => {
  return adsData.filter(ad => ad.isSponsored);
};

export const getRandomAds = (count: number): AdData[] => {
  const shuffled = [...adsData].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export const getAdsForPage = (pageType: 'home' | 'temple' | 'general', count: number = 6): AdData[] => {
  let filteredAds = [...adsData];

  // Prioritize ads based on page type
  switch (pageType) {
    case 'home':
      // For homepage, show sponsored ads first, then high priority
      filteredAds.sort((a, b) => {
        if (a.isSponsored && !b.isSponsored) return -1;
        if (!a.isSponsored && b.isSponsored) return 1;
        
        const priorityOrder = { high: 3, medium: 2, low: 1 };
        return priorityOrder[b.priority] - priorityOrder[a.priority];
      });
      break;

    case 'temple':
      // For temple pages, prioritize travel and accommodation ads
      const relevantCategories = ['travel', 'accommodation', 'services'];
      filteredAds = adsData.filter(ad => 
        relevantCategories.includes(ad.category) || ad.isSponsored
      );
      break;

    default:
      // Random selection for other pages
      filteredAds = getRandomAds(count);
      break;
  }

  return filteredAds.slice(0, count);
};

// Mock API response structure for future integration
export interface AdApiResponse {
  ads: AdData[];
  totalCount: number;
  hasMore: boolean;
  nextPage?: number;
}

export const mockFetchAds = async (
  page: number = 1,
  limit: number = 6,
  category?: string,
  priority?: string
): Promise<AdApiResponse> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));

  let filtered = [...adsData];

  if (category) {
    filtered = filtered.filter(ad => ad.category === category);
  }

  if (priority) {
    filtered = filtered.filter(ad => ad.priority === priority);
  }

  const start = (page - 1) * limit;
  const end = start + limit;
  const ads = filtered.slice(start, end);

  return {
    ads,
    totalCount: filtered.length,
    hasMore: end < filtered.length,
    nextPage: end < filtered.length ? page + 1 : undefined
  };
};
# 🕉 Jyotirling.com - Sacred Journey Guide

A production-ready, fully responsive website showcasing the 12 sacred Jyotirlinga temples of Lord Shiva across India. Built with modern web technologies and optimized for performance, SEO, and user experience.

## ✨ Features

### 🎯 Core Features
- **Interactive 3D India Map** - Explore all 12 Jyotirling locations with Three.js
- **Dynamic Temple Pages** - Detailed information for each Jyotirlinga
- **Dark/Light Mode** - Premium theme switching with persistent preferences
- **Responsive Design** - Mobile-first approach with perfect tablet/desktop scaling
- **Advertisement System** - Integrated partner promotion system
- **SEO Optimized** - Complete meta tags, structured data, and sitemap

### 🚀 Performance & UX
- **90+ Lighthouse Score** - Optimized for Core Web Vitals
- **Lazy Loading** - Images and components load on demand
- **Code Splitting** - Automatic route-based code splitting
- **Animation System** - Smooth GSAP + Framer Motion animations
- **Progressive Loading** - Skeleton screens and loading states
- **Image Optimization** - Next.js Image component with WebP/AVIF support

### 💼 Business Features
- **Advertisement Integration** - Flexible ad placement system
- **Analytics Ready** - Google Analytics and performance monitoring
- **Social Sharing** - Native and fallback share functionality
- **Newsletter Signup** - Built-in email collection
- **Contact Forms** - Ready for backend integration

## 🛠 Tech Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS + Custom CSS
- **Animations**: GSAP + Framer Motion
- **3D Graphics**: Three.js + React Three Fiber
- **Icons**: Lucide React
- **State Management**: Zustand

### Performance & SEO
- **Image Optimization**: Next.js Image + WebP/AVIF
- **Font Optimization**: Google Fonts with display=swap
- **Code Splitting**: Automatic + Dynamic imports
- **SEO**: Meta tags, Open Graph, Twitter Cards, Structured data
- **PWA Ready**: Service worker configuration included

### Development
- **Package Manager**: npm/yarn
- **Linting**: ESLint + Next.js config
- **Type Checking**: TypeScript strict mode
- **Build**: Next.js + SWC minification
- **Deployment**: Vercel/Netlify ready

## 🚀 Quick Start

### Prerequisites
- Node.js 18.17.0 or higher
- npm 8.0.0 or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/jyotirling-website.git
cd jyotirling-website

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

### Environment Setup

Create a `.env.local` file:

```env
# Analytics
NEXT_PUBLIC_GA_ID=your-google-analytics-id

# Contact Form (optional)
NEXT_PUBLIC_CONTACT_EMAIL=info@jyotirling.com

# Social Media (optional)
NEXT_PUBLIC_FACEBOOK_URL=https://facebook.com/jyotirling
NEXT_PUBLIC_TWITTER_URL=https://twitter.com/jyotirling
NEXT_PUBLIC_INSTAGRAM_URL=https://instagram.com/jyotirling
```

## 📁 Project Structure

```
jyotirling-website/
├── app/                          # Next.js 14 App Router
│   ├── globals.css              # Global styles & TailwindCSS
│   ├── layout.tsx               # Root layout with SEO
│   ├── page.tsx                 # Homepage
│   ├── not-found.tsx           # Custom 404 page
│   └── jyotirling/
│       └── [slug]/
│           ├── page.tsx         # Dynamic temple pages
│           └── JyotirlingaDetailPage.tsx
├── components/                   # Reusable React components
│   ├── Navbar.tsx              # Responsive navigation
│   ├── Hero.tsx                # Homepage hero section
│   ├── IndiaMap3D.tsx          # Interactive 3D map
│   ├── AdCard.tsx              # Advertisement component
│   ├── Footer.tsx              # Site footer
│   └── Loading.tsx             # Loading components
├── lib/                         # Utility functions & data
│   ├── data.ts                 # Jyotirlinga temple data
│   ├── ads.ts                  # Advertisement data & API
│   └── utils.ts                # Helper functions
├── store/                       # Zustand state management
│   └── themeStore.ts           # Theme management
├── public/                      # Static assets
│   └── images/                 # Image assets
├── package.json                # Dependencies & scripts
├── tailwind.config.js          # TailwindCSS configuration
├── next.config.js              # Next.js configuration
└── README.md                   # Project documentation
```

## 🎨 Customization

### Theme Colors
Edit `tailwind.config.js` to customize the spiritual theme:

```javascript
colors: {
  primary: {
    // Deep Red shades for Shiva
    900: '#8B0000', // Primary brand color
  },
  gold: {
    // Gold shades for sacred elements
    500: '#D4AF37', // Golden accent color
  }
}
```

### Adding New Temples
Update `lib/data.ts` to add new Jyotirlinga data:

```typescript
{
  id: 13,
  name: "New Temple",
  slug: "new-temple",
  location: {
    city: "City Name",
    state: "State Name",
    coordinates: { lat: 0.0000, lng: 0.0000 }
  },
  // ... other temple data
}
```

### Advertisement Management
Update `lib/ads.ts` to modify the ad system:

```typescript
// Add new ads, modify categories, or integrate with external APIs
export const adsData: AdData[] = [
  // Your ad configurations
];
```

## 📱 Responsive Design

The website follows a mobile-first approach with breakpoints:

- **Mobile**: 320px - 767px (1 column layouts)
- **Tablet**: 768px - 1023px (2-3 column layouts)
- **Desktop**: 1024px+ (3-4 column layouts)
- **Large Desktop**: 1440px+ (optimized spacing)

## 🔧 Performance Optimizations

### Image Optimization
- Next.js Image component with lazy loading
- WebP/AVIF format support
- Responsive image sizing
- Blur placeholder generation

### Code Optimization
- Tree shaking for unused code elimination
- Dynamic imports for route-based code splitting
- Bundle analysis with `npm run build`
- SWC minification for faster builds

### Loading Performance
- Skeleton loading screens
- Progressive image loading
- Lazy component rendering
- Prefetch on hover for navigation

## 🔍 SEO Features

### Meta Tags & Structured Data
- Dynamic meta tags for each temple page
- Open Graph and Twitter Card support
- JSON-LD structured data for temples
- Canonical URLs and hreflang support

### Performance Metrics
- Core Web Vitals optimization
- Lighthouse score 90+
- Fast Contentful Paint < 2s
- Cumulative Layout Shift < 0.1

## 🎭 Animation System

### GSAP Animations
- Scroll-triggered animations
- Timeline-based complex sequences
- Performance-optimized transforms
- Cross-browser compatibility

### Framer Motion
- Page transitions
- Component enter/exit animations
- Gesture-based interactions
- Layout animations

## 🔒 Security Features

- Content Security Policy headers
- XSS protection headers
- HTTPS enforcing
- Input sanitization
- Rate limiting ready

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Netlify
```bash
# Build command: npm run build
# Publish directory: .next
```

### Docker
```dockerfile
# Dockerfile included for containerized deployment
FROM node:18-alpine
# ... Docker configuration
```

## 🧪 Testing

```bash
# Type checking
npm run type-check

# Linting
npm run lint

# Build test
npm run build
```

## 📊 Analytics Integration

The project includes support for:
- Google Analytics 4
- Google Tag Manager
- Custom event tracking
- Performance monitoring
- User behavior analytics

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Spiritual Inspiration**: The 12 sacred Jyotirlinga temples
- **Design Inspiration**: Traditional Indian temple architecture
- **Technical Stack**: Next.js, TailwindCSS, and the amazing open-source community
- **Cultural Heritage**: Rich Hindu traditions and pilgrimage culture

## 📞 Support

For support, email info@jyotirling.com or join our community discussions.

---

**Built with 🕉 for spiritual seekers and temple devotees worldwide.**

Made with ❤️ by [Your Name] - Connecting devotion with technology.
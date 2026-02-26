# Himanshu Sharma - Premium Portfolio Website

A modern, responsive portfolio website built with React, showcasing the professional journey of Himanshu Sharma, a Senior Software Engineer & Technical Team Lead with 10+ years of experience.

## 🚀 Features

- **Modern Design**: Premium glassmorphism UI with white theme and neon accents
- **3D Animations**: Interactive Three.js background effects and particle systems
- **Smooth Animations**: Framer Motion and GSAP for professional transitions
- **Responsive Design**: Mobile-first approach with perfect cross-device compatibility
- **Performance Optimized**: Code splitting, lazy loading, and optimized bundle sizes
- **SEO Ready**: Meta tags, Open Graph, and semantic HTML structure
- **Interactive Elements**: Hover effects, scroll animations, and cursor glow
- **Professional Sections**: Hero, About, Skills, Projects, Experience, Leadership, Contact

## 🛠 Tech Stack

- **Frontend**: React 18 with Vite
- **Styling**: Tailwind CSS with custom glassmorphism utilities
- **Animations**: Framer Motion + GSAP
- **3D Graphics**: Three.js with React Three Fiber
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **SEO**: React Helmet Async
- **Development**: ESLint, Vite HMR

## 🎨 Design System

- **Primary Colors**: White background with neon blue (#00D4FF) and cyan (#0EA5E9) accents
- **Typography**: Inter font family for clean, modern readability
- **Effects**: Glassmorphism cards, soft shadows, subtle gradients
- **Animation**: Scroll-triggered, hover effects, smooth page transitions
- **Layout**: Container max-width with responsive padding and spacing

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.jsx      # Navigation with glassmorphism
│   ├── ScrollProgress.jsx
│   ├── CursorGlow.jsx
│   ├── FloatingShapes.jsx
│   └── Hero3DBackground.jsx
├── sections/           # Page sections
│   ├── Hero.jsx        # Hero with 3D background
│   ├── About.jsx       # Professional summary
│   ├── Skills.jsx      # Technical skills with progress bars
│   ├── Projects.jsx    # Case study style project cards
│   ├── Experience.jsx  # Animated timeline
│   ├── Leadership.jsx  # Leadership achievements
│   ├── Contact.jsx     # Contact form and info
│   └── Footer.jsx      # Footer with social links
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
├── assets/             # Static assets
├── index.css           # Global styles and Tailwind
├── App.jsx             # Main App component
└── main.jsx            # React entry point
```

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mrhimanshu/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
# Build optimized production bundle
npm run build

# Preview production build
npm run preview
```

## 🎯 Key Sections

### Hero Section
- Animated typing effect for headline
- 3D particle background with Three.js
- Statistics cards with glassmorphism
- Social links with hover animations

### About Section
- Professional journey narrative
- Key highlights with animated cards
- Statistics and achievements
- Responsive image gallery

### Skills Section
- Animated progress bars
- Categorized skill sets (Backend, Frontend, Database, Cloud)
- Interactive hover effects
- Technology badges

### Projects Section
- Case study style project cards
- Modal with detailed project information
- Technology stack badges
- Results and impact metrics

### Experience Section
- Vertical timeline with animations
- Company details and achievements
- Technology tags for each role
- Responsive timeline design

### Leadership Section
- Leadership philosophy and approach
- Team management statistics
- Awards and recognition
- Impact metrics and achievements

### Contact Section
- Interactive contact form
- Contact information cards
- Social media integration
- Real-time form validation

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:

```javascript
colors: {
  'neon-blue': '#00D4FF',    // Primary accent
  'cyan-500': '#0EA5E9',     // Secondary accent
  // Add your custom colors
}
```

### Animations
Modify animation settings in `src/index.css`:

```css
.glass {
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.18);
}
```

### Content
Update personal information in each section component:
- Personal details in `src/sections/Hero.jsx`
- Professional experience in `src/sections/Experience.jsx`
- Projects in `src/sections/Projects.jsx`

## 📱 Responsive Design

- **Mobile**: < 768px - Stacked layout, hamburger menu
- **Tablet**: 768px - 1024px - 2-column grid layouts
- **Desktop**: > 1024px - Full multi-column layouts
- **Large**: > 1280px - Enhanced spacing and typography

## ⚡ Performance Optimizations

- **Code Splitting**: Automatic route-based code splitting
- **Lazy Loading**: Components and images loaded on demand
- **Bundle Optimization**: Tree shaking and minification
- **Image Optimization**: WebP format with fallbacks
- **Caching**: Browser caching for static assets

## 🔧 Development Guidelines

### Code Style
- Use functional components with hooks
- Follow React best practices
- Implement proper error boundaries
- Write descriptive component names

### Animation Guidelines
- Use Framer Motion for component animations
- GSAP for complex scroll-triggered effects
- Maintain 60fps performance
- Respect `prefers-reduced-motion`

### Accessibility
- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- High contrast color ratios

## 📊 Browser Support

- **Chrome**: Latest 2 versions
- **Firefox**: Latest 2 versions
- **Safari**: Latest 2 versions
- **Edge**: Latest 2 versions

## 🚀 Deployment

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Configure custom domain if needed

### Vercel
1. Connect your GitHub repository
2. Vercel will automatically build and deploy
3. Configure environment variables if needed

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy script to package.json
3. Run: `npm run deploy`

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/AmazingFeature`
3. Commit your changes: `git commit -m 'Add some AmazingFeature'`
4. Push to the branch: `git push origin feature/AmazingFeature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Himanshu Sharma**
- Senior Software Engineer & Technical Team Lead
- 10+ Years Experience in Scalable Web Applications
- Backend Architecture & Cloud Deployments Expert

**Connect with me:**
- 💼 [LinkedIn](https://linkedin.com/in/himanshu-sharma)
- 🐱 [GitHub](https://github.com/mrhimanshu)
- 📧 [Email](mailto:himanshu.sharma@example.com)
- 📱 Phone: +91 98765 43210

---

⭐ **If you found this portfolio inspiring, please give it a star!** ⭐
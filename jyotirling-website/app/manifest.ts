import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Jyotirling.com - Sacred Journey Guide',
    short_name: 'Jyotirling.com',
    description: 'Your comprehensive guide to the 12 sacred Jyotirlinga temples of Lord Shiva across India',
    start_url: '/',
    display: 'standalone',
    background_color: '#8B0000',
    theme_color: '#D4AF37',
    orientation: 'portrait',
    scope: '/',
    lang: 'en',
    categories: ['spirituality', 'travel', 'religion', 'culture'],
    icons: [
      {
        src: '/icons/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icons/icon-256x256.png',
        sizes: '256x256',
        type: 'image/png',
      },
      {
        src: '/icons/icon-384x384.png',
        sizes: '384x384',
        type: 'image/png',
      },
      {
        src: '/icons/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
    ],
    shortcuts: [
      {
        name: '12 Jyotirlinga Map',
        short_name: 'Sacred Map',
        description: 'Interactive map of all 12 Jyotirlinga temples',
        url: '/#india-map',
        icons: [{ src: '/icons/map-icon.png', sizes: '96x96' }],
      },
      {
        name: 'All Temples',
        short_name: 'Temples',
        description: 'Browse all 12 Jyotirlinga temples',
        url: '/jyotirling',
        icons: [{ src: '/icons/temple-icon.png', sizes: '96x96' }],
      },
      {
        name: 'Somnath Temple',
        short_name: 'Somnath',
        description: 'Visit Somnath Jyotirlinga - The First Temple',
        url: '/jyotirling/somnath',
        icons: [{ src: '/icons/somnath-icon.png', sizes: '96x96' }],
      },
    ],
    screenshots: [
      {
        src: '/screenshots/desktop-homepage.png',
        type: 'image/png',
        sizes: '1280x720',
      },
      {
        src: '/screenshots/mobile-homepage.png',
        type: 'image/png',
        sizes: '375x667',
      },
    ],
    related_applications: [
      {
        platform: 'webapp',
        url: 'https://jyotirling.com/manifest.json',
      },
    ],
    prefer_related_applications: false,
  };
}
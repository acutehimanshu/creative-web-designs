'use client';

import React from 'react';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Theme = 'light' | 'dark' | 'system';

interface ThemeStore {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
  toggleTheme: () => void;
  initializeTheme: () => void;
}

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set, get) => ({
      theme: 'system',
      isDark: false,

      setTheme: (theme: Theme) => {
        set({ theme });
        
        // Apply theme immediately
        if (typeof window !== 'undefined') {
          const root = window.document.documentElement;
          
          if (theme === 'dark') {
            root.classList.add('dark');
            set({ isDark: true });
          } else if (theme === 'light') {
            root.classList.remove('dark');
            set({ isDark: false });
          } else {
            // System theme
            const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
            if (systemTheme) {
              root.classList.add('dark');
              set({ isDark: true });
            } else {
              root.classList.remove('dark');
              set({ isDark: false });
            }
          }
        }
      },

      setIsDark: (isDark: boolean) => {
        set({ isDark });
        
        if (typeof window !== 'undefined') {
          const root = window.document.documentElement;
          if (isDark) {
            root.classList.add('dark');
          } else {
            root.classList.remove('dark');
          }
        }
      },

      toggleTheme: () => {
        const { isDark, setTheme } = get();
        setTheme(isDark ? 'light' : 'dark');
      },

      initializeTheme: () => {
        if (typeof window !== 'undefined') {
          const { theme } = get();
          
          // Listen for system theme changes
          const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
          
          const handleChange = (e: MediaQueryListEvent) => {
            const { theme: currentTheme, setIsDark } = get();
            if (currentTheme === 'system') {
              setIsDark(e.matches);
            }
          };

          mediaQuery.addEventListener('change', handleChange);
          
          // Set initial theme
          if (theme === 'system') {
            get().setIsDark(mediaQuery.matches);
          } else {
            get().setTheme(theme);
          }

          // Cleanup function
          return () => mediaQuery.removeEventListener('change', handleChange);
        }
      },
    }),
    {
      name: 'jyotirling-theme-storage',
      partialize: (state) => ({ theme: state.theme }),
    }
  )
);

// Hook for theme initialization in components
export const useThemeInitializer = () => {
  const initializeTheme = useThemeStore((state) => state.initializeTheme);
  
  React.useEffect(() => {
    const cleanup = initializeTheme();
    return cleanup;
  }, [initializeTheme]);
};

// Custom hook for theme-aware animations
export const useThemeTransition = () => {
  const isDark = useThemeStore((state) => state.isDark);
  
  return {
    isDark,
    transitionClasses: 'transition-colors duration-300 ease-in-out',
    backgroundGradient: isDark 
      ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black'
      : 'bg-gradient-to-br from-white via-gray-50 to-gray-100',
    textGradient: isDark
      ? 'bg-gradient-to-r from-gold-400 to-gold-600'
      : 'bg-gradient-to-r from-primary-700 to-primary-900',
  };
};

// Theme utilities
export const getThemeClasses = (isDark: boolean) => ({
  background: isDark 
    ? 'bg-gray-900 text-white' 
    : 'bg-white text-gray-900',
  card: isDark 
    ? 'bg-gray-800 border-gray-700' 
    : 'bg-white border-gray-200',
  button: {
    primary: isDark 
      ? 'bg-primary-600 hover:bg-primary-700 text-white' 
      : 'bg-primary-700 hover:bg-primary-800 text-white',
    secondary: isDark 
      ? 'bg-gold-600 hover:bg-gold-700 text-black' 
      : 'bg-gold-500 hover:bg-gold-600 text-white',
  },
  input: isDark 
    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500',
  nav: isDark 
    ? 'bg-gray-900/90 backdrop-blur-md border-gray-800' 
    : 'bg-white/90 backdrop-blur-md border-gray-200',
});

// Animation variants for theme transitions
export const themeAnimationVariants = {
  light: {
    backgroundColor: '#ffffff',
    color: '#1f2937',
    transition: { duration: 0.3, ease: 'easeInOut' }
  },
  dark: {
    backgroundColor: '#111827',
    color: '#f9fafb',
    transition: { duration: 0.3, ease: 'easeInOut' }
  }
};
'use client'

import * as React from 'react'
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from 'next-themes'

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // Solo la primera vez, forzar lightmode ignorando el sistema
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme');
      if (!storedTheme) {
        localStorage.setItem('theme', 'light');
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
      }
    }
  }, []);
  // Evitar renderizar hasta que esté montado para evitar parpadeos
  if (!mounted) return null;
  return <NextThemesProvider {...props} enableSystem={false} defaultTheme="light">{children}</NextThemesProvider>;
}

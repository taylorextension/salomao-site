// Design Tokens - Sistema de design humanizado
export const tokens = {
  colors: {
    // Fundos
    sand: '#f5f1e8',
    sandDark: '#e8e0d0',
    white: '#ffffff',
    
    // Textos
    charcoal: '#2a2a2a',
    charcoalLight: '#3d3d3d',
    earth: '#8b7355',
    earthLight: '#a08060',
    
    // Destaques
    moss: '#4a5d4a',
    forest: '#2d3d2d',
    ocean: '#3d5a73',
    burnt: '#c75b39',
    sunset: '#d4a574',
    
    // Estados
    success: '#5a7d5a',
    error: '#b54a3d',
    warning: '#c9a050'
  },
  
  spacing: {
    xs: '0.25rem',    // 4px
    sm: '0.5rem',     // 8px
    md: '1rem',       // 16px
    lg: '1.5rem',     // 24px
    xl: '2rem',       // 32px
    '2xl': '3rem',    // 48px
    '3xl': '4rem',    // 64px
    '4xl': '6rem',    // 96px
    '5xl': '8rem'     // 128px
  },
  
  typography: {
    fontFamily: {
      serif: "'Crimson Text', Georgia, serif",
      sans: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
    },
    sizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '2rem',
      '4xl': '2.5rem',
      '5xl': '3rem',
      '6xl': '4rem'
    },
    weights: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700
    },
    lineHeights: {
      tight: 1.2,
      normal: 1.6,
      relaxed: 1.8
    }
  },
  
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px'
  },
  
  shadows: {
    sm: '0 1px 2px rgba(0,0,0,0.05)',
    md: '0 4px 6px rgba(0,0,0,0.07)',
    lg: '0 10px 40px rgba(0,0,0,0.1)',
    xl: '0 20px 60px rgba(0,0,0,0.15)'
  },
  
  radii: {
    none: '0',
    sm: '2px',
    md: '4px',
    lg: '8px',
    xl: '16px',
    full: '9999px'
  },
  
  transitions: {
    fast: '150ms ease',
    normal: '300ms ease',
    slow: '500ms ease'
  }
} as const

export type Tokens = typeof tokens

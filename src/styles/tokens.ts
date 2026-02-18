// Design Tokens - Estilo Tech/Moderno
export const tokens = {
  colors: {
    // Fundos - Dark tech
    bg: {
      primary: '#0a0f1a',
      secondary: '#111827',
      tertiary: '#1f2937',
      card: '#151b2b',
      hover: '#1e2538'
    },
    
    // Textos
    text: {
      primary: '#f9fafb',
      secondary: '#9ca3af',
      muted: '#6b7280',
      accent: '#22d3ee'
    },
    
    // Cores de destaque - Tech (sem roxo/lilás)
    accent: {
      cyan: '#22d3ee',
      blue: '#3b82f6',
      green: '#10b981',
      emerald: '#34d399'
    },
    
    // Estados
    success: '#10b981',
    error: '#ef4444',
    warning: '#f59e0b'
  },
  
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
    '4xl': '6rem'
  },
  
  typography: {
    fontFamily: {
      sans: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      mono: "'JetBrains Mono', 'Fira Code', monospace"
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
      '5xl': '3rem'
    },
    weights: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700
    }
  },
  
  shadows: {
    sm: '0 1px 2px rgba(0,0,0,0.3)',
    md: '0 4px 6px rgba(0,0,0,0.4)',
    lg: '0 10px 40px rgba(0,0,0,0.5)',
    glow: '0 0 20px rgba(34, 211, 238, 0.15)'
  },
  
  radii: {
    sm: '6px',
    md: '8px',
    lg: '12px',
    xl: '16px'
  }
}

export type Tokens = typeof tokens

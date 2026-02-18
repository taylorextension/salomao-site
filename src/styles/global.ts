import { tokens } from './tokens'

export const GlobalStyles = () => ({
  ':root': {
    // CSS Variables para fácil acesso
    '--color-sand': tokens.colors.sand,
    '--color-sand-dark': tokens.colors.sandDark,
    '--color-charcoal': tokens.colors.charcoal,
    '--color-earth': tokens.colors.earth,
    '--color-moss': tokens.colors.moss,
    '--color-forest': tokens.colors.forest,
    '--color-ocean': tokens.colors.ocean,
    '--color-burnt': tokens.colors.burnt,
    '--color-sunset': tokens.colors.sunset,
    
    '--font-serif': tokens.typography.fontFamily.serif,
    '--font-sans': tokens.typography.fontFamily.sans,
    
    '--space-xs': tokens.spacing.xs,
    '--space-sm': tokens.spacing.sm,
    '--space-md': tokens.spacing.md,
    '--space-lg': tokens.spacing.lg,
    '--space-xl': tokens.spacing.xl,
    '--space-2xl': tokens.spacing['2xl'],
    '--space-3xl': tokens.spacing['3xl'],
    
    '--shadow-sm': tokens.shadows.sm,
    '--shadow-md': tokens.shadows.md,
    '--shadow-lg': tokens.shadows.lg
  },
  
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box'
  },
  
  'html': {
    scrollBehavior: 'smooth',
    fontSize: '16px',
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale'
  },
  
  'body': {
    fontFamily: tokens.typography.fontFamily.sans,
    fontSize: tokens.typography.sizes.base,
    lineHeight: tokens.typography.lineHeights.normal,
    color: tokens.colors.charcoal,
    backgroundColor: tokens.colors.sand
  },
  
  'h1, h2, h3, h4, h5, h6': {
    fontFamily: tokens.typography.fontFamily.serif,
    fontWeight: tokens.typography.weights.semibold,
    lineHeight: tokens.typography.lineHeights.tight,
    color: tokens.colors.forest
  },
  
  'a': {
    color: 'inherit',
    textDecoration: 'none'
  },
  
  'img': {
    maxWidth: '100%',
    height: 'auto',
    display: 'block'
  },
  
  'button': {
    fontFamily: 'inherit',
    cursor: 'pointer',
    border: 'none',
    background: 'none'
  }
})

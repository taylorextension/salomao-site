import { tokens } from './tokens'

export const GlobalStyles = () => ({
  ':root': {
    '--color-bg-primary': tokens.colors.bg.primary,
    '--color-bg-secondary': tokens.colors.bg.secondary,
    '--color-bg-card': tokens.colors.bg.card,
    '--color-text-primary': tokens.colors.text.primary,
    '--color-text-secondary': tokens.colors.text.secondary,
    '--color-text-muted': tokens.colors.text.muted,
    '--color-accent-cyan': tokens.colors.accent.cyan,
    '--color-accent-blue': tokens.colors.accent.blue,
    '--font-sans': tokens.typography.fontFamily.sans,
    '--font-mono': tokens.typography.fontFamily.mono
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
    lineHeight: 1.6,
    color: tokens.colors.text.primary,
    backgroundColor: tokens.colors.bg.primary
  },
  
  'h1, h2, h3, h4, h5, h6': {
    fontWeight: tokens.typography.weights.bold,
    lineHeight: 1.2,
    color: tokens.colors.text.primary
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

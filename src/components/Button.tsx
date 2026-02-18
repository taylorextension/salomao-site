import { tokens } from '../styles/tokens'
import type { CSSProperties, ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  onClick?: () => void
  style?: CSSProperties
}

export const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  href,
  onClick,
  style
}: ButtonProps) => {
  const baseStyles: CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: tokens.spacing.sm,
    fontFamily: tokens.typography.fontFamily.sans,
    fontWeight: tokens.typography.weights.semibold,
    borderRadius: tokens.radii.md,
    transition: 'all 0.2s ease',
    cursor: 'pointer',
    border: 'none',
    textDecoration: 'none'
  }
  
  const sizeStyles = {
    sm: { padding: `${tokens.spacing.sm} ${tokens.spacing.md}`, fontSize: tokens.typography.sizes.sm },
    md: { padding: `${tokens.spacing.md} ${tokens.spacing.lg}`, fontSize: tokens.typography.sizes.base },
    lg: { padding: `${tokens.spacing.lg} ${tokens.spacing.xl}`, fontSize: tokens.typography.sizes.lg }
  }
  
  const variantStyles = {
    primary: {
      background: 'linear-gradient(135deg, #22d3ee 0%, #3b82f6 100%)',
      color: 'white',
      boxShadow: '0 4px 20px rgba(34, 211, 238, 0.3)'
    },
    secondary: {
      backgroundColor: 'transparent',
      color: tokens.colors.accent.cyan,
      border: '1px solid rgba(34, 211, 238, 0.3)'
    },
    ghost: {
      backgroundColor: 'transparent',
      color: tokens.colors.text.secondary
    }
  }
  
  const combinedStyles = {
    ...baseStyles,
    ...sizeStyles[size],
    ...variantStyles[variant],
    ...style
  }
  
  if (href) {
    return (
      <a href={href} style={combinedStyles}>
        {children}
      </a>
    )
  }
  
  return (
    <button onClick={onClick} style={combinedStyles}>
      {children}
    </button>
  )
}

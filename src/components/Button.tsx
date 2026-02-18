import { tokens } from '../styles/tokens'
import type { CSSProperties } from 'react'

interface ButtonProps {
  children: React.ReactNode
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
    fontWeight: tokens.typography.weights.medium,
    borderRadius: tokens.radii.sm,
    transition: `all ${tokens.transitions.normal}`,
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
      backgroundColor: tokens.colors.forest,
      color: tokens.colors.sand,
      ':hover': { backgroundColor: tokens.colors.moss }
    },
    secondary: {
      backgroundColor: 'transparent',
      color: tokens.colors.earth,
      border: `1px solid ${tokens.colors.earth}`,
      ':hover': { backgroundColor: tokens.colors.earth, color: tokens.colors.sand }
    },
    ghost: {
      backgroundColor: 'transparent',
      color: tokens.colors.forest,
      ':hover': { backgroundColor: tokens.colors.sandDark }
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

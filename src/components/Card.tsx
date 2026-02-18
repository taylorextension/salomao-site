import { tokens } from '../styles/tokens'
import type { CSSProperties, ReactNode } from 'react'

interface CardProps {
  children?: ReactNode
  icon?: ReactNode
  title: string
  description: string
  style?: CSSProperties
}

export const Card = ({ children, icon, title, description, style }: CardProps) => {
  const cardStyles: CSSProperties = {
    backgroundColor: tokens.colors.white,
    padding: tokens.spacing.xl,
    border: `1px solid ${tokens.colors.sandDark}`,
    borderRadius: tokens.radii.sm,
    transition: `all ${tokens.transitions.normal}`,
    ...style
  }
  
  const iconStyles: CSSProperties = {
    width: '48px',
    height: '48px',
    marginBottom: tokens.spacing.lg,
    color: tokens.colors.forest
  }
  
  const titleStyles: CSSProperties = {
    fontFamily: tokens.typography.fontFamily.serif,
    fontSize: tokens.typography.sizes['2xl'],
    fontWeight: tokens.typography.weights.semibold,
    color: tokens.colors.forest,
    marginBottom: tokens.spacing.sm
  }
  
  const descStyles: CSSProperties = {
    fontSize: tokens.typography.sizes.base,
    color: tokens.colors.earth,
    lineHeight: tokens.typography.lineHeights.relaxed
  }
  
  return (
    <div style={cardStyles} className="feature-card">
      {icon && <div style={iconStyles}>{icon}</div>}
      <h3 style={titleStyles}>{title}</h3>
      <p style={descStyles}>{description}</p>
      {children}
    </div>
  )
}

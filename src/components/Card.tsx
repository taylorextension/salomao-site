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
    backgroundColor: tokens.colors.bg.card,
    padding: tokens.spacing.lg,
    border: '1px solid rgba(34, 211, 238, 0.1)',
    borderRadius: tokens.radii.lg,
    transition: 'all 0.2s ease',
    ...style
  }
  
  const titleStyles: CSSProperties = {
    fontSize: tokens.typography.sizes.lg,
    fontWeight: tokens.typography.weights.semibold,
    color: tokens.colors.text.primary,
    marginBottom: tokens.spacing.sm,
    marginTop: icon ? tokens.spacing.md : 0
  }
  
  const descStyles: CSSProperties = {
    fontSize: tokens.typography.sizes.sm,
    color: tokens.colors.text.secondary,
    lineHeight: 1.6
  }
  
  return (
    <div style={cardStyles} className="feature-card">
      {icon}
      <h3 style={titleStyles}>{title}</h3>
      <p style={descStyles}>{description}</p>
      {children}
    </div>
  )
}

import React from 'react'

interface CardProps {
  children: React.ReactNode
  className?: string
  variant?: 'elevated' | 'outlined'
}

export function Card({
  children,
  className = '',
  variant = 'elevated',
}: CardProps) {
  const variantStyle =
    variant === 'elevated'
      ? 'bg-white shadow-md hover:shadow-lg'
      : 'bg-white border border-neutral-200'

  return (
    <div
      className={`
        rounded-xl
        transition-shadow duration-200
        ${variantStyle}
        ${className}
      `}
    >
      {children}
    </div>
  )
}

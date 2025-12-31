import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

interface SectionHeaderProps {
  label?: string
  title: string
  description?: string | ReactNode
  align?: 'left' | 'center'
  dark?: boolean
  className?: string
}

export function SectionHeader({
  label,
  title,
  description,
  align = 'center',
  dark = false,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn(
      'mb-12',
      align === 'center' && 'text-center',
      className
    )}>
      {label && (
        <p className={cn(
          'text-sm font-medium tracking-wide uppercase mb-3',
          dark ? 'text-white/60' : 'text-primary'
        )}>
          {label}
        </p>
      )}
      <h2 className={cn(
        'text-2xl sm:text-3xl font-semibold tracking-tight',
        dark ? 'text-white' : 'text-gray-900'
      )}>
        {title}
      </h2>
      {description && (
        <p className={cn(
          'mt-4 text-lg leading-relaxed',
          align === 'center' && 'max-w-2xl mx-auto',
          dark ? 'text-white/70' : 'text-gray-600'
        )}>
          {description}
        </p>
      )}
    </div>
  )
}

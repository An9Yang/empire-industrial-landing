import { cn } from '@/lib/utils'
import { forwardRef, type HTMLAttributes } from 'react'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'outline' | 'ghost'
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', children, ...props }, ref) => {
    const variants = {
      default: 'bg-white rounded-xl shadow-sm',
      outline: 'bg-white rounded-xl border border-gray-200',
      ghost: 'bg-white/5 backdrop-blur-sm rounded-xl border border-white/10',
    }

    return (
      <div
        ref={ref}
        className={cn(variants[variant], className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'

const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('p-6', className)} {...props} />
  )
)
CardContent.displayName = 'CardContent'

export { Card, CardContent }

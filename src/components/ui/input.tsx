import type { ComponentProps } from 'react'
import { cn } from '@/lib/utils'

type InputProps = ComponentProps<'input'>

export function Input({ type, className, ...props }: InputProps) {
  return (
    <input
      type={type}
      className={cn(
        'px-3 py-2 bg-transparent border border-zinc-300 rounded-md text-base text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-600',
        className,
      )}
      {...props}
    />
  )
}

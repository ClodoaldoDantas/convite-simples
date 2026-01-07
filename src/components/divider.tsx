import { cn } from '@/lib/utils'

type DividerProps = {
  children?: React.ReactNode
  className?: string
}

export function Divider({ children, className }: DividerProps) {
  return (
    <div className="inline-flex items-center justify-center w-full">
      <hr className={cn('w-72 h-px my-8 bg-zinc-200 border-0', className)} />

      <span className="absolute px-3 font-medium text-heading -translate-x-1/2 bg-white left-1/2">
        {children}
      </span>
    </div>
  )
}

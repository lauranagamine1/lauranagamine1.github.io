import { cn } from '@/lib/cn'

interface ChipProps {
  label: string
  className?: string
}

/** Small rounded tag used for skills, technologies and interests. */
export function Chip({ label, className }: ChipProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1.5 text-xs font-medium',
        'ring-1 ring-inset ring-white/60 transition-colors duration-300',
        className,
      )}
    >
      {label}
    </span>
  )
}

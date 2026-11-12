type IconProps = { className?: string }

export function ArrowUpRight({ className = '' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 18 18 6M8 6h10v10" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

export function ArrowLeft({ className = '' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="m15 6-6 6 6 6" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

export function ArrowRight({ className = '' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="m9 6 6 6-6 6" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

export function SearchIcon({ className = '' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="1.5" />
      <path d="m16 16 4 4" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

export function CloseIcon({ className = '' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 6 18 18M18 6 6 18" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

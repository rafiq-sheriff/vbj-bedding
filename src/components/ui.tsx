import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'
import { ArrowUpRight } from './icons'

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p className={`eyebrow ${light ? 'text-[var(--ivory)]/80' : 'text-[var(--cocoa)]'}`}>
      {children}
    </p>
  )
}

export function TextLink({
  href,
  children,
  light = false,
  className = '',
}: {
  href: string
  children: ReactNode
  light?: boolean
  className?: string
}) {
  const isExternal = href.startsWith('http://') || href.startsWith('https://')
  const classes = `text-link ${light ? 'text-[var(--ivory)]' : ''} ${className}`.trim()

  if (isExternal) {
    return (
      <a className={classes} href={href} target="_blank" rel="noopener noreferrer">
        <span>{children}</span>
        <ArrowUpRight className="size-4" />
      </a>
    )
  }

  return (
    <Link className={classes} href={href}>
      <span>{children}</span>
      <ArrowUpRight className="size-4" />
    </Link>
  )
}

export function EditorialImage({
  src,
  alt,
  className = '',
  priority = false,
  sizes = '100vw',
}: {
  src: string
  alt: string
  className?: string
  priority?: boolean
  sizes?: string
}) {
  return (
    <div className={`image-wrap ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.025]"
      />
    </div>
  )
}

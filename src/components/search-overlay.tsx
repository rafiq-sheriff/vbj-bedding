'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useMemo, useRef, useState } from 'react'
import { categoryMeta, products, type CategoryKey } from '@/lib/site-data'
import { ArrowUpRight, CloseIcon, SearchIcon } from './icons'

const quickLinks = [
  { label: 'Beds & Headboards', href: '/collections/beds', meta: 'Collection' },
  { label: 'Sofas & Seating', href: '/collections/sofas', meta: 'Collection' },
  { label: 'Curtains & Sheers', href: '/collections/curtains', meta: 'Collection' },
  { label: 'Our Story', href: '/about', meta: 'Atelier' },
  { label: 'Visit & Enquire', href: '/contact', meta: 'Chennai Showroom' },
]

export function SearchOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!open) {
      setQuery('')
      return
    }
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const timer = window.setTimeout(() => inputRef.current?.focus(), 40)

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.clearTimeout(timer)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open, onClose])

  const filteredProducts = useMemo(() => {
    const term = query.trim().toLowerCase()
    if (!term) return products.slice(0, 6)
    return products.filter((item) => {
      const categoryLabel = categoryMeta[item.category as CategoryKey].label.toLowerCase()
      return (
        item.label.toLowerCase().includes(term) ||
        item.note.toLowerCase().includes(term) ||
        item.description.toLowerCase().includes(term) ||
        categoryLabel.includes(term)
      )
    })
  }, [query])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[200] flex items-start justify-center bg-[var(--espresso)]/65 px-4 pt-16 pb-8 backdrop-blur-md sm:px-8 sm:pt-24"
      role="dialog"
      aria-modal="true"
      aria-label="Search collections and pieces"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <div className="w-full max-w-3xl overflow-hidden border border-[var(--espresso)]/15 bg-[var(--ivory)] text-[var(--espresso)] shadow-2xl">
        <div className="flex items-center gap-3 border-b border-[var(--espresso)]/15 px-5 py-4 sm:px-7">
          <SearchIcon className="size-5 shrink-0 text-[var(--cocoa)]" />
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search beds, sofas, curtains, sheers…"
            aria-label="Search pieces and collections"
            className="w-full bg-transparent py-1 text-base text-[var(--espresso)] placeholder:text-[var(--muted)] focus:outline-none"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close search"
            className="grid size-9 shrink-0 place-items-center text-[var(--espresso)]/75 transition-colors hover:text-[var(--espresso)]"
          >
            <CloseIcon className="size-5" />
          </button>
        </div>

        <div className="max-h-[70vh] overflow-y-auto p-5 sm:p-7">
          {!query.trim() && (
            <div className="mb-8">
              <p className="eyebrow mb-4 text-[var(--cocoa)]">QUICK LINKS</p>
              <div className="flex flex-wrap gap-2.5">
                {quickLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    className="inline-flex items-center gap-2 border border-[var(--espresso)]/20 px-3.5 py-2 text-xs tracking-[0.08em] uppercase transition-colors hover:border-[var(--espresso)] hover:bg-[var(--sand)]"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="size-3.5" />
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div>
            <p className="eyebrow mb-4 text-[var(--cocoa)]">
              {query.trim()
                ? `${filteredProducts.length} MATCHING ${filteredProducts.length === 1 ? 'PIECE' : 'PIECES'}`
                : 'CURATED PIECES'}
            </p>
            {filteredProducts.length === 0 ? (
              <div className="border border-[var(--espresso)]/12 bg-[var(--sand)]/50 p-8 text-center">
                <p className="font-serif text-2xl">No matching pieces found.</p>
                <p className="mt-2 text-sm text-[var(--muted)]">
                  Explore our bespoke options or share what you are looking for with our Chennai
                  team.
                </p>
                <Link href="/contact" onClick={onClose} className="text-link mt-5 inline-flex">
                  <span>Request a custom piece</span>
                  <ArrowUpRight className="size-4" />
                </Link>
              </div>
            ) : (
              <div className="grid gap-3 sm:grid-cols-2">
                {filteredProducts.map((product) => (
                  <Link
                    key={product.slug}
                    href={`/products/${product.slug}`}
                    onClick={onClose}
                    className="group flex items-center gap-4 border border-[var(--espresso)]/10 bg-white/40 p-3 transition-colors hover:border-[var(--espresso)]/30 hover:bg-[var(--sand)]/60"
                  >
                    <div className="relative size-16 shrink-0 overflow-hidden bg-[var(--sand)]">
                      <Image
                        src={product.image}
                        alt={product.label}
                        fill
                        sizes="64px"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[0.62rem] font-semibold tracking-[0.16em] text-[var(--cocoa)] uppercase">
                        {categoryMeta[product.category].label}
                      </p>
                      <p className="truncate font-serif text-xl text-[var(--espresso)]">
                        {product.label}
                      </p>
                      <p className="truncate text-xs text-[var(--muted)]">{product.note}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

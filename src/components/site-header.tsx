'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { SearchIcon } from './icons'
import { SearchOverlay } from './search-overlay'

const links = [
  ['Home', '/'],
  ['Beds', '/collections/beds'],
  ['Sofas', '/collections/sofas'],
  ['Curtains & Sheers', '/collections/curtains'],
  ['Our Story', '/about'],
] as const

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const hasImageHero = pathname === '/' || pathname.startsWith('/collections/')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!open) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    <>
      <header className={`site-header ${scrolled || open || !hasImageHero ? 'is-solid' : ''}`}>
        <Link href="/" className="wordmark" aria-label="VBJ Bedding home">
          VBJ <span>BEDDING</span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([label, href]) => {
            const active = pathname === href
            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? 'page' : undefined}
                className={active ? 'is-active' : undefined}
              >
                {label}
              </Link>
            )
          })}
        </nav>
        <div className="header-actions">
          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            aria-label="Search collections and pieces"
            className="search-link"
          >
            <SearchIcon className="size-5" />
          </button>
          <Link href="/contact" className="enquire-link">
            Enquire
          </Link>
          <button
            type="button"
            className="menu-toggle"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-navigation-drawer"
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span />
          </button>
        </div>
        <div
          id="mobile-navigation-drawer"
          className={`mobile-menu ${open ? 'is-open' : ''}`}
          aria-hidden={!open}
        >
          <nav aria-label="Mobile navigation">
            {links.map(([label, href], index) => {
              const active = pathname === href
              return (
                <Link
                  key={href}
                  href={href}
                  tabIndex={open ? 0 : -1}
                  aria-current={active ? 'page' : undefined}
                  onClick={() => setOpen(false)}
                >
                  <small>0{index + 1}</small>
                  {label}
                </Link>
              )
            })}
            <Link
              href="/contact"
              tabIndex={open ? 0 : -1}
              aria-current={pathname === '/contact' ? 'page' : undefined}
              onClick={() => setOpen(false)}
            >
              <small>06</small>
              Contact
            </Link>
          </nav>
          <div className="mt-8 flex items-center justify-between gap-4">
            <p className="text-xs text-[var(--muted)]">Considered comfort. Timeless character.</p>
            <button
              type="button"
              tabIndex={open ? 0 : -1}
              onClick={() => {
                setOpen(false)
                setSearchOpen(true)
              }}
              className="inline-flex items-center gap-2 border border-[var(--espresso)]/25 px-3.5 py-2 text-xs tracking-[0.1em] uppercase"
            >
              <SearchIcon className="size-4" />
              <span>Search</span>
            </button>
          </div>
        </div>
      </header>
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  )
}

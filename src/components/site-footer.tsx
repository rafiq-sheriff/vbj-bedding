import Link from 'next/link'
import { TextLink } from './ui'

export function SiteFooter() {
  return (
    <footer className="bg-[var(--espresso)] px-5 pb-8 pt-20 text-[var(--ivory)] md:px-10 lg:px-16 lg:pt-28">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-14 border-b border-white/15 pb-16 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Link href="/" className="font-serif text-4xl tracking-[-0.03em]">
              VBJ <span className="font-sans text-sm tracking-[0.28em]">BEDDING</span>
            </Link>
            <p className="mt-6 max-w-sm text-lg text-white/75">
              Considered comfort. Timeless character.
            </p>
            <p className="mt-4 max-w-sm text-xs leading-relaxed text-white/55">
              Bespoke beds, upholstered seating, and tailored window styling crafted for interiors
              in Chennai.
            </p>
          </div>
          <div className="grid content-start gap-3.5 text-sm text-white/80">
            <p className="mb-2 text-xs tracking-[0.2em] text-white/60">EXPLORE</p>
            <Link href="/collections/beds" className="transition-colors hover:text-white">
              Beds &amp; Headboards
            </Link>
            <Link href="/collections/sofas" className="transition-colors hover:text-white">
              Sofas &amp; Seating
            </Link>
            <Link href="/collections/curtains" className="transition-colors hover:text-white">
              Curtains &amp; Sheers
            </Link>
            <Link href="/about" className="transition-colors hover:text-white">
              Our Story
            </Link>
          </div>
          <div className="grid content-start gap-3.5 text-sm text-white/80">
            <p className="mb-2 text-xs tracking-[0.2em] text-white/60">CONNECT</p>
            <Link href="/contact" className="transition-colors hover:text-white">
              Showroom &amp; Enquiries
            </Link>
            <a
              href="https://www.instagram.com/vbjbedding/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              Instagram (@vbjbedding)
            </a>
            <a
              href="https://share.google/RROVuf38XkOUEtIJm"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              Google Business Profile
            </a>
            <div className="pt-2">
              <TextLink href="/contact" light>
                Start an enquiry
              </TextLink>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 pt-7 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} VBJ Bedding. All rights reserved.</p>
          <p>Chennai, Tamil Nadu, India</p>
          <Link href="/privacy" className="transition-colors hover:text-white">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  )
}

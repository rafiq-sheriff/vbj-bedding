'use client'

import Link from 'next/link'

export default function FrontendError({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <section className="flex min-h-[75vh] flex-col items-center justify-center bg-[var(--ivory)] px-5 py-24 text-center">
      <p className="eyebrow text-[var(--cocoa)]">SOMETHING WENT WRONG</p>
      <h1 className="mt-5 font-serif text-5xl md:text-7xl">We couldn&apos;t load this page.</h1>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-[var(--muted)]">
        Please try refreshing this view or return to the homepage to continue exploring our
        collections.
      </p>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
        <button
          type="button"
          onClick={() => reset()}
          className="border border-[var(--espresso)] bg-[var(--espresso)] px-6 py-3 text-xs tracking-[0.14em] text-[var(--ivory)] uppercase transition-colors hover:bg-[var(--cocoa)]"
        >
          Try again
        </button>
        <Link className="text-link" href="/">
          Return home
        </Link>
      </div>
    </section>
  )
}

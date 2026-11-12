import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-[var(--sand)] px-5 text-center">
      <p className="eyebrow text-[var(--cocoa)]">404 / NOT FOUND</p>
      <h1 className="mt-5 font-serif text-6xl md:text-8xl">This room is still empty.</h1>
      <Link className="text-link mt-10" href="/">
        Return home
      </Link>
    </section>
  )
}

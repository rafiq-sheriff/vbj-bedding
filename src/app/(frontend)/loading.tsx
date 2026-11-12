export default function FrontendLoading() {
  return (
    <div
      className="flex min-h-[70vh] items-center justify-center bg-[var(--ivory)] px-5"
      aria-busy="true"
      aria-live="polite"
    >
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="h-px w-16 animate-pulse bg-[var(--cocoa)]" />
        <p className="eyebrow text-[var(--cocoa)]">VBJ BEDDING</p>
      </div>
    </div>
  )
}


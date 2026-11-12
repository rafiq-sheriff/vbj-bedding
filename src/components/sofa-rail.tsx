'use client'

import Link from 'next/link'
import { useCallback, useEffect, useRef, useState } from 'react'
import type { Product } from '@/lib/site-data'
import { ArrowLeft, ArrowRight } from './icons'
import { EditorialImage, Eyebrow, TextLink } from './ui'

export function SofaRail({ products }: { products: Product[] }) {
  const railRef = useRef<HTMLDivElement>(null)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(products.length > 1)

  const updateScrollState = useCallback(() => {
    const rail = railRef.current
    if (!rail) return
    const maxScroll = rail.scrollWidth - rail.clientWidth
    setCanPrev(rail.scrollLeft > 8)
    setCanNext(rail.scrollLeft < maxScroll - 8)
  }, [])

  useEffect(() => {
    updateScrollState()
    window.addEventListener('resize', updateScrollState)
    return () => window.removeEventListener('resize', updateScrollState)
  }, [updateScrollState])

  const scrollBySlide = (direction: -1 | 1) => {
    const rail = railRef.current
    if (!rail) return
    const step = Math.max(rail.clientWidth * 0.65, 320)
    rail.scrollBy({ left: direction * step, behavior: 'smooth' })
  }

  return (
    <>
      <div className="section-shell sofa-gallery-header">
        <div className="gallery-heading">
          <Eyebrow>SOFAS &amp; SOFA CHAIRS</Eyebrow>
          <h2>
            Crafted to <em>gather.</em>
          </h2>
          <div className="gallery-nav" role="group" aria-label="Scroll sofa gallery">
            <button
              type="button"
              onClick={() => scrollBySlide(-1)}
              disabled={!canPrev}
              aria-label="Previous sofa design"
            >
              <ArrowLeft />
            </button>
            <button
              type="button"
              onClick={() => scrollBySlide(1)}
              disabled={!canNext}
              aria-label="Next sofa design"
            >
              <ArrowRight />
            </button>
          </div>
          <div className="gallery-explore">
            <TextLink href="/collections/sofas">Explore All Sofas &amp; Seating</TextLink>
          </div>
        </div>
      </div>
      <div
        ref={railRef}
        onScroll={updateScrollState}
        className="sofa-rail"
        role="region"
        aria-label="Sofas and seating collection"
      >
        {products.map((product, index) => (
          <article
            key={product.slug}
            className={`sofa-slide group ${index === 1 ? 'is-wide' : ''}`}
          >
            <Link href={`/products/${product.slug}`}>
              <EditorialImage
                src={product.image}
                alt={product.label}
                className="sofa-slide-image"
                sizes="(min-width: 1024px) 56vw, 86vw"
              />
              <div className="product-label">
                <div>
                  <p>{product.label}</p>
                  <span>{product.note}</span>
                </div>
                <small>{String(index + 1).padStart(2, '0')}</small>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </>
  )
}

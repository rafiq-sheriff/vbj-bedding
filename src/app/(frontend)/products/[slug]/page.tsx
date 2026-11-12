import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { EditorialImage, Eyebrow, TextLink } from '@/components/ui'
import { categoryMeta, products } from '@/lib/site-data'

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const product = products.find((item) => item.slug === slug)
  if (!product) return {}
  const category = categoryMeta[product.category]
  return {
    title: product.label,
    description: `${product.note}. ${product.description}`,
    openGraph: {
      title: `${product.label} | ${category.label} | VBJ Bedding`,
      description: product.description,
      images: [product.image],
    },
  }
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = products.find((item) => item.slug === slug)
  if (!product) notFound()
  const category = categoryMeta[product.category]
  const related = products.filter(
    (item) => item.category === product.category && item.slug !== slug,
  )

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.label,
    description: product.description,
    category: category.label,
    image: product.image,
    brand: {
      '@type': 'Brand',
      name: 'VBJ Bedding',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <section className="product-detail">
        <div className="product-gallery">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href={`/collections/${product.category}`}>{category.label}</Link>
            <span aria-hidden="true">/</span>
            <span>{product.label}</span>
          </nav>
          <EditorialImage
            src={product.image}
            alt={product.label}
            className="aspect-[4/5] lg:h-[880px]"
            sizes="(min-width: 1024px) 58vw, 100vw"
            priority
          />
          <EditorialImage
            src={product.detailImage}
            alt={`Detail view for ${product.label}`}
            className="aspect-[4/3]"
            sizes="(min-width: 1024px) 58vw, 100vw"
          />
        </div>
        <aside className="product-info">
          <div>
            <Eyebrow>{category.eyebrow}</Eyebrow>
            <h1>{product.label}</h1>
            <p className="text-base leading-relaxed text-[var(--espresso)]">{product.note}.</p>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{product.description}</p>
            <ul className="mt-6 space-y-2.5 border-t border-[var(--espresso)]/12 pt-6 text-xs leading-relaxed text-[var(--muted)]">
              {product.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-2.5">
                  <span
                    className="mt-1.5 inline-block size-1.5 shrink-0 rounded-full bg-[var(--cocoa)]"
                    aria-hidden="true"
                  />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="product-meta">
            {product.specs.map((spec) => (
              <div key={spec.label}>
                <span>{spec.label.toUpperCase()}</span>
                <p>{spec.value}</p>
              </div>
            ))}
          </div>
          <div className="grid gap-5">
            <div className="flex flex-wrap items-center gap-6">
              <TextLink
                href={`/contact?interest=${product.category}&product=${encodeURIComponent(product.label)}#enquiry-form`}
              >
                Enquire About This Piece
              </TextLink>
              <Link
                href={`/collections/${product.category}`}
                className="text-xs tracking-[0.12em] text-[var(--muted)] uppercase underline underline-offset-4 transition-colors hover:text-[var(--espresso)]"
              >
                All {category.label}
              </Link>
            </div>
            <p className="text-xs leading-relaxed text-[var(--muted)]">
              Crafted to order in bespoke dimensions and curated upholstery finishes. Contact our
              Chennai team for fabric swatches and guidance.
            </p>
          </div>
        </aside>
      </section>
      {related.length > 0 && (
        <section className="related-products section-shell border-t border-[var(--espresso)]/12">
          <Eyebrow>RELATED FORMS</Eyebrow>
          <h2>Continue exploring.</h2>
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            {related.slice(0, 2).map((item) => (
              <Link key={item.slug} href={`/products/${item.slug}`} className="group block">
                <EditorialImage
                  src={item.image}
                  alt={item.label}
                  className="aspect-[4/3]"
                  sizes="(min-width: 768px) 45vw, 100vw"
                />
                <div className="mt-4 flex items-baseline justify-between gap-4">
                  <div>
                    <p className="font-serif text-2xl text-[var(--espresso)]">{item.label}</p>
                    <p className="mt-1 text-xs text-[var(--muted)]">{item.note}</p>
                  </div>
                  <span className="shrink-0 text-[0.65rem] tracking-[0.1em] uppercase underline underline-offset-4">
                    View details
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  )
}

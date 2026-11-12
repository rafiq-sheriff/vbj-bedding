import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { EditorialImage, Eyebrow, TextLink } from '@/components/ui'
import { categoryMeta, products, type CategoryKey } from '@/lib/site-data'

export function generateStaticParams() {
  return Object.keys(categoryMeta).map((category) => ({ category }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>
}): Promise<Metadata> {
  const { category } = await params
  if (!(category in categoryMeta)) return {}
  const meta = categoryMeta[category as CategoryKey]
  return {
    title: `${meta.label} — ${meta.title}`,
    description: meta.intro,
    openGraph: {
      title: `${meta.title} | VBJ Bedding`,
      description: meta.intro,
      images: [meta.image],
    },
  }
}

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ category: string }>
}) {
  const { category } = await params
  if (!(category in categoryMeta)) notFound()
  const key = category as CategoryKey
  const meta = categoryMeta[key]
  const items = products.filter((product) => product.category === key)
  const categories = Object.entries(categoryMeta) as [
    CategoryKey,
    (typeof categoryMeta)[CategoryKey],
  ][]

  return (
    <>
      <section className="collection-hero">
        <Image
          src={meta.image}
          alt={`${meta.title} collection`}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="collection-hero-overlay" />
        <div>
          <Eyebrow light>{meta.eyebrow}</Eyebrow>
          <h1>{meta.title}</h1>
          <p>{meta.intro}</p>
        </div>
      </section>
      <section className="collection-body section-shell">
        <nav className="breadcrumb mb-8" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span>{meta.label}</span>
        </nav>

        <div className="collection-toolbar">
          <p>
            {items.length} CURATED {items.length === 1 ? 'PIECE' : 'PIECES'} · CUSTOMISABLE TO ORDER
          </p>
          <div className="collection-tabs" role="navigation" aria-label="Switch collection">
            {categories.map(([catKey, catInfo]) => (
              <Link
                key={catKey}
                href={`/collections/${catKey}`}
                aria-current={catKey === key ? 'page' : undefined}
                className={catKey === key ? 'is-active' : undefined}
              >
                {catInfo.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="product-grid">
          {items.map((product, index) => (
            <article key={product.slug} className={`product-card group product-card-${index + 1}`}>
              <Link href={`/products/${product.slug}`}>
                <EditorialImage
                  src={product.image}
                  alt={product.label}
                  className={index % 2 === 0 ? 'aspect-[4/5]' : 'aspect-[5/4]'}
                  sizes="(min-width: 768px) 46vw, 100vw"
                />
                <div className="product-card-copy">
                  <div>
                    <h2>{product.label}</h2>
                    <p>{product.note}</p>
                  </div>
                  <span>View details</span>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="collection-enquire">
          <Eyebrow>NEED A CLOSER LOOK?</Eyebrow>
          <h2>
            Explore the possibilities
            <br />
            for your space.
          </h2>
          <TextLink href={`/contact?interest=${key}#enquiry-form`}>Make an Enquiry</TextLink>
        </div>
      </section>
    </>
  )
}

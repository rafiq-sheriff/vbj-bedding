import type { Metadata } from 'next'
import { EditorialImage, Eyebrow, TextLink } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Our Story',
  description:
    'Discover the VBJ Bedding design philosophy—upholstered beds, sofas, and layered window styling in Chennai.',
  openGraph: {
    title: 'Our Story | VBJ Bedding',
    description:
      'Furniture, furnishings and window styling for warm, expressive and deeply comfortable interiors.',
    images: ['/images/sofa-room.jpg'],
  },
}

export default function AboutPage() {
  return (
    <>
      <section className="about-hero">
        <div>
          <Eyebrow>OUR STORY</Eyebrow>
          <h1>
            Comfort,
            <br />
            <em>with character.</em>
          </h1>
        </div>
        <p>
          VBJ Bedding brings together furniture, furnishings and window styling for interiors that
          feel warm, expressive and deeply comfortable.
        </p>
      </section>
      <section className="about-image">
        <EditorialImage
          src="/images/sofa-room.jpg"
          alt="Refined living room with coordinated upholstered furniture"
          className="h-[70vh] min-h-[560px]"
          sizes="(min-width: 1024px) 92vw, 100vw"
          priority
        />
      </section>
      <section className="about-story section-shell">
        <div>
          <Eyebrow>THE FEELING OF HOME</Eyebrow>
          <h2>
            Design begins with
            <br />
            how a room should feel.
          </h2>
        </div>
        <div className="space-y-8 text-base leading-8 text-[var(--muted)]">
          <p>
            Our point of view is grounded in tactile comfort, balanced proportions and pieces that
            give a room its own quiet identity. Every fabric weave, pleat and silhouette is chosen
            to soften architectural lines and invite everyday ease.
          </p>
          <p>
            From bespoke upholstered beds and generously proportioned sofas to layered curtains and
            daylight sheers, our Chennai team helps you compose cohesive interiors tailored to your
            home.
          </p>
          <TextLink href="/contact">Start an Enquiry</TextLink>
        </div>
      </section>
      <section className="about-categories">
        {[
          [
            '01',
            'Rest',
            'Beds and headboards composed for retreat.',
            '/images/bedroom-sculptural.jpg',
            '/collections/beds',
          ],
          [
            '02',
            'Gather',
            'Sofas and seating shaped around living.',
            '/images/sofa-warm.jpg',
            '/collections/sofas',
          ],
          [
            '03',
            'Soften',
            'Curtains and sheers that frame the light.',
            '/images/curtain-room.jpg',
            '/collections/curtains',
          ],
        ].map(([number, title, copy, image, href]) => (
          <article key={title} className="group">
            <EditorialImage
              src={image}
              alt={`${title} category`}
              className="aspect-[4/5]"
              sizes="(min-width: 1024px) 30vw, 100vw"
            />
            <span>{number}</span>
            <h2>{title}</h2>
            <p>{copy}</p>
            <TextLink href={href}>Explore</TextLink>
          </article>
        ))}
      </section>
    </>
  )
}

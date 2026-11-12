import Image from 'next/image'
import Link from 'next/link'
import { EnquiryForm } from '@/components/enquiry-form'
import { ArrowUpRight } from '@/components/icons'
import { SofaRail } from '@/components/sofa-rail'
import { EditorialImage, Eyebrow, TextLink } from '@/components/ui'
import { homeApproachPillars, homeLookbookItems, homeSpecialties, products } from '@/lib/site-data'

const sofaProducts = products.filter((product) => product.category === 'sofas')

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <Image
          src="/images/hero-lounge.webp"
          alt="Curved ivory upholstered modular sofa with dark trim, matching ottoman, patterned cushions and sheer window curtains"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <Eyebrow light>BEDS · SOFAS · SOFA CHAIRS · CURTAINS &amp; SHEERS</Eyebrow>
          <h1>
            Crafted for comfort.
            <br />
            <em>Tailored to your home.</em>
          </h1>
          <div className="hero-lower">
            <p>
              From bespoke upholstered beds and sofas to sculptural sofa chairs and layered window
              drapery—crafted to order in Chennai for interiors that feel unmistakably yours.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <TextLink href="#specialties" light>
                Explore Our Craft
              </TextLink>
              <TextLink href="#enquire" light>
                Start a Consultation
              </TextLink>
            </div>
          </div>
        </div>
      </section>

      <section id="specialties" className="section-shell specialties-section">
        <div className="section-intro reveal">
          <Eyebrow>OUR SPECIALTIES</Eyebrow>
          <h2>Four craft disciplines, one cohesive home.</h2>
          <p className="section-intro-copy">
            We specialise in custom-made beds, sofas, sofa chairs and window treatments—bringing
            form, upholstery and drapery together under one roof.
          </p>
        </div>

        <div className="specialties-grid">
          {homeSpecialties.map((item) => (
            <article key={item.number} className="specialty-card group reveal">
              <Link href={item.href} className="block">
                <EditorialImage
                  src={item.image}
                  alt={item.alt}
                  className="aspect-[16/10]"
                  sizes="(min-width: 768px) 46vw, 100vw"
                />
                <div className="specialty-card-body">
                  <div className="specialty-card-meta">
                    <span>
                      {item.number} / {item.tag}
                    </span>
                    <ArrowUpRight className="size-4" />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <span className="specialty-card-cta">{item.cta}</span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="featured-bed">
        <div className="group">
          <EditorialImage
            src="/images/bedroom-detail.jpg"
            alt="Layered bedroom styling with a custom upholstered bed in soft neutral tones"
            className="h-[64vh] min-h-[500px] lg:h-[820px]"
            sizes="(min-width: 1024px) 62vw, 100vw"
          />
        </div>
        <div className="featured-copy reveal">
          <Eyebrow>THE BEDROOM EDIT</Eyebrow>
          <h2>
            Your own kind
            <br />
            of <em>retreat.</em>
          </h2>
          <p>
            Our upholstered beds combine cushioned architectural headboards with solid framing and
            breathable fabrics—built to anchor your bedroom with calm, lasting support.
          </p>
          <ul className="feature-highlights">
            <li>Queen, King &amp; custom bedroom dimensions</li>
            <li>Soft neutral linens, velvet channels &amp; woven finishes</li>
            <li>Coordinated bench seating and drapery pairings</li>
          </ul>
          <TextLink href="/collections/beds">Discover Bed Designs</TextLink>
          <EditorialImage
            src="/images/fabric-sand.jpg"
            alt="Close-up of a warm sand woven upholstery textile"
            className="mt-12 aspect-[4/3] w-2/3 self-end"
            sizes="(min-width: 1024px) 22vw, 50vw"
          />
        </div>
      </section>

      <section className="sofa-section">
        <SofaRail products={sofaProducts} />
      </section>

      <section className="material-story">
        <div className="material-header reveal">
          <div>
            <Eyebrow>MATERIALS &amp; TAILORING</Eyebrow>
            <h2>
              Trust is built in
              <br />
              the <em>details.</em>
            </h2>
          </div>
          <p>
            From inner cushioning and seam precision to rich upholstery weaves, every material is
            chosen for how it looks today and how it feels years from now.
          </p>
        </div>
        <div className="material-grid">
          <figure className="material-card reveal">
            <EditorialImage
              src="/images/fabric-cocoa.jpg"
              alt="Close-up of cocoa-toned woven upholstery texture"
              className="aspect-[4/5]"
              sizes="(min-width: 768px) 30vw, 100vw"
            />
            <figcaption>
              <span>01 / UPHOLSTERY WEAVE</span>
              <p>
                Textured cocoa and earth-toned fabrics chosen for tactile warmth and durability.
              </p>
            </figcaption>
          </figure>
          <figure className="material-card reveal">
            <EditorialImage
              src="/images/fabric-sand.jpg"
              alt="Close-up of warm sand textile finish"
              className="aspect-[4/5]"
              sizes="(min-width: 768px) 30vw, 100vw"
            />
            <figcaption>
              <span>02 / TONAL PALETTE</span>
              <p>Calm ivories, sands and stones that transition gracefully from day to evening.</p>
            </figcaption>
          </figure>
          <figure className="material-card reveal">
            <EditorialImage
              src="/images/sofa-light.jpg"
              alt="Light-toned living room with tailored seating"
              className="aspect-[4/5]"
              sizes="(min-width: 768px) 30vw, 100vw"
            />
            <figcaption>
              <span>03 / FINISHED FORM</span>
              <p>Clean seam lines and balanced cushion proportions tailored to your space.</p>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="window-story">
        <div className="window-image group">
          <EditorialImage
            src="/images/curtain-room.jpg"
            alt="Bedroom window dressed with softly layered curtains and sheers"
            className="h-[66vh] min-h-[560px] lg:h-[860px]"
            sizes="(min-width: 1024px) 60vw, 100vw"
          />
        </div>
        <div className="window-copy reveal">
          <Eyebrow>CURTAINS &amp; SHEERS</Eyebrow>
          <h2>
            Let the light
            <br />
            find its <em>place.</em>
          </h2>
          <p>
            Custom-tailored curtains and sheers soften architectural edges, regulate natural light
            and frame every room with quiet movement from ceiling track to floor.
          </p>
          <ul className="feature-highlights">
            <li>Dual-layer sheer and lined drapery configurations</li>
            <li>Ripple fold, pinch pleat &amp; custom track headings</li>
            <li>Optional dim-out and blackout bedroom linings</li>
          </ul>
          <TextLink href="/collections/curtains">Explore Window Treatments</TextLink>
          <div className="window-detail">
            <EditorialImage
              src="/images/curtain-sheer.jpg"
              alt="Detail of softly folded sheer curtain fabric"
              className="aspect-square"
              sizes="280px"
            />
            <span>LIGHT / LAYER / FOLD</span>
          </div>
        </div>
      </section>

      <section className="approach">
        <div className="approach-top">
          <div>
            <Eyebrow light>WHY HOMEOWNERS &amp; DESIGNERS CHOOSE US</Eyebrow>
            <h2>
              Crafted with honesty.
              <br />
              <em>Built for everyday living.</em>
            </h2>
            <p className="approach-lead">
              Every bed, sofa, sofa chair and curtain panel is made around how you actually
              live—with careful framing, curated fabrics and personal accountability from our
              Chennai team.
            </p>
          </div>
          <EditorialImage
            src="/images/sofa-room.jpg"
            alt="Refined neutral living space furnished with custom seating"
            className="aspect-[4/3]"
            sizes="(min-width: 1024px) 38vw, 100vw"
          />
        </div>

        <div className="principles">
          {homeApproachPillars.map((pillar) => (
            <article key={pillar.title}>
              <span>{pillar.number}</span>
              <h3>{pillar.title}</h3>
              <p>{pillar.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="inspiration section-shell">
        <div className="inspiration-heading">
          <div>
            <Eyebrow>RECENT INTERIORS</Eyebrow>
            <h2>
              Rooms from
              <br />
              <em>our world.</em>
            </h2>
          </div>
          <a
            href="https://www.instagram.com/vbjbedding/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            Follow @vbjbedding
          </a>
        </div>
        <div className="inspiration-lookbook">
          {homeLookbookItems.map((item) => (
            <figure
              key={item.caption}
              className={`lookbook-card group ${item.wide ? 'lookbook-wide' : ''}`}
            >
              <Link href={item.href}>
                <EditorialImage
                  src={item.image}
                  alt={item.alt}
                  className={
                    item.wide ? 'aspect-[16/9] md:h-full md:aspect-auto' : 'aspect-[16/10]'
                  }
                  sizes={
                    item.wide ? '(min-width: 768px) 62vw, 100vw' : '(min-width: 768px) 32vw, 100vw'
                  }
                />
                <figcaption>{item.caption}</figcaption>
              </Link>
            </figure>
          ))}
        </div>
      </section>

      <section className="visit-section">
        <div className="visit-inner">
          <Eyebrow light>VISIT OUR CHENNAI SHOWROOM</Eyebrow>
          <h2>
            Experience every weave
            <br />
            in <em>person.</em>
          </h2>
          <p>
            Explore custom upholstery swatches, cushion densities and window drapery finishes with
            our team in Chennai.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <TextLink href="/contact" light>
              Plan Your Visit
            </TextLink>
            <TextLink href="#enquire" light>
              Request a Callback
            </TextLink>
          </div>
          <a
            href="https://share.google/RROVuf38XkOUEtIJm"
            target="_blank"
            rel="noopener noreferrer"
            className="verification-link"
          >
            View verified showroom details on Google
          </a>
        </div>
      </section>

      <section className="enquiry-section" id="enquire">
        <div className="enquiry-container">
          <div className="enquiry-intro">
            <Eyebrow>PERSONAL CONSULTATION</Eyebrow>
            <h2>
              Let&apos;s bring your
              <br />
              room <em>together.</em>
            </h2>
            <p>
              Tell us whether you are furnishing a bedroom, living room or full residence—our
              Chennai team will follow up with sizing guidance, fabric pairings and timelines.
            </p>
            <div className="enquiry-preview group">
              <EditorialImage
                src="/images/sofa-emerald.webp"
                alt="Emerald velvet curved sofa with brass architectural detailing"
                className="aspect-[16/10]"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
            <div className="enquiry-facts">
              <div>
                <span>SHOWROOM</span>
                <p>Chennai, Tamil Nadu, India</p>
              </div>
              <div>
                <span>SPECIALTIES</span>
                <p>Beds, Sofas, Sofa Chairs &amp; Curtains</p>
              </div>
            </div>
          </div>
          <div className="enquiry-panel">
            <Eyebrow>START A CONVERSATION</Eyebrow>
            <h3>Tell us what you have in mind.</h3>
            <p>
              Share your room dimensions or preferred piece and we&apos;ll help you explore options.
            </p>
            <EnquiryForm />
            <p className="mt-6 text-xs leading-relaxed text-[var(--muted)]">
              Looking for directions? Visit our{' '}
              <a
                href="https://share.google/RROVuf38XkOUEtIJm"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-[var(--espresso)]"
              >
                Google Business Profile
              </a>{' '}
              or connect on{' '}
              <a
                href="https://www.instagram.com/vbjbedding/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-[var(--espresso)]"
              >
                Instagram
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

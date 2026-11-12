import type { Metadata } from 'next'
import { EnquiryForm } from '@/components/enquiry-form'
import { EditorialImage, Eyebrow, TextLink } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Contact & Visit',
  description:
    'Enquire about bespoke beds, sofas, and curtains or plan a visit to VBJ Bedding in Chennai, India.',
  openGraph: {
    title: 'Contact & Visit | VBJ Bedding',
    description: 'Start a bespoke furniture or window styling enquiry with our Chennai team.',
    images: ['/images/bedroom-detail.jpg'],
  },
}

export default function ContactPage() {
  return (
    <>
      <section className="contact-hero">
        <div>
          <Eyebrow>CONTACT / VISIT</Eyebrow>
          <h1>
            Let&apos;s create a room
            <br />
            <em>that feels like you.</em>
          </h1>
        </div>
        <p>
          Tell us what you have in mind and the VBJ team can help you explore tailored dimensions,
          upholstery fabrics and window treatments.
        </p>
      </section>
      <section className="contact-layout" id="enquiry-form">
        <div className="contact-image">
          <EditorialImage
            src="/images/bedroom-detail.jpg"
            alt="Warmly layered bedroom interior"
            className="h-full min-h-[620px]"
            sizes="(min-width: 1024px) 45vw, 100vw"
            priority
          />
        </div>
        <div className="contact-form-wrap">
          <Eyebrow>PRODUCT ENQUIRY</Eyebrow>
          <h2>Begin with an idea.</h2>
          <EnquiryForm />
        </div>
      </section>
      <section className="contact-details section-shell">
        <div>
          <Eyebrow>VISIT VBJ BEDDING</Eyebrow>
          <h2>Chennai, India</h2>
          <p className="mt-6 max-w-md leading-relaxed text-[var(--muted)]">
            Visit our Chennai showroom or send an enquiry to arrange a private fabric and sizing
            consultation for your home or interior project.
          </p>
        </div>
        <div className="contact-lines">
          <div>
            <span>LOCATION</span>
            <p>Chennai, Tamil Nadu, India</p>
          </div>
          <div>
            <span>SHOWROOM DIRECTIONS &amp; HOURS</span>
            <p>
              View verified directions, contact details and opening hours on our Google Business
              Profile.
            </p>
          </div>
          <div>
            <span>CONSULTATIONS</span>
            <p>
              Bespoke beds, sofas, curtains &amp; sheers — arranged via enquiry or showroom visit
            </p>
          </div>
          <div className="flex flex-wrap gap-8 pt-2">
            <TextLink href="https://share.google/RROVuf38XkOUEtIJm">
              View Business Details on Google
            </TextLink>
            <TextLink href="https://www.instagram.com/vbjbedding/">Instagram</TextLink>
          </div>
        </div>
      </section>
    </>
  )
}

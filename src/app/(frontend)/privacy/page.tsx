import type { Metadata } from 'next'
import Link from 'next/link'
import { Eyebrow } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How VBJ Bedding handles and protects enquiry information submitted on our website.',
}

export default function PrivacyPage() {
  return (
    <section className="legal-page section-shell">
      <Eyebrow>PRIVACY</Eyebrow>
      <h1>Privacy Policy</h1>
      <div className="legal-grid">
        <div className="space-y-6">
          <div>
            <h2 className="mb-2 font-serif text-2xl text-[var(--espresso)]">
              Information We Collect
            </h2>
            <p>
              When you submit an enquiry, VBJ Bedding receives the details you provide so our
              Chennai team can respond to your request. This includes your name, phone number,
              optional email address, category of interest and project message.
            </p>
          </div>
          <div>
            <h2 className="mb-2 font-serif text-2xl text-[var(--espresso)]">
              How We Use Your Details
            </h2>
            <p>
              Your contact details are used solely to discuss product options, dimensions,
              upholstery selections or showroom appointments related to your enquiry. We do not sell
              or rent personal information to third parties.
            </p>
          </div>
        </div>
        <div className="space-y-6">
          <div>
            <h2 className="mb-2 font-serif text-2xl text-[var(--espresso)]">
              Data Storage &amp; Security
            </h2>
            <p>
              Enquiry submissions are stored securely in the website&apos;s private content
              management system with restricted administrative access and are never displayed
              publicly on the site.
            </p>
          </div>
          <div>
            <h2 className="mb-2 font-serif text-2xl text-[var(--espresso)]">
              Your Rights &amp; Contact
            </h2>
            <p>
              You may request access to, correction of, or deletion of your submitted enquiry
              details at any time by reaching out via our{' '}
              <Link href="/contact" className="text-[var(--espresso)] underline underline-offset-4">
                contact page
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

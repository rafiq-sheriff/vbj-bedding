import React from 'react'
import type { Metadata } from 'next'
import Script from 'next/script'
import { Cormorant_Garamond, Manrope } from 'next/font/google'
import { BodyCustomCode, renderHeadCustomCode } from '@/lib/make-custom-code'
import { makeSiteSettings, sanitizeHtmlAttribute } from '@/lib/make-site-settings'
import './styles.css'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

const serif = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-serif',
})

const sans = Manrope({
  subsets: ['latin'],
  variable: '--font-sans',
})

const defaultTitle = 'VBJ Bedding — Considered Comfort'
const title = makeSiteSettings.title ?? defaultTitle
const description =
  makeSiteSettings.description ??
  'Bespoke upholstered beds, sofas, curtains and sheers for thoughtfully styled interiors in Chennai.'
const favicon = makeSiteSettings.icons?.icon
const socialImage = makeSiteSettings.openGraph?.image
const googleAnalyticsId = sanitizeHtmlAttribute(makeSiteSettings.analytics?.googleAnalyticsId)
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: '%s | VBJ Bedding',
  },
  description,
  keywords: [
    'VBJ Bedding',
    'luxury beds Chennai',
    'upholstered beds',
    'bespoke sofas Chennai',
    'curtains and sheers',
    'window styling Chennai',
    'interior furnishings',
  ],
  robots: makeSiteSettings.robots?.index === false ? { follow: false, index: false } : undefined,
  icons: favicon ? { icon: favicon } : undefined,
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'VBJ Bedding',
    title,
    description,
    images: socialImage ? [socialImage] : ['/images/bedroom-hero.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: socialImage ? [socialImage] : ['/images/bedroom-hero.jpg'],
  },
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FurnitureStore',
  name: 'VBJ Bedding',
  description,
  url: siteUrl,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Chennai',
    addressRegion: 'Tamil Nadu',
    addressCountry: 'IN',
  },
  sameAs: ['https://www.instagram.com/vbjbedding/', 'https://share.google/RROVuf38XkOUEtIJm'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const language = sanitizeHtmlAttribute(makeSiteSettings.language) || 'en'
  const addBypassLinks = makeSiteSettings.accessibility?.addBypassLinks === true
  const customScripts = makeSiteSettings.customScripts

  return (
    <html lang={language} className={`${serif.variable} ${sans.variable}`}>
      <head>
        {renderHeadCustomCode(customScripts?.headStart, 'head-start')}
        {renderHeadCustomCode(customScripts?.headEnd, 'head-end')}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[var(--ivory)] text-[var(--charcoal)] antialiased">
        <BodyCustomCode html={customScripts?.bodyStart} />
        {addBypassLinks && (
          <a className="figma-bypass-link" href="#main-content">
            Skip to content
          </a>
        )}
        <div id="root" tabIndex={-1}>
          <SiteHeader />
          <main id="main-content">{children}</main>
          <SiteFooter />
        </div>
        {googleAnalyticsId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
              strategy="afterInteractive"
            />
            <Script id="figma-google-analytics" strategy="afterInteractive">
              {`
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', ${JSON.stringify(googleAnalyticsId)});
`}
            </Script>
          </>
        )}
        <BodyCustomCode html={customScripts?.bodyEnd} />
      </body>
    </html>
  )
}

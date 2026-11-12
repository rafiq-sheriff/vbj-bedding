export type CategoryKey = 'beds' | 'sofas' | 'curtains'

export type ProductSpec = {
  label: string
  value: string
}

export type Product = {
  slug: string
  category: CategoryKey
  label: string
  note: string
  description: string
  highlights: string[]
  specs: ProductSpec[]
  image: string
  detailImage: string
}

export const products: Product[] = [
  {
    slug: 'soft-architectural-bed',
    category: 'beds',
    label: 'Soft architectural bed',
    note: 'Upholstered bed and statement headboard',
    description:
      'Defined by quiet architectural proportions and a generously cushioned headboard, this upholstered bed anchors the bedroom with warmth and poise. Tailored in tactile neutral textiles that soften morning and evening light.',
    highlights: [
      'Full-height upholstered statement headboard with soft edge detailing',
      'Tailored platform surround crafted for visual calm and everyday comfort',
      'Customisable upholstery tones across woven linens, cottons and bouclé',
      'Bespoke sizing tailored to your bedroom layout',
    ],
    specs: [
      { label: 'Category', value: 'Beds & Headboards' },
      { label: 'Sizing', value: 'Queen, King & custom dimensions on enquiry' },
      { label: 'Upholstery', value: 'Curated neutral weaves and tactile finishes' },
      { label: 'Consultation', value: 'Available via showroom visit or private enquiry' },
    ],
    image: '/images/bedroom-hero.jpg',
    detailImage: '/images/bedroom-detail.jpg',
  },
  {
    slug: 'sculptural-upholstered-bed',
    category: 'beds',
    label: 'Sculptural upholstered bed',
    note: 'A softly framed bedroom composition',
    description:
      'Gentle curves meet structured support in a bedroom centrepiece designed around rest. Designed to pair effortlessly with layered throws, crisp bedding and warm ambient lighting.',
    highlights: [
      'Gently contoured headboard silhouette for relaxed evening lounging',
      'Balanced low-to-mid profile suited to serene contemporary bedrooms',
      'Wide selection of warm ivory, sand and earth-toned fabrics',
      'Coordinated bedside and soft-furnishing pairing available',
    ],
    specs: [
      { label: 'Category', value: 'Beds & Headboards' },
      { label: 'Sizing', value: 'Queen, King & custom dimensions on enquiry' },
      { label: 'Upholstery', value: 'Sand, stone and cocoa-toned textile options' },
      { label: 'Consultation', value: 'Available via showroom visit or private enquiry' },
    ],
    image: '/images/bedroom-sculptural.jpg',
    detailImage: '/images/fabric-sand.jpg',
  },
  {
    slug: 'layered-neutral-bed',
    category: 'beds',
    label: 'Layered neutral bed',
    note: 'Tailored comfort with tonal textile depth',
    description:
      'Composed for tactile serenity, combining a clean upholstered base with deeply inviting headboard cushioning. Ideal for bedrooms where soft texture and tonal harmony lead the room.',
    highlights: [
      'Clean-lined upholstered frame with refined seam detailing',
      'Deeply padded headboard built for supportive upright comfort',
      'Pairs naturally with sheer and lined drapery compositions',
      'Crafted to order in your preferred textile weight and shade',
    ],
    specs: [
      { label: 'Category', value: 'Beds & Headboards' },
      { label: 'Sizing', value: 'Queen, King & custom dimensions on enquiry' },
      { label: 'Upholstery', value: 'Breathable natural blends and textured weaves' },
      { label: 'Consultation', value: 'Available via showroom visit or private enquiry' },
    ],
    image: '/images/bedroom-detail.jpg',
    detailImage: '/images/bedroom-hero.jpg',
  },
  {
    slug: 'warm-lounge-sofa',
    category: 'sofas',
    label: 'Warm lounge sofa',
    note: 'A relaxed, generously proportioned form',
    description:
      'Deep seating and inviting cushions come together in a living room silhouette made for unhurried conversation. Balanced proportions bring grounded elegance to both intimate and open-plan spaces.',
    highlights: [
      'Generous seat depth designed for effortless everyday lounging',
      'Softly structured armrests with tailored upholstery lines',
      'Customisable length and cushion firmness to suit your home',
      'Rich cocoa, taupe and warm neutral upholstery options',
    ],
    specs: [
      { label: 'Category', value: 'Sofas & Seating' },
      { label: 'Configuration', value: 'Three-seater, two-seater or bespoke length' },
      { label: 'Upholstery', value: 'Textured wovens, performance weaves & linens' },
      { label: 'Consultation', value: 'Available via showroom visit or private enquiry' },
    ],
    image: '/images/sofa-warm.jpg',
    detailImage: '/images/fabric-cocoa.jpg',
  },
  {
    slug: 'contemporary-sectional',
    category: 'sofas',
    label: 'Contemporary sectional',
    note: 'Low-profile seating for open rooms',
    description:
      'A modular living composition shaped to anchor spacious interiors without visual heaviness. Clean low lines keep sightlines open while offering expansive comfort for family and guests.',
    highlights: [
      'Flexible L-shape and modular layouts adapted to room flow',
      'Low architectural profile that preserves natural light and openness',
      'Plush back cushions paired with supportive seat tailoring',
      'Available in left-hand, right-hand or bespoke chaise orientations',
    ],
    specs: [
      { label: 'Category', value: 'Sofas & Seating' },
      { label: 'Configuration', value: 'Modular sectional tailored to room plan' },
      { label: 'Upholstery', value: 'Curated neutral and warm-earth textiles' },
      { label: 'Consultation', value: 'Available via showroom visit or private enquiry' },
    ],
    image: '/images/sofa-room.jpg',
    detailImage: '/images/sofa-sculptural.jpg',
  },
  {
    slug: 'quiet-curve-sofa',
    category: 'sofas',
    label: 'Quiet curve sofa',
    note: 'Sculptural seating in a soft neutral palette',
    description:
      'Softly rounded contours turn everyday seating into a sculptural focal point. Crafted to soften architectural corners and introduce effortless grace into modern living rooms.',
    highlights: [
      'Fluid curved silhouette crafted for conversational seating arrangements',
      'Smoothly upholstered back allowing graceful placement mid-room',
      'Supple tactile finishes that highlight subtle shifts in daylight',
      'Tailored proportions scaled for apartments and residences alike',
    ],
    specs: [
      { label: 'Category', value: 'Sofas & Seating' },
      { label: 'Configuration', value: 'Curved statement sofa in custom widths' },
      { label: 'Upholstery', value: 'Bouclé, brushed cotton and soft woven blends' },
      { label: 'Consultation', value: 'Available via showroom visit or private enquiry' },
    ],
    image: '/images/sofa-sculptural.jpg',
    detailImage: '/images/sofa-light.jpg',
  },
  {
    slug: 'minimal-linen-sofa',
    category: 'sofas',
    label: 'Minimal linen sofa',
    note: 'Airy tailoring in pale sunlit neutrals',
    description:
      'Crisp proportions softened by relaxed, breathable upholstery create a serene centerpiece for light-filled living spaces. Designed with understated poise that complements natural wood and stone.',
    highlights: [
      'Light visual footprint with refined, uncluttered tailoring',
      'Soft ivory and oatmeal tones suited to sun-drenched rooms',
      'Removable or tailored cushion styling depending on preference',
      'Custom fabric selection from our showroom textile library',
    ],
    specs: [
      { label: 'Category', value: 'Sofas & Seating' },
      { label: 'Configuration', value: 'Custom widths and seating depths available' },
      { label: 'Upholstery', value: 'Linen-look weaves and breathable neutrals' },
      { label: 'Consultation', value: 'Available via showroom visit or private enquiry' },
    ],
    image: '/images/sofa-light.jpg',
    detailImage: '/images/fabric-sand.jpg',
  },
  {
    slug: 'layered-window-treatment',
    category: 'curtains',
    label: 'Layered window treatment',
    note: 'Floor-length drapery with a sheer inner layer',
    description:
      'Two complementary textile layers work in quiet harmony—filtering harsh glare through an inner sheer while offering fullness, acoustic softness and evening privacy through tailored outer drapery.',
    highlights: [
      'Dual-track composition pairing translucent sheers with lined drapes',
      'Made-to-measure floor-to-ceiling drops for clean vertical lines',
      'Tailored pleat headings including ripple fold and pinch pleat',
      'Measured and styled around your window architecture',
    ],
    specs: [
      { label: 'Category', value: 'Curtains & Sheers' },
      { label: 'Styling', value: 'Dual-layer sheer and privacy drapery' },
      { label: 'Heading Options', value: 'Wave / ripple fold, pinch pleat & custom tracks' },
      { label: 'Consultation', value: 'Custom sizing and fabric guidance on enquiry' },
    ],
    image: '/images/curtain-room.jpg',
    detailImage: '/images/curtain-sheer.jpg',
  },
  {
    slug: 'soft-daylight-sheers',
    category: 'curtains',
    label: 'Soft daylight sheers',
    note: 'Translucent layers that gently frame the light',
    description:
      'Airy, finely woven sheers that diffuse bright tropical daylight into a calm, luminous glow while maintaining daytime privacy and effortless movement in the breeze.',
    highlights: [
      'Translucent weave engineered to soften harsh glare without darkening',
      'Fluid drape with weighted hems for a clean vertical fall',
      'Warm ivory, parchment and alabaster tonal variations',
      'Ideal standalone treatment or base layer beneath heavier curtains',
    ],
    specs: [
      { label: 'Category', value: 'Curtains & Sheers' },
      { label: 'Styling', value: 'Full-height daylight diffusing sheer' },
      { label: 'Textile Feel', value: 'Lightweight, airy drape with subtle slub texture' },
      { label: 'Consultation', value: 'Custom sizing and fabric guidance on enquiry' },
    ],
    image: '/images/curtain-light.jpg',
    detailImage: '/images/curtain-sheer.jpg',
  },
  {
    slug: 'tailored-drapery-folds',
    category: 'curtains',
    label: 'Tailored drapery folds',
    note: 'Crisp pleats and tactile woven movement',
    description:
      'Precision-pleated drapery crafted to bring architectural rhythm and acoustic warmth to bedrooms and living rooms. Designed to puddle lightly or kiss the floor with bespoke accuracy.',
    highlights: [
      'Uniform ripple and tailored pleat construction for clean folds',
      'Optional blackout or dim-out lining for restful bedrooms',
      'Coordinated fabric tones designed to complement beds and sofas',
      'Custom width and ceiling-recessed or wall-mounted hardware support',
    ],
    specs: [
      { label: 'Category', value: 'Curtains & Sheers' },
      { label: 'Styling', value: 'Custom-pleated drapery with optional lining' },
      { label: 'Finish', value: 'Tailored hem and concealed stitchwork' },
      { label: 'Consultation', value: 'Custom sizing and fabric guidance on enquiry' },
    ],
    image: '/images/curtain-sheer.jpg',
    detailImage: '/images/curtain-room.jpg',
  },
]

export const categoryMeta: Record<
  CategoryKey,
  { title: string; eyebrow: string; intro: string; image: string; label: string }
> = {
  beds: {
    label: 'Beds',
    title: 'The Bedroom Edit',
    eyebrow: 'BEDS & HEADBOARDS',
    intro: 'Upholstered forms and considered details for a room that feels entirely your own.',
    image: '/images/bedroom-hero.jpg',
  },
  sofas: {
    label: 'Sofas',
    title: 'Find Your Form',
    eyebrow: 'SOFAS & SEATING',
    intro: 'Relaxed silhouettes, rich texture and seating composed around the way you live.',
    image: '/images/sofa-room.jpg',
  },
  curtains: {
    label: 'Curtains & Sheers',
    title: 'A Study in Light',
    eyebrow: 'CURTAINS & SHEERS',
    intro: 'Layered window styling that brings softness, privacy and balance to a room.',
    image: '/images/curtain-room.jpg',
  },
}

export type HomeSpecialty = {
  number: string
  tag: string
  title: string
  description: string
  image: string
  alt: string
  href: string
  cta: string
}

export type HomeApproachPillar = {
  number: string
  title: string
  copy: string
}

export type HomeLookbookItem = {
  caption: string
  image: string
  alt: string
  href: string
  wide?: boolean
}

export const homeSpecialties: HomeSpecialty[] = [
  {
    number: '01',
    tag: 'BEDROOM',
    title: 'Upholstered Beds',
    description:
      'Sculpted channel-tufted headboards and tailored upholstered frames engineered for quiet poise and restorative sleep.',
    image: '/images/hero-vbj.webp',
    alt: 'Bespoke channel-tufted upholstered bed with warm backlit arch headboard',
    href: '/collections/beds',
    cta: 'Explore Beds',
  },
  {
    number: '02',
    tag: 'LIVING',
    title: 'Bespoke Sofas & Sectionals',
    description:
      'Tailored curved lounges, diamond-quilted sectionals and deep-seated sofas proportioned for everyday gathering.',
    image: '/images/sofa-quilted.webp',
    alt: 'Charcoal diamond-quilted luxury corner sectional sofa in a tailored living room',
    href: '/collections/sofas',
    cta: 'Explore Sofas',
  },
  {
    number: '03',
    tag: 'ACCENT SEATING',
    title: 'Sofa Chairs & Suites',
    description:
      'Plush armchairs, lounge recliners and matching sofa chair suites crafted to anchor living rooms and reading corners.',
    image: '/images/sofa-suite-chairs.webp',
    alt: 'Matched charcoal 3-seater sofa and pair of plush sofa chairs in a sunlit living room',
    href: '/collections/sofas',
    cta: 'Explore Seating',
  },
  {
    number: '04',
    tag: 'WINDOW STYLING',
    title: 'Curtains & Sheers',
    description:
      'Made-to-measure floor-length drapery and translucent sheers that balance daylight, softness and privacy.',
    image: '/images/curtain-light.jpg',
    alt: 'Translucent floor-length curtains filtering soft daylight',
    href: '/collections/curtains',
    cta: 'Explore Window Styling',
  },
]

export const homeApproachPillars: HomeApproachPillar[] = [
  {
    number: '01',
    title: 'Tailored Comfort & Proportions',
    copy: 'Custom bed headboards, sofa seat depths and ceiling-to-floor curtain drops crafted around your room plan and lasting posture support.',
  },
  {
    number: '02',
    title: 'One Unified Fabric Library',
    copy: 'Coordinate tactile linens, bouclés, velvets and sheer drapery across beds, sofas and sofa chairs from a single curated palette.',
  },
  {
    number: '03',
    title: 'Guided From Swatch to Install',
    copy: 'Direct support from our Chennai showroom—from room measurement and fabric selection through crafting, quality checks and installation.',
  },
]

export const homeLookbookItems: HomeLookbookItem[] = [
  {
    caption: '01 / STATEMENT SOFAS',
    image: '/images/sofa-emerald.webp',
    alt: 'Emerald velvet curved sofa with sculptural brass architectural frame',
    href: '/collections/sofas',
    wide: true,
  },
  {
    caption: '02 / CURTAINS & SHEERS',
    image: '/images/curtain-room.jpg',
    alt: 'Layered floor-length curtains and sheer drapery framing a bedroom window',
    href: '/collections/curtains',
  },
  {
    caption: '03 / QUILTED SECTIONALS',
    image: '/images/sofa-quilted.webp',
    alt: 'Charcoal diamond-quilted corner sectional sofa with tailored upholstery',
    href: '/collections/sofas',
  },
  {
    caption: '04 / SOFA & CHAIR SUITES',
    image: '/images/sofa-suite-chairs.webp',
    alt: 'Matching plush sofa and twin lounge sofa chairs in a contemporary room',
    href: '/collections/sofas',
  },
  {
    caption: '05 / UPHOLSTERED BEDS',
    image: '/images/hero-vbj.webp',
    alt: 'Sculpted channel-tufted upholstered bed with backlit arch headboard',
    href: '/collections/beds',
  },
]

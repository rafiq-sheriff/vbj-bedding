import type { MetadataRoute } from 'next'
import { categoryMeta, products } from '@/lib/site-data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000').replace(/\/$/, '')
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ]

  const categoryRoutes: MetadataRoute.Sitemap = Object.keys(categoryMeta).map((category) => ({
    url: `${baseUrl}/collections/${category}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.9,
  }))

  const productRoutes: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${baseUrl}/products/${product.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticRoutes, ...categoryRoutes, ...productRoutes]
}


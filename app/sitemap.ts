import type { MetadataRoute } from 'next'
import { siteUrl } from '@/content/seo'

const routes = [
  { path: '', priority: 1 },
  { path: '/servicios', priority: 0.9 },
  { path: '/portfolio', priority: 0.8 },
  { path: '/sobre-mi', priority: 0.7 },
  { path: '/contacto', priority: 0.9 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return routes.map((r) => ({
    url: `${siteUrl}${r.path}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: r.priority,
  }))
}

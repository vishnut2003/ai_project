import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://ailawgpt.com',
      lastModified: new Date(),
    },
    {
      url: 'https://ailawgpt.com/blogs',
      lastModified: new Date(),
    },
    {
      url: 'https://ailawgpt.com/contact',
      lastModified: new Date(),
    },
    {
      url: 'https://ailawgpt.com/support/cookies-policy',
      lastModified: new Date(),
    },
    {
      url: 'https://ailawgpt.com/support/privacy-policy',
      lastModified: new Date(),
    },
    {
      url: 'https://ailawgpt.com/support/terms-conditions',
      lastModified: new Date(),
    },
  ]
}
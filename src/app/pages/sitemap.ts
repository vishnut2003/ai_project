export const revalidate = 3600 // one hour

import type { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

    const pagesUrls: string[] = [
        'https://ailawgpt.com',
        'https://ailawgpt.com/blogs',
        'https://ailawgpt.com/contact',
        'https://ailawgpt.com/support/cookies-policy',
        'https://ailawgpt.com/support/privacy-policy',
        'https://ailawgpt.com/support/terms-conditions',

        // SEO Inner Pages
        'https://ailawgpt.com/ai-prompts-for-legal-research',
        'https://ailawgpt.com/legal-prompts-for-consumers',
        'https://ailawgpt.com/legal-document-drafting-prompts',
        'https://ailawgpt.com/family-law-prompts',
        'https://ailawgpt.com/personal-injury-prompts',
        'https://ailawgpt.com/employment-law-prompts',
        'https://ailawgpt.com/immigration-law-prompts',
        'https://ailawgpt.com/business-law-prompts',
        'https://ailawgpt.com/tax-law-prompts',
        'https://ailawgpt.com/real-estate-law-prompts',
        'https://ailawgpt.com/intellectual-property-law-prompts',
        'https://ailawgpt.com/criminal-defense-law-prompts',
    ]

    const sitemapContent: {
        url: string,
        lastModified: Date,
        changefreq: string,
    }[] = pagesUrls.map((url) => ({
        url,
        lastModified: new Date(),
        changefreq: "monthly",
    }))

    return [
        ...sitemapContent
    ]
}
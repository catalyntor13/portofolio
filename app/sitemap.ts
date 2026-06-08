import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://www.catalintorro.com',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        // Add other routes here as needed, e.g. /shop if it's a main section
    ]
}

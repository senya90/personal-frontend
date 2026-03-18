import { MetadataRoute } from 'next'

const baseUrl = 'https://semoshin.ru'
const locales = ['ru', 'en'] as const
const pages = ['', '/education', '/contacts'] as const

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.flatMap((page) =>
    locales.map((locale) => ({
      url: `${baseUrl}/${locale}${page}`,
      lastModified: new Date(),
      alternates: {
        languages: {
          ru: `${baseUrl}/ru${page}`,
          en: `${baseUrl}/en${page}`,
        },
      },
    }))
  )
}

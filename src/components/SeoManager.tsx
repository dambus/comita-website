import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'

const SITE_URL = 'https://cmtech.rs'
const DEFAULT_IMAGE_URL = `${SITE_URL}/android-chrome-512x512.png`
const SUPPORTED_LANGUAGES = ['en', 'sr'] as const

type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number]

type SeoConfig = {
  title: string
  description: string
  path: string
  locale: string
  alternates: Record<SupportedLanguage, string>
}

function normalizeLanguage(language: string): SupportedLanguage {
  return language.toLowerCase().startsWith('sr') ? 'sr' : 'en'
}

function upsertMeta(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector<HTMLMetaElement>(selector)
  if (!element) {
    element = document.createElement('meta')
    document.head.appendChild(element)
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element!.setAttribute(key, value)
  })
}

function upsertLink(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector<HTMLLinkElement>(selector)
  if (!element) {
    element = document.createElement('link')
    document.head.appendChild(element)
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element!.setAttribute(key, value)
  })
}

function upsertStructuredData(data: object) {
  const scriptId = 'structured-data'
  let script = document.head.querySelector<HTMLScriptElement>(`#${scriptId}`)

  if (!script) {
    script = document.createElement('script')
    script.id = scriptId
    script.type = 'application/ld+json'
    document.head.appendChild(script)
  }

  script.textContent = JSON.stringify(data)
}

function getSeoConfig(pathname: string, language: SupportedLanguage, t: (key: string) => string): SeoConfig {
  const isSponsorshipsPage = pathname === '/sponsorships' || pathname === '/sponsorship'
  const path = isSponsorshipsPage ? '/sponsorships' : '/'

  return {
    title: isSponsorshipsPage ? t('seo.sponsorships.title') : t('seo.home.title'),
    description: isSponsorshipsPage ? t('seo.sponsorships.description') : t('seo.home.description'),
    path,
    locale: language === 'sr' ? 'sr_RS' : 'en_US',
    alternates: {
      en: path,
      sr: path,
    },
  }
}

export default function SeoManager() {
  const location = useLocation()
  const { t, i18n } = useTranslation()

  useEffect(() => {
    const language = normalizeLanguage(i18n.resolvedLanguage || i18n.language)
    const seo = getSeoConfig(location.pathname, language, t)
    const canonicalUrl = `${SITE_URL}${seo.path}`

    document.documentElement.lang = language
    document.title = seo.title

    upsertMeta('meta[name="description"]', {
      name: 'description',
      content: seo.description,
    })
    upsertMeta('meta[name="robots"]', {
      name: 'robots',
      content: 'index, follow',
    })
    upsertMeta('meta[property="og:type"]', {
      property: 'og:type',
      content: 'website',
    })
    upsertMeta('meta[property="og:site_name"]', {
      property: 'og:site_name',
      content: 'Comita Technics DOO Beograd',
    })
    upsertMeta('meta[property="og:title"]', {
      property: 'og:title',
      content: seo.title,
    })
    upsertMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: seo.description,
    })
    upsertMeta('meta[property="og:url"]', {
      property: 'og:url',
      content: canonicalUrl,
    })
    upsertMeta('meta[property="og:image"]', {
      property: 'og:image',
      content: DEFAULT_IMAGE_URL,
    })
    upsertMeta('meta[property="og:locale"]', {
      property: 'og:locale',
      content: seo.locale,
    })
    upsertMeta('meta[name="twitter:card"]', {
      name: 'twitter:card',
      content: 'summary_large_image',
    })
    upsertMeta('meta[name="twitter:title"]', {
      name: 'twitter:title',
      content: seo.title,
    })
    upsertMeta('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: seo.description,
    })
    upsertMeta('meta[name="twitter:image"]', {
      name: 'twitter:image',
      content: DEFAULT_IMAGE_URL,
    })
    upsertLink('link[rel="canonical"]', {
      rel: 'canonical',
      href: canonicalUrl,
    })

    SUPPORTED_LANGUAGES.forEach((alternateLanguage) => {
      upsertLink(`link[rel="alternate"][hreflang="${alternateLanguage}"]`, {
        rel: 'alternate',
        hreflang: alternateLanguage,
        href: `${SITE_URL}${seo.alternates[alternateLanguage]}`,
      })
    })

    upsertLink('link[rel="alternate"][hreflang="x-default"]', {
      rel: 'alternate',
      hreflang: 'x-default',
      href: `${SITE_URL}${seo.alternates.en}`,
    })

    upsertStructuredData({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': `${SITE_URL}/#organization`,
          name: 'Comita Technics DOO Beograd',
          url: SITE_URL,
          logo: `${SITE_URL}/android-chrome-512x512.png`,
          email: 'office@cmtech.rs',
          telephone: '+381113818100',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Bulevar Mihajla Pupina 165G',
            addressLocality: 'Novi Beograd',
            addressCountry: 'RS',
          },
        },
        {
          '@type': 'WebSite',
          '@id': `${SITE_URL}/#website`,
          url: SITE_URL,
          name: 'Comita Technics DOO Beograd',
          inLanguage: language,
        },
        {
          '@type': 'WebPage',
          '@id': `${canonicalUrl}#webpage`,
          url: canonicalUrl,
          name: seo.title,
          description: seo.description,
          isPartOf: {
            '@id': `${SITE_URL}/#website`,
          },
          about: {
            '@id': `${SITE_URL}/#organization`,
          },
          inLanguage: language,
        },
      ],
    })
  }, [i18n.language, i18n.resolvedLanguage, location.pathname, t])

  return null
}

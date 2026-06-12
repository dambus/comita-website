import { useTranslation } from 'react-i18next'
import { NAV_LINKS } from './navigation'

const PILLS = ['EPC', 'O&M', 'DIGITAL']
const INFO_LINES = ['Beograd, Novi-Beograd', 'Bulevar Mihajla Pupina 165G', '+381 11 3818100', 'office@cmtech.rs']

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer style={{ backgroundColor: '#081d42' }} className="py-12 px-8">
      <div className="max-w-7xl mx-auto">

        {/* Top grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-10"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}
        >

          {/* Column 1 — Logo & tagline */}
          <div>
            <img src="/logo/CT_logo_white_text_blue_logo.png" className="h-10 w-auto" alt="Comita Technics DOO Beograd" />
            <p
              className="text-sm mt-3"
              style={{ color: 'rgba(255,255,255,0.4)', fontFamily: "'Barlow', sans-serif" }}
            >
              {t('footer.tagline')}
            </p>
            <div className="flex gap-2 mt-4">
              {PILLS.map((pill) => (
                <span
                  key={pill}
                  className="text-xs px-3 py-1 tracking-widest"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    color: 'rgba(255,255,255,0.4)',
                    fontFamily: "'Barlow', sans-serif",
                  }}
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>

          {/* Column 2 — Navigation */}
          <div>
            <p
              className="text-xs tracking-widest mb-4"
              style={{ color: 'rgba(255,255,255,0.3)', fontFamily: "'Barlow', sans-serif" }}
            >
              {t('footer.navigation')}
            </p>
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map(({ labelKey, id }) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="text-sm text-left bg-transparent border-0 cursor-pointer p-0 transition-colors duration-200"
                  style={{ color: 'rgba(255,255,255,0.5)', fontFamily: "'Barlow', sans-serif" }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#ffffff' }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.5)' }}
                >
                  {t(labelKey)}
                </button>
              ))}
            </div>
          </div>

          {/* Column 3 — Company info */}
          <div>
            <p
              className="text-xs tracking-widest mb-4"
              style={{ color: 'rgba(255,255,255,0.3)', fontFamily: "'Barlow', sans-serif" }}
            >
              {t('footer.company')}
            </p>
            <div className="flex flex-col gap-2">
              {INFO_LINES.map((line) => (
                <p
                  key={line}
                  className="text-sm"
                  style={{ color: 'rgba(255,255,255,0.5)', fontFamily: "'Barlow', sans-serif" }}
                >
                  {line}
                </p>
              ))}
            </div>
            <span
              className="inline-block text-xs px-3 py-1 tracking-wide mt-4"
              style={{
                backgroundColor: 'rgba(91,196,245,0.1)',
                color: '#5bc4f5',
                fontFamily: "'Barlow', sans-serif",
              }}
            >
              {t('footer.specialists')}
            </span>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-2">
          <p
            className="text-xs"
            style={{ color: 'rgba(255,255,255,0.25)', fontFamily: "'Barlow', sans-serif" }}
          >
            © 2025 Comita Technics DOO Beograd
          </p>
          <a
            href="https://milandjumic.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs transition-colors hover:text-white/50"
            style={{ color: 'rgba(255,255,255,0.25)', fontFamily: "'Barlow', sans-serif" }}
          >
            Designed & Developed by milandjumic.dev
          </a>
        </div>

      </div>
    </footer>
  )
}

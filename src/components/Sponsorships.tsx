import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import useScrollReveal from '../hooks/useScrollReveal'
import CTPattern from './CTPattern'

export default function Sponsorships() {
  const ref = useRef<HTMLElement>(null)
  const isVisible = useScrollReveal(ref)
  const navigate = useNavigate()
  const { t } = useTranslation()

  const CSR_CARDS = [
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#5bc4f5" strokeWidth="1.5" aria-hidden="true">
          <line x1="3" x2="21" y1="22" y2="22" />
          <line x1="6" x2="6" y1="18" y2="11" />
          <line x1="10" x2="10" y1="18" y2="11" />
          <line x1="14" x2="14" y1="18" y2="11" />
          <line x1="18" x2="18" y1="18" y2="11" />
          <polygon points="12 2 20 7 4 7" />
        </svg>
      ),
      title: t('sponsorships.cards.heritage.title'),
      text: t('sponsorships.cards.heritage.text'),
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#5bc4f5" strokeWidth="1.5" aria-hidden="true">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
      ),
      title: t('sponsorships.cards.education.title'),
      text: t('sponsorships.cards.education.text'),
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#5bc4f5" strokeWidth="1.5" aria-hidden="true">
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
          <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
        </svg>
      ),
      title: t('sponsorships.cards.environment.title'),
      text: t('sponsorships.cards.environment.text'),
    },
  ]

  return (
    <section
      ref={ref}
      id="sponsorships"
      className="py-24 px-8 relative overflow-hidden"
      style={{
        backgroundColor: '#0d2a5e',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(32px)',
        transition: 'all 0.7s ease',
      }}
    >
      <CTPattern opacity={0.06} color="#5bc4f5" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — overline, heading, description, CTA */}
          <div>
            <p
              className="text-xs tracking-[0.2em] font-semibold mb-4"
              style={{ color: '#5bc4f5', fontFamily: "'Barlow', sans-serif" }}
            >
              {t('sponsorships.overline')}
            </p>
            <h2
              className="font-bold text-white mb-6 leading-tight"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: 'clamp(40px, 5vw, 61px)',
              }}
            >
              {t('sponsorships.heading1')}<br />
              {t('sponsorships.heading2')}
            </h2>
            <p
              className="mb-8 max-w-lg leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.70)', fontFamily: "'Barlow', sans-serif", fontSize: '17px' }}
            >
              {t('sponsorships.body')}
            </p>
            <button
              onClick={() => navigate('/sponsorships')}
              className="inline-flex items-center gap-2 font-semibold px-6 py-3 transition-all duration-200 cursor-pointer border-0"
              style={{
                backgroundColor: '#5bc4f5',
                color: '#0d2a5e',
                fontSize: '15px',
                fontFamily: "'Barlow', sans-serif",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#3aafde' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#5bc4f5' }}
            >
              {t('sponsorships.cta')}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Right — 3 icon cards */}
          <div className="flex flex-col gap-4">
            {CSR_CARDS.map((card, i) => (
              <div
                key={card.title}
                className="flex items-start gap-5 p-5 transition-all duration-300 cursor-default"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.06)',
                  borderLeft: '3px solid rgba(91,196,245,0.45)',
                  transitionDelay: `${i * 0.07}s`,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.backgroundColor = 'rgba(255,255,255,0.12)'
                  ;(e.currentTarget as HTMLDivElement).style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.backgroundColor = 'rgba(255,255,255,0.06)'
                  ;(e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'
                }}
              >
                <div className="shrink-0 mt-1">{card.icon}</div>
                <div>
                  <h3
                    className="font-bold text-white mb-1"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '20px' }}
                  >
                    {card.title}
                  </h3>
                  <p
                    className="leading-relaxed"
                    style={{ color: 'rgba(255,255,255,0.60)', fontFamily: "'Barlow', sans-serif", fontSize: '15px' }}
                  >
                    {card.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

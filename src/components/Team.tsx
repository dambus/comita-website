import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import useScrollReveal from '../hooks/useScrollReveal'

const LANGUAGES = ['SR', 'EN']

export default function Team() {
  const ref = useRef<HTMLElement>(null)
  const isVisible = useScrollReveal(ref)
  const { t } = useTranslation()

  const PHOTO_STATS = [
    { value: '28', label: t('team.photoStats.management') },
    { value: '18', label: t('team.photoStats.engineers') },
    { value: '16', label: t('team.photoStats.technicians') },
  ]

  const TEAM_CARDS = [
    {
      number: '28',
      title: t('team.cards.management.title'),
      text: t('team.cards.management.text'),
    },
    {
      number: '18',
      title: t('team.cards.engineers.title'),
      text: t('team.cards.engineers.text'),
    },
    {
      number: '16',
      title: t('team.cards.technicians.title'),
      text: t('team.cards.technicians.text'),
    },
  ]

  return (
    <section
      ref={ref}
      id="team"
      className="py-32 px-8 bg-[#f4f6fa]"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(32px)',
        transition: 'all 0.7s ease',
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-24">
          <p
            className="text-xs tracking-[0.2em] font-semibold mb-3 text-[#5bc4f5]"
            style={{ fontFamily: "'Barlow', sans-serif" }}
          >
            {t('team.overline')}
          </p>
          <h2
            className="text-6xl font-bold text-[#0d2a5e] mb-4"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            {t('team.heading')}
          </h2>
          <p
            className="text-gray-500 text-lg"
            style={{ fontFamily: "'Barlow', sans-serif" }}
          >
            {t('team.subheading')}
          </p>
        </div>

        {/* Two-column */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* LEFT — Photo */}
          <div className="relative">
            <img
              src="/images/horizontal-workers-in-work-equipment-radial-blur-fade.jpg"
              alt="Comita Technics DOO Beograd team"
              className="w-full h-125 object-cover"
              style={{ objectPosition: 'center 30%' }}
            />
            <div
              className="ct-panel bg-[#0d2a5e]/90 absolute bottom-4 left-4 right-4 p-6"
            >
              {PHOTO_STATS.map(({ value, label }) => (
                <div key={label} className="flex flex-col items-center">
                  <span
                    className="text-4xl font-bold text-[#5bc4f5]"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    {value}
                  </span>
                  <span
                    className="text-xs tracking-widest mt-1 text-white/60"
                    style={{ fontFamily: "'Barlow', sans-serif" }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Content */}
          <div>
            <h3
              className="text-4xl font-bold text-[#0d2a5e] mb-6"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              {t('team.rightHeading')}
            </h3>

            {/* Team cards */}
            <div className="flex flex-col gap-4 mb-8">
              {TEAM_CARDS.map((card) => (
                <div
                  key={card.title}
                  className="ct-panel-sm bg-white border border-gray-100 p-6 relative overflow-hidden"
                >
                  {/* Ghost number */}
                  <div
                    style={{
                      position: 'absolute',
                      right: 0,
                      top: 0,
                      transform: 'translateX(8px) translateY(-8px)',
                      fontSize: 'calc(7rem + 1px)',
                      fontWeight: 700,
                      color: '#0d2a5e',
                      opacity: 0.06,
                      lineHeight: 1,
                      userSelect: 'none',
                      pointerEvents: 'none',
                      fontFamily: "'Barlow Condensed', sans-serif",
                    }}
                  >
                    {card.number}
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h4
                      className="text-xl font-bold text-[#0d2a5e] mb-3"
                      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                    >
                      {card.title}
                    </h4>
                    <div className="w-8 h-0.5 bg-[#5bc4f5] mb-3" />
                    <p
                      className="text-gray-500 leading-relaxed"
                      style={{ fontFamily: "'Barlow', sans-serif", fontSize: '15px' }}
                    >
                      {card.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Languages */}
            <div className="flex gap-3 mb-4">
              {LANGUAGES.map((lang) => (
                <span
                  key={lang}
                  className="ct-panel-sm bg-[#f4f6fa] border border-[#0d2a5e]/10 text-[#0d2a5e] text-sm font-bold tracking-widest px-6 py-3"
                  style={{ fontFamily: "'Barlow', sans-serif" }}
                >
                  {lang}
                </span>
              ))}
            </div>
            <p className="text-gray-400" style={{ fontFamily: "'Barlow', sans-serif", fontSize: '15px' }}>
              {t('team.multilingual')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

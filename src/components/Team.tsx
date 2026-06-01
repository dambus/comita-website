import { useRef } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'

const PHOTO_STATS = [
  { value: '28', label: 'Management & Admin' },
  { value: '18', label: 'Lead Engineers 24/7' },
  { value: '16', label: 'Field Technicians' },
]

const TEAM_CARDS = [
  {
    number: '26',
    title: '26 · Administrative & Management',
    text: 'Project management, finance, O&M planning, procurement, QA/QC, HSE — ensuring predictable operations.',
  },
  {
    number: '18',
    title: '18 · Lead Engineers — 24/7',
    text: 'Unique energy infrastructure expertise providing round-the-clock support and on-call response.',
  },
  {
    number: '16',
    title: '16 · Skilled Technicians',
    text: 'Electricians, mechanics, and adjusters — the hands keeping the system running continuously.',
  },
]

const LANGUAGES = ['SR', 'EN', 'RU']

export default function Team() {
  const ref = useRef<HTMLElement>(null)
  const isVisible = useScrollReveal(ref)

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
        <div className="text-center mb-16">
          <p
            className="text-xs tracking-[0.2em] font-semibold mb-3 text-[#5bc4f5]"
            style={{ fontFamily: "'Barlow', sans-serif" }}
          >
            OUR TEAM
          </p>
          <h2
            className="text-6xl font-bold text-[#0d2a5e] mb-3"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            The Team That Builds
          </h2>
          <p
            className="text-gray-500 text-lg"
            style={{ fontFamily: "'Barlow', sans-serif" }}
          >
            60 top specialists — a true international team capable of handling projects of any complexity.
          </p>
        </div>

        {/* Two-column */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* LEFT — Photo */}
          <div className="relative">
            <img
              src="/images/horizontal-workers-in-work-equipment-radial-blur-fade.jpg"
              alt="Comita Technics team"
              className="w-full h-[500px] object-cover"
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
              International Expertise
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
                      fontSize: '7rem',
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
                      className="text-gray-500 text-sm leading-relaxed"
                      style={{ fontFamily: "'Barlow', sans-serif" }}
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
            <p className="text-gray-400 text-sm" style={{ fontFamily: "'Barlow', sans-serif" }}>
              Multilingual team — direct communication with clients and partners.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

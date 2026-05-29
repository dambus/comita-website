import { useRef } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'

const PHOTO_STATS = [
  { value: '26', label: 'Management & Admin' },
  { value: '18', label: 'Lead Engineers 24/7' },
  { value: '16', label: 'Field Technicians' },
]

const TEAM_CARDS = [
  {
    title: '26 Administrative & Management',
    text: 'Project management, finance, O&M planning, procurement, QA/QC, HSE — ensuring predictable operations.',
  },
  {
    title: '18 Lead Engineers — 24/7',
    text: 'Unique energy infrastructure expertise providing round-the-clock support and on-call response.',
  },
  {
    title: '16 Skilled Technicians',
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
      className="py-24 px-8 bg-white overflow-hidden transition-all duration-700"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(32px)',
      }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <div className="text-center mb-16">
          <p
            className="text-xs tracking-[0.2em] font-semibold mb-3"
            style={{ color: '#5bc4f5', fontFamily: "'Barlow', sans-serif" }}
          >
            OUR TEAM
          </p>
          <h2
            className="text-5xl font-bold"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", color: '#0d2a5e' }}
          >
            The Team That Builds
          </h2>
          <p
            className="text-gray-400 text-base mt-3"
            style={{ fontFamily: "'Barlow', sans-serif" }}
          >
            60 top specialists — a true international team capable of handling projects of any complexity.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — photo with stat overlay */}
          <div className="relative">
            <img
              src="/images/horizontal-workers-in-work-equipment-radial-blur-fade.jpg"
              alt="Comita Technics team"
              className="w-full h-80 object-cover rounded-lg"
            />
            <div
              className="absolute bottom-4 left-4 right-4 rounded p-4 flex justify-between items-center"
              style={{ backgroundColor: 'rgba(13,42,94,0.9)', backdropFilter: 'blur(4px)' }}
            >
              {PHOTO_STATS.map(({ value, label }) => (
                <div key={label} className="flex flex-col items-center">
                  <span
                    className="text-2xl font-bold"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif", color: '#5bc4f5' }}
                  >
                    {value}
                  </span>
                  <span
                    className="text-[10px] tracking-wide mt-0.5 text-center"
                    style={{ color: 'rgba(255,255,255,0.5)', fontFamily: "'Barlow', sans-serif" }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — team structure */}
          <div>
            <h3
              className="text-3xl font-bold mb-6"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", color: '#0d2a5e' }}
            >
              International Expertise
            </h3>

            {TEAM_CARDS.map((card) => (
              <div
                key={card.title}
                className="pl-4 mb-6"
                style={{ borderLeft: '2px solid #5bc4f5' }}
              >
                <p
                  className="text-sm font-semibold"
                  style={{ color: '#0d2a5e', fontFamily: "'Barlow', sans-serif" }}
                >
                  {card.title}
                </p>
                <p
                  className="text-sm leading-relaxed mt-1 text-gray-400"
                  style={{ fontFamily: "'Barlow', sans-serif" }}
                >
                  {card.text}
                </p>
              </div>
            ))}

            {/* Language badges */}
            <div className="flex gap-3 mt-8">
              {LANGUAGES.map((lang) => (
                <span
                  key={lang}
                  className="text-xs font-bold tracking-widest px-4 py-2 rounded-sm"
                  style={{
                    backgroundColor: '#f4f6fa',
                    border: '1px solid rgba(13,42,94,0.1)',
                    color: '#0d2a5e',
                    fontFamily: "'Barlow', sans-serif",
                  }}
                >
                  {lang}
                </span>
              ))}
            </div>
            <p
              className="text-gray-400 text-xs mt-3"
              style={{ fontFamily: "'Barlow', sans-serif" }}
            >
              Multilingual team — direct communication with clients and partners.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

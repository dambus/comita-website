import { useRef } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'
import CTPattern from './CTPattern'

const PARTNERS = [
  'GASTRANS',
  'SRBIJAGAS',
  'BULGARTRANSGAZ',
  'SIEMENS ENERGY',
  'SAIPEM',
  'ITP BRASIL',
  'GENERALI',
  'TERMOINŽENJERING',
  'SBT',
  'KBV DATACOM',
  'ENERGOLAB',
  'NEOPETRO SDN BHD',
  'PROMONT GROUP',
]

export default function Partners() {
  const ref = useRef<HTMLElement>(null)
  const isVisible = useScrollReveal(ref)

  return (
    <section
      ref={ref}
      id="partners"
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
            OUR PARTNERS
          </p>
          <h2
            className="text-6xl font-bold text-[#0d2a5e] mb-3"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Proven Partnership
          </h2>
          <p
            className="text-gray-500 text-lg max-w-xl mx-auto"
            style={{ fontFamily: "'Barlow', sans-serif" }}
          >
            Global-scale projects are only possible through strategic partnerships with leading industry companies.
          </p>
        </div>

        {/* Partners grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto mb-16">
          {PARTNERS.map((name) => (
            <div
              key={name}
              className="ct-panel-sm bg-white border border-gray-100 min-h-24 px-6 py-5 flex items-center justify-center text-base tracking-widest transition-all duration-300"
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(91,196,245,0.3)'
                e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0,0,0,0.1)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#f3f4f6'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <span
                className="text-center leading-tight"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  color: 'rgba(13,42,94,0.6)',
                }}
              >
                {name}
              </span>
            </div>
          ))}
        </div>

        {/* Quote block */}
        <div
          className="ct-panel bg-[#0d2a5e] py-12 px-12 max-w-3xl mx-auto relative overflow-hidden"
        >
          <CTPattern opacity={0.04} color="#5bc4f5" />

          <div className="w-16 h-0.5 bg-[#5bc4f5] mx-auto mb-8 relative z-10" />

          <p
            className="font-['Barlow_Condensed'] text-4xl md:text-5xl font-bold text-white text-center relative z-10"
          >
            "Together, we create infrastructure that lasts decades."
          </p>

          <p
            className="text-[#5bc4f5] text-sm tracking-[0.2em] mt-6 text-center relative z-10"
            style={{ fontFamily: "'Barlow', sans-serif" }}
          >
            — Comita Technics, 2025
          </p>
        </div>
      </div>
    </section>
  )
}

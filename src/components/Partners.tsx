import { useRef } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'

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
      className="py-24 px-8 transition-all duration-700"
      style={{
        backgroundColor: '#f4f6fa',
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
            OUR PARTNERS
          </p>
          <h2
            className="text-5xl font-bold"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", color: '#0d2a5e' }}
          >
            Proven Partnership
          </h2>
          <p
            className="text-gray-400 text-base mt-3 max-w-xl mx-auto"
            style={{ fontFamily: "'Barlow', sans-serif" }}
          >
            Global-scale projects are only possible through strategic partnerships with leading industry companies.
          </p>
        </div>

        {/* Partners grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
          {PARTNERS.map((name) => (
            <div
              key={name}
              className="bg-white border border-gray-100 rounded-lg px-6 py-5 flex items-center justify-center min-h-20 transition-all duration-300"
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
                className="text-sm tracking-widest text-center leading-tight"
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
          className="mt-16 rounded-lg px-8 py-8 text-center max-w-3xl mx-auto"
          style={{ backgroundColor: '#0d2a5e' }}
        >
          <p
            className="text-3xl font-bold text-white"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            "Together, we create infrastructure that lasts decades."
          </p>
          <p
            className="text-sm tracking-widest mt-4"
            style={{ color: '#5bc4f5', fontFamily: "'Barlow', sans-serif" }}
          >
            — Comita Technics, 2025
          </p>
        </div>

      </div>
    </section>
  )
}

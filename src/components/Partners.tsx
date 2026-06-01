import { useRef } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'
import CTPattern from './CTPattern'

interface Partner {
  name: string
  logo: string | null
}

const PARTNERS: Partner[] = [
  { name: 'GASTRANS', logo: '/logo/partners/Gastrans-logo-web-LATINICA-1.png' },
  { name: 'SRBIJAGAS', logo: '/logo/partners/Srbijagas-logo.png' },
  { name: 'BULGARTRANSGAZ', logo: '/logo/partners/bulgartransgaz-logo.png' },
  { name: 'SIEMENS ENERGY', logo: '/logo/partners/siemens-energy-logo.png' },
  { name: 'SAIPEM', logo: '/logo/partners/logo-Saipem-positive-horizontal-RGB.png' },
  { name: 'ITP BRASIL', logo: '/logo/partners/logo-itp-brasil.png' },
  { name: 'GENERALI', logo: '/logo/partners/generali-logo-png_seeklogo-264627.png' },
  { name: 'TERMOINŽENJERING', logo: '/logo/partners/termoinzenjering-logo.png' },
  { name: 'SBT', logo: '/logo/partners/sbt-logo.png' },
  { name: 'KBV DATACOM', logo: null },
  { name: 'ENERGOLAB', logo: '/logo/partners/Energolab-logotip.png' },
  { name: 'NEOPETRO SDN BHD', logo: '/logo/partners/NP-LOGO-WITH-WORD.png' },
  { name: 'PROMONT GROUP', logo: '/logo/partners/promontgroup-logo.svg' },
]

export default function Partners() {
  const ref = useRef<HTMLElement>(null)
  const isVisible = useScrollReveal(ref)

  return (
    <section
      ref={ref}
      id="partners"
      // className="py-32 px-8 bg-[#f4f6fa]"
      className="py-32 px-8 bg-white"

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
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16 max-w-7xl mx-auto mb-16 justify-items-center">
          {PARTNERS.map(({ name, logo }) => (
            <div
              key={name}
              className="flex items-center justify-center transition-all duration-300 min-h-48"
            >
              {logo ? (
                <img
                  src={logo}
                  alt={name}
                  className="max-h-56 max-w-[95%] object-contain filter grayscale-[30%] hover:grayscale-0 transition-all duration-300 opacity-90 hover:opacity-100"
                />
              ) : (
                <span
                  className="text-center leading-tight text-sm tracking-widest px-4"
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700,
                    color: 'rgba(13,42,94,0.6)',
                  }}
                >
                  {name}
                </span>
              )}
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

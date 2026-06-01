import { useRef } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'
import CTPattern from './CTPattern'

const PRINCIPLES = [
  'Safety First — zero tolerance for incidents.',
  'Trusted Engineering — solutions built to endure.',
  'Predictive Maintenance — from reactive to proactive.',
  'Environmental Commitment — minimizing our footprint.',
  'Partnership and Transparency — SLAs and open reporting.',
]

const LICENSES = ['I030G1', 'I031M1']
const PILLS = ['EPC', 'O&M', 'DIGITAL', 'SCADA']
const STATS = [
  { number: '25+', label: 'Years Combined Experience' },
  { number: '2', label: 'Countries of Operation' },
  { number: '504 km', label: 'Infrastructure Built' },
  { number: '100%', label: 'SLA Compliance' },
]

export default function About() {
  const ref = useRef<HTMLElement>(null)
  const isVisible = useScrollReveal(ref)

  return (
    <section
      ref={ref}
      id="about"
      className="py-32 px-8 bg-white relative overflow-hidden"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(32px)',
        transition: 'all 0.7s ease',
      }}
    >
      <CTPattern opacity={0.03} color="#0d2a5e" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* LEFT COLUMN */}
        <div className="relative z-10">
          <p
            className="text-xs tracking-[0.2em] font-semibold mb-4"
            style={{ color: '#5bc4f5', fontFamily: "'Barlow', sans-serif" }}
          >
            ABOUT THE COMPANY
          </p>

          <h2
            className="text-5xl md:text-6xl font-bold leading-tight mb-6"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", color: '#0d2a5e' }}
          >
            One Team.
            <br />
            One Standard.
          </h2>

          <p
            className="text-gray-500 text-base max-w-lg leading-relaxed mb-4"
            style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300 }}
          >
            Comita Technics DOO Beograd is a full-cycle, highly qualified engineering
            and maintenance company. We have designed, built, and today maintain
            critical gas transmission facilities in the region.
          </p>

          <p
            className="text-gray-500 text-base max-w-lg leading-relaxed mb-8"
            style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300 }}
          >
            We operate under transparent SLAs, apply predictive maintenance methods
            and digital diagnostics, and ensure process control through SCADA and
            advanced telemetry.
          </p>

          {/* Licenses */}
          <div className="flex flex-wrap gap-3 mb-4">
            {LICENSES.map((lic) => (
              <span
                key={lic}
                className="text-xs font-semibold tracking-widest px-4 py-2 rounded-sm ct-panel-sm"
                style={{
                  backgroundColor: '#f4f6fa',
                  border: '1px solid rgba(13,42,94,0.1)',
                  color: '#0d2a5e',
                  fontFamily: "'Barlow', sans-serif",
                }}
              >
                {lic}
              </span>
            ))}
          </div>

          {/* Pills */}
          <div className="flex flex-wrap gap-2 mb-12">
            {PILLS.map((pill) => (
              <span
                key={pill}
                className="text-xs font-semibold tracking-widest px-4 py-2 rounded-full"
                style={{
                  backgroundColor: '#e8f1fc',
                  color: '#1a4a9e',
                  fontFamily: "'Barlow', sans-serif",
                }}
              >
                {pill}
              </span>
            ))}
          </div>

          {/* Stat boxes */}
          <div className="grid grid-cols-2 gap-4">
            {STATS.map(({ number, label }) => (
              <div
                key={label}
                className="ct-panel-sm bg-[#f4f6fa] p-6"
                style={{ border: '1px solid rgba(13,42,94,0.05)' }}
              >
                <div
                  className="text-4xl font-bold text-[#0d2a5e]"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {number}
                </div>
                <div className="text-gray-400 text-xs tracking-wide mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div
          className="ct-panel bg-[#0d2a5e] p-10 relative overflow-hidden flex flex-col gap-0"
          style={{}}
        >
          {/* Watermark logo */}
          <img
            src="/logo/CT_logo_white.png"
            className="absolute bottom-6 right-6 h-16 w-auto opacity-10"
            alt=""
          />

          {/* Mission */}
          <div className="relative z-10">
            <h3
              className="text-2xl font-bold text-white mb-4"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Our Mission
            </h3>
            <p
              className="text-white/75 text-base leading-relaxed mb-8"
              style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300 }}
            >
              To design, construct, and service critical energy infrastructure,
              delivering predictable reliability of supply through strict HSE
              standards, digital diagnostics, and commitment to SLAs.
            </p>
          </div>

          {/* Divider */}
          <div
            className="my-6"
            style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}
          />

          {/* Principles */}
          <div className="relative z-10">
            <h3
              className="text-xl font-bold text-white mb-4"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Our Principles
            </h3>
            <ul className="flex flex-col gap-0">
              {PRINCIPLES.map((p) => (
                <li key={p} className="flex items-start gap-3 py-2 border-b border-white/5 last:border-0">
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2"
                    style={{ backgroundColor: '#5bc4f5' }}
                  />
                  <span
                    className="text-white/75 text-sm leading-relaxed"
                    style={{ fontFamily: "'Barlow', sans-serif" }}
                  >
                    {p}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

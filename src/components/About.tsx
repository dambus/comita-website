import { useRef } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'

const PRINCIPLES = [
  'Safety First — zero tolerance for incidents.',
  'Trusted Engineering — solutions built to endure.',
  'Predictive Maintenance — from reactive to proactive.',
  'Environmental Commitment — minimizing our footprint.',
  'Partnership and Transparency — SLAs and open reporting.',
]

const LICENSES = ['I030G1', 'I031M1']
const PILLS = ['EPC', 'O&M', 'DIGITAL', 'SCADA']

export default function About() {
  const ref = useRef<HTMLElement>(null)
  const isVisible = useScrollReveal(ref)

  return (
    <section
      ref={ref}
      id="about"
      className="py-24 px-8 bg-white transition-all duration-700"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(32px)',
      }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* Left column */}
        <div>
          <p
            className="text-xs tracking-[0.2em] font-semibold mb-4"
            style={{ color: '#5bc4f5', fontFamily: "'Barlow', sans-serif" }}
          >
            ABOUT THE COMPANY
          </p>

          <h2
            className="text-5xl md:text-6xl font-bold leading-tight"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", color: '#0d2a5e' }}
          >
            One Team.<br />One Standard.
          </h2>

          <p
            className="text-gray-500 text-base max-w-lg mt-6 leading-relaxed"
            style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300 }}
          >
            Comita Technics DOO Beograd is a full-cycle, highly qualified engineering
            and maintenance company. We have designed, built, and today maintain
            critical gas transmission facilities in the region.
          </p>

          <p
            className="text-gray-500 text-base max-w-lg mt-4 leading-relaxed"
            style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300 }}
          >
            We operate under transparent SLAs, apply predictive maintenance methods
            and digital diagnostics, and ensure process control through SCADA and
            advanced telemetry.
          </p>

          {/* License badges */}
          <div className="flex flex-wrap gap-3 mt-8">
            {LICENSES.map((lic) => (
              <span
                key={lic}
                className="text-xs font-semibold tracking-widest px-4 py-2 rounded-sm"
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

          {/* Expertise pills */}
          <div className="flex flex-wrap gap-2 mt-4">
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

          {/* Welding photo */}
          <div className="mt-8">
            <img
              src="/images/almost-square-velding-process-close-up-artistic.jpg"
              alt="Welding process"
              className="w-full h-48 object-cover rounded-lg opacity-90"
            />
          </div>
        </div>

        {/* Right column — mission card */}
        <div
          className="rounded-lg p-8 flex flex-col justify-between"
          style={{ backgroundColor: '#0d2a5e' }}
        >
          <div>
            <h3
              className="text-2xl font-bold text-white mb-4"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Our Mission
            </h3>
            <p
              className="text-sm leading-relaxed"
              style={{
                color: 'rgba(255,255,255,0.6)',
                fontFamily: "'Barlow', sans-serif",
                fontWeight: 300,
              }}
            >
              To design, construct, and service critical energy infrastructure,
              delivering predictable reliability of supply through strict HSE
              standards, digital diagnostics, and commitment to SLAs.
            </p>
          </div>

          <div
            className="my-6"
            style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}
          />

          <div>
            <h3
              className="text-xl font-bold text-white mb-4"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Our Principles
            </h3>
            <ul className="flex flex-col gap-3">
              {PRINCIPLES.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span
                    className="w-1.5 h-1.5 rounded-full shrink-0 mt-1.5"
                    style={{ backgroundColor: '#5bc4f5' }}
                  />
                  <span
                    className="text-sm leading-relaxed"
                    style={{
                      color: 'rgba(255,255,255,0.7)',
                      fontFamily: "'Barlow', sans-serif",
                    }}
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

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

const LICENSES_DETAILED = [
  {
    code: 'I030G1',
    title: 'Civil & Structural Works',
    description:
      'Construction of building structures for oil and gas processing facilities built outside of exploitation fields, with prior approval from the Ministry responsible for mineral resources exploitation, and maintenance of exploitation facilities.',
  },
  {
    code: 'I031M1',
    title: 'Mechanical & Gas Installations',
    description:
      'Construction of thermotechnical, thermoenergetic, process and gas installations of oil and gas pipelines and product pipelines, gas networks with operating pressure exceeding 16 bar, stationary and floating bunkering stations for supplying ships and floating vessels with liquid fuel capacity exceeding 500 m², oil storage facilities, liquid natural gas and petroleum derivatives storage facilities.',
  },
]

const ISO_CERTS = [
  { code: 'ISO 9001:2015', label: 'Quality Management' },
  { code: 'ISO 14001:2015', label: 'Environmental Management' },
  { code: 'ISO 45001:2018', label: 'Health & Safety Management' },
]

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

      <div className="max-w-7xl mx-auto relative z-10">

        {/* TOP: Two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">

          {/* LEFT COLUMN */}
          <div>
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
              className="text-gray-500 max-w-lg leading-relaxed mb-4"
              style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: '17px' }}
            >
              Comita Technics DOO Beograd is a full-cycle, highly qualified engineering
              and maintenance company. We have designed, built, and today maintain
              critical gas transmission facilities in the region.
            </p>

            <p
              className="text-gray-500 max-w-lg leading-relaxed mb-10"
              style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: '17px' }}
            >
              We operate under transparent SLAs, apply predictive maintenance methods
              and digital diagnostics, and ensure process control through SCADA and
              advanced telemetry.
            </p>

            {/* Stat boxes */}
            <div className="grid grid-cols-2 gap-4 mb-8">
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

            {/* Service pills */}
            <div className="flex flex-wrap gap-2">
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
          </div>

          {/* RIGHT COLUMN — dark panel */}
          <div
            className="ct-panel bg-[#0d2a5e] p-10 relative overflow-hidden flex flex-col gap-0"
          >
            {/* Watermark logo */}
            <img
              src="/logo/CT_logo_white_text_blue_logo.png"
              className="absolute bottom-6 right-6 h-10 w-auto opacity-10"
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
                className="text-white/75 leading-relaxed mb-8"
                style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: '17px' }}
              >
                To design, construct, and service critical energy infrastructure,
                delivering predictable reliability of supply through strict HSE
                standards, digital diagnostics, and commitment to SLAs.
              </p>
            </div>

            {/* Divider */}
            <div className="my-6" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }} />

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
                      className="text-white/75 leading-relaxed"
                      style={{ fontFamily: "'Barlow', sans-serif", fontSize: '15px' }}
                    >
                      {p}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* BOTTOM: Licenses & Certifications */}
        <div
          className="pt-16"
          style={{ borderTop: '1px solid rgba(13,42,94,0.08)' }}
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <p
                className="text-xs tracking-[0.2em] font-semibold mb-2"
                style={{ color: '#5bc4f5', fontFamily: "'Barlow', sans-serif" }}
              >
                GOVERNMENT ISSUED
              </p>
              <h3
                className="text-4xl font-bold"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", color: '#0d2a5e' }}
              >
                Licenses & Certifications
              </h3>
            </div>
            <p
              className="text-xs text-gray-400 max-w-xs md:text-right"
              style={{ fontFamily: "'Barlow', sans-serif" }}
            >
              Issued by the Ministry of Construction, Transport and Infrastructure of the Republic of Serbia
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* License cards */}
            {LICENSES_DETAILED.map(({ code, title, description }) => (
              <div
                key={code}
                className="ct-panel-lg bg-[#f4f6fa] p-8 flex flex-col"
                style={{ border: '1px solid rgba(13,42,94,0.07)' }}
              >
                <div className="flex items-start gap-4 mb-5">
                  <div
                    className="flex-shrink-0 w-10 h-10 flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(13,42,94,0.08)' }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0d2a5e" strokeWidth="1.5">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <div>
                    <p
                      className="text-xl font-bold leading-none"
                      style={{ fontFamily: "'Barlow Condensed', sans-serif", color: '#0d2a5e' }}
                    >
                      {code}
                    </p>
                    <p
                      className="text-xs tracking-widest mt-1 uppercase"
                      style={{ color: '#5bc4f5', fontFamily: "'Barlow', sans-serif" }}
                    >
                      {title}
                    </p>
                  </div>
                </div>
                <p
                  className="text-gray-600 leading-relaxed"
                  style={{ fontFamily: "'Barlow', sans-serif", fontSize: '15px' }}
                >
                  {description}
                </p>
              </div>
            ))}

            {/* ISO Certifications card */}
            <div className="ct-panel-lg bg-[#0d2a5e] p-8 flex flex-col">
              <div className="flex items-start gap-4 mb-6">
                <div
                  className="flex-shrink-0 w-10 h-10 flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(91,196,245,0.15)' }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5bc4f5" strokeWidth="1.5">
                    <circle cx="12" cy="8" r="4" />
                    <path d="M9 12L7 22l5-3 5 3-2-10" />
                  </svg>
                </div>
                <div>
                  <p
                    className="text-xl font-bold text-white leading-none"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    ISO Certified
                  </p>
                  <p
                    className="text-xs tracking-widest mt-1 uppercase"
                    style={{ color: '#5bc4f5', fontFamily: "'Barlow', sans-serif" }}
                  >
                    International Standards
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-0 flex-1">
                {ISO_CERTS.map(({ code, label }) => (
                  <div
                    key={code}
                    className="flex items-center gap-4 py-4"
                    style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: '#5bc4f5' }}
                    />
                    <div>
                      <p
                        className="text-base font-bold text-white"
                        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                      >
                        {code}
                      </p>
                      <p
                        className="text-xs mt-0.5"
                        style={{ color: 'rgba(255,255,255,0.65)', fontFamily: "'Barlow', sans-serif" }}
                      >
                        {label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

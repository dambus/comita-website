import { useRef } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'
import CTPattern from './CTPattern'

const OPS_STATS = [
  { value: '12.87B m3/yr', label: 'Gas transported' },
  { value: '0 hours', label: 'Unplanned downtime' },
  { value: '0', label: 'Safety incidents' },
]

const OPS_SUBTEXTS = [
  'Comprehensive maintenance and repair of the Main gas pipeline (interconnector) "border of Bulgaria - border of Hungary" from 2025',
  'A set of works related to the expansion of the existing underground gas storage facilities "Banatski Dvor" from 2025',
]

export default function OperationsMaintenance() {
  const ref = useRef<HTMLElement>(null)
  const isVisible = useScrollReveal(ref)

  return (
    <section
      ref={ref}
      id="operations-maintenance"
      className="py-32 px-8 bg-[#f4f6fa]"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(32px)',
        transition: 'all 0.7s ease',
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p
            className="text-xs tracking-[0.2em] font-semibold mb-3 text-[#5bc4f5]"
            style={{ fontFamily: "'Barlow', sans-serif" }}
          >
            OPERATION & MAINTENANCE
          </p>
          <h2
            className="text-5xl font-bold text-[#0d2a5e] mb-4"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Continuous Reliability in Critical Systems
          </h2>
          <p
            className="text-gray-500 max-w-3xl mx-auto"
            style={{ fontFamily: "'Barlow', sans-serif", fontSize: '17px' }}
          >
            Long-term operation and maintenance programs with preventive diagnostics, rapid interventions, and disciplined SLA delivery across gas infrastructure.
          </p>
        </div>

        <div className="ct-panel-lg bg-[#0d2a5e] py-12 px-8 md:px-16 w-full relative overflow-hidden">
          <CTPattern opacity={0.06} color="#5bc4f5" />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h3
                  className="text-3xl md:text-4xl font-bold text-white"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  Operational Excellence 2021-2025
                </h3>
                <div className="w-12 h-0.5 bg-[#5bc4f5] mt-2" />
              </div>

              <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                {OPS_STATS.map(({ value, label }) => (
                  <div key={label} className="flex flex-col items-center md:items-start">
                    <span
                      className="text-4xl font-bold text-[#5bc4f5]"
                      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                    >
                      {value}
                    </span>
                    <span
                      className="text-xs tracking-widest mt-1 text-white/50"
                      style={{ fontFamily: "'Barlow', sans-serif" }}
                    >
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-12">
              {OPS_SUBTEXTS.map((text) => (
                <p
                  key={text}
                  className="ct-panel-sm bg-white/8 border border-white/10 border-l-4 border-l-[#5bc4f5] px-5 py-4 text-white/88 leading-relaxed backdrop-blur-sm"
                  style={{ fontFamily: "'Barlow', sans-serif", fontSize: '15px' }}
                >
                  {text}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

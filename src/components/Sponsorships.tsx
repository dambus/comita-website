import { useRef } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'

const PLACEHOLDERS = [
  'Project photography to be added by the client.',
  'Section text and donation highlights to be supplied by the client.',
]

export default function Sponsorships() {
  const ref = useRef<HTMLElement>(null)
  const isVisible = useScrollReveal(ref)

  return (
    <section
      ref={ref}
      id="sponsorships"
      className="py-32 px-8 bg-white"
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
            SPONSORSHIPS AND DONATIONS
          </p>
          <h2
            className="text-5xl font-bold text-[#0d2a5e] mb-4"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Community Support and Social Responsibility
          </h2>
          <p
            className="text-gray-500 text-base max-w-3xl mx-auto"
            style={{ fontFamily: "'Barlow', sans-serif" }}
          >
            This section is reserved for the client&apos;s upcoming content on sponsorships, donations, and community initiatives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PLACEHOLDERS.map((item) => (
            <div
              key={item}
              className="ct-panel-lg bg-[#f4f6fa] border border-[#0d2a5e]/8 p-8 min-h-52 flex items-end"
            >
              <div>
                <div className="w-10 h-0.5 bg-[#5bc4f5] mb-5" />
                <p
                  className="text-sm text-[#0d2a5e]/75 leading-relaxed"
                  style={{ fontFamily: "'Barlow', sans-serif" }}
                >
                  {item}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

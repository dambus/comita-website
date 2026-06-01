import { useRef } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'

const DETAILS = [
  {
    label: 'Headquarters',
    value: 'Belgrade, Serbia',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5bc4f5" strokeWidth="1.5">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    label: 'Operations',
    value: 'Serbia · Bulgaria · Region',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5bc4f5" strokeWidth="1.5">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9,22 9,12 15,12 15,22" />
      </svg>
    ),
  },
  {
    label: 'Licenses',
    value: 'I030G1 · I031M1',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5bc4f5" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    label: 'Languages',
    value: 'Serbian · English · Russian',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5bc4f5" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
  },
]

export default function Contact() {
  const ref = useRef<HTMLElement>(null)
  const isVisible = useScrollReveal(ref)

  return (
    <section
      ref={ref}
      id="contact"
      className="relative overflow-hidden py-32 px-8 bg-white"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(32px)',
        transition: 'all 0.7s ease',
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto relative z-10">
        {/* LEFT */}
        <div>
          <p
            className="text-xs tracking-[0.2em] font-semibold mb-4 text-[#5bc4f5]"
            style={{ fontFamily: "'Barlow', sans-serif" }}
          >
            GET IN TOUCH
          </p>
          <h2
            className="text-5xl font-bold leading-tight text-[#0d2a5e] mb-6"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Let's Build Something
            <br />
            That Lasts.
          </h2>
          <p
            className="text-gray-500 text-base leading-relaxed max-w-md mb-10"
            style={{ fontFamily: "'Barlow', sans-serif" }}
          >
            We are always open to discussing new projects, engineering challenges, and partnership opportunities across the region and beyond.
          </p>

          <div className="flex flex-col gap-6">
            {DETAILS.map(({ label, value, icon }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="ct-panel-sm w-12 h-12 bg-[#f4f6fa] flex items-center justify-center flex-shrink-0">
                  {icon}
                </div>
                <div>
                  <p
                    className="text-sm font-semibold text-[#0d2a5e]"
                    style={{ fontFamily: "'Barlow', sans-serif" }}
                  >
                    {label}
                  </p>
                  <p
                    className="text-sm text-gray-500 mt-0.5"
                    style={{ fontFamily: "'Barlow', sans-serif" }}
                  >
                    {value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — Form */}
        <div>
          <div className="ct-panel-lg bg-white border border-gray-100 p-8">
            <h3
              className="text-2xl font-bold text-[#0d2a5e] mb-6"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Send a Message
            </h3>

            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-200 px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-[#5bc4f5] transition-colors"
                style={{ fontFamily: "'Barlow', sans-serif" }}
              />
              <input
                type="text"
                placeholder="Your Company"
                className="w-full border border-gray-200 px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-[#5bc4f5] transition-colors"
                style={{ fontFamily: "'Barlow', sans-serif" }}
              />
            </div>

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-200 px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-[#5bc4f5] transition-colors mt-4"
              style={{ fontFamily: "'Barlow', sans-serif" }}
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full border border-gray-200 px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-[#5bc4f5] transition-colors mt-4"
              style={{ fontFamily: "'Barlow', sans-serif" }}
            />

            <textarea
              placeholder="Your message..."
              rows={5}
              className="w-full border border-gray-200 px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-[#5bc4f5] transition-colors mt-4 resize-none"
              style={{ fontFamily: "'Barlow', sans-serif" }}
            />

            <button
              className="mt-6 w-full py-3 px-8 text-sm font-bold tracking-widest bg-[#0d2a5e] text-white transition-all duration-300 hover:bg-[#5bc4f5] hover:text-[#0d2a5e]"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              SEND MESSAGE
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

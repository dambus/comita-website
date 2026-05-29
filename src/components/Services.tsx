interface ServiceCard {
  title: string
  description: string
  items: string[]
  icon: React.ReactNode
}

import type React from 'react'
import { useRef } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'

const SERVICES: ServiceCard[] = [
  {
    title: 'EPC Full Cycle',
    description:
      'Complete turnkey projects from design through commissioning. Compressor stations, metering units, dispatch centers.',
    items: [
      'Compressor & Metering Stations',
      'Dispatch Centers & Control Systems',
      'Long-term O&M with guaranteed SLAs',
    ],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5bc4f5" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
  },
  {
    title: 'Renewable Energy',
    description:
      'Integration of solar and wind power units into existing infrastructure. Hybrid energy complexes and balance management.',
    items: [
      'Solar & Wind Integration',
      'Energy Storage & Distribution',
      'Hybrid Energy Complexes',
    ],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5bc4f5" strokeWidth="1.5">
        <circle cx="12" cy="12" r="5" />
        <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
      </svg>
    ),
  },
  {
    title: 'SCADA & Digital',
    description:
      'Advanced telemetry, process control, and digital diagnostics. World-class dispatch center integration and cybersecurity.',
    items: [
      'SCADA & Telemetry Systems',
      'Industrial Networks & Cybersecurity',
      'Predictive Analytics & CMS',
    ],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5bc4f5" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
        <path d="M7 8l3 3 2-2 3 3" />
      </svg>
    ),
  },
  {
    title: 'Consulting & Engineering',
    description:
      'Project feasibility studies, system audits, technical regulations, and full licensing and certification support.',
    items: [
      'Project Feasibility Studies',
      'System Audits & Technical Regs',
      'Licensing & Certification',
    ],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5bc4f5" strokeWidth="1.5">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14,2 14,8 20,8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10,9 9,9 8,9" />
      </svg>
    ),
  },
]

export default function Services() {
  const ref = useRef<HTMLElement>(null)
  const isVisible = useScrollReveal(ref)

  return (
    <section
      ref={ref}
      id="services"
      className="relative overflow-hidden py-24 px-8 transition-all duration-700"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(32px)',
      }}
    >
      {/* Background image */}
      <img
        src="/images/horizontal-plant-in-the-desert-sunrise-dust.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: 'rgba(13,42,94,0.85)' }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Section header */}
        <div className="text-center mb-12">
          <p
            className="text-xs tracking-[0.2em] font-semibold mb-3"
            style={{ color: '#5bc4f5', fontFamily: "'Barlow', sans-serif" }}
          >
            WHAT WE OFFER
          </p>
          <h2
            className="text-5xl font-bold text-white"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Complete Energy Solutions
          </h2>
          <p
            className="text-base mt-3"
            style={{ color: 'rgba(255,255,255,0.5)', fontFamily: "'Barlow', sans-serif" }}
          >
            From concept to operation — full-cycle solutions for the energy future.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="rounded-lg p-6 transition-all duration-300"
              style={{
                backgroundColor: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget
                el.style.backgroundColor = 'rgba(255,255,255,0.1)'
                el.style.borderColor = 'rgba(91,196,245,0.3)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget
                el.style.backgroundColor = 'rgba(255,255,255,0.05)'
                el.style.borderColor = 'rgba(255,255,255,0.1)'
              }}
            >
              {/* Icon */}
              <div
                className="w-10 h-10 rounded flex items-center justify-center mb-4"
                style={{ backgroundColor: 'rgba(91,196,245,0.2)' }}
              >
                {service.icon}
              </div>

              <h3
                className="text-xl font-bold text-white mb-3"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {service.title}
              </h3>

              <p
                className="text-sm leading-relaxed mb-4"
                style={{ color: 'rgba(255,255,255,0.5)', fontFamily: "'Barlow', sans-serif" }}
              >
                {service.description}
              </p>

              <ul className="flex flex-col gap-1.5">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="text-xs"
                    style={{ color: 'rgba(255,255,255,0.4)', fontFamily: "'Barlow', sans-serif" }}
                  >
                    — {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

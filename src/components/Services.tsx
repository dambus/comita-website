interface ServiceCard {
  title: string
  description: string
  items: string[]
  icon: React.ReactNode
}

import type React from 'react'
import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import useScrollReveal from '../hooks/useScrollReveal'
import CTPattern from './CTPattern'

export default function Services() {
  const ref = useRef<HTMLElement>(null)
  const isVisible = useScrollReveal(ref)
  const { t } = useTranslation()

  const SERVICES: ServiceCard[] = [
    {
      title: t('services.epc.title'),
      description: t('services.epc.description'),
      items: [
        t('services.epc.item0'),
        t('services.epc.item1'),
        t('services.epc.item2'),
      ],
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#5bc4f5" strokeWidth="1.5">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        </svg>
      ),
    },
    {
      title: t('services.renewable.title'),
      description: t('services.renewable.description'),
      items: [
        t('services.renewable.item0'),
        t('services.renewable.item1'),
        t('services.renewable.item2'),
      ],
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#5bc4f5" strokeWidth="1.5">
          <circle cx="12" cy="12" r="5" />
          <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
        </svg>
      ),
    },
    {
      title: t('services.scada.title'),
      description: t('services.scada.description'),
      items: [
        t('services.scada.item0'),
        t('services.scada.item1'),
        t('services.scada.item2'),
      ],
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#5bc4f5" strokeWidth="1.5">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8M12 17v4" />
          <path d="M7 8l3 3 2-2 3 3" />
        </svg>
      ),
    },
    {
      title: t('services.consulting.title'),
      description: t('services.consulting.description'),
      items: [
        t('services.consulting.item0'),
        t('services.consulting.item1'),
        t('services.consulting.item2'),
      ],
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#5bc4f5" strokeWidth="1.5">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
          <polyline points="14,2 14,8 20,8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10,9 9,9 8,9" />
        </svg>
      ),
    },
  ]

  return (
    <section
      ref={ref}
      id="services"
      className="relative overflow-hidden py-32 px-8"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(32px)',
        transition: 'all 0.7s ease',
      }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/horizontal-almost-square-aerial-view-of-the-plant-from-top.jpg')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0d2a5e]/80" />

      {/* Pattern */}
      <CTPattern opacity={0.04} color="#5bc4f5" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-xs tracking-[0.2em] font-semibold mb-3 text-[#5bc4f5]"
            style={{ fontFamily: "'Barlow', sans-serif" }}
          >
            {t('services.overline')}
          </p>
          <h2
            className="text-5xl font-bold text-white mb-3"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            {t('services.heading')}
          </h2>
          <p
            className="text-white/60 text-lg"
            style={{ fontFamily: "'Barlow', sans-serif" }}
          >
            {t('services.subheading')}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="ct-panel bg-white/10 border border-white/15 p-6 hover:bg-white/15 hover:border-[#5bc4f5]/40 transition-all duration-300"
            >
              {/* Cyan line */}
              <div className="w-8 h-0.5 bg-[#5bc4f5] mb-6" />

              {/* Icon */}
              <div
                className="ct-panel-sm w-14 h-14 bg-[#5bc4f5]/20 flex items-center justify-center mb-4"
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3
                className="text-2xl font-bold text-white mb-3"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  textShadow: '0 0 30px rgba(91,196,245,0.3)',
                }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p
                className="text-white/75 leading-relaxed mb-4"
                style={{ fontFamily: "'Barlow', sans-serif", fontSize: '15px' }}
              >
                {service.description}
              </p>

              {/* List */}
              <ul className="flex flex-col gap-2">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="text-white/65"
                    style={{ fontFamily: "'Barlow', sans-serif", fontSize: '15px' }}
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

import { useState, useEffect } from 'react'
import CTPattern from './CTPattern'

const STATS = [
  { value: '504 km', label: 'PIPELINE BUILT' },
  { value: '12.87B m³', label: 'GAS / YEAR' },
  { value: '0', label: 'SAFETY INCIDENTS' },
  { value: '60+', label: 'SPECIALISTS' },
]

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#0d2a5e]"
    >
      {/* Background image with parallax */}
      <div
        className="absolute inset-0 bg-cover"
        style={{
          backgroundImage: "url('/images/Hero-bg.png')",
          backgroundPosition: 'center 85%',
          backgroundAttachment: 'fixed',
          opacity: 1,
          transform: `translateY(${scrollY * 0.4}px)`,
        }}
      />

      {/* Gradient overlay — stronger at bottom */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(13,42,94,0.33) 0%, rgba(13,42,94,0.4) 50%, rgba(13,42,94,0.65) 100%)',
        }}
      />

      {/* Pattern */}
      <CTPattern opacity={0.15} color="#5bc4f5" />

      {/* Main content */}
      <div className="relative z-10 flex flex-col justify-center pt-24 sm:pt-32 md:pt-40 min-h-screen px-4 sm:px-8 md:px-16 pb-24 md:pb-32">
        <div className="ct-panel-lg bg-[#0d2a5e]/75 backdrop-blur-sm p-6 sm:p-8 md:p-12 max-w-2xl">
          {/* Tag */}
          <p
            className="text-xs tracking-[0.2em] text-[#5bc4f5] font-semibold mb-2 sm:mb-3"
            style={{ fontFamily: "'Barlow', sans-serif" }}
          >
            EPC · O&M · DIGITAL
          </p>

          {/* Heading */}
          <h1
            className="hero-headline font-['Barlow_Condensed'] text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-3 sm:mb-4"
            style={{ color: '#ffffff' }}
          >
            Engineering, Automation &amp; Maintenance for <span className="text-[#5bc4f5]">Critical Gas Infrastructure</span>.
          </h1>

          {/* Subheading */}
          <p
            className="text-white/75 text-sm sm:text-base md:text-lg font-light max-w-lg mb-4 sm:mb-6"
            style={{ fontFamily: "'Barlow', sans-serif" }}
          >
            Full-cycle engineering, EPC support, operation and maintenance, SCADA and digital solutions for critical gas transmission and energy infrastructure.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button
              onClick={() => scrollTo('projects')}
              className="text-xs tracking-widest font-semibold px-4 sm:px-6 py-3 cursor-pointer border-0 transition-opacity hover:opacity-90 whitespace-nowrap"
              style={{
                backgroundColor: '#5bc4f5',
                color: '#0d2a5e',
                fontFamily: "'Barlow', sans-serif",
              }}
            >
              VIEW PROJECTS
            </button>
            <button
              onClick={() => scrollTo('services')}
              className="text-xs tracking-widest px-4 sm:px-6 py-3 cursor-pointer bg-transparent transition-opacity hover:opacity-80 whitespace-nowrap"
              style={{
                border: '1px solid rgba(91,196,245,0.4)',
                color: '#5bc4f5',
                fontFamily: "'Barlow', sans-serif",
              }}
            >
              OUR SERVICES
            </button>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div
        className="absolute bottom-0 left-0 right-0 bg-[#0d2a5e]/85 backdrop-blur-sm border-t border-white/10 py-6 sm:py-8 px-4 sm:px-8 md:px-16"
        style={{ borderColor: 'rgba(255,255,255,0.1)' }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center flex-wrap gap-4 sm:gap-6">
          {STATS.map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center">
              <span
                className="font-['Barlow_Condensed'] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#5bc4f5] leading-none"
              >
                {value}
              </span>
              <span
                className="text-[10px] sm:text-xs tracking-[0.15em] mt-1 sm:mt-2 block uppercase text-white/50"
                style={{ fontFamily: "'Barlow', sans-serif" }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

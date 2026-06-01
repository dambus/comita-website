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
          backgroundImage: "url('/images/horizontal-panoramic-view-pipeline-still-above-ground-blue-sky.jpg')",
          backgroundPosition: 'center 40%',
          backgroundAttachment: 'fixed',
          opacity: 0.6,
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />

      {/* Gradient overlay — stronger at bottom */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(13,42,94,0.2) 0%, rgba(13,42,94,0.6) 50%, rgba(13,42,94,0.95) 100%)',
        }}
      />

      {/* Pattern */}
      <CTPattern opacity={0.05} color="#5bc4f5" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: [
            'repeating-linear-gradient(0deg, transparent, transparent 79px, rgba(255,255,255,0.04) 79px, rgba(255,255,255,0.04) 80px)',
            'repeating-linear-gradient(90deg, transparent, transparent 79px, rgba(255,255,255,0.04) 79px, rgba(255,255,255,0.04) 80px)',
          ].join(', '),
        }}
      />

      {/* Main content */}
      <div className="relative z-10 flex flex-col justify-center pt-40 min-h-screen px-8 md:px-16 pb-32">
        <div className="ct-panel-lg bg-[#0d2a5e]/75 backdrop-blur-sm p-8 max-w-xl">
          {/* Tag */}
          <p
            className="text-xs tracking-[0.2em] text-[#5bc4f5] font-semibold mb-3"
            style={{ fontFamily: "'Barlow', sans-serif" }}
          >
            EPC · O&M · DIGITAL
          </p>

          {/* Heading */}
          <h1
            className="font-['Barlow_Condensed'] text-6xl md:text-7xl font-bold leading-tight tracking-tight mb-4"
            style={{ color: '#ffffff' }}
          >
            <span className="text-white block">Innovations</span>
            <span className="block" style={{ color: '#5bc4f5' }}>
              creating the
            </span>
            <span className="text-white block">future.</span>
          </h1>

          {/* Subheading */}
          <p
            className="text-white/75 text-base md:text-lg font-light max-w-lg mb-6"
            style={{ fontFamily: "'Barlow', sans-serif" }}
          >
            Full-cycle engineering and maintenance for critical gas transmission infrastructure across the region.
          </p>

          {/* Buttons */}
          <div className="flex gap-4">
            <button
              onClick={() => scrollTo('projects')}
              className="text-xs tracking-widest font-semibold px-6 py-3 cursor-pointer border-0 transition-opacity hover:opacity-90"
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
              className="text-xs tracking-widest px-6 py-3 cursor-pointer bg-transparent transition-opacity hover:opacity-80"
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
        className="absolute bottom-0 left-0 right-0 bg-[#0d2a5e]/85 backdrop-blur-sm border-t border-white/10 py-8 px-8 md:px-16"
        style={{ borderColor: 'rgba(255,255,255,0.1)' }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center flex-wrap gap-6">
          {STATS.map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center">
              <span
                className="font-['Barlow_Condensed'] text-4xl md:text-5xl font-bold text-[#5bc4f5] leading-none"
              >
                {value}
              </span>
              <span
                className="text-xs tracking-[0.15em] mt-2 block uppercase text-white/50"
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

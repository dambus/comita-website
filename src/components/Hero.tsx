import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import CTPattern from './CTPattern'

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)
  const { t, i18n } = useTranslation()
  const isSerbian = i18n.language === 'sr'

  const STATS = [
    { value: '504 km', label: t('hero.stats.pipelineBuilt') },
    { value: t('hero.stats.gasValue'), label: t('hero.stats.gasYear') },
    { value: '0', label: t('hero.stats.safetyIncidents') },
    { value: '60+', label: t('hero.stats.specialists') },
  ]

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
            {t('hero.tag')}
          </p>

          {/* Heading */}
          <h1
            className={`hero-headline text-4xl sm:text-4xl md:text-5xl lg:text-6xl mb-3 sm:mb-4 ${
              isSerbian
                ? "font-['Barlow'] font-semibold leading-[1.08] tracking-[-0.02em]"
                : "font-['Barlow_Condensed'] font-bold leading-tight tracking-tight"
            }`}
            style={{ color: '#ffffff' }}
          >
            {t('hero.headingStart')}<span className="text-[#5bc4f5]">{t('hero.headingHighlight')}</span>
          </h1>

          {/* Subheading */}
          <p
            className="text-white/75 text-[15px] sm:text-[17px] md:text-lg font-light max-w-lg mb-4 sm:mb-6"
            style={{ fontFamily: "'Barlow', sans-serif" }}
          >
            {t('hero.subheading')}
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
              {t('hero.btn1')}
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
              {t('hero.btn2')}
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

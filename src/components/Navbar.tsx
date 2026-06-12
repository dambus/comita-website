import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { NAV_LINKS, type NavLink } from './navigation'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { t, i18n } = useTranslation()

  const navigate = useNavigate()
  const location = useLocation()

  const toggleLang = () => i18n.changeLanguage(i18n.language === 'en' ? 'sr' : 'en')
  const currentLang = i18n.language === 'sr' ? 'СРБ' : 'ENG'
  const otherLang = i18n.language === 'sr' ? 'ENG' : 'СРБ'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLink = (link: NavLink) => {
    setMobileOpen(false)

    if (link.route) {
      navigate(link.route)
      return
    }

    if (location.pathname === '/') {
      document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/', { state: { scrollTo: link.id } })
    }
  }

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={scrolled ? { backgroundColor: '#0d2a5e', boxShadow: '0 4px 24px rgba(0,0,0,0.3)' } : {}}
      >
        <div className="flex items-center justify-between px-6 md:px-10 py-4">
          {/* Logo */}
          <button
            onClick={() => handleLink({ label: 'Home', id: 'home', labelKey: 'navbar.home' })}
            className="flex items-center bg-transparent border-0 cursor-pointer p-0"
          >
            <img src="/logo/CT_logo_white_text_blue_logo.png" className="h-10 w-auto" alt="Comita Technics DOO Beograd" />
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLink(link)}
                className="text-xs tracking-wide transition-colors duration-200 bg-transparent border-0 cursor-pointer p-0 text-left"
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  color: link.route && location.pathname === link.route
                    ? '#5bc4f5'
                    : 'rgba(255,255,255,0.70)',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#ffffff' }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color =
                    link.route && location.pathname === link.route
                      ? '#5bc4f5'
                      : 'rgba(255,255,255,0.70)'
                }}
              >
                {t(link.labelKey)}
              </button>
            ))}

            {/* Language switcher */}
            <button
              onClick={toggleLang}
              className="text-xs font-semibold tracking-widest px-3 py-1.5 transition-all duration-200 cursor-pointer"
              style={{
                border: '1px solid rgba(255,255,255,0.3)',
                color: '#ffffff',
                fontFamily: "'Barlow', sans-serif",
                backgroundColor: 'transparent',
              }}
              onMouseEnter={e => {
                ;(e.currentTarget as HTMLButtonElement).style.borderColor = '#5bc4f5'
                ;(e.currentTarget as HTMLButtonElement).style.color = '#5bc4f5'
              }}
              onMouseLeave={e => {
                ;(e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.3)'
                ;(e.currentTarget as HTMLButtonElement).style.color = '#ffffff'
              }}
              aria-label={`Switch to ${otherLang}`}
            >
              {currentLang}
            </button>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.25 bg-transparent border-0 cursor-pointer p-1"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <span className="w-6 h-px bg-white block" />
            <span className="w-6 h-px bg-white block" />
            <span className="w-6 h-px bg-white block" />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-100 flex flex-col items-center justify-center"
          style={{ backgroundColor: '#0d2a5e' }}
        >
          <button
            className="absolute top-5 right-6 text-white text-4xl leading-none bg-transparent border-0 cursor-pointer"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            ×
          </button>
          <div className="flex flex-col items-center gap-8 px-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLink(link)}
                className="text-2xl font-bold tracking-wide transition-colors duration-200 bg-transparent border-0 cursor-pointer text-center"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  color: link.route && location.pathname === link.route
                    ? '#5bc4f5'
                    : 'rgba(255,255,255,0.70)',
                }}
              >
                {t(link.labelKey)}
              </button>
            ))}

            {/* Language switcher — mobile */}
            <button
              onClick={toggleLang}
              className="text-sm font-semibold tracking-widest px-6 py-2 transition-all duration-200 cursor-pointer mt-2"
              style={{
                border: '1px solid rgba(255,255,255,0.3)',
                color: '#ffffff',
                fontFamily: "'Barlow', sans-serif",
                backgroundColor: 'transparent',
              }}
              aria-label={`Switch to ${otherLang}`}
            >
              {currentLang}
            </button>
          </div>
        </div>
      )}
    </>
  )
}

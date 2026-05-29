import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { label: 'ABOUT', id: 'about' },
  { label: 'PROJECTS', id: 'projects' },
  { label: 'SERVICES', id: 'services' },
  { label: 'TEAM', id: 'team' },
  { label: 'CONTACT', id: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
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
            onClick={() => scrollTo('home')}
            className="flex items-center gap-2.5 bg-transparent border-0 cursor-pointer p-0"
          >
            <span
              className="text-xl font-bold leading-none"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", color: '#5bc4f5' }}
            >
              CT
            </span>
            <div
              className="flex flex-col leading-none"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              <span className="text-[11px] font-bold tracking-widest text-white leading-tight">
                COMITA
              </span>
              <span className="text-[11px] font-bold tracking-widest text-white leading-tight">
                TECHNICS
              </span>
            </div>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-xs tracking-widest text-white/70 hover:text-white transition-colors duration-200 bg-transparent border-0 cursor-pointer p-0"
                style={{ fontFamily: "'Barlow', sans-serif" }}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px] bg-transparent border-0 cursor-pointer p-1"
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
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
          style={{ backgroundColor: '#0d2a5e' }}
        >
          <button
            className="absolute top-5 right-6 text-white text-4xl leading-none bg-transparent border-0 cursor-pointer"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            ×
          </button>
          <div className="flex flex-col items-center gap-10">
            {NAV_LINKS.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-2xl font-bold tracking-widest text-white/70 hover:text-white transition-colors duration-200 bg-transparent border-0 cursor-pointer"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  )
}

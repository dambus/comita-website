import { useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useScrollReveal from '../hooks/useScrollReveal'
import CTPattern from '../components/CTPattern'

// ── Inline SVG icons ──────────────────────────────────────────────────────────

const IconGraduationCap = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c3 3 9 3 12 0v-5" />
  </svg>
)
const IconShieldCheck = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
)
const IconLeaf = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
  </svg>
)
const IconUsers = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
)
const IconFlask = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
    <path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2" />
    <path d="M8.5 2h7" />
    <path d="M7 16h10" />
  </svg>
)
const IconHeartHandshake = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66" />
    <path d="m18 15-2-2" />
    <path d="m15 18-2-2" />
  </svg>
)
const IconLandmark = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
    <line x1="3" x2="21" y1="22" y2="22" />
    <line x1="6" x2="6" y1="18" y2="11" />
    <line x1="10" x2="10" y1="18" y2="11" />
    <line x1="14" x2="14" y1="18" y2="11" />
    <line x1="18" x2="18" y1="18" y2="11" />
    <polygon points="12 2 20 7 4 7" />
  </svg>
)
const IconMail = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
)
const IconPhone = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.5 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.18 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
)
const IconArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
)
const IconArrowDown = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
    <path d="M12 5v14M5 12l7 7 7-7" />
  </svg>
)
const IconCheck = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5bc4f5" strokeWidth="2.5" aria-hidden="true" className="shrink-0 mt-0.5">
    <path d="M20 6 9 17l-5-5" />
  </svg>
)
const IconDiamond = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className="shrink-0 mt-0.5" style={{ color: '#0d2a5e' }}>
    <polygon points="12 2 22 12 12 22 2 12" />
  </svg>
)
const IconAlertTriangle = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0d2a5e" strokeWidth="1.75" aria-hidden="true">
    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
    <path d="M12 9v4" />
    <path d="M12 17h.01" />
  </svg>
)

// ── Data ──────────────────────────────────────────────────────────────────────

const AREAS = [
  { icon: <IconGraduationCap />, title: 'Education & Professional Development', text: 'Supporting educational institutions, technical training programs, student competitions, scholarships, and initiatives that foster knowledge and innovation.' },
  { icon: <IconShieldCheck />, title: 'Safety & Workplace Excellence', text: 'Projects that promote occupational health and safety, emergency preparedness, and the development of a strong safety culture.' },
  { icon: <IconLeaf />, title: 'Environmental Protection', text: 'Activities aimed at environmental preservation, sustainability, energy efficiency, waste reduction, and ecological awareness.' },
  { icon: <IconUsers />, title: 'Community Development', text: 'Supporting local initiatives that improve living conditions, strengthen communities, and create opportunities for social inclusion.' },
  { icon: <IconFlask />, title: 'Science & Innovation', text: 'Encouraging research, technological development, engineering excellence, and innovation-oriented projects.' },
  { icon: <IconHeartHandshake />, title: 'Humanitarian & Social Initiatives', text: 'Providing support for charitable organizations, humanitarian actions, and projects assisting vulnerable groups.' },
]

const WHO_CAN_APPLY = [
  'Educational institutions',
  'Non-governmental organizations (NGOs)',
  'Professional associations',
  'Scientific and research organizations',
  'Local community organizations',
  'Humanitarian and charitable institutions',
  'Cultural and sports organizations',
]

const CRITERIA = [
  "Alignment with Comita Technics' values and business principles",
  'Social impact and public benefit',
  'Feasibility and transparency of the project',
  'Long-term sustainability of results',
  'Compliance with applicable laws and regulations',
]

const STEPS = [
  {
    num: '01',
    title: 'Send Your Request',
    text: 'Send your sponsorship or donation request directly via email to donations@comitatechnics.com with a brief description of your organization and initiative.',
    email: true,
  },
  {
    num: '02',
    title: 'Provide Details',
    text: 'Provide detailed information about the organization, project objectives, expected outcomes, and funding requirements.',
    email: false,
  },
  {
    num: '03',
    title: 'Review Process',
    text: 'Our team reviews the application and may request additional information if necessary.',
    email: false,
  },
  {
    num: '04',
    title: 'Decision',
    text: 'Applicants are informed of the decision following the evaluation process.',
    email: false,
  },
]

// ── Shared style helper ───────────────────────────────────────────────────────

const revealStyle = (visible: boolean): React.CSSProperties => ({
  opacity: visible ? 1 : 0,
  transform: visible ? 'translateY(0)' : 'translateY(32px)',
  transition: 'all 0.7s ease',
})

// ── Card hover helpers ────────────────────────────────────────────────────────

const cardIn = (e: React.MouseEvent<HTMLDivElement>) => {
  const el = e.currentTarget
  el.style.transform = 'translateY(-4px)'
  el.style.boxShadow = '0 12px 32px rgba(13,42,94,0.12)'
  el.style.borderLeftColor = '#5bc4f5'
}
const cardOut = (e: React.MouseEvent<HTMLDivElement>) => {
  const el = e.currentTarget
  el.style.transform = 'translateY(0)'
  el.style.boxShadow = 'none'
  el.style.borderLeftColor = 'rgba(13,42,94,0.12)'
}

// ── Page component ────────────────────────────────────────────────────────────

export default function SponsorshipsPage() {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  const aboutRef     = useRef<HTMLElement>(null)
  const areasRef     = useRef<HTMLElement>(null)
  const eligRef      = useRef<HTMLElement>(null)
  const processRef   = useRef<HTMLElement>(null)
  const disclaimerRef = useRef<HTMLElement>(null)
  const contactRef   = useRef<HTMLElement>(null)

  const aboutVisible      = useScrollReveal(aboutRef)
  const areasVisible      = useScrollReveal(areasRef)
  const eligVisible       = useScrollReveal(eligRef)
  const processVisible    = useScrollReveal(processRef)
  const disclaimerVisible = useScrollReveal(disclaimerRef)
  const contactVisible    = useScrollReveal(contactRef)

  const scrollToContact = () =>
    document.getElementById('sp-contact')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <>
      {/* ═══════════════════════════════════════════════════
          SECTION 1 — HERO
      ═══════════════════════════════════════════════════ */}
      <section id="sp-hero" className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-[#0d2a5e]">

        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover"
          style={{
            backgroundImage: "url('/images/sponsorship/CT%20_%20sponsor%20page.png')",
            backgroundPosition: 'center 30%',
          }}
          aria-hidden="true"
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(13,42,94,0.55) 0%, rgba(13,42,94,0.60) 50%, rgba(8,29,66,0.92) 100%)' }}
          aria-hidden="true"
        />
        <CTPattern opacity={0.08} color="#5bc4f5" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full pt-32 md:pt-40">
          <p
            className="text-xs tracking-[0.2em] font-semibold mb-4"
            style={{ color: '#5bc4f5', fontFamily: "'Barlow', sans-serif" }}
          >
            CORPORATE SOCIAL RESPONSIBILITY
          </p>
          <h1
            className="font-bold text-white leading-tight mb-6"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 'clamp(40px, 6vw, 76px)', maxWidth: '800px' }}
          >
            Supporting Initiatives That<br />Create Lasting Value for Society
          </h1>
          <p
            className="mb-10 max-w-xl leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.72)', fontSize: 'clamp(16px, 1.5vw, 18px)', fontFamily: "'Barlow', sans-serif" }}
          >
            Comita Technics is committed to responsible business practices and contributing to
            the sustainable development of the communities in which we operate. Through sponsorships
            and donations, we support projects that promote education, safety, environmental
            protection, innovation, and social well-being.
          </p>
          <div className="flex gap-4 flex-wrap mb-16">
            <a
              href="#sp-about"
              className="inline-flex items-center gap-2 font-semibold px-6 py-3 transition-all duration-200"
              style={{ backgroundColor: '#5bc4f5', color: '#0d2a5e', fontSize: '15px', fontFamily: "'Barlow', sans-serif", textDecoration: 'none' }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#3aafde' }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#5bc4f5' }}
            >
              Learn About Our Program <IconArrowDown />
            </a>
            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 font-semibold px-6 py-3 transition-all duration-200 cursor-pointer"
              style={{ backgroundColor: 'transparent', color: '#ffffff', border: '1.5px solid rgba(255,255,255,0.45)', fontSize: '15px', fontFamily: "'Barlow', sans-serif" }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'rgba(255,255,255,0.1)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'transparent' }}
            >
              Get in Touch <IconArrowRight />
            </button>
          </div>
        </div>

        {/* Stats bar */}
        <div
          className="relative z-10"
          style={{ backgroundColor: 'rgba(8,29,66,0.85)', backdropFilter: 'blur(8px)', borderTop: '1px solid rgba(91,196,245,0.2)' }}
        >
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 sm:grid-cols-3" role="list" aria-label="Program statistics">
            {[
              { value: '7', label: 'Support Areas', cyan: true },
              { value: 'Since 2021', label: 'Active CSR Commitment', cyan: false },
              { value: 'Serbia & Region', label: 'Regions Covered', cyan: false },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className="py-7 px-4 md:px-8"
                style={{ borderRight: i < 2 ? '1px solid rgba(255,255,255,0.08)' : undefined }}
                role="listitem"
              >
                <div
                  className="font-bold leading-none mb-1"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 'clamp(28px, 3.5vw, 44px)', color: stat.cyan ? '#5bc4f5' : '#ffffff' }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-xs tracking-widest uppercase"
                  style={{ color: 'rgba(255,255,255,0.45)', fontFamily: "'Barlow', sans-serif" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 2 — ABOUT THE PROGRAM
      ═══════════════════════════════════════════════════ */}
      <section
        ref={aboutRef}
        id="sp-about"
        className="py-28 px-8 bg-white"
        style={revealStyle(aboutVisible)}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-16 items-center">

          {/* Left: text + quote */}
          <div>
            <p className="text-xs tracking-[0.2em] font-semibold mb-4 text-[#5bc4f5]" style={{ fontFamily: "'Barlow', sans-serif" }}>
              ABOUT THE PROGRAM
            </p>
            <h2
              className="font-bold text-[#0d2a5e] mb-6 leading-tight"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 'clamp(32px, 3.5vw, 48px)' }}
            >
              About Our Sponsorship and Donation Program
            </h2>
            <p className="text-[#4a5568] mb-4 leading-relaxed" style={{ fontSize: '17px', fontFamily: "'Barlow', sans-serif" }}>
              Comita Technics is a company specializing in technical maintenance, engineering services,
              and critical infrastructure support. We recognize that our work shapes not just energy
              systems — but the communities around them.
            </p>
            <p className="text-[#4a5568] mb-4 leading-relaxed" style={{ fontSize: '17px', fontFamily: "'Barlow', sans-serif" }}>
              Our sponsorship and donation activities are focused on initiatives that deliver measurable
              benefits, encourage professional development, improve quality of life, and contribute to
              the advancement of local communities.
            </p>
            <p className="text-[#4a5568] mb-6 leading-relaxed" style={{ fontSize: '17px', fontFamily: "'Barlow', sans-serif" }}>
              We carefully evaluate all requests to ensure alignment with our corporate values and social
              responsibility objectives.
            </p>
            <div className="pl-5 py-4 pr-4" style={{ borderLeft: '4px solid #5bc4f5', backgroundColor: '#f4f6fa' }}>
              <p className="font-semibold text-[#0d2a5e] italic leading-snug" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '22px' }}>
                "Together, we build infrastructure that lasts — and communities that thrive."
              </p>
            </div>
          </div>

          {/* Right: image + value chips */}
          <div>
            <img
              src="/images/sponsorship/Sponsor%20page%20pic%202-3.png"
              alt="Comita Technics engineers and community engagement"
              className="w-full object-cover ct-panel"
              style={{ height: '380px' }}
            />
            <div className="grid grid-cols-2 gap-px mt-2" style={{ backgroundColor: 'rgba(13,42,94,0.08)' }}>
              {['Safety', 'Community', 'Heritage', 'Innovation'].map(val => (
                <div key={val} className="bg-white px-4 py-3 flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#5bc4f5] shrink-0" />
                  <p className="font-bold text-[#0d2a5e] tracking-wide uppercase" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '15px' }}>
                    {val}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 3 — AREAS WE SUPPORT
      ═══════════════════════════════════════════════════ */}
      <section
        ref={areasRef}
        id="sp-areas"
        className="py-28 px-8 relative overflow-hidden"
        style={{ ...revealStyle(areasVisible), backgroundColor: '#f4f6fa' }}
      >
        <CTPattern opacity={0.04} color="#0d2a5e" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.2em] font-semibold mb-3 text-[#5bc4f5]" style={{ fontFamily: "'Barlow', sans-serif" }}>
              WHAT WE SUPPORT
            </p>
            <h2
              className="font-bold text-[#0d2a5e] mb-4"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 'clamp(32px, 3.5vw, 52px)' }}
            >
              Areas We Support
            </h2>
            <p className="text-[#4a5568] max-w-lg mx-auto leading-relaxed" style={{ fontSize: '17px', fontFamily: "'Barlow', sans-serif" }}>
              We direct our resources toward seven key areas that align with our engineering values and community commitment.
            </p>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" role="list">
            {AREAS.map((area, i) => (
              <div
                key={area.title}
                className="bg-white p-8 cursor-default transition-all duration-200"
                style={{ borderLeft: '4px solid rgba(13,42,94,0.12)', transitionDelay: `${i * 0.05}s` }}
                onMouseEnter={cardIn}
                onMouseLeave={cardOut}
                role="listitem"
              >
                <div className="w-12 h-12 flex items-center justify-center mb-5 text-[#0d2a5e]" style={{ backgroundColor: 'rgba(13,42,94,0.06)' }}>
                  {area.icon}
                </div>
                <h3 className="font-bold text-[#0d2a5e] mb-2 leading-snug" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '20px' }}>
                  {area.title}
                </h3>
                <p className="text-[#4a5568] leading-relaxed" style={{ fontSize: '15px', fontFamily: "'Barlow', sans-serif" }}>
                  {area.text}
                </p>
              </div>
            ))}

            {/* Card 7 — Cultural Heritage (featured, spans 2 cols) */}
            <div
              className="relative overflow-hidden col-span-1 md:col-span-2 cursor-default transition-transform duration-300 group"
              style={{ minHeight: '260px' }}
              role="listitem"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.03]"
                style={{ backgroundImage: "url('/images/sponsorship/Sponsor%20page%20pic%207.png')" }}
                aria-hidden="true"
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(13,42,94,0.90) 40%, rgba(13,42,94,0.50) 100%)' }}
                aria-hidden="true"
              />
              <div className="relative z-10 p-8 flex flex-col justify-end h-full" style={{ minHeight: '260px' }}>
                <div className="w-12 h-12 flex items-center justify-center mb-5 text-[#5bc4f5]" style={{ backgroundColor: 'rgba(255,255,255,0.12)' }}>
                  <IconLandmark />
                </div>
                <h3 className="font-bold text-white mb-2 leading-snug" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '24px' }}>
                  Cultural &amp; Religious Heritage
                </h3>
                <p className="leading-relaxed mb-3" style={{ color: 'rgba(255,255,255,0.75)', fontSize: '15px', fontFamily: "'Barlow', sans-serif" }}>
                  Supporting the preservation, restoration, and promotion of cultural and religious heritage sites, as well as projects that strengthen community identity and social cohesion.
                </p>
                <p className="italic" style={{ color: '#5bc4f5', fontSize: '13px', fontFamily: "'Barlow', sans-serif" }}>
                  "Applying engineering precision to the preservation of cultural landmarks."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 4 — ELIGIBILITY
      ═══════════════════════════════════════════════════ */}
      <section
        ref={eligRef}
        id="sp-eligibility"
        className="py-28 px-8 bg-white"
        style={revealStyle(eligVisible)}
      >
        <div className="max-w-7xl mx-auto">
          <h2
            className="font-bold text-[#0d2a5e] mb-12 text-center"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 'clamp(30px, 3vw, 46px)' }}
          >
            Who Can Apply &amp; How We Evaluate
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Who can apply */}
            <div>
              <h3
                className="font-bold text-[#0d2a5e] mb-6 pb-3"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '22px', borderBottom: '2px solid #5bc4f5' }}
              >
                Who Can Apply
              </h3>
              <p className="text-[#4a5568] mb-5 leading-relaxed" style={{ fontSize: '16px', fontFamily: "'Barlow', sans-serif" }}>
                Comita Technics considers applications from:
              </p>
              <ul className="flex flex-col gap-3" role="list">
                {WHO_CAN_APPLY.map(item => (
                  <li key={item} className="flex items-start gap-3 text-[#4a5568] leading-snug" style={{ fontSize: '16px', fontFamily: "'Barlow', sans-serif" }}>
                    <IconCheck />
                    {item}
                  </li>
                ))}
                <li
                  className="flex items-start gap-3 mt-2 p-4 text-[#0d2a5e]"
                  style={{ backgroundColor: 'rgba(91,196,245,0.08)', borderLeft: '3px solid #5bc4f5', fontSize: '14px', fontFamily: "'Barlow', sans-serif" }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5bc4f5" strokeWidth="2" aria-hidden="true" className="shrink-0 mt-0.5">
                    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" /><path d="M12 9v4" /><path d="M12 17h.01" />
                  </svg>
                  Applications from individuals are generally not considered unless submitted through a registered organization.
                </li>
              </ul>
            </div>

            {/* Evaluation criteria */}
            <div>
              <h3
                className="font-bold text-[#0d2a5e] mb-6 pb-3"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '22px', borderBottom: '2px solid #5bc4f5' }}
              >
                Evaluation Criteria
              </h3>
              <p className="text-[#4a5568] mb-5 leading-relaxed" style={{ fontSize: '16px', fontFamily: "'Barlow', sans-serif" }}>
                Each application is assessed based on:
              </p>
              <ul className="flex flex-col gap-4" role="list">
                {CRITERIA.map(item => (
                  <li key={item} className="flex items-start gap-3 text-[#4a5568] leading-snug" style={{ fontSize: '16px', fontFamily: "'Barlow', sans-serif" }}>
                    <IconDiamond />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 5 — APPLICATION PROCESS
      ═══════════════════════════════════════════════════ */}
      <section
        ref={processRef}
        id="sp-process"
        className="py-28 px-8 relative overflow-hidden"
        style={{ ...revealStyle(processVisible), backgroundColor: '#f4f6fa' }}
      >
        <CTPattern opacity={0.03} color="#0d2a5e" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.2em] font-semibold mb-3 text-[#5bc4f5]" style={{ fontFamily: "'Barlow', sans-serif" }}>
              HOW IT WORKS
            </p>
            <h2
              className="font-bold text-[#0d2a5e] mb-3"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 'clamp(30px, 3.5vw, 48px)' }}
            >
              Application Process
            </h2>
            <p className="text-[#4a5568]" style={{ fontSize: '17px', fontFamily: "'Barlow', sans-serif" }}>
              A straightforward four-step process — transparent, fair, and efficient.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative" role="list">
            {/* Connector line (desktop only) */}
            <div
              className="hidden lg:block absolute h-0.5 z-0 pointer-events-none"
              style={{
                top: '28px',
                left: 'calc(12.5% + 28px)',
                right: 'calc(12.5% + 28px)',
                background: 'linear-gradient(to right, #5bc4f5 0%, rgba(91,196,245,0.3) 100%)',
              }}
              aria-hidden="true"
            />
            {STEPS.map((step, i) => (
              <div
                key={step.num}
                className="bg-white p-7 relative z-10 transition-all duration-200 cursor-default"
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.transform = 'translateY(-4px)'
                  el.style.boxShadow = '0 12px 32px rgba(13,42,94,0.10)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.transform = 'translateY(0)'
                  el.style.boxShadow = 'none'
                }}
                style={{ transitionDelay: `${i * 0.08}s` }}
                role="listitem"
              >
                <div
                  className="w-14 h-14 flex items-center justify-center mb-6 font-bold relative z-20 shrink-0"
                  style={{ backgroundColor: '#0d2a5e', fontFamily: "'Barlow Condensed', sans-serif", fontSize: '24px', color: '#5bc4f5' }}
                >
                  {step.num}
                </div>
                <h3 className="font-bold text-[#0d2a5e] mb-3" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '20px' }}>
                  {step.title}
                </h3>
                <p className="text-[#4a5568] leading-relaxed" style={{ fontSize: '15px', fontFamily: "'Barlow', sans-serif" }}>
                  {step.email
                    ? <>
                        Send your sponsorship or donation request directly via email to{' '}
                        <a href="mailto:donations@comitatechnics.com" className="underline text-[#0d2a5e]">
                          donations@comitatechnics.com
                        </a>{' '}
                        with a brief description of your organization and initiative.
                      </>
                    : step.text
                  }
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 6 — DISCLAIMER
      ═══════════════════════════════════════════════════ */}
      <section
        ref={disclaimerRef}
        id="sp-disclaimer"
        className="py-14 px-8"
        style={{ ...revealStyle(disclaimerVisible), backgroundColor: '#eef2f9', borderTop: '1px solid rgba(13,42,94,0.10)', borderBottom: '1px solid rgba(13,42,94,0.10)' }}
      >
        <div className="max-w-7xl mx-auto flex gap-8 items-start">
          <div className="w-12 h-12 flex items-center justify-center shrink-0 mt-1" style={{ backgroundColor: 'rgba(13,42,94,0.08)' }}>
            <IconAlertTriangle />
          </div>
          <div>
            <h3 className="font-bold text-[#0d2a5e] mb-3" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '20px' }}>
              Important Information
            </h3>
            <p className="text-[#4a5568] mb-3" style={{ fontSize: '15px', fontFamily: "'Barlow', sans-serif" }}>
              Comita Technics reserves the right to:
            </p>
            <ul className="flex flex-col gap-1 mb-4">
              {[
                'Request additional documentation',
                'Decline applications that do not meet established criteria',
                'Prioritize projects based on available resources and strategic priorities',
              ].map(item => (
                <li
                  key={item}
                  className="pl-4 relative text-[#4a5568] leading-relaxed"
                  style={{ fontSize: '15px', fontFamily: "'Barlow', sans-serif" }}
                >
                  <span className="absolute left-0" style={{ color: 'rgba(13,42,94,0.5)' }}>•</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="italic text-[#4a5568]" style={{ fontSize: '14px', fontFamily: "'Barlow', sans-serif" }}>
              Submission of an application does not constitute an obligation on the part of Comita Technics to provide sponsorship or financial support.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 7 — CONTACT / CTA
      ═══════════════════════════════════════════════════ */}
      <section
        ref={contactRef}
        id="sp-contact"
        className="py-28 px-8 relative overflow-hidden text-center"
        style={{ ...revealStyle(contactVisible), backgroundColor: '#0d2a5e' }}
      >
        <CTPattern opacity={0.07} color="#5bc4f5" />

        <div className="max-w-3xl mx-auto relative z-10">
          <p className="text-xs tracking-[0.2em] font-semibold mb-4 text-[#5bc4f5]" style={{ fontFamily: "'Barlow', sans-serif" }}>
            GET IN TOUCH
          </p>
          <h2
            className="font-bold text-white mb-5"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 'clamp(30px, 3.5vw, 50px)' }}
          >
            Questions About Sponsorships and Donations?
          </h2>
          <p
            className="mb-10 max-w-xl mx-auto leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.70)', fontSize: '17px', fontFamily: "'Barlow', sans-serif" }}
          >
            To apply or to learn more about our program, reach out to our team directly by email.
            We review all inquiries and will respond as soon as possible.
          </p>

          {/* Contact items */}
          <div className="flex justify-center gap-8 flex-wrap mb-10">
            {[
              { icon: <IconMail />, href: 'mailto:donations@comitatechnics.com', label: 'donations@comitatechnics.com' },
              { icon: <IconMail />, href: 'mailto:office@cmtech.rs', label: 'office@cmtech.rs' },
              { icon: <IconPhone />, href: 'tel:+381113818100', label: '+381 (11) 3818100' },
            ].map(item => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-2 transition-colors duration-200"
                style={{ color: 'rgba(255,255,255,0.80)', fontSize: '16px', fontFamily: "'Barlow', sans-serif" }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#5bc4f5' }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.80)' }}
              >
                <span style={{ color: '#5bc4f5' }}>{item.icon}</span>
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="mailto:donations@comitatechnics.com"
              className="inline-flex items-center gap-2 font-semibold px-6 py-3 transition-all duration-200"
              style={{ backgroundColor: '#5bc4f5', color: '#0d2a5e', fontSize: '15px', fontFamily: "'Barlow', sans-serif", textDecoration: 'none' }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#3aafde' }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#5bc4f5' }}
            >
              Send an Email <IconMail size={16} />
            </a>
            <button
              onClick={() => navigate('/', { state: { scrollTo: 'sponsorships' } })}
              className="inline-flex items-center gap-2 font-semibold px-6 py-3 transition-all duration-200 cursor-pointer"
              style={{ backgroundColor: 'transparent', color: '#ffffff', border: '1.5px solid rgba(255,255,255,0.45)', fontSize: '15px', fontFamily: "'Barlow', sans-serif" }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'rgba(255,255,255,0.10)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'transparent' }}
            >
              Back to Main Site <IconArrowRight />
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

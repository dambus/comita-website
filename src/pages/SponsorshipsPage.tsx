import { useEffect, useRef, type CSSProperties } from 'react'
import { useNavigate } from 'react-router-dom'
import CTPattern from '../components/CTPattern'
import useScrollReveal from '../hooks/useScrollReveal'

const bodyTextStyle: CSSProperties = {
  fontFamily: "'Barlow', sans-serif",
  fontSize: '17px',
  color: '#2d3748',
  lineHeight: 1.625,
  marginBottom: '24px',
}

const revealStyle = (visible: boolean): CSSProperties => ({
  opacity: visible ? 1 : 0,
  transform: visible ? 'translateY(0)' : 'translateY(32px)',
  transition: 'all 0.7s ease',
})

export default function SponsorshipsPage() {
  const navigate = useNavigate()
  const contentRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)
  const contentVisible = useScrollReveal(contentRef)
  const contactVisible = useScrollReveal(contactRef)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [])

  return (
    <>
      <section id="sp-hero" className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-[#0d2a5e]">
        <div
          className="absolute inset-0 bg-cover"
          style={{
            backgroundImage: "url('/images/sponsorship/CT%20_%20sponsor%20page.png')",
            backgroundPosition: 'center 30%',
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(13,42,94,0.55) 0%, rgba(13,42,94,0.65) 60%, rgba(8,29,66,0.92) 100%)',
          }}
          aria-hidden="true"
        />
        <CTPattern opacity={0.08} color="#5bc4f5" />

        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full pt-32 pb-20">
          <p
            className="text-xs tracking-[0.2em] font-semibold mb-4"
            style={{ color: '#5bc4f5', fontFamily: "'Barlow', sans-serif" }}
          >
            CORPORATE SOCIAL RESPONSIBILITY
          </p>
          <h1
            className="font-bold text-white mb-6"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 'clamp(40px, 6vw, 72px)' }}
          >
            Sponsorships &amp; Donations
          </h1>
          <p
            className="max-w-xl"
            style={{
              color: 'rgba(255,255,255,0.72)',
              fontFamily: "'Barlow', sans-serif",
              fontSize: 'clamp(16px,1.5vw,18px)',
            }}
          >
            Comita Technics DOO Beograd is committed to responsible business practices and contributing to the sustainable development of the communities in which we operate.
          </p>
        </div>
      </section>

      <section id="sp-quote" className="py-16 px-8 w-full" style={{ backgroundColor: '#1a4a9e' }}>
        <div className="max-w-4xl mx-auto text-center">
          <p
            className="font-bold text-white leading-snug"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: 'clamp(22px, 2.5vw, 32px)',
              fontStyle: 'italic',
            }}
          >
            We are committed to supporting initiatives that create lasting value - for the communities where we live and work, and for the society we are part of.
          </p>
        </div>
      </section>

      <section
        ref={contentRef}
        id="sp-content"
        className="bg-white py-20 px-8"
        style={revealStyle(contentVisible)}
      >
        <div className="max-w-3xl mx-auto">
          <p style={bodyTextStyle}>
            Comita Technics DOO Beograd recognizes that our work shapes not just energy systems - but the communities around them. Our sponsorship and donation activities are focused on initiatives that deliver measurable benefits, encourage professional development, improve quality of life, and contribute to the advancement of local communities.
          </p>
          <p style={bodyTextStyle}>
            We carefully evaluate all requests to ensure alignment with our corporate values and social responsibility objectives. Priority is given to projects with clear, long-term positive impact on the communities where we operate.
          </p>

          <hr style={{ border: 'none', borderTop: '1px solid rgba(13,42,94,0.10)', margin: '2rem 0' }} />

          <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: '17px', color: '#2d3748', marginBottom: '8px' }}>
            To submit a <strong>sponsorship</strong> request, please provide:
          </p>
          <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
            <li style={{ marginBottom: '8px', fontFamily: "'Barlow', sans-serif", fontSize: '17px', color: '#2d3748' }}>
              Completed{' '}
              <a
                href="/documents/prijava-sponzorstvo-donacija.docx"
                download
                style={{ color: '#1a4a9e', textDecoration: 'underline', fontWeight: 600 }}
              >
                Application Form for Sponsorship / Donation
              </a>
            </li>
          </ul>

          <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: '17px', color: '#2d3748', marginBottom: '8px' }}>
            To submit a <strong>donation</strong> request, please provide:
          </p>
          <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
            <li style={{ marginBottom: '8px', fontFamily: "'Barlow', sans-serif", fontSize: '17px', color: '#2d3748' }}>
              Completed{' '}
              <a
                href="/documents/prijava-sponzorstvo-donacija.docx"
                download
                style={{ color: '#1a4a9e', textDecoration: 'underline', fontWeight: 600 }}
              >
                Application Form for Sponsorship / Donation
              </a>
            </li>
            <li style={{ marginBottom: '8px', fontFamily: "'Barlow', sans-serif", fontSize: '17px', color: '#2d3748' }}>
              Completed{' '}
              <a
                href="/documents/specifikacija-budzeta.docx"
                download
                style={{ color: '#1a4a9e', textDecoration: 'underline', fontWeight: 600 }}
              >
                Budget Specification
              </a>
              {' '}(required only if the requested support involves monetary funds)
            </li>
            <li style={{ marginBottom: '8px', fontFamily: "'Barlow', sans-serif", fontSize: '17px', color: '#2d3748' }}>
              Completed{' '}
              <a
                href="/documents/spisak-dokumentacije.docx"
                download
                style={{ color: '#1a4a9e', textDecoration: 'underline', fontWeight: 600 }}
              >
                Required Documentation Checklist
              </a>
              {' '}(required if more than one partner is involved in the project)
            </li>
          </ul>

          <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: '17px', color: '#2d3748', marginBottom: '24px' }}>
            All requests and inquiries should be submitted to:{' '}
            <a
              href="mailto:office@cmtech.rs"
              style={{ color: '#1a4a9e', textDecoration: 'underline', fontWeight: 600 }}
            >
              office@cmtech.rs
            </a>
          </p>

          <p style={bodyTextStyle}>
            Eligible recipients include educational institutions, non-governmental organizations, professional and scientific associations, local community organizations, humanitarian and charitable institutions, and cultural organizations. Applications from individuals are generally not considered unless submitted through a registered organization.
          </p>
          <p style={bodyTextStyle}>
            All applicants will be notified of the decision following our evaluation process. If the request is approved, the appropriate Sponsorship or Donation Agreement will be concluded with Comita Technics DOO Beograd.
          </p>
        </div>
      </section>

      <section
        ref={contactRef}
        id="sp-contact"
        className="py-20 px-8 text-center relative overflow-hidden"
        style={{ ...revealStyle(contactVisible), backgroundColor: '#0d2a5e' }}
      >
        <CTPattern opacity={0.07} color="#5bc4f5" />

        <div className="max-w-2xl mx-auto relative z-10">
          <p
            className="text-xs tracking-[0.2em] font-semibold mb-4"
            style={{ color: '#5bc4f5', fontFamily: "'Barlow', sans-serif" }}
          >
            GET IN TOUCH
          </p>
          <h2
            className="font-bold text-white mb-4"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 'clamp(28px,3vw,44px)' }}
          >
            Questions About Sponsorships and Donations?
          </h2>
          <p
            className="mb-8"
            style={{ color: 'rgba(255,255,255,0.70)', fontFamily: "'Barlow', sans-serif", fontSize: '17px' }}
          >
            We review all inquiries and respond as soon as possible.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="mailto:office@cmtech.rs"
              className="inline-flex items-center gap-2 font-semibold px-6 py-3 transition-all duration-200"
              style={{ backgroundColor: '#5bc4f5', color: '#0d2a5e', fontSize: '15px', fontFamily: "'Barlow', sans-serif", textDecoration: 'none' }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#3aafde' }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#5bc4f5' }}
            >
              Send an Email
            </a>

            <button
              onClick={() => navigate('/', { state: { scrollTo: 'contact' } })}
              className="inline-flex items-center gap-2 font-semibold px-6 py-3 transition-all duration-200 cursor-pointer"
              style={{ backgroundColor: 'transparent', color: '#ffffff', border: '1.5px solid rgba(255,255,255,0.45)', fontSize: '15px', fontFamily: "'Barlow', sans-serif" }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'rgba(255,255,255,0.10)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'transparent' }}
            >
              Back to Main Site
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

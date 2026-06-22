import { useRef, useState } from 'react'
import HCaptcha from '@hcaptcha/react-hcaptcha'
import { useTranslation } from 'react-i18next'
import useScrollReveal from '../hooks/useScrollReveal'

type FormStatus = 'idle' | 'sending' | 'success' | 'error'

const WEB3FORMS_URL = 'https://api.web3forms.com/submit'

export default function Contact() {
  const ref = useRef<HTMLElement>(null)
  const captchaRef = useRef<HCaptcha>(null)
  const isVisible = useScrollReveal(ref)
  const { t } = useTranslation()

  const [status, setStatus] = useState<FormStatus>('idle')
  const [captchaToken, setCaptchaToken] = useState<string | null>(null)
  const [form, setForm] = useState({ name: '', company: '', email: '', subject: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const isDev = import.meta.env.DEV

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!isDev && !captchaToken) {
      alert(t('contact.captchaRequired'))
      return
    }

    setStatus('sending')
    try {
      const formData = new FormData(e.currentTarget)
      formData.append('access_key', import.meta.env.VITE_WEB3FORMS_KEY)
      formData.set('subject', `[cmtech.rs] ${form.subject || 'Contact form'}`)
      if (!isDev && captchaToken) formData.set('h-captcha-response', captchaToken)

      const res = await fetch(WEB3FORMS_URL, { method: 'POST', body: formData })
      const data = await res.json()
      setStatus(data.success ? 'success' : 'error')
      if (data.success) setForm({ name: '', company: '', email: '', subject: '', message: '' })
    } catch {
      setStatus('error')
    }

    captchaRef.current?.resetCaptcha()
    setCaptchaToken(null)
  }

  const DETAILS = [
    {
      label: t('contact.headquarters'),
      value: t('contact.address'),
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5bc4f5" strokeWidth="1.5">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
    },
    {
      label: t('contact.phone'),
      value: '+381 11 3818100',
      href: 'tel:+381113818100',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5bc4f5" strokeWidth="1.5">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
        </svg>
      ),
    },
    {
      label: t('contact.email'),
      value: 'office@cmtech.rs',
      href: 'mailto:office@cmtech.rs',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5bc4f5" strokeWidth="1.5">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="M2 6l10 7 10-7" />
        </svg>
      ),
    },
  ]

  const inputClass =
    'w-full border border-gray-200 px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-[#5bc4f5] transition-colors disabled:opacity-50'

  const isBusy = status === 'sending'

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
            {t('contact.overline')}
          </p>
          <h2
            className="text-5xl font-bold leading-tight text-[#0d2a5e] mb-6"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            {t('contact.heading1')}
            <br />
            {t('contact.heading2')}
          </h2>
          <p
            className="text-gray-500 leading-relaxed max-w-md mb-10"
            style={{ fontFamily: "'Barlow', sans-serif", fontSize: '17px' }}
          >
            {t('contact.body')}
          </p>

          <div className="flex flex-col gap-6">
            {DETAILS.map(({ label, value, href, icon }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="ct-panel-sm w-12 h-12 bg-[#f4f6fa] flex items-center justify-center shrink-0">
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
                    className="text-gray-500 mt-0.5 whitespace-pre-line"
                    style={{ fontFamily: "'Barlow', sans-serif", fontSize: '15px' }}
                  >
                    {href ? <a href={href}>{value}</a> : value}
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
              {t('contact.formHeading')}
            </h3>

            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-16 gap-4">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#5bc4f5" strokeWidth="1.5">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <p
                  className="text-center text-gray-600"
                  style={{ fontFamily: "'Barlow', sans-serif", fontSize: '16px' }}
                >
                  {t('contact.formSuccess')}
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-2 text-xs tracking-widest font-semibold text-[#5bc4f5] underline underline-offset-4"
                  style={{ fontFamily: "'Barlow', sans-serif" }}
                >
                  ← {t('contact.sendMessage')}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    disabled={isBusy}
                    placeholder={t('contact.placeholderName')}
                    className={inputClass}
                    style={{ fontFamily: "'Barlow', sans-serif" }}
                  />
                  <input
                    name="company"
                    type="text"
                    value={form.company}
                    onChange={handleChange}
                    disabled={isBusy}
                    placeholder={t('contact.placeholderCompany')}
                    className={inputClass}
                    style={{ fontFamily: "'Barlow', sans-serif" }}
                  />
                </div>

                <input
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  disabled={isBusy}
                  placeholder={t('contact.placeholderEmail')}
                  className={`${inputClass} mt-4`}
                  style={{ fontFamily: "'Barlow', sans-serif" }}
                />

                <input
                  name="subject"
                  type="text"
                  value={form.subject}
                  onChange={handleChange}
                  disabled={isBusy}
                  placeholder={t('contact.placeholderSubject')}
                  className={`${inputClass} mt-4`}
                  style={{ fontFamily: "'Barlow', sans-serif" }}
                />

                <textarea
                  name="message"
                  required
                  value={form.message}
                  onChange={handleChange}
                  disabled={isBusy}
                  placeholder={t('contact.placeholderMessage')}
                  rows={5}
                  className={`${inputClass} mt-4 resize-none`}
                  style={{ fontFamily: "'Barlow', sans-serif" }}
                />

                {!isDev && (
                  <div className="mt-4">
                    <HCaptcha
                      ref={captchaRef}
                      sitekey={import.meta.env.VITE_HCAPTCHA_SITEKEY}
                      onVerify={setCaptchaToken}
                      onExpire={() => setCaptchaToken(null)}
                    />
                  </div>
                )}

                {status === 'error' && (
                  <p
                    className="mt-3 text-sm text-red-500"
                    style={{ fontFamily: "'Barlow', sans-serif" }}
                  >
                    {t('contact.formError')}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isBusy || (!isDev && !captchaToken)}
                  className="mt-6 w-full py-3 px-8 text-sm font-bold tracking-widest bg-[#0d2a5e] text-white transition-all duration-300 hover:bg-[#5bc4f5] hover:text-[#0d2a5e] disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {isBusy ? t('contact.sending') : t('contact.sendMessage')}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

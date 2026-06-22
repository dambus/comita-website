import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import useScrollReveal from '../hooks/useScrollReveal'

interface Stat {
  value: string
  label: string
  small?: boolean
}

interface ProjectCard {
  tag: string
  title: string
  subtitle: string
  description: string
  stats: Stat[]
  note: string
  image: string
}

export default function Projects() {
  const ref = useRef<HTMLElement>(null)
  const isVisible = useScrollReveal(ref)
  const { t } = useTranslation()

  const PROJECTS: ProjectCard[] = [
    {
      tag: t('projects.project1.tag'),
      title: t('projects.project1.title'),
      subtitle: t('projects.project1.subtitle'),
      image: '/images/horizontal-aboveground-pipeline-in-nature-half-panoramic.jpg',
      description: '',
      stats: [
        { value: '402 km', label: t('projects.project1.statSerbia') },
        { value: '102 km', label: t('projects.project1.statBulgaria') },
        { value: '22', label: t('projects.project1.statValves') },
        { value: '7.4 MPa', label: t('projects.project1.statPressure') },
      ],
      note: t('projects.project1.note'),
    },
    {
      tag: t('projects.project2.tag'),
      title: t('projects.project2.title'),
      subtitle: t('projects.project2.subtitle'),
      description: '',
      stats: [
        { value: '24 MW', label: t('projects.project2.statCapacity') },
        { value: '20 ha', label: t('projects.project2.statArea') },
        { value: '5,000+', label: t('projects.project2.statSignals') },
        { value: '100 km+', label: t('projects.project2.statPiping') },
      ],
      note: t('projects.project2.note'),
      image: '/images/horizontal-aerial-view-plant-panoramic.jpg',
    },
    {
      tag: t('projects.project3.tag'),
      title: t('projects.project3.title'),
      subtitle: t('projects.project3.subtitle'),
      image: '/images/horizontal-Projects_mcc_picture.png',
      description: '',
      stats: [
        { value: 'EN 11064', label: t('projects.project3.statStandard') },
        { value: '24/7', label: t('projects.project3.statOps') },
        { value: 'SCADA', label: t('projects.project3.statAutomation') },
        { value: t('projects.project3.statLocationValue'), label: t('projects.project3.statLocation'), small: true },
      ],
      note: t('projects.project3.note'),
    },
  ]

  return (
    <section
      ref={ref}
      id="projects"
      className="py-32 px-8 bg-[#f4f6fa]"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(32px)',
        transition: 'all 0.7s ease',
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p
            className="text-xs tracking-[0.2em] font-semibold mb-3"
            style={{ color: '#5bc4f5', fontFamily: "'Barlow', sans-serif" }}
          >
            {t('projects.overline')}
          </p>
          <h2
            className="text-5xl font-bold"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", color: '#0d2a5e' }}
          >
            {t('projects.heading')}
          </h2>
          <p
            className="text-gray-400 mt-3"
            style={{ fontFamily: "'Barlow', sans-serif", fontSize: '17px' }}
          >
            {t('projects.subheading')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {PROJECTS.map((project) => (
            <div key={project.title} className="ct-panel-lg bg-white overflow-hidden flex flex-col">
              <div
                className="relative overflow-hidden h-52 px-8 py-8 shrink-0"
                style={{ backgroundColor: '#0d2a5e' }}
              >
                <img
                  src={project.image}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover opacity-30"
                />
                <div className="relative z-10">
                  <p
                    className="text-xs tracking-widest font-semibold"
                    style={{ color: '#5bc4f5', fontFamily: "'Barlow', sans-serif" }}
                  >
                    {project.tag}
                  </p>
                  <h3
                    className="text-3xl font-bold text-white mt-2"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="mt-1 text-white/50"
                    style={{ fontFamily: "'Barlow', sans-serif", fontSize: '15px' }}
                  >
                    {project.subtitle}
                  </p>
                </div>
              </div>

              <div className="px-8 py-8">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {project.stats.map(({ value, label, small }) => (
                    <div key={label} className="ct-panel-sm bg-[#f4f6fa] p-4">
                      <p
                        className={`font-bold text-[#0d2a5e] ${small ? 'text-2xl font-bold' : 'text-3xl'}`}
                        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                      >
                        {value}
                      </p>
                      <p className="text-gray-400 text-xs tracking-wide mt-1">{label}</p>
                    </div>
                  ))}
                </div>

                <p
                  className="text-xs text-gray-400 italic pt-6"
                  style={{
                    borderTop: '1px solid #f3f4f6',
                    fontFamily: "'Barlow', sans-serif",
                  }}
                >
                  {project.note}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

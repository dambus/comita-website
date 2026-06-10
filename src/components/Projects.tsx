import { useRef } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'

interface Stat {
  value: string
  label: string
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

const PROJECTS: ProjectCard[] = [
  {
    tag: '2019 - 2020 · PIPELINE',
    title: 'Magistral Gas Pipeline',
    subtitle: 'A Project of International Significance',
    image: '/images/horizontal-aboveground-pipeline-in-nature-half-panoramic.jpg',
    description:
      'The IDC DOO team acted as general contractor for the Serbian-Bulgarian section - a strategically vital energy corridor, delivered in record time.',
    stats: [
      { value: '402 km', label: 'Serbia pipeline' },
      { value: '102 km', label: 'Bulgaria pipeline' },
      { value: '22', label: 'Block valve stations' },
      { value: '7.4 MPa', label: 'Operating pressure' },
    ],
    note: 'Delivered: Feb 20, 2019 -> Dec 31, 2020 - record timeline',
  },
  {
    tag: '2021 · COMPRESSOR STATION',
    title: 'Velika Plana Compressor Station',
    subtitle: 'Engineering Excellence',
    description:
      "Comita Technics DOO Beograd delivered the station's technological core - automation, telemetry, fire and technical safety systems, and communications - all implemented with flawless quality.",
    stats: [
      { value: '24 MW', label: 'Combined capacity' },
      { value: '20 ha', label: 'Site area' },
      { value: '5,000+', label: 'Monitoring signals' },
      { value: '100 km+', label: 'Piping network' },
    ],
    note: 'Realized: March 2021 -> September 2021 - on schedule',
    image: '/images/horizontal-aerial-view-plant-panoramic.jpg',
  },
  {
    tag: '2020 · CONTROL CENTER',
    title: 'MCC Novi Sad',
    subtitle: 'Main Control Center',
    image: '/images/horizontal-Projects_mcc_picture.png',
    description: 'We constructed the Main Control Centre for the national gas pipeline in Serbia from scratch — a Control Centre marked by excellent design and technological supremacy, allowing smooth daily operations.',
    stats: [
      { value: 'EN 11064', label: 'Operator console standard' },
      { value: '24/7', label: 'Operational environment' },
      { value: 'SCADA', label: 'Automation system' },
      { value: 'Novi Sad', label: 'Location' },
    ],
    note: 'Ergonomic design — built for critical infrastructure operations',
  },
]

export default function Projects() {
  const ref = useRef<HTMLElement>(null)
  const isVisible = useScrollReveal(ref)

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
            FLAGSHIP PROJECTS
          </p>
          <h2
            className="text-5xl font-bold"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", color: '#0d2a5e' }}
          >
            Built to Last Decades
          </h2>
          <p
            className="text-gray-400 mt-3"
            style={{ fontFamily: "'Barlow', sans-serif", fontSize: '17px' }}
          >
            Comita Technics DOO Beograd was created as a result of a strategic association of leading specialists with many years of experience in implementing capital energy projects. Our team brings together the additional knowledge and unique experience needed to create a strategically important energy infrastructure at all stages of the project, providing comprehensive solutions based on the highest quality standards
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {PROJECTS.map((project) => (
            <div key={project.title} className="ct-panel-lg bg-white overflow-hidden flex flex-col">
              <div
                className="relative overflow-hidden h-52 px-8 py-8 flex-shrink-0"
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
                {/* <p
                  className="text-gray-500 text-sm leading-relaxed mb-6"
                  style={{ fontFamily: "'Barlow', sans-serif" }}
                >
                  {project.description}
                </p> */}

                <div className="grid grid-cols-2 gap-4 mb-6">
                  {project.stats.map(({ value, label }) => (
                    <div key={label} className="ct-panel-sm bg-[#f4f6fa] p-4">
                      <p
                        className="text-3xl font-bold text-[#0d2a5e]"
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

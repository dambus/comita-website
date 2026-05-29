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
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ backgroundColor: '#0d2a5e' }}
    >
      {/* Background photo */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/images/horizontal-panoramic-view-pipeline-still-above-ground-blue-sky.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.25,
        }}
      />

      {/* Subtle grid overlay */}
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
      <div className="relative flex-1 flex flex-col justify-center px-6 md:pl-[8%] md:pr-16 pt-32 pb-12 text-center md:text-left">
        {/* Tag line */}
        <p
          className="text-xs tracking-[0.2em] mb-4 font-medium"
          style={{ color: '#5bc4f5', fontFamily: "'Barlow', sans-serif" }}
        >
          EPC · O&amp;M · DIGITAL
        </p>

        {/* Main heading */}
        <h1
          className="text-6xl md:text-8xl font-bold leading-none tracking-tight"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          <span className="text-white block">Innovations</span>
          <span className="block" style={{ color: '#5bc4f5' }}>
            creating the
          </span>
          <span className="text-white block">future.</span>
        </h1>

        {/* Subheading */}
        <p
          className="text-white/60 text-base md:text-lg max-w-md mt-6 mx-auto md:mx-0"
          style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300 }}
        >
          Full-cycle engineering and maintenance for critical gas transmission
          infrastructure across the region.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-row gap-4 mt-8 justify-center md:justify-start">
          <button
            onClick={() => scrollTo('projects')}
            className="text-xs tracking-widest font-semibold px-6 py-3 rounded-sm cursor-pointer border-0 transition-opacity hover:opacity-90"
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
            className="text-xs tracking-widest px-6 py-3 rounded-sm cursor-pointer bg-transparent transition-opacity hover:opacity-80"
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

      {/* Stats bar */}
      <div
        className="relative w-full border-t flex flex-row flex-wrap md:flex-nowrap justify-around md:justify-evenly gap-6 md:gap-0 py-6 px-8"
        style={{
          borderColor: 'rgba(255,255,255,0.1)',
          backgroundColor: 'rgba(0,0,0,0.2)',
        }}
      >
        {STATS.map(({ value, label }) => (
          <div key={label} className="flex flex-col items-center">
            <span
              className="text-2xl font-bold"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                color: '#5bc4f5',
              }}
            >
              {value}
            </span>
            <span
              className="text-[10px] tracking-widest mt-1"
              style={{ color: 'rgba(255,255,255,0.5)', fontFamily: "'Barlow', sans-serif" }}
            >
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

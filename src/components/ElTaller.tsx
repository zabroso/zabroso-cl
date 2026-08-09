const stack = [
  { icon: '🚀', name: 'Astro',      sub: 'Framework' },
  { icon: '⚛️', name: 'React',      sub: 'UI Interactiva' },
  { icon: '🌊', name: 'Tailwind',   sub: 'Estilos' },
  { icon: '🔗', name: 'n8n',        sub: 'Automatización' },
  { icon: '🟢', name: 'Node.js',    sub: 'Backend' },
  { icon: '🧠', name: 'IA/CV',      sub: 'Computer Vision' },
  { icon: '🛒', name: 'E-commerce', sub: 'Tiendas' },
  { icon: '☁️', name: 'Cloud',      sub: 'Deploy & DevOps' },
]

const services = [
  'Software a medida', 'Consultoría estratégica', 'Dashboards & Analytics',
  'Integraciones API', 'SEO técnico', 'Automatizaciones',
]

export default function ElTaller() {
  return (
    <section id="taller" className="bg-roble py-[5.5rem] px-8">
      <div className="max-w-[1160px] mx-auto">
        <p className="rvL text-[.72rem] font-bold tracking-[.22em] uppercase mb-2" style={{ color: 'rgba(226,114,91,.85)' }}>
          Stack tecnológico
        </p>
        <h2
          className="rvL font-[family-name:var(--font-display)] font-black mb-3 leading-tight"
          style={{ color: '#FAF9F6', fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
        >
          El Taller.
        </h2>
        <p className="rvL text-[.97rem] leading-[1.75] max-w-[560px] mb-0" style={{ color: 'rgba(250,249,246,.65)' }}>
          Las herramientas que uso a diario para construir soluciones de alto rendimiento. Elegidas con criterio, no por moda.
        </p>

        <div className="flex gap-6 flex-wrap mt-10">
          {stack.map((s, i) => (
            <div key={i} className="rv flex flex-col items-center gap-[.4rem]" style={{ transitionDelay: `${i * .06}s` }}>
              <div
                className="w-[72px] h-[72px] flex items-center justify-center text-[1.75rem] transition-[background,border-color]"
                style={{ border: '2px solid rgba(250,249,246,.2)', background: 'rgba(250,249,246,.07)' }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(226,114,91,.25)'
                  e.currentTarget.style.borderColor = 'rgba(226,114,91,.5)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(250,249,246,.07)'
                  e.currentTarget.style.borderColor = 'rgba(250,249,246,.2)'
                }}
              >
                {s.icon}
              </div>
              <span className="text-[.7rem] font-bold tracking-[.1em] uppercase text-center" style={{ color: 'rgba(250,249,246,.6)' }}>{s.name}</span>
              <span className="text-[.65rem] text-center" style={{ color: 'rgba(250,249,246,.35)' }}>{s.sub}</span>
            </div>
          ))}
        </div>

        <div className="rv mt-14 pt-10" style={{ borderTop: '1px solid rgba(250,249,246,.12)' }}>
          <p className="text-[.72rem] font-bold tracking-[.18em] uppercase mb-5" style={{ color: 'rgba(226,114,91,.75)' }}>
            También hago
          </p>
          <div className="flex flex-wrap gap-3">
            {services.map((s, i) => (
              <span
                key={i}
                className="px-4 py-[.4rem] text-[.8rem] font-medium cursor-default transition-[border-color,color]"
                style={{ border: '1px solid rgba(250,249,246,.25)', color: 'rgba(250,249,246,.75)' }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = '#FF9E80'
                  e.currentTarget.style.color = '#FF9E80'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(250,249,246,.25)'
                  e.currentTarget.style.color = 'rgba(250,249,246,.75)'
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

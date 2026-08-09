const facetas = [
  { icon: '💻', name: 'Informático', desc: 'Astro, React, Tailwind, n8n. Código limpio con propósito real y sin over-engineering.' },
  { icon: '📊', name: 'Negocios',    desc: 'Entiendo el problema antes de proponer la solución. El código es el medio, no el fin.' },
  { icon: '☕', name: 'Barista',     desc: 'Cada buena conversación merece una buena taza. El café es mi idioma de confianza.' },
  { icon: '🥋', name: 'Karateca',   desc: 'Disciplina, foco y mejora continua. Principios que aplico en el dojo y en el código.' },
]

export default function SobrePablo() {
  return (
    <section id="sobre" className="py-[5.5rem] px-8 bg-white">
      <div className="max-w-[1160px] mx-auto">
        <p className="rvL text-[.72rem] font-bold tracking-[.22em] uppercase text-terra mb-2">Las cuatro facetas</p>
        <h2
          className="rvL font-[family-name:var(--font-display)] font-black text-roble mb-3 leading-tight"
          style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
        >
          Hola, soy Pablo.
        </h2>
        <p className="rvL text-[.97rem] leading-[1.75] text-muted max-w-[560px] mb-12">
          No soy solo un programador ni solo un consultor. Soy el puente entre tu idea y el código que la hace real — con trato humano, directo y sin burocracia.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {facetas.map((f, i) => (
            <div
              key={i}
              className="rv bg-white border-2 border-roble p-8 px-5 text-center cursor-default transition-[transform,box-shadow]"
              style={{ boxShadow: '4px 4px 0 #5D4037', transitionDelay: `${i * .1}s` }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translate(-2px,-2px)'
                e.currentTarget.style.boxShadow = '6px 6px 0 #5D4037'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = ''
                e.currentTarget.style.boxShadow = '4px 4px 0 #5D4037'
              }}
            >
              <span className="block text-[2.2rem] mb-3">{f.icon}</span>
              <div className="font-[family-name:var(--font-display)] text-[1.05rem] font-bold text-roble mb-[.35rem]">{f.name}</div>
              <p className="text-[.8rem] text-muted leading-[1.55]">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Bio + foto */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 mt-14 items-center">
          <div className="rvL" style={{ transitionDelay: '.1s' }}>
            <div
              className="w-full max-w-[280px] border-2 border-roble flex items-center justify-center font-mono text-[.78rem] text-[#999] text-center p-4"
              style={{
                aspectRatio: '3/4',
                background: 'repeating-linear-gradient(45deg,#E8E0D8,#E8E0D8 8px,#D4C8BC 8px,#D4C8BC 16px)',
                boxShadow: '4px 4px 0 #5D4037',
              }}
            >
              [ foto de Pablo ]
            </div>
          </div>
          <div className="rvR" style={{ transitionDelay: '.15s' }}>
            <p className="text-[1.05rem] leading-[1.75] text-muted mb-5">
              Llevo años construyendo software con propósito real en Valparaíso. Trabajo directo con fundadores, equipos y organizaciones que necesitan soluciones a medida — sin intermediarios, sin agencias, sin burocracia.
            </p>
            <p className="text-[1.05rem] leading-[1.75] text-muted mb-7">
              Mi diferenciador: <strong className="text-roble">entiendo de negocios tanto como de código</strong>. Eso hace que el primer café sea siempre la mejor inversión.
            </p>
            <a
              href="mailto:pablo@zabroso.cl"
              className="inline-block px-6 py-[.6rem] text-[.82rem] font-bold tracking-[.06em] uppercase text-roble no-underline border-2 border-roble bg-transparent transition-colors hover:bg-roble hover:text-cream"
            >
              Conversemos →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

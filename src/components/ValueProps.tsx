const props = [
  { icon: '🎨', name: 'Sin plantillas', desc: 'Diseño 100% a medida para tu marca. Nada de temas genéricos que se ven igual en todos lados.' },
  { icon: '⚡', name: 'Más velocidad', desc: 'Código propio en React, sin el peso de un builder. Carga rápida desde el primer segundo.' },
  { icon: '🔒', name: 'Más seguridad', desc: 'Sin plugins de terceros ni dependencias frágiles que exponen tu sitio a vulnerabilidades.' },
  { icon: '📈', name: 'Listo para crecer', desc: 'Base de código real, no un builder que te limita el día que necesites algo más.' },
]

export default function ValueProps() {
  return (
    <section id="por-que" className="py-[5.5rem] px-8 bg-white">
      <div className="max-w-[1160px] mx-auto">
        <p className="rvL text-[.72rem] font-bold tracking-[.22em] uppercase text-terra mb-2">Por qué código propio</p>
        <h2
          className="rvL font-[family-name:var(--font-display)] font-black text-roble mb-3 leading-tight"
          style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
        >
          No es una plantilla. Es tu página.
        </h2>
        <p className="rvL text-[.97rem] leading-[1.75] text-muted max-w-[560px] mb-12">
          Cada línea de código se escribe para tu negocio. Eso se traduce en más libertad de diseño, mejor rendimiento y un sitio que no depende de builders ajenos.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {props.map((f, i) => (
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
      </div>
    </section>
  )
}

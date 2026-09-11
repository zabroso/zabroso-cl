const steps = [
  { n: '01', title: 'Cotización y elección de plan', desc: 'Eliges el plan que se ajusta a lo que necesitas.' },
  { n: '02', title: 'Anticipo y arranque', desc: 'Se paga un anticipo inicial para comenzar.' },
  { n: '03', title: 'Entrega de contenido', desc: 'Nos envías textos, imágenes y logo.' },
  { n: '04', title: 'Diseño y desarrollo', desc: 'Construimos la página a medida y compartimos un prototipo.' },
  { n: '05', title: 'Revisiones', desc: 'Ajustamos con las rondas de revisión incluidas.' },
  { n: '06', title: 'Publicación', desc: 'Configuramos el dominio, subimos a producción y entregamos los accesos.' },
]

export default function ComoFunciona() {
  return (
    <section id="proceso" className="bg-white py-[5.5rem] px-8">
      <div className="max-w-[1160px] mx-auto">
        <p className="rvL text-[.72rem] font-bold tracking-[.22em] uppercase text-terra mb-2">El proceso</p>
        <h2
          className="rvL font-[family-name:var(--font-display)] font-black text-roble mb-3 leading-tight"
          style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
        >
          Cómo funciona.
        </h2>
        <p className="rvL text-[.97rem] leading-[1.75] text-muted max-w-[560px] mb-12">
          Seis pasos, sin vueltas, desde que eliges tu plan hasta que tu página está publicada.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
          {steps.map((s, i) => (
            <div key={s.n} className="rv flex gap-5" style={{ transitionDelay: `${i * .07}s` }}>
              <span
                className="font-[family-name:var(--font-display)] font-black text-terra shrink-0"
                style={{ fontSize: '2rem', opacity: 0.5 }}
              >
                {s.n}
              </span>
              <div>
                <h3 className="font-[family-name:var(--font-display)] text-[1.05rem] font-bold text-roble mb-1">{s.title}</h3>
                <p className="text-[.85rem] text-muted leading-[1.55]">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

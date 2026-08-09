import { useState } from 'react'

const projects = [
  {
    tag: 'IA · Computer Vision', name: 'Sentialert',
    desc: 'Sistema de detección de asaltos en tiempo real usando inteligencia artificial y visión por computador. Alertas automáticas para seguridad privada y pública.',
    bg: ['#EDE0D8', '#D9C9BC'], label: 'seguridad + IA/CV',
  },
  {
    tag: 'SaaS · GovTech', name: 'Munia',
    desc: 'Plataforma corporativa para gestión municipal. Flujos de trabajo digitales para el sector público, construida con escalabilidad desde el día uno.',
    bg: ['#E0E4ED', '#C9D0DE'], label: 'B2B · municipal',
  },
  {
    tag: 'Contenidos · Astro', name: 'Red de Contenidos',
    desc: 'Ecosistema de sitios de contenido construidos con Astro: digitalismo.cl, edukaizen.cl, megaradios.cl. SEO técnico de alto rendimiento y carga instantánea.',
    bg: ['#DDE8DD', '#C9D9C9'], label: 'web · contenido · SEO',
  },
  {
    tag: 'Automatización · n8n', name: 'Somni',
    desc: 'Motor de automatizaciones avanzadas basado en n8n. Conecta sistemas, elimina tareas manuales y escala operaciones sin fricción ni código extra.',
    bg: ['#EDE0E8', '#D9C9D4'], label: 'automatización · n8n',
  },
]

export default function Galeria() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="galeria" className="dot-grid py-[5.5rem] px-8">
      <div className="max-w-[1160px] mx-auto">
        <p className="rvL text-[.72rem] font-bold tracking-[.22em] uppercase text-terra mb-2">Galería de Soluciones</p>
        <h2
          className="rvL font-[family-name:var(--font-display)] font-black text-roble mb-3 leading-tight"
          style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
        >
          Lo que hemos construido.
        </h2>
        <p className="rvL text-[.97rem] leading-[1.75] text-muted max-w-[560px] mb-12">
          Casos reales. Impacto real. Cada proyecto empezó con una conversación — y terminó siendo código que funciona.
        </p>

        {/* Bento grid */}
        <div className="grid grid-cols-12 gap-5">
          {projects.map((p, i) => (
            <div
              key={i}
              className={`rv border-2 border-roble bg-cream overflow-hidden cursor-pointer transition-[transform,box-shadow] col-span-12 ${['md:col-span-7','md:col-span-5','md:col-span-5','md:col-span-7'][i]}`}
              style={{
                boxShadow: '4px 4px 0 #5D4037',
                transitionDelay: `${i * .1}s`,
              }}
              onClick={() => setOpen(open === i ? null : i)}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translate(-3px,-3px)'
                e.currentTarget.style.boxShadow = '7px 7px 0 #5D4037'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = ''
                e.currentTarget.style.boxShadow = '4px 4px 0 #5D4037'
              }}
            >
              <div
                className="h-[180px] flex items-center justify-center font-mono text-[.78rem] text-[#999] text-center p-4"
                style={{
                  background: `repeating-linear-gradient(45deg,${p.bg[0]},${p.bg[0]} 10px,${p.bg[1]} 10px,${p.bg[1]} 20px)`,
                }}
              >
                <span>[ {p.label} ]</span>
              </div>
              <div className="p-5 pb-6">
                <p className="text-[.68rem] font-bold tracking-[.14em] uppercase text-terra mb-[.35rem]">{p.tag}</p>
                <h3 className="font-[family-name:var(--font-display)] text-[1.3rem] font-bold text-roble mb-[.3rem]">{p.name}</h3>
                <p
                  className="text-[.85rem] text-muted leading-[1.6] overflow-hidden transition-[max-height,margin] duration-400"
                  style={{ maxHeight: open === i ? '160px' : '0', marginTop: open === i ? '.4rem' : 0 }}
                >
                  {p.desc}
                </p>
                <span className="block text-[.72rem] text-terra font-bold mt-[.6rem]">
                  {open === i ? '← cerrar' : 'ver más →'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

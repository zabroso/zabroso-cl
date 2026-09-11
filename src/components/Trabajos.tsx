import { useState } from 'react'

const project = {
  tag: 'Contenidos · Astro',
  name: 'Red de Contenidos',
  desc: 'Ecosistema de sitios de contenido construidos con Astro: digitalismo.cl, edukaizen.cl, megaradios.cl. SEO técnico de alto rendimiento y carga instantánea.',
  bg: ['#DDE8DD', '#C9D9C9'],
  label: 'web · contenido · SEO',
}

export default function Trabajos() {
  const [open, setOpen] = useState(false)

  return (
    <section id="trabajos" className="py-[5.5rem] px-8 bg-white">
      <div className="max-w-[1160px] mx-auto">
        <p className="rvL text-[.72rem] font-bold tracking-[.22em] uppercase text-terra mb-2">Trabajos</p>
        <h2
          className="rvL font-[family-name:var(--font-display)] font-black text-roble mb-3 leading-tight"
          style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
        >
          Páginas web que hemos construido.
        </h2>
        <p className="rvL text-[.97rem] leading-[1.75] text-muted max-w-[560px] mb-12">
          Casos reales de este servicio. Código propio, sin plantillas.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Featured project */}
          <div
            className="rv border-2 border-roble bg-cream overflow-hidden cursor-pointer transition-[transform,box-shadow]"
            style={{ boxShadow: '4px 4px 0 #5D4037' }}
            onClick={() => setOpen(o => !o)}
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
              style={{ background: `repeating-linear-gradient(45deg,${project.bg[0]},${project.bg[0]} 10px,${project.bg[1]} 10px,${project.bg[1]} 20px)` }}
            >
              <span>[ {project.label} ]</span>
            </div>
            <div className="p-5 pb-6">
              <p className="text-[.68rem] font-bold tracking-[.14em] uppercase text-terra mb-[.35rem]">{project.tag}</p>
              <h3 className="font-[family-name:var(--font-display)] text-[1.3rem] font-bold text-roble mb-[.3rem]">{project.name}</h3>
              <p
                className="text-[.85rem] text-muted leading-[1.6] overflow-hidden transition-[max-height,margin] duration-400"
                style={{ maxHeight: open ? '160px' : '0', marginTop: open ? '.4rem' : 0 }}
              >
                {project.desc}
              </p>
              <span className="block text-[.72rem] text-terra font-bold mt-[.6rem]">
                {open ? '← cerrar' : 'ver más →'}
              </span>
            </div>
          </div>

          {/* Redirect to cuzmar.cl for custom dev */}
          <div
            className="rv border-2 border-dashed border-roble p-6 flex flex-col justify-center"
            style={{ transitionDelay: '.1s' }}
          >
            <p className="text-[.68rem] font-bold tracking-[.14em] uppercase text-terra mb-[.5rem]">¿Buscas otra cosa?</p>
            <h3 className="font-[family-name:var(--font-display)] text-[1.2rem] font-bold text-roble mb-2 leading-snug">
              Si necesitas un sistema a medida, no una página web
            </h3>
            <p className="text-[.85rem] text-muted leading-[1.6] mb-4">
              SaaS, automatizaciones, IA o software a medida no son parte de este servicio. Esos proyectos viven en cuzmar.cl.
            </p>
            <a
              href="https://cuzmar.cl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block self-start px-5 py-[.5rem] text-[.78rem] font-bold tracking-[.06em] uppercase text-roble no-underline border-2 border-roble bg-transparent transition-colors hover:bg-roble hover:text-cream"
            >
              → cuzmar.cl
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

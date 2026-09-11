import { useState, useEffect } from 'react'
import PixelBrowser from './pixel/PixelBrowser'

const trust: [string, string][] = [
  ['🚀', 'Página 100% a tu medida'],
  ['🔒', 'Segura y sin costos ocultos'],
  ['🎯', '3 rondas de revisión'],
]

export default function Hero() {
  const [py, setPy] = useState(0)

  useEffect(() => {
    const fn = () => setPy(window.scrollY * .25)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <section className="hero dot-grid min-h-screen pt-[60px] relative overflow-hidden flex items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-[1160px] mx-auto px-8 py-16 items-center w-full">
        {/* LEFT */}
        <div style={{ transform: `translateY(${py * .1}px)` }}>
          <p className="rv flex items-center gap-2 text-[.72rem] font-bold tracking-[.2em] uppercase text-terra mb-4">
            <span className="inline-block w-6 h-[2px] bg-terra" />
            Desarrollo Web a Medida · Chile
          </p>

          <h1
            className="rv font-[family-name:var(--font-display)] font-black leading-none text-roble mb-6"
            style={{ fontSize: 'clamp(3rem, 5.5vw, 5rem)', transitionDelay: '.08s' }}
          >
            Tu página web,<br />
            <em className="italic text-terra block">a medida.</em>
          </h1>

          <p className="rv text-[1.05rem] leading-[1.75] text-muted mb-10 max-w-[480px]" style={{ transitionDelay: '.16s' }}>
            Nada de plantillas ni builders. Código propio en React: más rápida, más segura y con la libertad de diseño que un editor genérico no te da.
          </p>

          <div className="rv flex gap-4 flex-wrap mb-10" style={{ transitionDelay: '.22s' }}>
            <a
              href="#planes"
              className="inline-block px-6 py-[.6rem] text-[.82rem] font-bold tracking-[.06em] uppercase text-white no-underline animate-pulse-terra"
              style={{ background: '#E2725B', boxShadow: '4px 4px 0 #3E2723' }}
            >
              Ver planes y precios →
            </a>
            <a
              href="#proceso"
              className="inline-block px-6 py-[.6rem] text-[.82rem] font-bold tracking-[.06em] uppercase text-roble no-underline border-2 border-roble bg-transparent transition-colors hover:bg-roble hover:text-cream"
            >
              Cómo funciona
            </a>
          </div>

          <div
            className="rv flex items-center gap-6 flex-wrap pt-4 border-t border-[rgba(93,64,55,.15)]"
            style={{ transitionDelay: '.3s' }}
          >
            {trust.map(([icon, label]) => (
              <div key={label} className="flex items-center gap-2">
                <span className="text-base">{icon}</span>
                <span className="text-[.75rem] text-muted font-semibold">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div style={{ transform: `translateY(${-py * .08}px)` }}>
          <div className="rv flex justify-center items-center relative" style={{ transitionDelay: '.1s' }}>
            <PixelBrowser size={260} />
            <div
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-40 h-3 rounded-full"
              style={{ background: 'rgba(93,64,55,.18)', filter: 'blur(6px)' }}
            />
            <div
              className="absolute font-[family-name:var(--font-display)] font-semibold text-[.72rem] text-roble whitespace-nowrap border-2 border-roble bg-white px-[.9rem] py-[.6rem]"
              style={{ top: '6%', right: '-10%', boxShadow: '4px 4px 0 #5D4037', transform: 'rotate(3deg)' }}
            >
              desde $150.000 ✦
            </div>
            <div
              className="absolute text-[.7rem] text-muted italic border-2 border-roble bg-[#FFF8F0] px-[.8rem] py-[.5rem]"
              style={{ bottom: '10%', left: '-14%', boxShadow: '4px 4px 0 #5D4037', transform: 'rotate(-2deg)' }}
            >
              lista en semanas
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center opacity-50 animate-float"
        aria-hidden="true"
      >
        <span className="block text-[.65rem] tracking-[.2em] uppercase font-bold text-roble mb-1">Scroll</span>
        ↓
      </div>
    </section>
  )
}

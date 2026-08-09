import { useState, useEffect } from 'react'
import PixelCup from './pixel/PixelCup'
import PixelAvatar from './pixel/PixelAvatar'
import PixelCat from './pixel/PixelCat'

export default function Hero() {
  const [py, setPy] = useState(0)

  useEffect(() => {
    const fn = () => setPy(window.scrollY * .25)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <section className="hero dot-grid min-h-screen pt-[60px] relative overflow-hidden flex items-center">
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-[1160px] mx-auto px-8 py-16 items-center w-full"
      >
        {/* LEFT */}
        <div style={{ transform: `translateY(${py * .1}px)` }}>
          <p className="rv flex items-center gap-2 text-[.72rem] font-bold tracking-[.2em] uppercase text-terra mb-4">
            <span className="inline-block w-6 h-[2px] bg-terra" />
            Consultoría Boutique · Valparaíso
          </p>

          <h1
            className="rv font-[family-name:var(--font-display)] font-black leading-none text-roble mb-6"
            style={{ fontSize: 'clamp(3rem, 5.5vw, 5rem)', transitionDelay: '.08s' }}
            aria-label="Conversemos con un café — consultoría de software artesanal"
          >
            <span aria-hidden="true">Conversemos</span><br />
            <em aria-hidden="true" className="italic text-terra block">con un café.</em>
          </h1>

          <p className="rv text-[1.05rem] leading-[1.75] text-muted mb-10 max-w-[480px]" style={{ transitionDelay: '.16s' }}>
            Software artesanal, cercano y de alto rendimiento.<br />
            No soy una agencia — soy Pablo, y co-creo contigo desde el primer café.
          </p>

          <div className="rv flex gap-4 flex-wrap mb-10" style={{ transitionDelay: '.22s' }}>
            <a
              href="mailto:pablo@zabroso.cl"
              className="inline-block px-6 py-[.6rem] text-[.82rem] font-bold tracking-[.06em] uppercase text-white no-underline animate-pulse-terra"
              style={{ background: '#E2725B', boxShadow: '4px 4px 0 #3E2723' }}
            >
              ☕ Agenda el café
            </a>
            <a
              href="#galeria"
              className="inline-block px-6 py-[.6rem] text-[.82rem] font-bold tracking-[.06em] uppercase text-roble no-underline border-2 border-roble bg-transparent transition-colors hover:bg-roble hover:text-cream"
            >
              Ver proyectos →
            </a>
          </div>

          <div
            className="rv flex items-center gap-[.9rem] pt-4 border-t border-[rgba(93,64,55,.15)]"
            style={{ transitionDelay: '.3s' }}
          >
            <PixelAvatar size={56} />
            <div>
              <div className="font-[family-name:var(--font-display)] font-bold text-roble text-base">Pablo</div>
              <div className="text-[.75rem] text-muted mt-[.1rem]">Informático · Barista · Karateca · El Conector</div>
            </div>
            <div className="ml-auto">
              <PixelCat size={36} />
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div style={{ transform: `translateY(${-py * .08}px)` }}>
        <div
          className="rv flex justify-center items-center relative"
          style={{ transitionDelay: '.1s' }}
        >
          <PixelCup size={220} steam={true} />
          <div
            className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-40 h-3 rounded-full"
            style={{ background: 'rgba(93,64,55,.18)', filter: 'blur(6px)' }}
          />
          <div
            className="absolute font-[family-name:var(--font-display)] font-semibold text-[.72rem] text-roble whitespace-nowrap border-2 border-roble bg-white px-[.9rem] py-[.6rem]"
            style={{ top: '10%', right: '-8%', boxShadow: '4px 4px 0 #5D4037', transform: 'rotate(3deg)' }}
          >
            zabroso.cl ✦
          </div>
          <div
            className="absolute text-[.7rem] text-muted italic border-2 border-roble bg-[#FFF8F0] px-[.8rem] py-[.5rem]"
            style={{ bottom: '18%', left: '-10%', boxShadow: '4px 4px 0 #5D4037', transform: 'rotate(-2deg)' }}
          >
            github.com/zabroso
          </div>
        </div>
        </div>
      </div>

      {/* Walking avatar easter egg */}
      <div className="absolute bottom-14 left-0 pointer-events-none z-[5]">
        <PixelAvatar size={44} walking />
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

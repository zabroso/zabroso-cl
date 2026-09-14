import { useState, useEffect } from 'react'

// Anclas absolutas: este Nav se comparte con /sobre/, /contacto/, /privacidad/ y /terminos/.
const links: [string, string][] = [
  ['/#planes', 'Planes'],
  ['/#proceso', 'Cómo funciona'],
  ['/#faq', 'FAQ'],
  ['/#cotizar', 'Cotizar'],
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[200] h-[60px] flex items-center justify-between px-8 bg-[rgba(250,249,246,0.94)] backdrop-blur-md border-b-2 border-roble transition-shadow"
      style={{ boxShadow: scrolled ? '0 2px 24px rgba(93,64,55,.12)' : 'none' }}
      aria-label="Navegación principal"
    >
      <a href="/" className="no-underline font-[family-name:var(--font-display)] font-black text-xl text-roble tracking-tight">
        zabroso<span className="text-terra">.cl</span>
      </a>

      <ul className="hidden md:flex gap-8 list-none">
        {links.map(([href, label]) => (
          <li key={href}>
            <a
              href={href}
              className="text-[.78rem] font-semibold tracking-[.08em] uppercase text-roble no-underline transition-colors hover:text-terra"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-3">
        <a
          href="/ecommerce/"
          className="hidden sm:inline-block px-5 py-2 text-[.78rem] font-bold tracking-[.06em] uppercase text-roble no-underline border-2 border-dashed border-roble bg-transparent transition-colors hover:bg-roble hover:text-cream"
          aria-label="Cotizar tu tienda online (e-commerce)"
        >
          Cotiza tu ecommerce
        </a>

        <a
          href="/#cotizar"
          className="inline-block px-6 py-2 text-[.82rem] font-bold tracking-[.06em] uppercase text-white no-underline transition-[box-shadow,transform]"
          style={{ background: '#E2725B', boxShadow: '3px 3px 0 #3E2723' }}
          aria-label="Cotizar tu página web"
        >
          Cotiza tu web
        </a>
      </div>
    </nav>
  )
}

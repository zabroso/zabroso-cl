import { useState, useEffect } from 'react'

const links: [string, string][] = [
  ['#incluye', 'Qué incluye'],
  ['#proceso', 'Cómo funciona'],
  ['#faq', 'FAQ'],
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
      <a href="/" className="no-underline flex items-center gap-2">
        <span className="text-roble text-xs">←</span>
        <span className="font-[family-name:var(--font-display)] font-black text-xl text-roble tracking-tight">
          zabroso<span className="text-terra">.cl</span>
        </span>
        <span className="hidden sm:inline text-[.7rem] font-semibold uppercase tracking-[.08em] text-muted">/ e-commerce</span>
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

      <a
        href="#cotizar"
        className="inline-block px-6 py-2 text-[.82rem] font-bold tracking-[.06em] uppercase text-white no-underline transition-[box-shadow,transform]"
        style={{ background: '#E2725B', boxShadow: '3px 3px 0 #3E2723' }}
        aria-label="Cotizar tu tienda online"
      >
        Cotiza tu ecommerce
      </a>
    </nav>
  )
}

import type { ReactNode } from 'react'
import Nav from './Nav'
import Footer from './Footer'

interface Props {
  eyebrow: string
  title: string
  /** Fecha visible, ej. "11 de septiembre de 2026". */
  updated: string
  /** Misma fecha en ISO 8601 para el atributo dateTime, ej. "2026-09-11". */
  updatedIso: string
  intro?: string
  children: ReactNode
}

/**
 * Shell compartido para páginas de texto largo (/privacidad/, /terminos/).
 * Incluye Nav + cabecera + cuerpo con estilos `.legal-body` (ver index.css) + Footer.
 */
export default function LegalPage({ eyebrow, title, updated, updatedIso, intro, children }: Props) {
  return (
    <>
      <Nav />
      <main className="pt-[60px]">
        <header className="dot-grid px-8 pt-16 pb-12 md:pt-20 md:pb-14">
          <div className="max-w-[760px] mx-auto">
            <p className="rvL flex items-center gap-2 text-[.72rem] font-bold tracking-[.22em] uppercase text-terra mb-3">
              <span className="inline-block w-6 h-[2px] bg-terra" />
              {eyebrow}
            </p>
            <h1
              className="rvL font-[family-name:var(--font-display)] font-black text-roble leading-tight mb-4"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)' }}
            >
              {title}
            </h1>
            {intro && (
              <p className="rvL text-[.97rem] leading-[1.75] text-muted max-w-[600px] mb-6">{intro}</p>
            )}
            <p
              className="rvL inline-block border-2 border-roble bg-white px-4 py-2 text-[.75rem] font-semibold tracking-[.06em] uppercase text-roble"
              style={{ boxShadow: '3px 3px 0 #5D4037' }}
            >
              Última actualización: <time dateTime={updatedIso}>{updated}</time>
            </p>
          </div>
        </header>

        <article className="bg-white px-8 py-14 md:py-16">
          <div className="legal-body max-w-[760px] mx-auto">{children}</div>
        </article>
      </main>
      <Footer />
    </>
  )
}

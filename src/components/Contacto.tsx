import { useState, type FormEvent, type ReactNode } from 'react'
import { EMAIL, PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from '../data/site'

const WEBHOOK_URL = import.meta.env.VITE_ZAPIER_WEBHOOK_URL as string | undefined

const servicios = ['Plan Básico', 'Plan Regular', 'Plan Avanzado', 'Más de una página / a cotizar', 'Mantención mensual']

type Status = 'idle' | 'sending' | 'sent' | 'error' | 'not-configured'

interface Props {
  /** id de la sección (ancla). Por defecto `cotizar`, usado por el Nav y Planes. */
  id?: string
  eyebrow?: string
  title?: string
  intro?: ReactNode
}

export default function Contacto({
  id = 'cotizar',
  eyebrow = 'Cotiza tu proyecto',
  title = 'Cuéntame qué necesitas.',
  intro = (
    <>
      Completa el formulario y te respondo directo, sin vueltas. También puedes llamarme al{' '}
      <a href={PHONE_TEL} className="text-terra font-semibold underline">{PHONE_DISPLAY}</a>.
    </>
  ),
}: Props) {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    if (data.get('empresa_web')) return // honeypot

    if (!WEBHOOK_URL) {
      setStatus('not-configured')
      return
    }

    setStatus('sending')
    try {
      const res = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify(Object.fromEntries(data.entries())),
      })
      if (!res.ok) throw new Error('respuesta no ok')
      setStatus('sent')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id={id} className="dot-grid py-[5.5rem] px-8">
      <div className="max-w-[640px] mx-auto">
        <p className="rvL text-[.72rem] font-bold tracking-[.22em] uppercase text-terra mb-2">{eyebrow}</p>
        <h2
          className="rvL font-[family-name:var(--font-display)] font-black text-roble mb-3 leading-tight"
          style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
        >
          {title}
        </h2>
        <p className="rvL text-[.97rem] leading-[1.75] text-muted mb-6">
          {intro}
        </p>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener"
          className="rvL inline-flex items-center gap-2 mb-10 px-6 py-[.6rem] text-[.82rem] font-bold tracking-[.06em] uppercase text-white no-underline"
          style={{ background: '#25D366', boxShadow: '4px 4px 0 #128C4A' }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.28-1.39a9.9 9.9 0 0 0 4.76 1.21h.01c5.46 0 9.9-4.45 9.9-9.91S17.5 2 12.04 2Zm5.8 14.03c-.24.68-1.38 1.3-1.91 1.38-.49.08-1.11.11-1.79-.11a16 16 0 0 1-1.62-.6c-2.85-1.23-4.71-4.1-4.85-4.29-.14-.19-1.16-1.55-1.16-2.95 0-1.4.73-2.09 1-2.38.24-.27.53-.34.71-.34h.51c.16 0 .38-.03.6.45.24.55.8 1.9.87 2.04.07.14.11.31.02.5-.09.19-.14.31-.28.47-.14.16-.29.36-.42.48-.14.13-.28.28-.12.55.16.27.71 1.17 1.53 1.89 1.05.94 1.94 1.23 2.21 1.37.27.14.43.11.59-.07.16-.18.68-.79.86-1.06.18-.27.36-.22.6-.13.24.09 1.55.73 1.82.86.27.13.44.2.51.31.07.11.07.65-.17 1.33Z" />
          </svg>
          Escríbeme por WhatsApp
        </a>

        {status === 'sent' ? (
          <div className="rv border-2 border-roble bg-white p-8 text-center" style={{ boxShadow: '4px 4px 0 #5D4037' }}>
            <p className="font-[family-name:var(--font-display)] text-[1.1rem] font-bold text-roble mb-1">¡Listo! Recibí tu mensaje.</p>
            <p className="text-[.85rem] text-muted">Te voy a escribir pronto a tu correo.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="rv space-y-4">
            <input type="text" name="empresa_web" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

            <div>
              <label htmlFor="nombre" className="block text-[.75rem] font-bold uppercase tracking-[.06em] text-roble mb-1">Nombre</label>
              <input
                id="nombre" name="nombre" type="text" required
                className="w-full border-2 border-roble bg-white px-4 py-[.6rem] text-[.9rem] text-roble outline-none focus:border-terra"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-[.75rem] font-bold uppercase tracking-[.06em] text-roble mb-1">Email</label>
              <input
                id="email" name="email" type="email" required
                className="w-full border-2 border-roble bg-white px-4 py-[.6rem] text-[.9rem] text-roble outline-none focus:border-terra"
              />
            </div>

            <div>
              <label htmlFor="telefono" className="block text-[.75rem] font-bold uppercase tracking-[.06em] text-roble mb-1">Teléfono (opcional)</label>
              <input
                id="telefono" name="telefono" type="tel"
                className="w-full border-2 border-roble bg-white px-4 py-[.6rem] text-[.9rem] text-roble outline-none focus:border-terra"
              />
            </div>

            <div>
              <label htmlFor="servicio" className="block text-[.75rem] font-bold uppercase tracking-[.06em] text-roble mb-1">¿Qué servicio te interesa?</label>
              <select
                id="servicio" name="servicio" required defaultValue=""
                className="w-full border-2 border-roble bg-white px-4 py-[.6rem] text-[.9rem] text-roble outline-none focus:border-terra"
              >
                <option value="" disabled>Elige una opción</option>
                {servicios.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>

            <div>
              <label htmlFor="mensaje" className="block text-[.75rem] font-bold uppercase tracking-[.06em] text-roble mb-1">Cuéntame de tu proyecto</label>
              <textarea
                id="mensaje" name="mensaje" rows={4}
                className="w-full border-2 border-roble bg-white px-4 py-[.6rem] text-[.9rem] text-roble outline-none focus:border-terra resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="inline-block px-6 py-[.65rem] text-[.82rem] font-bold tracking-[.06em] uppercase text-white transition-[box-shadow,transform] disabled:opacity-60"
              style={{ background: '#E2725B', boxShadow: '4px 4px 0 #3E2723' }}
            >
              {status === 'sending' ? 'Enviando…' : 'Enviar cotización →'}
            </button>

            {(status === 'error' || status === 'not-configured') && (
              <p className="text-[.8rem]" style={{ color: '#B3261E' }}>
                Algo falló al enviar. Escríbeme directo a{' '}
                <a href={`mailto:${EMAIL}`} className="underline font-semibold">{EMAIL}</a>.
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  )
}

import { useState, type FormEvent } from 'react'

const WEBHOOK_URL = import.meta.env.VITE_ZAPIER_WEBHOOK_ECOMMERCE_URL as string | undefined

const pagos = ['Mensual — $92.500 x 12 meses', 'Pago único — $750.000', 'No estoy seguro / quiero que me asesoren']

type Status = 'idle' | 'sending' | 'sent' | 'error' | 'not-configured'

export default function Contacto() {
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
        headers: { 'Content-Type': 'application/json' },
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
    <section id="cotizar" className="bg-white py-[5.5rem] px-8">
      <div className="max-w-[640px] mx-auto">
        <p className="rvL text-[.72rem] font-bold tracking-[.22em] uppercase text-terra mb-2">Cotiza tu tienda</p>
        <h2
          className="rvL font-[family-name:var(--font-display)] font-black text-roble mb-3 leading-tight"
          style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
        >
          Cuéntame de tu negocio.
        </h2>
        <p className="rvL text-[.97rem] leading-[1.75] text-muted mb-10">
          Completa el formulario y te respondo directo, sin vueltas.
        </p>

        {status === 'sent' ? (
          <div className="rv border-2 border-roble bg-cream p-8 text-center" style={{ boxShadow: '4px 4px 0 #5D4037' }}>
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
                className="w-full border-2 border-roble bg-cream px-4 py-[.6rem] text-[.9rem] text-roble outline-none focus:border-terra"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-[.75rem] font-bold uppercase tracking-[.06em] text-roble mb-1">Email</label>
              <input
                id="email" name="email" type="email" required
                className="w-full border-2 border-roble bg-cream px-4 py-[.6rem] text-[.9rem] text-roble outline-none focus:border-terra"
              />
            </div>

            <div>
              <label htmlFor="telefono" className="block text-[.75rem] font-bold uppercase tracking-[.06em] text-roble mb-1">Teléfono (opcional)</label>
              <input
                id="telefono" name="telefono" type="tel"
                className="w-full border-2 border-roble bg-cream px-4 py-[.6rem] text-[.9rem] text-roble outline-none focus:border-terra"
              />
            </div>

            <div>
              <label htmlFor="negocio" className="block text-[.75rem] font-bold uppercase tracking-[.06em] text-roble mb-1">¿Qué vendes?</label>
              <input
                id="negocio" name="negocio" type="text" placeholder="Ej: ropa, accesorios, productos artesanales…"
                className="w-full border-2 border-roble bg-cream px-4 py-[.6rem] text-[.9rem] text-roble outline-none focus:border-terra"
              />
            </div>

            <div>
              <label htmlFor="pago" className="block text-[.75rem] font-bold uppercase tracking-[.06em] text-roble mb-1">¿Cómo prefieres pagar?</label>
              <select
                id="pago" name="pago" required defaultValue=""
                className="w-full border-2 border-roble bg-cream px-4 py-[.6rem] text-[.9rem] text-roble outline-none focus:border-terra"
              >
                <option value="" disabled>Elige una opción</option>
                {pagos.map(p => <option key={p} value={p}>{p}</option>)}
              </select>
            </div>

            <div>
              <label htmlFor="mensaje" className="block text-[.75rem] font-bold uppercase tracking-[.06em] text-roble mb-1">Cuéntame más de tu proyecto</label>
              <textarea
                id="mensaje" name="mensaje" rows={4}
                className="w-full border-2 border-roble bg-cream px-4 py-[.6rem] text-[.9rem] text-roble outline-none focus:border-terra resize-none"
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
                <a href="mailto:pablo@zabroso.cl" className="underline font-semibold">pablo@zabroso.cl</a>.
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  )
}

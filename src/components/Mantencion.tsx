const incluye = [
  '3 tickets de cambios al mes',
  'Hasta 10 horas de trabajo por ticket',
  'Cambios de textos e imágenes',
  'Correcciones menores',
]

export default function Mantencion() {
  return (
    <section className="bg-white py-[5.5rem] px-8">
      <div className="max-w-[1160px] mx-auto">
        <div
          className="rv grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-10 border-2 border-roble p-8 md:p-10 items-center"
          style={{ boxShadow: '6px 6px 0 #5D4037' }}
        >
          <div>
            <p className="text-[.72rem] font-bold tracking-[.22em] uppercase text-terra mb-2">Opcional</p>
            <h2 className="font-[family-name:var(--font-display)] font-black text-roble mb-3 leading-tight" style={{ fontSize: 'clamp(1.7rem, 3vw, 2.4rem)' }}>
              Mantención mensual.
            </h2>
            <p className="text-[.92rem] leading-[1.7] text-muted mb-5">
              Tu página es un sitio estático y estable — no necesita mantención fija. Pero si prefieres tener cambios resueltos sin cotizar cada vez, este plan te da un cupo mensual de ajustes.
            </p>
            <ul className="space-y-2 mb-6">
              {incluye.map(it => (
                <li key={it} className="flex items-start gap-2 text-[.85rem] text-muted leading-[1.5]">
                  <span className="text-terra font-bold mt-[.1rem]">✓</span>
                  <span>{it}</span>
                </li>
              ))}
            </ul>
            <p className="text-[.78rem] text-muted leading-[1.6]">
              ¿No quieres el plan mensual? Sin problema: ante cualquier necesidad puntual, primero conversamos — lo simple se resuelve sin costo, lo más complejo se cotiza antes de hacerlo.
            </p>
          </div>

          <div className="text-center md:border-l-2 md:border-roble md:pl-10">
            <div className="font-[family-name:var(--font-display)] font-black text-roble mb-1" style={{ fontSize: '2.6rem' }}>
              $30.000
            </div>
            <div className="text-[.78rem] text-muted font-semibold uppercase tracking-[.08em] mb-6">al mes</div>
            <a
              href="mailto:pablo@zabroso.cl?subject=Quiero%20el%20plan%20de%20mantenci%C3%B3n%20mensual"
              className="inline-block px-6 py-[.65rem] text-[.8rem] font-bold tracking-[.06em] uppercase no-underline transition-colors"
              style={{ background: '#E2725B', color: 'white', boxShadow: '4px 4px 0 #3E2723' }}
            >
              Quiero mantención →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

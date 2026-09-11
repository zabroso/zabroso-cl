const items = [
  { icon: '🛒', text: 'Tienda online completa en Shopify' },
  { icon: '📦', text: 'Catálogo de productos y variantes' },
  { icon: '💳', text: 'Pasarela de pagos y métodos de envío' },
  { icon: '🎨', text: 'Diseño de tienda a medida, no una plantilla genérica' },
  { icon: '📱', text: 'Diseño responsive (móvil, tablet, escritorio)' },
  { icon: '🔑', text: 'Cuentas y tienda a tu nombre, no al nuestro' },
]

const noIncluye = [
  'La suscripción mensual de Shopify',
  'Las comisiones de cada pago recibido',
]

export default function Incluye() {
  return (
    <section id="incluye" className="bg-white py-[5.5rem] px-8">
      <div className="max-w-[1160px] mx-auto">
        <p className="rvL text-[.72rem] font-bold tracking-[.22em] uppercase text-terra mb-2">Qué incluye</p>
        <h2
          className="rvL font-[family-name:var(--font-display)] font-black text-roble mb-3 leading-tight"
          style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
        >
          Todo lo que necesitas para vender.
        </h2>
        <p className="rvL text-[.97rem] leading-[1.75] text-muted max-w-[560px] mb-12">
          Nos encargamos de armar tu tienda de principio a fin. Tú solo apruebas cómo se ve y qué vendes.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {items.map((it, i) => (
            <div
              key={it.text}
              className="rv flex items-center gap-3 p-5 border-2 border-roble bg-cream"
              style={{ boxShadow: '4px 4px 0 #5D4037', transitionDelay: `${i * .06}s` }}
            >
              <span className="text-xl shrink-0">{it.icon}</span>
              <span className="text-[.85rem] font-medium text-roble">{it.text}</span>
            </div>
          ))}
        </div>

        <div className="rv border-2 border-dashed border-roble p-6" style={{ transitionDelay: '.3s' }}>
          <p className="text-[.75rem] font-bold uppercase tracking-[.1em] text-terra mb-3">Esto va aparte (lo paga el negocio)</p>
          <ul className="space-y-2">
            {noIncluye.map(n => (
              <li key={n} className="flex items-start gap-2 text-[.85rem] text-muted leading-[1.5]">
                <span className="text-terra font-bold mt-[.1rem]">·</span>
                <span>{n}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

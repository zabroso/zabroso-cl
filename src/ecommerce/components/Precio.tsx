export default function Precio() {
  return (
    <section className="dot-grid py-[5.5rem] px-8">
      <div className="max-w-[1160px] mx-auto">
        <p className="rvL text-[.72rem] font-bold tracking-[.22em] uppercase text-terra mb-2">Precio</p>
        <h2
          className="rvL font-[family-name:var(--font-display)] font-black text-roble mb-3 leading-tight"
          style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
        >
          Elige cómo pagar.
        </h2>
        <p className="rvL text-[.97rem] leading-[1.75] text-muted max-w-[560px] mb-12">
          El mismo proyecto, dos formas de pagarlo. Tú eliges qué te acomoda más.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          <div
            className="rv flex flex-col border-2 p-8"
            style={{ borderColor: '#E2725B', boxShadow: '6px 6px 0 #E2725B' }}
          >
            <span className="inline-block self-start px-3 py-1 mb-4 text-[.68rem] font-bold tracking-[.1em] uppercase text-white" style={{ background: '#E2725B' }}>
              Recomendado
            </span>
            <h3 className="font-[family-name:var(--font-display)] text-[1.2rem] font-bold text-roble mb-2">Mensual, en cuotas</h3>
            <div className="font-[family-name:var(--font-display)] font-black text-roble mb-1" style={{ fontSize: '2.2rem' }}>
              $92.500<span className="text-[1rem] font-semibold text-muted">/mes</span>
            </div>
            <p className="text-[.78rem] text-muted font-semibold uppercase tracking-[.05em] mb-5">Durante 12 meses</p>
            <p className="flex-1 text-[.85rem] text-muted leading-[1.6]">
              No pagas todo de una vez, y la mantención del primer año va incluida en la cuota — cambios de productos, textos o ajustes menores sin cotizar cada vez.
            </p>
          </div>

          <div className="rv flex flex-col border-2 border-roble p-8" style={{ boxShadow: '4px 4px 0 #5D4037' }}>
            <h3 className="font-[family-name:var(--font-display)] text-[1.2rem] font-bold text-roble mb-2">Pago único</h3>
            <div className="font-[family-name:var(--font-display)] font-black text-roble mb-1" style={{ fontSize: '2.2rem' }}>
              $750.000
            </div>
            <p className="text-[.78rem] text-muted font-semibold uppercase tracking-[.05em] mb-5">Pago único</p>
            <p className="flex-1 text-[.85rem] text-muted leading-[1.6]">
              Pagas el proyecto completo de una vez. La mantención mensual no está incluida — puedes agregarla después si la necesitas.
            </p>
          </div>
        </div>

        <p className="rv mt-6 text-[.78rem] text-muted leading-[1.6] max-w-[720px]" style={{ transitionDelay: '.1s' }}>
          En ambos casos, la suscripción de Shopify y las comisiones por cada pago recibido las asume el negocio directamente — nosotros no las cobramos ni las incluimos en el precio.
        </p>
      </div>
    </section>
  )
}

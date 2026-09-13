export default function Hero() {
  return (
    <section className="hero dot-grid min-h-screen pt-[60px] relative overflow-hidden flex items-center">
      <div className="max-w-[760px] mx-auto px-8 py-16 text-center">
        <p className="rv flex items-center justify-center gap-2 text-[.72rem] font-bold tracking-[.2em] uppercase text-terra mb-4">
          <span className="inline-block w-6 h-[2px] bg-terra" />
          Tienda Online a Medida · Shopify
          <span className="inline-block w-6 h-[2px] bg-terra" />
        </p>

        <h1
          className="rv font-[family-name:var(--font-display)] font-black leading-none text-roble mb-6"
          style={{ fontSize: 'clamp(2.6rem, 6vw, 4.5rem)', transitionDelay: '.08s' }}
        >
          Tu tienda online,<br />
          <em className="italic text-terra block">lista para vender.</em>
        </h1>

        <ul className="rv text-left text-[.85rem] text-muted leading-[1.6] mb-6 max-w-[480px] mx-auto space-y-1 list-disc pl-5" style={{ transitionDelay: '.14s' }}>
          <li>Tienda online a medida en Shopify, sin plantillas genéricas.</li>
          <li>$92.500/mes × 12 meses, o $750.000 en pago único.</li>
          <li>Catálogo, pagos y envíos listos para vender.</li>
        </ul>

        <p className="rv text-[1.05rem] leading-[1.75] text-muted mb-10 max-w-[520px] mx-auto" style={{ transitionDelay: '.18s' }}>
          Catálogo, pagos y envíos funcionando sobre Shopify — la plataforma más sólida para e-commerce, sin reinventar la rueda.
        </p>

        <div className="rv flex gap-4 flex-wrap justify-center mb-10" style={{ transitionDelay: '.22s' }}>
          <a
            href="#cotizar"
            className="inline-block px-6 py-[.6rem] text-[.82rem] font-bold tracking-[.06em] uppercase text-white no-underline animate-pulse-terra"
            style={{ background: '#E2725B', boxShadow: '4px 4px 0 #3E2723' }}
          >
            Cotiza tu tienda →
          </a>
          <a
            href="#proceso"
            className="inline-block px-6 py-[.6rem] text-[.82rem] font-bold tracking-[.06em] uppercase text-roble no-underline border-2 border-roble bg-transparent transition-colors hover:bg-roble hover:text-cream"
          >
            Cómo funciona
          </a>
        </div>

        <div className="rv inline-block border-2 border-roble bg-white px-8 py-5" style={{ boxShadow: '4px 4px 0 #5D4037', transitionDelay: '.3s' }}>
          <div className="font-[family-name:var(--font-display)] font-black text-roble" style={{ fontSize: '2.2rem' }}>
            Desde $92.500<span className="text-[1rem] font-semibold text-muted">/mes</span>
          </div>
          <div className="text-[.72rem] text-muted font-semibold uppercase tracking-[.06em] mt-1">
            x 12 meses · o $750.000 pago único
          </div>
        </div>
      </div>
    </section>
  )
}

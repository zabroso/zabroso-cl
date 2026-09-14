import { PRECIOS_VIGENTES } from '../data/site'

interface Plan {
  name: string
  price: string
  tagline: string
  features: string[]
  featured?: boolean
}

const planes: Plan[] = [
  {
    name: 'Básico',
    price: '$150.000',
    tagline: 'Una landing de una sola sección: tu flyer digital con un objetivo único.',
    features: [
      'Diseño único a medida de una sección',
      'Mensaje central + llamado a la acción',
      'Diseño responsive (móvil, tablet, escritorio)',
      'Botón a WhatsApp, enlace o formulario',
      'Optimización de velocidad básica',
      'SEO on-page básico',
    ],
  },
  {
    name: 'Regular',
    price: '$250.000',
    tagline: 'Landing completa de conversión, lista para recibir tráfico de campañas.',
    featured: true,
    features: [
      'Diseño único a medida multisección',
      'Diseño responsive (móvil, tablet, escritorio)',
      'Estructura de conversión completa',
      'Formularios y botones a sus destinos',
      'Optimización de velocidad de carga',
      'SEO on-page',
    ],
  },
  {
    name: 'Avanzado',
    price: '$420.000',
    tagline: 'Landing premium: más larga, con animaciones e interacciones a medida.',
    features: [
      'Todo lo del Plan Regular',
      'Diseño multisección elaborado',
      'Estructura de conversión extendida',
      'Animaciones e interacciones personalizadas',
      'Optimización de velocidad avanzada',
    ],
  },
]

export default function Planes() {
  return (
    <section id="planes" className="dot-grid py-[5.5rem] px-8">
      <div className="max-w-[1160px] mx-auto">
        <p className="rvL text-[.72rem] font-bold tracking-[.22em] uppercase text-terra mb-2">Planes</p>
        <h2
          className="rvL font-[family-name:var(--font-display)] font-black text-roble mb-3 leading-tight"
          style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
        >
          Elige según lo que necesitas.
        </h2>
        <p className="rvL text-[.97rem] leading-[1.75] text-muted max-w-[560px] mb-12">
          Tres planes según la complejidad de tu página.
        </p>
        <p className="rvL text-[.72rem] text-muted/70 mb-8">Precios vigentes a {PRECIOS_VIGENTES}.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {planes.map((p, i) => (
            <div
              key={p.name}
              className="rv flex flex-col border-2 border-roble bg-white p-8 transition-[transform,box-shadow]"
              style={{
                boxShadow: p.featured ? '6px 6px 0 #E2725B' : '4px 4px 0 #5D4037',
                borderColor: p.featured ? '#E2725B' : undefined,
                transitionDelay: `${i * .1}s`,
              }}
            >
              {p.featured && (
                <span className="inline-block self-start px-3 py-1 mb-4 text-[.68rem] font-bold tracking-[.1em] uppercase text-white" style={{ background: '#E2725B' }}>
                  Más pedido
                </span>
              )}
              <h3 className="font-[family-name:var(--font-display)] text-[1.4rem] font-bold text-roble mb-1">{p.name}</h3>
              <p className="text-[.83rem] text-muted leading-[1.55] mb-5 min-h-[3.5rem]">{p.tagline}</p>
              <div className="font-[family-name:var(--font-display)] font-black text-roble mb-6" style={{ fontSize: '2.2rem' }}>
                {p.price}
              </div>
              <ul className="flex-1 mb-8 space-y-3">
                {p.features.map(f => (
                  <li key={f} className="flex items-start gap-2 text-[.85rem] text-muted leading-[1.5]">
                    <span className="text-terra font-bold mt-[.1rem]">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#cotizar"
                className="inline-block text-center px-6 py-[.65rem] text-[.8rem] font-bold tracking-[.06em] uppercase no-underline transition-colors"
                style={
                  p.featured
                    ? { background: '#E2725B', color: 'white', boxShadow: '4px 4px 0 #3E2723' }
                    : { border: '2px solid #5D4037', color: '#5D4037' }
                }
              >
                Elegir {p.name} →
              </a>
            </div>
          ))}
        </div>

        {/* Custom quote callout */}
        <div
          className="rv mt-6 border-2 border-dashed border-roble p-6 md:p-7 flex flex-col md:flex-row md:items-center gap-4 md:gap-6"
          style={{ transitionDelay: '.3s' }}
        >
          <div className="flex-1">
            <h3 className="font-[family-name:var(--font-display)] text-[1.1rem] font-bold text-roble mb-1">
              ¿Necesitas más de una página?
            </h3>
            <p className="text-[.85rem] text-muted leading-[1.55]">
              Si tu proyecto son 2 páginas o más, lo cotizamos juntos a medida — y aplica descuento por pack según la cantidad y el contexto.
            </p>
          </div>
          <a
            href="#cotizar"
            className="inline-block shrink-0 text-center px-6 py-[.6rem] text-[.8rem] font-bold tracking-[.06em] uppercase no-underline border-2 border-roble text-roble bg-transparent transition-colors hover:bg-roble hover:text-cream"
          >
            Cotiza conmigo →
          </a>
        </div>

        {/* E-commerce funnel pointer */}
        <div
          className="rv mt-4 border-2 border-dashed border-roble p-6 md:p-7 flex flex-col md:flex-row md:items-center gap-4 md:gap-6"
          style={{ transitionDelay: '.35s' }}
        >
          <div className="flex-1">
            <h3 className="font-[family-name:var(--font-display)] text-[1.1rem] font-bold text-roble mb-1">
              ¿Vendes productos online?
            </h3>
            <p className="text-[.85rem] text-muted leading-[1.55]">
              Para tiendas online tenemos un servicio aparte, con precio y forma de pago distintos.
            </p>
          </div>
          <a
            href="/ecommerce/"
            className="inline-block shrink-0 text-center px-6 py-[.6rem] text-[.8rem] font-bold tracking-[.06em] uppercase no-underline border-2 border-roble text-roble bg-transparent transition-colors hover:bg-roble hover:text-cream"
          >
            Ver e-commerce →
          </a>
        </div>
      </div>
    </section>
  )
}

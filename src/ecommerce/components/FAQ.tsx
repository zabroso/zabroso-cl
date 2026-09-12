import { useState } from 'react'

const faqs = [
  {
    q: '¿Qué es Shopify y por qué lo usan?',
    a: (
      <>
        <a href="https://www.shopify.com" target="_blank" rel="noopener" className="text-terra font-semibold underline">Shopify</a>
        {' '}es la plataforma más usada del mundo para tiendas online — maneja pagos, inventario y envíos de forma segura y probada. En vez de construir todo eso desde cero, la usamos como base para que tu tienda funcione bien desde el primer día.
      </>
    ),
  },
  {
    q: '¿Qué responsabilidad técnica tengo yo?',
    a: 'Ninguna. Tú solo contratas, nos das los datos de tus productos y apruebas cómo se ve tu tienda. Nosotros nos encargamos de toda la configuración técnica.',
  },
  {
    q: '¿Cuánto cuesta y cómo se paga?',
    a: 'Dos formas: $92.500 al mes durante 12 meses (con la mantención del primer año incluida), o $750.000 en un pago único (sin mantención). Tú eliges la que te acomode.',
  },
  {
    q: '¿Qué gastos tengo que cubrir yo aparte?',
    a: 'Dos cosas que se pagan directamente a Shopify, no a nosotros: la suscripción mensual de la plataforma y una pequeña comisión por cada venta que recibas. Son costos normales de cualquier tienda online, no un cobro nuestro.',
  },
  {
    q: '¿Necesito comprar un dominio?',
    a: 'Sí, si quieres una dirección propia (como tutienda.cl). Te ayudamos a elegirlo y configurarlo — el costo del dominio lo paga el negocio, nosotros solo hacemos el trámite.',
  },
  {
    q: '¿Cuánto se demora?',
    a: 'Depende de cuántos productos tengas y qué tan rápido nos envíes fotos, descripciones y precios. Te damos un plazo estimado apenas cotizamos tu proyecto.',
  },
  {
    q: '¿Puedo pedir cambios después de publicada la tienda?',
    a: 'Sí. Si pagaste en cuotas, los cambios menores están cubiertos por la mantención del primer año. Si pagaste de una vez, cualquier cambio se cotiza aparte.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="dot-grid py-[5.5rem] px-8">
      <div className="max-w-[760px] mx-auto">
        <p className="rvL text-[.72rem] font-bold tracking-[.22em] uppercase text-terra mb-2">Preguntas frecuentes</p>
        <h2
          className="rvL font-[family-name:var(--font-display)] font-black text-roble mb-3 leading-tight"
          style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
        >
          ¿Tienes dudas?
        </h2>
        <p className="rvL text-[.97rem] leading-[1.75] text-muted mb-10">
          Sin tecnicismos — lo que un dueño de negocio necesita saber antes de partir.
        </p>

        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={f.q} className="rv border-2 border-roble bg-white" style={{ transitionDelay: `${i * .04}s` }}>
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 text-left px-5 py-4 cursor-pointer"
                aria-expanded={open === i}
              >
                <span className="font-[family-name:var(--font-display)] font-bold text-roble text-[.95rem]">{f.q}</span>
                <span className="text-terra font-bold text-lg shrink-0">{open === i ? '−' : '+'}</span>
              </button>
              <div
                className="overflow-hidden transition-[max-height] duration-300"
                style={{ maxHeight: open === i ? '260px' : '0' }}
              >
                <p className="px-5 pb-4 text-[.85rem] text-muted leading-[1.6]">{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

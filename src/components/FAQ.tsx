import { useState } from 'react'

const faqs = [
  {
    q: '¿Qué responsabilidad técnica tengo yo como cliente?',
    a: 'Ninguna. Tú solo contratas, creas las cuentas que se necesitan (GitHub, Cloudflare y NIC.cl si compras el dominio tú mismo) y validas lo que te vamos entregando — que el diseño te guste, que el dominio sea el correcto. Todo lo técnico — código, configuración, publicación — corre por nuestra cuenta.',
  },
  {
    q: '¿Cómo quedan las cuentas de GitHub y Cloudflare?',
    a: 'Todo a tu nombre, nunca al nuestro. En GitHub creamos una organización para tu proyecto, tú quedas como dueño y nos das acceso de colaborador para trabajar ahí. En Cloudflare la cuenta la creas tú y nos invitas como colaboradores — ahí vive tu dominio, y si hay que pagar algo (como el dominio) lo haces con tu propia tarjeta dentro de tu cuenta. Nosotros solo trabajamos sobre lo que ya es tuyo.',
  },
  {
    q: '¿El dominio está incluido en el precio?',
    a: 'Gestionamos todo el trámite, pero la compra y una eventual transferencia las paga el cliente — nunca están incluidas en el plan. Para un dominio .cl hay dos formas: creas tu cuenta en NIC.cl y nos das acceso para que compremos y configuremos todo directamente ahí, o lo compramos nosotros primero y después hacemos el traspaso para que quede a tu nombre.',
  },
  {
    q: '¿El hosting tiene costo?',
    a: 'No. Tu página se aloja en Cloudflare Pages, que es gratuito por naturaleza — no es un costo que nosotros paguemos ni te cobremos.',
  },
  {
    q: '¿Cómo se paga el proyecto?',
    a: 'Dos formas: 50% al arrancar y 50% a la entrega, o 50% de anticipo y el saldo distribuido a medida que se entrega y aprueba cada página. El trabajo comienza al recibir el anticipo; si hay un atraso en un pago, el trabajo se pausa hasta regularizarlo. La boleta de honorarios se emite a nombre de quien paga.',
  },
  {
    q: '¿Qué pasa después del primer año?',
    a: 'La renovación del dominio (≈ $12.000 al año) la paga el cliente. El hosting en Cloudflare sigue siendo gratis, todos los años.',
  },
  {
    q: '¿Qué cubre la garantía de 6 meses?',
    a: 'Defectos de construcción: algo que se rompe por cómo se construyó la página. No cubre cambios de contenido ni nuevos requerimientos, y no se agota si la usas — sigue vigente durante todo el período.',
  },
  {
    q: '¿Puedo pedir más rondas de revisión?',
    a: 'Cada plan incluye 3 rondas. Una ronda extra tiene un costo de $20.000.',
  },
  {
    q: '¿Pueden redactar los textos por mí?',
    a: 'Sí. Investigamos y creamos textos e imágenes cuando aún no los tienes listos — valor a cotizar según el alcance.',
  },
  {
    q: '¿Hacen descuento si pido varias páginas?',
    a: 'Sí, a criterio según la cantidad de páginas y el contexto. Cuéntanos en el formulario de cotización y lo revisamos juntos.',
  },
  {
    q: '¿Tienen mantención mensual?',
    a: 'Es opcional: $30.000 al mes, con 3 tickets de cambios y hasta 10 horas totales. Si no la contratas, igual conversamos ante cualquier necesidad puntual — lo simple se resuelve sin costo, lo más complejo se cotiza antes de hacerlo.',
  },
  {
    q: '¿Hacen tiendas online / e-commerce?',
    a: (
      <>
        Sí, pero es un servicio aparte con su propio precio y forma de pago — conoce el detalle en{' '}
        <a href="/ecommerce/" className="text-terra font-semibold underline">tienda online a medida en Shopify</a>.
      </>
    ),
  },
  {
    q: '¿Hacen otro tipo de desarrollo, no solo páginas web?',
    a: 'Software a medida, SaaS, IA o automatizaciones no son parte de este servicio — esos proyectos viven en cuzmar.cl.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="bg-white py-[5.5rem] px-8">
      <div className="max-w-[760px] mx-auto">
        <p className="rvL text-[.72rem] font-bold tracking-[.22em] uppercase text-terra mb-2">Preguntas frecuentes</p>
        <h2
          className="rvL font-[family-name:var(--font-display)] font-black text-roble mb-3 leading-tight"
          style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
        >
          ¿Tienes dudas?
        </h2>
        <p className="rvL text-[.97rem] leading-[1.75] text-muted mb-10">
          Dominio, pagos, garantía y todo lo demás — sin letra chica escondida.
        </p>

        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={f.q} className="rv border-2 border-roble bg-cream" style={{ transitionDelay: `${i * .04}s` }}>
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
                style={{ maxHeight: open === i ? '320px' : '0' }}
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

import '../index.css'
import { useReveal } from '../hooks/useReveal'
import Nav from '../components/Nav'
import Contacto from '../components/Contacto'
import Footer from '../components/Footer'

const WHATSAPP = 'https://wa.me/56949360955?text=Hola%2C%20quiero%20cotizar'

const cardCls = 'rv flex flex-col gap-2 border-2 border-roble bg-white p-6 transition-[transform,box-shadow]'
const cardShadow = { boxShadow: '4px 4px 0 #5D4037' }
const labelCls = 'text-[.68rem] font-bold tracking-[.14em] uppercase text-terra'
const valueCls = 'font-[family-name:var(--font-display)] text-[1.1rem] font-bold text-roble no-underline hover:text-terra transition-colors break-words'

export default function App() {
  useReveal()

  return (
    <>
      <Nav />
      <main className="pt-[60px]">
        {/* ── CABECERA + CANALES ── */}
        <section className="bg-white px-8 py-16 md:py-20">
          <div className="max-w-[1160px] mx-auto">
            <p className="rvL flex items-center gap-2 text-[.72rem] font-bold tracking-[.22em] uppercase text-terra mb-4">
              <span className="inline-block w-6 h-[2px] bg-terra" />
              Contacto
            </p>
            <h1
              className="rvL font-[family-name:var(--font-display)] font-black leading-none text-roble mb-5"
              style={{ fontSize: 'clamp(2.6rem, 5vw, 4.4rem)' }}
            >
              Hablemos de<br />
              <em className="italic text-terra block">tu página web.</em>
            </h1>
            <p className="rvL text-[1.02rem] leading-[1.75] text-muted max-w-[560px] mb-10">
              La forma más rápida es WhatsApp: escríbeme y te respondo directo. Si prefieres dejar todo por escrito,
              el formulario de abajo llega al mismo lugar.
            </p>

            {/* CTA principal */}
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="rvL inline-flex items-center gap-3 px-7 py-[.8rem] text-[.85rem] font-bold tracking-[.06em] uppercase text-white no-underline animate-pulse-terra mb-14"
              style={{ background: '#E2725B', boxShadow: '4px 4px 0 #3E2723' }}
              aria-label="Escribir por WhatsApp al +56 9 4936 0955"
            >
              <span aria-hidden="true">💬</span>
              Escríbeme por WhatsApp →
            </a>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className={cardCls} style={cardShadow}>
                <span className={labelCls}>Teléfono / WhatsApp</span>
                <a href="tel:+56949360955" className={valueCls}>+56 9 4936 0955</a>
                <p className="text-[.8rem] text-muted leading-[1.55]">Llamada o mensaje, como te acomode.</p>
              </div>

              <div className={cardCls} style={{ ...cardShadow, transitionDelay: '.08s' }}>
                <span className={labelCls}>Email</span>
                <a href="mailto:pablo@zabroso.cl" className={valueCls}>pablo@zabroso.cl</a>
                <p className="text-[.8rem] text-muted leading-[1.55]">Para cotizaciones con detalle o adjuntos.</p>
              </div>

              <div className={cardCls} style={{ ...cardShadow, transitionDelay: '.16s' }}>
                <span className={labelCls}>Horario de respuesta</span>
                {/* TODO(pablo): confirmar horario de atención */}
                <span className="font-[family-name:var(--font-display)] text-[1.1rem] font-bold text-roble">Lunes a viernes</span>
                <p className="text-[.8rem] text-muted leading-[1.55]">9:00 a 18:00, hora de Chile. Fuera de ese horario respondo el siguiente día hábil.</p>
              </div>

              <div className={cardCls} style={{ ...cardShadow, transitionDelay: '.24s' }}>
                <span className={labelCls}>Ubicación</span>
                <span className="font-[family-name:var(--font-display)] text-[1.1rem] font-bold text-roble">Valparaíso, Chile</span>
                <p className="text-[.8rem] text-muted leading-[1.55]">Trabajo remoto para todo el país. No se necesitan reuniones presenciales.</p>
              </div>
            </div>

            <p className="rv mt-8 text-[.8rem] text-muted leading-[1.6] max-w-[720px]" style={{ transitionDelay: '.3s' }}>
              ¿Buscas una tienda online? El servicio de e-commerce tiene su propio formulario en{' '}
              <a href="/ecommerce/#cotizar" className="text-terra font-semibold underline underline-offset-2 hover:text-roble">
                zabroso.cl/ecommerce
              </a>
              . Si tu proyecto es un sistema a medida, SaaS o automatización, eso vive en{' '}
              <a href="https://cuzmar.cl" target="_blank" rel="noopener noreferrer" className="text-terra font-semibold underline underline-offset-2 hover:text-roble">
                cuzmar.cl
              </a>
              .
            </p>
          </div>
        </section>

        {/* ── FORMULARIO (componente compartido con la home) ── */}
        <Contacto
          id="formulario"
          eyebrow="Formulario de cotización"
          title="O déjame todo por escrito."
          intro="Los mismos datos que te pediría por WhatsApp. Te respondo al correo que dejes aquí."
        />
      </main>
      <Footer />
    </>
  )
}

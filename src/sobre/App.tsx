import '../index.css'
import { useReveal } from '../hooks/useReveal'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import PixelBrowser from '../components/pixel/PixelBrowser'

const WHATSAPP = 'https://wa.me/56949360955?text=Hola%2C%20quiero%20cotizar'

const principios = [
  {
    icon: '🧱',
    name: 'Código propio, sin plantillas',
    desc: 'Cada página se escribe desde cero en React para tu negocio. No adapto un tema genérico ni armo el sitio en un builder que después te limita.',
  },
  {
    icon: '🔑',
    name: 'Todo queda a tu nombre',
    desc: 'GitHub, Cloudflare y el dominio se crean en tus cuentas. Yo trabajo como colaborador sobre lo que ya es tuyo — si mañana quieres cambiar de proveedor, no dependes de mí.',
  },
  {
    icon: '🛡️',
    name: 'Garantía de 6 meses',
    desc: 'Si algo se rompe por cómo se construyó la página, lo arreglo sin costo durante seis meses. Sin letra chica.',
  },
  {
    icon: '💬',
    name: 'Cero responsabilidad técnica para ti',
    desc: 'Tú validas diseño y contenido. Código, configuración, dominio, SSL y publicación corren por mi cuenta.',
  },
]

const stack: { name: string; para: string }[] = [
  { name: 'React', para: 'La base de cada página que construyo' },
  { name: 'TypeScript', para: 'Código más seguro y mantenible' },
  { name: 'Vite', para: 'Build rápido y optimizado' },
  { name: 'Tailwind CSS', para: 'Estilos a medida sin peso extra' },
  { name: 'Astro', para: 'Sitios de contenido con SEO técnico' },
  { name: 'Shopify', para: 'Tiendas online listas para vender' },
  { name: 'Cloudflare Pages', para: 'Hosting gratuito con SSL incluido' },
  { name: 'GitHub', para: 'Tu código, versionado y a tu nombre' },
  { name: 'Google Analytics', para: 'Métricas configuradas desde el día uno' },
]

const pasos = [
  'Cotización y elección de plan',
  'Anticipo y arranque',
  'Entrega de contenido',
  'Diseño y desarrollo',
  'Revisiones (3 rondas incluidas)',
  'Publicación y entrega de accesos',
]

const razones = [
  { t: 'Hablas directo con quien construye', d: 'No hay ejecutivo de cuentas ni intermediarios: cotizo, diseño, programo y publico yo mismo.' },
  { t: 'Precios cerrados, sin sorpresas', d: 'Tres planes con precio fijo. Lo que no está incluido — dominio, textos, rondas extra — se dice antes, no después.' },
  { t: 'Una página que carga rápido', d: 'Sin plugins ni builders de por medio. Código propio, optimizado para velocidad y SEO on-page desde el primer plan.' },
  { t: 'Acompañamiento después de publicar', d: 'Garantía de 6 meses, mantención mensual opcional y, si es algo simple, lo resolvemos conversando.' },
]

export default function App() {
  useReveal()

  return (
    <>
      <Nav />
      <main className="pt-[60px]">
        {/* ── CABECERA ── */}
        <section className="dot-grid px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-12 max-w-[1160px] mx-auto items-center">
            <div>
              <p className="rvL flex items-center gap-2 text-[.72rem] font-bold tracking-[.22em] uppercase text-terra mb-4">
                <span className="inline-block w-6 h-[2px] bg-terra" />
                Sobre Pablo · Valparaíso, Chile
              </p>
              <h1
                className="rvL font-[family-name:var(--font-display)] font-black leading-none text-roble mb-6"
                style={{ fontSize: 'clamp(2.6rem, 5vw, 4.4rem)' }}
              >
                Hola, soy Pablo.<br />
                <em className="italic text-terra block">Construyo páginas web a medida.</em>
              </h1>
              <p className="rvL text-[1.02rem] leading-[1.75] text-muted max-w-[540px] mb-5">
                Soy desarrollador web y trabajo desde Valparaíso para negocios de todo Chile. Me dedico a una sola cosa:
                páginas web escritas en código propio — sin plantillas, sin builders — que cargan rápido, se ven como tu
                marca y quedan completamente a tu nombre.
              </p>
              <p className="rvL text-[.95rem] leading-[1.75] text-muted max-w-[540px] mb-8">
                Si necesitas un sistema a medida, un SaaS o automatizaciones, eso vive en{' '}
                <a href="https://cuzmar.cl" target="_blank" rel="noopener noreferrer" className="text-terra font-semibold underline underline-offset-2 hover:text-roble">
                  cuzmar.cl
                </a>
                . Acá, solo páginas web.
              </p>
              <div className="rvL flex gap-4 flex-wrap">
                <a
                  href="/contacto/"
                  className="inline-block px-6 py-[.6rem] text-[.82rem] font-bold tracking-[.06em] uppercase text-white no-underline"
                  style={{ background: '#E2725B', boxShadow: '4px 4px 0 #3E2723' }}
                >
                  Hablemos de tu proyecto →
                </a>
                <a
                  href="/#planes"
                  className="inline-block px-6 py-[.6rem] text-[.82rem] font-bold tracking-[.06em] uppercase text-roble no-underline border-2 border-roble bg-transparent transition-colors hover:bg-roble hover:text-cream"
                >
                  Ver planes
                </a>
              </div>
            </div>

            <div className="rvR flex justify-center items-center relative">
              <PixelBrowser size={240} />
              <div
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-40 h-3 rounded-full"
                style={{ background: 'rgba(93,64,55,.18)', filter: 'blur(6px)' }}
              />
              <div
                className="absolute font-[family-name:var(--font-display)] font-semibold text-[.72rem] text-roble whitespace-nowrap border-2 border-roble bg-white px-[.9rem] py-[.6rem]"
                style={{ top: '4%', right: '-6%', boxShadow: '4px 4px 0 #5D4037', transform: 'rotate(3deg)' }}
              >
                código propio ✦
              </div>
              <div
                className="absolute text-[.7rem] text-muted italic border-2 border-roble bg-[#FFF8F0] px-[.8rem] py-[.5rem]"
                style={{ bottom: '8%', left: '-8%', boxShadow: '4px 4px 0 #5D4037', transform: 'rotate(-2deg)' }}
              >
                desde Valparaíso
              </div>
            </div>
          </div>
        </section>

        {/* ── CÓMO TRABAJO ── */}
        <section id="como-trabajo" className="bg-white py-[5.5rem] px-8">
          <div className="max-w-[1160px] mx-auto">
            <p className="rvL text-[.72rem] font-bold tracking-[.22em] uppercase text-terra mb-2">Cómo trabajo</p>
            <h2
              className="rvL font-[family-name:var(--font-display)] font-black text-roble mb-3 leading-tight"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
            >
              Cuatro reglas que no negocio.
            </h2>
            <p className="rvL text-[.97rem] leading-[1.75] text-muted max-w-[560px] mb-12">
              Son las mismas que encuentras en cada plan. No son un discurso de marketing: son cómo está armado el servicio.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {principios.map((p, i) => (
                <div
                  key={p.name}
                  className="rv bg-white border-2 border-roble p-6 transition-[transform,box-shadow]"
                  style={{ boxShadow: '4px 4px 0 #5D4037', transitionDelay: `${i * .1}s` }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translate(-2px,-2px)'
                    e.currentTarget.style.boxShadow = '6px 6px 0 #5D4037'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = ''
                    e.currentTarget.style.boxShadow = '4px 4px 0 #5D4037'
                  }}
                >
                  <span className="block text-[2rem] mb-3">{p.icon}</span>
                  <h3 className="font-[family-name:var(--font-display)] text-[1.05rem] font-bold text-roble mb-2 leading-snug">{p.name}</h3>
                  <p className="text-[.82rem] text-muted leading-[1.6]">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── STACK ── */}
        <section id="stack" className="bg-roble py-[5.5rem] px-8">
          <div className="max-w-[1160px] mx-auto">
            <p className="rvL text-[.72rem] font-bold tracking-[.22em] uppercase mb-2" style={{ color: 'rgba(226,114,91,.85)' }}>
              Con qué construyo
            </p>
            <h2
              className="rvL font-[family-name:var(--font-display)] font-black mb-3 leading-tight"
              style={{ color: '#FAF9F6', fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
            >
              Herramientas probadas, nada exótico.
            </h2>
            <p className="rvL text-[.97rem] leading-[1.75] max-w-[560px] mb-12" style={{ color: 'rgba(250,249,246,.65)' }}>
              Elijo tecnología estable y con comunidad grande, para que tu página no dependa de un plugin que mañana deja de existir.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {stack.map((s, i) => (
                <div
                  key={s.name}
                  className="rv flex flex-col gap-1 p-4"
                  style={{ border: '2px solid rgba(250,249,246,.2)', background: 'rgba(250,249,246,.07)', transitionDelay: `${i * .05}s` }}
                >
                  <span className="font-[family-name:var(--font-display)] font-bold text-[1rem]" style={{ color: '#FAF9F6' }}>{s.name}</span>
                  <span className="text-[.8rem]" style={{ color: 'rgba(250,249,246,.65)' }}>{s.para}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROCESO ── */}
        <section id="proceso-resumen" className="bg-white py-[5.5rem] px-8">
          <div className="max-w-[1160px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-12 items-start">
            <div>
              <p className="rvL text-[.72rem] font-bold tracking-[.22em] uppercase text-terra mb-2">Cómo corre un proyecto</p>
              <h2
                className="rvL font-[family-name:var(--font-display)] font-black text-roble mb-3 leading-tight"
                style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
              >
                Seis pasos, sin vueltas.
              </h2>
              <p className="rvL text-[.97rem] leading-[1.75] text-muted mb-6">
                Desde que eliges tu plan hasta que la página está publicada y los accesos en tus manos. El trabajo parte
                con el anticipo y avanza a medida que entregas contenido y apruebas el prototipo.
              </p>
              <a
                href="/#proceso"
                className="rvL inline-block px-6 py-[.6rem] text-[.82rem] font-bold tracking-[.06em] uppercase text-roble no-underline border-2 border-roble bg-transparent transition-colors hover:bg-roble hover:text-cream"
              >
                Ver el proceso completo →
              </a>
            </div>

            <ol className="space-y-3">
              {pasos.map((p, i) => (
                <li
                  key={p}
                  className="rv flex items-center gap-4 border-2 border-roble bg-cream px-5 py-3"
                  style={{ transitionDelay: `${i * .07}s` }}
                >
                  <span className="font-[family-name:var(--font-display)] font-black text-terra text-[1.4rem] w-8 shrink-0" style={{ opacity: .6 }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-[family-name:var(--font-display)] font-bold text-roble text-[.95rem]">{p}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── POR QUÉ CONMIGO ── */}
        <section id="por-que-conmigo" className="dot-grid py-[5.5rem] px-8">
          <div className="max-w-[1160px] mx-auto">
            <p className="rvL text-[.72rem] font-bold tracking-[.22em] uppercase text-terra mb-2">Por qué trabajar conmigo</p>
            <h2
              className="rvL font-[family-name:var(--font-display)] font-black text-roble mb-12 leading-tight"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
            >
              Lo que te llevas, además de la página.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
              {razones.map((r, i) => (
                <div key={r.t} className="rv flex gap-4" style={{ transitionDelay: `${i * .08}s` }}>
                  <span className="text-terra font-bold text-xl shrink-0 mt-[.1rem]">✓</span>
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-[1.05rem] font-bold text-roble mb-1">{r.t}</h3>
                    <p className="text-[.85rem] text-muted leading-[1.6]">{r.d}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div
              className="rv mt-14 border-2 border-roble bg-white p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-6"
              style={{ boxShadow: '6px 6px 0 #5D4037', transitionDelay: '.2s' }}
            >
              <div className="flex-1">
                <h3 className="font-[family-name:var(--font-display)] text-[1.4rem] font-bold text-roble mb-1 leading-snug">
                  ¿Conversamos sobre tu página?
                </h3>
                <p className="text-[.9rem] text-muted leading-[1.6]">
                  Cuéntame qué necesitas y te respondo directo, sin vueltas. Por WhatsApp o por el formulario, como te acomode.
                </p>
              </div>
              <div className="flex gap-3 flex-wrap shrink-0">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-[.65rem] text-[.8rem] font-bold tracking-[.06em] uppercase text-white no-underline"
                  style={{ background: '#E2725B', boxShadow: '4px 4px 0 #3E2723' }}
                >
                  WhatsApp →
                </a>
                <a
                  href="/contacto/"
                  className="inline-block px-6 py-[.65rem] text-[.8rem] font-bold tracking-[.06em] uppercase text-roble no-underline border-2 border-roble bg-transparent transition-colors hover:bg-roble hover:text-cream"
                >
                  Ir a contacto
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

import PixelCup from './pixel/PixelCup'

export default function Footer() {
  return (
    <footer
      id="contacto"
      className="py-20 px-8 text-center text-white"
      style={{ background: 'linear-gradient(135deg, #FF9E80 0%, #CE93D8 50%, #9575CD 100%)' }}
    >
      <div className="max-w-[600px] mx-auto">
        <div className="flex justify-center mb-6">
          <PixelCup size={90} steam={true} />
        </div>

        <h2
          className="font-[family-name:var(--font-display)] font-black mb-3"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
        >
          ¿Conversamos?
        </h2>
        <p className="text-[1.05rem] opacity-85 mb-10 max-w-[480px] mx-auto">
          La mejor reunión empieza con un café. Sin formularios complicados — solo escríbeme y agendamos.
        </p>

        <a
          href="mailto:pablo@zabroso.cl"
          className="inline-block text-[1rem] font-bold tracking-[.04em] uppercase text-terra no-underline bg-white transition-[box-shadow,transform] px-10 py-[.85rem]"
          style={{ boxShadow: '4px 4px 0 rgba(0,0,0,.15)' }}
          onMouseEnter={e => {
            e.currentTarget.style.boxShadow = '1px 1px 0 rgba(0,0,0,.15)'
            e.currentTarget.style.transform = 'translate(3px,3px)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.boxShadow = '4px 4px 0 rgba(0,0,0,.15)'
            e.currentTarget.style.transform = ''
          }}
        >
          ☕ pablo@zabroso.cl
        </a>

        <div
          className="flex gap-10 justify-center flex-wrap mt-10 pt-8"
          style={{ borderTop: '1px solid rgba(255,255,255,.25)' }}
        >
          <a href="https://github.com/zabroso" target="_blank" rel="noopener noreferrer" className="text-white no-underline text-[.8rem] font-semibold opacity-75 hover:opacity-100 transition-opacity">
            GitHub
          </a>
          <a href="mailto:pablo@zabroso.cl" className="text-white no-underline text-[.8rem] font-semibold opacity-75 hover:opacity-100 transition-opacity">
            Email
          </a>
          <span className="text-[.78rem] opacity-50">zabroso.cl · Valparaíso, Chile · 2025</span>
        </div>
      </div>
    </footer>
  )
}

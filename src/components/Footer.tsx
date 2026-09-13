const linkCls = 'no-underline text-[.8rem] font-semibold opacity-75 hover:opacity-100 transition-opacity'
const legalCls = 'no-underline text-[.72rem] font-medium opacity-60 hover:opacity-100 transition-opacity'

// Anclas absolutas: este Footer se comparte con /sobre/, /contacto/, /privacidad/ y /terminos/.
const legal: [string, string][] = [
  ['/sobre/', 'Sobre Pablo'],
  ['/contacto/', 'Contacto'],
  ['/privacidad/', 'Privacidad'],
  ['/terminos/', 'Términos y condiciones'],
]

export default function Footer() {
  return (
    <footer className="py-10 px-8 bg-roble">
      <div className="max-w-[1160px] mx-auto flex flex-wrap items-center justify-between gap-6">
        <a href="/" className="no-underline font-[family-name:var(--font-display)] font-black text-lg" style={{ color: '#FAF9F6' }}>
          zabroso<span className="text-terra">.cl</span>
        </a>

        <div className="flex gap-8 flex-wrap">
          <a href="/#planes" className={linkCls} style={{ color: '#FAF9F6' }}>
            Planes
          </a>
          <a href="/#faq" className={linkCls} style={{ color: '#FAF9F6' }}>
            FAQ
          </a>
          <a href="https://cuzmar.cl" target="_blank" rel="noopener noreferrer" className={linkCls} style={{ color: '#FAF9F6' }}>
            cuzmar.cl
          </a>
          <a href="mailto:pablo@zabroso.cl" className={linkCls} style={{ color: '#FAF9F6' }}>
            pablo@zabroso.cl
          </a>
        </div>

        <span className="text-[.78rem] opacity-50" style={{ color: '#FAF9F6' }}>zabroso.cl · Chile · 2026</span>
      </div>

      <nav
        aria-label="Información y legal"
        className="max-w-[1160px] mx-auto mt-6 pt-5 flex flex-wrap gap-x-6 gap-y-2"
        style={{ borderTop: '1px solid rgba(250,249,246,.15)' }}
      >
        {legal.map(([href, label]) => (
          <a key={href} href={href} className={legalCls} style={{ color: '#FAF9F6' }}>
            {label}
          </a>
        ))}
      </nav>
    </footer>
  )
}

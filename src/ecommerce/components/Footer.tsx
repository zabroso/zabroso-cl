export default function Footer() {
  return (
    <footer className="py-10 px-8 bg-roble">
      <div className="max-w-[1160px] mx-auto flex flex-wrap items-center justify-between gap-6">
        <a href="/" className="no-underline font-[family-name:var(--font-display)] font-black text-lg" style={{ color: '#FAF9F6' }}>
          zabroso<span className="text-terra">.cl</span>
        </a>

        <div className="flex gap-8 flex-wrap">
          <a href="/" className="no-underline text-[.8rem] font-semibold opacity-75 hover:opacity-100 transition-opacity" style={{ color: '#FAF9F6' }}>
            Páginas web
          </a>
          <a href="#faq" className="no-underline text-[.8rem] font-semibold opacity-75 hover:opacity-100 transition-opacity" style={{ color: '#FAF9F6' }}>
            FAQ
          </a>
          <a href="mailto:pablo@zabroso.cl" className="no-underline text-[.8rem] font-semibold opacity-75 hover:opacity-100 transition-opacity" style={{ color: '#FAF9F6' }}>
            pablo@zabroso.cl
          </a>
        </div>

        <span className="text-[.78rem] opacity-50" style={{ color: '#FAF9F6' }}>zabroso.cl · Chile · 2026</span>
      </div>
    </footer>
  )
}

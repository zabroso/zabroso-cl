import { EMAIL, PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from '../../data/site'

export default function Footer() {
  return (
    <footer className="py-10 px-8 bg-roble">
      <div className="max-w-[1160px] mx-auto flex flex-wrap items-center justify-between gap-6">
        <a href="/" className="no-underline font-[family-name:var(--font-display)] font-black text-lg" style={{ color: '#FAF9F6' }}>
          zabroso<span className="text-terra">.cl</span>
        </a>

        <div className="flex gap-8 flex-wrap items-center">
          <a href="/" className="no-underline text-[.8rem] font-semibold opacity-75 hover:opacity-100 transition-opacity" style={{ color: '#FAF9F6' }}>
            Páginas web
          </a>
          <a href="#faq" className="no-underline text-[.8rem] font-semibold opacity-75 hover:opacity-100 transition-opacity" style={{ color: '#FAF9F6' }}>
            FAQ
          </a>
          <a href={PHONE_TEL} className="no-underline text-[.8rem] font-semibold opacity-75 hover:opacity-100 transition-opacity" style={{ color: '#FAF9F6' }}>
            {PHONE_DISPLAY}
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="no-underline text-[.8rem] font-bold px-3 py-1" style={{ color: '#FAF9F6', background: '#25D366' }}>
            WhatsApp
          </a>
          <a href={`mailto:${EMAIL}`} className="no-underline text-[.8rem] font-semibold opacity-75 hover:opacity-100 transition-opacity" style={{ color: '#FAF9F6' }}>
            {EMAIL}
          </a>
        </div>

        <span className="text-[.78rem] opacity-50" style={{ color: '#FAF9F6' }}>zabroso.cl · Chile · 2026</span>
      </div>
    </footer>
  )
}

const items = [
  { icon: '📊', text: 'Google Analytics configurado' },
  { icon: '🌐', text: 'Gestión y configuración del dominio' },
  { icon: '☁️', text: 'Publicación en Cloudflare Pages (hosting gratuito)' },
  { icon: '🔒', text: 'Certificado SSL — sitio seguro con https' },
  { icon: '🚀', text: 'Puesta en producción y verificación de funcionamiento' },
  { icon: '🔑', text: 'Accesos entregados a nombre del cliente' },
  { icon: '🤝', text: 'Acompañamiento técnico durante la implementación' },
  { icon: '🔁', text: '3 rondas de revisión incluidas' },
  { icon: '🛡️', text: 'Garantía de 6 meses sobre defectos de construcción' },
]

export default function Incluido() {
  return (
    <section className="bg-roble py-[5.5rem] px-8">
      <div className="max-w-[1160px] mx-auto">
        <p className="rvL text-[.72rem] font-bold tracking-[.22em] uppercase mb-2" style={{ color: 'rgba(226,114,91,.85)' }}>
          En todos los planes
        </p>
        <h2
          className="rvL font-[family-name:var(--font-display)] font-black mb-3 leading-tight"
          style={{ color: '#FAF9F6', fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
        >
          Sin importar el plan, siempre incluye.
        </h2>
        <p className="rvL text-[.97rem] leading-[1.75] max-w-[560px] mb-12" style={{ color: 'rgba(250,249,246,.65)' }}>
          Gestionamos el trámite del dominio, pero su compra y una eventual transferencia las paga el cliente — el hosting en Cloudflare Pages es gratuito por naturaleza, no un costo que nosotros absorbamos. Todo lo demás va incluido.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {items.map((it, i) => (
            <div
              key={it.text}
              className="rv flex items-center gap-3 p-4 transition-[background,border-color]"
              style={{ border: '2px solid rgba(250,249,246,.2)', background: 'rgba(250,249,246,.07)', transitionDelay: `${i * .05}s` }}
            >
              <span className="text-xl">{it.icon}</span>
              <span className="text-[.85rem] font-medium" style={{ color: 'rgba(250,249,246,.85)' }}>{it.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

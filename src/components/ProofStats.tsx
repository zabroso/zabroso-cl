import { proofStats } from '../data/proof'

const stats = [
  { label: 'Sitios entregados', value: `${proofStats.sitiosEntregados}+` },
  { label: 'Entrega', value: `desde ${proofStats.entregaTipicaDias} días` },
  { label: 'Garantía', value: `${proofStats.garantiaMeses} meses` },
]

export default function ProofStats() {
  return (
    <section className="bg-white py-10 px-8 border-t border-b border-[rgba(93,64,55,.12)]">
      <div className="max-w-[1160px] mx-auto grid grid-cols-3 gap-6 text-center">
        {stats.map((s, i) => (
          <div key={s.label} className="rv" style={{ transitionDelay: `${i * .08}s` }}>
            <div
              className="font-[family-name:var(--font-display)] font-black text-roble"
              style={{ fontSize: 'clamp(1.6rem, 4vw, 2.2rem)' }}
            >
              {s.value}
            </div>
            <div className="text-[.7rem] md:text-[.78rem] text-muted font-semibold uppercase tracking-[.06em] mt-1">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

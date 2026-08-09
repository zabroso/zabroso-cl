import GitHubGrid from './GitHubGrid'

export default function Bitacora() {
  return (
    <section className="bg-white py-[5.5rem] px-8">
      <div className="max-w-[1160px] mx-auto">
        <p className="rvL text-[.72rem] font-bold tracking-[.22em] uppercase text-terra mb-2">Bitácora de Código</p>
        <h2
          className="rvL font-[family-name:var(--font-display)] font-black text-roble mb-3 leading-tight"
          style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
        >
          Actividad en GitHub.
        </h2>
        <p className="rvL text-[.97rem] leading-[1.75] text-muted max-w-[560px] mb-12">
          Commits como conversaciones. Cada celda verde es un problema resuelto.
        </p>
        <div className="rv">
          <GitHubGrid />
          <div className="mt-6 flex items-center gap-3">
            <a
              href="https://github.com/zabroso"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-[.5rem] text-[.78rem] font-bold tracking-[.06em] uppercase text-roble no-underline border-2 border-roble bg-transparent transition-colors hover:bg-roble hover:text-cream"
            >
              → github.com/zabroso
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function GitHubGrid() {
  const weeks = 53
  const days = 7
  const seed = (w: number, d: number) => Math.sin(w * 7 + d * 31 + w * d) * .5 + .5
  const level = (v: number) => v < .4 ? 0 : v < .6 ? 1 : v < .75 ? 2 : v < .9 ? 3 : 4
  const colors = ['#EFEBE9', '#A5D6A7', '#4CAF50', '#2E7D32', '#1B5E20']

  return (
    <div>
      <div className="flex gap-[3px] flex-wrap max-w-[700px]">
        {Array.from({ length: weeks }, (_, w) => (
          <div key={w} className="flex flex-col gap-[3px]">
            {Array.from({ length: days }, (_, d) => (
              <div
                key={d}
                style={{ width: 11, height: 11, borderRadius: 2, background: colors[level(seed(w, d))], transition: 'transform .15s' }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.3)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
              />
            ))}
          </div>
        ))}
      </div>
      <div className="flex gap-4 mt-3 items-center">
        <span className="text-[.72rem] font-bold text-muted">Menos</span>
        {colors.map((c, i) => (
          <div key={i} style={{ width: 12, height: 12, borderRadius: 2, background: c }} />
        ))}
        <span className="text-[.72rem] font-bold text-muted">Más</span>
      </div>
    </div>
  )
}

interface Props {
  size?: number
}

export default function PixelBrowser({ size = 260 }: Props) {
  const cols = 20
  const rows = 16
  const P = size / cols
  const H = size * (rows / cols)

  const B = '#5D4037'
  const BAR = '#8D6E63'
  const BG = '#FAF9F6'
  const DOT1 = '#E2725B'
  const DOT2 = '#FF9E80'
  const DOT3 = '#9575CD'
  const LINE = '#D7CCC8'
  const CTA = '#E2725B'

  const rects: { x: number; y: number; w: number; h: number; fill: string }[] = [
    { x: 0, y: 0, w: cols, h: 1, fill: B },
    { x: 0, y: rows - 1, w: cols, h: 1, fill: B },
    { x: 0, y: 0, w: 1, h: rows, fill: B },
    { x: cols - 1, y: 0, w: 1, h: rows, fill: B },
    { x: 1, y: 1, w: cols - 2, h: 2, fill: BAR },
    { x: 2, y: 1.5, w: 1, h: 1, fill: DOT1 },
    { x: 3.5, y: 1.5, w: 1, h: 1, fill: DOT2 },
    { x: 5, y: 1.5, w: 1, h: 1, fill: DOT3 },
    { x: 1, y: 3, w: cols - 2, h: rows - 4, fill: BG },
    { x: 3, y: 5, w: 9, h: 1, fill: B },
    { x: 3, y: 6.5, w: 6, h: 0.8, fill: LINE },
    { x: 3, y: 8.5, w: 13, h: 0.6, fill: LINE },
    { x: 3, y: 9.7, w: 13, h: 0.6, fill: LINE },
    { x: 3, y: 10.9, w: 9, h: 0.6, fill: LINE },
    { x: 3, y: 12.4, w: 5, h: 1.4, fill: CTA },
  ]

  return (
    <svg
      viewBox={`0 0 ${size} ${H}`}
      width={size}
      height={H}
      className="animate-float"
      style={{ imageRendering: 'pixelated' }}
      role="img"
      aria-label="Mockup de página web en pixel art"
    >
      {rects.map((r, i) => (
        <rect key={i} x={r.x * P} y={r.y * P} width={r.w * P} height={r.h * P} fill={r.fill} />
      ))}
    </svg>
  )
}

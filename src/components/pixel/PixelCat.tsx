interface Props {
  size?: number
}

export default function PixelCat({ size = 40 }: Props) {
  const P = size / 10
  const o = '#E07820', d = '#C06010', e = '#111', w = '#FAF0E0'

  const px: [number, number, string][] = [
    [2,0,o],[3,0,o],[6,0,o],[7,0,o],
    [1,1,o],[2,1,o],[3,1,o],[4,1,o],[5,1,o],[6,1,o],[7,1,o],[8,1,o],
    [1,2,o],[2,2,e],[3,2,o],[4,2,o],[5,2,o],[6,2,o],[7,2,e],[8,2,o],
    [0,3,o],[1,3,w],[2,3,o],[3,3,o],[4,3,o],[5,3,o],[6,3,o],[7,3,w],[8,3,o],[9,3,o],
    [0,4,o],[1,4,o],[2,4,o],[3,4,o],[4,4,o],[5,4,o],[6,4,o],[7,4,o],[8,4,o],[9,4,o],
    [1,5,d],[2,5,d],[7,5,d],[8,5,d],
    [0,6,d],[1,6,o],[2,6,o],[3,6,d],[6,6,d],[7,6,o],[8,6,o],[9,6,d],
    [0,7,d],[9,7,d],
  ]

  return (
    <svg
      viewBox={`0 0 ${10 * P} ${10 * P}`}
      width={size}
      height={size}
      className="animate-catbob"
      style={{ imageRendering: 'pixelated' }}
      aria-hidden="true"
    >
      {px.map(([c, r, col], i) => (
        <rect key={i} x={c * P} y={r * P} width={P} height={P} fill={col} />
      ))}
    </svg>
  )
}

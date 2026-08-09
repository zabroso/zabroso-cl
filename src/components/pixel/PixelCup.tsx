interface Props {
  size?: number
  steam?: boolean
}

export default function PixelCup({ size = 200, steam = true }: Props) {
  const P = size / 20
  const B = '#5D4037', BL = '#8D6E63', C = '#3E2723', CR = '#D7CCC8', S = 'rgba(180,180,180,0.6)'

  const px: [number, number, string][] = [
    ...[3,4,5,6,7,8,9,10,11,12].map(c => [c,6,B] as [number,number,string]),
    ...[3,12].flatMap(c => [[c,7,B],[c,8,B],[c,9,B],[c,10,B],[c,11,B],[c,12,B]] as [number,number,string][]),
    ...[4,5,6,7,8,9,10,11].flatMap(c => [[c,7,BL],[c,8,BL],[c,9,BL],[c,10,BL],[c,11,BL],[c,12,B]] as [number,number,string][]),
    ...[4,5,6,7,8,9,10,11].map(c => [c,7,C] as [number,number,string]),
    ...[4,5,6,7,8,9,10,11].map(c => [c,8,C] as [number,number,string]),
    [6,7,CR],[7,7,CR],[8,8,CR],[5,8,CR],[7,8,CR],
    [13,8,B],[13,9,B],[13,10,B],[14,8,B],[14,10,B],
    ...[4,5,6,7,8,9,10,11].map(c => [c,13,B] as [number,number,string]),
    ...[5,6,7,8,9,10].map(c => [c,14,B] as [number,number,string]),
    ...[2,3,4,5,6,7,8,9,10,11,12,13].map(c => [c,15,B] as [number,number,string]),
    ...[3,4,5,6,7,8,9,10,11,12].map(c => [c,16,BL] as [number,number,string]),
  ]

  const steamCols = [{ x: 5, delay: 0 }, { x: 7, delay: .4 }, { x: 9, delay: .8 }]

  return (
    <svg
      viewBox={`0 0 ${20 * P} ${20 * P}`}
      width={size}
      height={size}
      className="animate-float"
      style={{ imageRendering: 'pixelated' }}
      role="img"
      aria-label="Taza de café humeante en pixel art"
    >
      {steam && steamCols.map(({ x, delay }, i) =>
        [1, 2, 3, 4].map(r => (
          <rect
            key={`s${i}${r}`}
            x={x * P} y={(6 - r) * P}
            width={P} height={P}
            fill={S}
            style={{ animation: `steam 2.2s ease-out ${delay + r * .1}s infinite`, opacity: 0 }}
          />
        ))
      )}
      {px.map(([c, r, col], i) => (
        <rect key={i} x={c * P} y={r * P} width={P} height={P} fill={col} />
      ))}
    </svg>
  )
}

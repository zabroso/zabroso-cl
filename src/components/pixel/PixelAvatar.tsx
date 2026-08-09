interface Props {
  size?: number
  walking?: boolean
}

export default function PixelAvatar({ size = 72, walking = false }: Props) {
  const P = size / 16
  const sk = '#C68642', h = '#1A0800', sh = '#1A237E', ap = '#6D4C41', pt = '#263238', sh2 = '#283593'

  const px: [number, number, string][] = [
    ...[5,6,7,8,9,10].map(c => [c,0,h] as [number,number,string]),
    ...[4,5,10,11].map(c => [c,1,h] as [number,number,string]),
    ...[5,6,7,8,9,10].map(c => [c,1,sk] as [number,number,string]),
    ...[5,6,7,8,9,10].map(c => [c,2,sk] as [number,number,string]),
    ...[5,6,7,8,9,10].map(c => [c,3,sk] as [number,number,string]),
    ...[5,6,7,8,9,10].map(c => [c,4,sk] as [number,number,string]),
    [4,1,h],[4,2,h],[4,3,h],[11,1,h],[11,2,h],[11,3,h],
    [6,2,'#111'],[9,2,'#111'],
    [5,2,'#4A3728'],[7,2,'#4A3728'],[8,2,'#4A3728'],[10,2,'#4A3728'],
    ...[5,6,7,8,9,10].map(c => [c,4,h] as [number,number,string]),
    [5,3,h],[10,3,h],
    ...[4,5,6,7,8,9,10,11].map(c => [c,5,sh] as [number,number,string]),
    ...[4,5,6,7,8,9,10,11].map(c => [c,6,sh2] as [number,number,string]),
    ...[5,6,7,8,9,10].map(c => [c,6,ap] as [number,number,string]),
    ...[5,6,7,8,9,10].map(c => [c,7,ap] as [number,number,string]),
    ...[5,6,7,8,9,10].map(c => [c,8,ap] as [number,number,string]),
    [5,9,pt],[6,9,pt],[9,9,pt],[10,9,pt],
    [5,10,pt],[6,10,pt],[9,10,pt],[10,10,pt],
    [4,11,'#111'],[5,11,'#111'],[6,11,'#111'],
    [9,11,'#111'],[10,11,'#111'],[11,11,'#111'],
    [3,5,sk],[3,6,sk],[12,5,sk],[12,6,sk],
    [3,7,ap],[12,7,ap],
  ]

  return (
    <svg
      viewBox={`0 0 ${16 * P} ${14 * P}`}
      width={size}
      height={Math.round(size * .875)}
      style={walking
        ? { animation: 'walkin 12s linear infinite' }
        : { imageRendering: 'pixelated' }
      }
      role="img"
      aria-label="Avatar pixel art de Pablo Zabroso"
    >
      {px.map(([c, r, col], i) => (
        <rect key={i} x={c * P} y={r * P} width={P} height={P} fill={col} />
      ))}
    </svg>
  )
}

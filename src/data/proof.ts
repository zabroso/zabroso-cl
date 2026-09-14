// TODO(pablo): DATOS DE RELLENO — reemplazar con cifras reales antes de publicar.
// Estos valores son placeholders solicitados para maquetar la sección.
export const proofStats = {
  /** TODO(pablo): reemplazar con la cifra real de sitios entregados. */
  sitiosEntregados: 12,
  /** Confirmado por Pablo: una página puede estar lista desde una semana si el cliente tiene el contenido claro. */
  entregaTipicaDias: 7,
  /** Este valor SÍ es real: la garantía de 6 meses está confirmada en el FAQ. */
  garantiaMeses: 6,
}

export interface CasoEstudio {
  tag: string
  name: string
  desc: string
  label: string
  bg: [string, string]
  /** true solo para el caso de ejemplo — nunca marcar así un cliente real. */
  placeholder?: boolean
}

export const casos: CasoEstudio[] = [
  {
    tag: 'Contenidos · Astro',
    name: 'Red de Contenidos',
    desc: 'Ecosistema de sitios de contenido construidos con Astro: digitalismo.cl, edukaizen.cl, megaradios.cl. SEO técnico de alto rendimiento y carga instantánea.',
    label: 'web · contenido · SEO',
    bg: ['#DDE8DD', '#C9D9C9'],
  },
  // TODO(pablo): reemplazar este caso de ejemplo por un cliente real antes de publicar.
  {
    tag: 'Ejemplo · Landing',
    name: 'Proyecto de ejemplo',
    desc: 'Espacio reservado para el próximo caso real. Aquí va el nombre del proyecto, la tecnología usada y un resumen del resultado obtenido.',
    label: 'placeholder',
    bg: ['#E8DDE0', '#D9C9CF'],
    placeholder: true,
  },
]

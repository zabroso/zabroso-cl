// Datos de prueba social. Mantener sincronizados con `casos` (sitiosEntregados = casos.length).
export const proofStats = {
  /** Cantidad de sitios publicados listados en `casos`. Actualizar al agregar casos. */
  sitiosEntregados: 7,
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

// Clientes verificados en línea el 2026-09-14. Pendientes de confirmar (ver README): verecao sign,
// Dra. Daniela Bustos, Auto Clínica Vía Sana, De la Puerta Abogados.
export const casos: CasoEstudio[] = [
  {
    tag: 'Arquitectura · Astro',
    name: 'TRAZOS Arquitectura',
    desc: 'Sitio corporativo para una oficina de diseño y construcción integral: portafolio de obras, servicios y contacto. trazosarquitectura.cl',
    label: 'web · portafolio',
    bg: ['#DDE8DD', '#C9D9C9'],
  },
  {
    tag: 'SaaS · Astro',
    name: 'Pulsi',
    desc: 'Landing de producto para una plataforma de clima organizacional: propuesta de valor, funcionalidades y captura de demos. pulsi.cl',
    label: 'landing · producto',
    bg: ['#E0E4EC', '#CDD3DF'],
  },
  {
    tag: 'Deporte · Sitio estático',
    name: 'Dojo Samurai JKA Chile',
    desc: 'Sitio institucional de una escuela de karate: horarios, sedes, instructores e inscripción. dojosamurai.cl',
    label: 'web · institucional',
    bg: ['#ECE0E0', '#DFCDCD'],
  },
  {
    tag: 'Salud · React',
    name: 'Vía Sana',
    desc: 'Página de servicios para un centro de salud: prestaciones, equipo y canales de contacto. viasana.cl',
    label: 'web · servicios',
    bg: ['#E0ECE8', '#CDDFD8'],
  },
  {
    tag: 'Consultoría · Astro',
    name: 'Digitalismo',
    desc: 'Sitio de contenidos sobre transformación digital con sentido humano: artículos, servicios y captura de contacto. digitalismo.cl',
    label: 'web · contenido',
    bg: ['#ECE8E0', '#DFD8CD'],
  },
  {
    tag: 'Educación · Contenidos',
    name: 'Edukaizen',
    desc: 'Sitio de contenidos educativos con enfoque en mejora continua. edukaizen.cl',
    label: 'web · contenido',
    bg: ['#E8E0EC', '#D8CDDF'],
  },
  {
    tag: 'Radiocomunicaciones · WordPress',
    name: 'Megaradios',
    desc: 'Sitio comercial de una empresa de radiocomunicaciones: catálogo de equipos, servicios y contacto. megaradios.cl',
    label: 'web · comercial',
    bg: ['#E8E4DC', '#DBD5C9'],
  },
]

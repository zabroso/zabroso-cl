import type { VercelRequest, VercelResponse } from '@vercel/node'

const RESEND_FROM = 'noreply@zabroso.cl'
const RESEND_TO = 'pjmarambioc@gmail.com'
const CONTACTO_PUBLICO = 'pablo@zabroso.cl'
const WHATSAPP_URL = 'https://wa.me/56949360955?text=Hola%2C%20quiero%20cotizar'

type Origen = 'main' | 'ecommerce'

const ETIQUETAS_ORIGEN: Record<Origen, string> = {
  main: 'Sitio principal',
  ecommerce: 'Tienda online',
}

const ASUNTO_ORIGEN: Record<Origen, string> = {
  main: 'tu página web',
  ecommerce: 'tu tienda online',
}

/** Campos que puede traer cualquiera de los dos formularios; se muestran solo los presentes. */
const CAMPOS: { key: string; label: string }[] = [
  { key: 'nombre', label: 'Nombre' },
  { key: 'email', label: 'Email' },
  { key: 'telefono', label: 'Teléfono' },
  { key: 'servicio', label: 'Servicio' },
  { key: 'negocio', label: 'Qué vende' },
  { key: 'pago', label: 'Forma de pago' },
  { key: 'mensaje', label: 'Mensaje' },
]

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
// Celular chileno: empieza en 9 y tiene 8 dígitos más, con espacios opcionales (ej: "9 1234 5678").
const TELEFONO_RE = /^9\s?\d{4}\s?\d{4}$/

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function emailConfirmacionCliente(nombre: string, origen: Origen): string {
  const primerNombre = escapeHtml(nombre.split(' ')[0] ?? nombre)
  return `
<div style="background:#FAF9F6;padding:32px 16px;font-family:Georgia,'Times New Roman',serif;">
  <table role="presentation" width="100%" style="max-width:480px;margin:0 auto;background:#FFFFFF;border:2px solid #5D4037;">
    <tr>
      <td style="background:#5D4037;padding:20px 28px;">
        <span style="color:#FAF9F6;font-size:1.05rem;font-weight:bold;letter-spacing:.04em;">zabroso.cl</span>
      </td>
    </tr>
    <tr>
      <td style="padding:28px;">
        <p style="margin:0 0 16px;color:#2C1810;font-size:1.05rem;">¡Hola, ${primerNombre}!</p>
        <p style="margin:0 0 16px;color:#2C1810;font-size:.95rem;line-height:1.7;">
          Recibí tu mensaje sobre <strong>${ASUNTO_ORIGEN[origen]}</strong> — gracias por escribirme.
        </p>
        <p style="margin:0 0 16px;color:#2C1810;font-size:.95rem;line-height:1.7;">
          Voy a revisar los detalles con calma y te voy a contactar personalmente
          (yo, Pablo Marambio, no un bot) dentro de las próximas <strong>24 a 48 horas hábiles</strong>
          a este mismo correo. Si prefieres una respuesta más rápida, también puedes escribirme
          directo por WhatsApp.
        </p>
        <table role="presentation" style="margin:8px 0 20px;">
          <tr>
            <td style="background:#E2725B;padding:10px 20px;">
              <a href="${WHATSAPP_URL}" style="color:#FFFFFF;text-decoration:none;font-size:.85rem;font-weight:bold;">
                Escríbeme por WhatsApp →
              </a>
            </td>
          </tr>
        </table>
        <p style="margin:0;color:#8B7355;font-size:.85rem;line-height:1.6;">
          Un saludo,<br>
          <strong style="color:#2C1810;">Pablo Marambio</strong><br>
          Zabroso.cl · ${CONTACTO_PUBLICO}
        </p>
      </td>
    </tr>
  </table>
</div>
`
}

async function enviarEmail(apiKey: string, datos: { to: string; replyTo?: string; subject: string; html: string }) {
  const respuesta = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      from: `Zabroso.cl <${RESEND_FROM}>`,
      to: datos.to,
      reply_to: datos.replyTo,
      subject: datos.subject,
      html: datos.html,
    }),
  })

  if (!respuesta.ok) {
    const detalle = await respuesta.text()
    throw new Error(`Resend respondió ${respuesta.status}: ${detalle}`)
  }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Método no permitido' })
    return
  }

  const body = (req.body ?? {}) as Record<string, unknown>

  // Honeypot: si el bot llenó este campo oculto, respondemos éxito sin hacer nada.
  if (typeof body.empresa_web === 'string' && body.empresa_web.trim() !== '') {
    res.status(200).json({ ok: true })
    return
  }

  const origen = body.origen === 'ecommerce' ? 'ecommerce' : body.origen === 'main' ? 'main' : null
  const nombre = typeof body.nombre === 'string' ? body.nombre.trim() : ''
  const email = typeof body.email === 'string' ? body.email.trim() : ''
  const telefono = typeof body.telefono === 'string' ? body.telefono.trim() : ''
  // El checkbox de FormData llega como 'on' cuando está marcado, o ausente si no.
  const consentimiento = body.consentimiento === 'on' || body.consentimiento === true

  if (!origen || !nombre || !email || !EMAIL_RE.test(email) || !TELEFONO_RE.test(telefono) || !consentimiento) {
    res.status(400).json({ error: 'Datos del formulario incompletos, inválidos o sin consentimiento' })
    return
  }

  // El campo solo captura el número local; se le antepone +56 para mostrarlo completo.
  body.telefono = `+56 ${telefono}`

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error('RESEND_API_KEY no está configurada')
    res.status(500).json({ error: 'Formulario no configurado' })
    return
  }

  const filas = CAMPOS.filter(({ key }) => typeof body[key] === 'string' && (body[key] as string).trim() !== '')
    .map(({ key, label }) => `<tr><td style="padding:4px 12px 4px 0;font-weight:bold;">${label}</td><td style="padding:4px 0;">${escapeHtml((body[key] as string).trim())}</td></tr>`)
    .join('\n')

  try {
    await enviarEmail(apiKey, {
      to: RESEND_TO,
      replyTo: email,
      subject: `Nuevo lead — ${ETIQUETAS_ORIGEN[origen]} — ${nombre}`,
      html: `<table>${filas}</table>`,
    })
  } catch (error) {
    console.error('Error al notificar el lead por Resend', error)
    res.status(502).json({ error: 'No se pudo enviar el correo' })
    return
  }

  // Confirmación al cliente: best-effort, no debe romper la respuesta si Resend falla acá.
  try {
    await enviarEmail(apiKey, {
      to: email,
      replyTo: RESEND_TO,
      subject: 'Recibí tu mensaje — te contacto pronto',
      html: emailConfirmacionCliente(nombre, origen),
    })
  } catch (error) {
    console.error('Error al enviar confirmación al cliente', error)
  }

  res.status(200).json({ ok: true })
}

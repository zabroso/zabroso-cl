import type { VercelRequest, VercelResponse } from '@vercel/node'

const RESEND_FROM = 'noreply@zabroso.cl'
const RESEND_TO = 'pjmarambioc@gmail.com'

type Origen = 'main' | 'ecommerce'

const ETIQUETAS_ORIGEN: Record<Origen, string> = {
  main: 'Sitio principal',
  ecommerce: 'Tienda online',
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

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
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
  // El checkbox de FormData llega como 'on' cuando está marcado, o ausente si no.
  const consentimiento = body.consentimiento === 'on' || body.consentimiento === true

  if (!origen || !nombre || !email || !EMAIL_RE.test(email) || !consentimiento) {
    res.status(400).json({ error: 'Datos del formulario incompletos, inválidos o sin consentimiento' })
    return
  }

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
      subject: 'Recibí tu mensaje — Zabroso.cl',
      html: `
        <p>Hola ${escapeHtml(nombre)},</p>
        <p>Recibí tu mensaje y pronto me voy a comunicar contigo para conversar sobre tu proyecto.</p>
        <p>Saludos,<br>Pablo</p>
      `,
    })
  } catch (error) {
    console.error('Error al enviar confirmación al cliente', error)
  }

  res.status(200).json({ ok: true })
}

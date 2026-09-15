import '../index.css'
import { useReveal } from '../hooks/useReveal'
import LegalPage from '../components/LegalPage'

const UPDATED = '14 de septiembre de 2026'
const UPDATED_ISO = '2026-09-14'

export default function App() {
  useReveal()

  return (
    <LegalPage
      eyebrow="Legal"
      title="Política de privacidad"
      updated={UPDATED}
      updatedIso={UPDATED_ISO}
      intro="Qué datos recojo cuando me escribes, para qué los uso y cómo puedes pedir que los corrija o elimine. En lenguaje claro, sin letra chica."
    >
      <p>
        Esta política describe cómo se tratan los datos personales que entregas a través del sitio{' '}
        <strong>zabroso.cl</strong> y sus canales de contacto. Aplica a las páginas{' '}
        <a href="/">zabroso.cl</a>, <a href="/ecommerce/">zabroso.cl/ecommerce</a>,{' '}
        <a href="/contacto/">zabroso.cl/contacto</a> y a las conversaciones que se inicien por WhatsApp o correo a partir del sitio.
      </p>

      <h2>1. Responsable del tratamiento</h2>
      <p>
        El responsable de los datos es <strong>Pablo Zabroso</strong>, desarrollador web, con domicilio en Valparaíso, Chile.
        Para cualquier consulta sobre esta política o sobre tus datos puedes escribir a{' '}
        <a href="mailto:pablo@zabroso.cl">pablo@zabroso.cl</a> o al WhatsApp <a href="tel:+56949360955">+56 9 4936 0955</a>.
      </p>

      <h2>2. Qué datos se recogen</h2>
      <h3>2.1 Formulario de cotización de páginas web (zabroso.cl y zabroso.cl/contacto)</h3>
      <ul>
        <li><strong>Nombre</strong> (obligatorio).</li>
        <li><strong>Email</strong> (obligatorio).</li>
        <li><strong>Teléfono</strong> (opcional).</li>
        <li><strong>Servicio de interés</strong>: el plan o servicio que eliges en el selector (obligatorio).</li>
        <li><strong>Mensaje</strong>: la descripción libre de tu proyecto (opcional).</li>
      </ul>
      <h3>2.2 Formulario de cotización de tiendas online (zabroso.cl/ecommerce)</h3>
      <ul>
        <li><strong>Nombre</strong> (obligatorio).</li>
        <li><strong>Email</strong> (obligatorio).</li>
        <li><strong>Teléfono</strong> (opcional).</li>
        <li><strong>Qué vendes</strong>: rubro o tipo de productos (opcional).</li>
        <li><strong>Forma de pago preferida</strong> (obligatorio).</li>
        <li><strong>Mensaje</strong>: la descripción libre de tu proyecto (opcional).</li>
      </ul>
      <h3>2.3 WhatsApp, teléfono y correo</h3>
      <p>
        Si me escribes por WhatsApp, me llamas o me envías un correo, recibo tu número o dirección de correo, tu nombre
        tal como aparece en tu perfil y el contenido de la conversación. WhatsApp es un servicio de Meta Platforms y se
        rige además por sus propias condiciones y política de privacidad.
      </p>
      <p>
        No recojo datos sensibles (salud, origen étnico, creencias, etc.). Te pido que no los incluyas en los mensajes.
      </p>

      <h2>3. Para qué se usan</h2>
      <ul>
        <li><strong>Responder tu cotización</strong> y coordinar el proyecto si decides contratar.</li>
        <li><strong>Emitir la boleta de honorarios</strong> a nombre de quien paga, cuando corresponda.</li>
        <li><strong>Prestar el servicio</strong>: coordinar cuentas, dominio, entregas y garantía.</li>
      </ul>
      <p>
        No uso tus datos para enviarte publicidad ni boletines. Solo te escribo a propósito de la conversación que tú
        iniciaste o del proyecto que contrataste.
      </p>

      <h2>4. Cómo se procesan y quién los recibe</h2>
      <p>
        Los formularios del sitio son procesados por una función del servidor alojada en{' '}
        <strong>Vercel Inc.</strong> (Estados Unidos), que envía los datos mediante{' '}
        <strong>Resend</strong> (Estados Unidos) a mi correo electrónico (Gmail, de Google LLC, Estados Unidos), y
        también te envía a ti una confirmación automática de recepción.
        Esto implica una transferencia internacional de datos a proveedores que actúan como encargados del
        tratamiento, bajo sus propias garantías contractuales y de seguridad.
      </p>
      <p>
        Además, según el canal, tus datos pueden pasar por:
      </p>
      <ul>
        <li><strong>Gmail</strong> (Google LLC), el correo desde el que respondo.</li>
        <li><strong>WhatsApp</strong> (Meta Platforms), si la conversación es por ese medio.</li>
        <li><strong>Vercel Inc.</strong>, que aloja el sitio y registra datos técnicos de la conexión (ver sección 7).</li>
      </ul>
      <p>
        <strong>No vendo, arriendo ni cedo tus datos a terceros</strong> con fines comerciales. Solo se comparten con
        los proveedores técnicos necesarios para responderte y prestar el servicio, o cuando lo exija la ley.
      </p>

      <h2>5. Cuánto tiempo se conservan</h2>
      <p>
        Si no llegamos a trabajar juntos, conservo tu cotización hasta <strong>30 días</strong> después de emitida
        y luego la elimino. Si contratas un servicio, conservo los datos mientras dure la relación comercial
        y, después, el tiempo necesario para cumplir la garantía de 6 meses y las obligaciones tributarias asociadas a
        la boleta de honorarios. Puedes pedir la eliminación antes de esos plazos (ver sección 6).
      </p>

      <h2>6. Tus derechos</h2>
      <p>
        El tratamiento de datos personales en Chile se rige por la <strong>Ley 19.628</strong> sobre protección de la
        vida privada y por la <strong>Ley 21.719</strong>, que la reemplaza y crea la Agencia de Protección de Datos
        Personales, en vigor a contar de diciembre de 2026. Bajo estas normas puedes ejercer, entre otros, los
        siguientes derechos:
      </p>
      <ul>
        <li><strong>Acceso</strong>: saber qué datos tuyos tengo y cómo los uso.</li>
        <li><strong>Rectificación</strong>: corregir datos inexactos o incompletos.</li>
        <li><strong>Supresión</strong>: pedir que elimine tus datos cuando ya no sean necesarios para el fin con que se recogieron.</li>
        <li><strong>Oposición</strong>: oponerte a un tratamiento específico.</li>
        <li><strong>Portabilidad</strong>: recibir tus datos en un formato estructurado y de uso común.</li>
        <li><strong>Bloqueo</strong>: suspender temporalmente el tratamiento mientras se resuelve una solicitud.</li>
      </ul>
      <p>
        Para ejercerlos, escribe a <a href="mailto:pablo@zabroso.cl">pablo@zabroso.cl</a> indicando qué derecho quieres
        ejercer y desde qué correo o teléfono me contactaste, para poder identificarte. Respondo dentro de los plazos
        que fija la ley. Si consideras que tu solicitud no fue atendida, puedes recurrir a la Agencia de Protección de
        Datos Personales una vez que esté operativa, o a los tribunales competentes.
      </p>

      <h2>7. Cookies y tecnologías similares</h2>
      <p>
        <strong>zabroso.cl no instala cookies propias</strong> ni herramientas de analítica, publicidad o seguimiento
        (no hay Google Analytics, píxeles de redes sociales ni similares en este sitio). Por eso no verás un banner de
        cookies.
      </p>
      <p>
        Sí existen dos elementos técnicos ajenos que conviene que conozcas:
      </p>
      <ul>
        <li>
          <strong>Hosting y red</strong>: el sitio se publica en Vercel (Vercel Inc.) y se sirve a través de la red de
          Cloudflare (Cloudflare Inc.). Ambos pueden usar cookies estrictamente técnicas de seguridad y registrar datos
          de conexión (dirección IP, navegador, fecha) para operar y proteger el servicio.
        </li>
        <li>
          <strong>Tipografías</strong>: las fuentes del sitio se cargan desde Google Fonts, por lo que tu navegador
          hace una solicitud a servidores de Google al abrir la página, con los datos técnicos habituales de cualquier
          petición web.
        </li>
      </ul>
      <p>
        Si en el futuro se incorpora alguna herramienta de medición, esta política se actualizará antes de activarla.
      </p>

      <h2>8. Seguridad</h2>
      <p>
        El sitio se sirve exclusivamente por HTTPS. Los formularios incluyen protección básica contra envíos automatizados.
        Los proveedores mencionados (Vercel, Cloudflare, Resend, WhatsApp, correo) aplican sus propias medidas de seguridad.
        Aun así, ninguna transmisión por internet es completamente segura: si necesitas enviarme información
        especialmente delicada, coordinemos antes un canal adecuado.
      </p>

      <h2>9. Menores de edad</h2>
      <p>
        Los servicios de zabroso.cl están dirigidos a personas mayores de 18 años y a empresas. No recojo
        intencionalmente datos de menores; si detecto que ocurrió, los elimino.
      </p>

      <h2>10. Cambios a esta política</h2>
      <p>
        Puedo actualizar esta política cuando cambie la forma en que trabajo o la normativa aplicable. La fecha de la
        última actualización aparece al inicio de esta página. Si el cambio es relevante para una relación vigente, te
        lo comunicaré directamente.
      </p>

      <h2>11. Contacto</h2>
      <p>
        Para cualquier duda o solicitud relacionada con tus datos personales:
      </p>
      <ul>
        <li>Email: <a href="mailto:pablo@zabroso.cl">pablo@zabroso.cl</a></li>
        <li>WhatsApp: <a href="tel:+56949360955">+56 9 4936 0955</a></li>
        <li>Valparaíso, Chile</li>
      </ul>
      <p>
        Ver también los <a href="/terminos/">Términos y condiciones del servicio</a>.
      </p>
    </LegalPage>
  )
}

import '../index.css'
import { useReveal } from '../hooks/useReveal'
import LegalPage from '../components/LegalPage'

const UPDATED = '11 de septiembre de 2026'
const UPDATED_ISO = '2026-09-11'

export default function App() {
  useReveal()

  return (
    <LegalPage
      eyebrow="Legal"
      title="Términos y condiciones"
      updated={UPDATED}
      updatedIso={UPDATED_ISO}
      intro="Las reglas del servicio de desarrollo de páginas web y tiendas online de zabroso.cl: qué incluye cada plan, cómo se paga, de quién es el código y qué cubre la garantía."
    >
      <p>
        Estos términos regulan la contratación de los servicios que ofrece <strong>Pablo Zabroso</strong>, desarrollador
        web, Valparaíso, Chile (en adelante, «zabroso.cl» o «yo»), a través de <a href="/">zabroso.cl</a> y{' '}
        <a href="/ecommerce/">zabroso.cl/ecommerce</a>. Al pagar el anticipo de un proyecto aceptas estas condiciones.
        Si algo no te calza, conversémoslo antes de partir: prefiero un acuerdo claro a una letra chica.
      </p>

      <h2>1. Alcance del servicio</h2>
      <p>
        El servicio consiste en el diseño y desarrollo de <strong>páginas web a medida</strong>, escritas en código propio
        (React), sin plantillas ni builders, y en el desarrollo de <strong>tiendas online sobre Shopify</strong>. No incluye
        software a medida, SaaS, automatizaciones ni proyectos de inteligencia artificial: esos proyectos se atienden
        por separado en <a href="https://cuzmar.cl" target="_blank" rel="noopener noreferrer">cuzmar.cl</a>.
      </p>

      <h2>2. Planes de páginas web y qué incluye cada uno</h2>
      <p>Los precios están expresados en pesos chilenos (CLP) y corresponden a una página.</p>
      <table>
        <thead>
          <tr>
            <th>Plan</th>
            <th>Precio</th>
            <th>Alcance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Básico</td>
            <td>$150.000</td>
            <td>
              Landing de una sola sección: diseño único a medida, mensaje central y llamado a la acción, diseño responsive
              (móvil, tablet y escritorio), botón a WhatsApp, enlace o formulario, optimización de velocidad básica y SEO on-page básico.
            </td>
          </tr>
          <tr>
            <td>Regular</td>
            <td>$250.000</td>
            <td>
              Landing completa de conversión, multisección: diseño único a medida, diseño responsive, estructura de conversión
              completa, formularios y botones conectados a sus destinos, optimización de velocidad de carga y SEO on-page.
            </td>
          </tr>
          <tr>
            <td>Avanzado</td>
            <td>$420.000</td>
            <td>
              Todo lo del plan Regular, más diseño multisección elaborado, estructura de conversión extendida, animaciones e
              interacciones personalizadas y optimización de velocidad avanzada.
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        <strong>Incluido en todos los planes:</strong> gestión y configuración del dominio, publicación en Cloudflare
        Pages, certificado SSL (https), Google Analytics configurado, puesta en producción y verificación de
        funcionamiento, accesos entregados a nombre del cliente, acompañamiento técnico durante la implementación,
        3 rondas de revisión y garantía de 6 meses sobre defectos de construcción.
      </p>
      <p>
        <strong>No incluido</strong> (se cotiza aparte): la compra, renovación o transferencia del dominio; la redacción
        de textos y la producción de imágenes cuando el cliente no los tiene; rondas de revisión adicionales; nuevas
        secciones o funcionalidades fuera del plan elegido; y la mantención mensual.
      </p>
      <p>
        Los proyectos de 2 o más páginas se cotizan a medida y pueden tener descuento por pack, a criterio, según la
        cantidad de páginas y el contexto.
      </p>

      <h2>3. Proceso y plazos</h2>
      <p>Un proyecto de página web sigue seis pasos:</p>
      <ul>
        <li><strong>Cotización y elección de plan.</strong></li>
        <li><strong>Anticipo y arranque.</strong> El trabajo comienza al recibir el anticipo.</li>
        <li><strong>Entrega de contenido.</strong> El cliente envía textos, imágenes y logo.</li>
        <li><strong>Diseño y desarrollo.</strong> Se construye la página y se comparte un prototipo.</li>
        <li><strong>Revisiones.</strong> Se ajusta con las rondas de revisión incluidas.</li>
        <li><strong>Publicación.</strong> Se configura el dominio, se sube a producción y se entregan los accesos.</li>
      </ul>
      <p>
        {/* TODO(pablo): confirmar plazo de entrega por plan (el sitio solo dice "lista en semanas") */}
        El plazo estimado se indica en la cotización de cada proyecto y se cuenta desde que se recibe el anticipo
        <strong> y</strong> el contenido completo. Los plazos dependen de la entrega oportuna de contenido y de la
        respuesta a cada ronda de revisión por parte del cliente; los atrasos en esos puntos extienden el plazo en la
        misma proporción.
      </p>

      <h2>4. Pagos</h2>
      <ul>
        <li>
          <strong>Dos modalidades:</strong> 50 % al arrancar y 50 % a la entrega; o 50 % de anticipo y el saldo
          distribuido a medida que se entrega y aprueba cada página.
        </li>
        <li>El trabajo comienza al recibir el anticipo.</li>
        <li>Si hay un atraso en un pago, el trabajo se pausa hasta regularizarlo.</li>
        <li>Se emite <strong>boleta de honorarios</strong> a nombre de quien paga.</li>
        <li>
          {/* TODO(pablo): confirmar medios de pago aceptados (transferencia, otros) */}
          El medio de pago se acuerda en la cotización.
        </li>
      </ul>

      <h2>5. Revisiones</h2>
      <p>
        Cada plan incluye <strong>3 rondas de revisión</strong>. Una ronda es un conjunto de ajustes enviados en una
        sola comunicación sobre el prototipo o la página en construcción. Las rondas adicionales tienen un costo de{' '}
        <strong>$20.000</strong> cada una. Los cambios que modifican el alcance del plan (nuevas secciones, nuevas
        funcionalidades, rediseño completo) no son revisiones y se cotizan aparte.
      </p>

      <h2>6. Contenido del cliente</h2>
      <p>
        El cliente entrega los textos, imágenes, logo y demás material de la página, y garantiza que tiene derecho a
        usarlos. zabroso.cl no se hace responsable por reclamos de terceros derivados de contenido aportado por el
        cliente. Si el cliente no tiene los textos o imágenes listos, puedo investigarlos y crearlos por un valor a
        cotizar según el alcance.
      </p>

      <h2>7. Propiedad del código y de las cuentas</h2>
      <ul>
        <li>
          <strong>El código es del cliente.</strong> Una vez pagado el proyecto completo, el cliente es dueño del código
          fuente de su página y puede modificarlo, moverlo o encargárselo a otro desarrollador cuando quiera.
        </li>
        <li>
          <strong>Las cuentas quedan a nombre del cliente, nunca al mío.</strong> En GitHub se crea una organización
          para el proyecto donde el cliente es dueño y yo participo como colaborador. En Cloudflare la cuenta la crea el
          cliente y me invita como colaborador. Lo mismo aplica a NIC.cl u otro registrador si el cliente compra el
          dominio directamente.
        </li>
        <li>
          Mientras el proyecto esté en curso, conservo acceso de colaborador para trabajar. Al terminar, el cliente
          puede mantenerlo o revocarlo libremente.
        </li>
        <li>
          Puedo mencionar el proyecto como parte de mi portafolio (nombre y enlace público) salvo que el cliente pida lo
          contrario por escrito.
        </li>
      </ul>

      <h2>8. Dominio, hosting y costos recurrentes</h2>
      <ul>
        <li>
          <strong>Dominio:</strong> gestiono todo el trámite, pero la compra, la renovación anual (≈ $12.000 al año para
          un .cl) y una eventual transferencia <strong>las paga el cliente</strong>; nunca están incluidas en el plan. Hay
          dos caminos: el cliente crea su cuenta en NIC.cl y me da acceso para comprar y configurar ahí, o lo compro yo
          primero y después se traspasa a nombre del cliente.
        </li>
        <li>
          <strong>Hosting:</strong> la página se aloja en Cloudflare Pages, que es gratuito. No es un costo que yo pague
          ni que cobre, y sigue siendo gratis después del primer año.
        </li>
        <li>
          <strong>SSL:</strong> el certificado va incluido con el hosting, sin costo.
        </li>
      </ul>

      <h2>9. Garantía de 6 meses</h2>
      <p>
        Todos los planes incluyen una garantía de <strong>6 meses desde la publicación</strong> sobre{' '}
        <strong>defectos de construcción</strong>: algo que se rompe o deja de funcionar por cómo fue construida la
        página (por ejemplo, un formulario que deja de enviar, un enlace interno roto, un elemento que se ve mal en un
        dispositivo contemplado en el plan). Estos defectos se corrigen sin costo.
      </p>
      <p>La garantía <strong>no cubre</strong>:</p>
      <ul>
        <li>Cambios de contenido (textos, imágenes, precios) ni nuevos requerimientos o secciones.</li>
        <li>Cambios de alcance o de diseño posteriores a la aprobación.</li>
        <li>Fallas causadas por modificaciones hechas por el cliente o por terceros sobre el código o las cuentas.</li>
        <li>Fallas de servicios externos (Cloudflare, registrador del dominio, proveedores de formularios, Shopify).</li>
        <li>Vencimiento o falta de pago del dominio.</li>
      </ul>
      <p>
        La garantía no se agota con el uso: sigue vigente durante todo el período, sin límite de correcciones por
        defectos.
      </p>

      <h2>10. Mantención mensual (opcional)</h2>
      <p>
        Por <strong>$30.000 al mes</strong> el cliente dispone de <strong>3 tickets de cambios</strong> y hasta{' '}
        <strong>10 horas totales</strong> de trabajo mensual para cambios de textos e imágenes y correcciones menores.
        {/* TODO(pablo): confirmar si tickets/horas no usados se acumulan al mes siguiente */}
        Si no se contrata, ante una necesidad puntual primero conversamos: lo simple se resuelve sin costo, lo más
        complejo se cotiza antes de hacerlo.
      </p>

      <h2>11. Tiendas online (Shopify)</h2>
      <p>
        El desarrollo de tiendas online es un servicio aparte, con su propio precio y forma de pago:
      </p>
      <ul>
        <li>
          <strong>Mensual:</strong> $92.500 al mes durante 12 meses. Incluye la mantención del primer año (cambios de
          productos, textos y ajustes menores).
        </li>
        <li>
          <strong>Pago único:</strong> $750.000. No incluye mantención; los cambios posteriores se cotizan aparte o se
          puede agregar mantención después.
        </li>
        <li>
          <strong>Costos que asume el negocio directamente con Shopify</strong>, no conmigo: la suscripción mensual de la
          plataforma y las comisiones por cada pago recibido. No las cobro ni las incluyo en el precio.
        </li>
        <li>
          <strong>Dominio:</strong> ayudo a elegirlo y configurarlo; el costo lo paga el negocio.
        </li>
        <li>
          El plazo de entrega depende de la cantidad de productos y de la rapidez con que el negocio entregue fotos,
          descripciones y precios; se estima en la cotización.
        </li>
        <li>
          {/* TODO(pablo): confirmar qué pasa si el cliente deja de pagar la cuota mensual antes de los 12 meses */}
          En la modalidad mensual, el atraso en una cuota pausa la mantención hasta regularizar el pago.
        </li>
      </ul>

      <h2>12. Cancelación</h2>
      <p>
        {/* TODO(pablo): confirmar política de cancelación y reembolso del anticipo */}
        El cliente puede cancelar el proyecto en cualquier momento avisando por escrito. El anticipo cubre el trabajo
        ya realizado hasta ese momento y no se reembolsa; si el trabajo avanzado supera el anticipo, se cotiza la
        diferencia y se entrega lo construido hasta la fecha. Si soy yo quien no puede continuar con el proyecto,
        devuelvo la parte del anticipo que corresponda al trabajo no realizado.
      </p>
      <p>
        Si el cliente deja de responder durante más de <strong>30 días</strong> sin aviso, el proyecto se considera
        pausado; retomarlo puede requerir reprogramar el plazo de entrega.
      </p>

      <h2>13. Responsabilidad</h2>
      <p>
        Me comprometo a construir la página conforme al plan contratado y a corregir los defectos de construcción
        cubiertos por la garantía. No garantizo resultados comerciales (ventas, posicionamiento en buscadores,
        cantidad de visitas), que dependen de factores fuera del desarrollo. Mi responsabilidad máxima por cualquier
        reclamo se limita al monto pagado por el proyecto.
      </p>

      <h2>14. Datos personales</h2>
      <p>
        El tratamiento de los datos que entregas al cotizar o contratar se describe en la{' '}
        <a href="/privacidad/">Política de privacidad</a>.
      </p>

      <h2>15. Legislación y cambios</h2>
      <p>
        Estos términos se rigen por las leyes de la República de Chile. Puedo actualizarlos; la versión vigente es la
        publicada en esta página con su fecha de última actualización. Los proyectos en curso se rigen por la versión
        vigente al momento de pagar el anticipo.
      </p>

      <h2>16. Contacto</h2>
      <ul>
        <li>Email: <a href="mailto:pablo@zabroso.cl">pablo@zabroso.cl</a></li>
        <li>WhatsApp: <a href="tel:+56949360955">+56 9 4936 0955</a></li>
        <li>Valparaíso, Chile</li>
      </ul>
    </LegalPage>
  )
}

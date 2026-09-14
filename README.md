# zabroso-cl

## Pendientes

- [ ] **Quitar la integración con Zapier de los formularios de cotización** (`/` y `/ecommerce/`, `src/components/Contacto.tsx` y `src/ecommerce/components/Contacto.tsx`). Zapier es pago y su plan Free limitó demasiado el armado del embudo (tope de 2 pasos por Zap, sin acceso a Code Workflows/Early Access, problemas de CORS con el Catch Hook). No sirvió para este caso de uso.
- [ ] **Buscar otra herramienta para capturar y guardar los leads de ambos formularios** en reemplazo de Zapier (ej: backend propio, Formspree, Google Forms, Supabase, un endpoint serverless simple, etc.). Debe guardar los datos del lead (nombre, email, teléfono, servicio, mensaje) y notificar a Pablo.
- [ ] **Mejorar el diseño de `/ecommerce/`.** Quedó como prototipo inicial (reutiliza el sistema visual del sitio principal sin trabajarlo a fondo) — hay que subirle el nivel de diseño, sobre todo considerando que el servicio que se vende incluye diseño.
- [ ] **Auditoría SEO** con la skill [`claude-seo-ai`](https://github.com/Hainrixz/claude-seo-ai). Dejar para el final, cuando el resto de los pendientes esté resuelto y el sitio ya no vaya a cambiar de estructura.
- [ ] **Etiquetar y mejorar las tarjetas de la sección "Trabajos"** (`src/components/Trabajos.tsx`). Pablo tiene varios proyectos reales ya construidos — agregar más casos y etiquetar cada uno con el plan al que corresponde (Básico / Regular / Avanzado) para que el visitante entienda qué obtiene con cada plan. También revisar y reescribir el texto de cada tarjeta para que sea más explícito y diferenciado entre sí (hoy están poco desarrollados).
  Clientes/proyectos reales para agregar (lista dictada por Pablo el 2026-09-14; ✅ = dominio verificado en línea, ❓ = no se encontró el dominio, confirmar escritura exacta):
  - ✅ `megaradios.cl` — Megaradios, radiocomunicaciones (WordPress; hoy figura en "Red de Contenidos" como Astro — revisar)
  - ✅ `edukaizen.cl` — Edukaizen (redirige a `/page`)
  - ✅ `digitalismo.cl` — Digitalismo (Astro)
  - ✅ `pulsi.cl` — Pulsi, clima organizacional (Astro)
  - ✅ `dojosamurai.cl` — Dojo Samurai JKA Chile
  - ✅ `viasana.cl` — Vía Sana (Vite/React; el `<title>` es genérico, corregir)
  - ✅ `trazosarquitectura.cl` — TRAZOS Arquitectura (Astro)
  - ❓ "verecao sign .cl"
  - ❓ "doctora Daniela Bustos" (.com / .cl) — `dradanielabustos.com` existe en Wix sin dominio conectado
  - ❓ "auto clínica vía sana .cl"
  - ❓ "de la puerta abogados .cl" — `delapuerta.cl` existe en Wix sin dominio conectado

# zabroso-cl

## Pendientes

- [x] **Quitar la integración con Zapier de los formularios de cotización** (`/` y `/ecommerce/`). Reemplazado por `api/contacto.ts`, una función serverless de Vercel (plan Hobby, gratis) que valida el envío y notifica por email vía Resend — a Pablo y con una confirmación automática al cliente. Requiere la env var `RESEND_API_KEY` configurada en Vercel.
- [ ] **Guardar los leads en algún lugar consultable** (hoy solo llegan por email, no quedan en una base de datos/tabla). Se evaluó Praxsuite (vía su gateway MCP) pero se dejó pendiente — retomar cuando el volumen de leads lo justifique.
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

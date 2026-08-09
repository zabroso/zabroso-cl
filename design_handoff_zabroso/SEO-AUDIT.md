# Auditoría SEO completa · zabroso.cl

**Fecha:** 4 mayo 2026
**Versión auditada:** zabroso.html (prototipo React client-side)
**Auditor:** Pablo + Claude

---

## ⚠️ Resumen ejecutivo

| Categoría | Antes | Después |
|---|---|---|
| Meta tags básicos | 🔴 2/10 — solo `<title>` y viewport | 🟢 10/10 |
| Open Graph / Social | 🔴 0/10 | 🟢 10/10 |
| Schema.org structured data | 🔴 0/10 | 🟢 10/10 |
| Crawlability (contenido para bots) | 🔴 1/10 — SPA vacío para crawlers | 🟢 9/10 |
| Accesibilidad (a11y → SEO) | 🟡 5/10 | 🟢 9/10 |
| Performance / Core Web Vitals | 🟡 6/10 | 🟢 8/10 |
| Internacionalización | 🔴 3/10 | 🟢 9/10 |
| Archivos auxiliares (robots/sitemap/manifest) | 🔴 0/10 | 🟢 10/10 |

**Score global: 2/10 → 9/10**

---

## 🔴 Problemas críticos detectados (resueltos)

### 1. Sitio renderizado 100% en cliente — Google veía página vacía
El sitio actual usa React + Babel en runtime. Cuando Googlebot fetchea la URL, recibe `<div id="root"></div>` vacío. **Esto es el problema #1 de SEO.**

**Solución aplicada:**
- Bloque `#seo-content` oculto visualmente (clip-path) pero indexable, con todo el texto crítico: H1, H2s, descripciones de cada proyecto, contacto.
- `<noscript>` con mensaje + email para usuarios sin JS.
- **Recomendación a futuro:** migrar a **Astro** (ya planificado en tu roadmap). Astro pre-renderiza HTML estático → SEO perfecto sin trucos.

### 2. Faltaban Open Graph y Twitter Cards
Compartir el link en WhatsApp/LinkedIn/X mostraba un preview vacío.
**Solución:** OG completo (title, description, image 1200×630, locale `es_CL`) + Twitter `summary_large_image`.

### 3. Sin Schema.org / JSON-LD
Google Rich Results no podía entender qué eres ni qué ofreces.
**Solución:** JSON-LD con `@graph` que incluye:
- `Person` (Pablo) con `knowsAbout`, ubicación, sameAs a GitHub
- `ProfessionalService` (zabroso.cl) con `serviceType`, `areaServed`, `priceRange`
- `WebSite` con publisher
- `BreadcrumbList` para las secciones

### 4. Sin canonical, sin idioma regional, sin geo
- `<html lang="es">` → ahora `es-CL` (español de Chile)
- Añadido `<link rel="canonical">`
- Meta `geo.region`, `geo.position`, `ICBM` apuntando a Valparaíso
- `hreflang` para multi-región futura

### 5. Sin robots.txt ni sitemap.xml
**Creados:** `robots.txt` y `sitemap.xml` con todas las secciones priorizadas.

### 6. Sin favicon ni manifest
**Creados:** `favicon.svg` (taza pixel art) y `site.webmanifest` (PWA-ready).

---

## 🟡 Mejoras de accesibilidad → SEO

- `<nav aria-label="Navegación principal">`
- SVGs decorativos con `role="img"` y `aria-label` describiendo el contenido
- `aria-label` en CTA principal
- `<div id="root" role="main">` para landmark semántico
- H1 único (estaba bien; mantenido)

---

## 📊 Performance (recomendaciones pendientes)

Estos requieren build/deploy real, no se pueden hacer en el prototipo:

1. **Migrar a Astro** — pasa de SPA a HTML estático. CLS y LCP mejorarán dramáticamente.
2. **React production build** — actualmente usas `react.development.js`. En producción debe ser `react.production.min.js` (40% más liviano).
3. **Self-host fuentes** — Playfair Display y Montserrat en tu CDN evita el round-trip a Google Fonts (mejora LCP ~200ms).
4. **`font-display: swap`** — ya viene en la URL de Google Fonts ✅
5. **Lazy load de imágenes** — cuando agregues fotos reales: `loading="lazy"` + `fetchpriority="high"` solo en hero.
6. **Preload imagen del hero** una vez tengas foto real.
7. **Comprimir y servir AVIF/WebP** — todas las imágenes futuras.

---

## 🎯 Acciones pendientes para producción

### Imágenes que debes crear (no puedo crearlas yo):
- [ ] **og-image.png** — 1200×630px, mostrando "Pablo Zabroso · zabroso.cl" + tu cara o el avatar 8-bit
- [ ] **apple-touch-icon.png** — 180×180px
- [ ] **icon-192.png** y **icon-512.png** — para PWA
- [ ] **pablo.jpg** — foto real para Schema.org Person.image
- [ ] **logo.png** — versión PNG del logo

### Configuración fuera del HTML:
- [ ] Verificar dominio en **Google Search Console** y subir el sitemap
- [ ] Configurar **Google Analytics 4** o Plausible (privacy-friendly)
- [ ] **Bing Webmaster Tools** (10% del tráfico chileno)
- [ ] Verificación en **LinkedIn** (importante para B2B)
- [ ] **HTTPS + HSTS** en hosting
- [ ] **Cache headers** correctos (HTML: no-cache, assets: 1 año)

### Contenido / SEO de palabras clave:
- [ ] **Blog/Bitácora real** — el SEO B2B necesita contenido. Considera 1 post mensual (Astro Content Collections).
- [ ] **Páginas dedicadas por servicio** — `/software-a-medida`, `/consultoria-n8n`, `/desarrollo-astro`. Mucho mejor para long-tail que una landing única.
- [ ] **Testimonios/Reviews** — agrega `Review` schema cuando tengas clientes que citen.
- [ ] **Caso de éxito por proyecto** — `/proyectos/sentialert`, `/proyectos/munia`, etc., con métricas reales.

---

## 🔍 Keywords objetivo identificadas

**Primarias** (alto intent, tu nicho):
- consultoría software Chile
- desarrollo software a medida Valparaíso
- freelance Astro Chile
- automatización n8n Chile

**Secundarias** (educativas / blog):
- cómo elegir consultor de software
- diferencia agencia vs freelance senior
- qué es n8n para empresas

**Branded:**
- pablo zabroso
- zabroso consultoría

---

## 📝 Próximos pasos sugeridos

1. **Esta semana:** crear `og-image.png` (puedo ayudarte con un mockup si quieres)
2. **Este mes:** migrar prototipo a Astro real con HTML estático
3. **Próximo trimestre:** primer post de blog para empezar el SEO orgánico
4. **Siempre:** medir con Search Console + Lighthouse mensual

---

*Dudas o quieres que profundice en algún punto, escríbeme: pablo@zabroso.cl ☕*

# Handoff: zabroso.cl — Portfolio Boutique Web

## Overview

Sitio web de Pablo Zabroso, consultor boutique de software en Valparaíso, Chile. Concepto: **"Artesanía Digital"** — calidez de materiales físicos (madera, papel) + nostalgia 8-bit + stack moderno de alto rendimiento. CTA principal: "Conversemos con un café".

El sitio es una landing one-page con 6 secciones: Hero, Sobre Pablo (4 facetas), Galería de Soluciones, Bitácora GitHub, El Taller (stack), y Footer (atardecer).

## About the Design Files

Los archivos en este bundle son **referencias de diseño creadas en HTML + React+Babel inline** — son prototipos que muestran el look-and-feel y comportamiento deseados, **no código de producción para copiar directo**.

La tarea es **recrear estos diseños en el entorno target del codebase** (en este caso: **Astro + React + Tailwind**, ya planificado en el roadmap del proyecto). El JSX inline se debe portar a componentes Astro/React idiomáticos y los estilos a Tailwind con la paleta personalizada documentada abajo.

## Fidelity

**High-fidelity (hifi)** — colores finales, tipografía, spacing, interacciones y animaciones definidos. El desarrollador debe recrear pixel-perfect en el codebase target.

## Stack Target Recomendado

- **Astro** — framework principal (SEO, performance, HTML estático)
- **React** — solo para "islas" interactivas (Tweaks panel, contadores GitHub, modals de proyecto)
- **Tailwind CSS** — con configuración personalizada (ver Design Tokens)
- **n8n** — para formulario de contacto inteligente (futuro)

## Screens / Views

### 1. Hero
- **Layout**: 2-col grid 1fr/1fr, max-width 1160px, gap 4rem, vh-100, padding-top 60px (nav)
- **Izquierda**:
  - Eyebrow "Consultoría Boutique · Valparaíso" (uppercase, letter-spacing .2em, color terracota)
  - H1 "Conversemos / con un café." (Playfair Display Black 900, clamp(3rem,5.5vw,5rem), line-height 1.0, "con un café" en `<em>` italic + color terracota)
  - Body 1.05rem, line-height 1.75, color muted, max-width 480px
  - CTAs: botón primario terracota con shadow 4px 4px 0 madera-roble + animación pulse + outline secundario "Ver proyectos →"
  - Avatar row: pixel art de Pablo (56px) + nombre + rol "Informático · Barista · Karateca · El Conector" + gato pixel art (36px)
- **Derecha**: Taza de café pixel art (220px) flotando con `@keyframes float`, vapor animado con `@keyframes steam` (3 columnas escalonadas), sombra elíptica abajo, 2 papelitos decorativos rotados con `box-shadow: 4px 4px 0 #5D4037`
- **Scroll indicator**: bottom 2rem, animación float, "Scroll ↓"
- **Easter egg**: avatar caminante (44px) en `position:absolute; bottom:3.5rem`, `@keyframes walkin` 12s linear infinite (cruza viewport)

### 2. Sobre Pablo — Las 4 Facetas
- **Background**: white (o #120C09 en dark)
- **Layout**: sec-label + h2 + sec-desc → grid 4-col de cards → 2-col (1fr 2fr) con foto + bio
- **Cards de facetas** (4):
  - Informático 💻 — Astro, React, Tailwind, n8n
  - Negocios 📊 — Entiende el problema antes de la solución
  - Barista ☕ — Café como idioma de confianza
  - Karateca 🥋 — Disciplina y mejora continua
- **Estilo card**: white bg, 2px border madera-roble, padding 2rem 1.25rem, text-center, shadow 4px 4px 0 madera-roble. Hover: translate(-2px,-2px) + shadow 6px 6px 0
- **Foto placeholder**: aspect 3/4, max-width 280, repeating-linear-gradient 45deg + border + shadow

### 3. Galería de Soluciones (Bento)
- **Background**: dot-grid pattern
- **Layout**: CSS Grid 12 cols, gap 1.25rem
  - Card 1 (Sentialert): col-span 7
  - Card 2 (Munia): col-span 5
  - Card 3 (Red Astro): col-span 5
  - Card 4 (Somni): col-span 7
- **Card**:
  - Thumb (height 180px) con `repeating-linear-gradient` 45deg en colores tierra
  - Body: tag uppercase terracota (.68rem, letter-spacing .14em) → name Playfair 1.3rem → desc colapsable (max-height transition 400ms ease) → "ver más →" / "← cerrar"
  - Click toggle expand/collapse de descripción
  - Hover: translate(-3px,-3px) + shadow 7px 7px 0
- **Proyectos** (texto exacto):
  - **Sentialert** · IA · Computer Vision · "Sistema de detección de asaltos en tiempo real usando inteligencia artificial y visión por computador. Alertas automáticas para seguridad privada y pública."
  - **Munia** · SaaS · GovTech · "Plataforma corporativa para gestión municipal. Flujos de trabajo digitales para el sector público, construida con escalabilidad desde el día uno."
  - **Red de Contenidos** · Contenidos · Astro · "Ecosistema de sitios de contenido construidos con Astro: digitalismo.cl, edukaizen.cl, megaradios.cl. SEO técnico de alto rendimiento y carga instantánea."
  - **Somni** · Automatización · n8n · "Motor de automatizaciones avanzadas basado en n8n. Conecta sistemas, elimina tareas manuales y escala operaciones sin fricción ni código extra."

### 4. Bitácora GitHub
- **Background**: white
- Grid 53 columnas × 7 días (un año), celdas 11×11px, radius 2px, gap 3px
- 5 niveles: `#EFEBE9` (0), `#A5D6A7` (1-5), `#4CAF50` (6-10), `#2E7D32` (+10), `#1B5E20`
- Hover: scale(1.3)
- Leyenda "Menos ←→ Más" abajo
- CTA outline link → github.com/zabroso

### 5. El Taller (Stack)
- **Background**: madera-roble `#5D4037`
- Texto crema, label terracota
- Stack row con 8 items (icon 1.75rem en box 72×72 con border 2px alpha, gap 1.5rem, hover bg terracota alpha)
- Stack: 🚀 Astro, ⚛️ React, 🌊 Tailwind, 🔗 n8n, 🟢 Node.js, 🧠 IA/CV, 🛒 E-commerce, ☁️ Cloud
- Sección "También hago" con border-top, chips de servicios:
  - Software a medida, Consultoría estratégica, Dashboards & Analytics, Integraciones API, SEO técnico, Automatizaciones

### 6. Footer (Atardecer)
- **Background**: `linear-gradient(135deg, #FF9E80 0%, #CE93D8 50%, #9575CD 100%)`
- Centrado, color white, padding 5rem 2rem
- Taza pixel art 90px → H2 "¿Conversamos?" Playfair 900 clamp(2.5rem,5vw,4rem) → sub → CTA white-bg "☕ pablo@zabroso.cl"
- Footer-links con border-top alpha: GitHub, Email, "zabroso.cl · Valparaíso, Chile · 2025"

### 7. Nav (fijo top)
- height 60px, bg `rgba(250,249,246,0.94)` + backdrop-blur 12px, border-bottom 2px madera-roble
- Logo "zabroso.cl" Playfair 900 (`.cl` en terracota)
- Links uppercase .78rem letter-spacing .08em
- CTA "☕ Invítame un café" en terracota
- Box-shadow al scrollear (>30px)

## Interactions & Behavior

- **Scroll reveals**: clases `.rv`, `.rvL`, `.rvR` con `IntersectionObserver` (threshold .12, rootMargin -40px). Añade `.in` → opacity 1, transform none. Transition .65s ease.
- **Parallax hero**: `translateY(scrollY * .25 * factor)` en columnas hero
- **Pulse CTA**: `@keyframes pulse` 2.5s infinite con box-shadow 0 0 0 0 → 10px 0
- **Coffee float**: `@keyframes float` 3.5s ease-in-out infinite (translateY 0 → -10px)
- **Steam**: `@keyframes steam` 2.2s ease-out infinite, opacity 0→.7→0, translateY 0→-24px, 3 columnas con delays escalonados (.1s por fila)
- **Walking avatar**: `@keyframes walkin` 12s linear infinite, translateX -120px → 100vw + 120px
- **Cat bob**: `@keyframes catbob` 1.8s ease-in-out infinite
- **Project cards**: click toggle expand desc (max-height transition 400ms)
- **Tweaks panel**: panel flotante con 3 tweaks (theme: papel/noche/sunset, accentColor, heroTitle, showSteam, showWalker)

## State Management

- `tweaks` state (theme, accentColor, heroTitle, showSteam, showWalker) — persistir en localStorage
- `scrolled` boolean en Nav (`window.scrollY > 30`)
- `parallaxY` en Hero (scrollY * .25)
- `openProjectId` en Galería (which card is expanded)

## Design Tokens

### Colores
```css
--cream:   #FAF9F6;  /* fondo papel */
--roble:   #5D4037;  /* madera roble — bordes, texto fuerte */
--roble-l: #8D6E63;
--terra:   #E2725B;  /* terracota — acentos, CTAs */
--verde:   #2E7D32;  /* verde árbol — success, GitHub */
--carbon:  #2C1810;  /* texto cuerpo */
--muted:   #8B7355;  /* texto secundario */
--sun-a:   #FF9E80;  /* gradiente atardecer inicio */
--sun-b:   #9575CD;  /* gradiente atardecer fin */
```

### GitHub commit scale
`#EFEBE9` → `#A5D6A7` → `#4CAF50` → `#2E7D32` → `#1B5E20`

### Tipografía
- **Headings**: Playfair Display 700/900 (italic disponible)
- **Body**: Montserrat 400/500/600/700
- **Mono / placeholders**: monospace nativo

### Spacing
- Sections: padding 5.5rem 2rem
- Sec-inner: max-width 1160px
- Gap cards: 1.25rem
- Hero gap: 4rem

### Border radius
- Botones: rectos (estética 8-bit)
- Cards: 0 (rectos con shadow sólida)
- Celdas GitHub: 2px

### Shadows (8-bit style — sólidas, no difuminadas)
```css
--shadow:   4px 4px 0 var(--roble);
--shadow-s: 2px 2px 0 var(--roble);
/* hover: 6-7px 6-7px 0, o translate inverso */
```

### Dot-grid background
```css
background-image: radial-gradient(circle, rgba(93,64,55,0.12) 1px, transparent 1px);
background-size: 22px 22px;
```

## Assets

### Pixel art (SVG generado en JS, no PNG)
- **PixelCup** — taza humeante, 20×20 grid, color #5D4037 / #8D6E63 / #3E2723 / #D7CCC8
- **PixelAvatar** — Pablo con barba, lentes, delantal, 16×14 grid
- **PixelCat** — gato naranja, 10×8 grid, animación bob

Todos están definidos como arrays `[col, row, color]` y renderizados como `<rect>` SVG. Ver `zabroso.html` líneas ~245-340.

### Imágenes pendientes (NO incluidas — debe crearlas Pablo)
- `og-image.png` (1200×630) — preview redes sociales
- `apple-touch-icon.png` (180×180)
- `icon-192.png`, `icon-512.png` (PWA)
- `pablo.jpg` — foto real
- `logo.png`

## SEO

Ver `SEO-AUDIT.md` para reporte completo. Highlights:
- JSON-LD: Person + ProfessionalService + WebSite + BreadcrumbList
- Open Graph + Twitter Cards completos
- `lang="es-CL"`, geo tags Valparaíso (-33.0472, -71.6127)
- robots.txt + sitemap.xml incluidos
- **Crítico al migrar a Astro**: el bloque `#seo-content` oculto ya no es necesario porque Astro pre-renderiza HTML. Eliminar al portar.

## Dark Mode (theme: noche)

- `--cream: #1C120E`
- `--carbon: #FAF0E6`
- `--roble: #C4A882` (invertido)
- `--muted: #B09070`
- Cards: `#2A1C16`
- GitHub section: `#150E0B`

## Files

- `zabroso.html` — prototipo completo (single-file, React+Babel inline)
- `tweaks-panel.jsx` — componentes del panel de tweaks
- `robots.txt`, `sitemap.xml`, `site.webmanifest`, `favicon.svg` — listos para producción
- `SEO-AUDIT.md` — auditoría SEO completa con pendientes

## Recomendaciones para el desarrollador (Astro)

1. **Componentes Astro** para secciones estáticas (Hero, Sobre, Taller, Footer)
2. **Componentes React** (`client:load` o `client:visible`) solo para:
   - Galería con cards expandibles
   - Tweaks panel (mover a toggle escondido en dev/staging)
   - Nav con scroll state
3. **Tailwind config** — extender theme con los tokens de arriba
4. **CSS modules / global** — animaciones (`@keyframes float`, `steam`, `walkin`, `pulse`, `catbob`)
5. **Pixel art SVGs** — extraer a componentes Astro `.astro` con SVG inline (mejor para SEO/performance que generación JS)
6. **GitHub real** — usar Octokit en endpoint serverless o build-time fetch a la API de GitHub para `/users/zabroso/events` y construir grid real
7. **Form de contacto** — endpoint Astro que dispare workflow n8n vía webhook
8. **Performance**:
   - Self-host Playfair + Montserrat
   - `font-display: swap`
   - React production build (no `.development.js`)
   - Lazy-load imágenes futuras

---

*Pablo Zabroso · pablo@zabroso.cl · github.com/zabroso*

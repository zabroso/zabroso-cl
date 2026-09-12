import { StrictMode, type ComponentType } from 'react'
import { renderToString } from 'react-dom/server'

/**
 * Entry de SSR usada SOLO en build (scripts/prerender.mjs) y en el smoke test
 * (scripts/ssr-smoke.mjs). No importa index.css: el CSS ya lo emite el build
 * de cliente y aquí solo necesitamos el markup.
 *
 * Convención de páginas (mismas keys que `build.rollupOptions.input` en
 * vite.config.ts, derivadas de la ruta del HTML de entrada):
 *
 *   pageId      HTML de entrada          App
 *   "main"   →  index.html            →  src/App.tsx
 *   "<dir>"  →  <dir>/index.html      →  src/<dir>/App.tsx
 *
 * Para agregar una página basta con crear `<dir>/index.html` + `src/<dir>/App.tsx`
 * y registrar la entrada en vite.config.ts. Este mapa se descubre solo con
 * import.meta.glob, así que no hay que tocar este archivo.
 */
type AppModule = { default: ComponentType }

const modules = import.meta.glob<AppModule>('./**/App.tsx', { eager: true })

function pageIdFromPath(path: string): string {
  // './App.tsx' → 'main' ; './ecommerce/App.tsx' → 'ecommerce'
  const segments = path.replace(/^\.\//, '').split('/')
  return segments.length === 1 ? 'main' : segments.slice(0, -1).join('/')
}

const apps = new Map<string, ComponentType>(
  Object.entries(modules).map(([path, mod]) => [pageIdFromPath(path), mod.default]),
)

export const pageIds: readonly string[] = [...apps.keys()]

export function render(pageId: string): string {
  const App = apps.get(pageId)
  if (!App) {
    throw new Error(
      `[entry-server] No hay App para la página "${pageId}". Páginas disponibles: ${pageIds.join(', ')}`,
    )
  }
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}

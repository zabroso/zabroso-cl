import { StrictMode, type ReactElement } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'

/**
 * Monta la App en #root.
 *
 * - En producción el HTML llega prerenderizado (scripts/prerender.mjs), así
 *   que HIDRATAMOS el markup existente en vez de renderizar desde cero.
 * - En `vite dev` (y en cualquier HTML sin prerender) #root está vacío:
 *   hydrateRoot lanzaría un error de hidratación y volvería a renderizar,
 *   así que en ese caso usamos createRoot directamente.
 */
export function mount(app: ReactElement) {
  const root = document.getElementById('root')
  if (!root) throw new Error('[mount] No existe #root en el documento')

  const tree = <StrictMode>{app}</StrictMode>

  if (root.hasChildNodes()) {
    hydrateRoot(root, tree)
  } else {
    createRoot(root).render(tree)
  }
}

#!/usr/bin/env node
/**
 * Prerender en build (Node >= 20, ESM).
 *
 * Se ejecuta DESPUÉS de `vite build` (ver "build" en package.json):
 *   1. Compila src/entry-server.tsx como bundle SSR en dist/.server/
 *   2. Descubre las páginas escaneando dist/** /index.html (genérico sobre
 *      las entradas de build.rollupOptions.input, sin nombres hardcodeados):
 *        dist/index.html        → pageId "main"
 *        dist/<dir>/index.html  → pageId "<dir>"
 *   3. Renderiza cada página con React (renderToString) e inyecta el markup
 *      dentro de <div id="root"></div>. Falla si el marcador no existe.
 *   4. Borra dist/.server/ para que no se despliegue.
 *
 * El HTML resultante lo hidrata el cliente (hydrateRoot en src/**\/main.tsx).
 */
import { readdir, readFile, writeFile, rm } from 'node:fs/promises'
import { join, relative, dirname, sep } from 'node:path'
import { pathToFileURL, fileURLToPath } from 'node:url'
import { build } from 'vite'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const DIST = join(ROOT, 'dist')
const SERVER_OUT = join(DIST, '.server')
const ENTRY = 'src/entry-server.tsx'
const ROOT_MARKER = '<div id="root"></div>'

export async function findEntryHtml(dir) {
  const out = []
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) {
      if (entry.name.startsWith('.') || entry.name === 'assets') continue
      out.push(...(await findEntryHtml(full)))
    } else if (entry.name === 'index.html') {
      out.push(full)
    }
  }
  return out
}

export function pageIdFromHtml(htmlPath, distDir = DIST) {
  const rel = relative(distDir, dirname(htmlPath)) // '' | 'ecommerce' | 'a/b'
  return rel === '' ? 'main' : rel.split(sep).join('/')
}

/** Inyecta el markup en el marcador #root. Lanza si no hay exactamente un marcador. */
export function injectMarkup(html, markup, label = 'html') {
  const occurrences = html.split(ROOT_MARKER).length - 1
  if (occurrences !== 1) {
    throw new Error(
      `[prerender] ${label}: se esperaba exactamente 1 marcador ${ROOT_MARKER}, se encontraron ${occurrences}.`,
    )
  }
  if (!markup || markup.trim() === '') {
    throw new Error(`[prerender] ${label}: el markup a inyectar está vacío.`)
  }
  return html.replace(ROOT_MARKER, `<div id="root">${markup}</div>`)
}

async function main() {
  const htmlFiles = await findEntryHtml(DIST)
  if (htmlFiles.length === 0) {
    throw new Error(`[prerender] No se encontró ningún index.html en ${DIST}. ¿Corriste "vite build" antes?`)
  }

  console.log(`[prerender] Compilando bundle SSR (${ENTRY})…`)
  await build({
    root: ROOT,
    logLevel: 'warn',
    build: {
      ssr: ENTRY,
      outDir: SERVER_OUT,
      emptyOutDir: true,
      minify: false,
      // Sin sourcemaps ni assets: solo necesitamos el JS para renderToString.
      sourcemap: false,
      ssrEmitAssets: false,
    },
  })

  try {
    const serverEntry = pathToFileURL(join(SERVER_OUT, 'entry-server.js')).href
    const { render, pageIds } = await import(serverEntry)

    for (const htmlPath of htmlFiles) {
      const pageId = pageIdFromHtml(htmlPath)
      const relHtml = relative(ROOT, htmlPath)

      if (!pageIds.includes(pageId)) {
        throw new Error(
          `[prerender] ${relHtml} → pageId "${pageId}" no tiene App asociada. ` +
            `Crea src/${pageId === 'main' ? '' : pageId + '/'}App.tsx. Disponibles: ${pageIds.join(', ')}`,
        )
      }

      const html = await readFile(htmlPath, 'utf8')
      const markup = render(pageId)
      await writeFile(htmlPath, injectMarkup(html, markup, relHtml), 'utf8')
      console.log(`[prerender] ✓ ${relHtml} (${pageId}, ${markup.length} chars)`)
    }
  } finally {
    await rm(SERVER_OUT, { recursive: true, force: true })
  }
}

// Solo ejecuta cuando se invoca directamente (node scripts/prerender.mjs);
// al importarlo (tests) expone los helpers sin efectos secundarios.
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch(err => {
    console.error(err)
    process.exit(1)
  })
}

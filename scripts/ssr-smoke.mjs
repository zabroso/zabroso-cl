#!/usr/bin/env node
/**
 * Smoke test de SSR SIN build de producción.
 *
 * Levanta el dev server de Vite en modo middleware, carga src/entry-server.tsx
 * en memoria (ssrLoadModule) y renderiza cada página descubierta por
 * entry-server. Verifica: HTML no vacío, exactamente un <h1>, un texto
 * esperado por página y que no se lance ningún error.
 *
 * Uso: npm run ssr:smoke
 */
import { createServer } from 'vite'

/** Texto que DEBE aparecer en el markup de cada página (pageId → texto). */
const EXPECTED_TEXT = {
  main: 'Tu página web',
  ecommerce: 'Tu tienda online',
}

const vite = await createServer({
  server: { middlewareMode: true },
  appType: 'custom',
  logLevel: 'error',
})

let failures = 0
const report = (ok, msg) => {
  console.log(`${ok ? '  ✓' : '  ✗'} ${msg}`)
  if (!ok) failures++
}

try {
  const { render, pageIds } = await vite.ssrLoadModule('/src/entry-server.tsx')

  report(pageIds.length > 0, `entry-server descubrió ${pageIds.length} página(s): ${pageIds.join(', ')}`)

  for (const pageId of pageIds) {
    console.log(`\n[${pageId}]`)
    let html = ''
    try {
      html = render(pageId)
      report(true, 'render() no lanzó errores')
    } catch (err) {
      report(false, `render() lanzó: ${err?.stack ?? err}`)
      continue
    }

    report(typeof html === 'string' && html.trim().length > 0, `HTML no vacío (${html.length} chars)`)

    const h1Count = (html.match(/<h1[\s>]/g) ?? []).length
    report(h1Count === 1, `exactamente un <h1> (encontrados: ${h1Count})`)

    const expected = EXPECTED_TEXT[pageId]
    if (expected === undefined) {
      report(false, `no hay texto esperado definido para "${pageId}" en EXPECTED_TEXT (agrégalo en scripts/ssr-smoke.mjs)`)
    } else {
      report(html.includes(expected), `contiene "${expected}"`)
    }
  }

  // Páginas listadas en EXPECTED_TEXT que entry-server no conoce → drift.
  for (const id of Object.keys(EXPECTED_TEXT)) {
    if (!pageIds.includes(id)) report(false, `EXPECTED_TEXT tiene "${id}" pero entry-server no la descubrió`)
  }
} catch (err) {
  report(false, `fallo inesperado: ${err?.stack ?? err}`)
} finally {
  await vite.close()
}

console.log(failures === 0 ? '\nSSR smoke: OK' : `\nSSR smoke: ${failures} fallo(s)`)
process.exit(failures === 0 ? 0 : 1)

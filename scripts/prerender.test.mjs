/**
 * Tests de los helpers puros de scripts/prerender.mjs (sin build de Vite).
 * Uso: npm test   (node --test scripts/)
 */
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { mkdtemp, mkdir, writeFile, rm } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { findEntryHtml, pageIdFromHtml, injectMarkup } from './prerender.mjs'

test('findEntryHtml + pageIdFromHtml: descubre páginas e ignora assets/ y .server/', async () => {
  const fake = await mkdtemp(join(tmpdir(), 'zabroso-dist-'))
  try {
    for (const d of ['', 'ecommerce', 'sobre', 'assets', '.server']) {
      await mkdir(join(fake, d), { recursive: true })
      await writeFile(join(fake, d, 'index.html'), '<body><div id="root"></div></body>')
    }
    const files = await findEntryHtml(fake)
    const ids = files.map(f => pageIdFromHtml(f, fake)).sort()
    assert.deepEqual(ids, ['ecommerce', 'main', 'sobre'])
  } finally {
    await rm(fake, { recursive: true, force: true })
  }
})

test('injectMarkup: reemplaza el marcador #root exactamente una vez', () => {
  assert.equal(injectMarkup('<div id="root"></div>', '<h1>x</h1>'), '<div id="root"><h1>x</h1></div>')
})

test('injectMarkup: falla si el marcador falta, está duplicado o el markup es vacío', () => {
  assert.throws(() => injectMarkup('<div id="app"></div>', '<h1>x</h1>'), /exactamente 1 marcador/)
  assert.throws(() => injectMarkup('<div id="root"></div><div id="root"></div>', '<h1>x</h1>'), /encontraron 2/)
  assert.throws(() => injectMarkup('<div id="root"></div>', '   '), /vacío/)
})

/**
 * GitHub Pages serves 404.html for unknown routes. Copying the SPA shell lets
 * React Router handle deep links (see https://github.com/rafgraph/spa-github-pages).
 */
import { copyFileSync, existsSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const dist = join(process.cwd(), 'dist')
const indexHtml = join(dist, 'index.html')
const notFoundHtml = join(dist, '404.html')
const nojekyll = join(dist, '.nojekyll')

if (!existsSync(indexHtml)) {
  console.error('gh-pages-spa-fallback: dist/index.html not found. Run vite build first.')
  process.exit(1)
}

copyFileSync(indexHtml, notFoundHtml)
writeFileSync(nojekyll, '')
console.log('GitHub Pages SPA: copied dist/index.html → dist/404.html, wrote .nojekyll')

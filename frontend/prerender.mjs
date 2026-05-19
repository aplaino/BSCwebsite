import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const routes = [
  '/',
  '/FoodTruckCatering',
  '/about',
  '/contact',
  '/schedule',
  '/menus/restaurant',
  '/menus/foodTruck',
  '/menus/catering',
]

async function prerender() {
  const { render } = await import('./dist-server/entry-server.js')
  const template = fs.readFileSync(path.join(__dirname, 'dist/index.html'), 'utf-8')

  for (const route of routes) {
    const appHtml = render(route)
    const html = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)

    const outputPath =
      route === '/'
        ? path.join(__dirname, 'dist/index.html')
        : path.join(__dirname, 'dist', route.slice(1), 'index.html')

    fs.mkdirSync(path.dirname(outputPath), { recursive: true })
    fs.writeFileSync(outputPath, html)
    console.log(`Prerendered: ${route}`)
  }

  // Clean up server build
  fs.rmSync(path.join(__dirname, 'dist-server'), { recursive: true, force: true })
  console.log('Done.')
}

prerender().catch((err) => {
  console.error('Prerender failed:', err)
  process.exit(1)
})

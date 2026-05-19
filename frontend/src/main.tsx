import { hydrateRoot, createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'

const rootElement = document.getElementById('root')!

if (rootElement.hasChildNodes()) {
  // Pre-rendered HTML exists — hydrate it instead of replacing
  hydrateRoot(rootElement, <BrowserRouter><App /></BrowserRouter>)
} else {
  createRoot(rootElement).render(<BrowserRouter><App /></BrowserRouter>)
}

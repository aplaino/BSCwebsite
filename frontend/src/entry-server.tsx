import { renderToString } from 'react-dom/server'
import { StaticRouter, Routes, Route, Navigate } from 'react-router'
import { Suspense } from 'react'
import Layout from './components/Layout'

// Eager imports — lazy() doesn't resolve during renderToString
import Home from './pages/Home'
import Menus from './pages/Menus'
import Contact from './pages/Contact'
import About from './pages/About'
import Catering from './pages/Catering'
import Schedule from './pages/Schedule'

export function render(url: string): string {
  return renderToString(
    <StaticRouter location={url}>
      <Suspense fallback="">
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/menus/:typeParam" element={<Menus />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/FoodTruckCatering" element={<Catering />} />
            <Route path="/catering" element={<Navigate to="/FoodTruckCatering" replace />} />
            <Route path="/schedule" element={<Schedule />} />
          </Route>
        </Routes>
      </Suspense>
    </StaticRouter>
  )
}

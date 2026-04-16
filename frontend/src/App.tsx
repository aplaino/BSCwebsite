import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";

const Home = lazy(() => import("./pages/Home"));
const Menus = lazy(() => import("./pages/Menus"));
const Contact = lazy(() => import("./pages/Contact"));
const About = lazy(() => import("./pages/About"));
const Catering = lazy(() => import("./pages/Catering"));
const Schedule = lazy(() => import("./pages/Schedule"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/menus/:typeParam" element={<Menus />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/catering" element={<Catering />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;

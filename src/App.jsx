import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import './App.css'
import Layout from './components/Layout'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import GalleryPage from './pages/GalleryPage'
import SermonsPage from './pages/SermonsPage'
import LectureshipPage from './pages/LectureshipPage'

// Scroll to top on every route change
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function AppRoutes() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/"            element={<Home />} />
        <Route path="/about"       element={<AboutPage />} />
        <Route path="/gallery"     element={<GalleryPage />} />
        <Route path="/sermons"     element={<SermonsPage />} />
        <Route path="/lectureship" element={<LectureshipPage />} />
        {/* Catch-all — redirect unknown routes home */}
        <Route path="*"            element={<Home />} />
      </Routes>
    </Layout>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App

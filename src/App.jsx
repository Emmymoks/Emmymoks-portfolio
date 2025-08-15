import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Cursor from './components/Cursor.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Portfolio from './pages/Portfolio.jsx'
import Contact from './pages/Contact.jsx'
import ProjectCase from './pages/ProjectCase.jsx'

export default function App() {
  return (
    <div className="min-h-dvh flex flex-col bg-neutral-950 text-neutral-100 parallax-bg">
      <Cursor />
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project/:slug" element={<ProjectCase />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

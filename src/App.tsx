import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Projects from './components/Projects'
import OperationsMaintenance from './components/OperationsMaintenance'
import About from './components/About'
import Team from './components/Team'
import Partners from './components/Partners'
import Sponsorships from './components/Sponsorships'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SponsorshipsPage from './pages/SponsorshipsPage'

function HomePage() {
  const location = useLocation()

  useEffect(() => {
    const scrollTo = (location.state as { scrollTo?: string } | null)?.scrollTo
    if (!scrollTo) return
    const timer = setTimeout(() => {
      document.getElementById(scrollTo)?.scrollIntoView({ behavior: 'smooth' })
    }, 50)
    return () => clearTimeout(timer)
  }, [location.state])

  return (
    <>
      <Hero />
      <Services />
      <Projects />
      <OperationsMaintenance />
      <About />
      <Team />
      <Partners />
      <Sponsorships />
      <Contact />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sponsorships" element={<SponsorshipsPage />} />
        <Route path="/sponsorship" element={<SponsorshipsPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

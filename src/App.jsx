import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Home from './pages/Home'
import Privacy from './pages/Privacy'
import Cookies from './pages/Cookies'
import Aos from 'aos'
import 'aos/dist/aos.css'

function App() {
  useEffect(() => {
    Aos.init({ duration: 700 })
  }, [])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/cookies" element={<Cookies />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App

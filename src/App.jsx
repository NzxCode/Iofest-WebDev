import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import CalculatorPage from './pages/CalculatorPage'
import FoodListPage from './pages/FoodListPage'
import TipsPage from './pages/TipsPage'
import AboutPage from './pages/AboutPage'
import FAQ from './pages/FAQ'

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/kalkulator" element={<CalculatorPage />} />
          <Route path="/daftar-makanan" element={<FoodListPage />} />
          <Route path="/tips-sehat" element={<TipsPage />} />
          <Route path="/tentang" element={<AboutPage />} />
          <Route path="/FAQ" element={<FAQ />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
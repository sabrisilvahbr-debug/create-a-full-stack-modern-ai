import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'



export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-slate-950">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gradient mb-4">404</h1>
        <p className="text-slate-400 mb-6">Página não encontrada</p>
        <a href="/" className="inline-flex items-center gap-2 bg-violet-600 text-white px-6 py-3 rounded-xl font-medium hover:opacity-90 transition-opacity">
          Voltar ao início
        </a>
      </div>
    </div>
  )
}

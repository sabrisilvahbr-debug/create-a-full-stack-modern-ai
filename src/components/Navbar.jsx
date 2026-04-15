import { useState, useEffect } from 'react'
import { Menu, X, Zap } from 'lucide-react'

const navLinks = [
  { label: 'Início', href: '/' },
  { label: 'Recursos', href: '#features' },
  
  
  { label: 'Contato', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-slate-950/95 border-b border-slate-800/50 backdrop-blur-xl shadow-lg'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center gap-2 group">
            <div className="bg-violet-600 p-1.5 rounded-lg group-hover:opacity-90 transition-opacity">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-lg">Create A Full Stack Modern Ai</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="text-slate-400 hover:text-slate-100 font-medium transition-colors text-sm"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-violet-600 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:opacity-90 transition-all glow-sm"
            >
              Começar agora
            </a>
          </div>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-slate-800 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="bg-slate-950/98 border-t border-slate-800 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-2">
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="text-slate-400 hover:text-slate-100 py-2 px-3 rounded-lg hover:bg-slate-800 transition-colors"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

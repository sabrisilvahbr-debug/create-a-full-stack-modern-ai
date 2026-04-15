import { Zap, Github, Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-violet-600 p-1.5 rounded-lg">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-lg">Create A Full Stack Modern Ai</span>
            </div>
            <p className="text-slate-400 text-sm max-w-xs leading-relaxed">
              Inteligência artificial avançada para impulsionar seu negócio.
            </p>
            <div className="flex items-center gap-3 mt-4">
              {[Github, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="text-slate-400 hover:text-violet-400 transition-colors p-2 rounded-lg hover:bg-slate-800">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-sm">Produto</h4>
            <ul className="space-y-2">
              {['Recursos', 'Preços', 'Roadmap', 'Changelog'].map(item => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-slate-100 text-sm transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-sm">Empresa</h4>
            <ul className="space-y-2">
              {['Sobre', 'Blog', 'Carreiras', 'Contato'].map(item => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-slate-100 text-sm transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-400 text-sm">
            &copy; 2026 Create A Full Stack Modern Ai. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-slate-400 hover:text-slate-100 text-xs transition-colors">Privacidade</a>
            <a href="#" className="text-slate-400 hover:text-slate-100 text-xs transition-colors">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

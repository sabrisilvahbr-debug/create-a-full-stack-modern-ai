import { ArrowRight, Brain, Sparkles, CheckCircle } from 'lucide-react'

const highlights = [
  "Modelos de IA de última geração",
  "Análise em tempo real",
  "Integração simples via API",
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-violet-600 to-purple-600 opacity-10 blur-3xl animate-pulse-slow" />
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-violet-600 to-purple-600 opacity-5 blur-2xl animate-float" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border bg-violet-500/10 text-violet-400 border-violet-500/20 text-xs font-semibold uppercase tracking-wide mb-8 animate-fade-in">
          <Sparkles className="w-3 h-3" />
          Powered by AI
        </div>

        {/* Heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 animate-slide-up">
          <span>Create A Full Stack Modern Ai</span>
          <br />
          <span className="text-gradient">
            Inteligência que transforma
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto mb-8 leading-relaxed animate-slide-up">
          Create a full-stack modern AI web app called "JARVIN AI" that simulates ultra-realistic cinematic character transformati...
        </p>

        {/* Highlights */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          {highlights.map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-slate-400 text-sm">
              <CheckCircle className="text-violet-400 w-4 h-4 flex-shrink-0" />
              {item}
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up">
          <a
            href="#features"
            className="bg-violet-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:opacity-90 transition-all glow flex items-center gap-2 group"
          >
            Começar agora
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="bg-slate-800/80 hover:bg-slate-700 border border-slate-700 px-8 py-4 rounded-2xl font-bold text-lg transition-all flex items-center gap-2"
          >
            Ver demo
          </a>
        </div>

        
        {/* Floating AI badge */}
        <div className="mt-16 inline-flex items-center gap-3 bg-slate-900 border border-slate-800 px-6 py-3 rounded-2xl animate-float">
          <Brain className="text-violet-400 w-5 h-5" />
          <span className="text-sm font-medium">Processando 1M+ requisições/dia</span>
          <div className="flex gap-1">
            {[0,1,2].map(i => (
              <div key={i} className="bg-violet-600 w-1 rounded-full animate-pulse" style={{ height: `${12 + i * 4}px`, animationDelay: `${i * 0.2}s` }} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

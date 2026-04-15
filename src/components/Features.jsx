import { Brain, Zap, Shield, Globe, BarChart3, Layers } from 'lucide-react'

const features = [
  {
    "icon": "Brain",
    "title": "IA Generativa",
    "desc": "Modelos de linguagem avançados para criar, analisar e transformar dados com precisão excepcional."
  },
  {
    "icon": "Zap",
    "title": "Velocidade Real",
    "desc": "Respostas em milissegundos. Nossa infraestrutura foi construída para performance máxima."
  },
  {
    "icon": "Shield",
    "title": "Privacidade Total",
    "desc": "Seus dados nunca saem do seu ambiente. Criptografia de ponta a ponta em todas as operações."
  },
  {
    "icon": "Globe",
    "title": "API Poderosa",
    "desc": "Integre em qualquer projeto com nossa API REST. SDKs disponíveis para Node, Python e mais."
  },
  {
    "icon": "BarChart3",
    "title": "Analytics",
    "desc": "Dashboards em tempo real com insights acionáveis sobre o uso e performance dos modelos."
  },
  {
    "icon": "Layers",
    "title": "Multi-modal",
    "desc": "Processe texto, código, imagens e dados estruturados em um único pipeline unificado."
  }
]

const iconMap = { Brain, Zap, Shield, Globe, BarChart3, Layers }

export default function Features() {
  return (
    <section id="features" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-xs font-semibold uppercase tracking-wide text-slate-400 mb-4">
            Recursos
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Tudo que você <span className="text-gradient">precisa</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Uma plataforma de IA completa para empresas que querem escalar com inteligência.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => {
            const Icon = { Brain, Zap, Shield, Globe, BarChart3, Layers }[feature.icon]
            return (
              <div
                key={i}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-6 card-hover group"
              >
                <div className="bg-violet-600 w-11 h-11 rounded-xl flex items-center justify-center mb-4 glow-sm group-hover:scale-110 transition-transform">
                  {Icon && <Icon className="w-5 h-5 text-white" />}
                </div>
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

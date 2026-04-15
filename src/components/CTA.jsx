import { ArrowRight, Mail } from 'lucide-react'
import { useState } from 'react'

export default function CTA() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    if (!email) return
    setSent(true)
    setEmail('')
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="py-24 bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-3xl p-12 overflow-hidden">
          {/* Background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-gradient-to-r from-violet-600 to-purple-600 opacity-20 blur-3xl" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 bg-violet-500/10 text-violet-400 border-violet-500/20 border px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide mb-6">
              <Mail className="w-3 h-3" />
              Early Access
            </div>

            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
              Pronto para <span className="text-gradient">começar?</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto mb-8">
              Junte-se a mais de 5.000 empresas que já usam nossa IA para crescer mais rápido.
            </p>

            {sent ? (
              <div className="bg-violet-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg inline-flex items-center gap-2">
                Perfeito! Entraremos em contato em breve.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                  required
                  className="flex-1 w-full bg-slate-700/50 border-slate-600 text-slate-100 placeholder:text-slate-500 border rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-[#7c3aed]"
                />
                <button
                  type="submit"
                  className="bg-violet-600 text-white px-6 py-3 rounded-xl font-semibold text-sm hover:opacity-90 transition-all glow flex items-center gap-2 whitespace-nowrap"
                >
                  Entrar na lista <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}

            <p className="text-slate-400 text-xs mt-4">
              Sem spam. Cancele quando quiser.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

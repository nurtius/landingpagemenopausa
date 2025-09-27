import { Shield, Check, CreditCard, Clock, Lock } from "lucide-react"

export function Guarantee() {
  const benefits = [
    {
      icon: CreditCard,
      text: "Pagamento único, sem mensalidade.",
    },
    {
      icon: Clock,
      text: "Acesso vitalício ao conteúdo.",
    },
    {
      icon: Lock,
      text: "Compra segura e protegida.",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">
            Sua compra é <span className="text-success">100% segura</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gold/10 to-gold/5 border-2 border-gold/20 rounded-3xl p-8 mb-12">
            <div className="text-center mb-8">
              <div className="w-24 h-24 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-12 h-12 text-gold" />
              </div>
              <div className="inline-flex items-center gap-2 bg-gold text-purple-dark px-6 py-3 rounded-full font-bold text-lg">
                <Shield className="w-5 h-5" />
                Garantia 7 dias
              </div>
            </div>

            <div className="text-center space-y-4 mb-8">
              <p className="text-lg leading-relaxed">
                Você terá acesso imediato ao aplicativo. Teste sem risco: se em até 7 dias não sentir que esse é o
                caminho certo para você, devolvemos 100% do seu dinheiro.
              </p>

              <p className="text-lg font-semibold text-purple-medium">Sem perguntas, sem burocracia.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-4 p-6 bg-card rounded-xl border">
                <div className="flex-shrink-0 w-12 h-12 bg-success/10 rounded-full flex items-center justify-center">
                  <Check className="w-6 h-6 text-success" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <benefit.icon className="w-5 h-5 text-success" />
                  </div>
                  <p className="text-foreground leading-relaxed">{benefit.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

import { Smartphone, Shield, Leaf } from "lucide-react"
import { ScrollArrow } from "./scroll-arrow"

export function Solution() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-balance">
            Apresentamos o <span className="text-purple-medium">Guia Anti-Fogacho & Sono Restaurador</span>
          </h2>

          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-xl text-muted-foreground leading-relaxed">
              Um aplicativo exclusivo que reúne protocolos e técnicas comprovadas para ajudar mulheres a reduzirem os
              sintomas da menopausa de forma natural.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Nada de hormônios arriscados ou fórmulas milagrosas. Aqui você terá passos simples, práticos e organizados
              em módulos para aplicar no dia a dia.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-purple-medium/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Leaf className="w-8 h-8 text-purple-medium" />
            </div>
            <h3 className="text-xl font-semibold mb-3">100% Natural</h3>
            <p className="text-muted-foreground">Sem hormônios ou medicamentos. Apenas técnicas naturais e seguras.</p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-purple-medium/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-purple-medium" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Comprovado</h3>
            <p className="text-muted-foreground">Baseado em estudos científicos e experiências reais de mulheres.</p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-purple-medium/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Smartphone className="w-8 h-8 text-purple-medium" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Prático</h3>
            <p className="text-muted-foreground">Acesso pelo celular, organizado em módulos fáceis de seguir.</p>
          </div>
        </div>

        <div className="text-center bg-purple-light/20 p-8 rounded-2xl max-w-3xl mx-auto">
          <p className="text-lg font-semibold text-purple-dark mb-6">
            Ao adquirir, você recebe acesso imediato e completo a todos os módulos dentro do aplicativo.
          </p>
          <ScrollArrow />
        </div>
      </div>
    </section>
  )
}

"use client"

import { Button } from "@/components/ui/button"
import { Shield, Smartphone } from "lucide-react"

export function FinalCTA() {
  const handleButtonClick = () => {
    window.open("https://go.paradisepagbr.com/5jode6iabd", "_blank")
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-purple-light/30 via-purple-medium/20 to-purple-dark/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-balance text-purple-dark">
            Sua nova fase começa agora
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Por apenas R$29,90 você terá acesso completo ao aplicativo com todos os módulos para transformar suas noites
            e dias.
          </p>

          <div className="px-4">
            <Button
              onClick={handleButtonClick}
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-purple-medium to-purple-dark hover:from-purple-dark hover:to-purple-medium text-white px-6 sm:px-8 lg:px-12 py-6 sm:py-8 text-lg sm:text-xl lg:text-2xl font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 max-w-full border-2 border-purple-light/30 min-h-[70px] sm:min-h-[80px]"
              style={{
                boxShadow: "0 8px 25px rgba(139, 92, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
              }}
            >
              <span className="text-center leading-tight">Quero meu acesso agora</span>
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 pt-6 sm:pt-8">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
              <Shield className="w-4 h-4 text-success" />
              <span>Garantia 7 dias</span>
            </div>

            <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
              <Smartphone className="w-4 h-4 text-success" />
              <span>Pagamento seguro</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 sm:gap-4 pt-3 sm:pt-4">
            <div className="flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full">
              <span className="text-sm font-semibold text-green-700">PIX</span>
            </div>
            <div className="flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full">
              <span className="text-sm font-semibold text-blue-700">Cartão</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

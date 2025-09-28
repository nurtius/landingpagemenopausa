"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export function Hero() {
  const handleButtonClick = () => {
    window.open("https://go.paradisepagbr.com/5jode6iabd", "_blank")
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-light/20 via-background to-purple-light/10 py-12 sm:py-16 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-balance leading-tight">
              Chega de noites em claro e ondas de calor.
              <span className="text-purple-medium"> Viva a menopausa com leveza.</span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground text-pretty leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Um protocolo natural, seguro e acessível, criado para transformar sua rotina sem hormônios e sem promessas
              milagrosas.
            </p>

            <div className="relative w-full max-w-md mx-auto lg:mx-0 mb-8">
              <img
                src="/images/woman-menopause.png"
                alt="Mulher serena vivendo a menopausa com leveza"
                className="w-full h-auto object-cover rounded-2xl"
              />

              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-[90%] z-10">
                <div className="space-y-3 sm:space-y-4 bg-gradient-to-r from-purple-light/10 to-purple-medium/10 p-4 sm:p-6 rounded-2xl border border-purple-medium/20 backdrop-blur-sm bg-white/80">
                  <div className="flex items-center justify-center gap-3 sm:gap-4">
                    <span className="text-lg sm:text-xl lg:text-2xl text-muted-foreground line-through">De R$97</span>
                    <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-purple-medium bg-gradient-to-r from-purple-medium to-purple-dark bg-clip-text text-transparent">
                      R$19,90
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-purple-dark font-semibold text-center">
                    *Oferta de lançamento por tempo limitado
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full mt-16 space-y-6">
              <Button
                onClick={handleButtonClick}
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-purple-medium to-purple-dark hover:from-purple-dark hover:to-purple-medium text-white px-6 sm:px-8 py-6 sm:py-8 text-lg sm:text-xl font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 max-w-full border-2 border-purple-light/30 min-h-[60px] sm:min-h-[70px]"
                style={{
                  boxShadow: "0 8px 25px rgba(139, 92, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
                }}
              >
                <span className="text-center leading-tight">Quero meu acesso agora</span>
              </Button>

              <div className="flex justify-center">
                <div className="animate-bounce">
                  <ChevronDown className="w-8 h-8 text-purple-medium" />
                </div>
              </div>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0">
            <div className="bg-gradient-to-br from-purple-medium to-purple-dark p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl shadow-2xl">
              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 space-y-3 sm:space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-800 text-sm sm:text-base">Protocolo Anti-Fogacho</h3>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                </div>

                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  <div className="bg-purple-light/20 p-2 sm:p-3 rounded-lg">
                    <div className="text-xs text-purple-dark font-medium">Sono Restaurador</div>
                    <div className="text-xs sm:text-sm text-gray-600 mt-1">7 técnicas</div>
                  </div>
                  <div className="bg-purple-light/20 p-2 sm:p-3 rounded-lg">
                    <div className="text-xs text-purple-dark font-medium">Anti-Fogacho</div>
                    <div className="text-xs sm:text-sm text-gray-600 mt-1">5 estratégias</div>
                  </div>
                  <div className="bg-purple-light/20 p-2 sm:p-3 rounded-lg">
                    <div className="text-xs text-purple-dark font-medium">Plano 7 Dias</div>
                    <div className="text-xs sm:text-sm text-gray-600 mt-1">Passo a passo</div>
                  </div>
                  <div className="bg-purple-light/20 p-2 sm:p-3 rounded-lg">
                    <div className="text-xs text-purple-dark font-medium">+ Módulos</div>
                    <div className="text-xs sm:text-sm text-gray-600 mt-1">Exclusivos</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

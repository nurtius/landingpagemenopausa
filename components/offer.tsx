"use client"

import { Button } from "@/components/ui/button"
import { Clock } from "lucide-react"
import { useState, useEffect } from "react"

export function Offer() {
  const handleButtonClick = () => {
    window.open("https://go.paradisepagbr.com/5jode6iabd", "_blank")
  }

  const [timeLeft, setTimeLeft] = useState({
    hours: 47,
    minutes: 59,
    seconds: 59,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-purple-medium to-purple-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-medium/20 to-transparent"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-light/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 text-center relative z-10 max-w-7xl">
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-white/20">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-balance mb-4">
              De <span className="line-through text-white/70">R$97</span> por apenas
            </h2>
            <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-gold mb-4 drop-shadow-lg">R$29,90</div>
            <p className="text-base sm:text-lg lg:text-xl text-purple-light">
              Oferta especial de lançamento. Válida apenas por tempo limitado.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 max-w-sm sm:max-w-md mx-auto border border-white/20">
            <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
              <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-gold" />
              <span className="text-sm sm:text-base lg:text-lg font-semibold">Tempo restante:</span>
            </div>

            <div className="flex justify-center gap-2 sm:gap-4">
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gold">
                  {timeLeft.hours.toString().padStart(2, "0")}
                </div>
                <div className="text-xs sm:text-sm text-purple-light">Horas</div>
              </div>
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gold">:</div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gold">
                  {timeLeft.minutes.toString().padStart(2, "0")}
                </div>
                <div className="text-xs sm:text-sm text-purple-light">Min</div>
              </div>
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gold">:</div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gold">
                  {timeLeft.seconds.toString().padStart(2, "0")}
                </div>
                <div className="text-xs sm:text-sm text-purple-light">Seg</div>
              </div>
            </div>
          </div>

          <p className="text-sm sm:text-base text-purple-light">Após esse período, o valor volta ao normal.</p>

          <div className="px-4">
            <Button
              onClick={handleButtonClick}
              size="lg"
              className="w-full max-w-lg mx-auto bg-gradient-to-r from-gold to-yellow-400 hover:from-yellow-400 hover:to-gold text-purple-dark px-4 sm:px-6 py-4 sm:py-6 text-base sm:text-lg lg:text-xl font-black rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 border-4 border-yellow-300/50 min-h-[80px] sm:min-h-[90px]"
              style={{
                boxShadow:
                  "0 15px 35px rgba(251, 191, 36, 0.4), inset 0 2px 0 rgba(255, 255, 255, 0.3), 0 0 0 1px rgba(251, 191, 36, 0.2)",
              }}
            >
              <span className="text-center leading-tight drop-shadow-sm break-words">
                Quero garantir meu acesso
                <br className="sm:hidden" />
                <span className="hidden sm:inline"> </span>por R$29,90
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { Button } from "@/components/ui/button"
import { Check, Moon, Thermometer, Battery, Smile } from "lucide-react"
import { ScrollArrow } from "./scroll-arrow"

export function Transformation() {
  const handleButtonClick = () => {
    window.open("https://go.paradisepagbr.com/5jode6iabd", "_blank")
  }

  const transformations = [
    {
      icon: Moon,
      text: "Dormir profundamente e acordar revigorada.",
    },
    {
      icon: Thermometer,
      text: "Sentir seu corpo equilibrado e fresco durante o dia e a noite.",
    },
    {
      icon: Battery,
      text: "Retomar sua energia, confiança e autoestima.",
    },
    {
      icon: Smile,
      text: "Viver a menopausa como um novo capítulo, e não como uma tortura.",
    },
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-purple-light/10 to-background overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-balance">
            Agora imagine como seria...
          </h2>
        </div>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 max-w-4xl mx-auto mb-8 sm:mb-12">
          {transformations.map((transformation, index) => (
            <div
              key={index}
              className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-card rounded-xl border border-success/20 shadow-sm"
            >
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-success/10 rounded-full flex items-center justify-center">
                <Check className="w-5 h-5 sm:w-6 sm:h-6 text-success" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <transformation.icon className="w-4 h-4 sm:w-5 sm:h-5 text-success" />
                </div>
                <p className="text-foreground leading-relaxed text-sm sm:text-base">{transformation.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center px-4">
          <Button
            onClick={handleButtonClick}
            size="lg"
            className="w-full max-w-md mx-auto bg-gradient-to-r from-purple-medium to-purple-dark hover:from-purple-dark hover:to-purple-medium text-white px-4 sm:px-6 py-4 sm:py-6 text-base sm:text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 border-2 border-purple-light/30 min-h-[70px] sm:min-h-[80px]"
            style={{
              boxShadow: "0 8px 25px rgba(139, 92, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
            }}
          >
            <span className="text-center leading-tight break-words">
              Quero viver essa transformação
              <br className="sm:hidden" />
              <span className="hidden sm:inline"> </span>por R$29,90
            </span>
          </Button>
          <ScrollArrow className="mt-8" />
        </div>
      </div>
    </section>
  )
}

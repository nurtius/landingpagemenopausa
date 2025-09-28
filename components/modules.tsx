"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, Moon, Thermometer, Zap, Pill, Calendar, Lock, ChevronLeft, ChevronRight } from "lucide-react"
import { ScrollArrow } from "./scroll-arrow"
import { useState, useRef } from "react"

export function Modules() {
  const handleButtonClick = () => {
    window.open("https://go.paradisepagbr.com/5jode6iabd", "_blank")
  }

  const carouselRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -320, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 320, behavior: "smooth" })
    }
  }

  const handleScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  const visibleModules = [
    {
      icon: Brain,
      title: "Entenda a Menopausa",
      description: "Clareza sobre seu corpo e mudanças.",
    },
    {
      icon: Moon,
      title: "Sono Restaurador",
      description: "Passos práticos para dormir melhor.",
    },
    {
      icon: Thermometer,
      title: "Anti-Fogacho",
      description: "Estratégias de estilo de vida que funcionam.",
    },
    {
      icon: Zap,
      title: "Técnicas Anti-Crise",
      description: "Como lidar quando o calor aparece.",
    },
    {
      icon: Pill,
      title: "Suplementos Naturais",
      description: "O que a ciência realmente recomenda.",
    },
    {
      icon: Calendar,
      title: "Plano 7 Dias",
      description: "Um passo a passo diário para aliviar sintomas.",
    },
  ]

  const hiddenModules = [
    "Receitas Anti-Inflamatórias",
    "Exercícios Específicos",
    "Mindfulness para Menopausa",
    "Conclusão e Próximos Passos",
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-balance">
            Dentro do aplicativo você vai encontrar...
          </h2>
        </div>

        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto mb-6 sm:mb-8">
          {visibleModules.map((module, index) => (
            <Card key={index} className="border-2 hover:border-purple-medium/50 transition-colors">
              <CardContent className="p-4 sm:p-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-medium/10 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                  <module.icon className="w-5 h-5 sm:w-6 sm:h-6 text-purple-medium" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold mb-2">{module.title}</h3>
                <p className="text-muted-foreground text-xs sm:text-sm">{module.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-3 sm:gap-4 grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto mb-6 sm:mb-8 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none"></div>
          {hiddenModules.map((module, index) => (
            <Card key={index} className="blur-sm opacity-60">
              <CardContent className="p-3 sm:p-4 lg:p-6">
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-purple-medium/10 rounded-full flex items-center justify-center mb-2 sm:mb-3 lg:mb-4">
                  <Lock className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-purple-medium" />
                </div>
                <h3 className="text-xs sm:text-sm lg:text-base font-semibold mb-1 sm:mb-2">{module}</h3>
                <p className="text-muted-foreground text-xs">Conteúdo exclusivo aguardando...</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center space-y-4 sm:space-y-6">
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground">
            E isso é só o começo. Existem muito mais conteúdos esperando por você lá dentro.
          </p>

          <div className="px-4">
            <Button
              onClick={handleButtonClick}
              size="lg"
              className="w-full max-w-lg mx-auto bg-gradient-to-r from-purple-medium to-purple-dark hover:from-purple-dark hover:to-purple-medium text-white px-4 sm:px-6 py-4 sm:py-6 text-base sm:text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 border-2 border-purple-light/30 min-h-[70px] sm:min-h-[80px]"
              style={{
                boxShadow: "0 8px 25px rgba(139, 92, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
              }}
            >
              <span className="text-center leading-tight break-words">
                Desbloqueie todos os módulos
                <br className="sm:hidden" />
                <span className="hidden sm:inline"> </span>agora por apenas R$19,90
              </span>
            </Button>
          </div>
          <ScrollArrow className="mt-6" />
        </div>

        <div className="mt-16 sm:mt-20">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 text-balance">Veja como é a plataforma</h3>
            <p className="text-muted-foreground">Interface intuitiva e fácil de usar em qualquer dispositivo</p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            <button
              onClick={scrollLeft}
              disabled={!canScrollLeft}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 disabled:opacity-50 disabled:cursor-not-allowed hidden lg:flex items-center justify-center"
            >
              <ChevronLeft className="w-6 h-6 text-purple-medium" />
            </button>

            <button
              onClick={scrollRight}
              disabled={!canScrollRight}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 disabled:opacity-50 disabled:cursor-not-allowed hidden lg:flex items-center justify-center"
            >
              <ChevronRight className="w-6 h-6 text-purple-medium" />
            </button>

            <div className="hidden md:block">
              <img
                src="/app-interface-preview.png"
                alt="Interface do aplicativo Protocolo Anti-Fogacho mostrando módulos organizados"
                className="w-full rounded-2xl shadow-2xl border border-purple-medium/20"
              />
            </div>

            <div className="block md:hidden">
              <img
                src="/images/app-mobile-interface.png"
                alt="Interface mobile do aplicativo mostrando módulos como Entenda a Menopausa e Sono Restaurador"
                className="w-full max-w-sm mx-auto rounded-2xl shadow-2xl border border-purple-medium/20"
              />
            </div>
          </div>
          <ScrollArrow className="mt-8" />
        </div>
      </div>
    </section>
  )
}

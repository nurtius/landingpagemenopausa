"use client"

import { Button } from "@/components/ui/button"
import { ScrollArrow } from "@/components/scroll-arrow"
import { Check, Gift, Heart, Moon, Utensils, Volume2 } from "lucide-react"

export function SpecialBonuses() {
  const bonuses = [
    {
      title: "Receitas Rápidas Anti-Calor",
      value: "R$57,00",
      icon: Utensils,
      description: "Receitas práticas para refrescar o corpo naturalmente",
    },
    {
      title: "Checklist Sono Tranquilo",
      value: "R$49,90",
      icon: Moon,
      description: "Guia completo para noites reparadoras",
    },
    {
      title: "Guia Autoestima e Bem-Estar",
      value: "R$39,90",
      icon: Heart,
      description: "Estratégias para se sentir confiante e radiante",
    },
    {
      title: "Áudios Relaxantes Anti-Estresse",
      value: "R$27,00",
      icon: Volume2,
      description: "Meditações guiadas para equilíbrio emocional",
    },
  ]

  const handleCTAClick = () => {
    window.open("https://go.paradisepagbr.com/5jode6iabd", "_blank")
  }

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-purple-100 to-pink-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
            <Gift className="w-4 h-4" />
            BÔNUS ESPECIAIS INCLUSOS
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-balance">
            Bônus Exclusivos que Você Vai{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Levar Gratuitamente
            </span>
          </h2>

          <p className="text-xl text-gray-700 max-w-4xl mx-auto text-pretty">
            Esses bônus foram criados para complementar sua transformação. Somados, eles custariam mais de R$170, mas ao
            adquirir o Protocolo Anti-Fogacho, você leva todos por{" "}
            <span className="font-bold text-green-600">R$0,00</span>.
          </p>
        </div>

        {/* Bonus Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {bonuses.map((bonus, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-purple-200 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-3 rounded-xl text-white flex-shrink-0">
                  <bonus.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{bonus.title}</h3>
                  <p className="text-gray-600 mb-3">{bonus.description}</p>
                  <div className="text-2xl font-bold text-purple-600">{bonus.value}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Comparative Table */}
        <div className="bg-white rounded-2xl shadow-xl border-2 border-purple-200 p-4 sm:p-6 mb-12 max-w-2xl mx-auto">
          <h3 className="text-lg sm:text-xl font-bold text-center text-gray-900 mb-6">Tabela Comparativa de Valores</h3>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-purple-200">
                  <th className="text-left py-2 px-2 font-bold text-gray-900">Bônus Especial</th>
                  <th className="text-center py-2 px-2 font-bold text-gray-900">Valor Normal</th>
                  <th className="text-center py-2 px-2 font-bold text-green-600">Hoje</th>
                </tr>
              </thead>
              <tbody>
                {bonuses.map((bonus, index) => (
                  <tr key={index} className="border-b border-purple-100 hover:bg-purple-50 transition-colors">
                    <td className="py-2 px-2 font-medium text-gray-800 text-xs sm:text-sm">{bonus.title}</td>
                    <td className="py-2 px-2 text-center">
                      <span className="line-through text-gray-500">{bonus.value}</span>
                    </td>
                    <td className="py-2 px-2 text-center">
                      <span className="font-bold text-green-600 flex items-center justify-center gap-1">
                        <Check className="w-3 h-3" />
                        R$0,00
                      </span>
                    </td>
                  </tr>
                ))}
                <tr className="border-t-2 border-purple-300 bg-gradient-to-r from-purple-50 to-pink-50">
                  <td className="py-3 px-2 font-bold text-gray-900">Total:</td>
                  <td className="py-3 px-2 text-center">
                    <span className="line-through text-gray-500 font-bold">R$173,80</span>
                  </td>
                  <td className="py-3 px-2 text-center">
                    <span className="text-lg font-bold text-green-600 flex items-center justify-center gap-1">
                      <Check className="w-4 h-4" />
                      R$0,00
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Closing Text */}
        <div className="text-center mb-12">
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8 text-pretty">
            Somente hoje, ao adquirir o Protocolo Anti-Fogacho, você leva esses 4 bônus incríveis sem pagar nada a mais.
            Mas essa condição é <span className="font-bold text-purple-600">exclusiva para este lançamento</span>.
          </p>

          <Button
            onClick={handleCTAClick}
            size="lg"
            className="w-full sm:w-auto bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 hover:from-yellow-500 hover:via-orange-500 hover:to-yellow-600 text-white font-bold px-6 sm:px-8 py-6 sm:py-8 text-lg sm:text-xl rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 max-w-full border-2 border-white/30 min-h-[60px] sm:min-h-[70px]"
            style={{
              boxShadow: "0 8px 25px rgba(251, 191, 36, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
            }}
          >
            <span className="text-center leading-tight">
              Quero o Protocolo + os 4 Bônus
              <br className="sm:hidden" />
              <span className="sm:ml-2">por apenas R$19,90</span>
            </span>
          </Button>
        </div>

        <ScrollArrow />
      </div>
    </section>
  )
}

import { X, Moon, Thermometer, Battery, Frown } from "lucide-react"
import { ScrollArrow } from "./scroll-arrow"

export function PainPoints() {
  const painPoints = [
    {
      icon: Moon,
      text: "Passa noites em claro, acordando várias vezes sem descansar.",
    },
    {
      icon: Thermometer,
      text: "Sofre com ondas de calor repentinos e desconfortáveis.",
    },
    {
      icon: Battery,
      text: "Se sente sem energia, sem vontade e com a autoestima abalada.",
    },
    {
      icon: Frown,
      text: "Vive estressada, irritada e sem disposição para o dia a dia.",
    },
  ]

  return (
    <section className="py-16 sm:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-balance">Você também sente isso?</h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto mb-8 sm:mb-12">
          {painPoints.map((point, index) => (
            <div key={index} className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-card rounded-xl border">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-destructive/10 rounded-full flex items-center justify-center">
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-destructive" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 sm:gap-3 mb-2">
                  <point.icon className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
                </div>
                <p className="text-sm sm:text-base text-foreground leading-relaxed">{point.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Se você respondeu sim a pelo menos um desses pontos, este guia foi feito especialmente para você.
          </p>
          <ScrollArrow className="mt-8" />
        </div>
      </div>
    </section>
  )
}

"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { useEffect, useState } from "react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Ana C.",
      age: "52 anos",
      text: "Em 7 dias consegui dormir a noite inteira sem interrupções.",
      initial: "A",
    },
    {
      name: "Luciana M.",
      age: "49 anos",
      text: "Os calores diminuíram bastante e me sinto mais leve.",
      initial: "L",
    },
    {
      name: "Márcia S.",
      age: "56 anos",
      text: "Voltei a ter energia e confiança no meu dia a dia.",
      initial: "M",
    },
    {
      name: "Carla R.",
      age: "48 anos",
      text: "Finalmente encontrei algo que realmente funciona para mim.",
      initial: "C",
    },
    {
      name: "Sandra P.",
      age: "54 anos",
      text: "Minha qualidade de vida melhorou muito com essas técnicas.",
      initial: "S",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">
            Veja o que outras mulheres estão dizendo...
          </h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="border-2 border-purple-medium/20 shadow-lg max-w-md mx-auto">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                        ))}
                      </div>

                      <p className="text-foreground mb-6 leading-relaxed">"{testimonial.text}"</p>

                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-medium to-purple-dark flex items-center justify-center">
                          <span className="text-white font-bold text-lg">{testimonial.initial}</span>
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.age}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-purple-medium" : "bg-purple-medium/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

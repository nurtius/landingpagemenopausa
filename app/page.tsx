import { Hero } from "@/components/hero"
import { PainPoints } from "@/components/pain-points"
import { Transformation } from "@/components/transformation"
import { Solution } from "@/components/solution"
import { Modules } from "@/components/modules"
import { SpecialBonuses } from "@/components/special-bonuses"
import { Testimonials } from "@/components/testimonials"
import { Offer } from "@/components/offer"
import { Guarantee } from "@/components/guarantee"
import { FAQ } from "@/components/faq"
import { FinalCTA } from "@/components/final-cta"

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <PainPoints />
      <Transformation />
      <Solution />
      <Modules />
      <SpecialBonuses />
      <Testimonials />
      <Offer />
      <Guarantee />
      <FAQ />
      <FinalCTA />
    </main>
  )
}

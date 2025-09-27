import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      question: "Preciso usar hormônios para seguir o guia?",
      answer: "Não. Todo o conteúdo é baseado em técnicas naturais e acessíveis.",
    },
    {
      question: "Funciona para qualquer idade da menopausa?",
      answer: "Sim, o protocolo foi pensado para mulheres em diferentes fases.",
    },
    {
      question: "Em quanto tempo vou ver resultados?",
      answer: "Muitas mulheres percebem melhora já nos primeiros 7 dias.",
    },
    {
      question: "Posso acessar pelo celular?",
      answer: "Sim. O guia foi criado para ser usado com conforto no celular.",
    },
    {
      question: "Terei acesso vitalício ao conteúdo?",
      answer: "Sim. O pagamento é único e o acesso é para sempre.",
    },
    {
      question: "Existe garantia?",
      answer: "Sim. Você tem 7 dias para testar e, se não gostar, pode pedir reembolso.",
    },
    {
      question: "Como recebo acesso?",
      answer: "Após a compra, você recebe imediatamente login e senha para acessar.",
    },
    {
      question: "Quais são as formas de pagamento?",
      answer: "Aceitamos Pix, cartão de crédito e boleto.",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">Perguntas Frequentes</h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold hover:text-purple-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

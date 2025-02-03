import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Pronto para Otimizar seu Fluxo de Trabalho?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Junte-se a milhares de equipes que já estão usando o StreamLine para aumentar sua produtividade.
        </p>
        <Button size="lg" variant="secondary">
          Inicie sua Avaliação Gratuita
        </Button>
      </div>
    </section>
  )
}


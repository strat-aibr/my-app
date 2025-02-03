import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="border-t">
      <div className="container flex flex-col items-center gap-4 py-24 text-center md:py-32">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
          Pronto para revolucionar seu negócio?
        </h2>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Junte-se às principais empresas que confiam na Amane Soft para impulsionar sua transformação digital e se
          manter à frente no cenário tecnológico em rápida evolução.
        </p>
        <Button size="lg" className="mt-4">
          Comece Hoje
        </Button>
      </div>
    </section>
  )
}


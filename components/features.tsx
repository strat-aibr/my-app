import { Brain, Cloud, Shield, Zap } from "lucide-react"

const features = [
  {
    name: "Sales Bot",
    description: "Aproveite o poder do aprendizado de máquina para obter insights acionáveis a partir dos seus dados.",
    icon: Brain,
  },
  {
    name: "Soluções em Suporte",
    description: "Soluções escaláveis, resilientes e eficientes construídas para o ecossistema moderno da nuvem.",
    icon: Cloud,
  },
  {
    name: "Recuperação de Carrinhos",
    description: "Medidas de segurança de última geração para proteger seus ativos mais valiosos.",
    icon: Shield,
  },
  {
    name: "Sitemas de IA Personalizados",
    description: "Otimizadas para velocidade e eficiência, nossas soluções oferecem desempenho incomparável.",
    icon: Zap,
  },
]

export default function Features() {
  return (
    <section className="container space-y-16 py-24 md:py-32">
      <div className="mx-auto max-w-[58rem] text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Soluções de Ponta</h2>
        <p className="mt-4 text-muted-foreground sm:text-lg">
          Descubra como a Strat Ai pode transformar seu negócio com nossas tecnologias inovadoras.
        </p>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
        {features.map((feature) => (
          <div key={feature.name} className="relative overflow-hidden rounded-lg border bg-background p-8">
            <div className="flex items-center gap-4">
              <feature.icon className="h-8 w-8" />
              <h3 className="font-bold">{feature.name}</h3>
            </div>
            <p className="mt-2 text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}


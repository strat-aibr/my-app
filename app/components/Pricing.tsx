import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Básico",
    price: "R$49",
    features: ["5 membros da equipe", "10 projetos", "Análises básicas", "Suporte por e-mail"],
  },
  {
    name: "Pro",
    price: "R$149",
    features: ["Membros ilimitados", "Projetos ilimitados", "Análises avançadas", "Suporte prioritário"],
  },
  {
    name: "Empresarial",
    price: "Personalizado",
    features: ["Recursos personalizados", "Gerente de conta dedicado", "Implantação local", "Suporte telefônico 24/7"],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Escolha Seu Plano</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <p className="text-4xl font-bold mb-6">
                {plan.price}
                <span className="text-lg font-normal text-gray-600">/mês</span>
              </p>
              <ul className="mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center mb-2">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full" variant={index === 1 ? "default" : "outline"}>
                {index === 2 ? "Fale Conosco" : "Começar"}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


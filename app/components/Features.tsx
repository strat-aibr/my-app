import { CheckCircle, Zap, Users, TrendingUp } from "lucide-react"

const features = [
  {
    icon: <CheckCircle className="h-8 w-8 text-primary" />,
    title: "Gerenciamento de Tarefas",
    description: "Organize e priorize tarefas com facilidade.",
  },
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: "Colaboração em Tempo Real",
    description: "Trabalhe em conjunto de forma perfeita em tempo real.",
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Comunicação em Equipe",
    description: "Mantenha-se conectado com mensagens integradas.",
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-primary" />,
    title: "Painel de Análises",
    description: "Acompanhe o progresso e obtenha insights com análises poderosas.",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Principais Recursos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


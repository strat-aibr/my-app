"use client";

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronRight, Code, Cpu, Database, Layers, MessageSquare, Zap } from "lucide-react"

const steps = [
  {
    icon: Database,
    title: "Coleta e Preparação de Dados",
    description: "Reunimos e processamos dados relevantes para treinar o agente de IA.",
  },
  {
    icon: Cpu,
    title: "Desenvolvimento do Modelo",
    description: "Criamos e treinamos modelos de IA avançados usando técnicas de aprendizado de máquina.",
  },
  {
    icon: Code,
    title: "Implementação e Integração",
    description: "Integramos o agente de IA em sua infraestrutura existente.",
  },
  {
    icon: MessageSquare,
    title: "Testes e Refinamento",
    description: "Realizamos testes rigorosos e refinamos o agente para garantir precisão e eficiência.",
  },
  {
    icon: Zap,
    title: "Implantação",
    description: "Lançamos o agente de IA em seu ambiente de produção.",
  },
  {
    icon: Layers,
    title: "Monitoramento e Melhoria Contínua",
    description: "Monitoramos o desempenho e fazemos melhorias contínuas para otimizar os resultados.",
  },
]

export default function Roadmap() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null)

  return (
    <section className="py-24 bg-gradient-to-b from-background to-background/80">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Roadmap de Implementação de IA</h2>
        <div className="relative">
          {/* Linha de conexão */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20 transform -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="bg-card p-6 rounded-lg shadow-lg relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onHoverStart={() => setHoveredStep(index)}
                onHoverEnd={() => setHoveredStep(null)}
              >
                <div className="flex items-center mb-4">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                </div>
                <p className="text-muted-foreground">{step.description}</p>

                {/* Número do passo */}
                <div className="absolute top-2 right-2 bg-primary/10 rounded-full w-8 h-8 flex items-center justify-center">
                  <span className="text-sm font-bold text-primary">{index + 1}</span>
                </div>

                {/* Efeito de hover */}
                <motion.div
                  className="absolute inset-0 bg-primary/5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredStep === index ? 1 : 0 }}
                />

                {/* Ícone de seta */}
                {index < steps.length - 1 && (
                  <motion.div
                    className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-20"
                    initial={{ x: 0 }}
                    animate={{ x: hoveredStep === index ? 5 : 0 }}
                  >
                    <ChevronRight className="w-6 h-6 text-primary" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


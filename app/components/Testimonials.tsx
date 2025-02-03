const testimonials = [
  {
    quote: "O StreamLine revolucionou o fluxo de trabalho da nossa equipe. É um divisor de águas!",
    author: "Maria Silva",
    company: "Inovadores Tech Ltda.",
  },
  {
    quote: "A melhor ferramenta de gerenciamento de projetos que já usamos. Altamente recomendado!",
    author: "João Santos",
    company: "Soluções Criativas S.A.",
  },
  {
    quote: "O StreamLine nos ajudou a aumentar a produtividade em 40%. É incrível!",
    author: "Ana Oliveira",
    company: "Empreendimentos Startup",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">O Que Nossos Clientes Dizem</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <p className="text-lg mb-4">"{testimonial.quote}"</p>
              <p className="font-semibold">{testimonial.author}</p>
              <p className="text-sm text-gray-600">{testimonial.company}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


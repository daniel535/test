import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ana Carolina",
    role: "Empresária",
    content:
      "A consultoria imobiliária mudou completamente minha visão sobre investimentos. Em 6 meses, já adquiri meu primeiro imóvel com total segurança.",
    rating: 5,
  },
  {
    name: "Fernanda Silva",
    role: "Médica",
    content:
      "O acompanhamento emocional foi transformador. Aprendi a equilibrar minha carreira exigente com minha saúde mental e relacionamentos.",
    rating: 5,
  },
  {
    name: "Juliana Mendes",
    role: "Advogada",
    content:
      "Contratei ambas as consultorias e hoje tenho patrimônio próprio e uma relação muito mais saudável comigo mesma. Recomendo demais!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="depoimentos" className="section-padding bg-background">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-accent/20 text-gold-dark text-sm font-medium rounded-full mb-4">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-6">
            Histórias de <span className="text-primary">transformação</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Mulheres reais compartilhando suas jornadas de crescimento pessoal e financeiro.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="relative card-elevated p-8 group hover:shadow-xl transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                  <Quote className="w-4 h-4 text-accent-foreground" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4 pt-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-accent text-accent"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground/80 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <span className="text-lg font-serif font-semibold text-primary">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

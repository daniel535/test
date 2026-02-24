import { Building2, Heart, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Consultoria Imobiliária",
    description:
      "Orientação estratégica para investimentos imobiliários seguros e rentáveis. Aprenda a construir patrimônio com inteligência e segurança.",
    features: [
      "Análise de mercado personalizada",
      "Estratégias de investimento",
      "Avaliação de riscos e oportunidades",
      "Planejamento patrimonial",
    ],
    cta: "Quero investir melhor",
    color: "primary" as const,
  },
  {
    icon: Heart,
    title: "Consultoria Emocional",
    description:
      "Acompanhamento para desenvolvimento pessoal, equilíbrio emocional e autoconhecimento. Encontre clareza e confiança para suas decisões.",
    features: [
      "Sessões individuais",
      "Programas de autoconhecimento",
      "Gestão de ansiedade e estresse",
      "Desenvolvimento de autoestima",
    ],
    cta: "Quero mais equilíbrio",
    color: "accent" as const,
  },
];

const Services = () => {
  return (
    <section id="servicos" className="section-padding bg-sand-light">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-6">
            Duas jornadas, um objetivo:{" "}
            <span className="text-accent">sua transformação</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Combinamos expertise em investimentos imobiliários com acompanhamento 
            emocional para uma abordagem holística do seu crescimento.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service) => (
            <div
              key={service.title}
              className="group card-elevated p-8 lg:p-10 hover:shadow-xl transition-all duration-300"
            >
              {/* Icon */}
              <div
                className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6 ${
                  service.color === "primary"
                    ? "bg-primary/10 text-primary"
                    : "bg-accent/20 text-accent"
                }`}
              >
                <service.icon className="w-7 h-7" />
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        service.color === "primary" ? "bg-primary" : "bg-accent"
                      }`}
                    />
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contato"
                className={`inline-flex items-center gap-2 font-medium transition-colors ${
                  service.color === "primary"
                    ? "text-primary hover:text-olive-dark"
                    : "text-gold-dark hover:text-gold"
                }`}
              >
                {service.cta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

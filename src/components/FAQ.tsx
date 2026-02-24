import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como funciona a primeira consulta?",
    answer:
      "A primeira consulta é uma conversa de descoberta onde entendo suas necessidades, objetivos e desafios. É gratuita e sem compromisso, servindo para alinharmos expectativas e definirmos o melhor caminho para você.",
  },
  {
    question: "Posso contratar ambas as consultorias?",
    answer:
      "Sim! Na verdade, muitas clientes optam pelo pacote combinado. A abordagem integrada potencializa resultados, pois trabalhamos tanto sua segurança financeira quanto seu equilíbrio emocional de forma complementar.",
  },
  {
    question: "As sessões são presenciais ou online?",
    answer:
      "Oferecemos ambas as modalidades. As sessões online são realizadas por videoconferência com total sigilo e qualidade, permitindo flexibilidade na sua agenda.",
  },
  {
    question: "Qual é o investimento para cada serviço?",
    answer:
      "Os valores variam de acordo com o pacote escolhido e a duração do acompanhamento. Na consulta inicial gratuita, apresento todas as opções e formas de pagamento disponíveis.",
  },
  {
    question: "Em quanto tempo vejo resultados?",
    answer:
      "Os resultados variam conforme cada caso. Na consultoria imobiliária, as primeiras análises são entregues em até 15 dias. No acompanhamento emocional, muitas clientes relatam mudanças significativas já nas primeiras 4 sessões.",
  },
  {
    question: "Vocês oferecem suporte após a consultoria?",
    answer:
      "Sim! Oferecemos acompanhamento contínuo para clientes que desejam manter o progresso. Também temos uma comunidade exclusiva para troca de experiências e conteúdos educativos.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="section-padding bg-sand-light">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Section Header */}
          <div className="lg:sticky lg:top-32">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Perguntas Frequentes
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-6">
              Dúvidas? <span className="text-accent">Nós respondemos</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Encontre respostas para as perguntas mais comuns sobre nossos serviços 
              e processo de trabalho.
            </p>
            <a href="#contato" className="btn-hero-outline">
              Ainda tem dúvidas? Fale comigo
            </a>
          </div>

          {/* FAQ Accordion */}
          <div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-background rounded-lg border border-border/50 px-6 shadow-sm"
                >
                  <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

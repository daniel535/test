import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-narrow text-center px-4 py-20">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="fade-in-up inline-flex items-center gap-2 px-4 py-2 bg-sand/80 backdrop-blur-sm rounded-full border border-border">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-sm font-medium text-foreground/80">
              Consultoria para mulheres que transformam
            </span>
          </div>

          {/* Heading */}
          <h1 className="fade-in-up stagger-1 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-semibold text-foreground leading-tight text-balance">
            Transforme sua vida com{" "}
            <span className="text-primary">clareza emocional</span> e{" "}
            <span className="text-accent">segurança financeira</span>
          </h1>

          {/* Subtitle */}
          <p className="fade-in-up stagger-2 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Consultoria especializada em investimento imobiliário e bem-estar emocional 
            para mulheres que buscam crescimento integral e independência.
          </p>

          {/* CTAs */}
          <div className="fade-in-up stagger-3 flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a href="#servicos" className="btn-hero group">
              Conheça os Serviços
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contato" className="btn-hero-outline">
              Fale Comigo
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="fade-in-up stagger-4 pt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-serif font-semibold text-primary">500+</span>
              <span>Mulheres atendidas</span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-border" />
            <div className="flex items-center gap-2">
              <span className="text-2xl font-serif font-semibold text-primary">8+</span>
              <span>Anos de experiência</span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-border" />
            <div className="flex items-center gap-2">
              <span className="text-2xl font-serif font-semibold text-primary">98%</span>
              <span>Satisfação</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

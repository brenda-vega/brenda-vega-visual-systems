export const About = () => {
  return (
    <section id="about" className="relative py-32 lg:py-40">
      <div className="container grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <div className="sticky top-32 space-y-3">
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">02 · About</span>
            <h2 className="font-display text-3xl text-foreground">
              Diseño visual orientado a ejecución con criterio.
            </h2>
          </div>
        </div>
        <div className="lg:col-span-7 lg:col-start-6 space-y-8 text-lg lg:text-xl leading-relaxed text-muted-foreground text-pretty">
          <p>
            He trabajado en proyectos de tecnología, educación digital y productos online,
            desarrollando sistemas visuales que funcionan de manera consistente entre campañas,
            plataformas y formatos digitales.
          </p>
          <p>
            Mi enfoque está en construir visuales <span className="text-foreground">claros, adaptables y funcionales</span>,
            facilitando tanto la comunicación de marca como la producción continua de contenido
            dentro de equipos creativos y entornos digitales de ritmo rápido.
          </p>
        </div>
      </div>
    </section>
  );
};

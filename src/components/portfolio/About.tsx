export const About = () => {
  return (
    <section id="about" className="relative overflow-hidden border-t border-hairline py-32 lg:py-40">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-64 bg-gradient-to-b from-accent/8 to-transparent" />
      <div className="container">
        <div className="mb-16 flex items-center justify-between border-b border-hairline pb-5 text-xs uppercase tracking-[0.22em] text-muted-foreground">
          <span>02 · About</span>
          <span className="hidden sm:inline">Execution · Systems · Direction</span>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-8">
              <span className="font-display text-7xl leading-none text-foreground/8 sm:text-8xl">02</span>
              <h2 className="max-w-sm font-display text-3xl leading-tight text-foreground sm:text-4xl">
                Diseño visual orientado a ejecución con criterio.
              </h2>
            </div>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <div className="space-y-8 border-l border-hairline pl-6 text-lg leading-relaxed text-muted-foreground text-pretty sm:pl-8 lg:text-xl">
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
        </div>
      </div>
    </section>
  );
};

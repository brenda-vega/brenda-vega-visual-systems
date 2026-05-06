export const About = () => {
  return (
    <section id="about" className="relative py-32 lg:py-40">
      <div className="container grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <div className="sticky top-32 space-y-3">
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">02 · About</span>
            <h2 className="font-display text-3xl text-foreground">
              Diseño orientado a comunicación y sistemas digitales.
            </h2>
          </div>
        </div>
        <div className="lg:col-span-7 lg:col-start-6 space-y-8 text-lg lg:text-xl leading-relaxed text-muted-foreground text-pretty">
          <p>
            Mi experiencia comenzó en <span className="text-foreground">diseño gráfico tradicional</span>,
            evolucionando hacia branding digital, contenido, sistemas visuales y diseño para productos digitales.
          </p>
          <p>
            A lo largo de distintos proyectos descubrí que el diseño no solo debe verse bien:
            también debe <span className="text-foreground">organizar información</span>, comunicar con claridad
            y adaptarse a múltiples formatos y plataformas.
          </p>
          <p>
            Actualmente enfoco mi trabajo en integrar branding, diseño digital, contenido y comunicación
            visual dentro de sistemas más <span className="italic text-accent">claros, consistentes y funcionales</span>.
          </p>
          <p>
            He colaborado en proyectos relacionados con tecnología, educación digital, comunidades online
            y marcas enfocadas en comunicación multiplataforma.
          </p>
        </div>
      </div>
    </section>
  );
};

import { ExternalLink, LineChart, X } from "lucide-react";
import { useEffect, useState } from "react";

type PortfolioAsset = {
  slug?: string;
  title: string;
  caption: string;
  cardSummary?: string;
  src: string;
  alt: string;
  format: string;
  gridLabel?: string;
  objective: string;
  role: string;
  tools?: string;
  channel: string;
  tags?: string[];
  type?: "image" | "video";
  actionLabel?: string;
  actionHref?: string;
  results?: string;
  publicReference?: {
    label: string;
    linkLabel?: string;
    href: string;
  };
};

const assetPath = (filename: string) => `${import.meta.env.BASE_URL}assets/${filename}`;

const assets: PortfolioAsset[] = [
  {
    title: "Short-Form Educational Content",
    src: assetPath("kairos-web3-market-analysis-reel.mp4"),
    caption: "Contenido short-form enfocado en comunicación educativa, adaptación visual y distribución multi-plataforma para redes sociales de formato vertical.",
    alt: "Short-form educational social content reel",
    format: "EDUCATIONAL SOCIAL CONTENT",
    gridLabel: "REEL · TIKTOK / INSTAGRAM / YOUTUBE SHORTS",
    objective: "Simplificar información compleja para formatos de consumo rápido y contenido recurrente.",
    role: "Edición de video, dirección visual y adaptación multi-plataforma.",
    tools: "CapCut · Premiere Pro · Photoshop · Adobe Podcast · Metricool",
    channel: "TikTok · Instagram Reels · YouTube Shorts",
    type: "video",
    results: "+129% crecimiento orgánico · 30-35% open rate · 42 semanas consecutivas · distribución multi-plataforma",
    publicReference: {
      label: "Producción visible en TikTok",
      linkLabel: "TikTok Market Analysis Reel",
      href: "https://www.tiktok.com/@kairos.research/video/7490680364675992837",
    },
  },
  {
    title: "Weekly Editorial News Reel",
    src: assetPath("kairos-weekly-web3-news-reel.mp4"),
    caption: "Sistema recurrente de contenido semanal enfocado en noticias, comunicación visual y distribución editorial para plataformas sociales de formato corto.",
    alt: "Weekly editorial news reel",
    format: "EDITORIAL SHORT-FORM CONTENT",
    gridLabel: "WEEKLY REEL · TIKTOK / INSTAGRAM / YOUTUBE SHORTS",
    objective: "Mantener ritmo editorial y distribución constante de contenido para comunidad digital.",
    role: "Edición de video, estructura visual y adaptación multi-plataforma.",
    tools: "CapCut · Premiere Pro · Photoshop · Metricool",
    channel: "TikTok · Instagram Reels · YouTube Shorts",
    type: "video",
    results: "+129% crecimiento orgánico · 30-35% open rate · 42 semanas consecutivas · distribución multi-plataforma",
    publicReference: {
      label: "Producción visible en TikTok",
      linkLabel: "TikTok Weekly News Reel",
      href: "https://www.tiktok.com/@kairos.research/video/7524744680295140613",
    },
  },
  {
    title: "Kairos — Newsletter Editorial Design",
    caption: "Sistema visual para newsletter semanal enfocado en análisis Web3, contenido editorial y distribución multi-plataforma.",
    src: assetPath("    web3-newsletter-editorial-design-kairos.png"),
    alt: "Kairos Web3 newsletter editorial design",
    format: "Editorial Content System",
    gridLabel: "NEWSLETTER SYSTEM · BEEHIIV",
    objective: "Mejorar claridad visual y consistencia de comunicación para contenido recurrente.",
    role: "Diseño editorial, estructura visual y adaptación de contenido.",
    tools: "Beehiiv · Figma · Photoshop · Canva",
    channel: "Newsletter / Social Media",
  },
  {
    title: "Kairos — Editorial Blog System",
    caption: "Apoyo en organización editorial y estructura de contenido para artículos Web3, incluyendo keyword mapping, revisión de indexación y adaptación visual de portadas e infografías previo a la transición hacia newsletters.",
    src: assetPath("web3-editorial-blog-system-kairos.png"),
    alt: "Kairos Web3 editorial blog content system",
    format: "Editorial Content Support",
    gridLabel: "EDITORIAL BLOG · SEARCH / CONTENT",
    objective: "Mejorar organización de contenido y distribución editorial digital.",
    role: "Soporte editorial y adaptación visual de contenido.",
    tools: "Google Search Console · Ubersuggest · GA4 · Canva · Notion",
    channel: "Blog / Editorial Content",
  },
  {
    title: "Kairos — Monthly Report Editorial Design",
    caption: "Reporte editorial para lectura y distribución.",
    src: assetPath("crypto-monthly-report-editorial-design.png"),
    alt: "Crypto monthly report editorial design",
    format: "Reporte editorial / contenido educativo",
    gridLabel: "LEAD MAGNET · CANVA / BEEHIIV",
    objective: "Comunicar análisis mensual con estructura visual, jerarquía de información y claridad para distribución digital.",
    role: "Diseño editorial, organización de secciones y adaptación visual de datos.",
    tools: "Canva · Photoshop · Notion",
    channel: "Newsletter / PDF / Social Media",
  },
  {
    title: "Content Calendar — Editorial Planning",
    caption: "Sistema de organización visual para planificación de contenido y publicaciones recurrentes.",
    src: assetPath("    social-media-editorial-content-calendar.png"),
    alt: "Social media editorial content calendar",
    format: "Content System",
    gridLabel: "EDITORIAL WORKFLOW · NOTION / GOOGLE SHEETS",
    objective: "Mantener consistencia editorial y estructura multi-plataforma.",
    role: "Planeación visual y organización de contenido.",
    tools: "Notion · Canva · Google Sheets",
    channel: "Editorial Workflow",
  },
  {
    title: "Storyboard — Social Media Video System",
    caption: "Storyboard visual para planeación de contenido en video y estructura narrativa para redes sociales.",
    src: assetPath("    social-media-video-storyboard-system.png"),
    alt: "Social media video storyboard system",
    format: "Content Planning",
    gridLabel: "SOCIAL VIDEO PLANNING SYSTEM",
    objective: "Mejorar claridad narrativa y producción de contenido audiovisual.",
    role: "Conceptualización visual y estructura narrativa.",
    tools: "Photoshop · Canva · CapCut",
    channel: "Social Media / Video Content",
  },
  {
    title: "Dulce Felicidad — Shopify Product Catalog",
    caption: "Desarrollo visual y estructural de ecommerce para catálogo digital, contenido comercial y organización de productos dentro de Shopify.",
    src: assetPath("shopify-product-catalog-design-dulce-felicidad.png"),
    alt: "Dulce Felicidad Shopify product catalog design",
    format: "Ecommerce Content System",
    gridLabel: "ECOMMERCE CONTENT · SHOPIFY",
    objective: "Mejorar experiencia visual, navegación y comunicación de productos para entorno ecommerce.",
    role: "Diseño visual, estructura de contenido y configuración de catálogo digital.",
    tools: "Shopify · Photoshop · Canva",
    channel: "Ecommerce · Social Media",
  },
  {
    title: "Dulce Felicidad — LinkedIn Content Design",
    caption: "Contenido social para presencia profesional.",
    src: assetPath("linkedin-content-design-dulce-felicidad.png"),
    alt: "Dulce Felicidad LinkedIn content design",
    format: "Social Media Content / LinkedIn",
    gridLabel: "LINKEDIN CONTENT · SOCIAL MEDIA",
    objective: "Comunicar oferta, marca y presencia digital con piezas orientadas a lectura profesional.",
    role: "Diseño de contenido, adaptación de mensaje y consistencia visual.",
    tools: "Canva · Photoshop · LinkedIn",
    channel: "LinkedIn / Social Media",
  },
  {
    slug: "real-banquetes-editorial-branding",
    title: "Real Banquetes — Editorial Branding",
    caption:
      "Branding and editorial material design for a hospitality and catering concept, including menu design, flyers, promotional print assets, packaging applications, and visual identity materials.",
    cardSummary: "Editorial branding and print materials for a hospitality concept.",
    src: assetPath("real-banquetes-editorial-branding.png"),
    alt: "Real Banquetes editorial branding and print materials",
    format: "Editorial Branding & Print Materials",
    gridLabel: "BRANDING · EDITORIAL · PRINT",
    objective: "Crear una identidad visual editorial y materiales impresos premium para una propuesta de banquetes y hospitalidad.",
    role: "Diseño de branding, materiales editoriales, aplicaciones impresas y piezas promocionales.",
    tools: "Photoshop · Illustrator · Canva",
    channel: "Print / Hospitality / Food Design",
    tags: ["Branding", "Editorial", "Print", "Food Design", "Hospitality"],
  },
  {
    title: "Mantle Puebla — Event Promotion",
    caption: "Campaña visual para difusión de evento y comunicación de comunidad Web3 en plataformas sociales.",
    src: assetPath("social-media-event-campaign-mantle-puebla.png"),
    alt: "Mantle Puebla social media event campaign",
    format: "Social Campaign",
    gridLabel: "MULTI-PLATFORM PROMOTIONAL CONTENT",
    objective: "Generar awareness y difusión de evento para comunidad digital.",
    role: "Diseño visual y adaptación de contenido promocional.",
    tools: "Canva · Photoshop",
    channel: "X · LinkedIn · Instagram",
  },
  {
    title: "Travel VYP — Social Media Campaign",
    caption: "Contenido visual para campañas promocionales y comunicación digital enfocada en turismo y difusión comercial.",
    src: assetPath("    travel-agency-social-media-campaign.png"),
    alt: "Travel agency social media campaign",
    format: "Social Media Campaign",
    gridLabel: "SOCIAL MEDIA CAMPAIGN · FACEBOOK / INSTAGRAM",
    objective: "Mejorar presencia visual y consistencia de contenido para redes sociales.",
    role: "Diseño de contenido y adaptación visual para campañas digitales.",
    tools: "Photoshop · Illustrator",
    channel: "Facebook · Instagram",
  },
  {
    title: "Sol & Mar — Facebook Travel Campaign",
    caption: "Campaña visual para promoción turística en redes sociales, diseñada bajo lineamientos visuales y restricciones de texto para campañas en Facebook Ads.",
    src: assetPath("facebook-travel-campaign-hotel-matices.png"),
    alt: "Hotel Matices Facebook travel campaign",
    format: "Social Media Campaign / Facebook Ads",
    gridLabel: "FACEBOOK ADS · SOCIAL MEDIA CAMPAIGN",
    objective: "Mejorar captación visual y comunicación comercial para promociones de temporada.",
    role: "Diseño promocional y adaptación para pauta digital.",
    tools: "Photoshop · Meta Ads · Facebook",
    channel: "Facebook Ads · Social Media",
  },
  {
    title: "Tuksa — Travel Marketing Digital Campaign",
    caption: "Sistema visual para contenido turístico y comunicación multi-formato, incluyendo medios impresos, banners promocionales, piezas para redes sociales, comunicación vía correo y adaptación de mascota para campañas estacionales.",
    src: assetPath("travel-marketing-digital-campaign-tuksa.png"),
    alt: "Tuksa travel marketing digital campaign",
    format: "Tourism Content System",
    gridLabel: "TOURISM CONTENT · SOCIAL / EMAIL / PRINT",
    objective: "Mantener consistencia visual y fortalecer relación con clientes mediante contenido recurrente y promocional.",
    role: "Diseño visual, adaptación multi-formato y comunicación promocional.",
    tools: "Photoshop · Illustrator",
    channel: "Social Media · Email · Print",
  },
  {
    title: "Lytryum — Educational NFT Collection",
    caption: "Sistema visual de NFTs educativos para certificaciones digitales, incluyendo clasificación, taxonomía visual y definición de características cualitativas para assets del ecosistema Lytryum.",
    src: assetPath("ai-generated-nft-collection-lytryum.jpg"),
    alt: "Lytryum AI generated NFT collection",
    format: "Educational NFT Collection",
    gridLabel: "DIGITAL ASSETS · COMMUNITY / WEB3",
    objective: "Apoyar engagement y estructura visual del sistema de certificaciones digitales.",
    role: "Dirección visual, conceptualización y generación de assets NFT.",
    tools: "Midjourney · Photoshop · IA Generativa",
    channel: "Community · Digital Assets",
  },
  {
    title: "Fidex — Digital Product Support",
    caption: "Sistema visual para dashboards financieros enfocado en organización responsive de información, layouts modulares, modales y experiencia dark/light para producto digital.",
    src: assetPath("fintech-dashboard-ui-system-fidex.png"),
    alt: "Fidex fintech dashboard UI system",
    format: "UI / Fintech System",
    gridLabel: "UI PRODUCT SUPPORT · FINTECH",
    objective: "Mejorar claridad visual y estructura de información financiera en múltiples dispositivos.",
    role: "Diseño UI, layouts responsive y estructura visual de componentes.",
    tools: "Figma · Framer · Photoshop",
    channel: "UI / Product",
  },
  {
    title: "Phronesis — Learning Platform System",
    caption: "Sistema visual para plataforma educativa enfocado en síntesis de información, layouts editoriales, modales y organización visual de contenido para experiencia de aprendizaje digital.",
    src: assetPath("web3-learning-platform-ui-system-phronesis.png"),
    alt: "Phronesis Web3 learning platform UI system",
    format: "Learning Platform System",
    gridLabel: "LEARNING PLATFORM · UI / CONTENT",
    objective: "Mejorar claridad educativa y estructura visual de contenido complejo.",
    role: "Diseño UI, organización editorial y síntesis visual de información.",
    tools: "Figma · Framer · Photoshop",
    channel: "UI / Educational Platform",
  },
  {
    title: "Colegio Samuel Juárez — Brand Identity System",
    caption: "Manual de identidad visual y sistema gráfico institucional para comunicación digital e impresa.",
    src: assetPath("    school-brand-guidelines-design.png"),
    alt: "School brand guidelines design",
    format: "Brand Identity System",
    gridLabel: "BRAND GUIDELINES · INSTITUTIONAL",
    objective: "Establecer lineamientos visuales consistentes para la institución.",
    role: "Diseño editorial y sistema visual de marca.",
    tools: "Illustrator · Photoshop · InDesign",
    channel: "Brand Guidelines / Print",
  },
  {
    title: "Coquito — Bakery Brand Identity",
    caption: "Identidad visual para marca de repostería.",
    src: assetPath("bakery-brand-identity-design-coquito.png"),
    alt: "Coquito bakery brand identity design",
    format: "Brand Identity / comunicación visual",
    gridLabel: "BRAND IDENTITY · SOCIAL / DIGITAL",
    objective: "Definir una base visual reconocible para comunicación comercial y presencia digital.",
    role: "Diseño de identidad, sistema visual y aplicaciones de marca.",
    tools: "Illustrator · Photoshop · Canva",
    channel: "Branding / Social Media / Material digital",
  },
  {
    title: "Bitcoin Payment Sign — Print Design",
    caption: "Señalización para comunicación comercial.",
    src: assetPath("bitcoin-payment-sign-print-design.png"),
    alt: "Bitcoin payment sign print design",
    format: "Material impreso / señalización",
    gridLabel: "PRINT SIGNAGE · POINT OF SALE",
    objective: "Comunicar aceptación de pago cripto de forma clara en punto de contacto físico.",
    role: "Diseño de pieza informativa y adaptación para impresión.",
    tools: "Illustrator · Photoshop",
    channel: "Punto de venta / Material impreso",
  },
  {
    title: "Criptocina — Restaurant Branding Design",
    caption: "Sistema visual para restaurante cripto.",
    src: assetPath("crypto-restaurant-branding-design.png"),
    alt: "Crypto restaurant branding design",
    format: "Branding / sistema visual",
    gridLabel: "BRANDING SYSTEM · SOCIAL / COMMERCIAL",
    objective: "Organizar identidad y comunicación visual para una marca gastronómica con narrativa Web3.",
    role: "Diseño de sistema visual, piezas de marca y aplicaciones de comunicación.",
    tools: "Illustrator · Photoshop · Canva",
    channel: "Branding / Social Media / Material comercial",
  },
  {
    title: "Colegio Samuel Juárez — Brand Identity System",
    caption: "Manual de identidad visual y sistema gráfico institucional para comunicación digital e impresa.",
    src: assetPath("school-brand-guidelines.jpeg"),
    alt: "Colegio Samuel Juárez brand guidelines preview",
    format: "Brand Identity System",
    gridLabel: "PDF BRAND MANUAL · GUIDELINES",
    objective: "Establecer lineamientos visuales consistentes para la institución.",
    role: "Diseño editorial y sistema visual de marca.",
    tools: "Illustrator · Photoshop · InDesign",
    channel: "Brand Guidelines / Print",
    actionLabel: "Ver manual",
    actionHref: assetPath("colegio-samuel-juarez-brand-guidelines.pdf"),
  },
];

export const Experience = () => {
  const [activeAsset, setActiveAsset] = useState<PortfolioAsset | null>(null);

  useEffect(() => {
    if (!activeAsset) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveAsset(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeAsset]);

  return (
    <>
      <section id="content-video" className="relative overflow-hidden border-t border-hairline py-20 lg:py-28">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-grain opacity-20" />

        <div className="container">
          <div className="mb-10 flex items-center justify-between border-b border-hairline pb-5 text-xs uppercase tracking-[0.22em] text-muted-foreground">
            <span>05 · Contenido y video</span>
            <span className="hidden sm:inline">Campañas · Reels · Sistemas editoriales</span>
          </div>

          <div className="mb-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.98] tracking-normal text-balance sm:text-5xl lg:col-span-8 lg:text-6xl">
              Contenido y video
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground lg:col-span-3 lg:col-start-10">
              Reels educativos, campañas sociales, sistemas editoriales y assets de marca listos para revisar por formato.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {assets.map((item) => {
              const isVideo = item.type === "video";

              return (
                <article key={`${item.title}-${item.src}`} className="group border-t border-hairline py-5 transition-colors duration-700 hover:border-accent/25">
                  <button type="button" onClick={() => setActiveAsset(item)} className="block w-full text-left" aria-label={`Abrir ficha: ${item.title}`}>
                    <div className="mb-4 aspect-[4/3] w-full overflow-hidden rounded-[1.15rem] border border-hairline bg-surface/15 transition-colors duration-700 group-hover:border-white/15">
                      {isVideo ? (
                        <video
                          src={item.src}
                          muted
                          playsInline
                          preload="metadata"
                          className="h-full max-h-[18rem] w-full bg-background/55 object-cover opacity-[0.94] transition-opacity duration-700 group-hover:opacity-100 sm:max-h-[19rem]"
                          aria-label={item.title}
                        />
                      ) : (
                        <img
                          src={item.src}
                          alt={item.alt}
                          loading="lazy"
                          decoding="async"
                          width={900}
                          height={700}
                          className="h-full w-full object-cover opacity-[0.94] transition-opacity duration-700 group-hover:opacity-100"
                        />
                      )}
                    </div>
                  </button>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="mt-2 font-display text-lg leading-tight text-foreground transition-colors duration-700 group-hover:text-foreground">{item.title}</h3>
                      <p className="mt-2 text-[10px] uppercase tracking-[0.16em] text-accent/85">{item.gridLabel ?? item.format}</p>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground transition-colors duration-700 group-hover:text-foreground/72">
                        {item.cardSummary ?? item.caption}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setActiveAsset(item)}
                      className="mt-1 grid h-9 w-9 flex-none place-items-center rounded-full border border-hairline bg-surface/20 text-accent/80 transition-colors duration-700 hover:border-accent/30 hover:text-foreground group-hover:border-accent/25 group-hover:text-accent"
                      aria-label={`Abrir ficha de ${item.title}`}
                    >
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-10 border-t border-hairline pt-6 text-sm text-muted-foreground/82">
            <span className="inline-flex items-center gap-2">
              <LineChart className="h-4 w-4 text-accent" aria-hidden="true" />
              Producción pensada para canales, consistencia editorial y lectura rápida de resultados.
            </span>
          </div>
        </div>
      </section>

      {activeAsset ? <AssetLightbox asset={activeAsset} onClose={() => setActiveAsset(null)} /> : null}
    </>
  );
};

const AssetLightbox = ({ asset, onClose }: { asset: PortfolioAsset; onClose: () => void }) => {
  const isVideo = asset.type === "video";
  const actionLabel = asset.actionLabel ?? "Ver manual";

  return (
    <div
      className="fixed inset-0 z-[80] flex items-end justify-center px-4 py-4 backdrop-blur-[2px] sm:items-center sm:px-6"
      style={{ backgroundColor: "rgb(0 0 0 / 0.92)" }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="asset-lightbox-title"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="max-h-[92vh] w-full max-w-7xl overflow-y-auto rounded-[1.25rem] border border-hairline bg-[#080808] shadow-soft">
        <div className="flex items-center justify-between border-b border-hairline px-5 py-4 sm:px-6">
          <p className="text-[11px] uppercase tracking-[0.22em] text-foreground/58">Ficha de contenido</p>
          <button
            type="button"
            onClick={onClose}
            className="grid h-9 w-9 place-items-center rounded-full border border-hairline bg-surface/18 text-foreground/78 transition-colors hover:border-accent/30 hover:text-foreground"
            aria-label="Cerrar vista"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        <div className="grid grid-cols-1 gap-0 lg:grid-cols-2">
          <div className="flex items-center border-b border-hairline bg-black/34 p-3 lg:min-h-[34rem] lg:border-b-0 lg:border-r lg:p-6">
            {isVideo ? (
              <video
                src={asset.src}
                controls
                playsInline
                preload="metadata"
                className="max-h-[64vh] w-full rounded-[1rem] bg-background object-contain lg:max-h-[32rem]"
                aria-label={asset.title}
              />
            ) : (
              <img
                src={asset.src}
                alt={asset.alt}
                loading="eager"
                decoding="async"
                className="max-h-[64vh] w-full rounded-[1rem] bg-background object-contain lg:max-h-[32rem]"
              />
            )}
          </div>

          <div className="flex flex-col justify-between gap-7 p-6 lg:p-9">
            <div className="space-y-6">
              <div className="space-y-3 border-b border-hairline pb-5">
                <h3 id="asset-lightbox-title" className="font-display text-2xl leading-tight text-foreground text-pretty sm:text-3xl">
                  {asset.title}
                </h3>
                <div className="space-y-2">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-accent">{asset.format}</p>
                  <p className="text-sm leading-relaxed text-foreground/72">{asset.caption}</p>
                </div>
              </div>

              <div className="space-y-5 text-sm">
                <AssetMeta label="Objetivo" value={asset.objective} />
                <AssetMeta label="Rol" value={asset.role} />
                {asset.tools ? <AssetMeta label="Herramientas" value={asset.tools} /> : null}
                <AssetMeta label="Canal / plataforma" value={asset.channel} />
                {asset.tags ? <AssetMeta label="Tags" value={asset.tags.join(" · ")} /> : null}
                {asset.publicReference ? (
                  <AssetReference label={asset.publicReference.label} linkLabel={asset.publicReference.linkLabel} href={asset.publicReference.href} />
                ) : null}
                {asset.results ? <AssetMeta label="Resultados" value={asset.results} /> : null}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {asset.actionHref ? (
                <a
                  href={asset.actionHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-colors hover:bg-accent-soft"
                >
                  {actionLabel}
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              ) : null}
              <button
                type="button"
                onClick={onClose}
                className="inline-flex items-center gap-2 rounded-full border border-hairline bg-transparent px-5 py-3 text-sm text-foreground/72 transition-colors hover:border-accent/30 hover:text-foreground"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AssetMeta = ({ label, value }: { label: string; value: string }) => (
  <div>
    <dt className="text-[10px] uppercase tracking-[0.18em] text-foreground/48">{label}</dt>
    <dd className="mt-2 break-words leading-relaxed text-foreground/84">{value}</dd>
  </div>
);

const AssetReference = ({ label, linkLabel, href }: { label: string; linkLabel?: string; href: string }) => (
  <div className="space-y-2 border-t border-hairline pt-4">
    <p className="text-[10px] uppercase tracking-[0.18em] text-foreground/42">{label}</p>
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="text-xs leading-relaxed text-foreground/54 underline decoration-foreground/18 underline-offset-4 transition-colors hover:text-foreground/78 hover:decoration-foreground/40"
    >
      {linkLabel ?? href}
    </a>
  </div>
);

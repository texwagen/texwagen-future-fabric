import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";

const items = [
  { src: g1, title: "Vestido Plissé · SS26", tag: "Couture", span: "md:col-span-7 md:row-span-2", h: "h-[640px]" },
  { src: g2, title: "Estudo · Ember Fold", tag: "Macro", span: "md:col-span-5", h: "h-[300px]" },
  { src: g3, title: "Godê em Movimento", tag: "Runway", span: "md:col-span-5", h: "h-[320px]" },
  { src: g4, title: "Strass · Detalhe Joia", tag: "Aplicação", span: "md:col-span-12", h: "h-[420px]" },
];

function Tile({ item, i }: { item: (typeof items)[number]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <motion.figure
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative ${item.span} ${item.h} overflow-hidden rounded-xl`}
    >
      <motion.img
        src={item.src}
        alt={item.title}
        loading="lazy"
        style={{ y }}
        className="absolute inset-0 h-[120%] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" />
      <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            {item.tag}
          </div>
          <div className="mt-1 font-display text-2xl tracking-tight md:text-3xl">
            {item.title}
          </div>
        </div>
        <span className="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-sm transition group-hover:border-white/60 group-hover:bg-white/5">
          ↗
        </span>
      </figcaption>
    </motion.figure>
  );
}

export function Gallery() {
  return (
    <section id="gallery" className="relative isolate py-32 md:py-44">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <span className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
              <span className="h-px w-8 bg-spectrum" />
              Coleção
            </span>
            <h2 className="mt-6 font-display text-5xl leading-[0.95] tracking-tight md:text-7xl">
              Editorial
              <br />
              <span className="italic text-spectrum">contínuo.</span>
            </h2>
          </div>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.22em] text-muted-foreground transition hover:text-foreground"
          >
            Arquivo completo
            <span className="transition group-hover:translate-x-1">→</span>
          </a>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-12">
          {items.map((it, i) => (
            <Tile key={it.title} item={it} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

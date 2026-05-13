import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { images } from "@/config/images";

const img = images.immersive;

export function Immersive() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-4, 4]);
  const y = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const blur = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [12, 0, 0, 12]);

  return (
    <section ref={ref} className="relative isolate h-[140vh] overflow-clip">
      <div className="sticky top-0 flex h-[100svh] items-center overflow-hidden">
        <motion.img
          src={img}
          alt="Detalhe macro de plissado têxtil profissional"
          loading="lazy"
          style={{
            scale,
            rotate,
            y,
            filter: useTransform(blur, (v) => `blur(${v}px)`),
          }}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-background/60" />

        <div className="relative mx-auto w-full max-w-7xl px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="max-w-2xl"
          >
            <span className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
              <span className="h-px w-8 bg-spectrum" />
              Manifesto
            </span>
            <h2 className="mt-6 font-display text-5xl leading-[0.95] tracking-tight md:text-7xl">
              O tecido <span className="italic text-spectrum">respira.</span>
              <br />Nós só damos forma.
            </h2>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-foreground/80">
              Plissar é negociar com o material — pressão, calor e tempo
              ajustados ao milímetro. O resultado é um movimento que parece
              líquido, mas se mantém arquitetônico.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

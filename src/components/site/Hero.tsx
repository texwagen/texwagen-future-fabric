import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import hero from "@/assets/hero-fabric.jpg";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative grain isolate flex h-[100svh] min-h-[720px] w-full items-end overflow-hidden"
    >
      {/* Backdrop image with parallax */}
      <motion.div style={{ y, scale }} className="absolute inset-0 -z-20">
        <img
          src={hero}
          alt="Tecido plissado em luz cinematográfica"
          className="h-full w-full object-cover opacity-80"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-veil" />
      </motion.div>

      {/* Aurora glow */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-aurora animate-aurora" />

      {/* Floating fabric-fold lines */}
      <svg
        aria-hidden
        className="absolute inset-0 -z-10 h-full w-full opacity-[0.18] mix-blend-screen"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="line" x1="0" x2="1">
            <stop offset="0" stopColor="oklch(0.68 0.22 250)" />
            <stop offset="0.5" stopColor="oklch(0.62 0.30 340)" />
            <stop offset="1" stopColor="oklch(0.85 0.17 90)" />
          </linearGradient>
        </defs>
        {Array.from({ length: 14 }).map((_, i) => (
          <motion.path
            key={i}
            d={`M -50 ${120 + i * 55} Q 720 ${60 + i * 55} 1490 ${180 + i * 55}`}
            stroke="url(#line)"
            strokeWidth="0.8"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2.4, delay: 0.3 + i * 0.06, ease: "easeOut" }}
          />
        ))}
      </svg>

      {/* Top eyebrow */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="absolute left-6 top-24 z-10 flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-muted-foreground md:left-10"
      >
        <span className="h-px w-8 bg-spectrum" />
        Atelier · Est. 2008 · São Paulo
      </motion.div>

      {/* Main copy */}
      <motion.div
        style={{ y: titleY, opacity }}
        className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 md:px-10 md:pb-28"
      >
        <div className="max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-pretty font-display text-[14vw] leading-[0.92] tracking-[-0.04em] md:text-[8.5vw]"
          >
            Plissados de
            <br />
            <span className="italic text-spectrum">alto padrão.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="mt-8 max-w-md text-balance text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            Transformamos tecido em arquitetura. Cada dobra é desenhada,
            calibrada e fixada por especialistas — para coleções que pedem
            precisão escultural.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#services"
              className="group relative inline-flex h-12 items-center gap-3 overflow-hidden rounded-full px-7 text-[12px] uppercase tracking-[0.22em]"
            >
              <span className="absolute inset-0 rounded-full bg-spectrum" />
              <span className="absolute inset-[1.5px] rounded-full bg-background transition group-hover:bg-transparent" />
              <span className="relative text-foreground transition group-hover:text-background">
                Explorar técnicas
              </span>
            </a>
            <a
              href="#gallery"
              className="group inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.22em] text-muted-foreground transition hover:text-foreground"
            >
              <span className="relative grid h-9 w-9 place-items-center rounded-full border border-white/15 transition group-hover:border-white/40">
                ▶
              </span>
              Ver coleção
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Side meta */}
      <div className="absolute right-6 bottom-10 z-10 hidden flex-col items-end gap-3 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground md:flex md:right-10">
        <span>N. 001 / Coleção contínua</span>
        <span className="h-10 w-px bg-gradient-to-b from-transparent via-white/40 to-transparent" />
        <span>Scroll ↓</span>
      </div>
    </section>
  );
}

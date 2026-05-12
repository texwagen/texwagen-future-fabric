import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import type { MouseEvent } from "react";
import { images } from "@/config/images";

const services = [
  { n: "01", title: "Plissado Faca · Tam 1", desc: "Dobras milimétricas para silhuetas estruturadas. Acabamento técnico fino.", tag: "Precisão", img: images.service1 },
  { n: "02", title: "Plissado Faca · Tam 2", desc: "Equilíbrio entre rigidez escultural e fluidez do caimento.", tag: "Médio porte", img: images.service2 },
  { n: "03", title: "Plissado Faca · Tam 3", desc: "Pregas amplas para statement pieces e moda autoral.", tag: "Editorial", img: images.service3 },
  { n: "04", title: "Plissado Godê", desc: "Pregas radiais que abrem em movimento — assinatura da casa.", tag: "Movimento", img: images.service4 },
  { n: "05", title: "Aplicação DTF", desc: "Seu DTF aplicado com máxima precisão em qualquer tecido.", tag: "Imagem", img: images.service5 },
  { n: "06", title: "Aplicação de Strass", desc: "Strass aplicado com perfeição milimétrica e acabamento impecável.", tag: "Brilho", img: images.service6 },
];

function Card({ s, i }: { s: (typeof services)[number]; i: number }) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-50, 50], [6, -6]), { stiffness: 120, damping: 14 });
  const ry = useSpring(useTransform(mx, [-50, 50], [-6, 6]), { stiffness: 120, damping: 14 });
  const gx = useTransform(mx, (v) => `${50 + v}%`);
  const gy = useTransform(my, (v) => `${50 + v}%`);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width) * 100 - 50);
    my.set(((e.clientY - r.top) / r.height) * 100 - 50);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.div
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1200 }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative h-[440px] overflow-hidden rounded-2xl border border-white/8 glass [transform-style:preserve-3d]"
    >
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={s.img}
          alt={s.title}
          loading="lazy"
          width={1024}
          height={1024}
          className="h-full w-full object-cover opacity-50 transition duration-[1200ms] ease-out group-hover:scale-105 group-hover:opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/30" />
      </div>
      <motion.div
        aria-hidden
        style={{
          background: `radial-gradient(420px circle at ${gx.get()} ${gy.get()}, color-mix(in oklab, var(--violet) 28%, transparent), transparent 60%)`,
        }}
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
      <div className="border-spectrum pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative flex h-full flex-col justify-between p-7">
        <div className="flex items-start justify-between">
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
            {s.n} / 06
          </span>
          <span className="rounded-full border border-white/15 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            {s.tag}
          </span>
        </div>

        <div>
          <h3 className="font-display text-3xl leading-tight tracking-tight md:text-[2rem]">
            {s.title}
          </h3>
          <p className="mt-4 max-w-[28ch] text-sm leading-relaxed text-muted-foreground">
            {s.desc}
          </p>
          <a href="#contact" className="mt-7 flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-foreground/80 transition group-hover:text-foreground">
            Solicitar amostra
            <span className="transition group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export function Services() {
  return (
    <section id="services" className="relative isolate py-32 md:py-44">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <span className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
              <span className="h-px w-8 bg-spectrum" />
              Técnicas
            </span>
            <h2 className="mt-6 font-display text-5xl leading-[0.95] tracking-tight md:text-7xl">
              Seis ofícios.
              <br />
              <span className="italic text-spectrum">Um padrão.</span>
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-muted-foreground">
            Cada técnica é desenvolvida para um propósito construtivo
            específico. Combine-as para criar peças que vivem entre engenharia
            e poesia.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Card key={s.n} s={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

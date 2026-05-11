import { motion } from "motion/react";

const stats = [
  { k: "17+", v: "Anos de atelier" },
  { k: "240", v: "Marcas atendidas" },
  { k: "6", v: "Técnicas autorais" },
  { k: "∞", v: "Possibilidades de dobra" },
];

export function About() {
  return (
    <section id="about" className="relative isolate overflow-hidden py-32 md:py-44">
      <div aria-hidden className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-12 md:px-10">
        <div className="md:col-span-5">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-muted-foreground"
          >
            <span className="h-px w-8 bg-spectrum" />
            Atelier
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-display text-5xl leading-[0.95] tracking-tight md:text-7xl"
          >
            Tecido como
            <br />
            <span className="italic text-spectrum">linguagem.</span>
          </motion.h2>
        </div>

        <div className="md:col-span-7 md:pl-10">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.1 }}
            className="text-balance text-lg leading-relaxed text-foreground/80 md:text-xl"
          >
            A TexWagen nasceu da obsessão por uma única pergunta —
            <span className="text-foreground"> o que acontece quando o tecido vira arquitetura?</span>
            {" "}Hoje, somos referência em plissagem técnica, godê escultural e
            beneficiamentos de alta performance para algumas das marcas mais
            exigentes da moda contemporânea.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-6 text-base leading-relaxed text-muted-foreground"
          >
            Da modelagem da faca à fixação térmica, cada peça atravessa um
            protocolo silencioso e exato — onde tecnologia, mão e tempo se
            alinham para produzir o que chamamos de luxo verdadeiro.
          </motion.p>

          <div className="mt-14 grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.v}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 * i }}
                className="border-l border-white/10 pl-4"
              >
                <div className="font-display text-4xl text-spectrum md:text-5xl">{s.k}</div>
                <div className="mt-2 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  {s.v}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { motion } from "motion/react";

const items: [string, string, string?][] = [
  ["Endereço", "Rua Philipp Bauler, 420 — Salto, Blumenau"],
  ["E-mail", "texwagen@gmail.com", "mailto:texwagen@gmail.com"],
  ["WhatsApp", "+55 47 99267-0703", "https://wa.me/5547992670703"],
];

export function Contact() {
  return (
    <section id="contact" className="relative isolate overflow-hidden py-32 md:py-44">
      <div aria-hidden className="absolute inset-0 -z-10 bg-aurora opacity-60" />
      <div aria-hidden className="absolute inset-x-10 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-12 md:px-10">
        <div className="md:col-span-5">
          <span className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
            <span className="h-px w-8 bg-spectrum" />
            Contato
          </span>
          <h2 className="mt-6 font-display text-5xl leading-[0.95] tracking-tight md:text-7xl">
            Vamos
            <br />
            <span className="italic text-spectrum">criar algo.</span>
          </h2>
          <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground">
            Atendemos coleções autorais, marcas premium e projetos especiais.
            Fale diretamente com a TexWagen pelos canais ao lado — respondemos
            em até 24h.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative md:col-span-7"
        >
          <div className="relative rounded-2xl border border-white/8 glass p-8 md:p-12">
            <div className="border-spectrum pointer-events-none absolute inset-0 rounded-2xl opacity-50" />

            <dl className="relative space-y-8">
              {items.map(([k, v, href]) => (
                <div
                  key={k}
                  className="group flex flex-col gap-2 border-b border-white/8 pb-6 last:border-0 last:pb-0 md:flex-row md:items-center md:justify-between md:gap-8"
                >
                  <dt className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                    {k}
                  </dt>
                  <dd className="font-display text-2xl tracking-tight text-foreground md:text-3xl">
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel="noreferrer"
                        className="relative inline-block transition group-hover:text-spectrum"
                      >
                        {v}
                      </a>
                    ) : (
                      v
                    )}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="relative mt-12 flex flex-wrap items-center justify-between gap-4">
              <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                Resposta em até 24h
              </p>
              <a
                href="https://wa.me/5547992670703"
                target="_blank"
                rel="noreferrer"
                className="group relative inline-flex h-12 items-center gap-3 overflow-hidden rounded-full px-7 text-[12px] uppercase tracking-[0.22em]"
              >
                <span className="absolute inset-0 rounded-full bg-spectrum" />
                <span className="absolute inset-[1.5px] rounded-full bg-background transition group-hover:bg-transparent" />
                <span className="relative text-foreground transition group-hover:text-background">
                  Falar no WhatsApp
                </span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

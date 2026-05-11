import { motion } from "motion/react";

const items: { k: string; v: string; href?: string; sub?: string }[] = [
  {
    k: "Endereço",
    v: "Rua Philipp Bauler, 420",
    sub: "Testo Salto · Blumenau — SC",
    href: "https://maps.google.com/?q=Rua+Philipp+Bauler+420+Testo+Salto+Blumenau",
  },
  { k: "E-mail", v: "texwagen@gmail.com", href: "mailto:texwagen@gmail.com" },
  {
    k: "WhatsApp",
    v: "+55 47 99267-0703",
    sub: "Seg a Sex · 8h às 17h",
    href: "https://wa.me/5547992670703",
  },
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
          <div className="relative overflow-hidden rounded-2xl border border-white/8 glass p-8 md:p-12">
            <div className="border-spectrum pointer-events-none absolute inset-0 rounded-2xl opacity-50" />
            <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-spectrum opacity-20 blur-3xl" />

            <ul className="relative grid gap-5">
              {items.map(({ k, v, href, sub }, i) => {
                const Inner = (
                  <div className="relative flex items-start gap-5 rounded-xl border border-white/8 bg-white/[0.02] p-5 transition duration-500 hover:border-white/25 hover:bg-white/[0.04] md:p-6">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/15 font-mono text-[11px] text-muted-foreground transition group-hover:border-white/40 group-hover:text-foreground">
                      0{i + 1}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                        {k}
                      </div>
                      <div className="mt-2 truncate text-base leading-snug tracking-tight text-foreground md:text-lg">
                        {v}
                      </div>
                      {sub && (
                        <div className="mt-1 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                          {sub}
                        </div>
                      )}
                    </div>
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/15 text-sm transition group-hover:border-white/50 group-hover:bg-white/5 group-hover:translate-x-0.5">
                      ↗
                    </span>
                  </div>
                );

                return (
                  <li key={k} className="group">
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel="noreferrer"
                        className="block"
                      >
                        {Inner}
                      </a>
                    ) : (
                      Inner
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="relative mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/8 pt-8">
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

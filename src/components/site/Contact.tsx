import { motion } from "motion/react";
import { useState } from "react";

export function Contact() {
  const [sent, setSent] = useState(false);

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
            Conte-nos sobre a peça que você imagina — respondemos em até 24h.
          </p>

          <dl className="mt-12 space-y-5 text-sm">
            {[
              ["Atelier", "Rua das Dobras, 117 · São Paulo"],
              ["E-mail", "atelier@texwagen.com"],
              ["WhatsApp", "+55 11 9 0000 0000"],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between gap-6 border-b border-white/8 pb-4">
                <dt className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">{k}</dt>
                <dd className="text-foreground/90">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <motion.form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative md:col-span-7"
        >
          <div className="relative rounded-2xl border border-white/8 glass p-8 md:p-12">
            <div className="border-spectrum pointer-events-none absolute inset-0 rounded-2xl opacity-50" />

            <div className="grid gap-6 md:grid-cols-2">
              {[
                { l: "Nome", t: "text", n: "name" },
                { l: "E-mail", t: "email", n: "email" },
                { l: "Marca / Estúdio", t: "text", n: "brand" },
                { l: "Telefone", t: "tel", n: "phone" },
              ].map((f) => (
                <label key={f.n} className="block">
                  <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                    {f.l}
                  </span>
                  <input
                    type={f.t}
                    name={f.n}
                    className="mt-2 w-full border-0 border-b border-white/15 bg-transparent py-3 text-foreground outline-none transition focus:border-white/60"
                  />
                </label>
              ))}
            </div>

            <label className="mt-6 block">
              <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                Sobre o projeto
              </span>
              <textarea
                rows={4}
                name="message"
                className="mt-2 w-full resize-none border-0 border-b border-white/15 bg-transparent py-3 text-foreground outline-none transition focus:border-white/60"
              />
            </label>

            <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
              <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                {sent ? "Recebido — responderemos em breve." : "Resposta em até 24h"}
              </p>
              <button
                type="submit"
                disabled={sent}
                className="group relative inline-flex h-12 items-center gap-3 overflow-hidden rounded-full px-7 text-[12px] uppercase tracking-[0.22em] disabled:opacity-60"
              >
                <span className="absolute inset-0 rounded-full bg-spectrum" />
                <span className="absolute inset-[1.5px] rounded-full bg-background transition group-hover:bg-transparent" />
                <span className="relative text-foreground transition group-hover:text-background">
                  {sent ? "Enviado" : "Enviar briefing"}
                </span>
              </button>
            </div>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

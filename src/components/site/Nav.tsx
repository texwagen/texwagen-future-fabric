import { motion, useScroll, useTransform } from "motion/react";

const links = [
  { label: "Atelier", href: "#about" },
  { label: "Serviços", href: "#services" },
  { label: "Galeria", href: "#gallery" },
  { label: "Contato", href: "#contact" },
];

export function Nav() {
  const { scrollY } = useScroll();
  const blur = useTransform(scrollY, [0, 200], [0, 20]);
  const bg = useTransform(
    scrollY,
    [0, 200],
    ["rgba(0,0,0,0)", "color-mix(in oklab, var(--background) 70%, transparent)"]
  );

  return (
    <motion.header
      style={{ backdropFilter: useTransform(blur, (v) => `blur(${v}px) saturate(140%)`), backgroundColor: bg }}
      className="fixed inset-x-0 top-0 z-50 border-b border-transparent"
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-10">
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="relative inline-block h-6 w-6 overflow-hidden rounded-sm">
            <span className="absolute inset-0 bg-spectrum" />
            <span className="absolute inset-[2px] rounded-[2px] bg-background" />
            <span className="absolute inset-[6px] bg-spectrum" />
          </span>
          <span className="font-display text-xl tracking-tight">
            Tex<span className="text-spectrum">Wagen</span>
          </span>
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group relative text-[13px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-spectrum transition-all duration-500 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="group relative inline-flex h-10 items-center gap-2 overflow-hidden rounded-full px-5 text-[12px] uppercase tracking-[0.18em] text-foreground"
        >
          <span className="absolute inset-0 rounded-full border border-white/15 transition group-hover:border-white/40" />
          <span className="absolute inset-0 rounded-full bg-spectrum opacity-0 transition group-hover:opacity-100" />
          <span className="relative">Orçamento</span>
          <span className="relative transition-transform group-hover:translate-x-0.5">→</span>
        </a>
      </nav>
    </motion.header>
  );
}

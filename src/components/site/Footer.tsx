export function Footer() {
  return (
    <footer className="relative border-t border-white/8 px-6 py-12 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div className="flex items-center gap-3">
          <span className="relative inline-block h-5 w-5 overflow-hidden rounded-sm">
            <span className="absolute inset-0 bg-spectrum" />
            <span className="absolute inset-[2px] rounded-[2px] bg-background" />
            <span className="absolute inset-[5px] bg-spectrum" />
          </span>
          <span className="font-display text-lg">
            Tex<span className="text-spectrum">Wagen</span>
          </span>
        </div>

        <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
          © {new Date().getFullYear()} TexWagen Atelier — Todos os direitos reservados.
        </div>

        <div className="flex gap-6 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
          <a href="#" className="transition hover:text-foreground">Instagram</a>
          <a href="#" className="transition hover:text-foreground">Behance</a>
          <a href="#" className="transition hover:text-foreground">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}

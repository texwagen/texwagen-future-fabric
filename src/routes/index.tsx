import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Gallery } from "@/components/site/Gallery";
import { Immersive } from "@/components/site/Immersive";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { CursorGlow } from "@/components/site/Cursor";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TexWagen — Plissados de Alto Padrão" },
      {
        name: "description",
        content:
          "Atelier brasileiro de plissagem técnica, godê escultural e beneficiamentos premium para a moda autoral.",
      },
      { property: "og:title", content: "TexWagen — Luxury Textile Finishing" },
      {
        property: "og:description",
        content: "Transformando tecidos em arquitetura. Atelier de alta plissagem.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative bg-background text-foreground">
      <CursorGlow />
      <Nav />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Immersive />
      <Contact />
      <Footer />
    </main>
  );
}

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

const SITE_TITLE = "TexWagen | Plissado Têxtil e Acabamento para Confecções";
const SITE_DESCRIPTION =
  "Especialistas em plissado têxtil para confecções e marcas de moda. Trabalhamos com diversos tipos de plissado e acabamento têxtil.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: SITE_TITLE },
      { name: "description", content: SITE_DESCRIPTION },
      { name: "robots", content: "index, follow" },
      { name: "language", content: "pt-BR" },
      { name: "author", content: "TexWagen" },
      { name: "keywords", content: "plissado têxtil, plissado para confecções, acabamento têxtil, plissado godê, aplicação de DTF, aplicação de strass, plissagem, Blumenau" },

      // Open Graph (WhatsApp, Facebook, Instagram link previews)
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "TexWagen" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:title", content: SITE_TITLE },
      { property: "og:description", content: SITE_DESCRIPTION },
      { property: "og:url", content: "/" },
      { property: "og:image", content: "/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "TexWagen — Plissado têxtil e acabamento para confecções" },

      // Twitter / X
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: SITE_TITLE },
      { name: "twitter:description", content: SITE_DESCRIPTION },
      { name: "twitter:image", content: "/og-image.jpg" },
    ],
    links: [
      { rel: "canonical", href: "/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "TexWagen",
          description: SITE_DESCRIPTION,
          image: "/og-image.jpg",
          telephone: "+55 47 99267-0703",
          email: "texwagen@gmail.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Rua Philipp Bauler, 420",
            addressLocality: "Blumenau",
            addressRegion: "SC",
            addressCountry: "BR",
          },
          openingHours: "Mo-Fr 08:00-17:00",
          areaServed: "BR",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* Bloco semântico para SEO — lista de serviços/keywords */}
      <h2 className="sr-only">
        Plissado e acabamento têxtil profissional para confecções
      </h2>
      <ul className="sr-only">
        <li>Plissado para Confecções</li>
        <li>Acabamento Têxtil Profissional</li>
        <li>Desenvolvimento de Plissados</li>
        <li>Aplicação de DTF</li>
        <li>Aplicação de Strass</li>
        <li>Plissado Godê</li>
      </ul>

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
    </>
  );
}

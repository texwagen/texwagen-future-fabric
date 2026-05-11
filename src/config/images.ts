/* ============================================================================
 * TexWagen — Referência Central de Imagens
 * ----------------------------------------------------------------------------
 * Este arquivo concentra TODAS as imagens utilizadas no site.
 * Para trocar uma foto:
 *   1. Coloque o novo arquivo em `src/assets/` (ex: `src/assets/minha-foto.jpg`)
 *   2. Atualize o import correspondente abaixo
 *   3. Salve — a imagem será substituída em todos os locais automaticamente
 *
 * Onde cada imagem aparece:
 *   • hero        → Seção Hero (topo da página, fundo cinematográfico)
 *   • immersive   → Seção Manifesto (imagem sticky com parallax)
 *   • gallery1    → Galeria · destaque grande "Vestidos Plissados"
 *   • gallery2    → Galeria · macro "Dobras Milimétricas"
 *   • gallery3    → Galeria · "Godê em Movimento"
 *   • gallery4    → Galeria · banner largo "Strass · Detalhe Joia"
 *   • service1..6 → Cards da seção Serviços (uma por técnica)
 * ========================================================================== */

import hero from "@/assets/hero-fabric.jpg";
import immersive from "@/assets/immersive.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import service1 from "@/assets/service-1.jpg";
import service2 from "@/assets/service-2.jpg";
import service3 from "@/assets/service-3.jpg";
import service4 from "@/assets/service-4.png";
import service5 from "@/assets/service-5.jpg";
import service6 from "@/assets/service-6.jpg";

export const images = {
  hero,
  immersive,
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  service1,
  service2,
  service3,
  service4,
  service5,
  service6,
} as const;

export type ImageKey = keyof typeof images;

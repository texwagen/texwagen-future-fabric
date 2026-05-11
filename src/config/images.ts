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
 * ========================================================================== */

import hero from "@/assets/hero-fabric.jpg";
import immersive from "@/assets/immersive.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

export const images = {
  hero,
  immersive,
  gallery1,
  gallery2,
  gallery3,
  gallery4,
} as const;

export type ImageKey = keyof typeof images;

import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    prerender: {
      enabled: true,
      crawlLinks: true,
      retryCount: 1,
      outputPath: "index.html",
    },
    pages: [{ path: "/", prerender: { enabled: true, outputPath: "index.html" } }],
  },
});

import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [vue()],
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
  vite: {
    build: {
      sourcemap: true,
      rollupOptions: {
        output: {
          entryFileNames: "entry.[hash].js",
          chunkFileNames: "chunk.[hash].js",
          assetFileNames: "asset.[hash][extname]",
        },
      },
    },
  },
});

import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: [
        "src/data/movabletype.ts",
        "src/data/movabletype_net.ts",
        "src/data/powercms.ts",
        "src/data/powercms_x.ts",
        "src/mtml.ts",
      ],
    },
  },
});

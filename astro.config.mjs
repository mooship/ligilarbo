import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import playformCompress from "@playform/compress";
import playformInline from "@playform/inline";

export default defineConfig({
  integrations: [sitemap(), playformCompress(), playformInline()],
  site: "https://timothybrits.com/",
});

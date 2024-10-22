import { netlifyPlugin } from "@netlify/remix-adapter/plugin"
import { vitePlugin as remix } from "@remix-run/dev"
import { resolve } from "path"
import { defineConfig } from "vite"
import tsconfigPaths from "vite-tsconfig-paths"

export default defineConfig({
  plugins: [remix(), netlifyPlugin(), tsconfigPaths()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./app"),
      ui: resolve(__dirname, "./app/components/ui/index.ts")
    }
  }
})

import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// Static mode, as the ohmyho.st TanStack guide describes: prerender on, no Cloudflare plugin.
export default defineConfig({
  plugins: [tanstackStart({ prerender: { enabled: true } }), react()],
});

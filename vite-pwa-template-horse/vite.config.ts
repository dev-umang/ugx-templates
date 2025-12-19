import { type PluginOption, defineConfig, loadEnv } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import Paths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import validateDevelopment from "./plugins/vite-plugin-validate-development";

const plugins: PluginOption[] = [
  react(),
  Paths(),
  tailwindcss(),
  VitePWA({
    registerType: "autoUpdate",
    injectRegister: false,
    pwaAssets: {
      disabled: false,
      config: false,
    },
    minify: false,
    manifest: {
      name: "GTX Tenant Admin",
      short_name: "GTX Tenant",
      description:
        "Application to view tenant information and manage tenant settings for GT-X Project.",
      theme_color: "#ffffff",
    },

    workbox: {
      globPatterns: ["**/*.{js,css,html,svg,png,ico}"],
      cleanupOutdatedCaches: true,
      clientsClaim: true,
      maximumFileSizeToCacheInBytes: 20 * 1024 * 1024, // 10 MiB
    },

    devOptions: {
      enabled: false,
      navigateFallback: "index.html",
      suppressWarnings: true,
      type: "module",
    },
  }),
];

export default defineConfig(async ({ mode, command }) => {
  const env = loadEnv(mode, process.cwd()); // Load env file according to mode.
  const port = Number(env.VITE_PORT ?? 3000); // Get the PORT from env or 3000 if not available
  if (command === "serve") await validateDevelopment();
  return {
    plugins,
    build: {
      outDir: `build`,
      emptyOutDir: false,
      sourcemap: false,
      cssCodeSplit: true,
    },
    server: {
      host: true,
      port,
    },
  };
});

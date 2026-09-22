import vue from "@vitejs/plugin-vue";
import { defineConfig, Plugin } from "vite";
import tailwindcss from "@tailwindcss/vite";
import fs from "fs/promises";
import path from "path";

// Custom plugin to copy markdown files to dist
function copyMarkdownFiles(): Plugin {
  return {
    name: "copy-markdown-files",
    async closeBundle() {
      const srcDir = path.resolve(import.meta.dirname, "src/content/topics");
      const destDir = path.resolve(import.meta.dirname, "dist/src/content/topics");

      // Create destination directory
      await fs.mkdir(destDir, { recursive: true });

      // Copy all markdown files
      const files = await fs.readdir(srcDir);
      for (const file of files) {
        if (file.endsWith(".md")) {
          await fs.copyFile(
            path.join(srcDir, file),
            path.join(destDir, file)
          );
        }
      }
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss(), copyMarkdownFiles()],
  base: "/villany-app/", // GitHub Pages repository name set
  build: {
    // Disable performance hints to avoid web vitals errors
    reportCompressedSize: false,
  },
  server: {
    hmr: {
      // More stable HMR configuration
      overlay: true,
    },
  },
});

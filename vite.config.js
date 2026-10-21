import { defineConfig } from "vite";
import { cpSync, existsSync } from "node:fs";

// Folders to copy into dist/ as-is. Add a name here when you add a folder for
// particular kinds of assets (images, 3d models, etc).
// For example, if you have three folders you could
// define this variable as a nice JS array like this:
// const copyDirs = ['images', 'models', 'data']

const copyDirs = ["images"];

export default defineConfig({
  base: "./", // relative URLs, works on any GitHub/Codeberg Pages path
  publicDir: false, // no public/ folder
  build: {
    outDir: "dist",
  },
  plugins: [
    {
      name: "copy-static-folders",
      apply: "build", // only during `npm run build`
      closeBundle() {
        for (const dir of copyDirs) {
          if (existsSync(dir)) cpSync(dir, `dist/${dir}`, { recursive: true });
        }
      },
    },
  ],
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    base: "/", // This is crucial for Render.com
    build: {
        outDir: "dist",
        emptyOutDir: true,
    },
});

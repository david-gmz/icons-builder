import { defineConfig } from "vite";

export default defineConfig({
    build: {
        outDir: "dist",
        lib: {
            entry: "src/main.js",
            name: "LucideIcons",
            formats: ["iife"], // Immediately Invoked Function Expression
            fileName: () => "lucide-icons.js"
        },
        rollupOptions: {
            output: {
                // Ensure it creates a self-executing script
                entryFileNames: "lucide-icons.js"
            }
        }
    }
});

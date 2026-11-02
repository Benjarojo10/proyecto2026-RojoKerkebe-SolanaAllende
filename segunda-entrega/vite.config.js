import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const ruta = (carpeta) => fileURLToPath(new URL(carpeta, import.meta.url));

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": ruta("./src"),
            "@api": ruta("./src/api"),
            "@assets": ruta("./src/assets"),
            "@components": ruta("./src/components"),
            "@data": ruta("./src/data"),
            "@pages": ruta("./src/pages"),
            "@styles": ruta("./src/styles"),
            "@utils": ruta("./src/utils")
        }
    }
});

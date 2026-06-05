import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import laravel from 'laravel-vite-plugin'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.ts'],
            refresh: true,
        }),
        vue(),
        tailwindcss(),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./resources/js', import.meta.url)),
        },
    },
    publicDir: 'public',
    server: {
        host: 'localhost',   // Fuerza IPv4 en lugar de IPv6
        port: 5173,
        strictPort: true,
        hmr: {
            host: 'localhost', // Asegura que HMR use la misma dirección
        },
    },
})
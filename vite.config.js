import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/js/splash.js',
                'resources/css/splash.css',
            ],
            publicDirectory: 'resources/dist',
        }),
        tailwindcss(),
    ],
});

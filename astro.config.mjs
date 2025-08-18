// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';


// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  vite: {
    resolve: {
      alias: {
        '@': '/src',  // Resuelve el alias "@" a la carpeta src
      },
    },
    ssr: {
      noExternal: ['@fontsource-variable/onest'], // Agrega el paquete problemático aquí
    },
  },
});

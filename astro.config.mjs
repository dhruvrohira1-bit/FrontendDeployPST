import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'static', // <-- This tells Astro to build normal HTML files that Hostinger expects
  vite: {
    plugins: [tailwindcss()]
  }
});
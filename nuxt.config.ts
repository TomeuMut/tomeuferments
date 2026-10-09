import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  compatibilityDate: '2026-10-09',
  devtools: { enabled: false },
  css: ['~/../src/styles/global.css'],
  vite: { plugins: [tailwindcss()] },
  nitro: { prerender: { routes: ['/', '/es/', '/en/', '/ca/'], failOnError: true } },
  app: {
    head: {
      meta: [{ name: 'theme-color', content: '#516d61' }],
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    },
  },
});

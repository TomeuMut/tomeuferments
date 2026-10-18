import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  compatibilityDate: '2026-10-09',
  devtools: { enabled: false },
  css: ['~/../src/styles/global.css'],
  vite: { plugins: [tailwindcss()] },
  nitro: { prerender: { routes: ['/', '/es/', '/en/', '/ca/'], failOnError: true } },
  app: {
    head: {
      script: [
        {
          async: true,
          src: 'https://www.googletagmanager.com/gtag/js?id=G-T12FW28YKX',
        },
        {
          innerHTML: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-T12FW28YKX');`,
        },
      ],
      meta: [{ name: 'theme-color', content: '#516d61' }],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/png', sizes: '48x48', href: '/favicon-48.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      ],
    },
  },
});

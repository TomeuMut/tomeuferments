import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { errorContent, languageOptions, project } from '../src/data/content.ts';

const output = new URL('../.output/public/', import.meta.url);
const home = await readFile(new URL('es/index.html', output), 'utf8');
const stylesheet = home.match(/<link\b(?=[^>]*rel="stylesheet")[^>]*>/g)?.join('') ?? '';
if (!stylesheet) throw new Error('Generated site stylesheet not found; refusing an unstyled 404.');
const escape = value => String(value).replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[character]));
const t = errorContent.es;

// Nuxt's default static 404 is a blank SPA shell. Replace it with a branded,
// useful, no-JavaScript document. Vercel serves this file for unknown paths
// with HTTP 404; never add a wildcard rewrite to a 200-status homepage.
const html = `<!doctype html>
<html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escape(t.title)} | ${escape(project.name)}</title><meta name="robots" content="noindex, follow">
<meta name="theme-color" content="#516d61"><link rel="icon" href="/favicon.svg">${stylesheet}</head>
<body><div class="error-page shell">
<header class="error-header"><a href="/es/"><img src="/brand/logo.svg" alt="Tomeu Ferments" width="300" height="69"></a></header>
<main class="error-content"><p class="error-code">404</p><h1>${escape(t.title)}</h1><p class="body-copy">${escape(t.text)}</p>
<div class="error-actions"><a class="button button-primary" href="/es/">${escape(t.home)}</a><a class="text-link" href="/es/#elaboraciones">${escape(t.gallery)}</a></div>
<a class="text-link" href="mailto:${escape(project.email)}">${escape(t.contact)}</a></main>
<footer class="error-footer"><nav class="language-switcher" aria-label="Idioma">${languageOptions.map(option => `<a href="/${option.code}/" lang="${option.code}" hreflang="${option.code}">${escape(option.name)}</a>`).join('')}</nav></footer>
</div></body></html>`;
await writeFile(new URL('404.html', output), html);
console.log(`Created standalone static error page: ${fileURLToPath(new URL('404.html', output))}`);

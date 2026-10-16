import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import { project, content, languageOptions } from '../src/data/content.ts';

const root = new URL('../', import.meta.url);
const output = new URL('.output/public/', root);
const read = path => readFile(new URL(path, output), 'utf8');
const decode = text => text.replace(/&(?:amp|quot|apos|lt|gt|#39);/g, entity => ({ '&amp;': '&', '&quot;': '"', '&apos;': "'", '&#39;': "'", '&lt;': '<', '&gt;': '>' }[entity]));
const attributes = tag => Object.fromEntries([...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map(match => [match[1], decode(match[2])]));
const tags = (html, name) => [...html.matchAll(new RegExp(`<${name}\\b[^>]*>`, 'gi'))].map(match => attributes(match[0]));
const expectedAlternates = Object.fromEntries(languageOptions.map(({ code }) => [code, `${project.url}/${code}/`]));
expectedAlternates['x-default'] = `${project.url}/es/`;
const titles = new Set();
const pages = new Map();

for (const { code } of languageOptions) {
  const html = await read(`${code}/index.html`);
  pages.set(code, html);
  const metas = tags(html, 'meta');
  const meta = key => metas.filter(item => (item.name || item.property) === key);
  const links = tags(html, 'link');
  assert.equal(tags(html, 'html')[0].lang, code, `${code}: document language`);
  assert.equal(tags(html, 'h1').length, 1, `${code}: one primary heading`);
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
  assert.equal(new Set(ids).size, ids.length, `${code}: unique IDs`);
  const title = decode(html.match(/<title>([^<]+)<\/title>/)?.[1] ?? '');
  assert.equal(title, content[code].title, `${code}: title`);
  titles.add(title);
  assert.equal(meta('description')[0]?.content, content[code].description, `${code}: description`);
  assert.equal(meta('description').length, 1, `${code}: unique description`);
  assert.equal(meta('robots').length, 1, `${code}: unique robots rule`);
  assert.ok(!meta('robots')[0].content.includes('noindex'), `${code}: public page is indexable`);
  assert.deepEqual(links.filter(link => link.rel === 'canonical').map(link => link.href), [`${project.url}/${code}/`]);
  assert.deepEqual(Object.fromEntries(links.filter(link => link.hreflang).map(link => [link.hreflang, link.href])), expectedAlternates);
  for (const key of ['og:image', 'og:image:secure_url', 'twitter:image']) assert.equal(meta(key)[0]?.content, `${project.url}/images/social-preview.jpg`, `${code}: ${key}`);
  assert.equal(meta('og:url')[0]?.content, `${project.url}/${code}/`);
  assert.equal(meta('og:title')[0]?.content, title);
  assert.equal(meta('og:description')[0]?.content, content[code].description);
  assert.equal(meta('og:image:width')[0]?.content, '1200');
  assert.equal(meta('og:image:height')[0]?.content, '630');
  assert.equal(meta('og:image:type')[0]?.content, 'image/jpeg');
  assert.ok(meta('og:image:alt')[0]?.content);
  assert.ok(meta('twitter:image:alt')[0]?.content);
  assert.equal(meta('twitter:card')[0]?.content, 'summary_large_image');
  const schema = html.match(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/)?.[1];
  assert.ok(schema, `${code}: structured data`);
  const graph = JSON.parse(schema)['@graph'];
  const webpage = graph.find(node => node['@type'] === 'WebPage');
  assert.equal(webpage.url, `${project.url}/${code}/`);
  assert.equal(webpage.inLanguage, code);
  for (const image of tags(html, 'img')) {
    assert.ok(image.alt, `${code}: image alternative`);
    await access(new URL(image.src.replace(/^\//, ''), output));
  }
  console.log(`${code}: canonical, hreflang, indexing, metadata, JSON-LD and images passed`);
}
assert.equal(titles.size, languageOptions.length, 'Language titles are distinct');

const sitemap = await read('sitemap.xml');
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1]).sort();
assert.deepEqual(urls, languageOptions.map(({ code }) => `${project.url}/${code}/`).sort());
for (const block of sitemap.matchAll(/<url>([\s\S]*?)<\/url>/g)) {
  const alternates = [...block[1].matchAll(/<xhtml:link\b[^>]*>/g)].map(match => attributes(match[0]));
  assert.deepEqual(Object.fromEntries(alternates.map(link => [link.hreflang, link.href])), expectedAlternates);
}
const robots = await read('robots.txt');
assert.match(robots, /User-agent:\s*\*/i);
assert.match(robots, /Allow:\s*\//i);
assert.ok(robots.includes(`Sitemap: ${project.url}/sitemap.xml`));
assert.ok(!/^Disallow:\s*\/\s*$/mi.test(robots), 'Production crawling is allowed');

const error = await read('404.html');
assert.match(error, /name="robots" content="noindex, follow"/);
assert.equal(tags(error, 'h1').length, 1);
assert.ok(!/<script\b/i.test(error), 'Static 404 works without JavaScript');
assert.ok(!tags(error, 'link').some(link => link.rel === 'canonical'), 'Error page does not canonicalize to a live page');
for (const anchor of tags(error, 'a')) {
  if (anchor.href.startsWith('mailto:')) continue;
  const url = new URL(anchor.href, project.url);
  const code = url.pathname.split('/')[1];
  assert.ok(pages.has(code), `Error recovery destination exists: ${url.pathname}`);
  if (url.hash) assert.ok(pages.get(code).includes(`id="${url.hash.slice(1)}"`));
}
for (const link of tags(error, 'link').filter(item => item.rel === 'stylesheet')) await access(new URL(link.href.replace(/^\//, ''), output));

const config = JSON.parse(await readFile(new URL('vercel.json', root), 'utf8'));
const mapping = JSON.parse(await readFile(new URL('docs/legacy-url-map.json', root), 'utf8'));
for (const rule of mapping.redirects) {
  for (const source of [rule.source, `${rule.source}/`]) {
    assert.ok(config.redirects.some(item => item.source === source && item.destination === rule.destination && item.permanent === true), `Permanent redirect missing: ${source}`);
    const hostRule = config.redirects.findIndex(item => item.source === source && item.has?.some(condition => condition.type === 'host' && condition.value === 'www.tomeuferments.es'));
    const normalization = config.redirects.findIndex(item => item.source === '/:path*' && item.has);
    assert.ok(hostRule >= 0 && hostRule < normalization, `WWW legacy redirect must precede host normalization: ${source}`);
    assert.equal(config.redirects[hostRule].destination, new URL(rule.destination, project.url).href);
  }
  const destination = new URL(rule.destination, project.url);
  const code = destination.pathname.split('/')[1];
  assert.ok(pages.has(code));
  assert.ok(pages.get(code).includes(`id="${destination.hash.slice(1)}"`));
  assert.ok(!config.redirects.some(item => item.source === destination.pathname && !item.has), 'No redirect chains on destination pages');
}
assert.ok(!config.rewrites?.some(rule => rule.source.includes('*')), 'No homepage/SPA catch-all hiding missing URLs');
for (const rule of config.redirects.filter(rule => !rule.has)) assert.ok(!rule.source.includes('*'), 'No blanket legacy redirect');
for (const group of mapping.removed) for (const path of group.paths) assert.ok(!config.redirects.some(rule => !rule.has && rule.source === path), `Removed content must not redirect: ${path}`);
assert.ok(config.headers.some(rule => rule.source === '/404.html' && rule.headers.some(header => header.key.toLowerCase() === 'x-robots-tag' && header.value.includes('noindex'))));

// The social image dimensions must match the declared OG dimensions.
const jpeg = await readFile(new URL('images/social-preview.jpg', output));
let dimensions;
for (let offset = 2; offset + 8 < jpeg.length;) {
  assert.equal(jpeg[offset], 0xff, 'Valid JPEG marker');
  const marker = jpeg[offset + 1];
  if (marker === 0xc0 || marker === 0xc2) { dimensions = [jpeg.readUInt16BE(offset + 7), jpeg.readUInt16BE(offset + 5)]; break; }
  if (marker === 0xda || marker === 0xd9) break;
  offset += 2 + jpeg.readUInt16BE(offset + 2);
}
assert.deepEqual(dimensions, [1200, 630], 'Actual OG image dimensions');
console.log('Sitemap, robots, static 404, legacy URL mapping, redirect targets and OG image dimensions passed.');
console.log('Hosting HTTP status codes and domain/TLS must also be verified after deployment.');

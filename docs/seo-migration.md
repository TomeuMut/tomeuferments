# SEO and OctoberCMS URL migration

## Findings and scope

Reviewed the Nuxt source, generated ES/EN/CA pages, robots, sitemap, social assets, metadata and the preserved OctoberCMS theme. The old theme contains nine CMS page definitions. [legacy-url-map.json](legacy-url-map.json) records every page family, declared alias, evidence and disposition.

This is not a complete export of Google's index. Public search did not expose a reliable inventory of indexed recipe URLs. Recipe slugs were supplied dynamically by October components and are not enumerated in the theme. The old `sitePicker` read site URLs dynamically; deployed language prefixes and enabled sites cannot be inferred from language codes alone. Do not invent localized prefixes or claim that every theme alias was publicly indexed. Expand the map with Search Console exports, historical sitemaps and access logs when available.

The preserved backup was read only. No database, credentials or private CMS data were copied into the public website.

## Domain blocker observed on 2026-10-16

From this environment, Python's TLS client and Windows curl both failed the HTTPS handshake for the custom domain. `http://tomeuferments.es/` returned a Vercel HTTP 404 response containing `DEPLOYMENT_NOT_FOUND`. DNS resolved the root A record to `216.198.79.1`.

This points to a domain/deployment association or TLS problem that must be checked in Vercel, not an HTML metadata fix. The observation is not proof of universal downtime. Verify the actual production deployment URL, Settings → Domains for root and www, and the exact DNS records Vercel requests. Do not replace DNS with a generic IP or change mail records. No Vercel account, DNS or production deployment changes were performed in this task.

## URL migration policy

| Old declared paths | New treatment |
|---|---|
| `/` | Permanent redirect to `/es/`, retaining the established Spanish default |
| `/sobre-nosotros` | `/es/#historia` |
| `/about` | `/en/#historia` |
| `/uber` | `/en/#historia`, documented English fallback because German is not published |
| `/contact` | `/es/#contacto`, documented default because the base and English alias share this path |
| `/kontakt` | `/en/#contacto`, documented English fallback |
| Recipe indexes and details (`receptes`, `recetas`, `recipes`) | Genuine 404; photo galleries do not replace recipe instructions |
| Careers and recruitment aliases | Genuine 404; no recruitment content remains |
| Retired legal/privacy/cookie document aliases | Genuine 404; no equivalent document is currently published |

Both slash variants are explicitly covered for redirectable legacy aliases. Specific www redirects precede generic host normalization and go directly to the canonical host and relevant section. `permanent: true` uses Vercel's permanent redirect behavior (normally HTTP 308); inspect actual deployed responses and any automatic trailing-slash hop.

Do not redirect deleted recipe details or unknown paths to the homepage. Such redirects do not satisfy the user's original request for content and can be treated as soft 404s. Keep retired paths crawlable so search engines can observe their actual status; do not hide them with robots.txt.

The old `#contact-form` anchor is preserved inside the current contact section. Fragments do not reach the server and cannot be handled by HTTP redirect rules alone.

## Sitemap, robots and page metadata

- The existing sitemap correctly lists only the three canonical published pages. Each entry includes reciprocal ES/EN/CA and Spanish x-default links.
- The existing robots.txt allows public crawling and points to the production sitemap. No speculative crawler restrictions were added.
- Public pages have unique localized titles/descriptions, self-canonical URLs and reciprocal HTML hreflang. No `meta keywords` or fabricated structured data were added.
- Existing Person, WebSite and WebPage JSON-LD is retained and checked against the current language and canonical URL.
- OG and Twitter use the existing 1200 × 630 JPEG, with dimensions and localized alternative text. `og:image:secure_url` was added; the actual JPEG dimensions are validated against the metadata.
- Search Console ownership verification must remain valid. No verification token was found in the inspected public theme layouts; verify the account's actual DNS/HTML method rather than inventing one.

## Real error pages

`app/error.vue` supplies a branded Nuxt error view with localized ES/EN/CA copy and `noindex, follow`, without exposing raw application errors. It offers home, gallery and email recovery links.

Nuxt's installed static generator deliberately prerenders `/404.html` as a no-SSR SPA shell. `scripts/finalize-static.mjs`, run after generation, replaces that shell with a complete Spanish fallback document using centralized copy and the generated site stylesheet. It works without JavaScript and offers links to all three languages. The static fallback's default language is Spanish; Nuxt's interactive error view uses a recognized URL language.

The fallback is not a new indexable content page: it has no canonical-to-home tag, is excluded from the sitemap and has noindex metadata. Vercel header rules additionally mark direct `/404.html` and `/200.html` requests noindex. No wildcard homepage rewrite is configured. The hosting server must return HTTP 404 for unknown and removed paths; local artifact checks alone cannot certify that response.

## Validation

`npm run build` now runs postbuild generation and SEO assertions. `npm run check:seo` repeats the assertions against an existing build. Checks cover:

- All three document languages, unique H1/IDs/titles/descriptions, canonical and hreflang.
- Indexability of public pages, social metadata and JSON-LD.
- Sitemap targets, alternates, robots rules and local image assets.
- Complete no-JavaScript 404 markup, noindex, stylesheet and valid recovery destinations.
- Redirect coverage, permanent settings, actual target sections, www rule ordering and absence of blanket recipe redirects.
- Actual social-image dimensions.

Type checking, static generation and these assertions passed. The final source review found no blocking routing errors. Browser screenshots, actual focus behavior, production HTTP statuses and TLS still require validation on a working deployment.

## Deployment and Search Console follow-up

1. Resolve the custom domain association and HTTPS first, preserving existing email DNS records.
2. Publish the feature through the repository's approved release workflow.
3. Verify HTTP 200 for `/es/`, `/en/`, `/ca/`, robots, sitemap and OG image.
4. Verify permanent redirects for every mapped alias, with and without slash and on www. Check the final section and redirect chain length.
5. Verify HTTP 404, visible HTML and noindex for an unknown path and real removed recipe/legal/careers examples. Test without JavaScript.
6. Submit `https://tomeuferments.es/sitemap.xml` in Search Console and inspect the canonical pages and representative old URLs. This is the same domain, so a domain Change of Address request is not warranted.
7. Monitor indexing, crawled-not-indexed reports, 404 reports and external links. Keep redirects long term and add confirmed aliases from account data. Do not claim immediate reindexing or restored rankings.

References: [Google site moves](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes), [Google crawling errors and soft 404](https://developers.google.com/search/docs/crawling-indexing/troubleshoot-crawling-errors), [Vercel configuration](https://vercel.com/docs/project-configuration/vercel-json).


## Hosting output hotfix

Release 1.0.3 failed its Vercel postbuild because it assumed the local `.output/public` directory. The shared resolver now selects `.vercel/output/static` when `VERCEL=1`, and both finalization and checks use that directory. Vercel build-output routing includes a missing-file fallback with status 404 after the filesystem handler. The build was reproduced with Nitro's `vercel-static` preset and validated locally before publishing the hotfix.

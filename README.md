# Tomeu Ferments

A personal project about fermentation, maceration, traditional knowledge, and rural life in Mallorca. This static website replaces the previous OctoberCMS application with Nuxt, Vue, TypeScript, and TailwindCSS. It presents the story, approach, and selected photographs without recipes, forms, a shop, or a backend.

## Development

Use Node.js 22 LTS (22.12 or later).

```sh
npm ci
npm run dev
```

Open http://127.0.0.1:3001/es/. The default port avoids interfering with the portfolio project on port 3000.

```sh
npm run check
npm run build
npm run check:seo
npm run preview
```

The local static output is `.output/public`; Vercel builds use `.vercel/output/static` and contains prerendered Spanish (`/es/`), English (`/en/`), and Catalan (`/ca/`) pages. The root redirects to Spanish. Unsupported languages return a 404.

## Content and design

- `src/data/content.ts`: all three language versions, project email, Instagram link, and production URL.
- `app/components/ProjectPage.vue`: shared accessible layout and mobile navigation.
- `src/styles/global.css`: TailwindCSS, responsive styles, and global semantic theme variables.
- `public/images/`: project photographs. The gallery uses the user-provided `Kombucha.jpeg`, `Maceracio.jpeg`, and `Conserva.jpeg`; original optimized assets are retained.
- `public/brand/`: original logos.

The original brand colors are preserved as global variables: primary `#516d61`, secondary `#c35f47`, and background `#f9edd3`. Darker text variants improve contrast on cream backgrounds; the footer uses a darker terracotta variant to keep small white text readable. The existing contact email is `tomeuferments@gmail.com`. Contact uses a mail link; Instagram uses a direct external link. Neither is automatically submitted, synchronized, or embedded.

The story is adapted from the original OctoberCMS theme, especially `themes/tomeu-ferments/pages/index.htm`. It retains the 2017 origin, Bartomeu’s grandmother, fruit from the land, and the earlier introduction to craft beer through Rachid and Lorien. The public website could not be retrieved during implementation, so local source files are the content authority. Photographs illustrate the project without ingredient quantities, instructions, health claims, or claims that every photo depicts a specific named product.

## Migration and legacy backup

The migration was implemented on `feature/reset`, created from `develop`, and prepared for release as version `1.0.0`. The legacy OctoberCMS implementation remains in Git history at commit `c1dc3a4`.

The Nuxt application now runs in the original checkout at `C:/laragon/www/tomeuferments`, using its existing `.git` directory and the same `git@github.com:TomeuMut/tomeuferments.git` remote. A temporary linked worktree was used while preserving local OctoberCMS changes; it did not create another repository.

The previous OctoberCMS files, including pre-existing local changes and ignored runtime files, are preserved in `C:/laragon/www/tomeuferments-octobercms-backup`. A binary-compatible patch of tracked local changes is saved at `C:/laragon/www/tomeuferments-octobercms-local-changes.patch`. Both backups stay outside the Git repository and are not deployed. The separate `tomeuferments3` checkout is untouched.

OctoberCMS PHP files, plugins, database configuration, Composer dependencies, recipes, forms, and their scripts are removed from the new branch. Existing credentials, environment files, user uploads, and the database are not copied into the static project. Original source photographs remain in the legacy backup and Git history; the new branch includes selected presentation assets and the supplied gallery photographs.

To compare with the legacy version, inspect the backup or commit `c1dc3a4`. Continue development in the original `tomeuferments` folder on a feature branch.

## Git Flow

Use `main` for production, `develop` for integration, `feature/*` for changes, `release/*` for releases, and `hotfix/*` for production fixes. Create features from `develop` and integrate them through pull requests. Rebase only private working history. Releases receive annotated SemVer tags and synchronize back to `develop`. Commit messages and README content must be in English.

Local commits are allowed. Pushes, merges, tags, and deployment require an explicit user request. Repository instructions are in `AGENTS.md`.

## Vercel

1. Connect `TomeuMut/tomeuferments` after the migration has been reviewed and pushed.
2. Use Node.js 22.x, `npm ci`, `npm run build`, and `.output/public`. The checked-in `vercel.json` provides the build settings.
3. Use `main` for production and feature branches for previews.
4. Add `tomeuferments.es` as a custom domain, then apply the exact DNS records Vercel provides at the current external DNS provider. Keep existing email records.
5. Verify the domain, HTTPS, root redirect, all three languages, assets, and contact links before redirecting production traffic.

Canonical and alternate language links use `https://www.tomeuferments.es`. No secrets, database, SMTP service, or runtime API are required. No deployment or DNS changes are performed by preparing this repository.

Legacy introduction and contact aliases now have explicit permanent redirects in `vercel.json`. Retired recipe, recruitment and legal content has no equivalent replacement and must return a real 404, rather than redirecting to the homepage. The evidence and mapping are recorded in `docs/legacy-url-map.json`.

Google Analytics is configured globally in `nuxt.config.ts` using the Google tag with measurement ID `G-T12FW28YKX`. The asynchronous loader and initialization are included on all language pages. The site has no cookie banner.

## Validation

Type checking and static generation passed for all three languages. Generated pages were checked for one H1, localized HTML language, canonical links, the original email, valid image assets, and absence of forms. Desktop and mobile Chrome review confirmed image loading, section anchors, mobile menu expansion and closure, and no horizontal overflow at 320, 390, 768, 1024, and 1440 px. The integrated browser was unavailable, so Chrome headless was used for this review.

The lockfile starts from the portfolio?s matching dependency set and pins the same versions. Installation succeeded from the local package cache after registry certificate validation failed; TLS verification was not disabled. Nuxt static generation emits the same two non-blocking Windows/Nitro import warnings as the portfolio.

## SEO

Each prerendered language page has a unique localized title and description, one descriptive H1, semantic H2/H3 headings, localized image alternatives, a self-referencing canonical, and reciprocal ES/EN/CA hreflang links with Spanish as x-default. Open Graph includes site name, locale alternatives, URL, title, description, and a 1200 × 630 JPEG preview with dimensions and localized alternative text. Twitter cards include their own title, description, image, and alternative text.

JSON-LD describes the real Person, WebSite, and localized WebPage, including language, creator, page sections, and primary image. It deliberately makes no business, product, review, recipe, or health claims. Indexable pages allow large image previews. The existing robots.txt allows crawling and advertises the multilingual sitemap; sitemap entries now include x-default as well.

Vercel permanently redirects `/` to `/es/` and normalizes URLs with trailing slashes. The Nuxt root redirect also uses permanent semantics. Validate the actual HTTP redirect after deployment: static HTML alone cannot send an HTTP status. Icons include the original SVG, a 48 × 48 PNG favicon, and a 180 × 180 Apple touch icon, using the existing monogram and colors. On Windows, regenerate the raster icons and social crop from existing assets using `powershell -File scripts/generate-seo-assets.ps1` from the repository root.

Before publishing, check the production domain, HTTPS, preview indexing controls in Vercel, and legacy indexed URLs. After publishing, submit `https://www.tomeuferments.es/sitemap.xml` in Google Search Console, inspect all three localized URLs, and validate structured data and social previews. These external actions require access to the relevant accounts and are not performed by a local build. No rankings or rich results are guaranteed.


## Design review

The focused accessibility, navigation, responsive-layout and content improvements are recorded in [docs/design-review.md](docs/design-review.md). The review preserves the existing visual identity and all three languages. Type checking, static generation and generated-output anchor/image checks pass; the final Impeccable detector reports no findings. Browser screenshots and interactive verification remain pending because no browser was connected during this run.


## SEO migration and error pages

See [docs/seo-migration.md](docs/seo-migration.md) for the OctoberCMS inventory, redirect rationale, metadata validation, observed custom-domain issue and deployment/Search Console follow-up. The sitemap and robots already describe the three canonical language pages; automated checks now keep those contracts aligned with the generated HTML.

`npm run build` runs a postbuild step that replaces Nuxt's blank static 404 shell with a branded, no-JavaScript error document, then checks all public SEO artifacts. `npm run check:seo` reruns those checks against the existing output. `app/error.vue` supplies the localized interactive error view; the static fallback defaults to Spanish and links to all three languages. Error copy is centralized in `src/data/content.ts`. Node 22.12+ supports the built-in type-stripping flag used by these scripts; no new dependency is required.

Actual hosting status codes, redirect chains, custom-domain association and TLS must be verified on Vercel after publication. Local static checks do not prove production HTTP 404 responses or successful domain setup. No Search Console access or account changes are included.


The SEO postbuild scripts share `scripts/static-output.mjs`: with `VERCEL=1` they read and update `.vercel/output/static`, matching Nitro's `vercel-static` preset. Otherwise they use `.output/public`. Vercel-mode validation also checks that the HTTP 404 fallback is ordered after the filesystem route in the generated build-output configuration. Generated `.vercel` artifacts are excluded from Git.

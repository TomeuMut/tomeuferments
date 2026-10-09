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
npm run preview
```

The production output is `.output/public` and contains prerendered Spanish (`/es/`), English (`/en/`), and Catalan (`/ca/`) pages. The root redirects to Spanish. Unsupported languages return a 404.

## Content and design

- `src/data/content.ts`: all three language versions, project email, Instagram link, and production URL.
- `app/components/ProjectPage.vue`: shared accessible layout and mobile navigation.
- `src/styles/global.css`: TailwindCSS, responsive styles, and global semantic theme variables.
- `public/images/`: project photographs. The gallery uses the user-provided `Kombucha.jpeg`, `Maceracio.jpeg`, and `Conserva.jpeg`; original optimized assets are retained.
- `public/brand/`: original logos.

The original brand colors are preserved as global variables: primary `#516d61`, secondary `#c35f47`, and background `#f9edd3`. Darker text variants improve contrast on cream backgrounds; the footer uses a darker terracotta variant to keep small white text readable. The existing contact email is `tomeuferments@gmail.com`. Contact uses a mail link; Instagram uses a direct external link. Neither is automatically submitted, synchronized, or embedded.

The story is adapted from the original OctoberCMS theme, especially `themes/tomeu-ferments/pages/index.htm`. It retains the 2017 origin, Bartomeu’s grandmother, fruit from the land, and the earlier introduction to craft beer through Rachid and Lorien. The public website could not be retrieved during implementation, so local source files are the content authority. Photographs illustrate the project without ingredient quantities, instructions, health claims, or claims that every photo depicts a specific named product.

## Migration and local worktrees

The migration was implemented on `feature/reset`, created from `develop`, and prepared for release as version `1.0.0`. The legacy OctoberCMS implementation remains in Git history at commit `c1dc3a4`.

The original checkout at `C:/laragon/www/tomeuferments` has pre-existing uncommitted changes. Its files are preserved at legacy commit `c1dc3a4` in detached HEAD state so `main` can advance to the Nuxt release without replacing the legacy working files. The migration runs in the linked worktree `C:/laragon/www/tomeuferments-reset`; both folders share the same Git repository and remote. The separate `tomeuferments3` checkout is also untouched.

OctoberCMS PHP files, plugins, database configuration, Composer dependencies, recipes, forms, and their scripts are removed from the new branch. Existing credentials, environment files, user uploads, and the database are not copied into the static project. Original source photographs remain in the original checkout and Git history; the new branch only includes optimized assets selected for this presentation.

Do not switch the original dirty checkout to the migration branch without first preserving its local changes. To compare with the legacy version, use that existing checkout or inspect the previous commit in Git.

## Git Flow

Use `main` for production, `develop` for integration, `feature/*` for changes, `release/*` for releases, and `hotfix/*` for production fixes. Create features from `develop` and integrate them through pull requests. Rebase only private working history. Releases receive annotated SemVer tags and synchronize back to `develop`. Commit messages and README content must be in English.

Local commits are allowed. Pushes, merges, tags, and deployment require an explicit user request. Repository instructions are in `AGENTS.md`.

## Vercel

1. Connect `TomeuMut/tomeuferments` after the migration has been reviewed and pushed.
2. Use Node.js 22.x, `npm ci`, `npm run build`, and `.output/public`. The checked-in `vercel.json` provides the build settings.
3. Use `main` for production and feature branches for previews.
4. Add `tomeuferments.es` as a custom domain, then apply the exact DNS records Vercel provides at the current external DNS provider. Keep existing email records.
5. Verify the domain, HTTPS, root redirect, all three languages, assets, and contact links before redirecting production traffic.

Canonical and alternate language links use `https://tomeuferments.es`. No secrets, database, SMTP service, or runtime API are required. No deployment or DNS changes are performed by preparing this repository.

The old recipe and legal URLs are intentionally not recreated. Before replacing the live site, review indexed legacy URLs and decide which should redirect to a genuinely equivalent section and which should return 404. No analytics, third-party embeds, or nonessential cookies are added; the site has no cookie banner.

## Validation

Type checking and static generation passed for all three languages. Generated pages were checked for one H1, localized HTML language, canonical links, the original email, valid image assets, and absence of forms. Desktop and mobile Chrome review confirmed image loading, section anchors, mobile menu expansion and closure, and no horizontal overflow at 320, 390, 768, 1024, and 1440 px. The integrated browser was unavailable, so Chrome headless was used for this review.

The lockfile starts from the portfolio?s matching dependency set and pins the same versions. Installation succeeded from the local package cache after registry certificate validation failed; TLS verification was not disabled. Nuxt static generation emits the same two non-blocking Windows/Nitro import warnings as the portfolio.

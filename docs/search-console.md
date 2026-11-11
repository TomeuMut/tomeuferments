# Google Search readiness

## Technical coverage

The three static ES/EN/CA pages have localized titles, descriptions and visible content, self-canonical URLs, reciprocal hreflang (including x-default), one H1, descriptive image alternatives, crawlable language links, Open Graph/Twitter metadata and truthful Person/WebSite/WebPage structured data. Existing content naturally covers artisan fermentation, kombucha, macerations, preserves and Mallorca in each language. Do not add keyword stuffing or claim recipes, sales, certifications or health benefits.

The sitemap includes each canonical page and its six existing content photographs using Google's image extension. No artificial lastmod dates, meta keywords, geo tags, fabricated reviews, Recipe or LocalBusiness markup are needed. Google ignores meta keywords; valid structured data does not guarantee rich results or ranking. The site remains a personal presentation.

Run `npm run check` and `npm run build`; postbuild checks validate metadata, structured data, reciprocal alternates, image sitemap coverage, assets, legacy redirects and the static 404. Check desktop/mobile language changes, section navigation and keyboard focus in a browser. A local pass does not certify live indexing or Core Web Vitals.

## Account setup and monitoring

1. Add or open the Domain property `tomeuferments.es` in Search Console. Domain verification requires the exact DNS TXT record supplied by Google. Preserve existing DNS/mail records and any current verification. A URL-prefix property for `https://www.tomeuferments.es/` is an alternative with Google's offered verification methods. Analytics installation alone does not establish verified ownership.
2. Submit `https://www.tomeuferments.es/sitemap.xml` once the production release is live. Confirm successful processing and three canonical page URLs. Image URLs are sitemap extensions, not extra HTML pages.
3. Inspect `/es/`, `/en/` and `/ca/` with URL Inspection. Run the live test, check crawl eligibility, rendered content and canonical selection, then request indexing where appropriate. Google decides whether and when to index.
4. Review Page indexing, HTTPS, manual actions and security issues. Retired recipes must return real 404s; do not request indexing for them. Preserve relevant legacy redirects described in `seo-migration.md`.
5. Review Performance by page, query, country, device and search type (Web/Images). Compare periods after enough data accumulates; use actual queries to guide future truthful content improvements.
6. Review Core Web Vitals separately for mobile and desktop: aim for LCP <= 2.5 s, INP <= 200 ms and CLS <= 0.1 at the 75th percentile. PageSpeed Insights provides lab diagnostics; insufficient real-user data is not a pass or failure. Mobile browser emulation is not a physical-device test.
7. After release, verify HTTP 200 and accessible assets on canonical pages, permanent apex/legacy redirects, and HTTP 404 for missing pages. Search Console account reports, DNS verification and sitemap submission require account access; repository changes cannot perform them.

## Official references

- [Supported metadata and ignored keywords](https://developers.google.com/search/docs/crawling-indexing/special-tags)
- [Localized versions and reciprocal hreflang](https://developers.google.com/search/docs/specialty/international/localized-versions)
- [Image sitemap format](https://developers.google.com/search/docs/crawling-indexing/sitemaps/image-sitemaps)
- [Ownership verification](https://support.google.com/webmasters/answer/9008080)
- [Sitemaps report](https://support.google.com/webmasters/answer/7451001)
- [Page indexing](https://support.google.com/webmasters/answer/7440203)
- [Core Web Vitals](https://developers.google.com/search/docs/appearance/core-web-vitals)

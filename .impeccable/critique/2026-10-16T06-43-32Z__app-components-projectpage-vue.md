---
target: Initial design review before refinements
total_score: 22
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 1
target_identity: "file:C:\\laragon\\www\\tomeuferments\\app\\components\\ProjectPage.vue"
target_fingerprint: "sha256:a20a384e14b3bcd8ff7615d2213d388b09f750edc1d854d688af4697a8d752c0"
target_path: "C:\\laragon\\www\\tomeuferments\\app\\components\\ProjectPage.vue"
timestamp: 2026-10-16T06-43-32Z
slug: app-components-projectpage-vue
---
# Design review and improvements

The review used Impeccable and Redesign Existing Projects, with separate design and technical assessments. Awesome DESIGN.md's Oura reference informed the evaluation of warm surfaces, photography and readable hierarchy; the original Tomeu Ferments palette, photographs, story and serif identity remain authoritative. No new claims, products or health assertions were added.

## Initial assessment

Source-based heuristic score: **22/32**, before the changes. Efficiency shortcuts and help/documentation were not scored because this is a personal presentation website, not an application.

| Heuristic | Initial score |
|---|---:|
| System status | 2/4 |
| Familiar language | 2/4 |
| Control and freedom | 2/4 |
| Consistency | 3/4 |
| Error prevention | 3/4 |
| Recognition | 3/4 |
| Aesthetic and minimalist design | 3/4 |
| Recovery | 2/4 |

The strongest elements are authentic project photography, a clear personal origin story, a coherent cream/green/terracotta identity and direct contact without forms. Cognitive load is low. The highest-impact problems were broken localized headlines, small touch controls, keyboard menu behavior and a narrow two-column tablet hero.

## Applied improvements

- P1: restored the English apostrophe and Catalan accent in prominent headings.
- P2: tablet hero switches to a single column earlier, with flexible grid tracks and more readable headline spacing. Small-screen type scales down without splitting words arbitrarily.
- P2: language controls and menu toggle have 44px minimum targets. Header controls wrap into a second row on narrow phones.
- P2: opening the mobile menu focuses its first link; Escape closes it and returns focus to the toggle. Following section links focuses their destination.
- P3: current section is indicated visually and with `aria-current`; language links preserve that section. The skip-link target is focusable.
- Supporting improvements: readable photo captions and footer text, bounded scrolling for the expanded menu, and preserved reduced-motion handling.

## Validation and limits

The initial Impeccable detector reported no findings. Final validation includes Nuxt type checking and generation of all three languages, plus static checks of generated language attributes, section anchors and local assets.

Browser inventory returned no connected apps or browsers. These are source and generated-output checks; desktop/mobile screenshots, actual computed layouts and interactive keyboard behavior still require browser validation. No post-change heuristic score or verified overlay is claimed. No local server was started for this review.

The original SEO work was retained as a prerequisite commit on `feature/design-review`. No release, push, merge or deployment was performed.


### Final checks

- `npm run check`: passed.
- `npm run build`: passed; ES, EN and CA generated successfully.
- Generated HTML: document languages, one h1 per page, unique IDs, internal section/language links and local image assets validated.
- Final Impeccable detector (`app src`): zero findings. This is a mechanical scan, not a browser accessibility certification.
- Independent bounded diff review: no new navigation, menu or localization regressions found.
- Browser inventory empty; no browser server or overlay started, and no temporary review files retained.
- Initial scores describe the pre-change source, not a new score after implementation.

<script setup lang="ts">
import { PhArrowDown, PhArrowUp, PhArrowUpRight, PhEnvelopeSimple, PhInstagramLogo, PhList, PhX } from '@phosphor-icons/vue';
import { content, languageOptions, project, type Language } from '../../src/data/content';

const props = defineProps<{ language: Language }>();
const t = computed(() => content[props.language]);
const menuOpen = ref(false);
const year = new Date().getFullYear();
const navigation = computed(() => ['historia', 'filosofia', 'elaboraciones', 'contacto'].map((id, index) => ({ id, label: t.value.nav[index] })));

watch(() => props.language, () => { menuOpen.value = false; });
useHead(() => ({
  htmlAttrs: { lang: props.language },
  title: t.value.title,
  meta: [
    { name: 'description', content: t.value.description },
    { property: 'og:title', content: t.value.title },
    { property: 'og:description', content: t.value.description },
    { property: 'og:type', content: 'website' },
    { property: 'og:locale', content: t.value.locale },
    { property: 'og:url', content: `${project.url}/${props.language}/` },
    { property: 'og:image', content: `${project.url}/images/kombucha-hero.jpg` },
    { property: 'og:image:alt', content: t.value.hero.imageAlt },
    { name: 'twitter:card', content: 'summary_large_image' },
  ],
  link: [
    { rel: 'canonical', href: `${project.url}/${props.language}/` },
    ...languageOptions.map(option => ({ rel: 'alternate' as const, hreflang: option.code, href: `${project.url}/${option.code}/` })),
    { rel: 'alternate', hreflang: 'x-default', href: `${project.url}/es/` },
  ],
}));
</script>

<template>
  <div>
    <a href="#contenido" class="skip-link">{{ t.skip }}</a>
    <header class="site-header" @keydown.esc="menuOpen = false">
      <div class="shell header-inner">
        <a href="#inicio" :aria-label="`${project.name} · ${t.home}`" class="brand" @click="menuOpen = false"><img src="/brand/logo.svg" alt="Tomeu Ferments" width="300" height="69" /></a>
        <nav id="main-navigation" :aria-label="t.home" class="main-navigation" :class="{ 'is-open': menuOpen }">
          <a v-for="item in navigation" :key="item.id" :href="`#${item.id}`" @click="menuOpen = false">{{ item.label }}</a>
        </nav>
        <div class="header-controls">
          <nav :aria-label="t.language" class="language-switcher">
            <a v-for="option in languageOptions" :key="option.code" :href="`/${option.code}/`" :lang="option.code" :hreflang="option.code" :aria-label="option.name" :aria-current="language === option.code ? 'page' : undefined">{{ option.label }}</a>
          </nav>
          <button type="button" class="menu-toggle" :aria-label="menuOpen ? t.closeMenu : t.openMenu" :aria-expanded="menuOpen" aria-controls="main-navigation" @click="menuOpen = !menuOpen"><component :is="menuOpen ? PhX : PhList" :size="24" aria-hidden="true" focusable="false" /></button>
        </div>
      </div>
    </header>

    <main id="contenido">
      <section id="inicio" class="hero shell" aria-labelledby="hero-title">
        <div class="hero-copy">
          <p class="eyebrow"><span class="status-dot" aria-hidden="true" />{{ t.hero.label }}</p>
          <h1 id="hero-title">{{ t.hero.title[0] }}<br /><em>{{ t.hero.title[1] }}</em></h1>
          <p class="hero-text">{{ t.hero.text }}</p>
          <a href="#historia" class="button button-primary">{{ t.hero.cta }}<PhArrowDown :size="19" aria-hidden="true" focusable="false" /></a>
          <p class="hero-note">{{ t.hero.note }}</p>
        </div>
        <div class="hero-visual">
          <figure class="hero-photo"><img src="/images/kombucha-hero.jpg" :alt="t.hero.imageAlt" width="1600" height="1067" fetchpriority="high" decoding="async" /><figcaption>{{ t.hero.caption }}</figcaption></figure>
          <div class="origin-stamp" aria-hidden="true"><span>Tomeu</span><strong>Ferments</strong><span>© 2017 · Mallorca</span></div>
          <p class="image-caption"><span>{{ t.hero.location }}</span><span>01 — 06</span></p>
        </div>
      </section>

      <div class="values-ribbon" aria-hidden="true"><div class="shell flex flex-wrap items-center justify-between gap-4"><span v-for="item in t.ribbon" :key="item"><span class="ribbon-star">✳</span>{{ item }}</span></div></div>

      <section id="historia" class="story-section shell section-space" aria-labelledby="story-title">
        <figure class="story-photo"><img src="/images/tomeu.jpg" :alt="t.story.imageAlt" width="825" height="1100" loading="lazy" decoding="async" /><figcaption>{{ t.story.caption }}</figcaption></figure>
        <div class="story-copy"><p class="eyebrow">{{ t.story.label }}</p><h2 id="story-title">{{ t.story.title[0] }}<br /><em>{{ t.story.title[1] }}</em></h2><p v-for="paragraph in t.story.paragraphs" :key="paragraph" class="body-copy">{{ paragraph }}</p><p class="signature">{{ t.story.signature }}</p></div>
      </section>

      <section id="filosofia" class="philosophy-section section-space" aria-labelledby="philosophy-title">
        <div class="shell">
          <div class="section-heading"><div><p class="eyebrow">{{ t.philosophy.label }}</p><h2 id="philosophy-title">{{ t.philosophy.title[0] }}<br /><em>{{ t.philosophy.title[1] }}</em></h2></div><p class="body-copy">{{ t.philosophy.intro }}</p></div>
          <div class="principles-grid"><article v-for="(item, index) in t.philosophy.items" :key="item.title" class="principle"><span class="principle-number">0{{ index + 1 }}</span><h3>{{ item.title }}</h3><p class="body-copy">{{ item.text }}</p></article></div>
        </div>
      </section>

      <section id="elaboraciones" class="gallery-section shell section-space" aria-labelledby="gallery-title">
        <div class="section-heading"><div><p class="eyebrow">{{ t.gallery.label }}</p><h2 id="gallery-title">{{ t.gallery.title[0] }}<br /><em>{{ t.gallery.title[1] }}</em></h2></div><p class="body-copy">{{ t.gallery.intro }}</p></div>
        <div class="gallery-grid"><figure v-for="(item, index) in t.gallery.items" :key="item.image" class="gallery-item"><div class="gallery-photo"><img :src="`/images/${item.image}.jpg`" :alt="item.alt" width="1100" height="733" loading="lazy" decoding="async" /><span class="gallery-number" aria-hidden="true">0{{ index + 1 }}</span></div><figcaption><h3>{{ item.title }}</h3><p>{{ item.subtitle }}</p></figcaption></figure></div>
      </section>

      <section class="sharing-section shell" aria-labelledby="sharing-title">
        <div class="sharing-copy"><p class="eyebrow">{{ t.sharing.label }}</p><h2 id="sharing-title">{{ t.sharing.title[0] }}<br /><em>{{ t.sharing.title[1] }}</em></h2><p class="body-copy">{{ t.sharing.text }}</p><a :href="project.instagram" class="text-link"><PhInstagramLogo :size="21" aria-hidden="true" focusable="false" />{{ t.sharing.cta }}<PhArrowUpRight :size="18" aria-hidden="true" focusable="false" /></a></div>
        <figure class="sharing-photo"><img src="/images/sharing.jpg" :alt="t.sharing.imageAlt" width="1100" height="890" loading="lazy" decoding="async" /></figure>
      </section>
    </main>

    <footer id="contacto" class="contact-section" aria-labelledby="contact-title">
      <div class="shell">
        <div class="contact-grid"><div><p class="eyebrow">{{ t.contact.label }}</p><h2 id="contact-title">{{ t.contact.title[0] }}<br /><em>{{ t.contact.title[1] }}</em></h2></div><div class="contact-copy"><p class="body-copy">{{ t.contact.text }}</p><a :href="`mailto:${project.email}`" class="contact-email" :aria-label="`${t.contact.emailLabel}: ${project.email}`"><PhEnvelopeSimple :size="22" aria-hidden="true" focusable="false" />{{ project.email }}<PhArrowUpRight :size="20" aria-hidden="true" focusable="false" /></a><a :href="project.instagram" class="contact-instagram"><PhInstagramLogo :size="19" aria-hidden="true" focusable="false" />{{ t.contact.instagram }}</a></div></div>
        <div class="footer-brand-row"><a href="#inicio" :aria-label="`${project.name} · ${t.home}`"><img src="/brand/logo-white.svg" alt="Tomeu Ferments" width="300" height="69" loading="lazy" /></a><p>{{ t.contact.note }}</p></div>
        <div class="footer-bottom"><p>© {{ year }} Tomeu Ferments. {{ t.contact.rights }}</p><a href="#inicio">{{ t.contact.back }}<PhArrowUp :size="15" aria-hidden="true" focusable="false" /></a></div>
      </div>
    </footer>
  </div>
</template>
